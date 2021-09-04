// import allReminders from '../datas'
import express from 'express'
import { data as allReminders } from '../datas'

const router = express()
const date = new Date()
const currentDate = date.getTime()
console.log(currentDate, 'kkliou')

const schedulerController = (req, res) => {
	const queue = []
	allReminders.map((element) => {
		if (element.payload.expiryDate) {
			const endDate = new Date(element.payload.expiryDate).getTime()
			const timeLeft = Math.ceil((endDate - currentDate) / 60000)
			if (timeLeft > 59 && timeLeft < 70) {
				queue.push(timeLeft)
				console.log('heyyyyyyyyyyy')
			}
			console.log(timeLeft)
		}
		return true
	})
	console.log(queue, 'uuytyt')
}

module.exports = schedulerController
