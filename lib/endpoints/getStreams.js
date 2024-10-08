"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStreams = exports.StreamCategory = void 0;
var scraper_1 = require("../scraper");
var utils_1 = require("../utils");
var StreamCategory;
(function (StreamCategory) {
    StreamCategory["TopPlayer"] = "Top player";
    StreamCategory["Caster"] = "Caster";
    StreamCategory["FemalePlayer"] = "Female Player";
})(StreamCategory || (exports.StreamCategory = StreamCategory = {}));
var getStreams = function (config) { return function () { return __awaiter(void 0, void 0, void 0, function () {
    var $, _a, streams;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = scraper_1.HLTVScraper;
                return [4 /*yield*/, (0, utils_1.fetchPage)("https://www.hltv.org/".concat((0, utils_1.generateRandomSuffix)()), config.loadPage)];
            case 1:
                $ = _a.apply(void 0, [_b.sent()]);
                return [4 /*yield*/, Promise.all($('.streams-stream')
                        .toArray()
                        .map(function (el) { return __awaiter(void 0, void 0, void 0, function () {
                        var name, category, country, viewers, link, stream;
                        return __generator(this, function (_a) {
                            name = el.find('.streams-name').text();
                            category = el
                                .find('.streams-category')
                                .attr('title');
                            country = {
                                name: el.find('.streams-flag').attr('title'),
                                code: el
                                    .find('.streams-flag')
                                    .attrThen('src', function (x) { var _a; return (_a = x.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('.')[0]; })
                            };
                            viewers = el
                                .find('.streams-viewers')
                                .textThen(function (x) { return (0, utils_1.parseNumber)(x.replace(/\(|\)/g, '')); });
                            link = el.data('frontpage-stream-embed-src');
                            stream = { name: name, category: category, country: country, viewers: viewers, link: link };
                            return [2 /*return*/, stream];
                        });
                    }); }))];
            case 2:
                streams = _b.sent();
                return [2 /*return*/, streams];
        }
    });
}); }; };
exports.getStreams = getStreams;
