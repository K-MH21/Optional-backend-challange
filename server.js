import express from 'express';
import nunjucks from 'nunjucks';
import adminRouter from './route/admin.js'
import questionsRouter from "./route/questions_api.js"
import scoresRouter from "./route/socres_api.js"

const app = express();
app.set("view engine", "njk");
nunjucks.configure("views", {
    express: app,
})

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/questions_api", questionsRouter)
app.use("scores_api", scoresRouter)

app.listen(8080);