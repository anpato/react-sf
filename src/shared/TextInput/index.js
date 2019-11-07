import React from 'react'
import './TextInput.scss'

export const TextInput = ({
	label,
	onChange,
	name,
	value,
	type,
	required,
	color
}) => (
	<div className={`text-input ${color}-input`}>
		<input
			// onChange={(e) => onChange(e)}
			name={name}
			value={value}
			type={type}
			required={required}
		/>
		<label htmlFor={name}>
			<span>{label}</span>
		</label>
	</div>
)
