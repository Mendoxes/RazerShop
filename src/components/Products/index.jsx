import React from 'react'
import Product from "../Product"
import { Grid, Container,Button } from '@material-ui/core'
import "./style.css"
import Fade from 'react-reveal/Fade';
import {useState} from "react"




const Products=({products,addProduct})=> {

    let [category, setCategory] = useState("Laptops");

   


    let Laptops =  products.filter(function(product) {
        return product.categories[0].name === category;
      });
      
      console.log(Laptops);

    return (
        <div>
            <div id="ix" className="smallBar"> 
            <Button onClick={() => setCategory("Accessories")} className="white" > Accessories</Button>
            <Button onClick={() => setCategory("Laptops")} className="white" > Laptops</Button>
            <Button onClick={() => setCategory("Headphones")} className="white" > Headphones</Button>
            </div>
            <Container id="products">
                <Grid container spacing={4}>
                    
            {Laptops.map(product => {
               return  <Grid className="ok2" key={product.id} item xs={12} sm={6} md={4}> <Fade bottom><Product className="black1"  product={product} addProduct={addProduct}></Product></Fade></Grid>
               
            })}
</Grid>
            </Container>
        </div>
    )
}

export default Products;
