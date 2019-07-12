import React from 'react';
import LeftColumnGameDisplay from './left_column_game_display';


class GameDisplayTopRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="center_horizontally">
                    <LeftColumnGameDisplay gamePhotos={this.props.gamePhotos}/>
                </div>
            </div>
        )
    }
}

export default GameDisplayTopRow;