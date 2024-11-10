import { object, string } from "yup";

const Schema = object({
  name: string()
    .min(3, "Name must be 3 characters minimum")
    .required("Required"),
  email: string().email("Invalid format").required("Required"),
  password: string()
    .min(3, "Password must be 3 characters")
    .matches(
      /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
      "Password need to have atleast 1 number and special characters"
    )
    .required("Required"),
});

export default Schema;
