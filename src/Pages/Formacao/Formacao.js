import Campotexto from "../../Componentes/Campotexto/Campotexto"
import './Formacao.css'

function Formacao(){

    return(
        <div className="Formacao">
            <form>
                <h2>Digite suas formações</h2>
                <Campotexto label="Escolaridade" placeholder="Digite sua Escolaridade"/>
                <Campotexto label="Graduação" placeholder="Digite sua Graduação"/>
                <Campotexto label="Pós-graduação" placeholder="Digite sua Pós-Graduação"/>
                <Campotexto label="Mestrado" placeholder="Digite seu Mestrado"/>
                <Campotexto label="Doutorado" placeholder="Digite seu Doutorado"/>
            </form>
        </div>
    )
}

export default Formacao