import React from 'react'
import './styles.css'

const Button = ({ label, type, leftButton, onClick }) => {
    return (
        <button onClick={onClick} className={`button ${type} ${!!leftButton && 'left-button'}`}>
            {label}
        </button>
    )
}

export default Button