import React from 'react'
import avatar1 from './images/Rectangle 1.png'
import avatar2 from './images/Rectangle 2.png'
import avatar3 from './images/Rectangle 3.png'

export const greenNavBar = () => {
	return (
		<div className="bg-green-400 flex justify-between ml-0 mx-6 mt-8 mb-6 w-full py-2 px-6 relative">
			<form>
				<select className="bg-green-400 text-white">
					<option value="" selected className=" py-2 px-6">
						Company Deadlines
					</option>
				</select>
			</form>
			<div className="relative bg-white rounded-lg flex-row flex justify-between w-24 h-6">
				<div className="image-rack flex flex-row">
					<img className="relative pl-1" src={avatar1} alt="avatar1" />
					<img className="relative pl-0" src={avatar2} alt="avatar2" />
					<img className="relative pl-0" src={avatar3} alt="avatar3" />
				</div>
				<div className="number  pl-5">
					<p>300</p>
				</div>
			</div>
		</div>
	)
}
