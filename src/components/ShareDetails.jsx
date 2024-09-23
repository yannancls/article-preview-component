import React from 'react'
import FbIcon from '../assets/images/icon-facebook.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'
import PinterestIcon from '../assets/images/icon-pinterest.svg'

const ShareDetails = ({isVisible}) => {
  return (
    <div className={`share-active-div ${isVisible ? '' : 'hidden'}`}>
        <p>SHARE</p>
        <img src={FbIcon} />
        <img src={TwitterIcon} />
        <img src={PinterestIcon} />
    </div>
  )
}

export default ShareDetails