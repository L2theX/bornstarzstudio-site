export default function Home() {
  return (
  
    <main
      style={{
        minHeight: '100vh',
       background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('/ChatGPT%20Image%20May%2025,%202026,%2001_46_53%20PM.png') center/cover no-repeat fixed",
        color: 'white',
        fontFamily: 'Arial',
        padding: '60px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '72px',
          color: '#FFD700',
          marginBottom: '20px',
        }}
      >
        Born Starz Studio
      </h1>

      <p
        style={{
          fontSize: '28px',
          color: '#cccccc',
          marginBottom: '60px',
        }}
      >
        Music Production • Songwriting • Recording
      </p>
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '80px',
  }}
>
  <a
    href="https://spotify.com"
    target="_blank"
    style={{
      backgroundColor: '#FFD700',
      color: 'black',
      padding: '16px 28px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px',
    }}
  >
    Spotify
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    style={{
      border: '2px solid #FFD700',
      color: '#FFD700',
      padding: '16px 28px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px',
    }}
  >
    YouTube
  </a>

  <a
    href="https://soundcloud.com"
    target="_blank"
    style={{
      border: '2px solid #FFD700',
      color: '#FFD700',
      padding: '16px 28px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px',
    }}
  >
    SoundCloud
  </a>
</div>
      <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap',
    marginBottom: '50px',
  }}
> 
      <section
        style={{
          backgroundColor: 'rgba(0,0,0,0.45)',
          padding: '50px',
          borderRadius: '20px',
          maxWidth: '420px',
         margin: '0 auto 50px 0',
        }}
      >
 

        <img
  src="/71a024787425118b371251945e6fda3b832da638ca497a00010e0f0cf92a472a.webp"
  alt="Aria Esme Logo"
  style={{
    width: '260px',
    marginBottom: '20px',
 marginTop: '-120px',
  }}
/>
        <h2
          style={{
            color: '#FFD700',
            fontSize: '42px',
          }}
        >
          Walked in Drippin
        </h2>

        <p
          style={{
            fontSize: '22px',
            lineHeight: '1.8',
            color: '#cccccc',
          }}
        >
          When the look speaks before Introduction
        </p>
      </section>
      <section
        style={{
          backgroundColor: 'rgba(0,0,0,0.45)',
          padding: '50px',
          borderRadius: '20px',
          maxWidth: '420px',
          margin: '0 0 50px auto',
        }}
      >
        <h2
          style={{
            color: '#FFD700',
            fontSize: '42px',
          }}
        >
          Love Over Everything
        </h2>

        <p
          style={{
            fontSize: '22px',
            lineHeight: '1.8',
            color: '#cccccc',
          }}
        >
          Bringing real love, loyalty, and emotion back into music.
        </p>
      </section>
</div>
      <section
        style={{
          marginTop: '60px',
        }}
      >
        <h2
          style={{
            color: '#FFD700',
            fontSize: '38px',
          }}
        >
          Contact
        </h2>

        <p style={{ fontSize: '24px' }}>
          bornstarz@gmail.com
        </p>

        <p style={{ fontSize: '20px', color: '#FFD700' }}>
          bornstarzstudio.online
        </p>
      </section>
    </main>
  )
}
