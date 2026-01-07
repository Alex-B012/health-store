import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

// import { linksData } from './data/data';
import useScrollRestoration from './components/useScrollRestoration/useScrollRestoration';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';


function App() {
  useScrollRestoration();

  return (
    <div className="App">

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
