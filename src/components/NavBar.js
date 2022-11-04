import {FaCartPlus} from 'react-icons/fa'
import {useGlobalContext} from '../context'
import { useRef ,useEffect} from 'react';

const NavBar = () => {
  const {state}=useGlobalContext()

  return (
    <nav >
      <header className='nav-header'>
      <h2 className="title">Use Reducer</h2>
        <div className="item__counts">
          <FaCartPlus/>
          <div className="amount__total">
            {state.count}
          </div>
        </div>
      </header>
    </nav>
  )
}

export default NavBar
