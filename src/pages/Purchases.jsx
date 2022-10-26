import axios from "axios"
import { useEffect, useState } from "react"
import CardPurchase from "../components/purchases/CardPurchase"
import getConfig from "../utils/getConfig"
import "./styles/purchases.css"

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))

  }, [])

  return (
    <div className='purchses'>
      <h2 className='purchases__title'>My Purchases</h2>
      <div className='purchases__container'>
        {
          purchases?.map(purchase => (
            <CardPurchase
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>
    </div>

  )
}

export default Purchases
