import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { 
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from './checkout-page.styles.jsx'

import CheckoutItem from '../checkout-item/checkout-item.component'
const CheckoutPage = () => {

  const {cartItems, cartTotal} = useContext(CartContext)

  return(
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default CheckoutPage