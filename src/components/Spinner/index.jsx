// import {CircleProgress} from "@material-ui/core"
import { CircularProgress } from "@chakra-ui/progress"
import "./style.css"

const Spinner = ()=>{
return(
        <div className="spinner">
<CircularProgress isIndeterminate value={20} color="red.300" />


        </div>
)    
}

export default Spinner