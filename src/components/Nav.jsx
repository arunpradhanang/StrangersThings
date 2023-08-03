import { Link } from 'react-router-dom'


function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/users'> All Users</Link>
        </nav>

    )
}

export default Nav;