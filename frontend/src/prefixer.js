const fs = require('fs')
const recursive = require('recursive-readdir')

const changeForm = (path) => {
	const data = fs.readFileSync(path, 'utf8')
	let list_class = data.match(/(?<=className=")(.*)(?=")/g)

	if (!list_class) return data

	list_class = list_class.map((classes) => {
		return classes.split(' ')
	})

	//eslint-disable-next-line
	list_class = [].concat.apply([], list_class)
	list_class = list_class.filter((el) => el !== '')
	list_class = list_class.map((classes) => {
		if (classes.includes(':')) {
			return classes.split(':')[1]
		} else {
			return classes
		}
	})

	//eslint-disable-next-line
	list_class = [].concat.apply([], list_class)
	list_class = list_class.filter((el) => el !== '')
	const old_class = list_class
	// console.log('old', old_class)

	list_class = list_class.map((classes) => {
		if (!classes.includes('dtw-')) {
			return `dtw-${classes}`
		} else {
			return classes
		}
	})
	// console.log('new', list_class)

	let return_data = data.split(' ')
	for (i = 0; i < return_data.length; i++) {
		for (j = 0; j < old_class.length; j++) {
			if (
				return_data[i].trim().includes(old_class[j]) &&
				return_data[i] !== ''
			) {
				if (old_class[j] === 'border-1/2') console.log('border')
				return_data[i] = return_data[i].replace(old_class[j], list_class[j])
				break
			}
		}
	}
	return_data = return_data.join(' ')

	// console.log(return_data)
	return return_data
}
// changeForm('./components/deadlineCard/index.jsx')

const ignoreFunc = (file, stats) => {
	return !stats.isDirectory() && !file.endsWith('jsx')
}

recursive('.', [ignoreFunc], (err, files) => {
	if (err) throw err
	files.forEach((file) => {
		const updated = changeForm(file)

		fs.writeFile(file, updated, function (err) {
			if (err) throw err
			console.log('Updated ', file)
		})
	})
})
