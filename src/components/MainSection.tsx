import React from "react";
import SelectMethod from "./SelectMethod";
import InputWithButton from "./InputWithButton";
import TabData from "./TabData";
import ResponseSection from "./responseSection";
import { ApiContextProvider } from "@/context/ApiContext";
import WrapperDiv from "./WrapperDiv";

const MainSection = () => {
  return (
    <ApiContextProvider>
      <WrapperDiv>
        <div className="mt-2">
          <div className="w-full flex justify-center items-center gap-x-2">
            <SelectMethod />
            <InputWithButton />
          </div>
          <div className="w-full flex justify-center items-center mt-4">
            <TabData />
          </div>
          <div className="w-full">
            <ResponseSection />
          </div>
        </div>
      </WrapperDiv>
    </ApiContextProvider>
  );
};

export default MainSection;
