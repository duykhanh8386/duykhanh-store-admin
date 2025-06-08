import { Layout } from "antd";
import { useState } from "react";
import logo from "../../image/LogoKhanh.png";
import logoFold from "../../image/LogoK.png";
import { MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined } from "@ant-design/icons";
import "./LayoutDefault.css"
import Notify from "../../components/Notify";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../../components/MenuSider";
import { Content, Footer } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";
function LayoutDefault() {
    const [collapsed, setCollapse] = useState(false)
    return (
        <>
            <Layout className="layout--default">
                <header className="header">
                    <div className={"header--logo " + (collapsed && "header--logo__collapsed")}>
                        <Link to="/"><img src={collapsed ? logoFold : logo} alt="Logo" /></Link>
                    </div>
                    <div className="header--nav">
                        <div className="header--nav__left">
                            <div className="header--collapse"
                                onClick={() => setCollapse(!collapsed)}>
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </div>
                            <div className="header--search">
                                <SearchOutlined />
                            </div>
                        </div>
                        <div className="header--nav__right">
                            <Notify />
                        </div>
                    </div>
                </header>
                <Layout >
                    <Sider className="sider" width={280}
                        collapsedWidth={80} collapsed={collapsed} theme="light">
                        <MenuSider />
                    </Sider>
                    <Content className="content">
                        <Outlet />
                        <Footer style={{ marginTop: '30px', borderTop: '1px solid #ddd', textAlign: 'center' }}>
                        <div className="footer">Designed by: DuyKhanh</div>
                    </Footer>
                    </Content>
                    
                </Layout>
            </Layout>
        </>
    )
}

export default LayoutDefault;