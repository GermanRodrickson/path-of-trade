
import styled from 'styled-components';
import imageBox from '../../public/images/image_box.png'

export const TutorialLink = styled.span`
  color: grey;
  font-size: 14px;
`
export const TutorialText = styled.p`
  width: 65%;
  margin: 30px auto 0 auto;
  line-height: 1.5;
`

export const ImageWrapper = styled.div`
  background-image: url(${imageBox});
  background-repeat: no-repeat;
  width: 340px;
  height: 190px;
  margin: 0 auto;
  position: relative;

  img {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%,-50%);
  }
  p {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
