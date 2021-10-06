import React from "react";
import Button from "./Button";

export default function AddContact({ contract, getContacts }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contract.addContactDetails({
        _name: name,
        _phone: phone,
      });
      await getContacts();
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      setPhone("");
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Enter contact name..."
          name="name"
        />
        <input
          type="number"
          onChange={({ target }) => setPhone(target.value)}
          placeholder="Enter contact number..."
          name="phone"
          value={phone}
        />

        <Button loading={loading} name="submit">
          Add Contact
        </Button>
      </fieldset>
    </form>
  );
}
