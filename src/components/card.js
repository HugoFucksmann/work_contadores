import { Card, makeStyles } from "@material-ui/core";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardUno = ({ title, bodytext }) => {
    const classes = cardStyle();
    return (
        <Card className={classes.cardstyle}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {bodytext}
                </Typography>
            </CardContent>
        </Card>
    );
};

const cardStyle = makeStyles(() => ({
    cardstyle: {
        textAlign: "center",
    },
}));
export default CardUno;
