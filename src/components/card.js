import { Card, makeStyles } from "@material-ui/core";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardUno = ({ title, bodytext }) => {
    const classes = cardStyle();
    return (
        <Card className={classes.cardstyle}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                {bodytext && (
                    <Typography variant="body2" color="text.secondary">
                        {bodytext}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

const cardStyle = makeStyles(() => ({
    cardstyle: {
        textAlign: "center",
        height: 220,
    },
}));

export default CardUno;
