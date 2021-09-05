import React from 'react'
import Avatar1 from '@assets/img/png/avatar1.png'
import Avatar2 from '@assets/img/png/avatar2.png'
import Avatar3 from '@assets/img/png/avatar3.png'

const UserAvatar = () => {
	return (
		<>
			<div className="flex -space-x-6 justify-center">
				<div className="flex relative w-10 h-10 bg-brand-avatar-pink justify-center self-auto m-2 mr-2 ml-3 rounded-full border border-brand-avatar-green">
					<img className="rounded-full" alt="Avatar 1" src={Avatar1} />
				</div>
				<div className="flex relative w-10 h-10 bg-brand-avatar-yellow justify-center self-auto m-2 mr-2 ml-3 rounded-full border border-brand-avatar-green">
					<img className="rounded-full" alt="Avatar 3" src={Avatar3} />
				</div>
				<div className="flex relative w-10 h-10 bg-brand-avatar-pink justify-center self-auto m-2 mr-2 ml-3 rounded-full border border-brand-avatar-green">
					<img className="rounded-full" alt="Avatar 2" src={Avatar2} />
				</div>
				<div className="flex relative w-10 h-10 bg-brand-avatar-yellow justify-center self-auto m-2 mr-2 ml-3 rounded-full  border border-brand-avatar-green">
					<img className="rounded-full" alt="Avatar 1" src={Avatar1} />
				</div>
			</div>
		</>
	)
}
export default UserAvatar
