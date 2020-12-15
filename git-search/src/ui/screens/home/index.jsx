import React, { useState, useEffect } from 'react'
import { Button, Input } from '../../components'
import { ReactComponent as Git } from '../../../assets/svg/git-logo.svg'
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchUser } from '../../../actions'
import './styles.css'

const HomeScreen = ({ searchUser, temporaryUser }) => {
    const [inputValue, setInputValue] = useState()
    const [error, setError] = useState(false)
    const history = useHistory()

    useEffect(() => setInputValue(temporaryUser), [temporaryUser])

    const redirect = () => {
        setError(false)
        history.push('/flow')
    }

    const handleSeeAllClick = () => {
        searchUser('')
        redirect()
    }

    const handleSearchClick = () => {
        searchUser(inputValue)
        !!inputValue ? redirect() : setError(true)
    }
    
    const handleOnChange = value => setInputValue(value)

    return (
        <div className='container home'>
            <div className='content-container'>
                <Git />
                <h1 className='title'>GitSearch</h1>
                <Input onChange={handleOnChange} newValue={temporaryUser}/>
                {!!error && <p className="error">Você esqueceu de informar quem devo buscar :(</p>}
                <div className='button-container'>
                    <Button type='primary' label='Ver Todos' onClick={handleSeeAllClick} leftButton />
                    <Button type='secondary' label='Buscar' onClick={handleSearchClick}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = store => ({ temporaryUser: store.searchState.temporaryUser })

const mapDispatchToProps = dispatch => bindActionCreators({ searchUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)