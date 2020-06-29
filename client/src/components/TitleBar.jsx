import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SaveSVG from '../icons/save.svg';
import SavedSVG from '../icons/saved.svg';
import ShareSVG from '../icons/share.svg';
import SuperhostSVG from '../icons/superhost.svg';
import StarPNG from '../icons/star.png';

const WrapperTitleBar = styled.div`
  display: block;
  box-sizing: border-box;
  max-width: 1120px;
  height: 112px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

const Section = styled.section`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  display: block;
  box-sizing: border-box;
  margin: auto;
  height: 100%;
  width: 100%;
  padding: 24px 0px 0px;
  margin: 0px 0px 24px;
  position: relative;
`;

const Title = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  display:block;
  box-sizing: border-box;
  margin-bottom: 4px;
  color: #222222;
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  height: 30px;
`;

const FlexContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #222222;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  height: 30px;
`;

const DetailContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-top: 0px;
  box-sizing: border-box;
`;

const ShareSaveContainer = styled.div`
  align-items: baseline;
  position: absolute;
  right: 0px;
  box-sizing: border-box;
`;

const SpanReview = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: baseline;
  min-width: 0px;
  margin-top: 8px;
  box-sizing: border-box;
`;

const SpanLocation = styled.span`
  cursor:pointer;
  display: inline-flex;
  align-items: baseline;
  min-width: 0px;
  margin-top: 8px;
  box-sizing: border-box;
  text-decoration: underline;
`;

const ButtonShareSave = styled.div`
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

const SvgIconSuperhost = styled.img`
  display: inline-flex;
  viewBox: 0 0 32 32;
  heigth: 10px;
  width: 10px;
  fill: currentcolor;
  overflow: hidden;
  cursor: pointer;
`;

const PngIcon = styled.img`
  display: inline-flex;
  viewBox: 0 0 32 32;
  heigth: 16px;
  width: 16px;
  fill: currentcolor;
  overflow: hidden;
  cursor: pointer;
`;

const TitleBar = ({ data, toggleFavorite }) => {
  const isSuperhost = () => {
    if (data.isSuperhost) {
      return (
        <span>
          ·
          <SvgIconSuperhost src={SuperhostSVG} />
          Superhost ·
        </span>
      );
    }
    // eslint-disable-next-line no-unreachable
    return (' · ');
  };

  const superhost = isSuperhost();

  const isFavorite = () => {
    if (data.isFavorite) {
      return (
        <span>
          <SvgIcon src={SavedSVG} />
          Saved
        </span>
      );
    }
    return (
      <span>
        <SvgIcon src={SaveSVG} />
        Save
      </span>
    );
  };

  const favorite = isFavorite();

  return (
    <WrapperTitleBar>
      <Section>
        <Title>
          {data.roomName.slice(0, 1).toUpperCase() + data.roomName.slice(1)}
        </Title>
        <FlexContainer>
          <DetailContainer>
            <SpanReview>
              <span>
                <PngIcon src={StarPNG} />
              </span>
              {data.averageReviewRoint}
              (
              {data.numberOfReviews}
              )
            </SpanReview>
            {superhost}
            <SpanLocation>
              {data.locationCity}
              ,
              {data.locationCountry}
            </SpanLocation>
            <ShareSaveContainer>
              <ButtonShareSave onClick={() => { toggleFavorite(); }}>
                <SvgIcon src={ShareSVG} />
                Share
              </ButtonShareSave>
              <ButtonShareSave onClick={() => { toggleFavorite(); }}>
                {favorite}
              </ButtonShareSave>
            </ShareSaveContainer>
          </DetailContainer>
        </FlexContainer>
      </Section>
    </WrapperTitleBar>
  );
};

TitleBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default TitleBar;
