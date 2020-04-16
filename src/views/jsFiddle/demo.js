import React, { Component } from 'react';
import { Row, Col, Button, Form, Input, Checkbox, Radio, Select } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

class JSFiddleDemo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      } else {
        console.log(err);
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Row>
            <Col span={24}>
              <Form.Item label="姓名">
                {getFieldDecorator('Field1', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Input type="input" placeholder="请输入姓名" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="密码">
                {getFieldDecorator('Field2', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Input type="password" placeholder="请输入密码" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="爱好">
                {getFieldDecorator('Field3', {
                  rules: [
                    {
                      required: false,
                    },
                  ],
                })(
                  <Checkbox.Group style={{ width: '100%' }}>
                    <Row>
                      <Col span={6}>
                        <Checkbox value="羽毛球">羽毛球</Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox value="乒乓球">乒乓球</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                )}
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="性别">
                {getFieldDecorator('Field4', {
                  rules: [
                    {
                      required: false,
                    },
                  ],
                })(
                  <Radio.Group>
                    <Radio value="男">男</Radio>
                    <Radio value="女">女</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="好友">
                {getFieldDecorator('Field5', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(
                  <Select placeholder="请选择好友">
                    <Select.Option value="lili">lili</Select.Option>
                    <Select.Option value="lucy">lucy</Select.Option>
                  </Select>
                )}
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="好友">
                {getFieldDecorator('Field6', {
                  rules: [
                    {
                      required: false,
                    },
                  ],
                })(
                  <Select placeholder="请选择好友">
                    <Select.Option value="lili">lili</Select.Option>
                    <Select.Option value="lucy">lucy</Select.Option>
                  </Select>
                )}
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="简介">
                {getFieldDecorator('Field7', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Input.TextArea placeholder="请输入简介" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="简介">
                {getFieldDecorator('Field8', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Input.TextArea placeholder="请输入简介" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="简介">
                {getFieldDecorator('Field9', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Input.TextArea placeholder="请输入简介" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="简介">
                {getFieldDecorator('Field10', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Input.TextArea placeholder="请输入简介" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item label=" " colon={false}>
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                htmlType="submit"
              >
                提交
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(JSFiddleDemo);
