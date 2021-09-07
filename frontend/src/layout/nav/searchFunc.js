import { useState } from 'react'
import { useAllReminders } from '../../api/reminders' // reminders

const { fetchedData } = useAllReminders()

const [filteredData, setFilteredData] = useState(fetchedData)

export const searchFunction = (searchTerm) => {
	const unfilteredData = filteredData
		? filteredData.data.data.result.map((data) => {
				return {
					title: data.title,
					description: data.description,
					dueDate: data.dueDate,
					startDate: data.startDate,
				}
		  })
		: null
	if (searchTerm !== '') {
		const result = unfilteredData.filter((data) => {
			return (
				data.title.includes(searchTerm.toLowerCase()) ||
				data.title.includes(searchTerm.toupperCase()) ||
				data.description.includes(searchTerm.toLowerCase()) ||
				data.description.includes(searchTerm.toupperCase()) ||
				data.title.includes(searchTerm) ||
				data.description.includes(searchTerm)
			)
		})
		setFilteredData(result)
	} else {
		setFilteredData(null)
	}
}
