import React, { useState } from 'react'

const DueDatePicker = ({ ...props }) => {
	const [value, setValue] = useState(new Date())

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<div className="w-full flex flex-col" {...props}>
			<label className="text-left flex items-center" htmlFor="due">
				<div className="mr-[.4rem] w-[1rem] h-[1rem] rounded-full bg-[#EAF2FD] flex justify-center items-center">
					<svg
						width="9"
						height="8"
						viewBox="0 0 9 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.29914 0.299561H6.62728V1.01845C6.62728 1.16223 6.5153 1.25809 6.40333 1.25809C6.29135 1.25809 6.17937 1.16223 6.17937 1.01845V0.299561H2.5961V1.01845C2.5961 1.16223 2.48412 1.25809 2.37214 1.25809C2.26017 1.25809 2.14819 1.16223 2.14819 1.01845V0.299561H1.47632C1.14039 0.299561 0.894043 0.611081 0.894043 1.01845V1.88113H8.06059V1.01845C8.06059 0.611081 7.65747 0.299561 7.29914 0.299561ZM0.894043 2.38435V6.76961C0.894043 7.20094 1.14039 7.4885 1.49872 7.4885H7.32154C7.67987 7.4885 8.08298 7.17698 8.08298 6.76961V2.38435H0.894043ZM2.88724 6.41016H2.34975C2.26017 6.41016 2.17058 6.33827 2.17058 6.21846V5.61938C2.17058 5.52352 2.23777 5.42767 2.34975 5.42767H2.90963C2.99922 5.42767 3.0888 5.49956 3.0888 5.61938V6.21846C3.0664 6.33827 2.99922 6.41016 2.88724 6.41016ZM2.88724 4.25348H2.34975C2.26017 4.25348 2.17058 4.18159 2.17058 4.06177V3.46269C2.17058 3.36684 2.23777 3.27099 2.34975 3.27099H2.90963C2.99922 3.27099 3.0888 3.34288 3.0888 3.46269V4.06177C3.0664 4.18159 2.99922 4.25348 2.88724 4.25348ZM4.67887 6.41016H4.11899C4.02941 6.41016 3.93982 6.33827 3.93982 6.21846V5.61938C3.93982 5.52352 4.00701 5.42767 4.11899 5.42767H4.67887C4.76846 5.42767 4.85804 5.49956 4.85804 5.61938V6.21846C4.85804 6.33827 4.79085 6.41016 4.67887 6.41016ZM4.67887 4.25348H4.11899C4.02941 4.25348 3.93982 4.18159 3.93982 4.06177V3.46269C3.93982 3.36684 4.00701 3.27099 4.11899 3.27099H4.67887C4.76846 3.27099 4.85804 3.34288 4.85804 3.46269V4.06177C4.85804 4.18159 4.79085 4.25348 4.67887 4.25348ZM6.47051 6.41016H5.91062C5.82104 6.41016 5.73146 6.33827 5.73146 6.21846V5.61938C5.73146 5.52352 5.79865 5.42767 5.91062 5.42767H6.47051C6.56009 5.42767 6.64967 5.49956 6.64967 5.61938V6.21846C6.64967 6.33827 6.58249 6.41016 6.47051 6.41016ZM6.47051 4.25348H5.91062C5.82104 4.25348 5.73146 4.18159 5.73146 4.06177V3.46269C5.73146 3.36684 5.79865 3.27099 5.91062 3.27099H6.47051C6.56009 3.27099 6.64967 3.34288 6.64967 3.46269V4.06177C6.64967 4.18159 6.58249 4.25348 6.47051 4.25348Z"
							fill="#2F80ED"
						/>
					</svg>
				</div>
				<span className="block font-bold text-xs text-[#242424">Due Date</span>
			</label>
			<div className="text-left">
				<input
					className="h-[1%] w-full text-[#24242499] tracking-wide  uppercase mt-[0.75rem] p-[1rem] font-normal text-xs bg-[#FBFCFC] border rounded-md border-[#99999933]"
					type="date"
					id="due"
					value={value}
					onChange={handleChange}
				/>
			</div>
		</div>
	)
}

export default DueDatePicker