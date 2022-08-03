import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircleIcon from "@mui/icons-material/Circle";
import FodmapItemModel from "../../models/fodmap-item";

const FodmapCard: React.FC<{item: FodmapItemModel}> = (props) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card variant="outlined" sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography
              component="h2"
              variant="h5"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CircleIcon
                sx={{
                  marginRight: 1,
                  color:
                  props.item.fodmap === "low"
                      ? "green"
                      : props.item.fodmap === "high"
                      ? "red"
                      : "orange",
                }}
              />
              {props.item.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ textTransform: "capitalize" }}
            >
              {props.item.fodmap}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.item.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={props.item.image}
            alt={props.item.name}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FodmapCard;
