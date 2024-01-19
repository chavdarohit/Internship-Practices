const koa = require("koa");
const koarouter = require("koa-router");
const app = new koa();
const router = new koarouter();
const db = require("./dbacess");
const bodyParser = require("koa-bodyparser");
const bcrypt = require("bcrypt");

async function signupInsert(ctx) {
  let fname = "rohit";
  let lname = "chavda";
  let pssd = "787877";
  let confpssd = "787877";
  let email = "rohitchavda@gmail.com";
  let mno = 7878776207;

  try {
    if (validateUser(fname, lname, pssd, confpssd, email, mno)) {
      let encryptedpssd = await bcrypt.hash(pssd, 10);
      const objdata = {
        firstname: fname,
        lastname: lname,
        password: encryptedpssd,
        email: email,
        mobile: mno,
      };
      await db.signupInsert(objdata);
      ctx.body = "Registration succesfull";
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = err.message || "An error occurred during registration";
  }
}

function validateUser(fname, lname, pssd, confpssd, email, mno) {
  if (!(fname && lname && pssd && confpssd && email && mno)) {
    throw new Error("All fields are required");
  }

  if (pssd !== confpssd) {
    throw new Error("Password and Confirm Password do not match");
  }

  if (!validateEmail(email)) {
    throw new Error("Invalid email format");
  }

  if (!validateMobile(mno)) {
    throw new Error("Invalid mobile number");
  }

  return true;
  function validateMobile(mno) {
    if (mno.toString().length === 10 && !isNaN(parseInt(mno))) return true;
    else return false;
  }

  function validateEmail(email) {
    let pattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    return pattern.test(email);
  }
}

router.get("/", async (ctx) => (ctx.body = "hiii"));
router.post("/api/signup", signupInsert);
app.use(router.routes());
app.use(bodyParser());

(async () => {
  await db.connectToDatabase();
  app.listen(3000, () => {
    console.log(`Server is running on port 3000...🚀`);
  });
})();
