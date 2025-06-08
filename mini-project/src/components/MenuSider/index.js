import { Menu } from "antd";
import { ArrowDownOutlined,PlusOutlined, ForwardOutlined, DownCircleOutlined } from "@ant-design/icons"
import { Link, useLocation } from "react-router-dom"
import "./MenuSider.scss"
function MenuSider(){
    const location = useLocation();
    const items =[
        {
            label: <Link to="/">Dashboard</Link>,
            icon: <DownCircleOutlined />,
            key: "/",
        },
        {
            label: <Link to="/list-product">List Product</Link>,
            icon: <PlusOutlined />,
            key: "/list-product",
        },
        
        {
            label: <Link to="/create-product">Create Product</Link>,
            icon: <PlusOutlined />,
            key: "/create-product",
        },
        
    ]
    return(
        <>
        <Menu className="custom-sider-menu"
         selectedKeys={[location.pathname]}
        defaultSelectedKeys={['/']} // hoặc ['menu-1-1'], ['menu-2-2'], v.v.
            defaultOpenKeys={['list-product']}
                mode="inline"
                items={items} />
        </>
    )
}
export default MenuSider;