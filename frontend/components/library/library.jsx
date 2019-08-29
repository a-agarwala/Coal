import React, {useState, useEffect} from 'react';
import LibraryItem from './library_item';

export default function Library(props) {

    useEffect(() => {
        props.refreshUserInfo(props.currentUserId);
    }, []);

    let libraryItems;
    
    if (props.ownedGames[0]) {
        libraryItems = props.ownedGames.map((ownedGame, index) => {
            return (
                <LibraryItem key={index}
                titlePhoto={ownedGame.title_photo}
                title={ownedGame.title}
                purchaseDate={ownedGame.purchase_date}
                gameId={ownedGame.id}
                reviewedText={
                    ownedGame.hasReviewed ?

                        (`Reviewed On: ${`\u00A0`}
                            ${props.reviews[ownedGame.id]['updatedOn'] ? 
                            props.reviews[ownedGame.id]['updatedOn'].slice(0, 10) :
                            props.reviews[ownedGame.id]['createdOn'].slice(0, 10)} `)
                            
                        : '-- Not Reviewed Yet --'
                }
                reviewButtonText={ownedGame.hasReviewed ? 'Update Review' : 'Write Review'}
                history={props.history}
                />
            )
        })
    }

    return (
        <div>
            { props.currentUserId &&
                <div className="library wrapper">
                    <h2>Your Games</h2>
                    {props.ownedGames[0] ?
                        libraryItems :
                        <div className="owned-game-item">
                            <h1 className="no-games-owned" onClick={() => props.history.push('/')}>
                                You do not own any games yet.
                            </h1>
                        </div>
                    }
                </div>
            }
        </div>
            
    )

}