import { 
  CartItemContainer, 
  CartItemImage, 
  ItemDetails, 
  ItemDetailsName, 
  ItemDetailsPrice
} from  './cart-item.styles'

const CartItem = ({cartItem}) => {
  const { name, quantity, imageUrl, price } = cartItem
  return(
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`}/>
      <ItemDetails>
        <ItemDetailsName>{name}</ItemDetailsName>
        <ItemDetailsPrice>
          {quantity} x ${price}</ItemDetailsPrice>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem