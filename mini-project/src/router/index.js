import LayoutDefault from "../Layout/LayoutDefault";
import CreateItem from "../Page/CreateItem";
import Dashboard from "../Page/Dashboard";

import ListProduct from "../Page/ListProdcut";


export const router =[
    {
        path: "/",
        element: <LayoutDefault/>,
        children:[
            
            {
                path:"/",
                element: <Dashboard/>
            },
            {
                path:"/list-product",
                element: <ListProduct/>
            },
            {
                path:"/create-product",
                element: <CreateItem/>
            }
        ]
    }
]