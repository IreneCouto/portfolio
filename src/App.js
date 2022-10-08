import './App.css';

function App() {
  return (
    <div>
    <header className='cabecalho'>      
      <nav className='nav-menu'>
        <a className='cabecalho-item-home'>Home</a>
        <a className='cabecalho-item-sobre'>Sobre</a>
        <a className='cabeçalho-item-experiencia'>Experiências</a>
        <a className='cabecalho-item-projetos'>Projetos</a>
      </nav>
    </header>
  
    <main className='conteudo-main'>
      <section className='conteudo-principal'>
  
        <div className='conteudo-principal-escrito'>
          <h3 className='conteudo-principal-linha1'>Olá, eu sou</h3>
          <h1 className='conteudo-principal-linha2'> Irene Couto</h1>
          <h3 className='conteudo-principal-linha3'>Desenvolvedora Front-End</h3>

          <button className='button-linkedin'>Linkedin</button>
          <button className='button-github'>Github</button>

        </div>

        <img className='image-conteudo-principal' src="/images/img1.png" alt="Foto de perfil"/>

      </section>
  
    </main>

    <footer>

    </footer>

    </div>
    

  )



}

export default App;
