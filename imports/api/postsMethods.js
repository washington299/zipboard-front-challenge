import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { PostsCollection } from "./postsCollection";

Meteor.methods({
	"posts.insert"({ email, text }) {
		check(email, String);
		check(text, String);

		PostsCollection.insert({
			email,
			text,
			userId: this.userId,
			createdAt: new Date(),
		});
	},
});
