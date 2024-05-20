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
          <button onClick={''}>{''}</button>
          <div className="AddGuests">
            <button onClick={''}>Add guests</button>
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