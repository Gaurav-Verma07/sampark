import { Link } from "react-router-dom";
import "./index.css";

function Error() {
    return (


        <div className="container">
                <div className="text-404">
                    <b>404</b>
                </div>
                <div className="text">
                    <b> PAGE NOT FOUND </b>
                </div>
                <div className="description">
                    <p> The page you are looking for might have been removed had its name changed or is temporarily unavailable. </p>
                </div>
                <div className="text-btn">
                    <Link to='/'><button className="btn-outline-primary">BACK TO HOME</button></Link>
                </div>
    </div>
    )
}

export default Error;