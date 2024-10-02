import React, { useState } from "react";

const EnquiryBoxComponent = () => {
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(""); // State for error handling

  function submitMail(e) {
    e.preventDefault();
    setLoading(true); // Start loading

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
          window.location.href = "https://web3forms.com/success"; // Redirect on success
        } else {
          setError("Something went wrong. Please try again."); // Handle errors
          console.log(jsonResponse);
        }
      })
      .catch((error) => {
        setError("Network error. Please try again.");
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Stop loading
        e.target.reset(); // Reset form
      });
  }

  return (
    <div className="p-4 bg-[#DC143C] rounded-md flex-1">
      <div className="flex flex-col justify-between gap-5 ">
        <span className="flex justify-center items-center">
          <img src="/images/klip.svg" alt="" className="h-[4rem]" />
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
                className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
              >
                <option value="" disabled selected>
                  Select Interested Course
                </option>
                <option value="B.tech">B.Tech</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>

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

            {loading ? (
              <div className="w-full h-[4rem] mt-4 rounded-sm flex justify-center items-center bg-white text-[#DC143C] text-lg font-bold">
                Submitting...
              </div>
            ) : (
              <div className="w-full h-[4rem] mt-4 rounded-sm flex justify-center items-center bg-white text-[#DC143C] text-lg font-bold">
                <button type="submit">Submit</button>
              </div>
            )}

            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryBoxComponent;
