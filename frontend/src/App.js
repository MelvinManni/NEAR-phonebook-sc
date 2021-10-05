import React from "react";

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [contacts, setContacts] = React.useState([]);
  React.useEffect(() => {
    contract.getContacts(currentUser?.accountId).then(setContacts);
  }, []);

  console.log(contacts);

  return null;
};

export default App;
