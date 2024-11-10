import { object, string } from "yup";

const Schema = object({
  email: string().email("Invalid format").required("Required"),
});

export default Schema;
