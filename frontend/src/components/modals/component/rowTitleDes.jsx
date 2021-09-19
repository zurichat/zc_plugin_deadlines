import React from 'react'

const RowTitleDes = ({ title, writeUp }) => {
	return (
		<div className="dtw-flex dtw-gap-2 dtw-justify-start">
			<div>
				<h3 className="dtw-font-semibold dtw-text-sm dtw-leading-none">
					{title}
				</h3>
			</div>
			<div className="dtw-text-xs dtw-leading-none dtw-self-center">
				{writeUp}
			</div>
		</div>
	)
}

export default RowTitleDes
