import React, {useEffect,useState} from 'react'
import logo from '../images/techedge.png'
import '../styles/App.css'
import { Tooltip } from '@mui/material';
import ConfirmVoid from './ConfirmVoid';



function Navbar(props) {

    const [opendialogvoid, setOpenDialogVoid] = React.useState(false);
  


    const logostyle = {
        width:'150px',
      }

    const handleClickOpenDialogVoid = () => {
      setOpenDialogVoid(true);
    };

    
   

    const icons={
      margin:'5px',
      color:'#174291'
    }

    return (

    <nav className="navbar navbar-expand-md bg-white fixed-top shadow-lg ">
      <ConfirmVoid voidDocument={props.voidDocument} setOpenDialogVoid={setOpenDialogVoid} opendialogvoid={opendialogvoid}/>
      <div className="container-fluid">
      <a href='https://techedge.co.ke' target="_blank"><img src={logo} style={logostyle}/></a>
        <button className="navbar-toggler bg-white text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3 " style={{marginLeft:'120px'}}>
      
          <li className="nav-item " style={{marginLeft:'20px'}}>
              <Tooltip title='place signature on current page only'>
                <a className="nav-link btn btn-lg btn-primary btn-sm text-white shadow-lg m-1 " aria-current="page" id='singonePage' onClick={props.signonePage} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" ><small > <i className="fas fa-file " aria-hidden="true"></i> Sign on current page</small> </a> 
              </Tooltip>
            </li>
            <li className="nav-item " style={{marginLeft:'20px'}}>
              <Tooltip title='place signature on all pages of the document'>
                <a className="nav-link btn btn-primary btn-sm text-white shadow-lg m-1" aria-current="page" id='allPages' onClick={props.signAllpages} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" ><small ><i className="fas  fa-copy " aria-hidden="true"></i> Sign on all pages</small>  </a>
              </Tooltip>
            </li>
            <li className="nav-item " style={{marginLeft:'20px'}}>
              <Tooltip title='complete signing'>
                <a className="nav-link btn btn-warning  btn-sm shadow-lg m-1  text-dark" id='complete' onClick={props.completeSigning} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" aria-current="page"><small className='mr-2'> <i className="fas fa-pen-nib " aria-hidden="true" ></i> Complete signing</small></a>
              </Tooltip>
            </li>
          </ul>

          <span className="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  p-2" >
              <li className="nav-item  ">
                <Tooltip title='Void the document'>
                  <a className="nav-link btn shadow-lg  btn-danger btn-sm text-white m-1" id='decline' onClick={handleClickOpenDialogVoid} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" aria-current="page"><small className="mr-2"><i className="fas fa-times-circle" aria-hidden="true" ></i> <span className='m-1'>Decline</span>  </small></a>
                </Tooltip>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
    )
}

export default Navbar

