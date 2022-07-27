import { useContext } from 'react'
import {ProductButton, ProductCardContainer, ProductFooter, ProductFooterName, ProductFooterPrice, ProductImage} from './product-card.styles'
import {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({ product}) => {


  const { id, name, price, imageUrl} = product
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () => {
    addItemToCart(product)
  }
  return(
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductFooterName>{name}</ProductFooterName>
        <ProductFooterPrice>{price}</ProductFooterPrice>
      </ProductFooter>
      <ProductButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add</ProductButton>
    </ProductCardContainer>
  )
}

export default ProductCard