import { Formik, Form, FormikProps } from "formik";
import IUser from "../../interfaces/user.interface";
import axios from "axios";
import Schema from "./schema";

function Register() {
  const postUser = async (params: IUser) => {
    try {
      await axios.post(
        "https://66fd3bcac3a184a84d19915a.mockapi.io/api/v1/users",
        {
          firstName: params.firstName,
          lastName: params.lastName,
          email: params.email,
          password: params.password,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={Schema}
          onSubmit={(values) => {
            console.log(values);
            postUser(values);
          }}
        >
          {(props: FormikProps<IUser>) => {
            const { values, errors, touched, handleChange } = props;

            return (
              <Form>
                <div>
                  <label htmlFor="firstName">First Name :</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="lastName">Last Name :</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email">Email :</label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password">Password :</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>
                <button type="submit">Save</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
