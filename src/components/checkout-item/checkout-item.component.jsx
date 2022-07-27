import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Price,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles'

const CheckoutItem = ({cartItem}) => {
  const {addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext)
  const { name, imageUrl, price, quantity } = cartItem

  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)
  const clearItemHandler = () => deleteItemFromCart(cartItem)

  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
        </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem