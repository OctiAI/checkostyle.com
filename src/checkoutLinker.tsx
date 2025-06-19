import React from 'react';
import CheckoutPage from './components/checkout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


function App() {
  return <CheckoutPage />;
}

export default App;