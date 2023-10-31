import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';


function App() {
  return (
    <BrowserRouter basename="/mearn-meet-app">
      <Routes >
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
