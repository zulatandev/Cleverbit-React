import { styled } from '@mui/material/styles';

const PREFIX = 'intermediaries-detail';

export const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
};

export const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [`& .${classes.paper}`]: {
      padding: '16px',
      overflow: 'auto'
    }
  },
}));

