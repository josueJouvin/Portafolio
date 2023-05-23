import InfoTecnologias from '../db/experiencia.json';
const Tecnologias = () => {
  return (
    <section>
        <div className="container tecnologias">
            <h2 className='titulos'>Habilidades & Experiencia</h2>
            <p className='card_parrafo tecnologias-parrafo'>HTML, CSS, JS, construcción de aplicaciones web Front End con React, animaciones y codificación de diseños interactivos. Actualmente adquiriendo mas conocimientos sobre React, Next js y Strapi.</p>
            <a className='tecnologias-linkedin' target='_blanck' rel='noreferrer' href="https://www.linkedin.com/in/josuejouvin/">Visita mi Linkedin para más detalles.</a>
            <ul className='tecnologia-lista'>
                {
                    InfoTecnologias.tecnologias.map(tec => (
                        <li key={tec.id}>
                            <img src={tec.logo} alt={tec.nombre} />
                            <span>{tec.nombre}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Tecnologias