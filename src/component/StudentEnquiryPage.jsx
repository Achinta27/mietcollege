import React, { useState } from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "./SubBanner";
import FooterComponent from "./FooterComponent";

const StudentEnquiryPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  function submitMail(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        const jsonResponse = await response.json();
        if (response.status === 200) {
          window.location.href = "https://web3forms.com/success"; // Redirect to success page
        } else {
          setError("Submission failed. Please try again.");
          console.log(response);
        }
      })
      .catch((error) => {
        setError("Network error. Please try again.");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        e.target.reset();
      });
  }

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value); // Update selected course
  };

  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Admission 2024"}
      />
      <div className="xl:p-16 sm:p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <span>
            <img
              src="/images/admisionenquiryimg.jpg"
              alt="Admission Enquiry"
              className="md:w-[40rem] md:h-[45.5rem] object-cover hidden md:inline-block"
            />
          </span>
          <div className="p-4 bg-[#DC143C] rounded-md flex-1">
            <div className="flex flex-col justify-between gap-5">
              <span className="flex justify-center items-center">
                <img src="/images/klip.svg" alt="Klip" className="h-[4rem]" />
              </span>
              <span className="flex justify-center sm:text-lg lg:text-2xl xl:text-3xl text-center font-semibold text-white items-center">
                Quick Enquiry For Admission
              </span>
              <div className="flex text-white text-xl flex-col md:gap-2 sm:gap-2 lg:gap-4 flex-1">
                <form
                  onSubmit={submitMail}
                  className="flex flex-col font-semibold p-2 gap-4 justify-between flex-1"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value={import.meta.env.VITE_PUBLIC_WEB3ACCESSKEY}
                  />
                  <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span>Interest Course</span>
                    <select
                      name="enquiry"
                      required
                      onChange={handleCourseChange}
                      className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                    >
                      <option value="" disabled selected>
                        Select Interested Course
                      </option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="Diploma">Diploma</option>
                    </select>
                  </div>

                  {selectedCourse === "B.Tech" && (
                    <div className="flex flex-col gap-2">
                      <span>Interested Department</span>
                      <select
                        name="department"
                        required
                        className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                      >
                        <option value="">Select Department</option>
                        <option value="Mechanical Engineering">
                          Mechanical Engineering
                        </option>
                        <option value="Computer Science Engineering">
                          Computer Science Engineering
                        </option>
                        <option value="Civil Engineering">
                          Civil Engineering
                        </option>
                        <option value="Electronics and Communication Engineering">
                          Electronics and Communication Engineering
                        </option>
                        <option value="Electrical Engineering">
                          Electrical Engineering
                        </option>
                        <option value="Computer Science and Engineering (AI & ML)">
                          Computer Science and Engineering (AI & ML)
                        </option>
                        <option
                          value="
Computer Science and Engineering (Cyber Security)"
                        >
                          Computer Science and Engineering (Cyber Security)
                        </option>
                      </select>
                    </div>
                  )}

                  {selectedCourse === "Diploma" && (
                    <div className="flex flex-col gap-2">
                      <span>Interested Department</span>
                      <select
                        name="department"
                        required
                        className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                      >
                        <option value="" disabled selected>
                          Select Department
                        </option>
                        <option value="Mechanical Engineering">
                          Mechanical Engineering
                        </option>
                        <option value="Electrical Engineering">
                          Electrical Engineering
                        </option>
                        <option value="Civil Engineering">
                          Civil Engineering
                        </option>
                        <option value="Electronics and Communication Engineering">
                          Electronics and Communication Engineering
                        </option>
                        <option value="Computer Science Technology">
                          Computer Science Technology
                        </option>
                      </select>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <span>Message (optional)</span>
                    <input
                      type="text"
                      name="message"
                      className="w-full h-[4rem] p-4 bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                    />
                  </div>
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://web3forms.com/success"
                  />
                  <div className="w-full h-[4rem] mt-4 rounded-sm flex justify-center items-center bg-white text-[#DC143C] text-lg font-bold">
                    {loading ? (
                      "Submitting..."
                    ) : (
                      <button type="submit">Submit</button>
                    )}
                  </div>

                  {error && <p className="text-red-500 text-center">{error}</p>}
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

export default StudentEnquiryPage;
