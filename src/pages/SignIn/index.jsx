import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button , Spinner} from "react-bootstrap";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import banner from "../../assets/img/login/login.png"
import { LoginUser } from '../../redux/features/cars/auth/auth';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );


  const handleLogin = (e) => {
    e.preventDefault();
    // console.log ( "login", email, password)
    dispatch(LoginUser({email,password}))
  };
  
  useEffect(() => {
    if (isSuccess) {
      const redirectPath = localStorage.getItem("redirectPath");
      if (redirectPath) {
        localStorage.removeItem("redirectPath"); 
        navigate(redirectPath);
    } else {
      navigate(-1);
    }
  }
  }, [isSuccess, navigate]);

  
  
  
 




  return (
    <Container fluid>
          <Row>
            <Col className="col-md-6 d-flex flex-column justify-content-center">
              <div className="mx-auto">
                <div
                  className="mb-4 "
                  style={{
                    height: "34px",
                    width: "80px",
                    backgroundColor: "#CFD4ED",
                  }}
                ></div>
                <h3 className="mb-4" style={{ fontWeight: "bold" }}>
                  Welcome Back!
                </h3>
                <div>
                    <Form  onSubmit={handleLogin} method="post">
                      <Form.Group className="mb-4">
                        <Form.Label as="label" htmlFor="email">
                         Email
                        </Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="Example: johndee@gmail.com"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                       />
                      </Form.Group>
                      <Form.Group className="mb-4">
                      <Form.Label as="label" htmlFor="password">
                        Password
                      </Form.Label>
                      <Form.Control
                        placeholder="6+ characters"
                        name="password"
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="w-100" >
                      {isLoading ? <Spinner animation="border" role="status" size="sm">
                                    </Spinner>  : "Sign In"}
                      </Button>
                    </Form>
                    </div>
                    {isSuccess && <p className="text-success">success</p>}
                    {isError && <p className="text-danger">{message}</p>}
                    <p className="text-center mt-4">
                      Don’t have an account?{" "}
                    <Link to="/signup">Sign Up For Free</Link>
                    </p>
              </div>
            </Col>
            <Col>
            <img
                src={banner}
                alt="Login"
                className="login-img img-fluid" />
            </Col>
            </Row>
            </Container>
                
  )

}
   


export default SignIn