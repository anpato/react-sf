import React from 'react'
import './FlexLayout.scss'
export const FlexLayout = ({ className, children, type }) => (
	<div className={`flex-layout ${className} ${type} `}>{children}</div>
)
