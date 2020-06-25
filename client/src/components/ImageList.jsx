import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Next from '../icons/next.svg';
import Previous from '../icons/previous.svg';
import Xmark from '../icons/xmark.svg';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  max-height: 100%;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.section`
  display:block;
 `;

const Header = styled.div`
  padding: 40px 40px 40px 20px;
  display: flex;
  align-items: center;
  z-index: 1;
  border-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
`;

const CloseButtonContainer = styled.div`
  min-width: 50px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: block;

`;

const CloseButton = styled.button`
  cursor: pointer;
  display: incline-block
  border-sizing: border-box;
  position: relative;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  background: rgba(34, 34, 34, 0.1);
  color: #222222;
  border: none;
`;

const InsideCloseButton = styled.span`
  display: flex;
  flex-direction: row;
  align items: row;
  justify-content: center
`;

const CrossSvg = styled.img`
  display: inline-flex;
  viewBox: 0 0 32 32;
  heigth: 10px;
  width: 10px;
  fill: currentcolor;
  overflow: hidden;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: block;
  mid-width: 774px;
  max-height: 785px;
  height: calc(100%-224px);
  top: 112px;
  width: calc(100% - 192px);
  margin: auto;
  position relative;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  display: inline-block;
  vertical-align: bottom;
  height: 100%;
  width: 100%;
  min-height: 1px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const CurrentImage = styled.img`
  object-fit: scale-down;
  vertical-align: bottom;
  height: 100%;
  width: 100%;
  position: static;
`;

const BottomWrapper = styled.div`
  display: block;
  height: 80px;
`

class ImageList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  nextImage () {
    const next = this.state.currentImageIndex + 1;
    if (next < this.props.images.length) {
      this.setState({
        currentImageIndex: next
      })
    }
  }

  previousImage () {
    const previous = this.state.currentImageIndex - 1;
    if (previous >= 0) {
      this.setState({
        currentImageIndex: previous
      })
    }
  }


  render () {
    return (
      <Wrapper>
      <HeaderWrapper>
        <Header>
          <CloseButtonContainer>
            <CloseButton>
              <InsideCloseButton onClick={() => {this.props.toggle()}}>
                <CrossSvg src={Xmark}/>
                <span> Close </span>
              </InsideCloseButton>
            </CloseButton>

            <CloseButton>
              <InsideCloseButton onClick={this.previousImage}>
                <span> Previous </span>
              </InsideCloseButton>
            </CloseButton>


            <CloseButton>
              <InsideCloseButton onClick={this.nextImage}>
                <span> Next </span>
              </InsideCloseButton>
            </CloseButton>


          </CloseButtonContainer>
        </Header>
      </HeaderWrapper>
      <ImageWrapper>
        <ImageContainer>
          <CurrentImage src={this.props.images[this.state.currentImageIndex]} />
        </ImageContainer>
      </ImageWrapper>
    </Wrapper>
    )
  }

};



ImageList.propTypes= {
  images: PropTypes.array,
  toggle: PropTypes.func,
};

export default ImageList;