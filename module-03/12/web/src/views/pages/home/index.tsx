"use client";
import useAuthStore from "@/stores/auth-store";
import AvatarForm from "./components/avatarForm";

export default function HomeView() {
  const { user } = useAuthStore();

  return (
    <div className="mx-auto max-w-lg mt-20 flex flex-col justify-center">
      <p>Home</p>
      {user && (
        <div className="mt-5">
          <AvatarForm />
        </div>
      )}
    </div>
  );
}
