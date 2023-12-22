"use client"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {useMainContext} from "@/context/MainContext"


export default function SelectMethod() {

  const {formData,setFormData}=useMainContext();
  
  const handleChange=(value:string) => {
    setFormData({
    ...formData,
      type: value,
    })
  }

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue defaultValue="GET" placeholder="GET" />
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="GET">GET</SelectItem>
          <SelectItem value="POST">POST</SelectItem>
          <SelectItem value="PUT">PUT</SelectItem>
          <SelectItem value="DELETE">DELETE</SelectItem>
      </SelectContent>
    </Select>
  )
}
