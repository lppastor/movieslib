import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
 
function NavBar() {
    return (
        <nav id="navbar">
            <h2>
            <Link to="/"><BiCameraMovie/>MoviesLib</Link>
            </h2>
            <Link to="/movie/1">Movie</Link>
            <Link to="/search">Search</Link>
            <form>
                <input type="text" placeholder='Busque um filme'/>
                <button type='submit'><BiSearchAlt2/></button>
            </form>
        </nav>
    )
}

export default NavBar