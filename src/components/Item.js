import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './Item.css'
import Buttons from './Buttons'

const Item = (props) => {

    let dynamicClassName = props.clsname;
    let staticClassName = "item__container ";
    let newClassName = staticClassName.concat(dynamicClassName)

    return (
        <div className="item" style={{
            backgroundImage: `url(${props.backgroundImg})`
        }}>
            <div className={newClassName}>
                <div className="item__text">
                    <p>{props.title}</p>
                    <div className="item__textDesc">
                        <p>{props.desc} <a href="https://www.tesla.com/support/taking-delivery?redirect=no" target='_blank'>{props.desc2}</a></p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                        <Buttons imp='primary' text={props.leftBtnTxt} link={props.leftBtnLink} />
                        {props.twoButtons && (
                            <Buttons imp='secondary' text={props.rightBtnTxt} link={props.rightBtnLink} />
                        )}
                    </div>
                    {props.first && (
                        <div className="item__expand">
                            <ExpandMoreIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item