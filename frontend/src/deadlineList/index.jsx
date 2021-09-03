/* eslint-disable prettier/prettier */
import React from 'react'

const DeadlineList = () => {
	return (
	<div className="w-full border-2 border-black flex-col mt-9">
		<div className="border-2 border-black w-6/7 h-auto ml-7 flex justify-between sm:w-full sm:m-0">
			<div className="border-2 border-black w-1/7 h-8"></div>
			<div className="border-2 border-black w-1/7 h-8 hidden sm:block"></div>
			<div className="border-2 border-black w-1/7 h-8"></div>
		</div>
		<div className="hidden sm:flex  mt-6  w-full h-auto justify-between">
			<div className="border-2 border-black h-7 w-1/7"></div>
			<div className="border-2 border-black h-7 w-1/7"></div>
			<div className="border-2 border-black h-7 w-1/7"></div>
			<div className="border-2 border-black h-7 w-1/7"></div>
			<div className="border-2 border-black h-7 w-1/7"></div>
		</div>
		<div className="w-full h-0 border-black border-b border-2 mt-7"></div>
		<div className="hidden sm:flex  mt-6  w-full h-auto justify-between">
			<div className="border-2 border-black h-7 w-1/7"></div>
			<div className="border-2 border-black h-7 w-1/7"></div>
			<div className="border-2 border-black h-7 w-1/7"></div>
			<div className="border-2 border-black h-7 w-1/7"></div>
			<div className="border-2 border-black h-7 w-1/7"></div>
		</div>
		<div className="border-2 border-black mt-1 w-6/7 ml-7 h-auto flex justify-end sm:hidden">
			<div className="border-2 border-black w-2/7 h-8"></div>
		</div>
		<div className="sm:hidden border-2 border-black mt-1 w-6/7 ml-7 h-auto flex-col justify-start">
			<div className="border-2 border-black w-1/2 h-8" ></div>
			<div className="border-2 border-black w-1/2 h-8" ></div>
			<div className="border-2 border-black w-1/2 h-8" ></div>
		</div>
		<div className="sm:hidden border-2 border-black mt-1 w-6/7 ml-7 flex justify-around">
			<div className="border-2 border-black w-2/7 h-7"></div>
			<div className="border-2 border-black w-2/7 h-7"></div>
			<div className="border-2 border-black w-2/7 h-7"></div>
		</div>
		
		
		<div className="border-black border-2 mt-1 w-6/7 ml-7 flex justify-around h-auto sm:hidden">
			<div className="border-2 border-black"></div>
		</div>
	</div>
	)
}

export default DeadlineList
