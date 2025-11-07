import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="parent">
                <div className="top">
                    <img src={props.logo} alt="" />
                    <div className="save">Save <Bookmark /></div>
                </div>
                <div className="center">
                    <div className="firstDiv">
                        <h3>{props.company}</h3>
                        <span>{props.days}</span>
                    </div>
                    <span className='span1'>{props.role}</span>
                    <div className='spans'>
                        <span className='span2'>{props.type1}</span>
                        <span className='span3'>{props.type2}</span>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <div>{props.moneyperhours}</div>
                        <h5>{props.address}</h5>
                    </div>
                    <div className="right">
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card