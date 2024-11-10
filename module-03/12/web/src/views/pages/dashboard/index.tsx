"use client";
import useAuthStore from "@/stores/auth-store";

export default function DashboardView() {
  const { user } = useAuthStore();

  return (
    <div className="mx-auto max-w-lg mt-20 flex flex-col text-center justify-center">
      <p>Admin Page</p>
      <div>
        <table className="border border-black w-full">
          <thead>
            <tr className="border border-black">
              <th className="p-2">Email</th>
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">{user?.email}</td>
              <td className="p-2">{user?.name}</td>
              <td className="p-2">{user?.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
