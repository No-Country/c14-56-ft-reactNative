/* import 'font-awesome/css/font-awesome.min.css'; */
import './Search.css'


const Search = () => {
  return (
    <div className="search-bar activeicon">
      <ion-icon name="search"></ion-icon>
      <input type="text" placeholder="Buscar" className="search-input" />
    </div>
  );
};

export default Search;



