import User from "../models/userSchema.mjs";

export default async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("admin");

    if (!user.admin) {
      return res.status(401).json({errors: { msg: "Admin Authentication Denied" }});
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errors: [{ errors: [{ msg: "Auth Denied" }] }] });
  }
};
