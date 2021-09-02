/**
    Copyright 2021, ZC-Plugin-reminder.
    All rights reserved.
    Written by Oyekola Damilare Isaac 'odaisaac'
    [zurichat/zc_plugin_reminder]: Issue #203 Display Avatar of users assigned to a task.
**/

import React from 'react'

function UserAvatar() {
	return (
		<div className="flex -space-x-2 overflow-hidden">
			<img
				className="inline-block h-10 w-10 rounded-full ring-2 ring-green-600"
				src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Wink&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Pale"
				alt=""
			/>
			<img
				className="inline-block h-10 w-10 rounded-full ring-2 ring-green-600"
				src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
			<img
				className="inline-block h-10 w-10 rounded-full ring-2 ring-green-600"
				src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
				alt=""
			/>
			<img
				className="inline-block h-10 w-10 rounded-full ring-2 ring-green-600"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
		</div>
	)
}
export default UserAvatar
