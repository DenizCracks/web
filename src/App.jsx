import './global.css'

const ACCENT = '#2dd4bf'
const MUTED = '#8d9aa3'
const BORDER = '#1e262c'
const SURFACE = '#0d1013'

/* ---------------- icons ---------------- */

const IconWave = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M2 8.5c2.2-2.4 4.4-2.4 6.6 0s4.4 2.4 6.6 0 4.4-2.4 6.8 0"
      stroke={ACCENT}
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M2 14c2.2-2.4 4.4-2.4 6.6 0s4.4 2.4 6.6 0 4.4-2.4 6.8 0"
      stroke={ACCENT}
      strokeWidth="1.9"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path
      d="M2 19.5c2.2-2.4 4.4-2.4 6.6 0s4.4 2.4 6.6 0 4.4-2.4 6.8 0"
      stroke={ACCENT}
      strokeWidth="1.9"
      strokeLinecap="round"
      opacity="0.25"
    />
  </svg>
)

const IconKey = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M15 7a4 4 0 1 1-3.5 5.9L9 15.4l1.6 1.6-2 2-1.6-1.6L5 19.4 3 17.4 11.1 9.3A4 4 0 0 1 15 7Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <circle cx="16.2" cy="8.8" r="1.15" fill="currentColor" />
  </svg>
)

const IconDownload = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

const IconChevron = () => (
  <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m6 9.5 6 6 6-6" stroke={MUTED} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconBolt = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M13.5 2.5 5 13.5h5l-1 8L18 10.5h-5l.5-8Z"
      stroke={ACCENT}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
)

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3 5 5.5v6c0 4.2 2.8 7.6 7 9.5 4.2-1.9 7-5.3 7-9.5v-6L12 3Z"
      stroke={ACCENT}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path d="m9 12 2.2 2.2L15 10.5" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconRefresh = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 12a8 8 0 1 1-2.6-5.9"
      stroke={ACCENT}
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path d="M20 3.5V8h-4.5" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconPuzzle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M10 4.5a1.8 1.8 0 0 1 3.6 0V6h3a1 1 0 0 1 1 1v3h1.4a1.8 1.8 0 0 1 0 3.6H17.6v3a1 1 0 0 1-1 1h-3v-1.4a1.8 1.8 0 0 0-3.6 0V17.6h-3a1 1 0 0 1-1-1v-3H4.5a1.8 1.8 0 0 1 0-3.6H6V7a1 1 0 0 1 1-1h3V4.5Z"
      stroke={ACCENT}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
)

const IconTerminal = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4.5" width="18" height="15" rx="2" stroke={ACCENT} strokeWidth="1.7" />
    <path d="m7 10 2.5 2.5L7 15" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 15h4" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

const IconHeadset = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" />
    <rect x="2.8" y="13.5" width="4" height="6" rx="1.6" stroke={ACCENT} strokeWidth="1.7" />
    <rect x="17.2" y="13.5" width="4" height="6" rx="1.6" stroke={ACCENT} strokeWidth="1.7" />
    <path d="M19.2 19.5a3 3 0 0 1-3 2.3h-1.7" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

/* ---------------- content ---------------- */

const STATS = [
  { value: '1.2M+', label: 'Modules loaded' },
  { value: '340ms', label: 'Median cold start' },
  { value: '99.98%', label: 'Loader uptime' },
  { value: '48k', label: 'Community members' },
]

const FEATURES = [
  {
    icon: <IconBolt />,
    title: 'Cold starts in milliseconds',
    body: 'A native Rust core streams and verifies modules in parallel, so the loader is ready before your window finishes painting.',
  },
  {
    icon: <IconShield />,
    title: 'Signed, sandboxed modules',
    body: 'Every module is Ed25519-signed and runs in an isolated scope. Unsigned or tampered payloads are refused before they touch memory.',
  },
  {
    icon: <IconRefresh />,
    title: 'Hot reload, no restarts',
    body: 'Swap a module version and it re-mounts in place. State is preserved through the reload, so you never lose your session.',
  },
  {
    icon: <IconPuzzle />,
    title: 'One registry, any target',
    body: 'Windows, macOS and Linux builds share the same manifest format. Pin a version once and every machine resolves it identically.',
  },
  {
    icon: <IconTerminal />,
    title: 'Scriptable end to end',
    body: 'A first-class CLI and JSON-RPC API mean everything the desktop app does can be driven from CI or your own tooling.',
  },
  {
    icon: <IconHeadset />,
    title: 'Support that answers',
    body: 'Median first response under 20 minutes in Discord, with maintainers — not a bot — on the other end of the thread.',
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Claim your key',
    body: 'Sign in and generate a licence key. It binds to your account, not your hardware, so you can move machines freely.',
  },
  {
    n: '02',
    title: 'Install the loader',
    body: 'One signed installer per platform, about 8 MB. No runtime dependencies and nothing left behind if you uninstall.',
  },
  {
    n: '03',
    title: 'Pick your modules',
    body: 'Browse the registry, pin the versions you want, and Deniz keeps them resolved and up to date from then on.',
  },
]

