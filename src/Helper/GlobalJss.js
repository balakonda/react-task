import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    body: {
      color: '#8F9EA2',
      background: '#F4F4F6',
    },
    a: {
      textDecoration: 'none',
    },
    main: {
      marginTop: '72px',
      padding: '15px 0',
      height: 'calc(100vh - 72px)',
      '& > section': {
        '@media only screen and (min-width: 768px)': {
          padding: '0 10%',
        },
      },
    },
    '.card-title': {
      fontSize: '1.5rem',
      color: '#537178',
    },
    '.form-control': {
      background: '#D9DFEB',
      color: '#7A7D7E',
      borderRadius: '8px',
      height: '40px',
      border: 0,
    },
    '.input-group-text': {
      background: '#D9DFEB',
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },
    '.btn': {
      height: '40px',
      borderRadius: '8px',
    },
    '.btn-primary': {
      backgroundColor: '#5285EC',
      borderColor: '#5285EC',
    },
    '.text-primary': {
      color: '#5285EC !important',
    },
    '.fullScreen': {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.miniPopup': {
      maxWidth: '296px',
      backgroundColor: '#fff',
      padding: '8px',
      boxShadow: '0px 3px 6px #0000000A',
      border: {
        radius: '12px',
      },
      flex: '1 1 auto',
    },
  },
});
export default useStyles;
