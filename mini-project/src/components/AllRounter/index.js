import { useRoutes } from "react-router-dom";
import { router } from "../../router";

function AllRounter(){
    const element = useRoutes(router);
    return(
      <>
    {element}
    </>  
    )
    
    
}
export default AllRounter;