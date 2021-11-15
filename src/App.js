import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import BuyingGuide from './Pages/Home/Information/BuyingGuide/BuyingGuide';
import Explore from './Pages/Home/Explore/Explore';
import Products from './Pages/Home/Products/Products';
import Contact from './Pages/Home/Contact/Contact';
import TermsConditions from './Pages/Home/Information/TermsConditions/TermsConditions';
import PrivacyPolicy from './Pages/Home/Information/PrivacyPolicy/PrivacyPolicy';
import Faq from './Pages/Home/Information/Faq/Faq';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Pages/Home/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import OrderPlace from './Pages/Home/OrderPlace/OrderPlace';
import AdminDashboard from './Pages/Dashboard/AdminDashboard/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/orderplace/:productId">
              <OrderPlace />
            </Route>
            <PrivateRoute path="/contact">
              <Contact />
            </PrivateRoute>
            <PrivateRoute path="/admindashboard">
              <AdminDashboard />
            </PrivateRoute>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/buyingguide">
              <BuyingGuide />
            </Route>
            <Route path="/termsconditions">
              <TermsConditions />
            </Route>
            <Route path="/privacypolicy">
              <PrivacyPolicy />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
