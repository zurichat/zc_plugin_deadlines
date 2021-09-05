import React, { useContext } from 'react'

import DueDate from './components/date/DueDate'
import RemainingTime from './components/date/RemainingTime'
import StartDate from './components/date/StartDate'
import DeadlineTitle from './components/DeadlineTitle'
import { ModalContext } from '../context/ModalContext'
import TextDescription from './TextDescription'
import UserIcon from '../assets/img/png/users.png'

const ListCard = () => {
	const { modalData, setModalData } = useContext(ModalContext)
	return (
		<div className="flex flex-col md:flex-row mb-3 mx-3 cursor-default">
			<div
				className="md:w-2/7 mb-3"
				onClick={() => {
					setModalData({ ...modalData, modalShow: true })
				}}
			>
				<DeadlineTitle title="Designing Zuri's Dashboard" />
				<div className="flex mt-2">
					<div className="h-full w-4/6">
						<TextDescription description="This task will be a sprint, we are to use the design lorem ipsum" />
					</div>
					<div className="full w-2/6">
						<div className="flex md:ml-2">
							<img src={UserIcon} alt="users" className="w-16 h-8" />
							<img src={UserIcon} alt="users" className="w-16 h-8 -ml-8" />
						</div>
					</div>
				</div>
			</div>
			<div className="md:w-1/7" />
			<div className="md:w-4/7 flex justify-between">
				<StartDate />
				<div id="divider" className="h-full border-l-1/2" />
				<DueDate />
				<div id="divider" className="h-full border-l-1/2" />
				<RemainingTime />
			</div>
		</div>
	)
}

export default ListCard
