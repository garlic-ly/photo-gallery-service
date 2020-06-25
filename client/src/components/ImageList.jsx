import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Next from '../icons/next.svg';
import Previous from '../icons/previous.svg';
import Xmark from '../icons/xmark.svg';

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

const wrapper = styled.div`

`;

const CurrentImage = styled.img`
  display: inline-block;
  vertical-align: bottom;
  height: 100%;
  width: 100%;
  min-height: 1px;
`;

class ImageList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  render () {
    return (
      <HeaderWrapper>
        <Header>
          <CloseButtonContainer>
            <CloseButton>
              <InsideCloseButton>
                <CrossSvg src={Xmark}/>
                <span> Close </span>
              </InsideCloseButton>
            </CloseButton>
          </CloseButtonContainer>
        </Header>
      </HeaderWrapper>
      // <div> <CurrentImage src={this.props.images[0]}/> </div>

    )
  }


};



ImageList.propTypes= {
  images: PropTypes.array,
  toggle: PropTypes.func,
};

export default ImageList;