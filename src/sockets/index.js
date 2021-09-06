/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

// eslint-disable-next-line import/no-unresolved
import Centrifuge from 'centrifuge'

const centrifuge = new Centrifuge('ws://realtime.zuri.chat:16800/')

/**
    
    @param {data} data 
    @param {notificationType} type of centrifuge function (e.g subscribe, publish etc) 
    @param {[users] | users} users in the reminder's task to get notification
    @returns {number} sum of num1 and num2 
*/
const notifyFunction = (data, notificationType, users) => {
	/**
   data: {
     channel: "nameOfChannel",
     payload: {
            "text": "hello"
        }
   }
   */

	if (typeof data !== 'object' || typeof data !== 'string')
		throw new Error(
			'Invalid data format. Expected an array or object or string.'
		)

	if (typeof users !== 'object' || typeof users !== 'string')
		throw new Error(
			'Invalid data format. Expected an array or object or string.'
		)

	if (notificationType === 'subscribe') {
		centrifuge.subscribe('news', () => {
			console.log(data)
		})
	}

	if (notificationType === 'publish') {
		// const config =  {
		//   "method": "publish",
		//   "params": {
		//       "channel": "docs",
		//       "data": {
		//           "content": "1"
		//       }
		//   }
		// }

		// let res = await axios('ws://realtime.zuri.chat:16800/', config)
		// console.log(res);

		centrifuge.on('publish', () => {
			const { channel } = data
			const payload = JSON.stringify(data.payload)
			console.log('Publication from server-side channel', channel, payload)
		})
	}

	centrifuge.connect()
}
