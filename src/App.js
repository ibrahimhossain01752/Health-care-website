import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import Doctors from './Doctors/Doctors';
import Aboutus from './Aboutus/Aboutus';
import Aboutsus from './Aboutus/Aboutsus';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/aboutus">
              <Aboutsus></Aboutsus>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
