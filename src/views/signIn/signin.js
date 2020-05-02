import React from 'react';
const SignIn = props => {
   return (
    <>
    <h1>SignIn</h1>
    <p>
     Faça seu login
    </p>
    <p>
        <input id="nome" email placeholder="Seu nome.."></input>
    </p>
    <p>
        <input type="password" placeholder="Sua senha.."></input>
    </p>
   </>
  );
};
export default SignIn;
