import React, { useState } from 'react'
import Select from 'react-select'
const colors = [
  { value: 1,label: 'Black' },
  { value: 2,label: 'Blue' },
  { value: 3,label: 'Yellow' },
  { value: 4,label: 'Orange' },
  { value: 5,label: 'Green' },
]
const Color = () => {
	let [bgColor, setBgColor] = useState('grey')
	return (
		<div style={{ background:bgColor , height:'25vh'}}>
			<Select options={colors} onChange={ (e)=>setBgColor(e.label)} />
		</div>
	)
}

export default Color
