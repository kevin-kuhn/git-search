import React from 'react'
import './styles.css'

const Input = ({ 
    placeholder = 'Pesquisar...',
    onChange,
    withIcon
}) => {
    const handleOnChange = event => onChange?.(event.target.value)

    const renderInputWithIcon = () =>
        <div></div>

    const renderInput = () => <input placeholder={placeholder} onChange={handleOnChange} className='input'/>

    return !!withIcon ? renderInputWithIcon() : renderInput()
}

export default Input