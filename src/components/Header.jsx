
const Header = ({headerRef}) => {
  return (
    <header ref={headerRef} className="header">
      <div className="container header-container">
        <div className="img-container">
          <img className="img-perfil" src="./src/pictures/foto-portfolio.png" alt="josue jouvin" />
          <div className="img-overlay">
            <img className="img-dots" src="./src/pictures/side-dots.png" alt="josue jouvin" />
          </div>
        </div>
        <div className="header-descripcion">
          <h1>¡Hola! soy <span>Josue Garcés</span></h1>
          <p><strong>Frontend Developer</strong>, actualmente creando cosas útiles y hermosas en Ecuador.</p>
        </div>
      </div>
    </header>
  )
}

export default Header

