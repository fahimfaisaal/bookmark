import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { LeftBtnStyle, RightBtnStyle } from './Styles';

const ButtonCarousel = ({ onClick, side }) => {
  if (side === 'left') {
    return (
      <LeftBtnStyle onClick={onClick}>
        <FiChevronLeft />
      </LeftBtnStyle>
    );
  } else if (side === 'right') {
    return (
      <RightBtnStyle onClick={onClick}>
        <FiChevronRight />
      </RightBtnStyle>
    );
  }
};

export const CustomRightBtn = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <ButtonCarousel onClick={() => onClick()} side="right" />;
};
export const CustomLeftBtn = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <ButtonCarousel onClick={() => onClick()} side="left" />;
};
