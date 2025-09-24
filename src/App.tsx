import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import StickyScrollLayout from './components/StickyScrollLayout';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPageNew';
import PrivacyPolicy from './components/PrivacyPolicy';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import Footer from './components/Footer';
import SimpleAdminLogin from './pages/SimpleAdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminPostEditor from './pages/AdminPostEditor';
import AdminSettings from './pages/AdminSettings';
import 'react-toastify/dist/ReactToastify.css';

// Layout wrapper component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  if (isAdminRoute) {
    // Admin routes don't need header/footer
    return <>{children}</>;
  }
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<LoadingSpinner />}>
          <Layout>
            <Routes>
              <Route path="/" element={<StickyScrollLayout />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<div className="min-h-screen bg-gray-100 flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">🎉 Admin Panel</h1><p className="text-gray-600 mb-6">Welcome to the Adswadi Admin Panel</p><a href="/admin/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Go to Login</a></div></div>} />
              <Route path="/admin/login" element={<SimpleAdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/posts/new" element={<AdminPostEditor />} />
              <Route path="/admin/posts/edit/:id" element={<AdminPostEditor />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
            </Routes>
          </Layout>
        </Suspense>
        
        {/* Toast Container for notifications */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
};

export default App;