import React from "react"
import Signup from "./components/login_components/Singup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/login_components/Dashboard"
import Login from "./components/login_components/Login"
import PrivateRoute from "./components/login_components/PrivateRoute"
import ForgotPassword from "./components/login_components/ForgetPassword"
import UpdateProfile from "./components/login_components/UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App