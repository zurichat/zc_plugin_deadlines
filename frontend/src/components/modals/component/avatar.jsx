import React from 'react'

const Avatar = ({ src, alt, isOnline }) => {
	const onlineStyle = isOnline
		? 'border-white bg-brand-primary'
		: 'border-black bg-white'
	return (
		<div className="relative h-10 w-10 overflow-visible object-center object-cover">
			<img src={src} alt={alt ? alt : 'avatar'} className="h-full w-full" />
			<div
				className={`absolute rounded-1/2 border-2 ${onlineStyle} bottom-0 -right-1 h-3 w-3 `}
			></div>
		</div>
	)
}

export default Avatar
