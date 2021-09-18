import React from 'react'
import App from './App'

import { ModalContextProvider } from './context/ModalContext'
import { QueryClient, QueryClientProvider } from 'react-query'

import './styles/index.css'
import './styles/scroll.css'
import 'react-activity/dist/Spinner.css'

const Base = () => {
	const queryClient = new QueryClient()

	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ModalContextProvider>
					<App />
				</ModalContextProvider>
			</QueryClientProvider>
		</React.StrictMode>
	)
}

export default Base
