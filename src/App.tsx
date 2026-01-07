import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.scss';

import useScrollRestoration from './components/useScrollRestoration/useScrollRestoration';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Loading from "./layouts/Loading/Loading";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Product = React.lazy(() => import("./pages/Product/Product"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  useScrollRestoration();

  return (
    <div className="App">

      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

      </main>
      <Footer />
    </div>
  );
}

export default App;
