import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Git } from '../../../assets/svg/git-logo.svg'
import { ReactComponent as Arrow } from '../../../assets/svg/arrow.svg'
import './styles.css'

const Header = ({ newTitle }) => {
    return (
        <header className="header">
            <div className="content">
                <Git width="50" height="50" className="git-svg" />
                <Arrow className="arrow-svg" />
                <h2 className="title-header normal">GitSearch</h2>
                <h2 className="title-header mobile">{newTitle}</h2>
            </div>
        </header>
    )
}

const mapStateToProps = store => ({ newTitle: store.titleState.newTitle })

export default connect(mapStateToProps)(Header)