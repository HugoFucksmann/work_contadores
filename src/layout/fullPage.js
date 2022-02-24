import { makeStyles } from "@material-ui/core";
import layoutStyle from "../styles/layoutStyle";

const FullPage = (props) => {
    const classes = layoutStyle(props);

    return <div className={classes.fullScreen}>{props.children}</div>;
};

export default FullPage;
