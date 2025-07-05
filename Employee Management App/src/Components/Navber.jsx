import React from "react";

const Navber = () => {
  return (
    <div className="bg-slate-600 h-12  px-8 items-center flex">
      <h1 className="text-3xl font-bold text-green-700">Employee Management Application</h1>
      <div className="space-x-4 ml-auto">
        <a className="hover:text-blue-400" href="/">
          Home
        </a>
        <a className="hover:text-blue-400" href="/">
          Profile
        </a>
        <a className="hover:text-blue-400" href="/">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Navber;
