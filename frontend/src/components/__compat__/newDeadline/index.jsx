import React from 'react'
import Modal from '../../modals'
import ModalForm from './modalForm'

const NewDeadline = () => {
	return (
		<Modal title={'Create a New Deadline'}>
			<ModalForm />
		</Modal>
	)
}

export default NewDeadline