import { makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';


const layoutStyle = makeStyles((theme) => ({
   fullPage: {
       height: "100vh",
       width: "100vh",
       backgroundColor: "#000"
   }
}));

export default layoutStyle;