import { Button, Popconfirm } from "antd";
import {DeleteOutlined} from "@ant-design/icons"
import { deleteItem } from "../../service/productService";
function Delete(props){
    const {item, onReload} = props;
    const handleDelete =async()=>{
        const respone = await deleteItem(item.id);
        if(respone){
            onReload();
            alert("Delete Complete!")
        }else{
            alert("Can not delete!")
        }
    }
    return(
    <>

    <Popconfirm title="Sure to delete?" 
        onConfirm={handleDelete}>
        <Button danger size="small" icon={<DeleteOutlined/>}>Delete</Button>
    </Popconfirm>
    </>
    )
}
export default Delete;