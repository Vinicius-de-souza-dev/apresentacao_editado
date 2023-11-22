import './App.css'
import Rotas from './Rotas/Rotas';
import Rodape from './Componentes/Rodape/Rodape.js';
import Cabecalho from './Componentes/cabecalho/Cabecalho.js'

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Rotas/>
      <Rodape/>
    </div>
  );
}

export default App
