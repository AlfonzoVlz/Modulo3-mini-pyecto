import './Nav.css'
import Logo from '../Logo/logo.png'
import Search from '../Logo/search-3-64.png'


export const Nav = () => {

    return(
        <nav className="nav-container">
      <div className="left-content">
        <div className="logo">
          <img  src={Logo} alt="logo" />
        </div>
        <h1>Stays in Finland</h1>
      </div>
      <div className="right-content">
        <div className="search-container">
        <select className='locationSelect' value='' onChange={''}>
          <option value="">Locations</option>
          <option value="Helsinki">Helsinki</option>
          <option value="Turku">Turku</option>
          <option value="Vaasa">Vaasa</option>
          <option value="Oulu">Oulu</option>
        </select>
          <div className="AddGuests">
            <button onClick={''}>
              <input type="text" placeholder='Add guests' />
            </button>
          </div>
          <button onClick={''}>
            <img className= 'iconSearch' src={Search} alt="search" />
          </button>
        </div>
        <h6>12+ stays</h6>
      </div>
      
    </nav>
        
    )
}