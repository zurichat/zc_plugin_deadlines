module.exports = (query, data) => {
	const supportedQueryParams = [
		'duedate-asc',
		'duedate-desc',
		'newest-to-oldest',
		'oldest-to-newest',
	]
	if (!supportedQueryParams.includes(query)) return data

	if (query.toLowerCase() === 'duedate-asc') {
		data.sort((b, a) => {
			// console.log(a, b)
			const result =
				new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
			console.log(result)
			return result
		})
		return data
	}

	if (query.toLowerCase() === 'duedate-desc') {
		data.sort((a, b) => {
			// console.log(a, b)
			const result =
				new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
			console.log(result)
			return result
		})
		return data
	}

	if (query.toLowerCase() === 'newest-to-oldest') {
		data.sort((a, b) => {
			// console.log(a, b)
			const result =
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
			console.log(result)
			return result
		})
		return data
	}

	if (query.toLowerCase() === 'oldest-to-newest') {
		data.sort((b, a) => {
			// console.log(a, b)
			const result =
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
			console.log(result)
			return result
		})
		return data
	}

	return data
}
