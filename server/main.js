import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

const SEED_EMAIL = "washingtoncampos9@gmail.com";
const SEED_PASSWORD = "123";

Meteor.startup(() => {
  if (!Accounts.findUserByEmail(SEED_EMAIL)) {
    Accounts.createUser({ email: SEED_EMAIL, password: SEED_PASSWORD });
  }
});
