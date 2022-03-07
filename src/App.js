import Header from "./layout/header";
import FullPage from "./layout/fullPage";
import Body from "./layout/body";
import Footer from "./layout/footer";
import CardUno from "./components/card";
import GridLayout from "./layout/gridLayout";
import {
  Card,
  CardContent,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import ComponenteU from "./components/componenteU";
import { SpeedDial } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import "./styles/diagonaldiv.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

import { ReactComponent as YourSvg } from "./cere.svg";

const cardh = 400;
const cardw = 300;

/* const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
]; */

function App() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div style={{ height: "100vh" }}>
      <animated.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "70%",
          width: "70%",
          backgroundColor: "#E9E4F4",
        }}
        elevation={3}
      >
        <Preg />
      </animated.div>
      {/* <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial> */}
    </div>
  );
}

const steps = [
  "pregunta 1",
  "pregunta 2",
  "pregunta 3",
  "pregunta 4",
  "pregunta 5",
  "pregunta 6",
];

const Preg = () => {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0 });
  const classes = stttt();

  return (
    <Grid container spacing={2} style={{ height: "102%" }}>
      <Grid
        item
        xs={4}
        style={{
          backgroundColor: "#B6A9CB",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontSize: 26,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 60,
          }}
        >
          En caso de que esto sea una pregunta responder la opcion correcta, en
          este caso es ?
        </Typography>
      </Grid>
      <Grid item xs={8} style={{ backgroundColor: "#f2f2f2", padding: 80 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stepper
              className={classes.root}
              activeStep={1}
              alternativeLabel
              style={{
                background: "transparent",
                margin: "-40px",

                marginBottom: 40,
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          {[
            "esta es la opcion 1",
            "esta es la opcion 2",
            "esta es la opcion 3",
            "esta es la opcion 4",
          ].map((op) => (
            <Grid item xs={9}>
              <Card variant="outlined" className={classes.cardd}>
                <CardContent>
                  <Typography style={{ fontSize: 18 }}>{op}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid item xs={2} style={{ marginTop: -50, marginLeft: 40 }}>
            <div ref={ref} onClick={() => toggle(!open)}>
              <animated.YourSvg
                className={styles.fill}
                style={{ height: 150 }}
              />
              <animated.div className={styles.content}>
                {props.width.to((x) => x.toFixed(0))}
              </animated.div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Home = () => {
  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      style={{
        height: "100%",
      }}
    >
      {["juego 1", "juego 2"].map((value) => (
        <Grid key={value} item>
          <Card
            className="box"
            style={{
              height: 400,
              width: 200,
              backgroundColor: "#9280AB",
            }}
          >
            {value}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const Flipp = (props) => {
  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>
          {props.width.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
};

const stttt = makeStyles((theme) => ({
  root: {
    "& .MuiStepIcon-active": { color: "#5A1372" },
    "& .MuiStepIcon-completed": { color: "#9280AB" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "#E9DCFF" },
    background: "transparent",
  },
  cardd: {
    height: 55,
    border: "1px solid #c2c2c2",
    cursor: "pointer",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.03)",
      backgroundColor: "rgba(90, 19, 114,.2)",
      border: "1px solid #5A1372",
    },
  },
}));

export default App;
