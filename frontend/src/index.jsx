import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App.jsx'
import { ModalContextProvider } from './context/ModalContext'

ReactDOM.render(
	<React.StrictMode>
		<ModalContextProvider>
			<App />
		</ModalContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
