"use client";
import Modal from "@/components/Modal";
import { useAuth } from "@/context/AuthContext";
import { IUser, ProfileForm } from "@/types/user";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import * as Yup from "yup";

const Page = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  if (!user) {
    return (
      <div className="custom-container justify-center items-center">
        Please log in to view your profile
      </div>
    );
  }

  const initialValues: ProfileForm = {
    username: user?.username,
    email: user?.email,
  };

  const handleSignOut = () => {
    setUser(null);
    router.push("/");
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDeleteAccount = () => {
    if (!user) return null;
    localStorage.removeItem("user");

    setUser(null);

    router.push("/");
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username required")
      .min(6, "Minimum 6 characters"),
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email required."),
  });

  const onSubmit = (
    values: ProfileForm,
    actions: FormikHelpers<ProfileForm>
  ) => {
    const updatedUser: IUser = {
      ...user,
      username: values.username,
      email: values.email,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setUser(updatedUser);
    router.push(`/profile/${user.username}`);

    actions.setSubmitting(false);
  };

  return (
    <main className="custom-container">
      <h1 className="text-4xl font-bold">Profile</h1>
      <hr />
      <Image src={user.profilePic} width={130} height={130} alt="profile-pic" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="relative w-full text-gray-500">
            <FaUser className="absolute bottom-3 left-2" />
            <label>USERNAME</label>
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Username"
              type="username"
              name="username"
            />
            <ErrorMessage
              name="username"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="relative w-full text-gray-500">
            <label>EMAIL</label>
            <IoMail className="absolute bottom-3 left-2" />
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
          <button
            type="submit"
            className="px-12 py-3 bg-[#F15025] inline-block text-white rounded-md mt-4 w-full max-w-[150px]"
          >
            SAVE
          </button>
        </Form>
      </Formik>
      <hr />
      <div className="flex flex-row justify-between">
        <div
          className="flex flex-row justify-between items-center gap-2 cursor-pointer"
          onClick={handleSignOut}
        >
          <PiSignOutBold size={20} />
          <p className="">Sign Out</p>
        </div>
        <button className="font-bold text-[#F15025]" onClick={handleOpenModal}>
          Delete Account
        </button>
      </div>

      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col w-full max-w-[350px] gap-3">
          <h1 className="font-bold text-2xl">
            Are you sure you want to delete your account?
          </h1>
          <p>
            To ensure an optimum user experience, we use cookies to collect some
            user data for advertising and analytics purposes.
          </p>
          <div className="flex flex-row gap-3">
            <button
              className="px-12 py-3 bg-[#F15025] inline-block text-white rounded-md mt-4 w-full max-w-[150px] font-bold"
              onClick={handleDeleteAccount}
            >
              Delete
            </button>
            <button
              onClick={handleCloseModal}
              className="px-12 py-3 bg-white inline-block text-black border-solid border-black border-2 border- rounded-md mt-4 w-full max-w-[150px] font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default Page;
