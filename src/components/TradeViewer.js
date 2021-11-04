import React, { useState, useEffect} from 'react';
import {
    TutorialLink,
    TutorialText,
    ImageWrapper
} from '../styles/TradeStyles.js'
import img1 from '../../public/images/animation/hourglass_1.png'
import img2 from '../../public/images/animation/hourglass_2.png'
import img3 from '../../public/images/animation/hourglass_3.png'
import img4 from '../../public/images/animation/hourglass_4.png'
import img5 from '../../public/images/animation/hourglass_5.png'
import img6 from '../../public/images/animation/hourglass_6.png'
import img7 from '../../public/images/animation/hourglass_7.png'
import img8 from '../../public/images/animation/hourglass_8.png'
import img9 from '../../public/images/animation/hourglass_9.png'
import img10 from '../../public/images/animation/hourglass_10.png'
import img11 from '../../public/images/animation/hourglass_11.png'
import img12 from '../../public/images/animation/hourglass_12.png'
import img13 from '../../public/images/animation/hourglass_13.png'
import img14 from '../../public/images/animation/hourglass_14.png'
import img15 from '../../public/images/animation/hourglass_15.png'
import img16 from '../../public/images/animation/hourglass_16.png'

export default function TradeViewer() {
  const [showImages, setShowImages] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]
  const changeView = () => setShowImages(!showImages)

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      {!showImages ?
        <>
          <TutorialText onClick={changeView}>Click middle mouse button to start capturing items.</TutorialText>
          <TutorialLink>Or see the tutorial.</TutorialLink>
        </>
        :
        <ImageWrapper>
          <img src={currentImage} />
          <p>Loading...</p>
        </ImageWrapper>}
    </>
  );
}
