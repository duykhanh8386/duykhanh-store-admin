import { Col, Progress, Row, Tooltip } from "antd";
import { Column, Line, Pie } from '@ant-design/plots';
import CardItem from "../../../../mini-project/src/components/CardItem";
import { LineChartOutlined, DollarOutlined, ContainerOutlined, UserOutlined } from "@ant-design/icons"
import { getListProduct } from "../../service/productService";
import { useEffect, useState } from "react";
import { Footer } from "antd/es/layout/layout";
function Dashboard() {

    const lineConfig = {
        data: [
            { date: '16th', value: 30 },
            { date: '17th', value: 60 },
            { date: '18th', value: 40 },
            { date: '19th', value: 50 },
            { date: '20th', value: 40 },
            { date: '21th', value: 70 },
            { date: '22th', value: 85 },
            { date: '23th', value: 65 },
            { date: '24th', value: 75 },
            { date: '25th', value: 35 },
            { date: '26th', value: 60 },
        ],
        xField: 'date',
        yField: 'value',
        height: 320,

        // Thêm config này để tránh render trùng

        point: {
            size: 4,
            shape: 'circle',
            style: {
                fill: '#3b82f6',
                stroke: '#fff',
                lineWidth: 2,
            },
        },

        tooltip: {
            showMarkers: true,
            shared: true,
        },
        style: {
            stroke: '#3b82f6',
            lineWidth: 2,
        },
        //lam cong bieu do
        shape: 'smooth',
        xAxis: {
            label: {
                style: {
                    fill: '#999',
                },
            },
        },

        yAxis: {
            label: {
                style: {
                    fill: '#999',
                },
            },

        },
    };

    const donutConfig = {
        data: [
            { type: 'New', count: 350 },
            { type: 'Returning', count: 450 },
            { type: 'Others', count: 100 },
        ],
        angleField: 'count',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        height: 200,
        legend: false,
        color: ['#00c49f', '#a78bfa', '#ffc107'],
        statistic: false,


    };
    const profitData = [
        { month: 'Mar', profit: 40 },
        { month: 'Apr', profit: 38 },
        { month: 'May', profit: 32 },
        { month: 'Jun', profit: 20 },
        { month: 'Jul', profit: 52 },
        { month: 'Aug', profit: 51 },
        { month: 'Sep', profit: 33 },
    ];

    const columnConfig = {
        data: profitData,
        xField: 'month',
        yField: 'profit',
        columnStyle: {
            radius: [5, 5, 0, 0],
        },
        color: ({ month }) => '#3b82f6',
    };

    const [topProduct, setTopProduct] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const respone = await getListProduct();
            setTopProduct(respone);
        };
        fetchAPI()
    }, [])
    return (
        <>
            <Row gutter={[20, 20]}>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem className="card1">
                        <DollarOutlined style={{ color: "#3F87F5" }} className="card--box1 card--box1__icon0" />
                        <div className="card--box1__content">
                            <h3 className="card--box1__number">$23,523</h3>
                            <p className="card--box1__p">Profit</p>
                        </div>

                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem className="card1">
                        <LineChartOutlined style={{ color: "#00C9A7" }} className="card--box1 card--box1__icon1" />
                        <div className="card--box1__content">
                            <h3 className="card--box1__number">+ 23,30%</h3>
                            <p className="card--box1__p">Growth</p>
                        </div>
                    </CardItem>

                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem className="card1">
                        <ContainerOutlined style={{ color: "#FFC107" }} className="card--box1 card--box1__icon2" />
                        <div className="card--box1__content">
                            <h3 className="card--box1__number">3,618</h3>
                            <p className="card--box1__p">Orders</p>
                        </div>

                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem className="card1">
                        <UserOutlined style={{ color: "#947AFF" }} className="card--box1 card--box1__icon3" />
                        <div className="card--box1__content">
                            <h3 className="card--box1__number">1,832</h3>
                            <p className="card--box1__p">Customers</p>
                        </div>
                    </CardItem>
                </Col>
            </Row>
            {/* Chart */}
            <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CardItem className="card2">
                        <h4>Total Revenue</h4>
                        <div style={{ marginTop: 16 }}>
                            <Line  {...lineConfig} />
                        </div>
                    </CardItem>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem className="card2">
                        <h4>Customers</h4>
                        <div className="pie--chart">
                            <Pie {...donutConfig} style={{ height: '100%' }} />
                        </div>
                        <div className="chart--content">
                            <div>
                                <div className="chart--contentp chart--contentp__number1">350</div>
                                <div className="chart--contentp__title">New</div>
                            </div>
                            <div>
                                <div className="chart--contentp chart--contentp__number2">450</div>
                                <div className="chart--contentp__title">Returning</div>
                            </div>
                            <div>
                                <div className="chart--contentp chart--contentp__number3">100</div>
                                <div className="chart--contentp__title">Others</div>
                            </div>
                        </div>
                    </CardItem>
                </Col>
            </Row>
            <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem className="box7">
                        <div className="box7-header">
                            <div>
                                <h2 className="box7-amount">$17,267</h2>
                                <p className="box7-label">Avg. Profit</p>
                            </div>
                            <div className="box7-change">+5.7%</div>
                        </div>
                        <Column {...columnConfig} height={350} />
                    </CardItem>

                </Col>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CardItem className="product-table">
                        <div className="product-table__header">
                            <div className="product-table__cell product-table__col--left">Product</div>
                            <div className="product-table__cell">Rating</div>
                            <div className="product-table__cell">Earning</div>
                            <div className="product-table__cell">Stock Left</div>
                        </div>

                        {topProduct.map((p) => (
                            <div className="product-table__row" key={p.id}>
                                <div className="product-table__cell product-table__col--left">
                                    <img src={p.thumbnail} alt={p.title} className="product-img" />
                                    <span>{p.title}</span>
                                </div>
                                <div className="product-table__cell">{p.rating}</div>
                                <div className="product-table__cell">
                                    ${Number(p.price * p.stock).toLocaleString()}
                                </div>
                                <div className="product-table__cell">
                                    <Tooltip title={`${p.stock} left`}>
                                        <div className="stock-cell">
                                            <Progress
                                                percent={(p.stock / 100) * 100}
                                                size="small"
                                                showInfo={false}
                                                strokeColor={p.color}
                                            />
                                            <span>{p.stock}</span>
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                        ))}
                    </CardItem>


                </Col>
            </Row>
        </>
    )
}
export default Dashboard;