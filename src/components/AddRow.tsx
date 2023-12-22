"use client";
import React, { useState } from "react";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";

interface IAddRowType {
  rowId: number;
  addRows: React.Dispatch<React.SetStateAction<any[]>>;
  data: any[]|[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}
const AddRow = ({ rowId, addRows, data, setData }: IAddRowType) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange=(checked: boolean) => {
    let result=data.filter(entry => entry.id===rowId)[0];
    if(checked) {
      addRows(oldArr => [...oldArr,rowId]);
      setIsChecked(true);
      result={...result,check: true};
    }
    else {
      result={...result,check: false};
    }

    let index=data.findIndex(item => item.id===rowId);
    if(index===-1) {
      setData(oldData => [...oldData,result]);
    }
    else {
      const newArray=Object.assign([...data],{
        [index] : result
      })
      setData(newArray);
    }
  };
  

  const onChangeHandler=(e: React.ChangeEvent<HTMLInputElement>) => {
    let result=data.filter(entry => entry.id===rowId)[0];
    result={...result,id: rowId,[e.target.name]: e.target.value};
    let index=data.findIndex(item => item.id===rowId);
    if(index===-1) {
      setData(oldData => [...oldData,result]);
    }
    else {
      const newArray=Object.assign([...data],{
        [index] : result
      })
      setData(newArray);
    }
  }

  return (
    <TableRow>
      <TableCell>
        <Checkbox onCheckedChange={handleChange} />
      </TableCell>
      <TableCell>
        <Input type="text" name="key" onChange={onChangeHandler} />
      </TableCell>
      <TableCell>
        <Input type="text" name="value" onChange={onChangeHandler}/>
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
