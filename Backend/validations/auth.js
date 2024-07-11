const path = require("path");

function isAuth(req, res, next) {
    if (!req.session.isAuth) {
        return res.redirect('/login');
    }

    const user = req.session.user;
    const defaultViews = req.app.get("views");

    if (user && user.isAdmin) {
        const isAdmin = user.isAdmin;
        if (isAdmin === "superadmin") {
            req.app.set("views", path.join(__dirname, "..", "views", "superadmin"));
        } else if (isAdmin === "admin") {
            req.app.set("views", path.join(__dirname, "..", "views", "admin"));
        } else {
            req.flash("error", "Unauthorized user");
            return res.redirect("/auth/login");
        }

        res.on("finish", () => {
            req.app.set("views", defaultViews);
        });

        return next();
    } else {
        req.flash("error", "Unauthorized user");
        return res.redirect("/auth/login");
    }
}

module.exports = isAuth;
