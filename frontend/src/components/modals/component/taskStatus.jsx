import React from 'react'

const StatusChanger = ({ currentStatus, setStatus, toggler }) => {
	// const radioTogglerOne = useRef()
	// const radioTogglerTwo = useRef()
	// const labelRef = useRef()
	// const [radio, setRadio] = useState({ state: 'null' })
	return (
		<div className="flex ">
			<div className="h-6 w-6 border-black border-2 rounded"></div>
			<label className="h-6 w-12 mx-3">
				<input
					className=" absolute -ml-20 opacity-0"
					type="checkbox"
					onChange={(event) => {
						console.log(toggler)
						setStatus({ status: event.target.checked })
						currentStatus
							? toggler.current.classList.add('ml-5')
							: toggler.current.classList.remove('ml-5')
					}}
				/>
				<div className="flex w-9 h-4 mt-1 border-2 border-black rounded-full bg-brand-primary relative">
					<div
						ref={toggler}
						className={
							currentStatus
								? 'flex w-3 duration-300 h-3 ml-5 rounded-full bg-brand-secondary relative'
								: 'flex w-3 duration-300 h-3 rounded-full bg-brand-secondary relative'
						}
					></div>
				</div>
			</label>

			{/* <label ref={labelRef} className="h-6 mx-3 flex border-2 border-black">
				<input
					type="radio"
					name="oneradio"
					value="Wild"
					onChange={(event) => {
						console.log(event.target.checked)
						console.log(event.target.value)
						setRadio({ state: event.target.value })
						radioTogglerOne.current.classList.remove('bg-brand-secondary')
					}}
				/>
				<div className="flex justify-center self-center w-4 h-4 border-2 border-black rounded-full relative">
					<div
						id="1"
						ref={radioTogglerOne}
						className={
							'flex-row self-center w-3 duration-300 h-3 rounded-full bg-brand-secondary relative'
						}
					></div>
				</div>
			</label>
			<label className="h-6 mx-3 border-2 flex border-black">
				<input
					type="radio"
					name="oneradio"
					value="Mild"
					className="mt-1"
					onChange={(event) => {
						console.log(event.target.checked)
						console.log(event.target.value)
						console.log(labelRef)
						setRadio({ state: event.target.value })
					}}
				/>
				<div className="flex justify-center self-center w-4 h-4 border-2 border-black rounded-full relative">
					<div
						id="2"
						ref={radioTogglerTwo}
						className={
							radio.state === 'Mild'
								? 'flex-row self-center w-3 duration-300 h-3 rounded-full bg-brand-secondary relative'
								: 'flex-row self-center w-3 duration-300 h-3 rounded-full relative'
						}
					></div>
				</div>
			</label> */}
		</div>
	)
}

export default StatusChanger
