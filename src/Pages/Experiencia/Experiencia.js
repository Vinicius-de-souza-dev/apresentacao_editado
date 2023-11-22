import Campotexto from "../../Componentes/Campotexto/Campotexto";
import './Experiencia.css'


function Experiencia(){

    return(
        <div className="Exp">
            <form>
                <h2>Digite suas experiências</h2>
                <Campotexto label="Experiência 1" placeholder=""/>
                <Campotexto label="Experiência 2" placeholder=""/>
                <Campotexto label="Experiência 3" placeholder=""/>
                <Campotexto label="Experiência 4" placeholder=""/>
                <Campotexto label="Experiência 5" placeholder=""/>
            </form>
        </div>
    );
}

export default Experiencia