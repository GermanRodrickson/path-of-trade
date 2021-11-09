import React, { useState} from 'react';
import {
    TutorialLink,
    TutorialText,
    ImageWrapper
} from '../styles/TradeStyles.js'
import LoadingImage from './LoadingImage.js'

export default function TradeViewer() {
  const [showImages, setShowImages] = useState(false);
  const changeView = () => setShowImages(!showImages)

  return (
    <>
      {!showImages ?
        <>
          <TutorialText onClick={changeView}>Click middle mouse button to start capturing items.</TutorialText>
          <TutorialLink>Or see the tutorial.</TutorialLink>
        </>
        :
        <ImageWrapper>
          <LoadingImage />
          <p>Loading...</p>
        </ImageWrapper>
      }
    </>
  );
}
