import { findAllByTitle } from '@testing-library/dom' 
import React from 'react'
import Buttons from './Buttons'

import './Item.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Item = ({title, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first}) => {
  return (
      <div class="item" style={{
        backgroundImage: `url(${backgroundImg})`
      }}>
          <div class="item__container">
              <div class="item__text">
                  <p>{title}</p>
                  <div class="item__textDesc">
                      <p>{desc}</p>
                  </div>
              </div>
              <div class="item__lowerThird">
                  <div class="item__buttons">
                    <Buttons imp='primary' text={leftBtnLink} link={leftBtnLink} />
                    {twoButtons && (
                        <Buttons imp='secondary' text={rightBtnLink} link={rightBtnLink} />
                    )}
                    {first && (
                        <div class="item__expand">
                            <ExpandMoreIcon />
                        </div>
                    )}
                  </div>
              </div>
          </div>

      </div>
  )
}

export default Item