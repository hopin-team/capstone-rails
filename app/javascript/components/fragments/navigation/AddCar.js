"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var react_1 = __importStar(require("react"));
var AddCar = function () {
    var _a = (0, react_1.useState)({
        name: "",
        description: "",
        photo: "",
        price: "",
        model: "",
        user_id: null,
    }), carData = _a[0], setCarData = _a[1];
    var _b = (0, react_1.useState)(false), carAdded = _b[0], setCarAdded = _b[1];
    (0, react_1.useEffect)(function () {
        var fetchCurrentUser = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, cars, currentUser_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("/api/v1/cars")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        cars = _a.sent();
                        currentUser_1 = cars[0].user_id;
                        setCarData(function (prevCarData) { return (__assign(__assign({}, prevCarData), { user_id: currentUser_1 })); });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error fetching current user:", error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchCurrentUser();
    }, []);
    var handleChange = function (e) {
        var _a;
        setCarData(__assign(__assign({}, carData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, newCar, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, fetch("/api/v1/cars", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(carData),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    newCar = _a.sent();
                    setCarData({
                        name: "",
                        description: "",
                        photo: "",
                        price: "",
                        model: "",
                        user_id: carData.user_id,
                    });
                    setCarAdded(true);
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, response.json()];
                case 5:
                    error = _a.sent();
                    console.error("Error adding car:", error);
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    console.error("Error:", error_2);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: "flex flex-col items-center justify-center" },
        carAdded && (react_1.default.createElement("p", { className: "bg-green-200 font-bold mb-6 p-2 rounded shadow-lg" }, "New car has been added!")),
        react_1.default.createElement("div", { className: "h-auto w-auto lg:w-[800px] p-6 bg-slate-300 rounded-lg shadow-lg" },
            react_1.default.createElement("h1", { className: "text-center text-[25px] font-bold mb-6" }, "Add Car"),
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-4 shadow" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: "name", className: "block mb-1" }, "Name:"),
                    react_1.default.createElement("input", { type: "text", id: "name", name: "name", value: carData.name, onChange: handleChange, className: "w-full border border-gray-300 rounded px-3 py-2" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: "model", className: "block mb-1" }, "Model:"),
                    react_1.default.createElement("input", { type: "text", id: "model", name: "model", value: carData.model, onChange: handleChange, className: "w-full border border-gray-300 rounded px-3 py-2" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: "price", className: "block mb-1" }, "Price:"),
                    react_1.default.createElement("input", { type: "text", id: "price", name: "price", value: carData.price, onChange: handleChange, className: "w-full border border-gray-300 rounded px-3 py-2" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: "description", className: "block mb-1" }, "Description:"),
                    react_1.default.createElement("textarea", { id: "description", name: "description", value: carData.description, onChange: handleChange, className: "w-full border border-gray-300 rounded px-3 py-2" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: "photo", className: "block mb-1" }, "Photo URL:"),
                    react_1.default.createElement("input", { type: "text", id: "photo", name: "photo", value: carData.photo, onChange: handleChange, className: "w-full border border-gray-300 rounded px-3 py-2" })),
                react_1.default.createElement("div", { className: "flex justify-center items-center" },
                    react_1.default.createElement("button", { type: "submit", className: "w-auto lg:w-60 p-12 m-12 bg-[#96bf01] hover:bg-green-500 text-white rounded py-2 font-bold" }, "Add Car"))))));
};
exports.default = AddCar;
