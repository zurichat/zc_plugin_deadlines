/* eslint-disable prettier/prettier */
import React from 'react'
// import PropTypes from 'prop-types'

const DeadlineList = ({list, deadlinesHeader, searchBar, sortBar}) => {
	return (
	<div className="w-full border-2 border-white flex-col mt-8 sm:w-4/6 sm:mt-1">
		 <div className="border-2 border-white w-6/7 h-auto ml-7 flex justify-between sm:w-full sm:m-0">
			<div className="border-2 border-white w-auto h-auto"> {deadlinesHeader} </div>
			<div className="border-2 border-white w-auto h-auto hidden sm:block">{searchBar} </div>
			<div className="border-2 border-white w-auto h-auto">{sortBar} </div>
		</div>
		
		<div className="mt-6 w-full h-auto justify-between sm:flex hidden">
			<div className="border-2 border-white h-7 w-1/7">Title</div>
			<div className="border-2 border-white h-7 w-1/7">Date Created</div>
			<div className="border-2 border-white h-7 w-1/7">Due Date</div>
			<div className="border-2 border-white h-7 w-1/7">Hours Left</div>
			<div className="border-2 border-white h-7 w-1/7">Assignees</div>
		</div>
		<div className="w-full h-0 border-gray-leftnav border-b border-2 mt-7 hidden sm:block"></div>
		{list.map(deadline => (
			<>
			<div className="hidden sm:flex  mt-6  w-full h-auto justify-between">
			<div className="border-2 border-white h-7 w-1/7">{deadline.title}</div>
			<div className="border-2 border-white h-7 w-1/7">{deadline.dateCreated}</div>
			<div className="border-2 border-white h-7 w-1/7">{deadline.dueDate}</div>
			<div className="border-2 border-white h-7 w-1/7">{deadline.hoursLeft}</div>
			<div className="border-2 border-white h-7 w-1/7">{deadline.assignees}</div>
		</div>
		<div className="sm:hidden border-2 border-white mt-1 w-6/7 ml-7 h-auto flex-col justify-start">
			<div className="border-2 border-white w-max h-auto" >{deadline.title}</div>
			<div className="border-2 border-white w-max h-auto" >{deadline.details}</div>
			<div className="border-2 border-white w-max h-auto" >{deadline.assignees}</div>
		</div>
		<div className="sm:hidden border-2 border-white mt-1 w-6/7 ml-7 flex justify-around">
			<div className="border-2 border-white w-max h-auto">{deadline.dateCreated}</div>
			<div className="border-2 border-white w-max h-auto">{deadline.dueDate}</div>
			<div className="border-2 border-white w-max h-auto">{deadline.hoursLeft}</div>
		</div>
		</>
		))}
		
		
		
		<div className="mt-1 w-6/7 ml-7 flex justify-around h-auto sm:hidden">
			<div className="border-2 border-black"></div>
		</div>
	</div>
	)
}


export default DeadlineList

