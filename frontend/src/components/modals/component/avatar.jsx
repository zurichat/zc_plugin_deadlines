import React from 'react'

const Avatar = ({ src, alt, isOnline }) => {
	const onlineStyle = isOnline
		? 'dtw-border-white dtw-bg-brand-primary'
		: 'dtw-border-black dtw-bg-white'
	return (
		<div className="dtw-relative dtw-h-10 dtw-w-10 dtw-overflow-visible dtw-object-center dtw-object-cover">
			<img
				src={src}
				alt={alt ? alt : 'avatar'}
				className="dtw-h-full dtw-w-full"
			/>
			<div
				className={`dtw-absolute dtw-rounded-1/2 dtw-border-2 ${onlineStyle} dtw-bottom-0 dtw--right-1 dtw-h-3 dtw-w-3 `}
			></div>
		</div>
	)
}

export default Avatar
