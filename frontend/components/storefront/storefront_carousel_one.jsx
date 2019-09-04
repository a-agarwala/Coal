import React, {useState, useEffect} from 'react';
import StorefrontCarouselBottomSquares from './storefront_carousel_bottom_squares';

export default function StorefrontCarouselOne(props) {

    const [position, setPosition] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isCarouselMoving, setCarouselMoving] = useState(true);

    const limit = props.gamesArray.length - 1;

    function movePosition(dir) {
        let newPosition = position + dir;
        if (newPosition < 0) {
            newPosition = limit;
        }
        if (newPosition > limit) {
            newPosition = 0;
        }
        setPosition(newPosition);
        setCarouselMoving(true);
    }

    useEffect(() => {
        let interval = null;
        if (isCarouselMoving) {
            interval = setInterval(() => {
                movePosition(1);
            }, 6000);
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    } );

    return (
        <div className="storefront-carousel-one-wrapper-one">
        <h2>Featured</h2>
        <div className="storefront-carousel-one-wrapper-two">
            
                <div className={isCarouselMoving ? "storefront-carousel-one-dir-button-left"
                                                 : "storefront-carousel-one-dir-button-left paused"}
                onClick={() => movePosition(-1)}>
                <div className="storefront-carousel-one-left-arrow"></div>
            </div>
            
            <div className="storefront-carousel-one-content-box" 
                onClick={() => props.history.push(`/game/${props.gamesArray[position].id}`)}
                onMouseEnter={() => setCarouselMoving(false)}
                onMouseLeave={() => setCarouselMoving(true)}>

                    <div className="storefront-carousel-one-big-photo-box">
                        <img className="storefront-carousel-one-big-actual-photo" src={props.gamesArray[position].photoUrls[photoIndex]}></img>
                    </div>

                    <div className="storefront-carousel-one-right-column">
                        <div className="storefront-carousel-one-title">
                            {props.gamesArray[position].title}
                        </div>
                        
                        <div className="storefront-carousel-one-thumbnails-box">
                            {props.gamesArray[position].photoUrls.slice(1).map( (photoUrl, idx) =>
                                <div className="storefront-carousel-one-thumbnail"
                                    key={idx}
                                    onMouseEnter={() => setPhotoIndex(idx + 1)}
                                    onMouseLeave={() => setPhotoIndex(0)}>
                                    <img src={photoUrl}></img>
                                </div>
                            )}
                        </div>

                        <div className="storefront-carousel-one-now-available">Now Available</div>
                        
                        <div className="storefront-carousel-one-price">${((props.gamesArray[position].price)/100).toFixed(2)}</div>
                        

                    </div>
                
                </div>

                <div className={isCarouselMoving ? "storefront-carousel-one-dir-button-right"
                                                 : "storefront-carousel-one-dir-button-right paused"}
                onClick={() => movePosition(1)}>
                <div className="storefront-carousel-one-right-arrow"></div>
            </div>

        </div>

                <StorefrontCarouselBottomSquares
                limit={limit}
                currentPosition={position}
                isCarouselMoving={isCarouselMoving}
                setPosition={setPosition}/>

        </div>
    )
}