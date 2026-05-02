import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Component error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          color: '#e85d26'
        }}>
          <h2>&lt;Error /&gt;</h2>
          <p style={{ color: '#888', marginTop: 12 }}>Something went wrong. Please refresh.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 20, padding: '10px 24px',
              background: '#e85d26', color: '#fff',
              border: 'none', borderRadius: 8,
              cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem'
            }}
          >Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
