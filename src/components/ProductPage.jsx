import './productpage.scss'

const ProductPage = () => {
    return (
        <div className='section'>
            <div className="right">
                <div className="a-div">
                    <div className="big-div">
                        <img className='big-image' src="images/image-product-1.jpg" alt="" />
                        <img className='big-image' src="images/image-product-2.jpg" alt="" />
                        <img className='big-image' src="images/image-product-3.jpg" alt="" />
                        <img className='big-image' src="images/image-product-4.jpg" alt="" />
                    </div>
                    <div className="small-div">
                        <img className='small-image' src="images/image-product-1-thumbnail.jpg" alt="" />
                        <img className='small-image' src="images/image-product-2-thumbnail.jpg" alt="" />
                        <img className='small-image' src="images/image-product-3-thumbnail.jpg" alt="" />
                        <img className='small-image' src="images/image-product-4-thumbnail.jpg" alt="" />
                    </div>
              </div>
            </div>
            <div className="left">
                <div className="inside-left">
                    <h4>SNEAKER COMPANY</h4>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p className='text'>
                     These low-profile sneakers are your perfect
                     casual wear companion, Featuring a durable rubber outer sole
                     they'll withstand everything the weather can offer                        
                    </p>
                    <div className="price-div">
                        <span className='price'>$125.00</span>
                        <span className='per'>50%</span>
                    </div>
                    <div className="old-price-div">
                        <span className='old-price'>$250.00</span>
                    </div>

                    <div className="items">
                        <div className="plus-minus">
                            <img className='minus' src="images/icon-minus.svg" alt="" />
                            <p className='count'>0</p>
                            <img className='plus' src="images/icon-plus.svg" alt="" />  
                        </div>   
                        <button className='button'><img className='cart-icon' src="images/icon-cart2.svg" alt="" />Add To Cart</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;