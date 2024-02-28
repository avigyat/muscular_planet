import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../Components/ContextReducer';

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  
  let data = useCart();

  React.useEffect(() => {
      console.log(location.pathname);
  }, [location]);

  const logout = () => {

      localStorage.removeItem('email')
      navigate('/signin')
  }

  const viewCart = (e) => {
    e.preventDefault();
    navigate('/viewCart')
}
  const viewHistory = (e) => {
      e.preventDefault();
      navigate('/orderHistory')
  }
  return (
    
    <div>
         <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-yellow-900">
                <div className="container-fluid">
                    <Link className={`navbar-brand ${location.pathname === "/" ? "active" : ""}`} to="/">Muscular Planet</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {(localStorage.getItem('email') === null || localStorage.getItem('email') === 'null' || localStorage.getItem('email') === 'undefined' || localStorage.getItem('token') === undefined)
                        ? <form className='d-flex topnav-right' >

                            <Link className='btn mx-2 btn-primary' to='/signin'>Login</Link>
                            <Link className='btn mx-2 btn-primary' to='/signUp'>Sign Up</Link>
                        </form>
                        : <form className='d-flex topnav-right' >
                            <button className='btn mx-2 btn-primary' onClick={viewHistory}> Order history
                               
                            </button>
                            <button className='btn mx-2 btn-primary' onClick={viewCart}> Cart
                                <span className="bg-green-100 text-green-800 text-xs font-small me-2 mx-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                                {data.length}    
                                </span>
                            </button>
                            {/* {cartView ? <Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal> : null} */}
                            <button className='btn mx-2 btn-danger' onClick={logout}>Log out</button>
                        </form>}

                </div>

            </nav>
        </div>
    </div>
  )
}

export default Navbar