import './App.css';
import React,{useState} from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
