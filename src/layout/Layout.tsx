import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from '../pages/Home';
import Loan from 'pages/Loan';

const Layout = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loan" element={<Loan />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
