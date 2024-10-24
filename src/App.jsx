
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (

<div>
    <Home />
    <Header />
    </div>
    /*<BrowserRouter>
      <Header />
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/header">Header</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>*/
  );
}
export default App;
