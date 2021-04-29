import React, {useEffect, useState} from "react"
import {
  Button,
  Layout,
  Row,
  Col,
  Descriptions,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
} from "antd"
import moment from "moment"
const {Content} = Layout

export default function Finalinfo({setNext, allinfo}) {
  const {payload, doctorinfo} = allinfo
  const [patientAllInfo, setPatientAllInfo] = useState({patientinfo: allinfo})
  const prevScreen = () => {
    setNext((prev) => {
      return {...prev, state: prev.state - 1}
    })
  }
  useEffect(() => {
    console.log(payload)
  }, [payload])
  return (
    <Content style={{margin: "24px 40px"}}>
      <Button onClick={prevScreen}>Go back</Button>
      <Row style={{marginTop: "20px"}}>
        <Col span={18}>
          <Card title="Petient info" style={{borderRadius: "10px"}}>
            <Descriptions size="middle">
              <Descriptions.Item label="name" contentStyle={{color: "#177ddc"}}>
                {payload.title + " " + payload.name}
              </Descriptions.Item>
              <Descriptions.Item
                label="phone no"
                contentStyle={{color: "#177ddc"}}
              >
                {payload.mobileno}
              </Descriptions.Item>
              <Descriptions.Item
                label="address"
                contentStyle={{color: "#177ddc"}}
              >
                {payload.address}
              </Descriptions.Item>
              <Descriptions.Item
                label="state"
                contentStyle={{color: "#177ddc"}}
              >
                {payload.state}
              </Descriptions.Item>
              <Descriptions.Item
                label="cunsulting doctor"
                contentStyle={{color: "#177ddc"}}
              >
                {doctorinfo.name + " " + doctorinfo.specialization}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" style={{marginTop: "20px"}}>
        <Col span={10}>
          <FinalAppointmentInfo setPatientAllInfo={setPatientAllInfo} />
        </Col>
        <Col span={9}>
          <BillingInfo setPatientAllInfo={setPatientAllInfo} />
        </Col>
      </Row>
    </Content>
  )
}

const FinalAppointmentInfo = ({setPatientAllInfo}) => {
  const [appointInfo, setAppointINfo] = useState({
    appointmentType: "",
    bookingDate: moment().format("Do MMM YY"),
    bookingTime: moment().format(" h:mm a"),
    appointmentDate: "",
    appointmentSlot: "",
    opdname: "",
    anyRef: "",
  })

  useEffect(() => {
    setPatientAllInfo((prev) => {
      return {...prev, appointInfo: appointInfo}
    })
  }, [appointInfo])

  return (
    <Card title="New appointment" style={{borderRadius: "10px"}}>
      <Form>
        <Form.Item label="Appointment type" name="appointmentType">
          <Select
            onChange={(value) =>
              setAppointINfo((prev) => {
                return {...prev, appointmentType: value}
              })
            }
          >
            <Select.Option value="consultation">Consultation</Select.Option>
            <Select.Option value="followUp">Follow Up</Select.Option>
            <Select.Option value="reportShow">Report Show</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Booking Date">
          <Input value={appointInfo.bookingDate} />
        </Form.Item>
        <Form.Item label="Booking Time">
          <Input value={moment().format(" h:mm a")} />
        </Form.Item>
        <Form.Item label="Appointment Date">
          <DatePicker
            onChange={(value) =>
              setAppointINfo((prev) => {
                return {...prev, appointmentDate: value.format("Do MMM YY")}
              })
            }
            allowClear={false}
          />
        </Form.Item>
        <Form.Item label="Appointment time slot">
          <Select
            onChange={(value) =>
              setAppointINfo((prev) => {
                return {...prev, appointmentSlot: value}
              })
            }
          >
            <Select.Option value="morning">
              Morning (9:00 - 12:00)
            </Select.Option>
            <Select.Option value="afternoon">
              Afternoon (2:00 - 4:00)
            </Select.Option>
            <Select.Option value="evening">Evening (5:00 - 7:00)</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="OPD Room no/name"
          onChange={(e) =>
            setAppointINfo((prev) => {
              return {...prev, opdname: e.target.value}
            })
          }
        >
          <Input value={appointInfo.opdname} />
        </Form.Item>
        <Form.Item
          label="Any Reference"
          onChange={(e) =>
            setAppointINfo((prev) => {
              return {...prev, anyRef: e.target.value}
            })
          }
        >
          <Input value={appointInfo.anyRef} />
        </Form.Item>
      </Form>
    </Card>
  )
}

const BillingInfo = ({setPatientAllInfo}) => {
  const [registrationFee, setRegistrationFee] = useState(100)
  const [consultationFee, setConsultationFee] = useState(300)
  const [otherfee, setOtherfee] = useState(0)
  const [total, setTotal] = useState(0)
  const [recieveAmt, setRecieveAmt] = useState(0)
  const [dueAmt, setDueAmt] = useState(0)

  useEffect(() => {
    !registrationFee && setRegistrationFee(0)
    !consultationFee && setConsultationFee(0)
    !otherfee && setOtherfee(0)
    !recieveAmt && setRecieveAmt(0)

    setTotal(registrationFee + otherfee + consultationFee)
    setDueAmt(total - recieveAmt)
  }, [registrationFee, consultationFee, otherfee, dueAmt, recieveAmt])

  const finalSubmitHandler = () => {
    const billinginfo = {
      registrationFee: registrationFee,
      consultationFee: consultationFee,
      otherfee: otherfee,
      total: total,
      recieveAmt: recieveAmt,
      dueAmt: dueAmt,
    }
    setPatientAllInfo((prev) => {
      return {...prev, billinginfo: billinginfo}
    })
  }
  return (
    <Card title="Billing Info" style={{borderRadius: "10px"}}>
      <Form>
        <Form.Item
          label="Registration Fee amount"
          onChange={(e) => setRegistrationFee(parseFloat(e.target.value))}
        >
          <Input
            prefix="₹"
            suffix="INR"
            placeholder="0.00"
            value={registrationFee}
          />
        </Form.Item>
        <Form.Item
          label="Doctor consultation Fee "
          onChange={(e) => setConsultationFee(parseFloat(e.target.value))}
        >
          <Input
            prefix="₹"
            suffix="INR"
            placeholder="0.00"
            value={consultationFee}
          />
        </Form.Item>

        <Form.Item
          label="Any other Fee "
          onChange={(e) => setOtherfee(parseFloat(e.target.value))}
        >
          <Input prefix="₹" suffix="INR" placeholder="0.00" value={otherfee} />
        </Form.Item>
        <Form.Item label="Total billing amount">
          <Input
            prefix="₹"
            suffix="INR"
            value={total}
            style={{border: "1px solid #d89614"}}
          />
        </Form.Item>
        <Form.Item
          label="Amount Recieved"
          onChange={(e) => setRecieveAmt(parseFloat(e.target.value))}
        >
          <Input
            prefix="₹"
            suffix="INR"
            style={{border: "1px solid #49aa19"}}
            value={recieveAmt}
          />
        </Form.Item>
        <Form.Item
          label="Due balance Amount"
          onChange={(e) => setDueAmt(e.target.value)}
          v
        >
          <Input
            prefix="₹"
            suffix="INR"
            style={{border: "1px solid #d32029"}}
            value={total - recieveAmt}
          />
        </Form.Item>
        <Button style={{float: "right"}} onClick={finalSubmitHandler}>
          Submit & create Apppointment
        </Button>
      </Form>
    </Card>
  )
}
