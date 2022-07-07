import { Outlet } from 'react-router-dom'
import CheckoutPage from '../../components/checkout-page/checkout-page.component'
import './checkout.styles.scss'

const Checkout = () => {
  return(
    <>
      <Outlet />
      <CheckoutPage />
    </>
  )
}

export default Checkout