/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
**/

require("dotenv").config();
import amqp from "amqplib";

/**
 * @description :: RabbitMQ class for handling all rabbitmq connections
 */


class MessageBrokerProvider {
  connection
  channel

  async init(amqpUrl) {
    if (this.connection) {
      return true;
    }

    if (!amqpUrl) {
      throw new Error("Rabbitmq connection string not found");
    }
    this.connection = await amqp.connect(amqpUrl);
    this.channel = await this.connection.createChannel();
    return true;
  }

  isEventBusInitialized() {
    if (!this.connection || !this.channel) {
      throw new Error("Connection not initialized");
    }
  }

  async close() {
    this.isEventBusInitialized();
    await this.connection.close();
  }

  getChannel() {
    this.isEventBusInitialized();
    return this.channel;
  }

  getConnection() {
    this.isEventBusInitialized();
    return this.connection;
  }

  /**
   * @description :: Emits an event via the passed-on `exchange`, works as a pub-sub
   * @param exchange
   * @param event
   * @param data
   * @param options
   * @returns {Promise<boolean>}
   */

  async emit(exchange, event, data, options) {
    this.isEventBusInitialized();
    await this.channel.assertExchange(exchange, "topic");
    const message = Buffer.from(JSON.stringify(data));
    return this.channel.publish(exchange, event, message, options);
  }

  async queue(queueName, data, options) {
    this.isEventBusInitialized();
    await this.channel.assertQueue(queueName, { durable: true });
    const message = Buffer.from(JSON.stringify(data));
    return this.channel.sendToQueue(queueName, message, {
      persistent: true,
      ...options,
    });
  }

  async on(exchange, event, callback) {
    this.isEventBusInitialized();
    await this.channel.assertExchange(exchange, "topic");
    const { queue } = await this.channel.assertQueue("", {
      exclusive: true,
    });
    await this.channel.bindQueue(queue, exchange, event);
    return this.channel.consume(queue, callback, {
      noAck: true,
    });
  }

  async consume(queueName, callback, limit, options) {
    this.isEventBusInitialized();

    //limit the number of concurrent jobs
    this.channel.prefetch(limit);
    await this.channel.assertQueue(queueName, { durable: true });
    return this.channel.consume(queueName, callback, options);
  }

  acknowledgeMessage(message) {
    this.isEventBusInitialized();
    this.channel.ack(message);
  }

  rejectMessage(message, requeue) {
    this.isEventBusInitialized();
    this.channel.nack(message, false, requeue);
  }
}

export default new MessageBrokerProvider();
