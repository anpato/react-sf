import React from 'react'
import './FormLayout.scss'
export const FormLayout = ({ type, children, onSubmit }) => (
	<form onSubmit={(e) => onSubmit(e)} className={`form ${type}`}>
		{children}
	</form>
)
