import React from 'react'

const UserAvatar = ({ src, ...props }) => {
	const Avatar = src.slice(0, 4).map((item, index) => {
		const translateX = index === 0 ? '' : `transform -translate-x-${index}/4`
		return (
			<div
				key={index}
				className={`object-cover ${translateX} rounded-1/2 object-center h-full w-1/4 overflow-hidden border-4 border-brand-avatar-green`}
			>
				<img src={item} className="h-full w-full" alt="Avatar 1" />
			</div>
		)
	})
	return (
		<>
			<div
				className="flex justify-items-stretch items-stretch w-full h-full"
				{...props}
			>
				{Avatar}
			</div>
		</>
	)
}
export default UserAvatar
