function SessionStorage() {
  return (
    <div>
      <div>
        <button onClick={() => sessionStorage.setItem("token", "ini token")}>
          Add Session Storage
        </button>
        <button onClick={() => sessionStorage.removeItem("token")}>
          Remove Session Storage
        </button>
      </div>
    </div>
  );
}

export default SessionStorage;
