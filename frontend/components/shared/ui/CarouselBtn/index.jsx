import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { LeftBtnStyle, RightBtnStyle } from './Styles';

function ButtonCarousel({ onClick, side }) {
  if (side === 'left') {
    return (
      <LeftBtnStyle onClick={onClick}>
        <FiChevronLeft />
      </LeftBtnStyle>
    );
  }
  if (side === 'right') {
    return (
      <RightBtnStyle onClick={onClick}>
        <FiChevronRight />
      </RightBtnStyle>
    );
  }
}

export function CustomRightBtn({ onClick }) {
  // onMove means if dragging or swiping in progress.
  return <ButtonCarousel onClick={() => onClick()} side="right" />;
}
export function CustomLeftBtn({ onClick }) {
  // const {
  //   onMove,
  //   carouselState: { currentSlide, deviceType }
  // } = rest;
  // onMove means if dragging or swiping in progress.
  return <ButtonCarousel onClick={() => onClick()} side="left" />;
}
