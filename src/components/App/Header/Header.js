import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import NdovuLogo from "assets/NdovuPay.svg";
import bellAlert from "assets/bellAlert.svg";
import houseChimney from "assets/houseChimney.svg";

import userAccount from "assets/userAccount.svg";
import wallet from "assets/wallet.svg";
import Badge from "react-bootstrap/Badge";

//import AppContext from "components/AppContext";

const Header = () => {
  return (
    <div className="fixed-top bg-primary w-100">
      <Container></Container>
      <Navbar bg="light" expand="md" variant="light" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={NdovuLogo}
              width="100"
              height="41"
              alt="Ndovu Pay Logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <div className="d-flex">
            <Nav.Item className="d-block d-flex align-items-center">
              <span className="badge bg-success fs-2 rounded-pill">?</span>
              <p className="d-none d-lg-block my-auto mx-1">Help</p>
            </Nav.Item>

            <Nav.Item className="d-none d-lg-block">
            <img
                className="align-self-center mt-3 mx-3 py-auto"
                src={bellAlert}
                // width="26"
                // height="30"
                alt=""
              />
              <Badge bg="success" className="position-flex top-0 start-100 translate-middle rounded-pill">2</Badge></Nav.Item>
              <Nav.Item className="d-none d-lg-block">
              <img
                className="align-self-center mt-3 mx-3 py-auto"
                src={userAccount}
                // width="26"
                // height="30"
                alt=""
              />
              Austin
              </Nav.Item>
            <Navbar.Toggle className="mx-3" aria-controls="basic-navbar-nav" />
          </div>
        </Container>
      </Navbar>

{/* Bottom NavBar */}
      <Navbar
        fixed="bottom"
        bg="light"
        expand="md"
        variant="light"
        className="shadow-sm d-block d-md-none"
      >
        <Container>
          <Nav className="d-flex flex-row justify-content-around w-100 fs-6 fw-semibold">
            <Nav.Link className="d-flex flex-column">
              <img
                className="align-self-center"
                src={houseChimney}
                width="26"
                height="30"
                alt=""
              />
              Home
            </Nav.Link>
            <Nav.Link className="d-flex flex-column">
              <img
                className="align-self-center"
                src={wallet}
                width="26"
                height="30"
                alt=""
              />
              Wallet
            </Nav.Link>
            <Nav.Link className="d-flex flex-column">
              <img
                className="align-self-center"
                src={bellAlert}
                width="26"
                height="30"
                alt=""
              />
              Notifications
            </Nav.Link>
            <Nav.Link className="d-flex flex-column">
              <img
                className="align-self-center"
                src={userAccount}
                width="26"
                height="30"
                alt=""
              />
              My Account
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
