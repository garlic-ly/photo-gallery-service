import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NextSVG from '../icons/next.svg';
import PreviousSVG from '../icons/previous.svg';
import Xmark from '../icons/xmark.svg';
import SaveSVG from '../icons/save.svg';
import ShareSVG from '../icons/share.svg';

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
  flex: 1;
  justify-content: space-between;
  min-width: 50px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: block;
`;

const CloseButton = styled.button`
  cursor: pointer;
  display: incline-block
  box-sizing: border-box;
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
  justify-content: center;
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

const Counter = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: end;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const ShareSave = styled.div`
  flex: 1;
  justify-content: space-between;
`;

const ShareSaveContainer = styled.div`
  align-items: baseline;
  position: absolute;
  right: 50px;
  box-sizing: border-box;
`;

const ButtonShareSave = styled.button`
  display: inline-block;
  cursor: pointer;
  position: relative;
  text-align: center;
  border: none;
  background: transparent;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  text-decoration: underline;
`;

const SvgIcon = styled.img`
  display: inline-flex;
  viewBox: 0 0 32 32;
  heigth: 16px;
  width: 16px;
  fill: currentcolor;
  overflow: hidden;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: block;
  height: calc(100% - 112px);
  width: calc(100% - 192px);
  margin: auto;
  position relative;
  box-sizing: border-box;
`;

const ImageFlexCon = styled.div`
  height: 100%;
  display: block;
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
  height: 750px;
  width: 100%;
  position: static;
`;

const WrapperNextPrevious = styled.div`
  // position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const NextPrevious = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: calc(2% + 19px);
  margin-right: calc(2% + 19px);
  box-sizing: border-box;
`;

const NextPreviousContainer = styled.div`
  display: block;
  pointer-events: all;
`;

const NextPreviousButton = styled.button`
  display:inline-block;
  color: #222222;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  border-color: #484848;
  border-width: 1px;
  background: transparent;
  font-zie: 100%;
  width: 48px;
  height: 48px;
`;

const BottomWrapper = styled.div`
  display: block;
  height: 80px;
`;

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

  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          <Header>

            <CloseButtonContainer>
              <CloseButton>
                <InsideCloseButton onClick={() => {
                  console.log('clicked imagelist');
                  this.props.toggle(); }}>
                  <CrossSvg src={Xmark} />
                  <span> Close </span>
                </InsideCloseButton>
              </CloseButton>
            </CloseButtonContainer>

            <Counter> {this.state.currentImageIndex + 1}/{this.props.images.length} </Counter>

            <ShareSave>
              <ShareSaveContainer>
                <ButtonShareSave> <SvgIcon src={ShareSVG} />  </ButtonShareSave>
                <ButtonShareSave> <SvgIcon src={SaveSVG} /> </ButtonShareSave>
              </ShareSaveContainer>
            </ShareSave>

          </Header>
        </HeaderWrapper>


        <WrapperNextPrevious>
          <NextPrevious>
              <NextPreviousContainer>
                <NextPreviousButton onClick={this.previousImage}>
                  <SvgIcon src={PreviousSVG}/>
                </NextPreviousButton>
              </NextPreviousContainer>

              <NextPreviousContainer>
                <NextPreviousButton onClick={this.nextImage}>
                    <SvgIcon src={NextSVG}/>
                  </NextPreviousButton>
                </NextPreviousContainer>
            </NextPrevious>
          </WrapperNextPrevious>

        <ImageWrapper>
          <ImageFlexCon>
            <ImageContainer>
              <CurrentImage src={this.props.images[this.state.currentImageIndex]}/>
            </ImageContainer>
          </ImageFlexCon>
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