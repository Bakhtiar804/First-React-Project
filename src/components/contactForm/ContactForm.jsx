import React from 'react';
import { Button, Flex, Form, Input, Select } from 'antd';
import { Send, RotateCcw, Rocket } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Submitted:', values);
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-header">
        <Rocket className="rocket-icon" />
        <h2>Mission Control Contact</h2>
        <p>Send a signal across the cosmos. We will respond shortly.</p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        scrollToFirstError={{ behavior: 'smooth', block: 'center' }}
        className="space-form"
      >
        <Form.Item
          name="name"
          label="Your Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="e.g. Commander Shepard" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email address' }
          ]}
        >
          <Input placeholder="name@domain.com" />
        </Form.Item>

        <Form.Item
          name="topic"
          label="Inquiry Type"
          rules={[{ required: true, message: 'Please select an inquiry type' }]}
        >
          <Select
            placeholder="Select a category"
            options={[
              { label: 'General Signal', value: 'general' },
              { label: 'Project Launch (Services)', value: 'services' },
              { label: 'Emergency Support', value: 'support' },
              { label: 'Feedback', value: 'feedback' },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="message"
          label="Transmission Message"
          rules={[{ required: true, message: 'Please write your message' }]}
        >
          <Input.TextArea rows={5} placeholder="Write your transmission here..." />
        </Form.Item>

        <Form.Item style={{ marginTop: '1.5rem', marginBottom: 0 }}>
          <Flex gap="medium">
            <Button type="primary" htmlType="submit" className="space-btn-primary">
              <Send size={16} /> Send Signal
            </Button>
            <Button onClick={() => form.resetFields()} className="space-btn-reset">
              <RotateCcw size={16} /> Reset
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;