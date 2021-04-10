import React from "react"
import "./cardListStyle.css"

import {Card} from "../card/Card"

export const CardList = (props) => {
    
    return (
        <div className="CardList">
            {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster}></Card>
          ))}
        </div>
    )
}