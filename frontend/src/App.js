import React from "react";
import styled from "styled-components";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import Login from "./components/Login";

const Container = styled.div`
  max-width: 996px;
  padding: 0px 20px;
  margin: auto;
`;

const ContactWrapper = styled.div`
  padding: 0 40px;
  margin-top: 40px;
  text-align: center;
`;

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      getContacts();
    }
    // eslint-disable-next-line
  }, [currentUser?.accountId]);

  const getContacts = async () => {
    setLoading(true);
    await contract.getContacts({ accountId: currentUser?.accountId }).then(setContacts);
    setLoading(false);
  };

  return (
    <Container>
      <Header
        signOut={() => {
          wallet.signOut();
          window.location.reload();
        }}
        loggedIn={currentUser}
      />

      {!currentUser && (
        <Login
          onClick={() => {
            wallet.requestSignIn(nearConfig.contractName, "phonebook");
          }}
        />
      )}

      {currentUser && (
        <>
          <AddContact contract={contract} getContacts={getContacts} />

          <ContactWrapper>
            {loading ? (
              "Loading..."
            ) : (
              <>
                {" "}
                {contacts.length < 1 ? (
                  <>
                    {" "}
                    <p>Oops, so empty🙁!</p>
                    <p>Add a new contact!</p>{" "}
                  </>
                ) : (
                  contacts.map((contact, index) => (
                    <ContactCard
                      key={index.toString()}
                      name={contact.name}
                      phone={contact.phone}
                      index={index}
                      contract={contract}
                      getContacts={getContacts}
                    />
                  ))
                )}
              </>
            )}
          </ContactWrapper>
        </>
      )}
    </Container>
  );
};

export default App;
