import './Botao.css';

const Botao  = (props) => {
    
    return (
        <button className='Botao' type="button" onChange={props.onChange}>
            {props.texto}
        </button>
    )
}

export default Botao
