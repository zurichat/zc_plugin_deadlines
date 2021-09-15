import React from 'react'

const Avatar = ({ src, alt }) => {
	return (
		<div className="h-10 w-10 rounded-1/2 overflow-hidden object-center object-cover">
			<img src={src} alt={alt ? alt : 'avatar'} className="h-full w-full" />
		</div>
	)
}

export default Avatar
