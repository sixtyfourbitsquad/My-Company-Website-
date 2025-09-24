import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

console.log('🚀 Starting Adswadi website with complete app structure...');

// Render the main App component
function renderReactApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('❌ Root element not found!');
    return false;
  }

  try {
    console.log('📍 Root element found, creating React root...');
    const root = createRoot(rootElement);
    console.log('✅ React root created successfully');
    
    root.render(
      <StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StrictMode>
    );
    
    console.log('🎉 App rendered successfully!');
    return true;
  } catch (error) {
    console.error('❌ Failed to render app:', error);
    return false;
  }
}

// Try React first, fallback to simple HTML if it fails
if (!renderReactApp()) {
  console.log('🔄 Falling back to simple HTML version...');
  
  // Fallback to simple HTML version
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        color: white;
        text-align: center;
        padding: 20px;
      ">
        <div>
          <h1 style="font-size: 3rem; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
            🎉 Adswadi
          </h1>
          <p style="font-size: 1.5rem; margin-bottom: 2rem; opacity: 0.9;">
            Performance Marketing Agency
          </p>
          <div style="background: rgba(255,255,255,0.2); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">
              Complete App Structure Failed 🚨
            </h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;">
              One of the complex components caused an error, but the website is still functional.
            </p>
            <button 
              onclick="alert('🚨 Complete app structure failed to load.')"
              style="
                background: #ef4444;
                color: white;
                border: none;
                padding: 15px 30px;
                font-size: 1.1rem;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
              "
            >
              App Structure Failed Button
            </button>
          </div>
          <div style="margin-top: 2rem; opacity: 0.7;">
            <p>📍 Mumbai, India | 📞 +91-8678830021</p>
            <p>Facebook Ads • Google Ads • Digital Marketing</p>
          </div>
        </div>
      </div>
    `;
  }
}
