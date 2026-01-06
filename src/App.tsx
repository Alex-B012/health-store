import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

// import { linksData } from './data/data';
import useScrollRestoration from './components/useScrollRestoration/useScrollRestoration';


function App() {
  useScrollRestoration();

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Welcome to Health Store</h1>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
