import React from 'react'
import './Button.scss'

const Button = ({ className, onClick, title, variant, type }) => (
	<button
		className={`button ${className} ${variant.toLowerCase()}`}
		onClick={onClick}
		type={type}>
		{title}
	</button>
)

export { Button }
