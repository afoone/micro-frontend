import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Menu = ({ history }) => {

    const menu = useSelector(state => state.menu.menu)
    console.log("menu", menu)
    console.log("menu length", menu.menu)
    return (
        <div>
            { menu.map(
                i => <Link to={i.to}>{i.title}</Link>
            )}
        </div>
    )
}

export default Menu
