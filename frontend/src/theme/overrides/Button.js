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
            backgroundColor:
              theme.palette.mode === 'light'
                ? `${theme.palette.secondary.main}`
                : `${theme.palette.background.paper}`,
            color: `${theme.palette.common.black}`,
            border: `3px solid ${theme.palette.background.dark}`,
            padding: '12px 16px',
            fontFamily: 'Open sans',
            fontSize: '0.7rem',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: `${theme.palette.secondary.main}`,
              color: `${theme.palette.common.white}`,
            },
          },
        },
        {
          props: { variant: 'btnDark' },
          style: {
            backgroundColor: `${theme.palette.primary.main}`,
            color: `${theme.palette.common.white}`,
            '&:hover': {
              backgroundColor: `${theme.palette.action.hover}`,
            },
          },
        },
      ],
    },
  };
};

export default Button;
