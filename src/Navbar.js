import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Bloggy</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* <a href="/">Home</a> */}
                <Link to="/create">New Blog</Link>
                {/* <a href="/create">New Blog</a> */}
            </div>
        </nav>
    );
}
 
export default Navbar;