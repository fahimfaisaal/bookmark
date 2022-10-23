//=============Reusable Styles========
const repeatStyleGreen = (theme) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  color: `${theme.palette.common.white}`,
  padding: '8px 12px',
  border: 'none',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.dark}`,
  },
});

const repeatStyleCart = (theme) => ({
  backgroundColor: `${theme.palette.background.dark}`,
  color: `${theme.palette.text.primary}`,
  border: `1px solid #D1D5DB`,
  width: '40%',
  height: '56px',
  padding: '20px',
  fontFamily: 'Open sans',
  fontSize: '1rem',
  fontWeight: 600,
  '&:hover': {
    color: `${theme.palette.text.primary}`,
  },
});
//=============Reusable Styles========

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
            ...repeatStyleCart(theme),
          },
        },
        {
          props: { variant: 'btnGreen' },
          style: {
            ...repeatStyleGreen(theme),
          },
        },
        {
          props: { variant: 'btnGreenLight' },
          style: {
            ...repeatStyleGreen(theme),
            backgroundColor: `${theme.palette.primary.light}`,
            borderRadius: '20px',
            fontSize: '.7rem',
          },
        },
        {
          props: { variant: 'btnGreen' },
          style: {
            ...repeatStyleGreen(theme),
          },
        },
        {
          props: { variant: 'btnLogin' },
          style: {
            ...repeatStyleGreen(theme),
            width: '30%',
          },
        },
        {
          props: { variant: 'btnAskSeller' },
          style: {
            ...repeatStyleGreen(theme),
            borderRadius: '20px',
            fontSize: '.7rem',
          },
        },
        {
          props: { variant: 'btnGreenCart' },
          style: {
            ...repeatStyleCart(theme),
            backgroundColor: `${theme.palette.primary.main}`,
            color: `${theme.palette.common.white}`,
            width: '40%',
            '&:hover': {
              backgroundColor: `${theme.palette.primary.dark}`,
            },
          },
        },
        {
          props: { variant: 'btnOrder' },
          style: {
            backgroundColor: '#DBEAFE',
            padding: '8px 12px',
            color: '#7E8CF6',
            fontWeight: 500,
            '&:hover': {
              borderRadius: '5px',
              backgroundColor: '#DBEAFE',
              color: '#7E8CF6',
              fontWeight: 500,
            },
          },
        },
      ],
    },
  };
};

export default Button;
