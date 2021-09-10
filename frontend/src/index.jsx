import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './styles/index.css'
import './styles/scroll.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { DeadlineStoreProvider } from './context/DeadlineStore'
import { ModalContextProvider } from './context/ModalContext'
import { SortProvider } from './components/sort'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalContextProvider>
				<DeadlineStoreProvider>
					<SortProvider>
						<App />
					</SortProvider>
				</DeadlineStoreProvider>
			</ModalContextProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('reminder_root')
)
