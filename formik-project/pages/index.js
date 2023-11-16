import { Inter } from "next/font/google";
import { useState } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const inter = Inter({ subsets: ["latin"] });
const initialState = {
  name: "",
  email: "",
  password: "",
};

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter valid email"),
  password: Yup.string().required("You need to provide a password"),
});

export default function Home() {
  const [alert, setAlert] = useState("");

  const handleOnSubmit = async (values) => {
    const newUserVal = { id: 3, ...values };
    try {
      await axios.post("http://localhost:9000/users", newUserVal);
      setAlert("User created! Redirecting...");
    } catch (error) {
      setAlert("An error occured, please try again ");
      console.log(error.message);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col bg-gray-200 items-center justify-between p-24 ${inter.className}`}
    >
      <section className="m-auto bg-white border rounded-md shadow-md">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register new account
            </h2>
          </div>
          {alert && <h1 className="text-red-500">{alert}</h1>}

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* *------------------form başlangıç--------------------* */}
            <Formik
              initialValues={initialState}
              onSubmit={(values) => handleOnSubmit(values)}
              validateOnBlur={false}
              validateOnChange={true}
              validationSchema={registerSchema}
            >
              {(props) => (
                <Form className="space-y-6">
                  {/* *---------------name---------------* */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  {/* *--------------email----------------* */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {props.touched.email && (
                        <div className="text-red-800">{props.errors.email}</div>
                      )}
                    </div>
                  </div>

                  {/* *--------------------password-------------* */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={props.values.password}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            {/* *------------------form bitiş-------------------* */}
          </div>
        </div>
      </section>
    </main>
  );
}
