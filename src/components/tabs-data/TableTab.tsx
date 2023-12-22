"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import AddRow from "../AddRow";

type Props = {
    title: string;
    data: any[]|[];
    setData: React.Dispatch<React.SetStateAction<any[]>>;
};
export default function TableTab({ title, data, setData }: Props) {
  const [rows, addRows] = useState([0]);
  return (
    <div className="mt-4">
      <h2 className="text-base font-medium my-2 mt-2">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead> </TableHead>
            <TableHead>Key</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
              <AddRow
                  key={index}
                  rowId={index}
                  addRows={addRows}
                  data={data}
                  setData={setData}
              />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
