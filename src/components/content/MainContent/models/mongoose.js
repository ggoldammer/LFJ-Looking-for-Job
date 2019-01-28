import LocalDB, { ObjectID } from 'react-local-mongoose';
 
const searchSchema = {
  title: { type: String, required: true },
  employer: { type: ObjectID, ref: 'Country', required: true }, // reference to Country model
  link: { type: String, required: true }
};
 
const Search = new LocalDB(searchSchema, 'Search');
 
export default Search;