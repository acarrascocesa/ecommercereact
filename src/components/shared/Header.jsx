import { Link, NavLink } from 'react-router-dom'
import "./header.css"

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>
            <Link to="/">
                AC Shop
            </Link>
            </h1>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'>
                        <NavLink  className='header__link' value="login" to="/login">
                            Login
                        </NavLink>
                    </li>

                    <li className='header__item'>
                        <NavLink className='header__link' value="purchases" to="/purchases">
                            Purchases
                        </NavLink>
                    </li>

                    <li className='header__item'>
                        <NavLink className='header__link' value="cart" to="/cart">
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
