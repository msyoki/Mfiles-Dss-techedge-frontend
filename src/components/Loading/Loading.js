import React from "react";
import loading from "../../images/loading.svg";
import '../../styles/Loading.css'

const Loading = () => (
    <div className='loading'>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

        <div className=' mt-5'>
          <div className="spinner text-white">
            <img src={loading} alt="Loading" width='200px' margin='50%'/>
          </div>
        </div>
    </div>
  
);

export default Loading;