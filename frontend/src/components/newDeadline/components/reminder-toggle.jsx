import React from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

const ReminderToggle = ({ ...props }) => {
	const [enabled, setEnabled] = useState(false)

	return (
		<Switch
			checked={enabled}
			onChange={setEnabled}
			className={`${
				enabled ? 'bg-green-200' : 'bg-gray-200'
			} relative inline-flex items-center h-6 rounded-full w-11`}
			{...props}
		>
			<span className="sr-only">Enable notifications</span>
			<span
				className={`${
					enabled ? 'translate-x-6' : 'translate-x-1'
				} inline-block w-4 h-4 transform bg-brand-primary rounded-full`}
			/>
		</Switch>
	)
}

export default ReminderToggle
