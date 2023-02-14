import React from "react";
import loading from "../../images/loading.svg";

const LoadingMini = () => (
    <div className='App'>
        <div className='bg-white mt-4 text-center'>
          <div className="spinner ">
          <br/>
            <img src={loading} alt="Loading" width='150px' margin='50%'/>
            <p className="m-2 " style={{fontSize:'14px'}}>Preparing for signing ...</p>
          </div>
        </div>
    </div>
  
);

export default LoadingMini;