import layoutStyle from "../styles/layoutStyle";

const Body = (props) => {
    const classes = layoutStyle(props);

    return <div className={classes.bodyLayout}>{props.children}</div>;
};

export default Body;
