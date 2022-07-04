import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Store from "./components/store/Store";
import Team from "./components/team/Team";
import shoe1 from "./assets/shoe.jpg";
import shoe2 from "./assets/shoe2.png";
import Journey from "./components/journey/Journey";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "KSL 01",
    price: 2500,
    type: "Loafers",
    img: shoe1,
  },
  {
    id: 2,
    name: "KSW 01",
    price: 2000,
    type: "Sneakers",
    img: shoe2,
  },
  {
    id: 3,
    name: "KSL 01",
    price: 5000,
    type: "Loafers",
    img: shoe1,
  },
  {
    id: 4,
    name: "KSW 01",
    price: 2000,
    type: "Sneakers",
    img: shoe2,
  },
  {
    id: 5,
    name: "KSL 01",
    price: 2500,
    type: "Loafers",
    img: shoe1,
  },
  {
    id: 6,
    name: "KSW 01",
    price: 10000,
    type: "Sneakers",
    img: shoe2,
  },
  {
    id: 7,
    name: "KSL 01",
    price: 5000,
    type: "Loafers",
    img: shoe1,
  },
  {
    id: 8,
    name: "KSW 01",
    price: 2000,
    type: "Sneakers",
    img: shoe2,
  },
  {
    id: 9,
    name: "KSL 01",
    price: 2500,
    type: "Loafers",
    img: shoe1,
  },
  {
    id: 10,
    name: "KSW 01",
    price: 10000,
    type: "Sneakers",
    img: shoe2,
  }
];

function App() {

  const [prod, setProd] = useState(products);
  const [cart, setCart] = useState([]);

  const [filter1, setFilter1] = useState(false);
  const [filter2, setFilter2] = useState(false);
  const [filter3, setFilter3] = useState(false);

  const [sneakers, setSneakers] = useState(false);
  const [loafers, setLoafers] = useState(false);

  let filteredArray = [];

  const filterArray = () => {

    if (filter1 && filter2 && filter3) {
      filteredArray = products.filter((item) => item.price >= 1500);
      setProd(filteredArray);
      console.log(filteredArray);
    }
    else {
      setProd(products);
    }
    if (filter1 && filter2) {
      filteredArray = products.filter((pro) => pro.price >= 1500 && pro.price <= 7000);
      setProd(filteredArray);
      console.log(prod)
      console.log(filteredArray);
    }
    if (filter2 && filter3) {
      setProd(products.filter((pro) => pro.price >= 4001));
    }
    if (filter1 && filter3) {
      setProd(products.filter((pro) => (pro.price >= 1500 && pro.price <= 4000) || pro.price >= 7001));
    }
    if (filter1) {
      setProd(products.filter((pro) => pro.price >= 1500 && pro.price <= 4000));
    }
    else {
      setProd(products);
    }
    if (filter2) {
      setProd(products.filter((pro) => pro.price >= 4001 && pro.price <= 7000));
    }
    if (filter3) {
      setProd(products.filter((pro) => pro.price >= 7001));
    }

    if (sneakers && loafers) {
      setProd(products);
      console.log(prod);
    }

    if (sneakers) {
      setProd(products.filter((pro) => pro.type === "Sneakers"));
    }

    if (loafers) {
      setProd(products.filter((pro) => pro.type === "Loafers"));
    }
  }

  useEffect(() => {
    filterArray();
  }, [filter1, filter2, filter3, sneakers, loafers]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
          {console.log(prod)}
          <Route path="/store" element={<Store prod={prod} setCart={setCart} cart={cart} setFilter1={setFilter1} setFilter2={setFilter2} setFilter3={setFilter3} setSneakers={setSneakers} setLoafers={setLoafers} />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