const FAQ = [
  {
    q: 'What exactly does Deniz Loader do?',
    a: 'It resolves, verifies and mounts modules for supported desktop applications. You describe which modules and versions you want, and the loader fetches them, checks their signatures and loads them into the host process — then keeps them updated.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'Windows 10 and later, macOS 12 and later on both Apple silicon and Intel, and mainstream Linux distributions with glibc 2.31 or newer. All three share the same manifest format.',
  },
  {
    q: 'Is my licence key tied to one machine?',
    a: 'No. Keys are bound to your account and allow up to three concurrent devices. You can revoke and re-issue a key from the dashboard at any time.',
  },
  {
    q: 'Can I publish my own modules?',
    a: 'Yes. Any account can publish to the registry. Modules are signed with a key you control, and you decide whether they are public or private to your organisation.',
  },
  {
    q: 'What happens when my subscription ends?',
    a: 'The loader keeps working with whatever module versions you already have pinned. You lose access to new releases and registry publishing until you renew.',
  },
  {
    q: 'How do I get a refund?',
    a: 'Ask in a support ticket within 14 days of purchase and we refund in full, no questions asked, as long as fewer than 50 module loads are recorded on the key.',
  },
]

const FOOTER_LINKS = ['Terms', 'Legal', 'Privacy', 'EULA', 'Docs', 'DMCA', 'Reseller', 'Security']

/* ---------------- sections ---------------- */

