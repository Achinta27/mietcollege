import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const EnquiryBoxComponent = () => {
  const [formData, setFormData] = useState({
    name: "",

    phone: "",
    massage: "",
    enquiry: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, enquiry, massage } = formData;

    // Check if all required fields are filled
    if (!name || !phone || !enquiry) {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs.sendForm("", "", e.target, "").then(
      () => {
        navigate("/thank-you");
      },
      (error) => {
        console.log(error.text);
      }
    );

    // Clear the form data after submission
    setFormData({
      name: "",

      phone: "",
      enquiry: "",
      massage: "",
    });
  };
  return (
    <div className=" h-fit p-4 bg-[#DC143C]   rounded-md">
      <div className="flex flex-col  gap-5 ">
        <span className="flex justify-center items-center">
          <img src="/images/klip.svg" alt="" className="h-[4rem]" />
        </span>
        <span
          className="flex justify-center sm:text-lg  lg:text-2xl xl:text-3xl text-center font-semibold text-white items-center
            "
        >
          Quick Enquiry For Admission
        </span>
        <div className="flex text-white text-xl flex-col md:gap-2 sm:gap-2 lg:gap-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col font-semibold p-2 gap-4"
          >
            <span className="flex flex-col gap-2">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <span>Mobile Number</span>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
              />
            </span>

            <span className="flex flex-col gap-2">
              <span>Interest Course</span>
              <select
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
              >
                <option value="" disabled selected>
                  Select Interested Course
                </option>
                <option value="B.tech">B.Tech</option>
                <option value="Diploma">Diploma</option>
              </select>
            </span>

            <span className=" flex flex-col gap-2">
              <span>Massage (optional)</span>
              <input
                type="text"
                name="massage"
                value={formData.massage}
                onChange={handleChange}
                className="w-full h-[4rem] p-4 bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
              />
            </span>
            <span className="w-full h-[4rem] rounded-sm flex justify-center items-center bg-white text-[#DC143C] text-lg font-bold">
              <button type="submit">Submit</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryBoxComponent;
