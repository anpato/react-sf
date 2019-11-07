import React from 'react'
import { Button, TextInput, FormLayout } from './shared'

function App() {
	return (
		<>
			<FormLayout type='stacked'>
				<TextInput label='Username' required color='dark-danger' />
				<Button title='Button' variant='dark' />
			</FormLayout>
		</>
	)
}

export default App
