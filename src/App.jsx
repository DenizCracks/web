export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: '#f8fafc',
        color: '#0f172a',
        margin: 0,
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 480, padding: 24 }}>
        <h1 style={{ fontSize: 40, marginBottom: 16 }}>web</h1>
        <p style={{ fontSize: 18, color: '#475569', lineHeight: 1.6 }}>
          Your project is up and running. Start building by editing{' '}
          <code
            style={{
              background: '#e2e8f0',
              padding: '2px 6px',
              borderRadius: 4,
              fontSize: 15,
            }}
          >
            src/App.jsx
          </code>
        </p>
      </div>
    </div>
  )
}
