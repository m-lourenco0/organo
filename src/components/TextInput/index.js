import './style.css'
import { useState } from 'react'


const TextInput = (props) => {

    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
        console.log(value)
    }

    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input value={value} onChange={handleChange} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default TextInput