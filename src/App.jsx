import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import CardDetails from './components/card_details/card_details';
import Home from './components/home';
import Register from './components/register/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='register' element={<Register />}/>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='card_details' element={<CardDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
