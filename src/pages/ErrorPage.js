import { Link, useRouteError } from "react-router-dom";
import "../styles/ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error("Error object:", error);
  return (
    <div className="error-page d-flex flex-column justify-content-between align-items-center">
      <div className="d-flex">
        <div className="left-pane"></div>
        <p className="pane-text px-4">{error?.status || "404"}</p>
        <div className="right-pane"></div>
      </div>
      <div className="text-center">
        <h1 className="text-center">{error?.statusText || "Not Found"}</h1>
        <p>
          {error?.data?.message || error?.message || "Sorry, we couldn't find the page you were looking for."}
        </p>
      </div>
      <div>
        <Link className="btn btn-link goto-btn d-flex  align-items-center" to="/"><span class="material-icons goto-btn-icon">arrow_back</span>Go to Home</Link>
      </div>
    </div>
  );
}