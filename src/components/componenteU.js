import { makeStyles, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { animated, useTransition } from "react-spring";
const data = [
  {
    pregunta: "cuales son las condiciones bvaf asflaf al 1 ?",
    respuestas: {
      op1: "esta es una respuesta posible a la pregunta op1",
      op2: "esta es una respuesta posible a la pregunta op2",
      op3: "esta es una respuesta posible a la pregunta op3",
    },
    correcta: 1,
  },
  {
    pregunta: "cuales son las condiciones bvaf asflaf al 2 ?",
    respuestas: {
      op1: "esta es una respuesta posible a la pregunta op1",
      op2: "esta es una respuesta posible a la pregunta op2",
      op3: "esta es una respuesta posible a la pregunta op3",
    },
    correcta: 0,
  },
  {
    pregunta: "cuales son las condiciones bvaf asflaf a l 3 ?",
    respuestas: {
      op1: "esta es una respuesta posible a la pregunta op1",
      op2: "esta es una respuesta posible a la pregunta op2",
      op3: "esta es una respuesta posible a la pregunta op3",
    },
    correcta: 2,
  },
  {
    pregunta: "cuales son las condiciones bvaf asflaf al 4 ?",
    respuestas: {
      op1: "esta es una respuesta posible a la pregunta op1",
      op2: "esta es una respuesta posible a la pregunta op2",
      op3: "esta es una respuesta posible a la pregunta op3",
    },
    correcta: 2,
  },
];

const ComponenteU = () => {
  const classes = componentStyle();
  const [step, setStep] = useState(0);
  const [correctas, setCorrectas] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleNext = () => {
    setStep(step + 1);
    setModalVisible(false);
  };

  const handleResp = (isCorrecta) => {
    if (data[step].correcta == isCorrecta) setCorrectas(correctas + 1);
    setModalVisible(true);
  };

  return (
    <div className={classes.contaienr}>
      <div className={classes.preguntasTop}>
        <Typography>{data[step].pregunta}</Typography>
      </div>
      <div className={classes.respBotom}>
        {Object.values(data[step].respuestas).map((resp, i) => (
          <Button key={resp} variant="outlined" onClick={() => handleResp(i)}>
            {resp}
          </Button>
        ))}
      </div>
      {/*  <Modal open={modalVisible}>
        <div>The content of the Popover .</div>
        <Button onClick={() => handleNext()}>Siguiente!</Button>
      </Modal> */}
    </div>
  );
};

const componentStyle = makeStyles(() => ({
  contaienr: {
    margin: 40,
    textAlign: "center",
    height: "100%",
  },
  preguntasTop: {
    height: "30%",
  },
  respBotom: {
    display: "flex",
    flexDirection: "column",
    height: "70%",
    marginRight: "20%",
    marginLeft: "20%",
  },
  modalCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-50px",
    width: "100px",
    height: "100px",
  },
}));

export default ComponenteU;
