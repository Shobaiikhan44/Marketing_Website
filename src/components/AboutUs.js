import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from '../assets/Container.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <div className='bg-light'>
            <Container className="my-5">
                <Row className="align-items-center ">
                    <Col md={6} xs={{ order: 2 }} className="text-center text-md-start">
                        <Image 
                            src={img} 
                            alt="about us image" 
                            fluid 
                            style={{
                                width: '100%',
                                height: 'auto',
                                opacity: '1',
                            }}
                        />
                    </Col>
                    <Col md={6} xs={{ order: 1 }}>
                        <div style={{ marginTop: '20px' }}>
                            <p><em>ABOUT US</em></p>
                            <h2>Welcome to J2911 <br />Resources LLC</h2>
                            <p>
                                <span>
                                    Welcome to J2911 RESOURCES LLC - Your Trusted and Resourceful Partner in ICT Consulting, 
                                    Business Development, Policy, and Strategic Partnerships.
                                </span>
                            </p>
                            <p>
                                At J2911 RESOURCES LLC, we pride ourselves on being a leading consultancy firm,
                                specializing in a comprehensive range of services tailored to meet the dynamic needs of the
                                modern business landscape. With a wealth of experience and a proven track record, we are 
                                committed to empowering your organization for sustained growth and success.
                            </p>
                            <Button className='btn btn-primary btn-lg mt-4 mb-4'>
                                Learn More &nbsp; 
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
