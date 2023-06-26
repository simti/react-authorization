export const SignupFormValidationRules = {
  username: {
    required: {
      value: true,
      message: "username is required",
    },
  },
  email: {
    required: {
      value: true,
      message: "email is required",
    },
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Invalid email format",
    },
    validate: (fieldValue: string) => {
      return (
        fieldValue != "admin@example.com" || "This email is already picked"
      );
    },
  },
  channel: {
    required: {
      value: true,
      message: "channel is required",
    },
  },
};
