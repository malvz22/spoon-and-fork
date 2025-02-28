import { useAuth } from "@/context/AuthContext";
import { LoginFormValues, Switch } from "@/types/modal";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { FaLock, FaUser } from "react-icons/fa6";
import * as Yup from "yup";

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormModalContent: React.FC<Switch> = ({ onSwitch }) => {
  const router = useRouter();
  const { setUser } = useAuth();

  const onSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("User not found. Please register first.");
      actions.setSubmitting(false);
      return;
    }

    const user = JSON.parse(storedUser);

    if (
      values.username === user.username &&
      values.password === user.password
    ) {
      setUser(user);
      router.push("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-2xl font-bold mb-8 text-black">LOGIN</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col justify-center items-center w-[300px] gap-5">
          <div className="relative w-full text-gray-500">
            <FaUser className="absolute top-3 left-2" />
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Username"
              type="text"
              name="username"
            />
            <ErrorMessage
              name="username"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="relative w-full text-gray-500">
            <FaLock className="absolute top-3 left-2" />
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Password"
              type="password"
              name="password"
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            className="px-12 py-3 bg-[#F15025] w-auto inline-block text-white rounded-md mt-4 "
          >
            Login
          </button>
        </Form>
      </Formik>

      <div className="flex gap-2 justify-center items-center text-black">
        <p>Don&apos;t have an account?</p>
        <button className="cursor-pointer text-[#F15025]" onClick={onSwitch}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginFormModalContent;
