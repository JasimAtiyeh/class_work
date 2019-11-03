export const signup = user => ( // createUser
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { "user": {"username": user.username, "password": user.password } }
  })
); 

export const login = user => ( // createSession
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: {"user": {
        "username": user.username,
        "password": user.password
    } }
  })
);

export const logout = () => ( // deleteSession
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
);