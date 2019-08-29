import React from 'react';

export default function LibraryItem(props) {
    return (
        <div className="owned-game-item">

            <div className="title-image">
                <img src={props.titlePhoto} />
            </div>

            <div className="title-and-buttons-box">

                <div className="title">
                    {props.title}
                </div>

                <div className="buttons-row">

                    <div className="library-button-container">
                        <div className="right-side-info-row-subtitle">
                            Purchased On: {props.purchaseDate}
                        </div>
                        <div className="library-button"
                            onClick={() => props.history.push(`/game/${props.gameId}`)}>
                            View Store Page
                        </div>
                    </div>

                    <div className="library-button-container">
                        <div className="right-side-info-row-subtitle">
                            {props.reviewedText}
                        </div>
                        <div className="library-button"
                            onClick={() => props.history.push(`/game/${props.gameId}#review`)}>
                            {props.reviewButtonText}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}