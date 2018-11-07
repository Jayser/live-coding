import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { MainNav } from '../main-nav';
import './component.css';

export const BaseLayout = ({ match: { url }, ...props }) => (
    <div>
        <MainNav activeUrl={url}/>
        <Container>
            <Row>
                <Col>
                    <h2 className="headers">
                        {props.title}
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    </div>
);
