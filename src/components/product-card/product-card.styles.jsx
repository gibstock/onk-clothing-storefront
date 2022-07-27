import styled from 'styled-components'
import Button from '../button/button.component'

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`
export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  ${ProductCardContainer}:hover & {
    opacity: 0.8;
  }
`

export const ProductFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const ProductFooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`
export const ProductFooterPrice = styled.span`
  width: 10%;

`
export const ProductButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  ${ProductCardContainer}:hover & {
    opacity: 0.85;
    display: flex;
    border: none;
  }

`
// .product-card-container {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   position: relative;

//   img {
//   }

//   button {
//   }

//   &:hover {
//     img {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }

//   .footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {
//       width: 90%;
//       margin-bottom: 15px;
//     }

//     .price {
//       width: 10%;
//     }
//   }
// }
