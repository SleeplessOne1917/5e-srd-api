const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { NamedAPIResource } = require('./common');

const AbilityBonus = new Schema({
  _id: false,
  ability_score: NamedAPIResource,
  bonus: Number,
});

const LanguageOptions = new Schema({
  _id: false,
  choose: Number,
  from: [NamedAPIResource],
  type: String,
});

const RacialTraitOptions = new Schema({
  _id: false,
  choose: Number,
  from: [NamedAPIResource],
  type: String,
});

const Subrace = new Schema({
  _id: {
    type: String,
    select: false,
  },
  ability_bonuses: [AbilityBonus],
  desc: String,
  index: String,
  language_options: LanguageOptions,
  name: String,
  race: NamedAPIResource,
  racial_trait_options: RacialTraitOptions,
  racial_traits: [NamedAPIResource],
  starting_proficiencies: [NamedAPIResource],
  url: String,
});

module.exports = mongoose.model('Subrace', Subrace, 'subraces');
