"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/json/stringify"));

var _amqplib = _interopRequireDefault(require("amqplib"));

/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
require('dotenv').config();
/**
 * @description :: RabbitMQ class for handling all rabbitmq connections
 */


class MessageBrokerProvider {
  async init(amqpUrl) {
    if (this.connection) {
      return true;
    }

    if (!amqpUrl) {
      throw new Error('Rabbitmq connection string not found');
    }

    this.connection = await _amqplib.default.connect(amqpUrl);
    this.channel = await this.connection.createChannel();
    return true;
  }

  isEventBusInitialized() {
    if (!this.connection || !this.channel) {
      throw new Error('Connection not initialized');
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
    await this.channel.assertExchange(exchange, 'topic');
    const message = Buffer.from((0, _stringify.default)(data));
    return this.channel.publish(exchange, event, message, options);
  }

  async queue(queueName, data, options) {
    this.isEventBusInitialized();
    await this.channel.assertQueue(queueName, {
      durable: true
    });
    const message = Buffer.from((0, _stringify.default)(data));
    return this.channel.sendToQueue(queueName, message, {
      persistent: true,
      ...options
    });
  }

  async on(exchange, event, callback) {
    this.isEventBusInitialized();
    await this.channel.assertExchange(exchange, 'topic');
    const {
      queue
    } = await this.channel.assertQueue('', {
      exclusive: true
    });
    await this.channel.bindQueue(queue, exchange, event);
    return this.channel.consume(queue, callback, {
      noAck: true
    });
  }

  async consume(queueName, callback, limit, options) {
    this.isEventBusInitialized(); // limit the number of concurrent jobs

    this.channel.prefetch(limit);
    await this.channel.assertQueue(queueName, {
      durable: true
    });
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

var _default = new MessageBrokerProvider();

exports.default = _default;
//# sourceMappingURL=RabbitMQProvider.js.map