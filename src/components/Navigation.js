import React from 'react'
import cookie from 'cookie'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const loggedIn = () => {
        const cookies = cookie.parse(document.cookie);
        return cookies["loggedIn"] ? 'Logout' : 'Login'
      }

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                    {<li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                        {loggedIn()}
                    </li>}
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation