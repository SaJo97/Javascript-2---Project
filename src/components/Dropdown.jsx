import { useState } from "react"
import ReactDOM from "react-dom"
import ShoppingCart from "./ShoppingCart"

const Dropdown = ({children}) => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>

    { isOpen && <DropdownBg setIsOpen={setIsOpen}/>}

      <button className="cart-btn" onClick={() => setIsOpen(state => !state)}>
        {children}
        </button>

        {
          isOpen && (
            <div className="isOpen-box">
              <div className="shop-cart">
                <ShoppingCart setIsOpen={setIsOpen}/>
              </div>
            </div>
          )
        }
    </>
  )
}
export default Dropdown

const DropdownBg= ({setIsOpen}) => {
  return ReactDOM.createPortal((
    <div className="dropdown-box" onClick={() => setIsOpen(false)}></div>
  ), document.querySelector('#modal'))
}