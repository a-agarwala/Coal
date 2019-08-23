import React, {useState, useEffect} from 'react';

export default function StorefrontCarouselBottomSquares(props) {
    const [position, setPosition] = useState(0);
    
    useEffect(() => {
        setPosition(props.currentPosition);
    }, [props.currentPosition]);

    let bottomSquares = [];

    for (let i = 0; i <= props.limit; i++) {
        let bottomSquare = (
            <div key={i}
                onClick={()=> props.setPosition(i)}
                className={ i === position ?
                "storefront-carousel-bottom-square-highlighted" :
                "storefront-carousel-bottom-square-regular"
            }>
            </div>
        );
        bottomSquares.push(bottomSquare);
    }

    return (
        <div className="storefront-carousel-bottom-squares-wrapper">
            <div className="storefront-carousel-bottom-square-box">
                {bottomSquares}
            </div>
        </div>
    )

}