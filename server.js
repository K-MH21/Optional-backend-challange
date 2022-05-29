import express from 'express';
import nunjucks from 'nunjucks';
import adminRouter from './route/admin.js'

const app = express();
app.set("view engine", "njk");
nunjucks.configure("views", {
    express: app,
})

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use("/admin", adminRouter)

app.listen(8080);