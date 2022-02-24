import { Grid, Item } from "@material-ui/core";
import CardUno from "../components/card";
import layoutStyle from "../styles/layoutStyle";

const GridLayout = (props) => {
    const classes = layoutStyle(props);

    return (
        <Grid container spacing={3} style={{ margin: 5 }}>
            {props.array.map((item) => (
                <Grid item xs={4}>
                    <CardUno title={item.title} bodytext={item.bodytext} />
                </Grid>
            ))}
        </Grid>
    );
};

export default GridLayout;
