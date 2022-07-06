import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircleIcon from "@mui/icons-material/Circle";
import FodmapItemModel from "../../models/fodmap-item";

const FodmapCard: React.FC<FodmapItemModel> = (item: FodmapItemModel) => {
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
                    item.fodmap === "low"
                      ? "green"
                      : item.fodmap === "high"
                      ? "red"
                      : "orange",
                }}
              />
              {item.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ textTransform: "capitalize" }}
            >
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
