"use client";
import React from "react";
import { Textarea } from "./ui/textarea";

type Props={
    data?: object[]|object|string;
}

const Response=({data}:Props) => {
  const prettyFormat = JSON.stringify(data, null, 3);
  return (
    <div className="w-full mt-2">
      <div className="w-full lg:w-[50%] mx-auto">
        <h2 className="my-2">Response</h2>
        <div>
          <Textarea rows={12} className="bg-slate-800 text-white" value={prettyFormat} readOnly={true} />
        </div>
      </div>
    </div>
  );
};

export default Response;
