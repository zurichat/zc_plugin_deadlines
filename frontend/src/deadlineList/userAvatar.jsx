import React from 'react'
import Avatar1 from '@assets/img/png/avatar1.png'
import Avatar2 from '@assets/img/png/avatar2.png'
import Avatar3 from '@assets/img/png/avatar3.png'

const UserAvatar = ({ ...props }) => {
	return (
		<>
			<div className="flex flex-row -space-x-10" {...props}>
				<div className="h-full  m-1 mr-2 -ml-3 rounded-full ">
					<img src={Avatar1} className="rounded-full" alt="Avatar 1" />
				</div>
				<div className="bg-brand-avatar-yellow h-full  m-1 mr-2 -ml-3 rounded-full border border-brand-avatar-green">
					<img src={Avatar2} className="rounded-full" alt="Avatar 2" />
				</div>
				<div className="bg-brand-avatar-pink h-full  m-1 mr-2 -ml-3 rounded-full border border-brand-avatar-green">
					<img src={Avatar3} className="rounded-full" alt="Avatar 3" />
				</div>
				<div className="bg-brand-avatar-yellow h-full  m-1 mr-2 -ml-3 rounded-full border border-brand-avatar-green">
					<img src={Avatar1} className="rounded-full" alt="Avatar 4" />
				</div>
			</div>
		</>
	)
}
export default UserAvatar
