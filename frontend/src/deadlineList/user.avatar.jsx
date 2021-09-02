/**
    Copyright 2021, ZC-Plugin-reminder.
    All rights reserved.
    Written by Oyekola Damilare Isaac 'odaisaac'
    [zurichat/zc_plugin_reminder]: Issue #203 Display Avatar of users assigned to a task.
**/

import React from 'react'

function UserAvatar() {
	return (
		<div className="flex -space-x-5 p-2 justify-center self-auto overflow-hidden">
			<img
				className="inline-block h-full w-10 bg-red-50 rounded-full ring-2 ring-green-600"
				src="https://avataaars.io/?avatarStyle=Transparen&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Wink&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Pale"
				alt=""
			/>

			<img
				className="inline-block h-10 w-10 bg-red-50 rounded-full ring-2 ring-green-600"
				src="https://avataaars.io/?avatarStyle=Transparen&topType=LongHairMiaWallace&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelYellow&eyeType=WinkWacky&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Light"
				alt=""
			/>

			<img
				className="inline-block h-10 w-10 bg-red-50 rounded-full ring-2 ring-green-600"
				src="https://avataaars.io/?avatarStyle=Transparen&topType=Hijab&accessoriesType=Prescription01&hatColor=Black&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Yellow"
				alt=""
			/>

			<img
				className="inline-block h-10 w-10 bg-red-50 rounded-full ring-2 ring-green-600"
				src="https://avataaars.io/?avatarStyle=Transparen&topType=Eyepatch&facialHairType=Blank&clotheType=BlazerShirt&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light"
				alt=""
			/>
		</div>
	)
}
export default UserAvatar
