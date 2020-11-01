import React, { Component }from "react"
import PropTypes from 'prop-types';
import "./QuoteCard.css"


class QuoteCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            favoris: false,
        }
    }

    favorite = () => {
        let favoris = !this.state.favoris;
        this.setState({ favoris })
    }

    favoriteClass = () => {
        return this.state.favoris ? { color: "#ecc94b" } : {color: "#eee"};
    }

    render () {
        return (

            <figure className="QuoteCard">
                <img
                src={this.props.character.image}
                alt={this.props.character.character}>
                </img>
                <figcaption>
                <blockquote>
                    {this.props.character.quote}

                </blockquote>
                <p>
                    <cite>{this.props.character.character}</cite>
                    <span onClick={this.favorite} style={this.favoriteClass()}>&#9733;</span>
                </p>

                </figcaption>
            </figure>
    
        )

    }

}

export default QuoteCard