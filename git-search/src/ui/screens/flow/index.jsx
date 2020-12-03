import React from 'react'
import { SearchResults, Header } from '../../components'
import './styles.css'

const FlowScreen = () => {

    return (
        <>
            <Header />
            <div className="container flow">
                <SearchResults />
            </div>
        </>
    )
}

export default FlowScreen