import React, {useState} from "react"
import {
  Layout,
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  InputNumber,
  Button,
} from "antd"
import {ArrowRightOutlined} from "@ant-design/icons"
import PatientTable from "./PatientTable"
import DoctorlistComponent from "./doctorlist"
import Finalinfo from "./FinalInfo"
const {Option} = Select
const {Content} = Layout
export default function AppointmentComponent() {
  const [form, setForm] = useState({
    name: "",
    mobileno: "",
  })
  const [next, setNext] = useState({state: 1, paylood: {}})
  switch (next.state) {
    case 1: {
      return (
        <MainScreenAppointment
          form={form}
          setForm={setForm}
          setNext={setNext}
        />
      )
    }
    case 2: {
      return <DoctorlistComponent setNext={setNext} />
    }
    case 3: {
      return <Finalinfo setNext={setNext} allinfo={next} />
    }
    default: {
      break
    }
  }
}

function MainScreenAppointment({form, setForm, setNext}) {
  return (
    <Content style={{margin: "24px 16px 0"}}>
      <Row justify="space-around">
        <Col span={10}>
          <Card title="Create new patient">
            <FormComponent form={form} setForm={setForm} setNext={setNext} />
          </Card>
        </Col>
        <Col span={10}>
          <Card title="Existing patient">
            <PatientTable form={form} setNext={setNext} />
          </Card>
        </Col>
      </Row>
    </Content>
  )
}

function FormComponent({form, setForm, setNext}) {
  const ProccedNext = (val) => {
    setNext((prev) => {
      return {...prev, state: prev.state + 1, payload: val}
    })
    console.log(val)
  }
  return (
    <Form
      layout="vertical"
      initialValues={{prefix: "+91"}}
      onFinish={(value) => {
        ProccedNext(value)
      }}
    >
      <Form.Item
        label="Title/Sex"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input sex of patient!",
          },
        ]}
      >
        <Select>
          <Select.Option value="Mr">Mr-Male</Select.Option>
          <Select.Option value="Mrs">Mrs-feMale</Select.Option>
          <Select.Option value="Miss">Miss-feMale</Select.Option>
          <Select.Option value="Ms">Ms-Male</Select.Option>
          <Select.Option value="Baby">Baby-Male</Select.Option>
          <Select.Option value="Baby">Baby-feMale</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input patient name!",
          },
        ]}
      >
        <Input
          onChange={(e) =>
            setForm((prev) => {
              return {...prev, name: e.target.value}
            })
          }
          value={form.name}
        />
      </Form.Item>
      <Form.Item label="Age">
        <Form.Item
          name="year"
          style={{display: "inline-block", marginRight: "10px"}}
        >
          <InputNumber placeholder="year" name="year" />
        </Form.Item>
        <Form.Item
          name="month"
          style={{display: "inline-block", marginRight: "10px"}}
        >
          <InputNumber placeholder="month" name="year" />
        </Form.Item>
        <Form.Item
          name="day"
          style={{display: "inline-block", marginRight: "10px"}}
        >
          <InputNumber placeholder="day" name="year" />
        </Form.Item>
      </Form.Item>

      <Form.Item
        name="mobileno"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
          onChange={(e) =>
            setForm((prev) => {
              return {...prev, mobileno: e.target.value}
            })
          }
          value={form.mobileno}
        />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input address!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="State" name="state">
        <Select>
          <Select.Option value="gujrat">gujrat</Select.Option>
          <Select.Option value="rajastan">rajastan</Select.Option>
          <Select.Option value="maharastra">maharastra</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Remark" name="remark">
        <Input />
      </Form.Item>
      <Form.Item style={{float: "right"}}>
        <Button type="primary" shape="round" size="large" htmlType="submit">
          Procced Next <ArrowRightOutlined />
        </Button>
      </Form.Item>
    </Form>
  )
}

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select size="small">
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
)
