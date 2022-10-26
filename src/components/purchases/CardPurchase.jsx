import "./purchase.css"
const CardPurchase = ({ purchase }) => {


    return (

        <article className='purchase'>
            <header className="purchase__header">{purchase.updatedAt}</header>
            <div className='purchase__body'>
                {
                    purchase.cart.products.map(product => (
                        <section key={product.id}>
                            <h3 className='purchase__title'>{product.title}</h3>
                            <div className='purchase__quantity'>{product.productsInCart.quantity}</div>
                            <div className='purchase__price'>{product.price}</div>
                        </section>
                    ))
                }
            </div>
        </article>
    )
}

export default CardPurchase
