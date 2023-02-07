import React, { useState } from 'react'

const Render = () => {
	const [password, setPassword] = useState('')

	return (
		<>
			<input type="text" onChange={e => setPassword(e.target.value)} />

			{password.length < 8 ? (

				<div>Weak password</div>
			)
				:
			(
				<div>Strong password</div>
			)}
		</>
	)
}

export default Render
