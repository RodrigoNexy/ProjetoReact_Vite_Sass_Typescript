import './Apps.scss'

function App() {
  return(
    <main>
      <header className='header-container'>
          <img className='logofoto' src="./logo.png"/>
          <nav className="menu-options">
            <a>O que oferecemos</a>
            <a>Como trabalhamos</a>
            <a>Portfólio</a>
          </nav>
          <button>
            <div className='button-face-white'>
            Entre em Contato! <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <div className='button-face-purple'>
            Entre em Contato! <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </button>
      </header>
      <div className="conteudo-container">
        <div className="heading-container">
        <h2>Vamos aumentar sua </h2>
        <h2>presença social!</h2>

        </div>
        <div className="bola alvo">
          🎯
        </div>
        <div className="bola shop">
        🛍️
        </div>
        <div className="bola rocket">
          🚀
        </div>
        <div className="bola fire">
          🔥
        </div>
      </div>
    </main>
  )
}

export default App;