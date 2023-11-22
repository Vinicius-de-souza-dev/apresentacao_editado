import { NavLink } from "react-router-dom";
import '../../index.css'
import './Cabecalho.css'

const Cabecalho = () => {
    return (
        <header>
            <div className="cabecalho">
                <h2><a>CEP.com</a></h2>
                <div className="lista">
                    <NavLink to="/Home" className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : ""}>
                        Home
                    </NavLink>
                    <NavLink to="/Formacao" className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : ""}>
                        Formação
                    </NavLink>
                    <NavLink to="/Experiencia" className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : ""}>
                        Experiência
                    </NavLink>
                    <NavLink to="/Hobbies" className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : ""}>
                        Hobbies
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Cabecalho