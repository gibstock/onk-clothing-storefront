import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {

  const {cartItems} = useContext(CartContext)
  
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate('/checkout')
  }

  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => <CartItem cartItem={cartItem} />)}
      </div>
      <Button onClick={clickHandler}>Checkout</Button>
    </div>
  )
}

export default CartDropdown