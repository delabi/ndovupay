import React from "react";
import Card from "react-bootstrap/Card";
import maroonBackground from "assets/maroonBackground.webp";
import creditCard from "assets/creditCard.svg";
import handShake from "assets/handShake.svg";
import packageBoxed from "assets/packageBoxed.svg";
import shareAndEarn from "assets/shareAndEarn.svg";
import shareAndEarnBlack from "assets/shareAndEarnBlack.svg";
import shoppingDude from "assets/shoppingDude.jpeg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import bellAlert from "assets/bellAlert.svg";
import houseChimney from "assets/houseChimney.svg";
import userAccount from "assets/userAccount.svg";
import wallet from "assets/wallet.svg";

const homeOptions = [
  {
    image: handShake,
    optionText: "Join & pay Transaction",
    bgColor: "#DB2A12",
    alerts: 11,
  },
  {
    image: packageBoxed,
    optionText: "Accept/Reject Delivery",
    bgColor: "#FFB600",
    alerts: 0,
  },
  {
    image: creditCard,
    optionText: "My Transactions",
    bgColor: "#1E191B",
    alerts: 0,
  },
  {
    image: shareAndEarn,
    optionText: "Share and Earn",
    bgColor: "#79898C",
    alerts: "",
  },
];

const balances = [
  {
    amt: 50.0,
    type: "Held Balance",
    currency: "KES",
  },
  {
    amt: 50.01,
    type: "Available Balance",
    currency: "KES",
  },
];

const Body = () => {
  return (
    <>
      <Container fluid className="d-flex">
        <Col lg={3} className="d-none d-lg-block" style={{ marginTop: "75px" }}>
          <Navbar
            bg="light"
            variant="light"
            className="d-none d-lg-block h-100"
          >
            <Container>
              <Nav className="d-flex flex-column justify-content-around w-100 fs-6 fw-semibold">
                <Nav.Link className="d-flex">
                  <img
                    className="align-self-center me-3"
                    src={houseChimney}
                    width="26"
                    height="30"
                    alt=""
                  />
                  Dashboard
                </Nav.Link>
                <Nav.Link className="d-flex">
                  <img
                    className="align-self-center me-3"
                    src={wallet}
                    width="26"
                    height="30"
                    alt=""
                  />
                  My Transactions
                </Nav.Link>

                <Nav.Link className="d-flex">
                  <img
                    className="align-self-center me-3"
                    src={userAccount}
                    width="26"
                    height="30"
                    alt=""
                  />
                  Account
                </Nav.Link>

                <Nav.Link className="d-flex">
                  <img
                    className="align-self-center me-3"
                    src={bellAlert}
                    width="26"
                    height="30"
                    alt=""
                  />
                  Disputes
                </Nav.Link>
                <Nav.Link className="d-flex">
                  <img
                    className="align-self-center me-3"
                    src={shareAndEarnBlack}
                    height="30"
                    alt=""
                  />
                  Earn Money
                </Nav.Link>
              </Nav>
            </Container>
            <div className="d-flex">Account Type: Individual | Business</div>
          </Navbar>
        </Col>
        <Col lg={8} md={8} style={{ marginTop: "75px" }}>
          <div className="fs-2 d-none d-md-block ms-3">
            Hi,<span className="text-warning"> Austine</span> !
          </div>
          <div
            className="d-flex flex-wrap mt-lg-3"
            style={{ marginTop: "", marginBottom: "100px" }}
          >
            <br />
            <Card
              style={{
                width: "90%",
                maxWidth: "30em",
                height: "120px",
              }}
              className="bg-dark text-white order-lg-last ms-lg-2"
            >
              <Card.Img
                src={maroonBackground}
                style={{ height: "120px" }}
                alt="Card image"
              />
              <Card.ImgOverlay className="d-flex flex-row p-0 text-center">
                {balances.map(({ amt, type, currency }) => (
                  <Card.Body>
                    <Card.Title
                      className="fs-2 fw-bold"
                      style={{ color: "#FFB600" }}
                    >
                      {amt}
                    </Card.Title>
                    <Card.Subtitle className="fs-0">{type}</Card.Subtitle>
                    <Card.Text>{currency}</Card.Text>
                  </Card.Body>
                ))}
              </Card.ImgOverlay>
            </Card>

            {homeOptions.map(({ image, optionText, alerts }, index) => (
              <Card
                
                style={{
                  width: "45%",
                  maxWidth: "10em",
                  height: "10em",
                  background: homeOptions[index].bgColor,
                  border: homeOptions[index].bgColor,
                }}
                
                className="text-white d-flex flex-row my-3 ms-2 me-0"
              >
                <Card.Body className="position-relative">
                  <Card.Img variant="top" src={image} className="w-50" />
                  <span
                    className="position-absolute badge rounded-pill top-0 end-0 m-2"
                    style={{ background: "rgba(256, 256, 256, 0.5)" }}
                  >
                    {alerts}
                  </span>
                  <Card.Text>{optionText}</Card.Text>
                </Card.Body>
              </Card>
            ))}

            <Card
              style={{
                // width: "18rem",
                height: "120px",
              }}
              className="w-100 bg-dark text-red m-3 d-lg-none"
            >
              <Card.Img
                src={shoppingDude}
                style={{ height: "120px" }}
                alt="Card image"
              />
              <Card.ImgOverlay className="d-flex flex-row p-0 text-center">
                <Card.Body>
                  <Card.Title
                    className="fs-1 fw-bold"
                    style={{ color: "#FFB600" }}
                  >
                    Shopping with
                  </Card.Title>
                  <Card.Title
                    className="fs-2 fw-bold"
                    style={{ color: "#FFB600" }}
                  >
                    Confidence
                  </Card.Title>
                  <Card.Subtitle className="fs-6 fw-semibold">
                    Your money is safe
                  </Card.Subtitle>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default Body;
