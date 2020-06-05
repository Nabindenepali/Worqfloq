/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Link } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';

class Login extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('/api/auth/login', user)
        .then(res => {
          this.setState({errors: {}});
          console.log(res.data);
        })
        .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const { errors } = this.state;

    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-5">
                        <small>Sign in with credentials</small>
                      </div>
                      <Form noValidate role="form" onSubmit={this.onSubmit}>
                        <FormGroup className={classnames('mb-3', {
                          'has-danger': errors.email
                        })}>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input className={classnames('form-control', {
                              'is-invalid': errors.email
                            })}
                                   type="email"
                                   name="email"
                                   placeholder="Email"
                                   value={this.state.email}
                                   onChange={this.onChange}/>
                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className={classnames({
                          'has-danger': errors.password
                        })}>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input className={classnames('form-control', {
                              'is-invalid': errors.password
                            })}
                                   type="password"
                                   name="password"
                                   placeholder="Password"
                                   autoComplete="off"
                                   value={this.state.password}
                                   onChange={this.onChange}/>
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col className="text-center">
                      <Link to="/register"
                            className="text-light"
                      >
                        <small>Create new account</small>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
