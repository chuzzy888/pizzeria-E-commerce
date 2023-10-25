import React from 'react';
import { useCart } from 'react-use-cart';

function Cart() {
  const { isEmpty, totalUniqueItems, items, removeItem, updateItemQuantity } = useCart();

  if (isEmpty) return <h2 className='emptycart'>cart is empty! </h2>;

  return (
    <div>
      <h1>Cart({totalUniqueItems})</h1>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card" style={{marginLeft:"20px"}}>
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">${item.id}</h5>
                <h3 className="card-text">{item.name}</h3>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}className='minus'>-</button>
                <span style={{ color:"white"}}>{item.quantity}</span>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}className='plus'>+</button>
                <button onClick={() => removeItem(item.id)}className='remove'>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;


  


