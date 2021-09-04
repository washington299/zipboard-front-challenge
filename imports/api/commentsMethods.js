import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { CommentsCollection } from "./commentsCollection";

Meteor.methods({
	"comments.insert"({ postId, email, comment }) {
		check(postId, String);
		check(email, String);
		check(comment, String);

		CommentsCollection.insert({
			postId,
			email,
			comment,
			userId: this.userId,
			createdAt: new Date(),
		});
	},
});
