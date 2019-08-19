import React from 'react';
import GridItem from './grid_item';


class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="top-row-center-horizontally">

                <div className="storefront-grid-wrapper">

                    <div className="storefront-grid">
                            <GridItem/>
                    </div>

                </div> 

            </div>
        )
    }

}

export default Grid;