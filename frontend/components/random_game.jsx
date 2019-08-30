import React from 'react';

class RandomGame extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.history.push(`/game/${Math.floor(Math.random() * 14) + 1}`)
    }

    render() {
        return(
            <div>

            </div>
        )
    }

}

export default RandomGame;