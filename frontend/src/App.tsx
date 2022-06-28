import { Link } from "react-router-dom";
import { Routes } from './route';

function App() {
    return (
        <div className="w-screen text-center mt-10">

            <nav className='mb-4 text-blue-600'>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/requestDemo">Request</Link>
            </nav>

            <Routes>
                <Routes />
            </Routes>
        </div>
    )
}

export default App
