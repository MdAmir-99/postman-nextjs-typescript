"use client";
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import {useMainContext} from '@/context/MainContext'

const BodyTab=() => {
  const {jsonData,setJsonData}=useMainContext();

  const onChangeHandler=(e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonData(e.target.value);
  }
  return (
    <Textarea rows={6} value={jsonData} onChange={onChangeHandler} className="mt-2"/>
  )
}

export default BodyTab