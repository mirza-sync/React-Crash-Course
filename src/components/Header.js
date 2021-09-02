import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggle, showForm }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showForm ? 'red' : 'green'} 
            text={showForm ? 'Close' : 'Add'} 
            onClick={onToggle} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

// // CSS in JS
// const headingStyle = {
//     color: 'blue',
//     background: 'yellow'
// }

export default Header
