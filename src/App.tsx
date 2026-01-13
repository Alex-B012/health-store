import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useCallback, useState } from 'react';
import './App.scss';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Loader from './layouts/Loading/Loader';

const Home = React.lazy(() => import("./pages/Home/Home"));
const Product = React.lazy(() => import("./pages/Product/Product"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const [loaded, setLoaded] = useState(false);

  const handlePageLoad = useCallback(() => {
    setTimeout(() => setLoaded(true), 800);
  }, []);

  return (
    <div className="App">
      <Loader isHidden={loaded} />
      <Header />
      <main >
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={
              <Home onLoad={handlePageLoad} />
            } />
            <Route path="/products/:id" element={
              <Product onLoad={handlePageLoad} />
            } />
            <Route path="*" element={
              <NotFound onLoad={handlePageLoad} />
            } />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
