import React, { useState } from "react";

function FormObject() {
    const [form,setForm] =useState({
        firstName:"Prashant",
        lastName:"Singh",
        email:"singh.giri545@gmail.com"
    })
  return <>
  <label>First Name:
    <input value={form.firstName} onChange={(e)=>{
        setForm({...form,firstName:e.target.value})
    }}/>
  </label>
  <label>Last Name:
    <input value={form.lastName} onChange={(e)=>{
        setForm({...form,lastName:e.target.value})
    }}/>
  </label>
  <label>Email:
    <input value={form.email} onChange={(e)=>{
        setForm({...form,email:e.target.value})
    }}/>
  </label>
  <p>Your Personal Details(PII):</p>
  <b>FirstName:{form.firstName}</b><br/>
  <b>LastName:{form.lastName}</b><br/>
  <b>Email:{form.email}</b>
  </>;
}
export default FormObject;
