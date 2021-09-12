import { useState } from 'react'
import React from 'react'
import { Switch } from '@headlessui/react'

export default function CustomSwitch({ label, onSwitch }) {
	const [enabled, setEnabled] = useState(false)

	const whenSwitched = (e) => {
		setEnabled(e)
		onSwitch(e)
	}

	return (
		<Switch.Group>
			<div className="flex items-center">
				<Switch.Label className="mr-4">
					<h3 className="font-semibold text-base leading-none">{label}</h3>
				</Switch.Label>
				<Switch
					checked={enabled}
					onChange={whenSwitched}
					className={`${
						enabled ? 'bg-brand-primary' : 'bg-gray-400'
					} relative inline-flex items-center h-4 rounded-full w-10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary bg-opacity-25`}
				>
					<span
						className={`${
							enabled ? 'translate-x-6 bg-brand-primary' : 'translate-x-0'
						} inline-block w-6 h-6 transform rounded-full bg-gray-500 transition-transform`}
					/>
				</Switch>
			</div>
		</Switch.Group>
	)
}

//how to use
//<CustomSwitch label="turn it on" onSwitch={(BooleanSwitchOnOff) => {}} />
