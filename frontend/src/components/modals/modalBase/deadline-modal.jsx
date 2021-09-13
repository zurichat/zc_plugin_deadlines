import React from 'react'
import ModalBase from '.'
import DeadlineForm from './deadline-form'

const DeadlineModal = () => {
	return (
		<ModalBase title={'Create New Deadline'}>
			<DeadlineForm />
		</ModalBase>
	)
}

export default DeadlineModal
