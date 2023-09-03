
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './Components/context/DataProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/Details/ProductDetails';
import Cart from './Components/CartSetup/Cart'
import Form from './Components/Header/Form';

function App() {
  return (
    <DataProvider>

      <Router>
        <Header />
        <Routes>

        <Route exact path='/' element={<Home />} />
         <Route exact path= '/product/:id' element={<ProductDetails/>}/>
         <Route exact path = '/cart' element={<Cart/>} />
         <Route exact path = '/form' element={<Form/>} />

        </Routes>
      </Router>



    </DataProvider>
  );
}

export default App;
