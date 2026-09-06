import './global.css'

const MUTED = '#8a8a8c'
const BORDER = '#202124'
const SURFACE = '#141517'

/* ---------------- icons ---------------- */

const IconKey = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M15 7a4 4 0 1 1-3.5 5.9L9 15.4l1.6 1.6-2 2-1.6-1.6L5 19.4 3 17.4 11.1 9.3A4 4 0 0 1 15 7Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <circle cx="16.2" cy="8.8" r="1.15" fill="currentColor" />
  </svg>
)

const IconDownload = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3.5v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="m7.5 10.5 4.5 4.5 4.5-4.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 17.5v1.5a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-1.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const IconYouTube = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.3 7.4a2.5 2.5 0 0 0-1.75-1.77C18 5.2 12 5.2 12 5.2s-6 0-7.55.43A2.5 2.5 0 0 0 2.7 7.4C2.28 9 2.28 12 2.28 12s0 3 .42 4.6a2.5 2.5 0 0 0 1.75 1.77C6 18.8 12 18.8 12 18.8s6 0 7.55-.43a2.5 2.5 0 0 0 1.75-1.77c.42-1.6.42-4.6.42-4.6s0-3-.42-4.6ZM10.1 15V9l5.05 3-5.05 3Z" />
  </svg>
)

const IconDiscord = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.3 5.9A16 16 0 0 0 15.4 4.7l-.3.6a12 12 0 0 1 3.4 1.6 11.9 11.9 0 0 0-9-.3l-.4.1a12.4 12.4 0 0 1 2.2-1.4l-.3-.6A16 16 0 0 0 4.7 5.9C2.5 9.2 1.9 12.5 2.2 15.8a16 16 0 0 0 4.9 2.5l.6-1a10 10 0 0 1-1.6-.8l.4-.3a11.4 11.4 0 0 0 9 0l.4.3a10 10 0 0 1-1.6.8l.6 1a16 16 0 0 0 4.9-2.5c.4-3.9-.6-7.2-2.5-9.9ZM8.9 14.2c-1 0-1.7-.9-1.7-1.9s.8-1.9 1.7-1.9 1.8.9 1.7 1.9c0 1-.8 1.9-1.7 1.9Zm6.2 0c-1 0-1.7-.9-1.7-1.9s.8-1.9 1.7-1.9 1.8.9 1.7 1.9c0 1-.8 1.9-1.7 1.9Z" />
  </svg>
)

const IconStore = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4.5 8h15l-1 11.5a1 1 0 0 1-1 .9H6.5a1 1 0 0 1-1-.9L4.5 8Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

/* ---------------- content ---------------- */

const SOCIALS = [
  { label: 'YouTube', icon: <IconYouTube /> },
  { label: 'Discord', icon: <IconDiscord /> },
  { label: 'Store', icon: <IconStore /> },
]

const FOOTER_LINKS = ['Terms', 'Legal', 'Privacy', 'EULA', 'Docs', 'DMCA', 'Reseller', 'Security']

const BTN_BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 9,
  height: 51,
  padding: '0 48px',
  borderRadius: 11,
  border: `1px solid ${BORDER}`,
  background: SURFACE,
  color: MUTED,
  fontSize: 19,
  fontWeight: 400,
  letterSpacing: '-0.005em',
}

export default function App() {
  return (
    <>
      <div className="dotfield" />
      <div className="vignette" />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '24px',
        }}
      >
        {/* stack sits a little above true centre */}
        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingBottom: '11vh',
          }}
        >
          <h1
            className="wordmark"
            style={{
              margin: 0,
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '-0.02em',
            }}
          >
            Deniz Loader
          </h1>

          {/* buttons, with large faint glyphs overlaying their outer edges */}
          <div style={{ position: 'relative', marginTop: 52 }}>
            <div
              className="cta-row"
              style={{ position: 'relative', display: 'flex', gap: 19, justifyContent: 'center' }}
            >
              <a className="btn" href="#footer" style={BTN_BASE}>
                Get a key
              </a>
              <a className="btn" href="#footer" style={BTN_BASE}>
                Download
              </a>
            </div>

            <span
              className="ghost-glyph"
              aria-hidden="true"
              style={{
                position: 'absolute',
                zIndex: 2,
                left: -4,
                top: -4,
                color: '#ffffff',
                opacity: 0.09,
                pointerEvents: 'none',
              }}
            >
              <IconKey size={58} />
            </span>
            <span
              className="ghost-glyph"
              aria-hidden="true"
              style={{
                position: 'absolute',
                zIndex: 2,
                right: -4,
                top: -4,
                color: '#ffffff',
                opacity: 0.09,
                pointerEvents: 'none',
              }}
            >
              <IconDownload size={58} />
            </span>
          </div>

          {/* grouped social icons */}
          <div
            style={{
              display: 'inline-flex',
              gap: 4,
              marginTop: 24,
              padding: 6,
              borderRadius: 10,
              border: `1px solid ${BORDER}`,
              background: SURFACE,
            }}
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="iconbtn"
                href="#footer"
                aria-label={s.label}
                title={s.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 52,
                  height: 36,
                  borderRadius: 7,
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </main>

        {/* legal links */}
        <footer
          id="footer"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px 18px',
            padding: '32px 0 24px',
            fontSize: 14,
          }}
        >
          {FOOTER_LINKS.map((l) => (
            <a key={l} className="footlink" href="#footer">
              {l}
            </a>
          ))}
        </footer>
      </div>
    </>
  )
}
