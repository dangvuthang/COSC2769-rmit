const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    validate: {
      validator(input) {
        return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
          input
        );
      },
      message: "Invalid email input. Please try again !!!",
    },
    unique: true,
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dybygufkr/image/upload/c_thumb,w_200,g_face/v1593000869/avatar_q2ysxd.jpg",
  },
  role: {
    type: String,
    enum: {
      values: ["user", "expert"],
      message: "Role must be user, or expert",
    },
    default: "user",
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    minlength: [6, "Password must at least have 6 characters"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator(input) {
        return input === this.password;
      },
      message: "Confirm password does not match with a given password",
    },
  },
  ratingsAverage: {
    type: Number,
    default: 5.0,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
});

userSchema.pre("save", function (next) {
  // Reset some fields
  if (this.isModified("password")) {
    this.passwordConfirm = undefined;
  }
  if (this.role === "user") {
    this.ratingsQuantity = undefined;
    this.ratingsAverage = undefined;
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
