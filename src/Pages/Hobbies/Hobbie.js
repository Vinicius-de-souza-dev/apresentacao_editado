import Campotexto from "../../Componentes/Campotexto/Campotexto"
import './Hobbie.css'

function Hobbie(){

    return(
        <div className="Hobbie">
            <form>
                <h2>Digite seus Hobbies</h2>
                <Campotexto label="Hobbie 1" placeholder="Digite seu Hobbie"/>
                <Campotexto label="Hobbie 2" placeholder="Digite seu Hobbie"/>
                <Campotexto label="Hobbie 3" placeholder="Digite seu Hobbie"/>
                <Campotexto label="Hobbie 4" placeholder="Digite seu Hobbie"/>
                <Campotexto label="Hobbie 5" placeholder="Digite seu Hobbie"/>
            </form>
        </div>
    )
}

export default Hobbie