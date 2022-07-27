import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

`
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

`
export const Image = styled.img`
  width: 100%;
  height: 100%;

`
const CommonWidth = `
  width: 23%;

`
export const Name = styled.span(CommonWidth)
export const Price = styled.span(CommonWidth)
export const Quantity = styled.span`
  width: 23%;
  display: flex;
`
export const Arrow = styled.div`
  cursor: pointer;
  &:hover {
    color: hsl(210, 65%, 45%);
  }
`
export const Value = styled.span`
  margin: 0 10px;

`
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  &:hover {
    color:hsl(10, 65%, 45%);
  }
`
// .checkout-item-container {

//   .image-container {

//     img {
//     }
//   }
//   .name,
//   .quantity,
//   .price {
//   }

//   .quantity {

//     .arrow {
//       &:hover {
//         color: hsl(210, 65%, 45%);
//       }
//     }

//     .value {
//     }
//   }

//   .remove-button {
//     &:hover {
//       color:hsl(10, 65%, 45%);
//     }
//   }
// }
