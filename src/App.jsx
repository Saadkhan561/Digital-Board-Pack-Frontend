import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import CardDetails from './components/card_details';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
