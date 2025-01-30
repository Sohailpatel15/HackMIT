"use client";
import CountUp from "react-countup";
import React from "react";

const Counter = () => {
  return (
    <div className="bg-hack-100 text-white p-4 px-6 rounded-2xl w-[200px]">
      <p className="text-center">Registrations</p>
      <p className="text-3xl font-bold text-accent-100 text-center">
        + <CountUp start={0} end={10000} duration={2} />
      </p>
    </div>
  );
};

export const Counter2 = () => {
  return (
    <div className="bg-accent-100 text-white px-6 p-4 rounded-2xl w-[200px]">
      <p className="text-center text-hack-300">Registrations </p>
      <p className="text-3xl font-bold text-hack-100 text-center">
        + <CountUp start={0} end={10000} duration={2} />
      </p>
    </div>
  );
};
export default Counter;
