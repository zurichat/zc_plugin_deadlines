import React from 'react'

const UserAvatar = () => {
	return (
		<>
			<div className="flex flex-row-reverse -space-x-2 justify-center self-auto mt-3">
				<div className="relative h-full  m-1 mr-2 -ml-3 rounded-full ">
					<img
						src={'@assets/img/png/avatar3.png'}
						className="rounded-full"
						alt="Avatar 1"
					/>
				</div>
				<div className="relative bg-brand-avatar-yellow h-full  m-1 mr-2 -ml-3 rounded-full border border-brand-avatar-green">
					<img
						src={'@assets/img/png/avatar1.png'}
						className="rounded-full"
						alt="Avatar 2"
					/>
				</div>
				<div className="relative bg-brand-avatar-pink h-full  m-1 mr-2 -ml-3 rounded-full border border-brand-avatar-green">
					<img
						src={'@assets/img/png/avatar2.png'}
						className="rounded-full"
						alt="Avatar 3"
					/>
				</div>
				<div className="relative bg-brand-avatar-yellow h-full  m-1 mr-2 -ml-3 rounded-full border border-brand-avatar-green">
					<img
						src={'@assets/img/png/avatar1.png'}
						className="rounded-full"
						alt="Avatar 4"
					/>
				</div>
			</div>
		</>
	)
}
export default UserAvatar
