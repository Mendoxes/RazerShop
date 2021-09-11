
import {Container, Typography,Button,Grid} from "@material-ui/core"
import {ShoppingCart} from "@material-ui/icons"
import {Link} from "react-router-dom"
import "./style.css"

const Banner = ()=>{

    return(

        <div className="basket-banner">
<Container>
    <Grid container spacing={4}>

        <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h1">
                Basket is empty press Shopping to add new products
            </Typography>
            <Button style={{backgroudColor: "#3fff3f"}} className="shopping-button" component={Link} 
            to="/"> Shopping</Button>
        </Grid>
        <Grid className="brand" item xs={12} sm={6}>
            <ShoppingCart style={{fill: "#3fff3f"}} /></Grid>
    </Grid>
</Container>


        </div>
    )
}

export default Banner