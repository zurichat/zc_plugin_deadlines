import React from 'react'
import UserIcon from '../../assets/img/png/users.png'

const TitleAvatar = ({ title, description }) => {
	return (
		<div className="flex flex-col md:flex-row my-6 md:my-3">
			<div>
				<h2 className="font-bold text-xl text-left mb-1">{title}</h2>
				<p className="text-sm mb-2 text-brand-text-leftNav">{description}</p>
			</div>
			<div className="flex md:ml-2">
				<img src={UserIcon} alt="users" className="w-16 h-8" />
				<img src={UserIcon} alt="users" className="w-16 h-8 -ml-8" />
			</div>
		</div>
	)
}

export default TitleAvatar
