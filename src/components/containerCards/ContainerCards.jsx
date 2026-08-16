import React from 'react'
import './ContainerCards.css'
import { Button, Row, Col, Card } from 'antd';

const ContainerCards = ({values}) => {
  return (
    <div>
        <section className="values-section">
        
        <Row gutter={[24, 24]}>
          {values.map((item, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="value-card" buffered={false}>
                <div className="icon-wrapper">{item.icon}</div>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-description">{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  )
}

export default ContainerCards