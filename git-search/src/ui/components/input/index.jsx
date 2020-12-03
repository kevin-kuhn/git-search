import React, { useState, useEffect } from 'react'
import './styles.css'

const Input = ({
    placeholder = 'Pesquisar...',
    onChange,
    withIcon,
    newValue = ''
}) => {
    const [value, setValue] = useState(newValue)

    useEffect(() => setValue(newValue), [newValue])

    const handleOnChange = event => {
        setValue(event.target.value)
        onChange?.(event.target.value)
    }

    const renderInputWithIcon = () =>
        <div></div>

    const renderInput = () => 
        <input placeholder={placeholder} onChange={handleOnChange} value={value} className='input' />

    return !!withIcon ? renderInputWithIcon() : renderInput()
}

export default Input