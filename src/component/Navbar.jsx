import "./Navbar.css"
import Logo from '/logo.svg'
import {Link} from "react-router-dom"

function Navbar () {    
    return (
        <ul>
            <li className="mr-auto pl-6">
                <p>
                    <Link id="li1" to={`/`}>
                    <img src={Logo} className="invert !w-48 !h-48" alt="" id="img2"/>
                    </Link>
                </p>
            </li>
            <li>
                <Link id="li1" to={`/concorrenti`}>Concorrenti</Link>
            </li>
            <li>
                <Link id="li1" to={`/scuderie`}>Scuderie</Link>
            </li>
            <li className="pr-20">
            </li>
            <li className="items-center mr-10">
                <button id="but1">
                    <img src="/cerca.png" alt="Cerca" id="img1"/>
                </button>
                <form className="items-center">
                    <input id="cer1" type="text" placeholder="    cerca"></input>
                </form>
            </li>
            
        </ul>
    )
}

export default Navbar;