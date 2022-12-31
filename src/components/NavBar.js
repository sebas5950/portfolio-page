import { NavLink } from "react-router-dom"
const NavBar = () => {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default NavBar