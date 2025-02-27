import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		lastLogin: {
			type: Date,
			default: Date.now,
		},
		isVerified: { // to check if the user has verified their email
			type: Boolean,
			default: false,
		},
		resetPasswordToken: String, // to store the token that will be sent to the user's email for resetting the password
		resetPasswordExpiresAt: Date, // to store the expiry time of the reset password token
		verificationToken: String, // to store the token that will be sent to the user's email for verifying the email
		verificationTokenExpiresAt: Date, // to store the expiry time of the verification token
	},
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);
