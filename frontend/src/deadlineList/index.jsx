/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'

const DeadlineList = ({TheDeadline, SearchBar, SortBar, SetDeadline, Title, Details, Assignees, StartDate, DueDate, Timer}) => {
	return (
	<div className="w-full border-2 border-white flex-col mt-9 sm:w-4/6">
		<div className="border-2 border-white w-6/7 h-auto ml-7 flex justify-between sm:w-full sm:m-0">
			<div className="border-2 border-white w-auto h-auto"> <TheDeadline /></div>
			<div className="border-2 border-white w-auto h-auto hidden sm:block"><SearchBar /></div>
			<div className="border-2 border-white w-auto h-auto"><SortBar /></div>
		</div>
		<div className="mt-6 w-full h-auto justify-between sm:flex hidden">
			<div className="border-2 border-white h-7 w-1/7"><Title /></div>
			<div className="border-2 border-white h-7 w-1/7"><StartDate /></div>
			<div className="border-2 border-white h-7 w-1/7"><DueDate /></div>
			<div className="border-2 border-white h-7 w-1/7"><Timer /></div>
			<div className="border-2 border-white h-7 w-1/7"><Assignees /></div>
		</div>
		<div className="w-full h-0 border-black border-b border-2 mt-7 hidden sm:block"></div>
		<div className="hidden sm:flex  mt-6  w-full h-auto justify-between">
			<div className="border-2 border-white h-7 w-1/7"><Title /></div>
			<div className="border-2 border-white h-7 w-1/7"><StartDate /></div>
			<div className="border-2 border-white h-7 w-1/7"><DueDate /></div>
			<div className="border-2 border-white h-7 w-1/7"><Timer /></div>
			<div className="border-2 border-white h-7 w-1/7"><Assignees /></div>
		</div>
		<div className="border-2 border-white mt-1 w-6/7 ml-7 h-auto flex justify-end sm:hidden">
			<div className="border-2 border-white w-max h-auto">{SetDeadline}</div>
		</div>
		<div className="sm:hidden border-2 border-white mt-1 w-6/7 ml-7 h-auto flex-col justify-start">
			<div className="border-2 border-white w-max h-auto" ><Title /></div>
			<div className="border-2 border-white w-max h-auto" ><Details /></div>
			<div className="border-2 border-white w-max h-auto" ><Assignees /></div>
		</div>
		<div className="sm:hidden border-2 border-white mt-1 w-6/7 ml-7 flex justify-around">
			<div className="border-2 border-white w-max h-auto"><StartDate /></div>
			<div className="border-2 border-white w-max h-auto"><DueDate /></div>
			<div className="border-2 border-white w-max h-auto"><Timer /></div>
		</div>
		
		
		<div className="mt-1 w-6/7 ml-7 flex justify-around h-auto sm:hidden">
			<div className="border-2 border-black"></div>
		</div>
	</div>
	)
}
DeadlineList.propTypes = {
	TheDeadline: PropTypes.func.isRequired,
	SearchBar: PropTypes.func.isRequired,
	SortBar: PropTypes.func.isRequired,
	SetDeadline: PropTypes.func.isRequired,
	Title: PropTypes.func.isRequired,
	Details: PropTypes.func.isRequired,
	Assignees: PropTypes.func.isRequired,
	StartDate: PropTypes.func.isRequired,
	DueDate: PropTypes.func.isRequired,
	Timer: PropTypes.func.isRequired,
}


export default DeadlineList
