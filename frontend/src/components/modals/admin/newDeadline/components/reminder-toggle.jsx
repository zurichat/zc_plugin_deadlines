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
				enabled ? 'dtw-bg-green-200' : 'dtw-bg-gray-200'
			} dtw-relative dtw-inline-flex dtw-items-center dtw-h-6 dtw-rounded-full dtw-w-11`}
			{...props}
		>
			<span className="dtw-sr-only">Enable notifications</span>
			<span
				className={`${
					enabled ? 'dtw-translate-x-6' : 'dtw-translate-x-1'
				} dtw-inline-block dtw-w-4 dtw-h-4 dtw-transform dtw-bg-brand-primary dtw-rounded-full`}
			/>
		</Switch>
	)
}

export default ReminderToggle
