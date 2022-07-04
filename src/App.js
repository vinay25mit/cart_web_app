import React from 'react';
import './App.css';
import Cart from "./Cart";
import CartItem from './cartItem';
import Navbar from './Navbar'
class App extends React.Component {
      constructor()
      {
            super();
            this.state={
                  products:[
                        {
                              price:999,
                              title:"mobile phone",
                              quantity:1,
                              img:"",
                              id:1
                        },
                        {
                              price:99,
                              title:"Watch",
                              quantity:19,
                              img:"",
                              id:2
                        },
                        {
                              price:9999,
                              title:"Laptop",
                              quantity:9,
                              img:"",
                              id:3
                        }
                  ]
            

            }
      }
      handleIncreaseQuantity=(product)=>{
            console.log("hey increase the quantity of product");
            const {products}=this.state;
            const index=products.indexOf(product);
            products[index].quantity+=1;
            this.setState({
                  products:products
            })

      }
      handleDecreaseQuantity=(product)=>{
            console.log("hey decrease",product);
            const {products}=this.state;
            const index=products.indexOf(product);
            if(products[index].quantity>=1)
            {
                  products[index].quantity-=1;
                  this.setState({
                        products:products
                  })
            }
           
            
      }
      handleDeleteProduct=(id)=>{
            const {products}=this.state;
             const items=products.filter((item)=>item.id!==id);
             this.setState({
                  products:items
             })

      }
      getCartCount=()=>{
        const {products}=this.state;
        let count=0;
        products.forEach((product)=>{
          count+=product.quantity;
        })
        return count;
      }



  render()
  {
    const {products}=this.state;
    return (
      
      <div className="App">
        
        
        
        <Navbar count={this.getCartCount()}/>
        <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
        />

    
      </div>
    );
  }
}

export default App;
