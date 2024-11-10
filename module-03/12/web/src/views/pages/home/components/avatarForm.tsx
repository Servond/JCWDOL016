"use client";
import { Formik, Form, FormikProps } from "formik";
import axiosInstance from "@/lib/axios";
import Schema from "./schema";
import ErrorHandler from "@/utils/error-handler";
import Swal from "sweetalert2";

interface IAvatar {
  avatar: string;
}

export default function AvatarForm() {
  const updateAvatar = async (values: IAvatar) => {
    try {
      const formData = new FormData();
      formData.append("file", values.avatar);
      const { data } = await axiosInstance.patch("/auth/avatar", formData);

      Swal.fire({
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err) {
      ErrorHandler(err);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          avatar: "",
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          updateAvatar(values);
        }}
      >
        {(props: FormikProps<IAvatar>) => {
          const { errors, touched, setFieldValue } = props;
          return (
            <Form>
              <div>
                <label
                  htmlFor="avatar"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Avatar :
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="file"
                  name="avatar"
                  onChange={(e) =>
                    setFieldValue(
                      "avatar",
                      e.currentTarget.files ? e.currentTarget.files[0] : null
                    )
                  }
                />
                {touched.avatar && errors.avatar ? (
                  <div className="text-red-600">{errors.avatar}</div>
                ) : null}
              </div>
              <button
                className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                type="submit"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
