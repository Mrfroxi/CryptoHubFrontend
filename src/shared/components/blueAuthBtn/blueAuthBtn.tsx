import React from 'react';

const BlueAuthBtn = ({ signUpBool , handlerSendAuth }: any) => {
  return (
    <div className="flex justify-center mb-4">
      <button onClick={handlerSendAuth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4  min-w-min border rounded-lg w-full">
        {signUpBool ? 'Create Account' : 'Sign In'}
      </button>
    </div>
  );
};

export default BlueAuthBtn;