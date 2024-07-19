// src/pages/FormsPage.tsx
import React from "react";

const FormsPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-7xl p-6">
        <h1 className="text-3xl text-black pb-6">Forms</h1>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-1/2 px-2 mb-6">
            <p className="text-xl pb-6 flex items-center">
              <i className="fas fa-list mr-3"></i> Contact Form
            </p>
            <div className="leading-loose bg-white rounded shadow-xl p-6">
              <form>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                    id="email"
                    name="email"
                    type="text"
                    required
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Your inquiry.."
                    aria-label="Message"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2 mb-6">
            <p className="text-xl pb-6 flex items-center">
              <i className="fas fa-list mr-3"></i> Checkout Form
            </p>
            <div className="leading-loose bg-white rounded shadow-xl p-6">
              <form>
                <p className="text-lg text-gray-800 font-medium pb-4">
                  Customer Information
                </p>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="cus_name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="cus_name"
                    name="cus_name"
                    type="text"
                    required
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="cus_email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="cus_address"
                  >
                    Address
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_address"
                    name="cus_address"
                    type="text"
                    required
                    placeholder="Street"
                    aria-label="Address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="hidden text-sm block text-gray-600"
                    htmlFor="cus_city"
                  >
                    City
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_city"
                    name="cus_city"
                    type="text"
                    required
                    placeholder="City"
                    aria-label="City"
                  />
                </div>
                <div className="flex -mx-1 mb-4">
                  <div className="w-1/2 px-1">
                    <label
                      className="hidden block text-sm text-gray-600"
                      htmlFor="cus_country"
                    >
                      Country
                    </label>
                    <input
                      className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                      id="cus_country"
                      name="cus_country"
                      type="text"
                      required
                      placeholder="Country"
                      aria-label="Country"
                    />
                  </div>
                  <div className="w-1/2 px-1">
                    <label
                      className="hidden block text-sm text-gray-600"
                      htmlFor="cus_zip"
                    >
                      Zip
                    </label>
                    <input
                      className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                      id="cus_zip"
                      name="cus_zip"
                      type="text"
                      required
                      placeholder="Zip"
                      aria-label="Zip"
                    />
                  </div>
                </div>
                <p className="text-lg text-gray-800 font-medium py-4">
                  Payment Information
                </p>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600" htmlFor="card">
                    Card
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="card"
                    name="card"
                    type="text"
                    required
                    placeholder="Card Number MM/YY CVC"
                    aria-label="Card"
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="submit"
                  >
                    $3.00
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
