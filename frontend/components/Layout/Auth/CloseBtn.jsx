/** @format */

import { CloseBtnContaner } from '../NavBar/Styles';

import { IoIosClose } from 'react-icons/io';

const CloseBtn = ({ onClick }) => {
  return (
    <CloseBtnContaner onClick={onClick}>
      <IoIosClose />
    </CloseBtnContaner>
  );
};

export default CloseBtn;
