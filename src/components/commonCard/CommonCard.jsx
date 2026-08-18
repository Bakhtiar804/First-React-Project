import React from 'react'
import {  Row, Col, } from 'antd';
import './CommonCard.css'

const CommonCard = ({stats}) => {
  return (
    <div>
        <section className="stats-section">
        <Row gutter={[16, 16]} justify="center">
          {stats.map((stat, index) => (
            <Col xs={12} sm={6} key={index}>
              <div className="stat-card">
                <h2 className="stat-value">{stat.value}</h2>
                <p className="stat-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  )
}

export default CommonCard