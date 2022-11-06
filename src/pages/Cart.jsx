import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartProduct from "../components/cart/CartProduct"
import { getAllProductsCart, setCartGlobal } from "../store/slices/cart.slice"
import getConfig from "../utils/getConfig"

const Cart = () => {

  const [total, setTotal] = useState(0)

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])

  useEffect(() => {
    if (cart) {
      const result = cart.products.reduce((acc, cv) => {
        return acc + cv.price * cv.productsInCart.quantity
      }, 0)
      setTotal(result)
    }
  }, [cart])



  const handlePurchase = () => {

    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
        setTotal(0)
      })
      .catch(err => console.log(err))
      
  }

  return (
    <div data-cy="cart" className="cart">
      <div className="cart__container">
        {
          cart?.products.map(product => (
            <CartProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
      <h2 data-cy="total">Total: ${total}</h2>
      <button data-cy="button-buy" value="Buy Now" onClick={handlePurchase}>Buy Now</button>
    </div>
  )
}

export default Cart
