function createOrder(param) {
  const pr = new Promise((resolve, reject) => {
    if (typeof param === "string") {
      const err = new Error(" string is not allowed");
      reject(err);
    } else {
      resolve("You are good to go");
    }
  });
  return pr;
}

createOrder("123")
  .then((res) => console.log(res))
  .catch((res) => console.log(res.message));
