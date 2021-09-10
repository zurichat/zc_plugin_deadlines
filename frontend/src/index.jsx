import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App.jsx'
import { ModalContextProvider } from './context/ModalContext'
import { RemindersContextProvider } from './context/RemindersContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RemindersContextProvider>
				<ModalContextProvider>
					<App />
				</ModalContextProvider>
			</RemindersContextProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
