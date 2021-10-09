var express = require('express');
var router = express.Router();
const {validateSchema} = require("../validators/middlewareValidator");

function errorHandler(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;

    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    let errBody = {error: err.message, status: err.status}
    res.status(err.status || 500);
    res.json(errBody)

}
router.get("/ping", (req, res) => {
    res.send("pong")
})