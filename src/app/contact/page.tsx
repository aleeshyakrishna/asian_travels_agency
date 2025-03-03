"use client";

import { FormikHelpers, useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import HeroSection from "./_components/HeroSection";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("Name is required"),
      email: Yup.string()
        .trim()
        .matches(
          /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email address"
        )
        .required("Email is required"),
      phone: Yup.string()
        .trim()
        .matches(/^\+?[0-9]+ ?[0-9]+$/, "Invalid number")
        .required("Phone number is required"),
      message: Yup.string().trim().required("Message is required"),
    }),

    onSubmit: async (
      values,
      { setSubmitting, resetForm }: FormikHelpers<FormValues>
    ) => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }
        toast.success(
          "Thank you for contacting us. Our team will get in touch with you soon"
        );
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Failed to submit form. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <main className="relative ">
        <HeroSection />

        <div className="container grid h-auto grid-cols-1 items-stretch gap-6 py-12 md:min-h-[450px] md:grid-cols-2 md:pb-0 lg:min-h-[440px] xl:min-h-[450px]">
          <div>
            <div className="flex h-1/2 flex-col justify-center space-y-1">
              <p className="text-[20px] font-normal leading-normal text-black md:text-[24px] lg:text-[28px] xl:text-[32px]">
                Get in touch with us
              </p>
              <p className="gradient-text w-max text-[20px] font-bold leading-normal md:text-[24px] lg:text-[28px] xl:text-[32px]">
                We'd love to hear from you
              </p>
            </div>
          </div>
          <div className="h-full w-full md:relative">
            <div className="h-auto w-full bg-[#F9F9F9] p-6 md:absolute md:-top-32 md:right-0">
              <div className="space-y-2">
                <p className="text-[28px] font-normal leading-none text-black md:text-[32px] lg:text-[36px] xl:text-[40px]">
                  Contact Us
                </p>
                <p className="gradient-text h-max w-max text-[28px] font-bold leading-normal md:text-[32px] lg:text-[36px] xl:text-[40px]">
                  Let's Connect
                </p>
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-4 pt-8">
                {/* Name Input */}
                <div>
                  <input
                    className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="pt-1 text-xs text-red-500">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>

                {/* Email Input */}
                <div>
                  <input
                    className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="pt-1 text-xs text-red-500">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none"
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="pt-1 text-xs text-red-500">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>

                {/* Message Input */}
                <div>
                  <input
                    className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none"
                    id="message"
                    type="text"
                    placeholder="Message"
                    {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="pt-1 text-xs text-red-500">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className={`group inline-flex items-center justify-center gap-x-2 rounded-[99px] border border-[#777] px-6 py-2 text-[14px] font-[400] text-black transition-all duration-300`}
                  >
                    {formik.isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
