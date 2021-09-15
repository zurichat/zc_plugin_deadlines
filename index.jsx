// import React, { useState } from 'react'
// import './overdue.css'
// import { useAllReminders } from '../../api/reminders'
// import ReminderCards from './ReminderCards'
// const OverduePage = () => {
// 	const [reminders, setReminders] = useState([])
// 	const { fetchedData } = useAllReminders()
// 	const array = fetchedData.data.data

// 	setReminders(array)
// 	console.log(array)
// 	return (
// 		<div>
// 			<div>Overdue </div>

// 			<div>
// 				{reminders.map((reminders) => {
// 					return (
// 						// eslint-disable-next-line react/jsx-key
// 						<p>{reminders['data']['assignee']['creator']['description']}</p>
// 					)
// 				})}
// 			</div>
// 		</div>
// 	)
// }

// export default OverduePage
