import React from 'react'
import { SearchResults, Header } from '../../components'
import './styles.css'

const FlowScreen = () => {

    return (
        <div className="container-geral">
            <Header />
            <div className="container flow">
                <SearchResults />
            </div>
        </div>
    )
}

export default FlowScreen