import React, { Component } from 'react'
import CardData from './CardData'
import PropsClassComponent from './PropsClassComponent'

export default class ComponentForCard extends Component {
    render() {
        return (
            <>
                <div className=" col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            CardData.map((val, ind) => {
                                return (<PropsClassComponent key={ind} imgSrc={val.imgSrc} prodTitle={val.prodTitle} />)
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
