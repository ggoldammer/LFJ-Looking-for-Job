import LocalDB, { ObjectID } from 'react-local-mongoose';
 
const searchSchema = {
  name: { type: String, required: 'This field is required', unique: 'That name is already taken' },
  origin: { type: ObjectID, ref: 'Country', required: true }, // reference to Country model
  strength: { type: Number, required: true },
  tastingNotes: { type: String },
  image: { type: String }
};
 
const Search = new LocalDB(searchSchema, 'Search');
 
export default Search
;