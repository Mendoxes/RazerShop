import {Card,CardMedia,CardContent,CardActions,Typography,CardActionArea,Button,} from "@material-ui/core"
import {ShoppingCart} from "@material-ui/icons"
import "./style.css"




const Product =({product, addProduct}) =>(

<Card className="product-card black1">
<CardActionArea>
<CardMedia component="img"
alt="laptop"
height="260"
width="20"
className="card-image"
image={product.media.source}
title="Razer laptop" />

<CardContent className="content">
    <Typography className="title" gutterBottom variant="h5" component="h2">

        {product.name}
    </Typography>



</CardContent>
</CardActionArea>

<CardActions className="actions-content">
    
    <Typography className="price" gutterBottom variant="h5" component="h2">

{product.price.formatted_with_code}
    </Typography>
    <Button size="large"
    className="custom-button"
    onClick={()=>{
        addProduct(product.id,1)
    }}>

<ShoppingCart /> Add to basket

    </Button>




</CardActions>



</Card>





)

export default Product;