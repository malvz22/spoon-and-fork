"use client";
import { ContactValues } from "@/types/contact";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import { FaMessage, FaNoteSticky, FaUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import * as Yup from "yup";

const ContactForm = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading Form...</div>;
  }

  const initialValues: ContactValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    subject: Yup.string()
      .required("Subject is required.")
      .min(5, "Subject must be at least 5 characters long"),
    message: Yup.string()
      .required("Message is required. (Min. 10 characters long)")
      .min(10, "Message must be at least 10 characters long")
      .max(500, "Message cannot exceed 500 characters"),
  });

  const onSubmit = (
    values: ContactValues,
    actions: FormikHelpers<ContactValues>
  ) => {
    const submittedMessage: ContactValues = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    console.log(submittedMessage);
    alert("Thank you for submitting! We'll look at your message in no time!");
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col justify-center items-center w-[450px] gap-5">
          <div className="relative w-full text-gray-500">
            <FaUser className="absolute top-3 left-2" />
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Name"
              type="text"
              name="name"
            />
            <ErrorMessage
              name="name"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="relative w-full text-gray-500">
            <IoMail className="absolute top-3 left-2" />
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Email"
              type="text"
              name="email"
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="relative w-full text-gray-500">
            <FaNoteSticky className="absolute top-3 left-2" />
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Subject"
              type="text"
              name="subject"
            />
            <ErrorMessage
              name="subject"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="relative w-full text-gray-500">
            <FaMessage className="absolute top-3 left-2" />
            <Field
              className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
              placeholder="Message"
              type="text"
              as="textarea"
              name="message"
            />
            <ErrorMessage
              name="message"
              component={"div"}
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <button
            type="submit"
            className="px-12 py-3 bg-[#F15025] w-auto inline-block text-white rounded-md mt-4 "
          >
            Send Message
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
