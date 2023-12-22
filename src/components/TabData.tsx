"use client"
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import BodyTab from "./tabs-data/BodyTab";
import TableTab from "./tabs-data/TableTab";
import {useMainContext} from "@/context/MainContext";

export default function TabData() {
  const {paramsData, setParamsData, headerData, setHeaderData}=useMainContext();
  const activeTabBorderClass="data-[state=active]:border-b-2 data-[state=active]:border-[#F15A24]";
  return (
    <Tabs defaultValue="param" className="w-[480px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="param" className={activeTabBorderClass}>Params</TabsTrigger>
        <TabsTrigger value="header" className={activeTabBorderClass}>Headers</TabsTrigger>
        <TabsTrigger value="body" className={activeTabBorderClass}>Body</TabsTrigger>
      </TabsList>
      <TabsContent value="param">
        <TableTab title="Query Params" data={paramsData} setData={setParamsData} />
      </TabsContent>
      <TabsContent value="header">
        <TableTab title="Headers" data={headerData} setData={setHeaderData} />
      </TabsContent>
      <TabsContent value="body">
        <BodyTab />
      </TabsContent>
    </Tabs>
  );
}
