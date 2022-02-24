import layoutStyle from "../styles/layoutStyle";

const Header = (props) => {
    const classes = layoutStyle(props);

    return <div className={classes.headerLayout}>{props.children}</div>;
};

export default Header;
