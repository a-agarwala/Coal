import React from 'react';
import LeftColumnGameDisplay from './left_column_game_display';
import RightColumnGameDisplay from './right_column_game_display';

class GameDisplayTopRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                
                <div className="top-row-center-horizontally">

                    <div id="game-top-row-content">
                    <div id="game-top-row-background">
                        <img src={"https://steamstore-a.akamaihd.net/public/images/v6/app/game_page_background_shadow.png?v=2"}></img> 
                    </div>
                    <LeftColumnGameDisplay gamePhotos={this.props.gamePhotos}/>
                    <RightColumnGameDisplay info={this.props.rightInfo}
                                            image={this.props.gamePhotos[0]}/>
                    </div>

                </div>

        )
    }
}

export default GameDisplayTopRow;