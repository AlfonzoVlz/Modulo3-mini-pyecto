import './Card.css'
import starIcon from '../Logo/star.png'

export const Card = ({ city, country, superHost, title, rating, maxGuests, type, beds, photo }) => {
    return (

        <div className='container-Card'>
            <figure className='fig-Card'>
                <img className='imagen' src={photo} alt="" />
            </figure>
            <div className='card-Details'>
                <div className='datails'>
                    {superHost && <div className="superHost"><button>SUPER HOST</button></div>}
                    <p className="type">{`${type} · ${beds} beds`}</p>  
                    <img className='icon' src={starIcon} alt="" />
                    <span className='rating'>{rating}</span>
                </div>
                <span className='title'>{title}</span>
            </div>
        </div>
    )
}