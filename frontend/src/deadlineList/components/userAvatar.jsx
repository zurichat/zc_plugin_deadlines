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
		return (
			<div
				key={index}
				className={`object-cover ${translateX} bg-white rounded-1/2 m-0 object-center overflow-hidden h-full w-full border-4 border-brand-avatar-green`}
			>
				<img
          src={item}
          className="h-full w-full bg-white overflow-hidden z-10 rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
          alt={item}
          />
			</div>
		)
	})
	return (
		<>
			<div

			</div>
		</>
	)
}

export default UserAvatar
