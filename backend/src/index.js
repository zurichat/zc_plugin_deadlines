import env from './config/environment'
import app from './shared/http/server'

const start = async () => {
	try {
		app.listen(env.PORT, () =>
			console.log(`Server is up and running at ${env.PORT}`)
		)
	} catch (error) {
		console.log('error', error)
		process.exit(0)
	}
}

start()
