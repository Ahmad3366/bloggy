import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>could not found that page</p>
            <Link to='/'>go to Homepage</Link>
        </div>
    );
}
 
export default NotFound;