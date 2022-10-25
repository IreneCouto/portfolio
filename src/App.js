import './App.css';

function App() {
  return (

    
    <div className='container'>
    <header className='cabecalho'>      
      <nav className='nav-menu'>
        <a className='cabecalho-item-home' href="">Home</a>
        <a className='cabecalho-item-sobre' href="">Sobre</a>
        <a className='cabeçalho-item-experiencia'href="">Experiências</a>
        <a className='cabecalho-item-projetos' href="">Projetos</a>
      </nav>
    </header>
  
    <section className='conteudo-main'>
      <section className='conteudo-principal'>
  
        <div className='conteudo-principal-escrito'>
          <h3 className='conteudo-principal-linha1'>Olá, eu sou</h3>
          <h1 className='conteudo-principal-linha2'> Irene Couto</h1>
          <h3 className='conteudo-principal-linha3'>Desenvolvedora Front-End</h3>

          <div className='buttons'>
            
          <button className='button-linkedin'>
            <img className='icons' src='icones/icone-linkedin.png'></img>Linkedin

          </button>
          <button className='button-github'>
          <img className='icons' src='icones/icone-github.png'></img>Github</button>

          </div>
        </div>

        

        <img className='image-conteudo-principal' src="/images/img1.png" alt="Foto de perfil"/>

      </section>

    </section>
 
    <section className='titulo-sobre-mim titulos' >
      <div className='sobre'>
      <h3 >Sobre Mim</h3>
      </div>
    </section>

    <section className='conteudo-sobre-mim'>

      <div className='imagem'>
      <img className='image-conteudo-sobre-mim' src="/images/image.2.jpg" alt="Foto de perfil"/>
      </div>

      <div className='texto-sobre-mim'>
        <h4> Um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui.
        </h4>
      </div>

    </section>

    

    <div className='separator'></div>

    <section className='titulo-experiencias titulos' >
      <div className='experiencias'>
      <h3 >Experiências</h3>
      </div>
    </section>

    <section className='conteudo-experiencias'>


    <div className='texto-experiencias'>

        <h4> Um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui, um paragrafo aqui.
        </h4>
      </div>

      <div className='imagem-experiencias'>
      <img className='imagem-conteudo-experiencias' src="/images/image3.jpg" alt="Foto de perfil"/>
      </div>

    </section>


    <section className='titulo-projetos titulos ' >
      <div className='projetos'>
      <h3 >Projetos</h3>
      </div>
    </section>

    <div className='separator-projetos'></div>


    <section className='projetos'>

     <div className='cards'>

     <div className='card-portfolio'>
      <img className='imagem-card-portfolio' src="/images/image4.jpg" alt="Foto de perfil"/>
     
      </div>
      

      <div className='card-pagina-de-vendas'>
      <img className='imagem-card-pagina-de-vendas' src="/images/image5.jpg" alt="Foto de perfil"/>
      </div>

     </div>

     <div className='titulos-cards'>
      <h3 className='titulo-card-portfolio'>Portfolio</h3>
       <div className='titulo-card-portfolio margin'>
      <h3 className='text-pagina'> 
        Página 
      </h3>

       <h3 className='text-vendas'> 
         de vendas
      </h3>

       </div>
  
        </div>

        <div className='descrição-cards'>
        <h3 className='text-portfolio'><strong>Em linguística, a noção de texto</strong> é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística </h3>

        <h3 className='text-card-pagina'>Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística </h3>


        </div>
            
        <div className='sub-descrição-cards'>
        <h6 className='sub-text-portfolio'><strong>Em linguística, a noção de texto</strong> é ampla e ainda aberta a uma definição  </h6>

        <h6 className='sub-text-card-pagina'>Em linguística, a noção de texto é ampla e ainda aberta a uma  </h6>

        </div>

    </section>

    <section className='contato'>

    <div className='titulo-contato titulos'>
      <h3 >Entre em CONTATO.</h3>
      </div>

      <div className='separator-contato'></div>

      <div className='conteudo-contato'>
      <img className='imagem-contato' src="/images/image6.png" alt="Foto de perfil"/>

        
        <div className='text-contato'>
        <div className='endereço'>
          <h3>ENDEREÇO</h3>
        </div>

        <div className='text-endereço'>
          <h6>Rua Qualquer, 123, Cidade Qualquer - EQ</h6>
        </div>

        <div className='telefone'>
          <h3>TELEFONE</h3>
        </div>

        <div className='text-telefone'>
          <h6> 12 3456-7890</h6>
        </div>

        <div className='email'>
          <h3>E-MAIL</h3>
        </div>

        <div className='text-email'>
          <h6>ola@grandesite.com.br</h6>
        </div>
        

        </div>
       
        
        </div>
        
        

    </section>
    
 


    <footer>

    </footer>

    </div>
  )



}

export default App;
