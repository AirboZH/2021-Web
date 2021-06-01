const { app, db } = require("./config");
/**
 * @param account
 * @param title
 * @param article
 */
app.post("/pw", async(req, res) => {
    const { account, title, article } = req.body;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    model = await db.Post.create({
        account: account,
        title: title,
        article: article,
    });
    res.send({
        code: 1,
        msg: "创建帖子成功",
        data: {
            Post_id: model.Post_id,
            account: account,
            title: title,
            article: article,
        },
    });
});