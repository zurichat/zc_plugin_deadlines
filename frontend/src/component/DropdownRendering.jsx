import React from 'react'
import Dropdown from './Dropdown'
import assignes from './Assigne'

const DropdownRendering = () => {
    return (
        <div className="h-screen flex justify-center items-center">
			<Dropdown assignes={assignes} />
		</div>
    )
}

export default DropdownRendering
