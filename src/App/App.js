import "./App.css";

// import react-router-dom
import { Route, Switch } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";

// import components
// import Navbar from "../Components/Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";
import New from "../Pages/New";
import MENU from "../Pages/MENU";
import BookRoom from "../Pages/BookRoom";
import Destination from "../Pages/MapLocation";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={New} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/menu" component={MENU}/>
        <Route exact path="/bookroom" component={BookRoom}/>
        <Route exact path="/destination" component={Destination}/>
        <Route component={Error} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
