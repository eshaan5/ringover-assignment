import React from "react";
import { IoFunnelOutline } from "react-icons/io5";
import "./store.css";
import { FiSearch } from "react-icons/fi";
import Shoe from "./Shoe";
import { FiShoppingBag } from 'react-icons/fi'
import Cart from "./Cart";

const Store = ({ prod, setCart, cart, setProd, products }) => {
  return (
    <div className="store">
      <div className="filters card">
        <div className="filter__header">
          <h2>FILTERS</h2>
          <IoFunnelOutline style={{ marginLeft: "auto" }} size={24} />
        </div>
        <div className="filter__cost">
          <h3>Cost</h3>
          <input type="checkbox" id="1500-4000" name="1500-4000" value="1500-4000" onClick={
            () => {
                if(document.getElementById('1500-4000').checked)
                setProd(prod.filter((pro) => pro.price >= 1500 && pro.price <= 4000))
                else
                setProd(products)
            }
          } />
          <label htmlFor="1500-4000"> Rs. 1500-4000</label>
          <br />
          <input type="checkbox" id="4001-7000" name="4001-7000" value="4001-7000" onClick={
            () => {
                if(document.getElementById('4001-7000').checked)
                setProd(prod.filter((pro) => pro.price >= 4001 && pro.price <= 7000))
                else
                setProd(products)
            }
          } />
          <label htmlFor="4001-7000"> Rs. 4001-7000</label>
          <br />
          <input type="checkbox" id="7001+" name="7001+" value="7001+" onClick={
            () => {
                if(document.getElementById('7001+').checked)
                setProd(prod.filter((pro) => pro.price >= 7001))
                else
                setProd(products)
            }
          } />
          <label htmlFor="7001+"> Rs. 7001+</label>
          <br />
        </div>
        <div className="filter__color">
          <h3>Color</h3>
          <div className="colors">
            <div style={{ background: "red", padding: "1rem" }}></div>
            <div style={{ background: "yellow", padding: "1rem" }}></div>
            <div style={{ background: "blue", padding: "1rem" }}></div>
            <div style={{ background: "brown", padding: "1rem" }}></div>
            <div style={{ background: "black", padding: "1rem" }}></div>
          </div>
        </div>
        <div className="filter__templates">
          <h3>Design templates</h3>
          <input type="checkbox" name="" id="" value={2} />
          <label htmlFor="2"> 2</label>
          <br />
          <input type="checkbox" name="" id="" value={3} />
          <label htmlFor="3"> 3</label>
          <br />
          <input type="checkbox" name="" id="" value="3+" />
          <label htmlFor="3+"> 3+</label>
          <br />
        </div>
        <div className="filter__type">
          <h3>Type</h3>
          <input type="checkbox" name="" id="sneakers" value="sneakers" onClick={
            () => {
                if(document.getElementById('sneakers').checked)
                setProd(prod.filter((pro) => pro.type === 'Sneakers'))
                else
                setProd(products)
            }
          } />
          <label htmlFor="sneakers"> Sneakers</label>
          <br />
          <input type="checkbox" name="" id="loafers" value="loafers" onClick={
            () => {
                if(document.getElementById('loafers').checked)
                setProd(prod.filter((pro) => pro.type === 'Loafers'))
                else
                setProd(products)
            }
          } />
          <label htmlFor="loafers"> Loafers</label>
          <br />
        </div>
      </div>

      <div className="shoes card">
        <div className="shoes__header">
          <h2>SHOES</h2>
          <div style={{ marginLeft: "auto" }}>
            <FiSearch size={24} />
            <button style={{ padding: "0.4rem", background: "transparent", marginLeft: "2rem" }}>sort by</button>
          </div>
        </div>
        <div className="shoes__array">
          {prod.map((pro) => (
           <Shoe pro={pro} setCart={setCart} cart={cart} />
          ))}
        </div>
      </div>
      <div className="cart card">
        <div className="cart__header">
            <h2>CART</h2>
            <FiShoppingBag size={24} style={{marginLeft: 'auto'}} />
            </div>
            <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Store;
