import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import './scroll.css'

import App from './__compat__/App__.jsx/index.js.js'
import { ModalContextProvider } from '../context/ModalContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalContextProvider>
				<App />
			</ModalContextProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
