import Header from "./layout/header";
import FullPage from "./layout/fullPage";
import Body from "./layout/body";
import Footer from "./layout/footer";
import CardUno from "./components/card";
import GridLayout from "./layout/gridLayout";
import { Card } from "@material-ui/core";

const cardsData = [
    {
        title: "tarjeta uno",
        bodytext: "este es el texto de la primer tarjeta",
    },
    {
        title: "tarjeta Dos",
        bodytext: "este es el texto de la Dos tarjeta",
    },
    {
        title: "tarjeta Tres",
        bodytext: "este es el texto de la Tres tarjeta",
    },
    {
        title: "tarjeta Cuatro",
        bodytext: "este es el texto de la Cuatro tarjeta",
    },
    {
        title: "tarjeta Cinco",
        bodytext: "este es el texto de la Cinco tarjeta",
    },
];

function App() {
    return (
        <FullPage>
            <Header>Este es el header</Header>
            <Body>
                <GridLayout array={cardsData} />
            </Body>
            <Footer>F</Footer>
        </FullPage>
    );
}

export default App;
