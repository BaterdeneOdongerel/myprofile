import React from 'react';
import BaseLayout from './components/BaseLayout';

function App() {
  React.useEffect(() => {
      document.title = "Baterdene Odongerel"
  })
  return <BaseLayout />;
}

export default App;
