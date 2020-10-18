import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '800px',
    width: '80vw',
    height: '60vw',
    maxHeight: '80vh',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'white',
    borderRadius: '5px',
  },
  avatar: {
    width: '30vw',
    height: '30vw',
    maxWidth: 300,
    maxHeight: 300,
  },
  button: {
    display: 'flex',
    alignSelf: 'flex-start',
  },
});

export default useStyles;
