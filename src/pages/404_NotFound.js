import { Link } from "react-router-dom";
import "../styles/404_NotFound.css";


export default function ErrorPage() {
    return (
        <>
            <div>
                <span className="left-pane"></span>
                <p>404</p>
                <span className="right-pane"></span>
            </div>
            <div>
                <h1>Page Not Found</h1>
                <p>Sorry, we couldn't find the page.</p>
            </div>
            <div>
                <Link to="/">Go to Home</Link>
            </div>
        </>
    );
}