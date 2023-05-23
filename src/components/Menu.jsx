
const Menu = ({handleClick}) => {
  return (
      <nav className="navbar">
        <div className="container nav-m">
          <h3>
            <a href="/">
              <span>Josue</span> <span>Garcés</span>
            </a>
          </h3>
          <button type="button" onClick={handleClick}>
            Contacto
          </button>
        </div>      
      </nav>
  )
}

export default Menu