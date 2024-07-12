import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const RegisterPage = () => {
  return (
    <>
      <div className="min-h-screen bg-zinc-100 flex flex-col items-center py-10">
        <header className="w-full bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="h-10 w-15 accoun" />
              <h1 className="text-xl font-semibold text-zinc-900">
                User Registration
              </h1>
            </div>
            <nav className="flex space-x-4">
              <Link to="/Login" className="text-blue-600 hover:text-blue-800">
                Login
              </Link>
              <Link
                to="/Register"
                className="text-zinc-600 hover:text-zinc-900"
              >
                Registration
              </Link>
              <button className="text-zinc-600 hover:text-zinc-900">
                <img src="https://placehold.co/24x24?text=🔍" alt="search" />
              </button>
            </nav>
          </div>
        </header>

        <div className="w-full bg-zinc-200 py-2">
          <div className="max-w-7xl mx-auto px-4">
            <span className="text-zinc-600">Home / Registration</span>
          </div>
        </div>

        <main className="flex-grow w-full max-w-4xl bg-white shadow-md rounded-lg mt-8 p-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
            Registration
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="user-email"
                className="block text-sm font-medium text-zinc-700"
              >
                User Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="user-email"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-zinc-700"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="user-password"
                className="block text-sm font-medium text-zinc-700"
              >
                User Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="user-password"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-zinc-700"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-zinc-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-zinc-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="contact-number"
                className="block text-sm font-medium text-zinc-700"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact-number"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-zinc-700"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-zinc-700"
              >
                Address
              </label>
              <textarea
                id="address"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="w-full md:w-96 bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default RegisterPage;
