import Header from "./layout/header";
import FullPage from "./layout/fullPage";
import Body from "./layout/body";
import Footer from "./layout/footer";
import CardUno from "./components/card";
import GridLayout from "./layout/gridLayout";
import { Card } from "@material-ui/core";
import ComponenteU from "./components/componenteU";

function App() {
  return (
    <Body>
      <Card style={{ height: "100%" }} elevation={3}>
        <ComponenteU />
      </Card>
    </Body>
  );
}

export default App;
