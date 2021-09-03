/**
    Copyright 2021, ZC-Plugin-reminder.
    All rights reserved.
    Written by Oyekola Damilare Isaac 'odaisaac'
    [zurichat/zc_plugin_reminder]: Issue #203 Display Avatar of users assigned to a task.
**/

import React from 'react'

const UserAvatar = () => {
	return (
		<>
			<div className="flex flex-row-reverse -space-x-2 justify-center self-auto mt-3">
				<div className="relative w-5 h-5  m-1 mr-2 -ml-3 rounded-full ">
					<img class="rounded-full" alt="Avatar 1" src="images/avatar3.png" />
				</div>
				<div className="relative bg-yellow w-5 h-5  m-1 mr-2 -ml-3 rounded-full border border-green">
					<img class="rounded-full" alt="Avatar 2" src="images/avatar1.png" />
				</div>
				<div className="relative bg-pink w-5 h-5  m-1 mr-2 -ml-3 rounded-full border border-green">
					<img class="rounded-full" alt="Avatar 3" src="images/avatar2.png" />
				</div>
				<div className="relative bg-yellow w-5 h-5  m-1 mr-2 -ml-3 rounded-full border border-green">
					<img class="rounded-full" alt="Avatar 4" src="images/avatar1.png" />
				</div>
			</div>
		</>
	)
}
export default UserAvatar
