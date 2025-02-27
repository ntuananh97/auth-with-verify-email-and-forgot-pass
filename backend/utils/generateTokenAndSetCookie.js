import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
	
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	}); // token includes the user ID and expires in 7 days

	res.cookie("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	return token;
};
