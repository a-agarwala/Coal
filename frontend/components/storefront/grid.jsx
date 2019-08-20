import React from 'react';
import GridItem from './grid_item';


class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gridItemsArray = this.props.gamesArray.map((gameObject, index) =>
            <div key={index}>    
                <GridItem
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

            </div>
        )
    }

}

export default Grid;