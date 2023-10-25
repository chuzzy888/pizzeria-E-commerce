import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CartProvider, useCart } from 'react-use-cart';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        const mappedProducts = res.data.meals.map(product => ({
          id: product.idMeal,
          name: product.strMeal,
          price: 0,
          quantity: 1,
          image: product.strMealThumb
        }));
        setProducts(mappedProducts);
        
      })
      .catch(error => console.error("Unable to fetch", error));
  }, []);

  const handleAddToCart = (item) => {
    addItem(item);
    setNotification(alert(

      `${item.name} added to cart!`));
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <CartProvider>
      <div className="container">
        <h1 className="ourmeals">Our Meals</h1>
        {notification && <h1>{notification}</h1>} 
        <div className="row">
          {products.map(item => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="cards">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">${item.id}</h5>
                  <p className="card-text">{item.name}</p>
                  <button style={{marginBottom:"10px"}} onClick={() => handleAddToCart(item)} className='cartbutton'>add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CartProvider>
  );
}

export default ProductList;





