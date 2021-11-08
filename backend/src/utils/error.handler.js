const wrapAsync = (func) => {
	return (req, res) => {
		func(req, res).catch(() => errr)
	}
}
