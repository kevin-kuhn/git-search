import React, { useState, useEffect } from 'react'
import { ReactComponent as Magnifier } from '../../../assets/svg/magnifier.svg'
import './styles.css'

const Input = ({
    placeholder = 'Pesquisar...',
    onChange,
    withIcon,
    onBlur,
    newValue = ''
}) => {
    const [value, setValue] = useState(newValue)

    useEffect(() => setValue(newValue), [newValue])

    const handleOnChange = event => {
        setValue(event.target.value)
        onChange?.(event.target.value)
    }

    const renderInputWithIcon = () =>
        <div className="container-input ">
            <div className="icon-container">
                <Magnifier />
            </div>
            {renderInput()}
        </div>

    const renderInput = () =>
        <input placeholder={placeholder} onBlur={onBlur} onChange={handleOnChange} value={value} className={!!withIcon ? 'input-icon' : 'input'} />

    return !!withIcon ? renderInputWithIcon() : renderInput()
}

export default Input