import { NavLink } from "react-router-dom"
const NavBar = () => {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
        </div>
    )
}

export default NavBar
