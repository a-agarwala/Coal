# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

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
