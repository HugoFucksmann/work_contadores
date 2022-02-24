import layoutStyle from "../styles/layoutStyle";

const Footer = (props) => {
    const classes = layoutStyle(props);

    return <div className={classes.footerLayout}>{props.children}</div>;
};

export default Footer;
