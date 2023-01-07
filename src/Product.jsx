import { useState } from "react";

const Product = () => { 

    const [quantity, setQuantity] = useState(0) 

    const handleClick = () => {
        setQuantity(quantity +1)
    }

    const change = () => {
        setQuantity(quantity -1)
    }


    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img id="mainProduct" src="/images/image-product-1.jpg" className="rounded " alt="" /><br />
                    
                     <img src="/images/image-product-1-thumbnail.jpg" className="other rounded" alt=""  />
                     <img src="/images/image-product-2-thumbnail.jpg" className="other rounded" alt=""  />
                     <img src="/images/image-product-3-thumbnail.jpg" className="other rounded" alt=""  />
                     <img src="/images/image-product-4-thumbnail.jpg" className="other rounded" alt=""  />
                    
                </div>
                <div id="align" className="col-lg-6 col-md-6">
                    <p id="name"><strong>SNEAKER COMPANY</strong></p>
                    <h1>
                        Fall limited Edition<br />
                        Sneakers
                    </h1> 
                    <p id="copy">
                        These low-profile sneakers are your perfect casual wear <br />
                        companion.Featuring a durable outer sole, they'll <br />
                        withstand everything the weather can offer. <br />
                    </p>
                    <h3><strong>$125.00</strong><span className="percent rounded">50%</span><span className="d-none col-sm">$250.00</span></h3>
                    <p>$250.00</p>
                    <span id="increment">
                    <img id="minus" src="/images/icon-minus.svg" alt="" onClick={change}/>

                    <span  id="quantity">{ quantity }</span>
                    <img id="plus" className="number" src="/images/icon-plus.svg"  alt="" onClick={handleClick}/>
                    </span>
                    <button id="color" className="btn btn-lg"><span id="action">Add to cart</span></button>
                </div>
            </div>     
        </div>
        
     );
}
 
export default Product;