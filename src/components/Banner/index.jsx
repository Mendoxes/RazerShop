import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./basilisk.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="containerX">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h1">
              Welcome To <span className="green"> Razer </span>Tech Store
            </Typography>
            <Button className="shopping-button" href="#ix">
              Shopping
            </Button>
          </Grid>
          <Grid className="brand" item sm={6}>
            <span className="pulses"><img src={logo} alt="Brand-tv" /></span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;