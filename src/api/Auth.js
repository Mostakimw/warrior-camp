export const saveUserToDb = (user) => {
  const currentUser = {
    email: user?.email,
    name: user?.name || user?.displayName,
    image: user?.photoURL || user?.photoUrl,
    role: "student",
  };
  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log("user posted to db", result);
    });
};
