import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { check } from "meteor/check";

Meteor.methods({
	"users.insert"({ username, email, password }) {
		check(username, String);
		check(email, String);
		check(password, String);

		if (Accounts.findUserByUsername(username)) return "Username already exists";
		if (Accounts.findUserByEmail(email)) return "E-mail already exists";

		Accounts.createUser({ username, email, password, createdAt: new Date() });
	},
});
