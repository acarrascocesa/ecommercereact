import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CardProduct from "../components/home/CardProduct"
import InputSearch from "../components/home/InputSearch"
import { getAllProducts } from "../store/slices/products.slice"
import "./styles/home.css"

const Home = () => {

  const [inputText, setInputText] = useState("")

  const [filterByText, setFilterByText] = useState()


  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if (inputText !== "") {
      const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cb))
    } else {
      setFilterByText()
    }
  }, [inputText])

  console.log(filterByText);


  return (
    <main data-cy="home" className="home">
      <InputSearch
        setInputText={setInputText}
        inputText={inputText}
      />
      <div className="home__container">
        {
          filterByText ?
            filterByText?.map(product => (
              <CardProduct
                key={product.id}
                product={product}
              />
            ))
            :
            products?.map(product => (
              <CardProduct
                key={product.id}
                product={product}
              />
            ))

        }
      </div>
    </main>
  )
}

export default Home
