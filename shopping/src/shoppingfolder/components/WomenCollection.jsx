import React from 'react'

const WomenCollection = (props) => {
 const  {title,image1,image2,image3,image4,image5,image6} = props.ladiesFashion;
  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      <div className='bannerBox'>
        <img src="assets/LadiesBanner.gif"></img>
      </div>
      {/* <img src={image1} alt='not found'/> */}
      <div className='menImages'>
        <img src="assets/Women/1.jpg" alt={title} />
        <img src="assets/Women/2.jpg" alt={title} />
        <img src="assets/Women/3.jpg" alt={title} />
        <img src="assets/Women/4.jpg" alt={title} />
        <img src="assets/Women/5.jpg" alt={title} />
        <img src="assets/Women/6.jpg" alt={title} />
      </div>


    </div>
  )
}

export default WomenCollection