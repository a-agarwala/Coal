import React from 'react';

class GameDisplayTopRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="center_horizontally">
                    <div className="thumbnail-scrollbar">
                        {this.props.gamePhotos && 
                        this.props.gamePhotos.map(photo=> 
                        <li><img style={{width: '115px'}}
                       src={photo}></img></li>)}
                    </div >
                </div>
            </div>
        )
    }
}

export default GameDisplayTopRow;