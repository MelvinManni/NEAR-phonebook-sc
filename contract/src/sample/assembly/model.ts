import { PersistentMap } from "near-sdk-as";
// import uuid from "as-uuid";

/**
 * Exporting a new class COntact so it can be used outside of this file.
 */
@nearBindgen
export class Contact {
  constructor(public name: string, public phone: string) {}
}

// math.hash32(Date.now().toString() + name + phone.toString()).toString();
/**
 * collections.map is a persistent collection. It accepts a key value pair.
 */
export const phonebooks = new PersistentMap<string, Contact[]>("n");
