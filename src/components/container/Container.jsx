import React from 'react'
import './Container.css'
import { Row, Col, Card, Tag, Button } from 'antd';
import { Code, Palette, Cpu, Gauge, Shield, ArrowRight, Sparkles } from 'lucide-react';


const Container = ({ services }) => {
  return (
    <div>
      <section className="services-grid">
        <Row gutter={[24, 24]}>
          {services.map((item, index) => (
            <Col xs={24} md={12} key={index}>
              <Card className="service-card" buffered={false}>
                <div className="service-header">
                  <div className="service-icon-box">{item.icon}</div>
                  <Tag className="space-tag">{item.tag}</Tag>
                </div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.description}</p>
                <ul className="service-features-list">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <span className="bullet-star">✦</span> {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  )
}

export default Container