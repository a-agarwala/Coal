
# Coal

Coal, a Steam clone, is an online store where users can purchase computer games and write reviews for those games.

(https://steam-clone.herokuapp.com "Live demo")


## Technologies

-Backend: Ruby on Rails, ActiveRecord, AWS, PostgreSQL
-Frontend: React/Redux

## Features

-Secure user authentication
-View and purchase games
-Write, read, edit, and delete reviews for games

## Screenshot Carousel, Review Ratings

Each game available for sale on Coal has a purchase page, where users can
among other things look at screenshots of the game, and if they own the game they can leave a review where they recommend or do not recommend (thumbs up or thumbs down) the game to other users of the site.

### Image Carousel

At the top of a games purchase page there is a React Component that contains a scrolling menu of thumbnails, and when a user selects a thumbnail a larger version of that image is displayed above the menu.

This was achieved by passing in an array of image URLs to the component, making each thumbnail a button with a unique id that refers to the index of its image in the array, and making the button set the state of the component when clicked on. The component's state holds a variable that determines which image to display in the larger view box.

```javascript
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
            <li key={index} style={{ backgroundImage: `url(${image})` }}>
                    <button className="thumbnail-button"
                        id={index}
                        onClick={(e) => this.changeBigPicture(e)}>
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
```


### Review Ratings

Each game is given an overall rating based on the number of users that have recommended it to other users in their reviews. To reflect the actual Steam app, which assigns certain phrases as ratings, e.g. ("Mixed", "Positive") based on percentage of positive user reviews, I had to pass a game's reviews into its purchase page component as props and use a switch function to properly assign ratings.

```javascript
 let gameRating = '';
        let gameRatingCalc = 0;
        if (this.props.allReviews) {
            this.props.allReviews.forEach((review) => {
                if (review.recommended) {
                    gameRatingCalc += 1;
                } 
            });

            if (gameRatingCalc > 0) {
                gameRatingCalc = Math.floor((gameRatingCalc/(this.props.allReviews.length) * 100));
                switch (true) {
                    case (gameRatingCalc < 20):
                        gameRating = 'Very Negative';
                        break
                    case (gameRatingCalc < 40):
                        gameRating = 'Negative';
                        break
                    case (gameRatingCalc < 60):
                        gameRating = 'Mixed';
                        break
                    case (gameRatingCalc < 80):
                        gameRating = 'Positive';
                        break
                    case (gameRatingCalc < 100):
                        gameRating = 'Very Positive';
                        break
                    case (gameRatingCalc === 100):
                        gameRating = 'Overwhelmingly Positive';
                        break
                } 
            } else {
                gameRating = 'Overwhelmingly Negative';
                gameRatingCalc = 0;
            };
        }
```


