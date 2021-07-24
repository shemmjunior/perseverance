import Layout from "../components/layout";
import UploadField from "../components/upload_field";
import { Card, Row, Col } from "antd";
import custom from '../styles/Custom.module.css'

export default function Home() {
  return (
    <Layout>
      <Card className={custom.upload_card}>
        <Row gutter={24}>
          <Col span={8}>
            <UploadField />
          </Col>

          <Col span={16}>Some Text Description</Col>
        </Row>
      </Card>
    </Layout>
  );
}
