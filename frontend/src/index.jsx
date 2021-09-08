import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UIContextProvider } from './context/UIContext'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<UIContextProvider>
				<App />
			</UIContextProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
