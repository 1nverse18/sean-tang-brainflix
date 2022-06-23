import './SearchBar.scss';

function SearchBar() {
    return (
        <>
        <div className="header__searchbar-container">
        <input className="header__searchbar" type="text" placeholder="Search"></input>
        </div>
        </>
    );
  }
  
  export default SearchBar;