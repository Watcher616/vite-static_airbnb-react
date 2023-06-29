
import Star from "../img/star.png" 
import "./Card.css"
import PropTypes from 'prop-types';


function Card({ item }){
    
    const {title, price, coverImg, stats, location, openSpots} = item
    //const availableItem = openSpots > 0 ? `${openSpots}` : "SOLD OUT"
    //const isAvailable = openSpots > 0 ? true : false
    let badgeText 
    if(openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        
         <div className="card">
            {/* <p className="card--status">{availableItem}</p> */}
         {/*    {!isAvailable  && <p className="card--status"> {badgeText} </p> } */}
           {badgeText &&  <p className="card--status"> {badgeText} </p>}
             <img className="card--cover-photo" src={coverImg} alt="Cover Photo" />
             <div className="card--desc">
                <div className="card--rating">
                    <img src={Star} alt="" className="card--star" />
                    <p className="rating-text">{stats.rating}</p>
                    <p className="country">({stats.reviewCount}) {location} </p>
                </div>
                <h3 className="card--course"> {title}
</h3>
                <p className="price">From ${price} <span className="person">/ person</span> </p>
             </div>
         </div>
       
    )
}
Card.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      coverImg: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        reviewCount: PropTypes.number.isRequired
      }),
      location: PropTypes.string.isRequired,
      openSpots: PropTypes.number.isRequired
    }).isRequired
  };
  

export default Card