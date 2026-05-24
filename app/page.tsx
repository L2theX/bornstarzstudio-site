export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      fontFamily: 'Arial',
      padding: '60px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '64px',
        color: 'gold'
      }}>
        Born Starz Studio
      </h1>

      <p style={{
        fontSize: '24px',
        marginTop: '20px'
      }}>
        Music • Production • Songwriting
      </p>

      <div style={{
        marginTop: '50px'
      }}>
        <h2>Latest Release</h2>

        <p>
          Love Over Everything
        </p>
      </div>

      <div style={{
        marginTop: '80px'
      }}>
        <p>
          bornstarz@gmail.com
        </p>

        <p>
          bornstarzstudio.online
        </p>
      </div>
    </main>
  )
}
