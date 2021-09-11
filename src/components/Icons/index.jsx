import { Container, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import one from "./1.png"
import two from "./2.png"
import three from "./3.png"
import four from "./4.png"
import Fade from 'react-reveal/Fade';

import "./styles.css"

const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);


  const GreenTextTypography = withStyles({
    root: {
      color: "#2dc711"
    }
  })(Typography);


  let items=["RAZER™ OPTICAL MOUSE SWITCHES GEN-2","RAZER™ FOCUS+ 26K DPI OPTICAL SENSOR","ICONIC ERGONOMIC DESIGN WITH THUMB REST","5 ON-BOARD MEMORY PROFILES"];
  let photos =[one,two,three,four];
  let itemsS=["With switches that clock in at a blistering 0.2ms actuation speed for up to 70 million clicks, you can expect nothing but crisp, responsive execution with zero misclicks.","Enjoy responsive, pixel-precise aim with an improved sensor that flawlessly tracks your movement with zero spinouts.","Favored by millions worldwide, the mouse’s ergonomic form factor perfectly supports your hand while its buttons are optimally positioned for quick and easy access.","Be ready to compete anywhere with access to your custom keybinds, DPI, and twice the inputs via the Razer HyperShift function."]
console.log(photos[0])

const Icons =()=> {


    return (<div className="look"> 




<Container>
<Grid container spacing={4} >
{items.map((item,index)=>{
return (<div key={index}>

<Grid className="lookInside" item xs={3} sm={6} md={8}>
<Fade top>
<img src={photos[index]} alt="mouse icon"></img>
</Fade>
<Fade bottom>
<WhiteTextTypography className="pain"  variant="h5" >{item}</WhiteTextTypography>
<GreenTextTypography className="pain pain2"> {itemsS[index]}</GreenTextTypography>
</Fade>

</Grid>



</div>)
})}

</Grid>
</Container>


        </div>
    )
}


export default Icons



// function App() {
//     return <Headline />;
//   }
   
//   function Headline() {
    
   
//     return( <Grid className="lookInside" item xs={12} sm={6} md={3}>
//     <img src={three}></img>
//     <WhiteTextTypography  variant="h5" > RAZER™ OPTICAL
// MOUSE SWITCHES GEN-2</WhiteTextTypography>
   
// </Grid>)
//   }



 