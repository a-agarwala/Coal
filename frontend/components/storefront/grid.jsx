import React from 'react';
import GridItem from './grid_item';

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gridItemsArray = this.props.gamesArray.map((gameObject, index) =>
            <div className="grid-item-wrapper" key={index}>    
                <GridItem
                onRightSide={((index + 1) % 3 === 0)}
                gameId={gameObject.id}
                photoUrl={gameObject.photoUrl}
                price={gameObject.price}
                history={this.props.history}/>
            </div>
        );

        return (
            <div className="top-row-center-horizontally">

                <div className="storefront-grid-wrapper">
                    <h2>Popular</h2>
                    <div className="storefront-grid">
                            {gridItemsArray}
                    </div>

                </div> 

                {/* <div className="grid-popup-wrapper">
                    <div className="grid-popup-box left">

                    </div>
                </div> */}

            </div>
        )
    }

}

export default Grid;