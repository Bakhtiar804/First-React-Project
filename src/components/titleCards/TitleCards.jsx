import React from 'react'
import { Row, Col, Card, Button } from 'antd';


const TitleCards = ({ featuredProjects }) => {
    return (
        <div>
            <Row gutter={[24, 24]}>
                {featuredProjects.map((project, index) => (
                    <Col xs={24} md={8} key={index}>
                        <Card className="project-card" buffered={false}>
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default TitleCards