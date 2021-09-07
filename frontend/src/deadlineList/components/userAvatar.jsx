import React from 'react'

const UserAvatar = ({ width, src, ...props }) => {
	const Avatar = src.slice(0, 4).map((item, index) => {
		let translateX = ''
		switch (index) {
			case 1:
				translateX = 'transform -translate-x-1/2'
				break
			case 2:
				translateX = 'transform -translate-x-full'
				break
			case 3:
				translateX = 'transform -translate-x-3/2'
		}
		let border = 0
		if (width <= 300) {
			border = 2
		} else if (width <= 400) {
			border = 4
		} else {
			border = 8
		}

		return (
			<div
				key={index}
				className={`object-cover ${translateX} bg-white rounded-full border-green-600 m-0 object-center overflow-hidden h-full w-full border-${border}`}
			>
				<img src={item} className="h-full w-full p-6 pb-0" alt="Avatar 1" />
			</div>
		)
	})
	return (
		<>
			<div
				className="inline-flex justify-stretch items-center w-full h-full"
				{...props}
				style={{ height: width / 4, width: `${width}px` }}
			>
				{Avatar}
			</div>
		</>
	)
}

export default UserAvatar
