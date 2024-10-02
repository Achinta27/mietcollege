import React from "react";
import FooterComponent from "../component/FooterComponent";
import SubBanner from "../component/SubBanner";
import MainPageTemplate from "../template/MainPageTemplate";

const ContactUs = () => {
  const submitMail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const json = JSON.stringify(data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (response.status === 200) {
        console.log("Form successfully submitted:", result);
        alert("Your form has been submitted successfully!");
      } else {
        console.log("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      e.target.reset();
    }
  };

  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Contact Us"}
      />
      <div className="xl:p-16 sm:p-4 lg:p-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <span>
            <img
              src="/images/admisionenquiryimg.jpg"
              alt="Admission Inquiry"
              className="md:w-[40rem] md:h-[45.5rem] object-cover hidden md:inline-block"
            />
          </span>
          <div className="p-4 bg-[#DC143C] rounded-md flex-1">
            <div className="flex flex-col justify-between gap-5">
              <span className="flex justify-center items-center">
                <img
                  src="/images/klip.svg"
                  alt="Klip Icon"
                  className="h-[4rem]"
                />
              </span>
              <span className="flex justify-center text-center font-semibold text-white sm:text-lg lg:text-2xl xl:text-3xl">
                Quick Enquiry For Admission
              </span>
              <div className="flex text-white text-xl flex-col gap-4">
                <form
                  onSubmit={submitMail}
                  className="flex flex-col font-semibold p-2 gap-4"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value={import.meta.env.VITE_PUBLIC_WEB3ACCESSKEY}
                  />
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="p-3 h-[4rem] bg-white rounded-sm text-[#DC143C] text-lg"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="p-3 h-[4rem] bg-white rounded-sm text-[#DC143C] text-lg"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="enquiry">Interest Course</label>
                    <select
                      name="enquiry"
                      id="enquiry"
                      required
                      className="p-3 h-[4rem] bg-white rounded-sm text-[#DC143C] text-lg"
                    >
                      <option value="" disabled selected>
                        Select Interested Course
                      </option>
                      <option value="B.tech">B.Tech</option>
                      <option value="Diploma">Diploma</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea
                      name="message"
                      id="message"
                      className="p-3 h-[4rem] bg-white rounded-sm text-[#DC143C] text-lg"
                    />
                  </div>

                  <input
                    type="hidden"
                    name="redirect"
                    value="https://web3forms.com/success"
                  />

                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className="w-full h-[4rem] bg-white text-[#DC143C] text-lg font-bold rounded-sm"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default ContactUs;
