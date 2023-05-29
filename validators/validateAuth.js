const { check } = require("express-validator");
const { validateResult } = require("../helpers/validations.helper.js");

const validateLogin = [
  check("email").exists().withMessage("Email is needed to Login"),

  check("password").exists().withMessage("Password is needed to Login"),

  (request, response, next) => {
    validateResult(request, response, next);
  },
];

const validateSignup = [
  check("email")
    .exists()
    .isEmail()
    .withMessage("Please enter a valid email address"),

  check("password")
    .exists()
    .not()
    .isEmpty()
    .withMessage("A password is needed to Signup")
    .isString()
    .isLength({ min: 8 })
    .matches(/^(?=.*\d)(?=.*[A-Z])/)
    .withMessage(
      "The password must be at least 6 characters long, contain one number and one uppercase letter"
    ),

  check("name")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(/^[^0-9]*$/)
    .withMessage("The name must not contain numbers"),

  check("phone")
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .matches(/^\+?\d{8,}$/)
    .withMessage("Please enter a valid phone number"),

  check("birthDate")
    .exists()
    .not()
    .isEmpty()
    .isString(),

  check("occupation")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(/^[^0-9]*$/)
    .withMessage("The occuptation must not contain numbers"),
  
  check("NSE")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(/^[^0-9]*$/)
    .withMessage("The diagnosis must not contain numbers"),
  
  check("anxiety")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(/^[^0-9]*$/)
    .withMessage("The diagnosis must not contain numbers"),

    check("depresion")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(/^[^0-9]*$/)
    .withMessage("The diagnosis must not contain numbers"),

    check("suicide")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(/^[^0-9]*$/)
    .withMessage("The diagnosis must not contain numbers"),

    check("treatment")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(/^[^0-9]*$/)
    .withMessage("The diagnosis must not contain numbers"),

  (request, response, next) => {
    validateResult(request, response, next);
  },
];

module.exports = {
  validateLogin,
  validateSignup,
};
