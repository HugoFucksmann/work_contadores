import { makeStyles } from "@material-ui/core";

const layoutStyle = makeStyles((theme) => ({
  fullScreen: {
    height: "100vh",
    backgroundColor: "#d4d4d4",
  },
  headerLayout: {
    height: "10vh",
    backgroundColor: "red",
  },
  bodyLayout: {
    height: "90vh",
    backgroundColor: "#ededed",
    margin: "5vh",
  },
  footerLayout: {
    height: "10vh",
    backgroundColor: "green",
  },
}));

export default layoutStyle;
