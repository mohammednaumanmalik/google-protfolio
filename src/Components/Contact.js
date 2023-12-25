import React from "react";
import "./Contact.css";
import { BsTelephoneForward } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function Contact() {
  return (
    <div className="contact container">
      <div className="contact-item">
        <span>
          {" "}
          <b>
            {" "}
            <i style={{ marginRight: "" }}>
              <BsTelephoneForward />
            </i>{" "}
          </b>
        </span>
        <span>
          {" "}
          <b>Mobile </b>
        </span>
        <span>6268524688</span>
      </div>
      <div className="contact-item">
        <span>
          {" "}
          <b>
            {" "}
            <i style={{ marginRight: "" }}></i> <MdMarkEmailUnread />{" "}
          </b>
        </span>
        <span>
          {" "}
          <b>Email </b>
        </span>
        <span>
          <a href="" style={{ textDecoration: "none" }}>
            mohamednauman74@gmail.com
          </a>
        </span>
      </div>
      <div className="contact-item">
        <span>
          {" "}
          <b>
            {" "}
            <i style={{ marginRight: "" }}>
              {" "}
              <FaMapMarkerAlt />
            </i>{" "}
          </b>
        </span>
        <span>
          {" "}
          <b>Address </b>
        </span>
        <span>Burhanpur </span>
      </div>
      <div className="contact-item">
        <span>
          {" "}
          <b>
            {" "}
            <i style={{ marginRight: "" }}>
              <RxLinkedinLogo />
            </i>{" "}
          </b>
        </span>
        <span>
          {" "}
          <b>Linkedin </b>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/mohammed-nauman-malik/"
            style={{ textDecoration: "none" }}
          >
            Contact through Linkedin{" "}
          </a>
        </span>
      </div>

      <div className="third-row contact-item ">
        <Form
          className="contact-form"
          data-netlify="true"
          name="contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>
                  {" "}
                  <b style={{ opacity: "0.9", fontFamily: "sans-serif" }}>
                    {" "}
                    Name{" "}
                  </b>
                </Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  id="input-contact"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>
                  {" "}
                  <b style={{ opacity: "0.9", fontFamily: "sans-serif" }}>
                    {" "}
                    Email{" "}
                  </b>
                </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  id="input-contact"
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Group controlId="subject">
                <Form.Label>
                  {" "}
                  <b style={{ opacity: "0.9", fontFamily: "sans-serif" }}>
                    Subject{" "}
                  </b>
                </Form.Label>
                <Form.Control
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  id="input-contact"
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Group controlId=" message">
                <Form.Label>
                  {" "}
                  <b style={{ opacity: "0.9", fontFamily: "sans-serif" }}>
                    Message{" "}
                  </b>
                </Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  id="input-contact"
                />
              </Form.Group>
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Button variant="primary" type="submit" id="btn-contact">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
export default Contact;
