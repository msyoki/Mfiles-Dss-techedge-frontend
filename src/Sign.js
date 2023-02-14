import React ,{useEffect, useState}from 'react'
import Logo from "./images/techedge.png"
import SignedImage from "./images/Signed.png"
import VoidedImage from "./images/Voided.png"
import './styles/App.css';
import { useParams } from "react-router-dom";

import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar';
import Previewer from './components/Previewer';

import axios from 'axios'

function Sign() {

    let { fileid } = useParams();
    let [fileurl,setFileUrl]=useState('')
    let [loading,setLoading]=useState(true)
    let [user,setUser]=useState(null)



    let [signed,setSigned]=useState(false)
    let [voided,setVoided]=useState(false)


    let [singlepage,setSinglepage]=useState(false)
    let [multipage,setMultipage]=useState(false)
 

    let readytToSign=()=>{
        if(singlepage){
          document.getElementById('singonePage').className="nav-link btn btn-sm btn-success text-white shadow-lg m-1 p-2";
          document.getElementById('allPages').className="nav-link btn btn-primary btn-sm text-white  shadow-lg m-1  p-2";
        }
        else if(multipage){
          document.getElementById('singonePage').className="nav-link btn btn-primary btn-sm text-white  shadow-lg m-1  p-2";
          document.getElementById('allPages').className="nav-link btn btn-success btn-sm text-white shadow-lg m-1 p-2";
        }
        document.getElementById('complete').style.display="block";
   
      }
  
      let checkSigning=()=>{
        console.log(signed)
        console.log(voided)
        document.getElementById('singonePage').style.display="none";
        document.getElementById('allPages').style.display="none";
      
        if(signed){
        document.getElementById('signeddiv').style.display="block";
        document.getElementById('redirectdiv').style.display="none";
        }
        if(voided){
        document.getElementById('voideddiv').style.display="block";
        document.getElementById('redirectdiv').style.display="none";
        }
          
         
  
      }
  
      let voidDocument=(e)=>{
        var pdfViewer = document.getElementById('previewer2').ej2_instances[0];
        pdfViewer.serverActionSettings.download = "SaveDocument2";
        pdfViewer.download();
        pdfViewer.serverActionSettings.download = "Download";
        setVoided(true)

      }
      
      
      let signAllpages=(e)=>{
        var viewer = document.getElementById('previewer2').ej2_instances[0];
        viewer.annotationModule.setAnnotationMode('HandWrittenSignature');
        setMultipage(true)
        readytToSign() 
      }
  
  
      let signonePage=(e)=>{
        var viewer = document.getElementById('previewer2').ej2_instances[0];
        viewer.annotationModule.setAnnotationMode('HandWrittenSignature');
       
        setSinglepage(true)
        readytToSign()
      }
  
      let completeSigning= (e)=>{
        document.getElementById('decline').style.display="none"
        setSigned(true)
        var pdfViewer = document.getElementById('previewer2').ej2_instances[0];
        if(singlepage){
          pdfViewer.serverActionSettings.download = "SaveDocument";
          pdfViewer.download();
          pdfViewer.serverActionSettings.download = "Download";
        }
        else if(multipage){
          pdfViewer.serverActionSettings.download = "SaveDocument1";
          pdfViewer.download();
          pdfViewer.serverActionSettings.download = "Download";
        }
        
     
      }

      let getFileGuid=(fileid)=>{
        var data = JSON.stringify({
            "objectID": fileid
        });

        var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://mfilesdssapi.techedge.dev/api/Values/Create',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            setFileUrl(response.data)
            console.log(response.data)
            setLoading(false)
        })
        .catch(function (error) {
        console.log(error);
        setLoading(false)
        });

      }




    const logostyle = {
      width:"80px"
    }
    const logostyle1 = {
        width:"300px"
    }

    useEffect(()=>{
        getFileGuid(fileid)
    }, [])

   
    return (
    <>   
        {/* {loading?(
            <>
                <Loading/>
            </>
        ):(
            <> */}
                <div className='App ' id='redirectdiv'>
                    <Navbar voidDocument={voidDocument} signAllpages={signAllpages} completeSigning={completeSigning} signonePage={signonePage} fileurl={fileurl } />
                    <Previewer  fileurl={fileurl} checkSigning={checkSigning} setLoading={setLoading} voided={voided} signed={signed}/>   
                </div>
                <div className='App' id='signeddiv'>
                    <div className='App-header'>
                        <div className='row  p-4 container-fluid'>
                            <div className='col-md-9 col-lg-6 col-xl-4'></div>
                            <div className='col-md-9 col-lg-6 col-xl-4 text-center'>
                                <div className='shadow-lg text-dark bg-white text-white mt-5'>
                                <img src={Logo} className="img-fluid mt-5 mb-2" alt="logo" style={logostyle1}/>
                                <h6 className='mb-3 text-muted m-4 '> Digital Signature Service</h6>
                                <p>A copy will be shared on email once allparties complete signing</p>
                                <div className='p-5 text-dark bg-primary text-white mt-4'>
                                <img src={SignedImage} className="img-fluid mb-3" alt="logo" style={logostyle}/>
                                <p>Document signed successfully</p>
                                </div>
                                    
                                </div>
                            </div>
                            <div className='col-md-9 col-lg-6 col-xl-4'></div>
                        </div>
                    </div>
                </div>
                <div className='App' id='voideddiv'>
                    <div className='App-header '>
                    <div className='row  p-4 container-fluid'>
                            <div className='col-md-9 col-lg-6 col-xl-4'></div>
                            <div className='col-md-9 col-lg-6 col-xl-4 text-center'>
                                <div className='shadow-lg text-dark bg-white text-white mt-5'>
                                <img src={Logo} className="img-fluid mt-5 mb-2" alt="logo" style={logostyle1}/>
                                <h6 className='mb-3 text-muted m-4 '> Digital Signature Service</h6>
                                <div className='p-5 text-dark bg-primary text-white mt-4'>
                                    <img src={VoidedImage} className="img-fluid mb-3" alt="logo" style={logostyle} voided={voided}/>
                                    <p>Document Voided successfully</p>
                                    
                                </div>
                                    
                                </div>
                            </div>
                            <div className='col-md-9 col-lg-6 col-xl-4'></div>
                        </div>
                
                    </div>
                </div>
            {/* </>
        )}   
      */}
    </>

  )
}

export default Sign