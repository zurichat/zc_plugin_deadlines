/* eslint-disable prettier/prettier */
import React from 'react'

const DeadlineList = () => {
	return (
	<div className="w-full border-2 border-white flex-col mt-9 sm:w-4/6">
		<div className="border-2 border-white w-6/7 h-auto ml-7 flex justify-between sm:w-full sm:m-0">
			<div className="border-2 border-white w-auto h-auto">DEADLINES</div>
			<div className="border-2 border-white w-auto h-auto hidden sm:block">SEARCH</div>
			<div className="border-2 border-white w-auto h-auto">SORT</div>
		</div>
		<div className="mt-6 w-full h-auto justify-between sm:flex hidden">
			<div className="border-2 border-white h-7 w-1/7">TITLE</div>
			<div className="border-2 border-white h-7 w-1/7">DATE</div>
			<div className="border-2 border-white h-7 w-1/7">DUE</div>
			<div className="border-2 border-white h-7 w-1/7">HOURS</div>
			<div className="border-2 border-white h-7 w-1/7">ASSIGNEE</div>
		</div>
		<div className="w-full h-0 border-black border-b border-2 mt-7 hidden sm:block"></div>
		<div className="hidden sm:flex  mt-6  w-full h-auto justify-between">
			<div className="border-2 border-white h-7 w-1/7">TITLE</div>
			<div className="border-2 border-white h-7 w-1/7">DATE</div>
			<div className="border-2 border-white h-7 w-1/7">DUE</div>
			<div className="border-2 border-white h-7 w-1/7">HOURS</div>
			<div className="border-2 border-white h-7 w-1/7">ASSIGNEE</div>
		</div>
		<div className="border-2 border-white mt-1 w-6/7 ml-7 h-auto flex justify-end sm:hidden">
			<div className="border-2 border-white w-max h-auto">SET DEADLINE</div>
		</div>
		<div className="sm:hidden border-2 border-white mt-1 w-6/7 ml-7 h-auto flex-col justify-start">
			<div className="border-2 border-white w-max h-auto" >TITLE</div>
			<div className="border-2 border-white w-max h-auto" >DETAILS</div>
			<div className="border-2 border-white w-max h-auto" >ASSIGNEES</div>
		</div>
		<div className="sm:hidden border-2 border-white mt-1 w-6/7 ml-7 flex justify-around">
			<div className="border-2 border-white w-max h-auto">START DATE</div>
			<div className="border-2 border-white w-max h-auto">DUE DATE</div>
			<div className="border-2 border-white w-max h-auto">TIME</div>
		</div>
		
		
		<div className="border-black border-2 mt-1 w-6/7 ml-7 flex justify-around h-auto sm:hidden">
			<div className="border-2 border-black"></div>
		</div>
	</div>
	)
}

export default DeadlineList
