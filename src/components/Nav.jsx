import React,{useState} from 'react'
// import Backdrop from '@material-ui/core/Backdrop';
import './nav.css';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from './Backdrop'
import Sidebar from './Sidebar'
function Nav() {
    const [click,setClick]=useState(false);
    const clickHandler =() =>{
        setClick(!click)
    }
    const rec_handle=(index)=>{
        setClick(index);
    }
    let sidebar;
    let backdrop;
    if(click){
        sidebar=<Sidebar func={rec_handle} />
        backdrop=<Backdrop func={rec_handle} />
    }
    return (
        <div className="nav">
            <div className="nav-logo">HA</div>
            <div className="nav-end">
                <div className="spacer"></div>
            <div className="toggler-icon" onClick={clickHandler}>
                <i className='fa fa-bars fa-2x' ></i>
            </div>
            <ul className={click ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item"><i class="fa fa-home"></i><Link to='home' style={{ textDecoration: 'none' ,color:'#adddce'}} >Home</Link></li>
                <li className="nav-item"> <i class="fa fa-pencil-alt"></i><Link  to='blog' style={{ textDecoration: 'none',color: '#adddce' }} >Blog</Link></li>
                <li className="nav-item"> <i class="fa fa-code-branch"></i><Link  to='projects' style={{ textDecoration: 'none',color: '#adddce' }}>Projects</Link></li>
                <li className="nav-item"> <i class="fa fa-file-pdf"></i><Link  to='resume' style={{ textDecoration: 'none',color: '#adddce' }}>Resume</Link></li>
            </ul>
            
            </div>
            {sidebar}
            {backdrop}
        </div>
    )
}

export default Nav
