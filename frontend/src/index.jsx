import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './styles/index.css'
import './styles/scroll.css'
import 'react-activity/dist/Spinner.css'

import { ModalContextProvider } from './context/ModalContext'
// import { RemindersContextProvider } from './context/RemindersContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			{/* <RemindersContextProvider> */}
			<ModalContextProvider>
				<App />
			</ModalContextProvider>
			{/* </RemindersContextProvider> */}
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('deadline_root')
)
