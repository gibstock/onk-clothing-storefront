import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'
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
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map((cartItem) => <CartItem cartItem={cartItem} />)
            ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={clickHandler}>Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown