import React, {useState} from 'react'
import styles from './navbar.module.css'
import { Link } from "react-router-dom";
import { BsArrowUpRight, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navabar = () => {
    const [state, setState] = useState(false);
  return (
    <>
    <div className={styles.nav_container}>
      {/* <a>{LOGO}</a> */}
      {/* <h3 className={styles.logo}>ViBraNium</h3> */}
      <div className={styles.nav_head}>
        <h6><Link>Start Testnet</Link></h6>
        <h6><Link>Guide <BsArrowUpRight/></Link></h6>
        <h6><Link>Hackaton <BsArrowUpRight /></Link></h6>
      </div>
      <div className={`${styles.slidernv} ${state? styles.slidernv_active :null}`}>
      <RxCross2
        className={styles.close_nav}
        onClick={() => setState(!state)}
      />
        <nav>
          <Link to="">Docs</Link>
          <Link to="">Products</Link>
          <Link to="">FAQ</Link>
          <Link to="">About Vibranium</Link>
        </nav>
        <div className={styles.container}>
          <a href="/buyvfc">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Buy VFC
          </a>
        </div>
        <div className={styles.icons}>
          <Link to="/twitter">
            <BsTwitter />
          </Link>
          <Link to="/twitter">
            <FaDiscord />
          </Link>
        </div>
      </div>

      <div className={styles.toggle_btn} onClick={()=>setState(!state)}>
        <FiMenu />
      </div>
    </div>
  </>
  )
}

export default Navabar
