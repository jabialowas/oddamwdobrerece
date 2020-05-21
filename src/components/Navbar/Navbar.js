import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {Link} from 'react-scroll'
import './Navbar.scss'
import * as ROUTES from '../../constants/routes'
import SignOutButton from "../SignOut/SignOut";
import {AuthUserContext} from '../Session'
const activeStyle = {

    'outline': '0.75px solid #3C3C3C'
}
const NavbarNonAuth = () => (
    <>
        <ul className='navbar-login'>
            <li><NavLink to={ROUTES.SIGN_IN}>Zaloguj</NavLink></li>
            <li><NavLink className='register' to={ROUTES.SIGN_UP}>Załóż konto</NavLink></li>
        </ul>
        <ul className='navbar-nav'>
            <li><NavLink activeStyle={activeStyle} to={ROUTES.LANDING}>Start</NavLink></li>
            <li><Link>O co chodzi?</Link></li>
            <li><Link>O nas</Link></li>
            <li><Link>Fundacja i organizacje</Link></li>
            <li><Link>Kontakt</Link></li>
        </ul>
        </>
)

const NavbarAuth = ()=> (

    <AuthUserContext.Consumer>
        {authUser =>
            <>
        <ul className='navbar-login'>
            <li>Witaj {authUser.email}</li>
            <li><NavLink className='register'to={ROUTES.APP_FORM}>Oddaj rzeczy</NavLink></li>
            <NavLink to={ROUTES.SIGN_OUT}>{<SignOutButton/>}</NavLink>
        </ul>
        <ul className='navbar-nav'>
            <li><NavLink activeStyle={activeStyle} to={ROUTES.LANDING}>Start</NavLink></li>
            <li><Link>O co chodzi?</Link></li>
            <li><Link>O nas</Link></li>
            <li><Link>Fundacja i organizacje</Link></li>
            <li><Link>Kontakt</Link></li>
        </ul>
            </>}
    </AuthUserContext.Consumer>

)
const Navbar = () => (

<div className='navbar'><AuthUserContext.Consumer>
    {authUser => authUser  ?  <NavbarAuth /> : <NavbarNonAuth />}</AuthUserContext.Consumer>
</div>
)


export default Navbar;