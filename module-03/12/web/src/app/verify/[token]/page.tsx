"use client";
import axiosInstance from "@/lib/axios";
import ErrorHandler from "@/utils/error-handler";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Page({ params }: { params: { token: string } }) {
  const verifyUser = async () => {
    try {
      const token = await params.token;
      console.log(token);
      const { data } = await axiosInstance.get("/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err) {
      ErrorHandler(err);
    }
  };

  return (
    <div>
      <button onClick={() => verifyUser()}>Verify</button>
    </div>
  );
}
