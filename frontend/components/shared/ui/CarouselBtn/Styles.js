import styled from '@emotion/styled';

const commonStyle = (theme) => {
  return {
    position: 'absolute',
    zIndex: '999',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    transition: 'all 0.4s',
    textAlign: 'center',
    color: `${theme.palette.text.primary}`,
    cursor: 'pointer',
    backgroundColor: `${theme.palette.background.default}`,
    display: 'inlineFlex',
    width: '40px',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    boxShadow: `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;`,
    '&:hover': {
      color: `${theme.palette.text.third}`
    }
  };
};

export const LeftBtnStyle = styled('button')(({ theme }) => ({
  ...commonStyle(theme),
  left: '0',
  svg: {
    marginTop: '3px',
    marginLeft: '-3px'
  }
}));

export const RightBtnStyle = styled('button')(({ theme }) => ({
  ...commonStyle(theme),
  right: '2px',
  svg: {
    marginTop: '2px',
    marginRight: '-3px'
  }
}));
