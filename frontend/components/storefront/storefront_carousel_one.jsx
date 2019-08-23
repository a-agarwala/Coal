import React, {useState, useEffect, useRef } from 'react';

export default function StorefrontCarouselOne(props) {

    const [position, setPosition] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);
    
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
    }

    return (
        <div className="storefront-carousel-one-wrapper">

            <div className="storefront-carousel-one-dir-button-left" onClick={() => movePosition(-1)}>
                <div className="storefront-carousel-one-left-arrow"></div>
            </div>

            <div className="storefront-carousel-one-content-box" onClick={() => props.history.push(`/game/${props.gamesArray[position].id}`)}>

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

            <div className="storefront-carousel-one-dir-button-right" onClick={() => movePosition(1)}>
                <div className="storefront-carousel-one-right-arrow"></div>
            </div>

        </div>
    )
}