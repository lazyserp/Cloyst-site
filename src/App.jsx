import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RequestDemoModal from './components/RequestDemoModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const activePage = location.pathname === '/about' ? 'about' : 'home';

  return (
    <div className="cloyst-app-root">
      <ScrollToTop />
      <Navbar activePage={activePage} openDemoModal={openDemoModal} />
      <main className="cloyst-main-content">
        <Routes>
          <Route path="/" element={<HomePage openDemoModal={openDemoModal} />} />
          <Route path="/overview" element={<HomePage openDemoModal={openDemoModal} />} />
          <Route path="/about" element={<AboutPage openDemoModal={openDemoModal} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer openDemoModal={openDemoModal} />
      <RequestDemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
