import React from "react";

const Contact = () => {
  return (
    <div className="w-screen h-screen  flex flex-col justify-center items-center ">
      <h1 className="text-orange-500 text-4xl font-semibold">
        Contact <span className="text-red-700 capitalize">us</span>
      </h1>
      <form className="border-2 border-orange-200 rounded-lg p-7 mt-5">
        <div className="flex flex-col pb-5">
          <label htmlFor="" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="John Doe"
            className="border p-3 pt-1 pb-1 rounded bg-gray-50 focus:bg-orange-100"
          />
        </div>
        <div className="flex flex-col pb-5">
          <label htmlFor="" className="font-semibold">
            E-mail
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="johndoe@example.com"
            className="border p-3 pt-1 pb-1 rounded bg-gray-50 focus:bg-orange-100"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="font-semibold">
            Message
          </label>
          <textarea
            type="text"
            cols="40"
            rows="5"
            name=""
            id=""
            placeholder="your message"
            className="border p-3 pt-1 pb-1 rounded bg-gray-50 focus:bg-orange-100"
          />
        </div>
        <div>
          <button className="bg-red-500 text-white p-5 w-24 pt-2 pb-2 mt-5 font-bold ">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
