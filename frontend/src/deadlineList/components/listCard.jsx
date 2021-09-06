import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

import DueDate from './date/DueDate'
import RemainingTime from './date/RemainingTime'
import StartDate from './date/StartDate'
import DeadlineTitle from './DeadlineTitle'
import TextDescription from './TextDescription'
import UserIcon from '../../assets/img/png/users.png'

const ListCard = ({ title, description, dueDate, startDate }) => {
	const { modalData, setModalData } = useContext(ModalContext)
	return (
		<div className="flex flex-col md:flex-row mb-3 mx-3">
			<div
				className="md:w-2/7 mb-3 cursor-pointer"
				onClick={() => {
					setModalData({
						...modalData,
						modalShow: true,
						modalType: 'viewDeadline',
					})
				}}
			>
				<DeadlineTitle title={title} />
				<div className="flex mt-2">
					<div className="h-full w-4/6">
						<TextDescription description={description} />
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
				<StartDate startDate={startDate} />
				<div id="divider" className="h-full border-l-1/2" />
				<DueDate dueDate={dueDate} />
				<div id="divider" className="h-full border-l-1/2" />
				<RemainingTime dueDate={dueDate} />
			</div>
		</div>
	)
}

export default ListCard
