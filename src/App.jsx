
import sample from "./razer.mp4"
import { commerce } from "./commerce.js"

import './index.css';
import {useState, useEffect} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Products from "./components/Products"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Icons from "./components/Icons"
import Basket from "./components/Basket"
const App = () => {
const [products,setProducts] = useState([]);
const [basketData, setBasketData] = useState({});

const fetchBasketData = async() =>{
  const response = await commerce.cart.retrieve();
  setBasketData(response);
}

const fetchProducts = async () => {
  const response = await commerce.products.list();
  setProducts((response && response.data) || []);
};

const addProduct = async(productId, quantity)=>{
const response = await commerce.cart.add(productId, quantity);
setBasketData(response.cart);

}

const updateProduct = async(productId, quantity)=>{
  const response = await commerce.cart.update(productId, {quantity});
  setBasketData(response.cart)

}

const handleEmptyBasket = async()=>{
  const response = await commerce.cart.empty();
  setBasketData(response.cart);
}

const RemoveItemFromBasket= async(itemId)=>
{const response = await commerce.cart.remove(itemId);
setBasketData(response.cart)
}

useEffect(() => {
  fetchProducts();
  fetchBasketData();
  
}, []);
console.log(basketData);

  return <Router>
<div>
<NavBar basketItems={basketData.total_items}></NavBar>





{/* <div className="overlay">

<h2>THE NEW RAZER BLADE 15 </h2>
</div> */}
  <Switch>
<Route exact path="/">
<Banner></Banner>
<Icons></Icons>
<video className='videoTag' autoPlay muted>
    <source src={sample} type='video/mp4' />
</video>
<Products products={products} addProduct={addProduct}></Products>

</Route>

<Route exact path="/basket">
  <Basket basketData={basketData}
updateProduct={updateProduct}
handleEmptyBasket={handleEmptyBasket}
RemoveItemFromBasket={RemoveItemFromBasket}/>
</Route>

  </Switch>

</div>

      </Router>
    
   

}

export default App;
