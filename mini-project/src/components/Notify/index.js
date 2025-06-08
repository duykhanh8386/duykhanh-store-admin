import { BellOutlined } from "@ant-design/icons"
import { Badge, Button, Dropdown, Space } from "antd";
import "./Notify.css"
function Notify() {
    const items =[
        {
            label: <div className="notify--item">
                <div className="notify--icon"><BellOutlined /></div>
                <div className="item-right">
                <div className="notify--title">You received a new message</div>
                <div className="notify--hours">8 min ago</div>
                </div>
            </div>,
            key: 1
        },
        {
            label: "Item 2",
            key: '2',
        },
        {
            label: "Item 3",
            key: '3',
        },
        {
            label: "Item 4",
            key: '4',
        },
        {
            label: "Item 5",
            key: '5',
        },
        {
            label: "Item 6",
            key: '6',
        },
        {
            label: "Item 7",
            key: '7',
        },
    ]
    return (
        <>
            <Dropdown menu={{ items }} trigger={['click']}
            dropdownRender={(menu)=>(
                <>
                <div className="notify--dropdown">
                    <div className="notify--header">
                       <div className="notify--header__title">
                        <BellOutlined /> Notification
                       </div>
                       <div className="notify--view">
                        <Button type="link">Viewall</Button>
                       </div>
                    </div>
                    <div className="notify--body">
                        {menu}
                    </div>
                </div>
                </>
            )}>
                <Badge dot>
                    <Button type='text' icon={<BellOutlined />}></Button>
                </Badge>
            </Dropdown>
            

        </>
    )
}
export default Notify;