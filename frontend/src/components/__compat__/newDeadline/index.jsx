import React from 'react'
import Modal from '../../../components/modals/modalBase'
import ModalForm from './modalForm'

const NewDeadline = () => {
	return (
		<Modal title={'Create a New Deadline'}>
			<ModalForm />
		</Modal>
	)
}

export default NewDeadline
