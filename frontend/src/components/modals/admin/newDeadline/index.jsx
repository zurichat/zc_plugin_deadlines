import React from 'react'
import ModalBase from '../../modalBase'
import ModalForm from './modalForm'

const NewDeadline = () => {
	return (
		<ModalBase title={'Create a New Deadline'}>
			<ModalForm />
		</ModalBase>
	)
}

export default NewDeadline
