import { Button, Col, Form, Input, notification, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { createProduct } from "../../service/productService";
import { getCategory } from "../../service/categoryService";
const {Option} = Select;
function CreateItem(){
    const [form] = Form.useForm();
    const rules = [{ required: true, message: 'Please input full of information!' }];
    const [notiApi, contextHolder] = notification.useNotification();
    const [confirmLoading, setConfirmLoading] = useState(false);
        const [categories, setCategories] = useState([]);
        useEffect(()=>{
            const fetchCat = async ()=>{
                const respone = await getCategory();
                setCategories(respone);
            }
            fetchCat();
        },[])
    const handleOk = async(e) => {
        
            const respone = await createProduct(e);
            
            setConfirmLoading(true);
            setTimeout(() => {
                if (respone) {
                    notiApi.success({
                        message: 'Tao moi thanh cong',
                        description: `Ban da tao moi thanh cong san pham`
                    });
                    setConfirmLoading(false);
                    form.resetFields();
                    
                } else {
                    notiApi.error({
                        message: 'Tao moi that bai',
                        description: `Ban da tao moi khong thanh cong san pham`
                    });
                }
            }, 2000);}
    return(
        <>
        {contextHolder}
        <Form layout="vertical" name="create-room"
                        form={form} onFinish={handleOk} confirmLoading={confirmLoading}
                        >
                        <Form.Item
                            label="Name product"
                            name="title"
                            rules={rules}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={rules}
                        >
                            <Input />
                        </Form.Item>
                        <Row gutter={[20, 20]}>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Form.Item
                                    label="Price"
                                    name="price"
                                    rules={rules}
                                >
                                    <Input type="number" />
                                </Form.Item>
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Form.Item
                                    label="DiscountPercentage"
                                    name="discountPercentage"
                                    rules={rules}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[20, 20]}>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Form.Item
                                    label="Rating"
                                    name="rating"
                                    rules={rules}
                                >
                                    <Input type="number" max={5} />
                                </Form.Item>
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Form.Item
                                    label="Stock"
                                    name="stock"
                                    rules={rules}
                                >
                                    <Input type="number" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            label="Category"
                            name="category"
                            rules={rules}
                        >
                            <Select
                                allowClear
                                style={{
                                    width: "100 %"
                                }}>
                                    {categories.map((cat)=>(
                                       < Option value={cat.name}>{cat.name}</Option>
                                    ))}
                                
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Link image"
                            name="thumbnail"
                            rules={rules}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item style={{textAlign:"right"}}>
                            <Button loading={confirmLoading} 
                            type="primary" htmlType="submit" 
                            >Agree</Button>
                        </Form.Item>
                </Form>
        </>
    )
}
export default CreateItem;