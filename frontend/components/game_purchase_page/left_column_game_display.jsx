import React from 'react';

class LeftColumnGameDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBigImage: 0
        };

        this.changeBigPicture = this.changeBigPicture.bind(this);
    }

    changeBigPicture(e) {
        e.preventDefault();

        this.setState({
            currentBigImage: e.currentTarget.id
        });
    }

    render() {

        const images = this.props.gamePhotos.slice(1);

        let thumbnails = images.map((image, index) => 
                <li key={index}>
                    <button className="thumbnail-button"
                        id={index}
                        onClick={(e) => this.changeBigPicture(e)}
                        style={{backgroundImage: `url(${image})`}}>
                    </button>
                </li>
            );

        return (
            <div id="left-column-game-display-wrapper">
                
                <div id="game-display-big-picture">
                    <img src={images[this.state.currentBigImage]}></img>
                </div>

                <div className="thumbnail-scrollbar">
                    {thumbnails}
                </div >

                
            </div>
        )
    }
}

export default LeftColumnGameDisplay;