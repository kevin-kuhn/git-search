import React, { useEffect, useState } from 'react'
import { Input, Card } from '../index.js'
import { connect } from 'react-redux'
import { useApi } from '../../../hooks'
import './styles.css'

const SearchResults = ({ temporaryUser }) => {
    const [users, setUsers] = useState([])
    const api = useApi()

    useEffect(() => {
        const getUsers = async () => {
            const request = await api.getUsers(temporaryUser)
            setUsers(request.items)
            console.log(request);
        }
        getUsers()    
    }, [])

    return (
        <div className="container-search">
            <div className="info-header">
                <h1 className="search-title">
                    Search Results
                </h1>
                <div className="input-container">
                    <Input withIcon newValue={temporaryUser}/>
                </div>
            </div>
            <div className="container-list">
                {users.map(user => <Card avatar={user.avatar_url} name={user.login} />)}
            </div>
        </div>
    )
}

const mapStateToProps = store => ({ temporaryUser: store.searchState.temporaryUser })

export default connect(mapStateToProps)(SearchResults)