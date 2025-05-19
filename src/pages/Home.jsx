import React from "react";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Carousel,
  Typography,
  Divider,
  theme,
} from "antd";
import {
  CarOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CarCard from "../components/CarCard";
import "../App.css";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;

const carList = [
  {
    name: "Fortuner",
    price: "1.000.000.000",
    year: 2023,
    image: "/images/car1.webp",
  },
  {
    name: "Lamborghini",
    price: "800.000.000",
    year: 2022,
    image: "/images/car2.webp",
  },
  {
    name: "Fortuner Type A",
    price: "700.000.000",
    year: 2021,
    image: "/images/car3.png",
  },
];

const newsList = [
  {
    title: "Toyota Rilis Fortuner Hybrid 2025",
    description:
      "Toyota resmi meluncurkan Fortuner Hybrid dengan konsumsi BBM yang lebih irit dan tenaga lebih besar.",
    image: "/images/news1.jpg",
    date: "Mei 2025",
  },
  {
    title: "Mobil Listrik Kian Populer di Indonesia",
    description:
      "Permintaan mobil listrik meningkat pesat seiring bertambahnya SPKLU dan insentif pemerintah.",
    image: "/images/news2.jpg",
    date: "April 2025",
  },
  {
    title: "Lamborghini Hadirkan Teknologi AI di Kendaraannya",
    description:
      "Lamborghini mengintegrasikan AI untuk mendeteksi kondisi jalan secara real-time dan menyesuaikan suspensi.",
    image: "/images/news3.jpg",
    date: "Maret 2025",
  },
];

const items = [
  { key: "1", icon: <HomeOutlined />, label: "Beranda" },
  { key: "2", icon: <CarOutlined />, label: "Produk" },
  { key: "3", icon: <InfoCircleOutlined />, label: "Tentang" },
  { key: "4", icon: <UserOutlined />, label: "Akun" },
];

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <Sider breakpoint="lg" collapsedWidth="0" style={{ minHeight: "100vh" }}>
        <div className="text-white text-xl font-bold text-center py-6">
          <CarOutlined className="mr-2" />
          Showroom
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={items} />
      </Sider>

      <Layout>
        {/* HEADER */}
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-end items-center h-full px-4 space-x-2">
            <Button icon={<LoginOutlined />} type="link">
              Login
            </Button>
            <Button icon={<UserAddOutlined />} type="primary">
              Signup
            </Button>
          </div>
        </Header>

        {/* CONTENT */}
        <Content style={{ margin: "24px 0 0" }}>
          <div
            style={{
              padding: 16,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            {/* CAROUSEL */}
            <Carousel autoplay effect="fade" className="mb-10">
              {carList.map((car, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-[400px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
                    <Title level={2} className="text-white text-3xl md:text-4xl">
                      {car.name}
                    </Title>
                    <Paragraph className="text-white text-base md:text-lg">
                      Tahun {car.year} | Harga: Rp {car.price}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </Carousel>

            {/* DAFTAR MOBIL */}
            <Title level={2} className="text-center mb-4">
              Daftar Mobil Tersedia
            </Title>
            <Paragraph className="text-center text-gray-600 mb-8">
              Mobil pilihan terbaik dengan performa unggulan, desain premium, dan harga terjangkau.
            </Paragraph>
            <Divider />
            <Row gutter={[24, 24]}>
              {carList.map((car, idx) => (
                <Col xs={24} sm={12} md={8} key={idx}>
                  <CarCard car={car} />
                </Col>
              ))}
            </Row>

            {/* BERITA */}
            <Divider className="my-12" />
            <Title level={3} className="text-center mb-4">
              Berita & Info Otomotif Terkini
            </Title>
            <Paragraph className="text-center text-gray-600 mb-8">
              Dapatkan informasi terbaru seputar dunia otomotif, peluncuran mobil baru,
              dan teknologi kendaraan masa depan.
            </Paragraph>
            <Row gutter={[24, 24]}>
              {newsList.map((news, idx) => (
                <Col xs={24} sm={12} md={8} key={idx}>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4 flex flex-col flex-1">
                      <Text type="secondary" className="text-sm mb-2">
                        {news.date}
                      </Text>
                      <Title level={4} className="mb-2">
                        {news.title}
                      </Title>
                      <Paragraph className="text-gray-700 flex-1">{news.description}</Paragraph>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Content>

        {/* FOOTER */}
        <Footer style={{ textAlign: "center" }}>
          ©2025 Showroom Mobil. All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
