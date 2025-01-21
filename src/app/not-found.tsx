import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">
        404
      </h1>
      <p className="text-2xl text-gray-600 mt-4">
        Sahifa topilmadi
      </p>
      <p className="text-gray-500 mt-2">
        Qidirayotgan sahifangiz mavjud emas yoki
        o'chirilgan.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
      >
        Bosh sahifaga qaytish
      </a>
    </div>
  );
};

export default NotFound;
