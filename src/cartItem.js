import React from "react";
const CartItem=(props)=>{

     

      
            
            const {price,title,quantity}=props.product;
            const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
            return(
                  <div className="cart-item">
                        <div className="left-block">
                              <img style={Styles.image}/>

                        </div>
                        <div className="right-block">
                              <div style={{fontSize:25}}>{title}</div>
                              <div style={{color:"#777"}}>rs {price}</div>
                              <div style={{color:"#777"}}>qt {quantity}</div>
                              <div className="cart-item-actions">
                                    <img 
                                          style={{width:25,height:20,marginRight:10}} 
                                          alt="increase"
                                           className="actions-icons"
                                          src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                          onClick={()=>onIncreaseQuantity(product)} 
                                    />
                                    <img 
                                          style={{width:25,height:20,marginRight:10}} 
                                          alt="decrease" 
                                          className="actions-icons"
                                          src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                                          onClick={()=>onDecreaseQuantity(product)}
                                    />
                                    <img 
                                          style={{width:25,height:20,marginRight:10 }} 
                                          alt="delete" 
                                          className="actions-icons"
                                          src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                                          onClick={()=>onDeleteProduct(product.id)} 
                                    />
                              </div>



                        </div>
                  </div>

            );
      

}
const Styles={
      image:{
            height:110,
            width:110,
            borderRadius:4,
            background:"#ccc"

      }
}
export default CartItem;