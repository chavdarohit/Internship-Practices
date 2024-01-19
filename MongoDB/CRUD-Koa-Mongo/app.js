let koa = require("koa");
let koaRouter = require("koa-router");
let render = require("koa-ejs");
let path = require("path");
let bodyParser = require("koa-bodyparser");
const db = require("./db");

let app = new koa();
let router = new koaRouter();
app.use(bodyParser());

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  debug: false,
  cache: false,
});

//////playing area

// let users = ["rohit", "mayank", "deep"];

async function index(ctx) {
  const usersData = await db.getData();
  await ctx.render("index", { users: usersData });
}
async function showAdd(ctx) {
  await ctx.render("add");
}

async function add(ctx) {
  const body = ctx.request.body;
  // console.log("request body", body.user);
  db.insertData(body.user);
  ctx.redirect("/");
}

async function deleteUser(ctx) {
  const userName = ctx.request.body.deleteuser;
  // users = users.filter((ele) => body.deleteuser !== ele);

  db.removeData(userName);

  ctx.redirect("/");
}

async function updateSendData(ctx) {
  const body = ctx.request.body;
  console.log(body.updateuser);
  await ctx.render("update", { updateuser: body.updateuser });
}

async function updateUserData(ctx) {
  const oldName = ctx.request.body.oldname;
  const newName = ctx.request.body.newname;
  // console.log(oldName, newName);

  db.updateData(oldName, newName);

  // users.splice(users.indexOf(oldName), 1, newName);
  // console.log(users);
  ctx.redirect("/");
}

router.get("/", index);
router.post("/add", add);
router.get("/showadd", showAdd);
router.post("/update", updateSendData);
router.post("/updateData", updateUserData);
router.post("/", deleteUser);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server is listening...."));
