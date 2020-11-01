import React from "react"
import QuoteCard from "./QuoteCard"


const ListCard = (props) => {

    return(
        props.lists.map( card => <QuoteCard  key={card.quote}character={card}/>)
    )
}

export default ListCard