import React, { useState } from 'react'
import Author from '../assets/images/avatar-michelle.jpg'
import ShareDetails from './ShareDetails'

const PostDetails = () => {

  const [isShareVisible, setIsShareVisible] = useState(false);

  return (
    <section className='author-container'>
      <ShareDetails isVisible={isShareVisible} />
        <div className='author-div'>
            <img src={Author} className='author-picture' />

            <div className='author-info'>
                <h4>Michelle Appleton</h4>
                <p>28 Jun 2020</p>
            </div>
        </div>
        <div className='share-div'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`share-icon ${!isShareVisible ? '' : 'hovered'}`} onClick={() => {
            setIsShareVisible(!isShareVisible);
          }}>
            <path className={`svg-icon ${!isShareVisible ? '' : 'path-fill'}`} fill="#6e7f97" d="M503.7 189.8L327.7 37.9C312.3 24.5 288 35.3 288 56v80.1C127.4 137.9 0 170.1 0 322.3c0 61.4 39.6 122.3 83.3 154.1 13.7 9.9 33.1-2.5 28.1-18.6C66.1 312.8 132.9 274.3 288 272.1V360c0 20.7 24.3 31.5 39.7 18.2l176-152c11.1-9.6 11.1-26.8 0-36.3z" />
          </svg>
        </div>
    </section>
  )
}

export default PostDetails