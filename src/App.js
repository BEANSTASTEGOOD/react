import React from 'react';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <button id="googleLoginBtn">Login with Google</button>
      <button id="facebookLoginBtn">Login with Facebook</button>
      <button id="microsoftLoginBtn">Login with Microsoft</button>
      <button id="emailLoginBtn">Login with Email</button>
    </div>
  );
}

export default App;
