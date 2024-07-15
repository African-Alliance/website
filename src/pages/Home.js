import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>
                This is the home page
            </div>
            <div id="others">
                <Outlet />
                Child components is rendered here
            </div>
        </>
    );
}