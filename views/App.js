import ReactDOM  from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Views/Home';
import Cadastros from './Views/Cadastros';
import Versoes from './Views/Versoes';
import TarefaRapida from './Views/TarefaRapida';
import Tickets from './Views/Tickets';
import Informacoes from './Views/Informacoes';
import Login from "./Views/Login";
import Layout from "./Views/Layout";
import Footer from "./Views/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/Cadastros" element={<Cadastros/>}/>
          <Route path="/Versoes" element={<Versoes/>}/>
          <Route path="/TarefaRapida" element={<TarefaRapida/>}/>
          <Route path="/Tickets" element={<Tickets/>}/>
          <Route path="/Informacoes" element={<Informacoes/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Route>
      </Routes>
          <Footer/>
      </BrowserRouter>    
  );
}

export default App;
