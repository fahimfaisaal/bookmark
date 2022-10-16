import palette from '../palette';

const Button = (theme) => {
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: '0.6rem',
          fontWeight: 500,
          borderRadius: '5px',
          textTransform: 'initial',
          fontFamily: 'Poppins',
        },
      },
      variants: [
        {
          props: { variant: 'btnLight' },
          style: {
            backgroundColor: `${palette.background.paper}`,
            color: `${palette.common.black}`,
            border: `3px solid ${palette.background.dark}`,
            padding: '12px 16px',
            fontFamily: 'Open sans',
            fontSize: '0.7rem',
            fontWeight: 600,
          },
        },
        {
          props: { variant: 'btnDark' },
          style: {
            backgroundColor: `${palette.primary.main}`,
            color: `${palette.common.white}`,
            '&:hover': {
              backgroundColor: `${palette.action.hover}`,
            },
          },
        },
      ],
    },
  };
};

export default Button;
