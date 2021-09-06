import React from 'react'
import Avatar1 from '@assets/img/png/avatar1.png'
import Avatar2 from '@assets/img/png/avatar2.png'
// import Avatar3 from '@assets/img/png/avatar3.png'

const UserAvatar = ({ ...props }) => {
	return (
		<>
			<div
				className="flex flex-row -space-x-20 justify-center overflow-hidden"
				{...props}
			>
				<img
					src={Avatar2}
					className="bg-white overflow-hidden z-10 h-48 w-48 inline-block rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
					alt="Avatar 1"
				/>
				<img
					src={Avatar1}
					className="bg-white z-20 h-48 w-48 inline-block rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
					alt="Avatar 2"
				/>
				<img
					src={Avatar2}
					className="bg-white z-30 h-48 w-48 inline-block rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
					alt="Avatar 3"
				/>
				<img
					src={Avatar1}
					className="bg-white z-40 h-48 w-48 inline-block rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
					alt="Avatar 4"
				/>
			</div>
		</>
	)
}

export default UserAvatar
