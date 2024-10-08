import PageWrapper from "@/view/components/pageWrapper";

const getUsers = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/users");
    const parse = await data.json();

    return parse;
  } catch (err) {
    console.log(err);
  }
};

export default async function HomeView() {
  const users = await getUsers();
  console.log(users);
  return (
    <PageWrapper>
      <div>
        <p className="text-lg">Home Page</p>
        <p>{users.message}</p>
      </div>
    </PageWrapper>
  );
}
