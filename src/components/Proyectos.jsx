import proyectosPortfolio from '../db/proyectos.json';

const Proyectos = () => {
  return (
    <section className="proyectos">
      <div className="container">
        <h2 className="titulos proyecto_titulo">Portafolio & Proyectos</h2>
        <div className="container_proyectos">
        {
          proyectosPortfolio.proyectos.map(proyecto =>(
            <div key={proyecto.id} className="card_proyecto">
              <img src={proyecto.image} alt={`proyecto ${proyecto.name}`} />
              <h3 className='card_titulo'>{proyecto.name}</h3>
              <p className='card_parrafo'>{proyecto.description}</p>
              {proyecto.tecnologias && (
                <p className='card_tecnologias'>
                  <strong>Construido con:</strong> {proyecto.tecnologias}
                </p>
              )}
              <div className="card_links">
                {
                  proyecto.demoLink &&(
                    <span><a target='_blanck' rel='noreferrer' className='card_demo' href={proyecto.demoLink}>Ver Proyecto</a></span>
                  )
                }
                <span><a target='_blanck' rel='noreferrer' className='card_repo' href={proyecto.repoLink}>Ver Codigo</a></span>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default Proyectos