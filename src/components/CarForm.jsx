import { Form, Input, Button, InputNumber } from 'antd';

const CarForm = ({ onFinish, initialValues }) => {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Form.Item label="Nama Mobil" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Harga" name="price" rules={[{ required: true }]}>
        <InputNumber className="w-full" min={0} />
      </Form.Item>
      <Form.Item label="Tahun" name="year" rules={[{ required: true }]}>
        <InputNumber className="w-full" min={1990} max={2030} />
      </Form.Item>
      <Form.Item label="URL Gambar" name="image" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">Simpan</Button>
    </Form>
  );
};

export default CarForm;
