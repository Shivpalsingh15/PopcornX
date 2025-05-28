'use client'
import React from "react";
import { useSelector } from "react-redux";

export default function MovieCard() {
  const { value } = useSelector((store) => store.dashboard);
  console.log(value);
  return <div>MovieCard</div>;
}