function Nav() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        borderBottom: `1px solid ${BORDER}`,
        background: 'rgba(7, 9, 11, 0.82)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <nav
        style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconWave size={20} />
          <span style={{ fontSize: 16, fontWeight: 650, letterSpacing: '-0.01em' }}>Deniz Loader</span>
        </a>

        <div className="nav-links" style={{ display: 'flex', gap: 26, fontSize: 14.5, marginLeft: 8 }}>
          <a className="navlink" href="#features">Features</a>
          <a className="navlink" href="#install">Install</a>
          <a className="navlink" href="#faq">FAQ</a>
          <a className="navlink" href="#footer">Docs</a>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            className="btn btn-ghost"
            href="#install"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              height: 38,
              padding: '0 16px',
              borderRadius: 10,
              border: `1px solid ${BORDER}`,
              background: SURFACE,
              fontSize: 14.5,
              fontWeight: 550,
            }}
          >
            <IconKey />
            Get a key
          </a>
          <a
            className="btn btn-primary"
            href="#install"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              height: 38,
              padding: '0 16px',
              borderRadius: 10,
              border: '1px solid transparent',
              background: ACCENT,
              color: '#04211d',
              fontSize: 14.5,
              fontWeight: 650,
            }}
          >
            <IconDownload />
            Download
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      style={{ position: 'relative', overflow: 'hidden', padding: '112px 24px 96px', textAlign: 'center' }}
    >
      <div className="dotfield" />
      <div className="glow" />

      <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            padding: '6px 14px 6px 11px',
            borderRadius: 999,
            border: `1px solid ${BORDER}`,
            background: SURFACE,
            fontSize: 13.5,
            color: MUTED,
          }}
        >
          <span
            className="pulse"
            style={{ width: 7, height: 7, borderRadius: 999, background: ACCENT, display: 'inline-block' }}
          />
          All modules online · v4.2 shipped today
        </div>

        <h1
          className="hero-title"
          style={{
            margin: '28px 0 0',
            fontSize: 84,
            lineHeight: 1.02,
            fontWeight: 700,
            letterSpacing: '-0.035em',
          }}
        >
          Deniz Loader
        </h1>

        <p
          style={{
            margin: '22px auto 0',
            maxWidth: 560,
            fontSize: 19,
            lineHeight: 1.6,
            color: MUTED,
          }}
        >
          The fast, signed module loader for desktop apps. Pin a version, hit load, and
          get on with your work — verification, updates and rollbacks are handled for you.
        </p>

        <div
          className="cta-row"
          style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}
        >
          <a
            className="btn btn-primary"
            href="#install"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 9,
              height: 50,
              padding: '0 26px',
              borderRadius: 12,
              background: ACCENT,
              color: '#04211d',
              fontSize: 16,
              fontWeight: 650,
            }}
          >
            <IconDownload />
            Download for Windows
          </a>
          <a
            className="btn btn-ghost"
            href="#install"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 9,
              height: 50,
              padding: '0 26px',
              borderRadius: 12,
              border: `1px solid ${BORDER}`,
              background: SURFACE,
              fontSize: 16,
              fontWeight: 550,
            }}
          >
            <IconKey />
            Get a key
          </a>
        </div>

        <div
          style={{
            display: 'inline-flex',
            gap: 4,
            marginTop: 28,
            padding: 6,
            borderRadius: 12,
            border: `1px solid ${BORDER}`,
            background: SURFACE,
          }}
        >
          {[
            { label: 'YouTube', icon: <IconYouTube /> },
            { label: 'Discord', icon: <IconDiscord /> },
            { label: 'Store', icon: <IconStore /> },
          ].map((s) => (
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
                width: 42,
                height: 34,
                borderRadius: 8,
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p style={{ margin: '26px 0 0', fontSize: 13.5, color: '#69747c' }}>
          Free for personal use · 8 MB installer · macOS and Linux builds available
        </p>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section style={{ padding: '0 24px' }}>
      <div
        className="stats"
        style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          border: `1px solid ${BORDER}`,
          borderRadius: 'var(--radius)',
          background: SURFACE,
          overflow: 'hidden',
        }}
      >
        {STATS.map((s) => (
          <div key={s.label} style={{ padding: '26px 24px', borderLeft: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}>{s.value}</div>
            <div style={{ marginTop: 6, fontSize: 14, color: MUTED }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, body }) {
  return (
    <div style={{ maxWidth: 620 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 650,
          letterSpacing: '0.09em',
          textTransform: 'uppercase',
          color: ACCENT,
        }}
      >
        {eyebrow}
      </div>
      <h2 style={{ margin: '14px 0 0', fontSize: 38, lineHeight: 1.15, fontWeight: 700, letterSpacing: '-0.025em' }}>
        {title}
      </h2>
      {body && <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.6, color: MUTED }}>{body}</p>}
    </div>
  )
}

function Features() {
  return (
    <section id="features" style={{ padding: '104px 24px 0' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
        <SectionHeading
          eyebrow="Why Deniz"
          title="Everything a loader should have done from the start"
          body="No launcher bloat, no mystery binaries, no waiting around. Just a small, verifiable core that does one job properly."
        />

        <div
          className="grid-3"
          style={{
            marginTop: 44,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card"
              style={{
                padding: 24,
                borderRadius: 'var(--radius)',
                border: `1px solid ${BORDER}`,
                background: SURFACE,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: `1px solid ${BORDER}`,
                  background: '#12171b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ margin: '18px 0 0', fontSize: 17.5, fontWeight: 650, letterSpacing: '-0.01em' }}>
                {f.title}
              </h3>
              <p style={{ margin: '10px 0 0', fontSize: 15, lineHeight: 1.62, color: MUTED }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Install() {
  return (
    <section id="install" style={{ padding: '104px 24px 0' }}>
      <div
        className="grid-2"
        style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'start',
        }}
      >
        <div>
          <SectionHeading
            eyebrow="Get started"
            title="Loaded in under two minutes"
            body="Three steps, and the last one is the only one you will ever repeat."
          />

          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: 16 }}>
                <div
                  style={{
                    flex: '0 0 auto',
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    border: `1px solid ${BORDER}`,
                    background: SURFACE,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13.5,
                    fontWeight: 650,
                    color: ACCENT,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 650 }}>{s.title}</h3>
                  <p style={{ margin: '7px 0 0', fontSize: 15, lineHeight: 1.62, color: MUTED }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderRadius: 'var(--radius)',
            border: `1px solid ${BORDER}`,
            background: SURFACE,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 16px',
              borderBottom: `1px solid ${BORDER}`,
              background: '#0a0d0f',
            }}
          >
            {['#3b444b', '#3b444b', '#3b444b'].map((c, i) => (
              <span key={i} style={{ width: 9, height: 9, borderRadius: 999, background: c }} />
            ))}
            <span style={{ marginLeft: 6, fontSize: 12.5, color: '#69747c' }}>deniz — terminal</span>
          </div>

          <pre
            style={{
              margin: 0,
              padding: '20px 18px',
              fontSize: 13.5,
              lineHeight: 1.85,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              color: '#c6d0d6',
              overflowX: 'auto',
            }}
          >
{`$ deniz auth login
`}<span style={{ color: MUTED }}>{`  key accepted · 3 devices available
`}</span>{`$ deniz add core@4.2 overlay@1.8
`}<span style={{ color: MUTED }}>{`  resolving 2 modules ............ ok
  verifying signatures ........... ok
`}</span>{`$ deniz load
`}<span style={{ color: ACCENT }}>{`  ✓ mounted 2 modules in 340ms`}</span>
          </pre>

          <div style={{ padding: '16px 18px', borderTop: `1px solid ${BORDER}`, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Windows 10+', 'macOS 12+', 'Linux glibc 2.31+'].map((p) => (
              <span
                key={p}
                style={{
                  padding: '5px 11px',
                  borderRadius: 999,
                  border: `1px solid ${BORDER}`,
                  background: '#12171b',
                  fontSize: 13,
                  color: MUTED,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" style={{ padding: '104px 24px 0' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="FAQ" title="Questions people actually ask" />

        <div
          style={{
            marginTop: 36,
            border: `1px solid ${BORDER}`,
            borderRadius: 'var(--radius)',
            background: SURFACE,
            overflow: 'hidden',
          }}
        >
          {FAQ.map((item, i) => (
            <details
              key={item.q}
              className="faq"
              style={{ borderTop: i === 0 ? 'none' : `1px solid ${BORDER}` }}
            >
              <summary
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '20px 22px',
                  fontSize: 16.5,
                  fontWeight: 550,
                }}
              >
                {item.q}
                <IconChevron />
              </summary>
              <p
                style={{
                  margin: 0,
                  padding: '0 60px 22px 22px',
                  fontSize: 15.5,
                  lineHeight: 1.68,
                  color: MUTED,
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section style={{ padding: '104px 24px 0' }}>
      <div
        style={{
          position: 'relative',
          maxWidth: 'var(--max)',
          margin: '0 auto',
          padding: '64px 32px',
          textAlign: 'center',
          border: `1px solid ${BORDER}`,
          borderRadius: 20,
          background: SURFACE,
          overflow: 'hidden',
        }}
      >
        <div className="dotfield" />
        <div style={{ position: 'relative' }}>
          <h2 style={{ margin: 0, fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em' }}>
            Ready when you are
          </h2>
          <p style={{ margin: '14px auto 0', maxWidth: 460, fontSize: 17, lineHeight: 1.6, color: MUTED }}>
            Grab a key, install the loader, and mount your first module before this page finishes scrolling.
          </p>
          <div className="cta-row" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 30 }}>
            <a
              className="btn btn-primary"
              href="#top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
                height: 48,
                padding: '0 24px',
                borderRadius: 12,
                background: ACCENT,
                color: '#04211d',
                fontSize: 15.5,
                fontWeight: 650,
              }}
            >
              <IconDownload />
              Download Deniz Loader
            </a>
            <a
              className="btn btn-ghost"
              href="#footer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
                height: 48,
                padding: '0 24px',
                borderRadius: 12,
                border: `1px solid ${BORDER}`,
                background: '#12171b',
                fontSize: 15.5,
                fontWeight: 550,
              }}
            >
              <IconDiscord />
              Join the Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="footer" style={{ marginTop: 104, borderTop: `1px solid ${BORDER}`, padding: '40px 24px 48px' }}>
      <div
        style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconWave size={18} />
          <span style={{ fontSize: 15, fontWeight: 650 }}>Deniz Loader</span>
        </a>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px 20px',
            fontSize: 14,
            marginLeft: 'auto',
            justifyContent: 'center',
          }}
        >
          {FOOTER_LINKS.map((l) => (
            <a key={l} className="footlink" href="#footer">
              {l}
            </a>
          ))}
        </div>
      </div>

      <p
        style={{
          maxWidth: 'var(--max)',
          margin: '28px auto 0',
          fontSize: 13,
          color: '#5d676e',
        }}
      >
        © {new Date().getFullYear()} Deniz Loader. Not affiliated with any game or software publisher.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Install />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
