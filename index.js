import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Products from './Products';
import ProductDeatils from './ProductDetails';
import Search from './Search';
import Oneplus from './Oneplus';
import OneplusDetails from './OneplusDetails';
import Mac from './Mac';
import MacDetails from './MacDetails';
import Whirlpool from './Whirlpool';
import WhirlpoolDetails from './WhirlpoolDetails';
import Lenovo from './Lenovo';
import LenovoDetails from './LenovoDetails';
import Nikon from './Nikon';
import NikonDetails from './NikonDetails';
import LG from './LG';
import LGDetails from './LGDetails';
import Godrej from './Godrej';
import GodrejDetails from './GodrejDetails';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} /> 
          <Route path="/product/:id" element={<ProductDeatils />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Oneplus" element={<Oneplus />} />
          <Route path="/oneplus/:id" element={<OneplusDetails />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/Mac/:id" element={<MacDetails />} />
          <Route path="/Whirlpool" element={<Whirlpool />} />
          <Route path="/Whirlpool/:id" element={<WhirlpoolDetails />} />
          <Route path="/Lenovo" element={<Lenovo />} />
          <Route path="/Lenovo/:id" element={<LenovoDetails />} />
          <Route path="/Nikon" element={<Nikon />} />
          <Route path="/Nikon/:id" element={<NikonDetails />} />
          <Route path="/LG" element={<LG />} />
          <Route path="/LG/:id" element={<LGDetails />} />
          <Route path="/Godrej" element={<Godrej />} />
          <Route path="/Godrej/:id" element={<GodrejDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
