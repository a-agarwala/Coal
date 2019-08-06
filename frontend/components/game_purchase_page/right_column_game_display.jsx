import React from 'react';

class RightColumnGameDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const image = this.props.image;

        return (
            <div id="right-column-game-display-wrapper">
                <div id="title-picture-display"> 
                    <img src={image}></img>
                </div>
                <div id="right-side-info-box">

                    <div id="right-side-info-paragraph">
                        {this.props.info.paragraph}
                    </div>

                    <div className="right-side-info-row"
                        style={{ marginTop: '10px' }}>
                        <div className="right-side-info-row-subtitle">
                            User Reviews:
                        </div>

                        <div className="right-side-info-row-info-wrapper"
                            >
                            <div className="right-side-info-row-info-bluetext">
                                {this.props.info.rating}
                            </div>
                            <div className="right-side-info-row-graytext">
                                ({this.props.info.reviewCount})
                            </div>
                        </div>
                        
                    </div>

                    <div className="right-side-info-row"
                        style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <div className="right-side-info-row-subtitle">
                            Release Date:
                        </div>

                        <div className="right-side-info-row-info-wrapper">
                            <div className="right-side-info-row-date">
                                {this.props.info.releaseDate}
                            </div>
                        </div>
                        
                    </div>

                    <div className="right-side-info-row">
                        <div className="right-side-info-row-subtitle">
                            Developer:
                        </div>

                        <div className="right-side-info-row-info-wrapper">
                            <div className="right-side-info-row-info-bluetext">
                                {this.props.info.developer}
                            </div>
                        </div>
                        
                    </div>

                    <div className="right-side-info-row">
                        <div className="right-side-info-row-subtitle">
                            Publisher:
                        </div>

                        <div className="right-side-info-row-info-wrapper">
                            <div className="right-side-info-row-info-bluetext">
                                {this.props.info.publisher}
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>

        )
    }
}

export default RightColumnGameDisplay;