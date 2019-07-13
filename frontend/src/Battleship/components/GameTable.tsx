import React, { Component } from 'react';
import Row from './Row'

export class GameTable extends Component{
    render(){
        const drawTable = ()=> {
            for(let i = 0; i < 10; i ++){
                return <Row id={i} />
            }
        }
        return (
            drawTable()
        )
    }
}