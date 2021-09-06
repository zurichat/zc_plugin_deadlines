import React from 'react'
import Avatar1 from '../../assets/img/png/avatar1.png'
import Avatar2 from '../../assets/img/png/avatar2.png'
// import Avatar3 from '@assets/img/png/avatar3.png'

const UserAvatar = ({ ...props }) => {
	return (
		<>
			<div
				className="flex flex-row -space-x-20 justify-center overflow-hidden"
				{...props}
			>
				<div className="h-full m-1 mr-2 -ml-3 rounded-full inline-block p-0">
					<img
						src={Avatar2}
						className="bg-white overflow-hidden z-10 rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
						alt="Avatar 1"
					/>
				</div>
				<div className="h-full  m-1 mr-2 -ml-3 rounded-full inline-block">
					<img
						src={Avatar1}
						className="bg-white overflow-hidden z-10 rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
						alt="Avatar 1"
					/>
				</div>
				<div className="h-full  m-1 mr-2 -ml-3 rounded-full inline-block">
					<img
						src={Avatar2}
						className="bg-white overflow-hidden z-10 rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
						alt="Avatar 1"
					/>
				</div>
				<div className="h-full  m-1 mr-2 -ml-3 rounded-full inline-block">
					<img
						src={Avatar1}
						className="bg-white overflow-hidden z-10 rounded-full border-8 border-green-500 p-5 pb-0 ring-1 ring-green-600"
						alt="Avatar 1"
					/>
				</div>
			</div>
		</>
	)
}

export default UserAvatar
