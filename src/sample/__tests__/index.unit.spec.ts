import { addContactDetails, deleteContact, getContacts } from "../assembly";
import { context, PersistentMap, VMContext } from "near-sdk-as";
import { Contact, phonebooks } from "../assembly/model";

const contract = "phonebook";

describe("Contacts", () => {
  beforeEach(() => {
    if (phonebooks.contains(context.sender)) {
      phonebooks.delete(context.sender);
    }
    addContactDetails("08076080771", "Melvin");
  });

  it("verifies if contacts if added from addContactDetails() call", () => {
    expect(phonebooks.get(context.sender)).toBeTruthy("The sender key has been created on the map with a new contact");
  });

  it("calls getContacts() and fetches contacts", () => {
    const contacts = getContacts(context.sender) as Contact[];

    expect(contacts[0].name).toStrictEqual("Melvin", "Contact name matches");
    expect(contacts[0].phone).toStrictEqual("08076080771", "Contact phone matches");

  });

  it("deletes contact by calling deleteContact()", () => {
    deleteContact(0);
    expect(phonebooks.get(context.sender)).toStrictEqual([], 'Message at index "0" deleted');
  });
});
