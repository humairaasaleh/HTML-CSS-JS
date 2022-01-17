// import CompWithVars from './components/CompWithVars';
// import HelloWorld from './components/HelloWorld';
// import Page from './components/Page';
// import Parent from './components/Parent';
// import PizzaOrder from './components/props/PizzaOrder';
// import ContactCardManager from './components/props/ContactCardManager';
// import Manager from './components/state/Manager';
// import ControlledInput from './components/forms/ControlledInput';
// import Car from './components/state/Car';
// import Login from './components/state/Login';
// import Clock from './components/state/Clock';
// import MilesAhead from './components/state/MilesAhead';
// import ParentArray from './components/props/Parent';
// import Manager from './components/liftingState/Manager';
// import Clock from './components/useEffect/Clock';
// import Greet from './components/useEffect/Greet';
// import ReadMore from './components/useEffect/ReadMore';
// import SearchTable from './components/state/SearchTable';
import './css/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Nav from './components/routing/Nav';
// import Footer from './components/routing/Footer';
// import Home from './components/routing/Home';
// import About from './components/routing/About';
// import Shop from './components/routing/Shop';
// import Child from './components/routing/Child';
import Bar from './components/requestHandling/Bar';

function App() {
  return (
    <div className="App">

      {/* <BrowserRouter> */}
        {/* this is rendered n every page */}
        {/* <Nav /> */}
        {/* <Greet/> */}

        {/* everything in switch are the components you want to switch between */}
        {/* <Routes> */}
          {/* what path to take to get to this component */}

          {/* <Route path="/" exact element={<Home/>}/> */}
          {/* <Route path="/about" element={<About/>}/> */}

          {/* <Route path="/shop/:id" element={<Shop/>}/> */}

        {/* </Routes> */}
        {/* <Footer /> */}
      {/* </BrowserRouter> */}


      {/* components must begin with capital letter */}
      {/* <HelloWorld/> */}
      {/* <CompWithVars/> */}
      {/* <Parent/>*/}
      {/* <Page/> */}
      {/* <PizzaOrder/> */}
      {/* <ContactCardManager/> */}
      {/* <ParentArray/> */}
      {/* <Manager/> */}
      {/* <MilesAhead/> */}
      {/* <Clock/> */}
      {/* <ControlledInput/> */}
      {/* <Login/> */}
      {/* <Car/> */}
      {/* <SearchTable/> */}
      {/* <Manager/> */}
      {/* <Clock/> */}
      {/* <ReadMore/> */}
      <Bar/>

    </div>
  );
}

export default App;
