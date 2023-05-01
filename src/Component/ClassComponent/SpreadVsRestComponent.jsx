import React, { Component } from 'react'

export default class SpreadVsRestComponent extends Component {
    getData = (a,...data) =>{
        console.log("getData",data);
    }
    getDataSpread = (a,b,c) => {
        console.log(a,b,c);
    }
  render() {
    let arr = [12,45]
    return (
      <>
        <div>
            {this.getData(10,50,50,80,90)}
            {this.getDataSpread(10,50,90)}
        </div>
      </>
    )
  }
}
