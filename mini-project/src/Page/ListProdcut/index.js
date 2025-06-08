import { useEffect, useState } from "react";
import { getListProduct } from "../../service/productService";
import { Badge, Button, Pagination, Select } from "antd";
import "./List.css"
import { Link } from "react-router-dom";
import Delete from "./Delete";
import { getCategory } from "../../service/categoryService";
import Edit from "./Edit";
const { Option } = Select;
function ListProduct() {
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const pageSize = 10;
    const [reload, setReload] = useState(false);
    const handleReload = () => {
        setReload(!reload);
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await getListProduct();
            setProduct(response.reverse());
            setFiltered(response);
            const category = await getCategory();
            setCategories(category);
        };
        fetchData();
    }, [reload]);
    // Lọc theo danh mục
    const handleCategoryChange = (value) => {
        if (value === "all") {
            setFiltered(product);
        } else {
            setFiltered(product.filter((item) => item.category === value));
        }
        setCurrentPage(1); // quay về trang đầu sau khi lọc
    };

    // Phân trang
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const pagedData = filtered.slice(start, end);
    return (
        <>
            <Select
                defaultValue="all"
                style={{ width: 200, marginBottom: 20 }}
                onChange={handleCategoryChange}
            >
                <Option value="all">Tất cả danh mục</Option>
                {categories.map((cat) => (
                    <Option key={cat.id} value={cat.name}>
                        {cat.name}
                    </Option>
                ))}
            </Select>
            <div className="product">

                {pagedData.map(item => (
                    <><Badge.Ribbon color="red" text={`Sale ${item.discountPercentage}%`}>
                        <div className="product__item">
                            <div className="product__image">
                                <div className="product__image--size">
                                    <img className="product__image--item" src={item.thumbnail} />
                                </div>
                            </div>
                            <div className="product--content">
                                <div className="product__title"><h4>{item.title}</h4></div>
                                <div className="product__price--old">{item.price}$</div>
                                <div className="product__price--new">
                                    {(item.price * (100 - item.discountPercentage) / 100).toFixed(0)}$
                                </div>
                            </div>
                            <div className="button">
                                <Edit item={item} onReload={handleReload}/>
                                <Delete item={item} onReload={handleReload} />
                            </div>
                        </div></Badge.Ribbon>
                    </>

                ))}

            </div>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={filtered.length}
                onChange={(page) => setCurrentPage(page)}
                style={{ marginTop: -10, textAlign: "center" }}
            />
        </>
    )
}
export default ListProduct;