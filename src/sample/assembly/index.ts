import { context, logging } from "near-sdk-as";
import { Contact, phonebooks } from "./model";

// const  = 'Hello'
// Exported functions will be part of the public interface for your smart contract.
// Feel free to extract behavior to non-exported functions!
export function getContacts(accountId: string): Contact[] | null {
  return phonebooks.get(accountId);
}

// This takes in 2 values, a phone number and a name
export function addContactDetails(_phone: string, _name: string): void {
  let contacts: Contact[] = [];
  const sender = context.sender;

  // Check is a key for the current sender already exists
  if (phonebooks.contains(sender)) {
    // Assign the already existing contacts in their phone book to contacts variable
    contacts = phonebooks.get(sender) as Contact[];
  }

  const contact = new Contact(_name, _phone);
  // We push the value of the new contact to the contacts array and set the value  in phonebook
  contacts !== null && contacts.push(contact);
  phonebooks.set(sender, contacts);

  logging.log("Contact " + contact.name + " with phone number " + contact.phone + " successfully added");
}

export function deleteContact(contactIndex: i32): void {
  // assign the contacts array of current acoount
  let contacts = phonebooks.get(context.sender);
  if (contacts != null) {
    const newContacts: Contact[] = [];
    for (let index = 0; index < contacts.length; index++) {
      if (index != contactIndex) {
        newContacts.push(contacts[index]);
      }
    }
    // set the value of the account phonebook to the new array
    // phonebooks.delete(context.sender);
    phonebooks.set(context.sender, newContacts);
    logging.log("Contact " + contacts[contactIndex].name + " successfully deleted");
  }
}
