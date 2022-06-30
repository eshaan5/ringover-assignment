import { useState } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Store from "./components/store/Store";
import Team from "./components/team/Team";
import shoe1 from './assets/shoe.jpg'
import shoe2 from './assets/shoe2.png'
import Journey from "./components/journey/Journey";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "KSL 01",
    price: 2500,
    type: "Loafers",
    img: shoe1
  },
  {
    id: 2,
    name: "KSW 01",
    price: 2000,
    type: "Sneakers",
    img: shoe2
  },
  {
    id: 3,
    name: "KSL 01",
    price: 5000,
    type: "Loafers",
    img: shoe1
  },
  {
    id: 4,
    name: "KSW 01",
    price: 2000,
    type: "Sneakers",
    img: shoe2
  },
  {
    id: 5,
    name: "KSL 01",
    price: 2500,
    type: "Loafers",
    img: shoe1
  },
  {
    id: 6,
    name: "KSW 01",
    price: 10000,
    type: "Sneakers",
    img: shoe2
  }
];

function App() {

  const [prod, setProd] = useState(products)
  const [cart, setCart] = useState([])
  console.log(cart)

  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store prod={prod} setCart={setCart} cart={cart} setProd={setProd} products={products} />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
