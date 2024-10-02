import React from "react";

const EnquiryBoxComponent = () => {
  function submitMail(e) {
    e.preventDefault();

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
        let json = await response.json();
        if (response.status == 200) {
          return json;
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        e.target.reset();
        setTimeout(() => {}, 3000);
      });
  }
  return (
    <div className="p-4 bg-[#DC143C] rounded-md flex-1">
      <div className="flex flex-col justify-between gap-5 ">
        <span className="flex justify-center items-center">
          <img src="/images/klip.svg" alt="" className="h-[4rem]" />
        </span>
        <span
          className="flex justify-center sm:text-lg lg:text-2xl xl:text-3xl text-center font-semibold text-white items-center
            "
        >
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
                className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Mobile Number</label>
              <input
                type="phone"
                name="phone"
                className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span>Interest Course</span>
              <select
                name="enquiry"
                className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
              >
                <option value="" disabled selected>
                  Select Interested Course
                </option>
                <option value="B.tech">B.Tech</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>

            <div className=" flex flex-col gap-2">
              <span>Massage (optional)</span>
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryBoxComponent;
