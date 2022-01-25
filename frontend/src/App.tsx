import{ 
  BrowserRouter, 
  Routes, 
  Route  //componentes do react alter dom para configurar as rotas 
} from  "react-router-dom"; 
import  Listing from 'pages/Listing';
import  Form from 'pages/Form'; 
import  Navbar from "components/Navbar";

function  App() { 
  return ( 
    <BrowserRouter>  {/*inicia a config das rotas*/}
       <Navbar/>  
      <Routes> {/*configura rota por rota*/}
        <Route path = "/"  element={< Listing/>}/>  {/*caminho listing*/}
        <Route path="/form">                     {/*caminho form*/}
          <Route path=":movieId"  element={<Form/>}/>  {/*id do filme*/} 
        </Route> 
      </Routes> 
    </BrowserRouter> 
  ); 
}
export default App;