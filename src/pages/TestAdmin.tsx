import React from 'react';

const TestAdmin: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f3f4f6', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div style={{ 
        textAlign: 'center', 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#1f2937', 
          marginBottom: '1rem' 
        }}>
          🎉 Admin Panel Test
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
          If you can see this page, the routing is working!
        </p>
        <a 
          href="/admin/login" 
          style={{ 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Go to Admin Login
        </a>
      </div>
    </div>
  );
};

export default TestAdmin;
