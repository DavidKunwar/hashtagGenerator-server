"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var HashTagGenrerator_1 = require("./HashTagGenrerator");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*", methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }));
var PORT = process.env.PORT || 3001;
app.get('/', function (req, res) { res.json({ hashtagtypes: ['hastag'] }); });
//Route for the hashtag generator
app.get('/hashtaggenerator', function (req, res) {
    try {
        var caption = req.body.caption;
        var Result = (0, HashTagGenrerator_1.HashTagGenerator)(caption);
        return res.json({ hashtags: Result });
    }
    catch (e) {
        return res.status(400).send(e);
    }
});
app.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:" + PORT);
});
