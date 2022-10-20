const Button = (theme) => {
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: '0.86rem',
          fontWeight: 600,
          borderRadius: '5px',
          textTransform: 'initial',
          fontFamily: 'Open sans',
        },
      },
      variants: [
        {
          props: { variant: 'btnCat' },
          style: {
            backgroundColor: `${theme.palette.background.default}`,
            color: `${theme.palette.text.primary}`,
            border: `1px solid #D1D5DB`,
            padding: '12px 16px',
            fontFamily: 'Open sans',
            fontSize: '0.856rem',
            fontWeight: 600,
            '&:hover': {
              color: `${theme.palette.text.primary}`,
            },
          },
        },
        {
          props: { variant: 'btnCart' },
          style: {
            backgroundColor: `${theme.palette.background.dark}`,
            color: `${theme.palette.text.primary}`,
            border: `1px solid #D1D5DB`,
            width: '40%',
            fontFamily: 'Open sans',
            fontSize: '0.856rem',
            fontWeight: 600,
            '&:hover': {
              color: `${theme.palette.text.primary}`,
            },
          },
        },
        {
          props: { variant: 'btnGreen' },
          style: {
            backgroundColor: `${theme.palette.primary.main}`,
            color: `${theme.palette.common.white}`,
            padding: '8px 12px',
            border: 'none',
            '&:hover': {
              backgroundColor: `${theme.palette.primary.dark}`,
            },
          },
        },
      ],
    },
  };
};

export default Button;
