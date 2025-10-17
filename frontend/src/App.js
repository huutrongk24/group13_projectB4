import React, { useState } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  const [refresh, setRefresh] = useState(0);

  const handleUserAdded = () => setRefresh(prev => prev + 1);

  return (
    <div className="App">
      <AddUser onUserAdded={handleUserAdded} />
      <UserList key={refresh} />
    </div>
  );
}

export default App;
