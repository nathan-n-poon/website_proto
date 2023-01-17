import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Home from "./pages"
import {Helmet} from "react-helmet";



function App() {
  return (

   <BrowserRouter>
       <Helmet>
           <title>Nathan Poon</title>
       </Helmet>
       <Home/>
   </BrowserRouter>

  );
}

export default App;
