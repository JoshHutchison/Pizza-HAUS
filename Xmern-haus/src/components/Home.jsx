import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Mern Pizza Haus</h1>
      </div>
      <div className="menu-container">
        <Link to='/Pizza' className="menu-item">
          <div className="menu-text">
            <h2>Menu</h2>
            <p>Learn about our delicious pizza options.</p>
          </div>
          <div className="menu-image">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f0a575f2b3bb20c7584bc42/1675659810793-BBGKD1MQMFFMWX55IS3B/PizzaPasta_LeighGriffiths-39+hero-banner.jpg?format=2500w"
              alt="Pizza"
              className="circular-image"
            />
          </div>
        </Link>
        <Link to='/CYOP' className="menu-item">
          <div className="menu-image">
            <img
              src="https://cdn.tgdd.vn/2021/09/CookDish/cach-bao-quan-pizza-de-banh-pizza-va-cach-ham-nong-banh-pizza-avt-1200x676.jpg"
              alt="Pizza"
              className="circular-image"
            />
          </div>
          <div className="menu-text">
            <h2>Create Your Own Pizza - CYOP</h2>
            <p>Choose from a wide variety of fresh ingredients, including veggies, meats, and cheeses!</p>
          </div>
        </Link>
          <div className="about-us-container">
            <div className="about-us-text">
              <h2>About Us</h2>
              <p>Welcome to Mern Pizza Haus, where passion for pizza meets culinary excellence. Our story began in the heart of Italy, where our founder, Antonio, learned the art of crafting perfect pizza from his grandmother's secret recipe.

Over the years, Mern Pizza Haus has grown into a beloved pizzeria known for its commitment to quality ingredients and traditional techniques. Every pizza we serve is a piece of Italy on your plate, a tribute to the rich heritage of authentic Italian pizza-making.

We take pride in using the finest, freshest ingredients to create the most flavorful combinations. From our handcrafted dough to our savory sauces, every bite is a journey through Italy's flavors.

Whether you dine in, take out, or order for delivery, we are dedicated to bringing the joy of a true Italian pizza experience to your doorstep. Come, be a part of our delicious story, and savor the taste of tradition at Mern Pizza Haus.

Grazie mille for choosing us!</p>
            </div>
            <div className="about-us-image">
              <img src="data:image/jpeg;base64,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" alt="Mern Pizza Haus" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
