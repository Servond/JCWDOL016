function Users() {
  return (
    <div className="flex justify-center">
      <table className="table-auto text-left w-[80%] md:w-[60%] lg:w-[60%]">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Robert</td>
            <td>robert@gmail.com</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Robert</td>
            <td>robert@gmail.com</td>
            <td>1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;
