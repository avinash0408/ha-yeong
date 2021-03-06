import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';

const Sidebar=({func}) => {
    const [close,setClose]=useState(false);

    const handleClose =() =>{
        setClose(true);
        func(close);

    }
    return (
        <nav className="side_drawer">
             <i className='fa fa-times fa-2x clsbtn' onClick={handleClose}></i>
             <ul className=''>
                <div className="group">
                <HomeIcon />
                <li className="nav-ite"><Link to='home' style={{ textDecoration: 'none' ,color:'#adddce',cursor:'default'}} onClick={handleClose}>Home</Link></li>
                </div>
               <div className="group">
                   <CreateIcon />
               <li className="nav-ite"><Link  to='blog' style={{ textDecoration: 'none',color: '#adddce',cursor:'default' }} onClick={handleClose}>Blog</Link></li>
               </div>
                <div className="group">
                    <CodeIcon />
                <li className="nav-ite"><Link  to='projects' style={{ textDecoration: 'none',color: '#adddce',cursor:'default' }}onClick={handleClose}>Projects</Link></li>
                </div>
                    <div className="group">
                        <DescriptionIcon />
                    <li className="nav-ite"><Link  to='resume' style={{ textDecoration: 'none',color: '#adddce',cursor:'default' }}onClick={handleClose}>Resume</Link></li>
                    </div>
               
            </ul>
        </nav>
    )
}

export default Sidebar
