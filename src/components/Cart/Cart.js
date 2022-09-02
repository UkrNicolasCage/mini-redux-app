import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartData = useSelector(state => state.cart.items);
  const cartItems = cartData.map(data => {
    return <CartItem  key={data.id} item={{
      title:data.name,
      price: data.price,
      quantity: data.quantity,
      total: data.totalPrice,
      id: data.id
    }}/>
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems}
      </ul>
    </Card>
  );
};

export default Cart;
