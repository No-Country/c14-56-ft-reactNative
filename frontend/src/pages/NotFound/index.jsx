import { Link } from 'react-router-dom'
import './PageNotFound.css' // Importa el archivo CSS para estilos

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Página no encontrada</h1>
      <p className="not-found-message">
        La página que estás buscando no existe.
      </p>
      <Link to="/home" className="not-found-link">
        Ir a la página de inicio
      </Link>
    </div>
  )
}

export default PageNotFound
