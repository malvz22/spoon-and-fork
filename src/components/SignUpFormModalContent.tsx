import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { SignUpFormValues, Switch } from "@/types/modal";
import { FaLock, FaUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useRouter } from "next/navigation";

const initialValues: SignUpFormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePic: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Confirm your password"),
});

const SignUpFormModalContent: React.FC<Switch> = ({ onSwitch, onClose }) => {
  const router = useRouter();

  const onSubmit = async (
    values: SignUpFormValues,
    actions: FormikHelpers<SignUpFormValues>
  ) => {
    //create user object
    const userData = {
      id: Date.now(),
      username: values.username,
      email: values.email,
      password: values.password,
      profilePic: "Images/default-avatar.jpg",
    };

    //save user data to Local Storage

    localStorage.setItem("user", JSON.stringify(userData));

    //redirect to Home Page

    router.push("/");
    onClose();
    actions.setSubmitting(false);
  };

  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-2xl font-bold mb-8 text-black">SIGN UP</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col justify-center items-center w-[300px] gap-5">
          {/* Username Field */}
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

          {/* Email Field */}
          <div className="relative w-full text-gray-500">
            <IoMail className="absolute top-3 left-2" />
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Email"
              type="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* Password Field */}
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
          {/* Confirm Password Field */}
          <div className="relative w-full text-gray-500">
            <FaLock className="absolute top-3 left-2" />
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <button
            type="submit"
            className="px-12 py-3 bg-[#F15025] w-auto inline-block text-white rounded-md mt-4 "
          >
            Sign Up
          </button>
        </Form>
      </Formik>

      <div className="flex flex-col gap-1 justify-center items-center text-black">
        <p>By creating an account, you agree to our</p>
        <button className="cursor-pointer text-[#F15025]" onClick={onSwitch}>
          Term & Conditions
        </button>
      </div>
    </div>
  );
};

export default SignUpFormModalContent;
