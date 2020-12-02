import React, { useState } from 'react'
import { Button, Input } from '../../components'
import { ReactComponent as Git } from '../../../assets/svg/git-logo.svg'
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickButton } from '../../../actions'
import './styles.css'

const HomeScreen = ({ clickButton }) => {
    const [inputValue, setInputValue] = useState()
    const history = useHistory()

    const handleSeeAllClick = () => {
        clickButton('')
        history.push('/flow')
    }

    const handleSearchClick = () => {
        clickButton(inputValue)
        history.push('/flow')
    }
    
    const handleOnChange = value => setInputValue(value)

    return (
        <div className='home-container'>
            <div className='content-container'>
                <Git />
                <h1 className='title'>GitSearch</h1>
                <Input onChange={handleOnChange}/>
                <div className='button-container'>
                    <Button type='primary' label='Ver Todos' onClick={handleSeeAllClick} leftButton />
                    <Button type='secondary' label='Buscar' onClick={handleSearchClick}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue })

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)