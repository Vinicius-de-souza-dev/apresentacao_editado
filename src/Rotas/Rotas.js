import { Routes, Route } from 'react-router-dom';
import Experiencia from '../Pages/Experiencia/Experiencia';
import Home from '../Pages/Home/Home';
import Formacao from '../Pages/Formacao/Formacao';
import Hobbie from '../Pages/Hobbies/Hobbie';


function Rotas() {
  return (
    <div>
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Experiencia' element={<Experiencia/>} />
          <Route path='/Formacao' element={<Formacao/>} />
          <Route path='/Hobbies' element={<Hobbie/>} />
        </Routes>
    </div>
  );
}

export default Rotas
