var res;

try {
  if (!_user) {
    throw new Error();
  }

  res = {
    status: "success",
    code: 200,
    message: "User Authorized",
  };
} catch (e) {
  res = {
    status: "error",
    code: 400,
    message: "User Unauthorized or Expired Token",
  };
}

console.log(res);
