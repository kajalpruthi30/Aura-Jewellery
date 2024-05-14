import React from 'react';

const Modal = ({ closeModel }) => {
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-400 modalContainerBackground bg-opacity-60'>
      <div className='p-6 bg-white modalContainer'style={{width:"42rem",height:"17rem"}}>
        <div className='relative titleClose' style={{left:"19rem",bottom:".5rem"}}>
          <button onClick={() => closeModel(false)}> X </button>
        </div>
        <div className='container mt-4' >
          <h1 className='mb-6 text-3xl '>Call Us</h1>
          <div className='flex flex-col items-start contacts' style={{fontSize:"1.01rem"}}>
            <p className='mb-2'>Singapore: + 65 60280129</p>
            <p className='mb-2'>Malaysia: + 60 (3) 30992852</p>
            <p>Toll Free: 1300 LOVISA (568 472)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;