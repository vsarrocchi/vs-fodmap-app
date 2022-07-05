import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FodmapItemModel from "../../models/fodmap-item";

const FodmapCard: React.FC<FodmapItemModel> = (item: FodmapItemModel) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {item.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {item.fodmap}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {item.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={item.image}
            alt={item.name}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FodmapCard;
