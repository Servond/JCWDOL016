import { Formik, Form, Field, FormikProps } from "formik";
import { toast } from "react-toastify";
import { IUserPayload } from "../../interfaces/user.interface";
import RegisterSchema from "./schema";
import axios from "axios";

function Register() {
  const register = async ({ name, email, password }: IUserPayload) => {
    try {
      await axios.post(
        "https://66fd3bcac3a184a84d19915a.mockapi.io/api/v1/users",
        {
          name,
          email,
          password,
        }
      );

      toast.success("Register Success");
    } catch (err) {
      toast.error((err as Error).message);
    }
  };
  return (
    <div className="border bg-[#add8e6] w-80 mr-auto ml-auto rounded-md">
      <div className="p-10 flex justify-center gap-4">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            register(values);
          }}
        >
          {(props: FormikProps<IUserPayload>) => {
            const { values, errors, touched, handleChange } = props;

            return (
              <Form>
                <div>
                  <label htmlFor="name">Name :</label>
                  <br />
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    values={values.name}
                  />
                  {touched.name && errors.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email">Email :</label>
                  <br />
                  <Field
                    type="text"
                    name="email"
                    onChange={handleChange}
                    values={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password">Password :</label>
                  <br />
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    values={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>
                <button type="submit" className="p-1 border rounded-md">
                  Save
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
