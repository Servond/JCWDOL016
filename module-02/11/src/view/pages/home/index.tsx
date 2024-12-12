"use client";

import PageWrapper from "@/view/components/pageWrapper";
import { setCookie } from "cookies-next";

const getUsers = async () => {
  try {
    const data = await fetch(
      "http://localhost:8080/branch-management/branches/1"
    );
    const parse = await data.json();
    console.log(parse);
  } catch (err) {
    console.log(err);
  }
};

export default async function HomeView() {
  // const users = await getUsers();
  // console.log(users);
  return (
    <PageWrapper>
      <div>
        <p className="text-lg">Home Page</p>
        <button onClick={() => getUsers()}>login</button>
      </div>
    </PageWrapper>
  );
}
