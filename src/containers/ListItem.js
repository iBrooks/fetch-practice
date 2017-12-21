import React from 'react'
import classNames from '../constants/data'

const ListItem = props => {
  let icon
  let row
  if (props.visited) {
    icon = "fa fa-check-square"
    row = "crossOut"
  } else {
    icon = "fa fa-square"
  }
  return(
    <div className="row">
      <div className='small-12 columns'>
      <i className={icon} onClick={props.handleClick}></i>&nbsp;
        <span onClick={props.handleClick} className={row}>{props.placeName}</span>
        </div>
    </div>
  )
}

export default ListItem