import { IoIosClose } from 'react-icons/io';
import { CloseBtnContaner } from '../NavBar/Styles';

function CloseBtn({ onClick }) {
  return (
    <CloseBtnContaner onClick={onClick}>
      <IoIosClose />
    </CloseBtnContaner>
  );
}

export default CloseBtn;
