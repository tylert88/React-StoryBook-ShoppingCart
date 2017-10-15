import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

const CartFooter = ({copyright}) => {
  return (<footer className="page-footer light-blue">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Shop ALL THE THINGS</h5>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      &copy; {copyright}
    </div>
  </div>
</footer>
  )
}



export default CartFooter
