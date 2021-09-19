const fs = require('fs')
const recursive = require('recursive-readdir')

const changeForm = (path) => {
	const data = fs.readFileSync(path, 'utf8')
	console.log(data)
	let list_class = data.match(/(?<=className=")(.*)(?=")/g)
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
	list_class = list_class.map((classes) => {
		if (!classes.includes('dtw-')) {
			return `dtw-${classes}`
		} else {
			return classes
		}
	})

	let return_data = data.split(' ')
	for (i = 0; i < return_data.length - 1; i++) {
		for (j = 0; j < old_class.length - 1; j++) {
			if (
				return_data[i].trim().includes(old_class[j]) &&
				return_data[i] !== ''
			) {
				return_data[i] = return_data[i].replace(old_class[j], list_class[j])
				break
			}

			console.log('list_class', return_data[i])
		}
	}
	console.log('old_class', old_class)
	console.log('list_class', list_class)
	return_data = return_data.join(' ')

	return return_data
}

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
