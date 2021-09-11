import {Container, Card,CardMedia,CardContent,CardActions,Typography,CardActionArea,Button,Grid} from "@material-ui/core"



import {Link} from "react-router-dom"
import {useState} from "react"
import Banner from "./Banner"
import Spinner from "../Spinner"

import "./style.css"
const Basket =({
basketData,
updateProduct,
handleEmptyBasket,
RemoveItemFromBasket,


})=>{

    const[showSpinner, setShowSpinner] = useState(true);

    const loading = ()=>{
        setTimeout(()=>{
            setShowSpinner(false);
        },2000);
        if (showSpinner){
            return <Spinner />;
        }
        return <Banner />;
    };


    if(!basketData.line_items || !basketData.line_items.length)
        return loading();
        return(

            <Container id="basket">
                <Grid container justifyContent="center"
                spacing={4}>
                    {basketData.line_items.map((product)=>{
                        return(
                            <Grid  key={product.id} item xs={12} sm={6}
                            md={4}>
<Card className="custom-card black">
    <CardActionArea>

        <CardMedia component ="img" alt="Card" height="260" className="card-image"
        image={product.media.source}
        title="product"
        />
        <CardContent className="content">
            <Typography className="title"
            gutterBottom
            varian="h5"
            component="h2">
                {product.name}
            </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Typography
        className="basket-item-price"
        gutterBottom
        variant="h5"
        component="h2"
        
        
        >{product.price.formatted_with_symbol}</Typography>
    </CardActions>
<CardActions className="action-content">
    <Button size="small" color="secondary" variant="outlined"
    onClick={()=>{
        RemoveItemFromBasket(product.id);
    }}>Remove

    </Button>
    <Button size="small"
    variant="outlined"
    color="primary"
    className="increase-product-quantity"
    onClick = {()=>{
        updateProduct(product.id, product.quantity +1);
    }}>
+
    </Button>
<Typography>{product.quantity}</Typography>
<Button size="small"
color="secondary"
variant="outlined"
onClick={()=>{
    updateProduct(product.id,product.quantity -1);
}}

> - </Button>

</CardActions>



</Card>

                            </Grid>
                        )
                    })}
                </Grid>
                <div className="actions">

<Button size="small" color="default" variant="contained"
 onClick={handleEmptyBasket}>Empty Basket</Button>
<Button size="small" variant="contained" component={Link} to="/checkout"
>Checkout</Button>
                </div>
            </Container>
        )
}

export default Basket