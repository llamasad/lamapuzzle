(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_3086b0c5._.js", {

"[project]/src/components/gamePlay/drawingPlane/colorPicker.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "colors": (()=>colors),
    "default": (()=>ColorPicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const colors = {
    black: "#000000",
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    yellow: "#FFFF00",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    orange: "#FFA500",
    darkGreen: "#008000",
    purple: "#800080",
    gray: "#808080",
    brown: "#A52A2A"
}; // Giúp TypeScript hiểu colors có kiểu cố định
function ColorPicker({ selectedColor, setSelectedColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-1",
        children: Object.entries(colors).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "cursor-pointer flex items-center justify-center w-6 h-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "radio",
                        name: "color",
                        value: key,
                        className: "hidden",
                        onChange: ()=>setSelectedColor(key)
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/drawingPlane/colorPicker.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-200 rounded-full transition-all ${selectedColor === key ? "w-5.5 h-5.5" : "w-5 h-5"}`,
                        style: {
                            backgroundColor: value
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/drawingPlane/colorPicker.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, key, true, {
                fileName: "[project]/src/components/gamePlay/drawingPlane/colorPicker.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/gamePlay/drawingPlane/colorPicker.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = ColorPicker;
var _c;
__turbopack_context__.k.register(_c, "ColorPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/svgs/fillIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FillIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function FillIcon({ color, width, height }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 500 500",
        width: width,
        height: height,
        className: "transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 162.39 5.697 L 135.527 33.422 L 170.021 69.141 L 37.768 205.995 C 14.764 229.796 14.764 267.467 37.768 291.265 L 39.664 293.284 L 160.433 418.22 C 183.44 442.021 219.887 442.021 242.9 418.22 L 388.606 267.483 L 402.046 253.615 L 216.056 61.211 L 200.731 45.361 L 196.887 41.376 L 162.39 5.697 Z M 196.887 96.907 L 348.341 253.615 L 306.182 297.234 L 97.147 297.234 L 64.569 263.533 C 56.902 255.599 56.902 241.715 64.569 233.78 L 196.887 96.907 Z M 425.031 323.032 L 409.677 346.818 C 409.677 346.818 400.108 362.662 388.606 380.512 C 382.856 390.43 379.026 398.385 375.186 408.303 C 371.35 418.22 367.519 424.171 367.519 436.073 C 367.519 467.807 394.357 495.573 425.031 495.573 C 455.71 495.573 482.556 467.807 482.556 436.073 C 482.556 424.171 478.717 416.236 474.886 406.321 C 471.047 396.403 465.302 386.486 461.465 378.556 C 451.877 360.702 440.39 344.833 440.39 344.833 L 425.031 323.032 Z",
                fill: "#333"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/fillIcon.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                style: {
                    transformOrigin: "-558.792px -535.649px 0px"
                },
                d: "M -586.077 -602.787 Q -558.809 -629.51 -531.541 -602.787 L -418.786 -492.288 Q -391.518 -465.565 -446.055 -465.565 L -671.563 -465.565 Q -726.1 -465.565 -698.832 -492.288 Z",
                fill: color,
                transform: "matrix(-0.99985, -0.017301, 0.017607, -0.999845, 758.385122, 843.946364)"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/fillIcon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 424.803 323.021 C 430.511 326.416 482.136 407.205 472.537 401.495 C 505.017 457.2 457.942 497.712 423.641 497.278 C 390.96 496.864 348.839 455.411 377.071 403.802 C 374.906 401.656 424.001 322.225 424.803 323.021 Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/fillIcon.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svgs/fillIcon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = FillIcon;
var _c;
__turbopack_context__.k.register(_c, "FillIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/svgs/eraseIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EraseIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function EraseIcon({ color, width, height }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 -0.5 17 17",
        version: "1.1",
        className: "scale-90",
        fill: "none",
        stroke: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            id: "SVGRepo_iconCarrier",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Erase Icon"
                }, void 0, false, {
                    fileName: "[project]/src/components/svgs/eraseIcon.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(1.000000, 0.000000)",
                        fill: "#333",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8.932,13.014 L2.958,7.039 L9.84,0.158 C10.162,-0.167 10.696,-0.156 11.031,0.18 L15.793,4.939 C16.127,5.275 16.138,5.808 15.814,6.13 L8.932,13.014 L8.932,13.014 Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svgs/eraseIcon.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7.963,14.11 C6.381,15.693 2.529,14.41 0.861,12.742 C-0.805,11.075 0.341,9.655 1.924,8.072 L7.963,14.11 L7.963,14.11 Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svgs/eraseIcon.tsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/svgs/eraseIcon.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/svgs/eraseIcon.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/svgs/eraseIcon.tsx",
            lineNumber: 20,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svgs/eraseIcon.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, this);
}
_c = EraseIcon;
var _c;
__turbopack_context__.k.register(_c, "EraseIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/svgs/brushIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BrushIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BrushIcon({ color, height, width }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "#333",
        height: height,
        width: width,
        version: "1.1",
        id: "Capa_1",
        className: "scale-95",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 422.555 422.555",
        xmlSpace: "preserve",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M419.061,11.643c-2.223-2.127-5.45-3.139-9.544-3.139c-32.927,0-122.005,65.392-196.859,141.77   c-42.696,43.557-64.478,74.066-72.961,96.074c6.455,2.162,13.001,5.199,19.671,9.167c5.219,3.105,10.092,6.77,14.468,10.88   c0.006,0.002,0.008,0.004,0.014,0.006c8.528,8.007,14.971,17.444,19.188,27.578c21.773-9.709,51.271-32.1,92.405-74.059   C369.608,134.048,439.164,30.877,419.061,11.643z"
                }, void 0, false, {
                    fileName: "[project]/src/components/svgs/brushIcon.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: color,
                    d: "M150.175,266.736c-11.455-6.818-22.257-10.794-32.808-12.057c-2.466-0.295-4.918-0.443-7.361-0.443   c-8.065,0-16.189,1.62-24.149,4.817c-30.825,12.389-33.835,41.568-36.491,67.315c-3.306,32.045-6.979,52.036-39.43,58.957   c-5.942,1.268-10.125,6.608-9.93,12.682c0.195,6.074,4.711,11.136,10.723,12.02c18.16,2.67,35.401,4.023,51.246,4.024   c0.004,0,0.007,0,0.011,0c34.558,0,63.052-6.296,84.689-18.712c19.855-11.393,33.144-27.572,38.43-46.788   c2.911-10.582,3.135-21.488,1.005-31.951C182.025,296.534,169.276,278.103,150.175,266.736z"
                }, void 0, false, {
                    fileName: "[project]/src/components/svgs/brushIcon.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/svgs/brushIcon.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svgs/brushIcon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = BrushIcon;
var _c;
__turbopack_context__.k.register(_c, "BrushIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gamePlay/drawingPlane/toolPicker.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ToolPicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$fillIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svgs/fillIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$eraseIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svgs/eraseIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$brushIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svgs/brushIcon.tsx [app-client] (ecmascript)");
;
;
;
;
const tools = [
    {
        name: "pen",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$brushIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: "eraser",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$eraseIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: "fill",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$fillIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
];
function ToolPicker({ selectedTool, setSelectedTool, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-2 flex flex-col items-center gap-2",
        children: tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "radio",
                        name: "tool",
                        value: tool.name,
                        className: "hidden",
                        onChange: ()=>setSelectedTool(tool.name)
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/drawingPlane/toolPicker.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-transform duration-200  rounded-full ${selectedTool === tool.name ? "scale-115 " : "hover:scale-110"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tool.icon, {
                            color: selectedTool === tool.name ? color : "#333",
                            width: 32,
                            height: 32
                        }, void 0, false, {
                            fileName: "[project]/src/components/gamePlay/drawingPlane/toolPicker.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/drawingPlane/toolPicker.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, tool.name, true, {
                fileName: "[project]/src/components/gamePlay/drawingPlane/toolPicker.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/gamePlay/drawingPlane/toolPicker.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ToolPicker;
var _c;
__turbopack_context__.k.register(_c, "ToolPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/svgs/thicknessSliderIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThicknessSliderIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ThicknessSliderIcon({ color, width, height }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        fill: color,
        className: "rotate-90 translate-x-[-45px] translate-y-9",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 146.75 45",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {}, void 0, false, {
                fileName: "[project]/src/components/svgs/thicknessSliderIcon.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: color,
                d: "M6 22.77l118.7-9.67a9.7 9.7 0 1 1 1.58 19.34 10.47 10.47 0 0 1-1.58 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/thicknessSliderIcon.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {}, void 0, false, {
                fileName: "[project]/src/components/svgs/thicknessSliderIcon.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svgs/thicknessSliderIcon.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = ThicknessSliderIcon;
var _c;
__turbopack_context__.k.register(_c, "ThicknessSliderIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gamePlay/drawingPlane/thinknessSlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThicknessSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$thicknessSliderIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svgs/thicknessSliderIcon.tsx [app-client] (ecmascript)");
;
;
function ThicknessSlider({ setStrokeWidth, strokeWidth }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$thicknessSliderIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "#333",
                width: 140,
                height: 52
            }, void 0, false, {
                fileName: "[project]/src/components/gamePlay/drawingPlane/thinknessSlider.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: "1",
                max: "30",
                value: strokeWidth,
                onChange: (event)=>{
                    setStrokeWidth(parseInt(event.target.value));
                },
                className: "w-[122px] left-[-36px] top-14 absolute z-10 weight-slider rotate-90"
            }, void 0, false, {
                fileName: "[project]/src/components/gamePlay/drawingPlane/thinknessSlider.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gamePlay/drawingPlane/thinknessSlider.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
} //             />
_c = ThicknessSlider;
var _c;
__turbopack_context__.k.register(_c, "ThicknessSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/svgs/paintIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaintIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PaintIcon({ color, width, height }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        id: "Layer_1",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 101.46 122.88",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `.cls-1,.cls-5{fill:#333;}.cls-2{fill:#efaa3a;}.cls-2,.cls-3,.cls-4,.cls-5,.cls-6{fill-rule:evenodd;}.cls-3{fill:#25a700;}.cls-4{fill:#333;}.cls-6{fill:#42a3cc;}`
                }, void 0, false, {
                    fileName: "[project]/src/components/svgs/paintIcon.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/paintIcon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "paint"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/paintIcon.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M42.6,114.51a46.35,46.35,0,0,0,23.82-3.13A50.7,50.7,0,0,0,74.79,107l.7,6.9a55.44,55.44,0,0,1-6.71,3.27,52.53,52.53,0,0,1-27,3.52,45.4,45.4,0,0,1-26-13.18A55,55,0,0,1,1.16,80.22a52.92,52.92,0,0,1,5.71-37A54.1,54.1,0,0,1,35.69,18.76,26.41,26.41,0,0,1,48.12,17a13.43,13.43,0,0,1,9.34,5.38,3.42,3.42,0,0,1,.33.59c2.91,6.65-.63,10.82-4,14.8-2,2.3-3.81,4.5-2.71,6.6.46.9,1.61,1.58,3.26,2a19.72,19.72,0,0,0,7.93.11c2.58-.41,5.25-1,7.79-1.51,1.54-.33,3-.65,4.5-.93l-2,6.81-1.22.26c-2.52.53-5.17,1.09-8.11,1.56a26.22,26.22,0,0,1-10.48-.23c-3.38-.88-5.92-2.65-7.24-5.18-3.05-5.85.14-9.61,3.47-13.55,2.07-2.44,4.24-5,3.19-7.92a7.4,7.4,0,0,0-4.92-2.59,20.41,20.41,0,0,0-9.46,1.4A47.9,47.9,0,0,0,12.34,46.24a46.78,46.78,0,0,0-5,32.68,48.77,48.77,0,0,0,12.9,24.2A39.12,39.12,0,0,0,42.6,114.51Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/paintIcon.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "cls-2",
                d: "M22.1,55.71A9,9,0,1,0,27.28,44,9,9,0,0,0,22.1,55.71Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/paintIcon.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "cls-3",
                d: "M16.76,82.51A9.1,9.1,0,1,0,22,70.75a9.1,9.1,0,0,0-5.22,11.76Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/paintIcon.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "cls-4",
                d: "M62.07,81.66a10.4,10.4,0,0,0,10.8,6.6L70.76,67.57a10.17,10.17,0,0,0-2.72.65,10.39,10.39,0,0,0-6,13.44Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/paintIcon.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "cls-5",
                d: "M89.52,0c-.77,12.18-16.75,19.69-11.11,32.37a14.14,14.14,0,0,0,8.46,7.57,9.07,9.07,0,0,0,6.58-.42c8.3-3.76,9.29-13.94,6.84-21.77C98,10.54,93.08,4.17,89.52,0Zm10.66,62.89a46.07,46.07,0,0,1-19.92.19L85.66,116a13.45,13.45,0,0,0,.56,3.36,5.19,5.19,0,0,0,8.54,2,6.07,6.07,0,0,0,1.43-3.88l4-54.6Zm-5.4-17.83c-2.51,1-7,1.59-10.21,0L80.36,59.58c7,1.56,13.82,1.85,20.38,0-3.26-6.33-3.52-7-6-14.47Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/paintIcon.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "cls-6",
                d: "M40.75,101.59A9.1,9.1,0,1,0,46,89.83a9.1,9.1,0,0,0-5.22,11.76Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svgs/paintIcon.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svgs/paintIcon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = PaintIcon;
var _c;
__turbopack_context__.k.register(_c, "PaintIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/provider/websocketProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "WebSocketProvider": (()=>WebSocketProvider),
    "useWebSocket": (()=>useWebSocket)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const WebSocketContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const WebSocketProvider = ({ children, query })=>{
    _s();
    const [ws, setWs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const connect = (onOpen)=>{
        if (ws) return;
        const newWs = query ? new WebSocket("ws://localhost:8080/event-emitter/" + query) : new WebSocket("ws://localhost:8080/event-emitter/publicLobby");
        ;
        newWs.onopen = ()=>onOpen(newWs);
        newWs.onclose = ()=>console.log("Disconnected from WebSocket");
        newWs.onerror = (error)=>console.error("WebSocket Error:", error);
        setWs(newWs);
    };
    const disconnect = ()=>{
        ws?.close();
        setWs(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebSocketContext.Provider, {
        value: {
            ws,
            connect,
            disconnect
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/provider/websocketProvider.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
};
_s(WebSocketProvider, "WaUAhaJFJPiWa3RTvgBWjNKriLY=");
_c = WebSocketProvider;
const useWebSocket = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WebSocketContext);
    if (!context) throw new Error("useWebSocket must be used within a WebSocketProvider");
    return context;
};
_s1(useWebSocket, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "WebSocketProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/blue.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/blue.577ebcf1.svg");}}),
"[project]/src/assets/svgs/brushIcons/blue.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/blue.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$blue$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/blue.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$blue$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/red.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/red.173ea373.svg");}}),
"[project]/src/assets/svgs/brushIcons/red.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/red.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$red$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/red.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$red$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/green.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/green.7467738d.svg");}}),
"[project]/src/assets/svgs/brushIcons/green.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/green.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$green$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/green.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$green$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/yellow.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/yellow.626490d7.svg");}}),
"[project]/src/assets/svgs/brushIcons/yellow.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/yellow.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$yellow$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/yellow.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$yellow$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/cyan.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/cyan.3a7f087d.svg");}}),
"[project]/src/assets/svgs/brushIcons/cyan.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/cyan.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$cyan$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/cyan.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$cyan$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/magenta.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/magenta.3dfdf204.svg");}}),
"[project]/src/assets/svgs/brushIcons/magenta.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/magenta.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$magenta$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/magenta.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$magenta$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/orange.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/orange.ad9f1f2d.svg");}}),
"[project]/src/assets/svgs/brushIcons/orange.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/orange.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$orange$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/orange.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$orange$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/darkGreen.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/darkGreen.783def7f.svg");}}),
"[project]/src/assets/svgs/brushIcons/darkGreen.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/darkGreen.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$darkGreen$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/darkGreen.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$darkGreen$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/purple.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/purple.ea8646f3.svg");}}),
"[project]/src/assets/svgs/brushIcons/purple.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/purple.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$purple$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/purple.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$purple$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/black.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/black.521619dc.svg");}}),
"[project]/src/assets/svgs/brushIcons/black.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/black.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$black$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/black.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$black$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/gray.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/gray.db63257a.svg");}}),
"[project]/src/assets/svgs/brushIcons/gray.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/gray.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$gray$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/gray.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$gray$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/brown.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/brown.3b85ab5f.svg");}}),
"[project]/src/assets/svgs/brushIcons/brown.svg.mjs { IMAGE => \"[project]/src/assets/svgs/brushIcons/brown.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$brown$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/brown.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$brown$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/brushIcons/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const brushIcons = {
    blue: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/blue.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/blue.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    red: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/red.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/red.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    green: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/green.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/green.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    yellow: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/yellow.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/yellow.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    cyan: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/cyan.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/cyan.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    magenta: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/magenta.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/magenta.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    orange: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/orange.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/orange.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    darkGreen: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/darkGreen.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/darkGreen.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    purple: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/purple.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/purple.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    black: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/black.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/black.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    gray: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/gray.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/gray.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    brown: __turbopack_context__.r('[project]/src/assets/svgs/brushIcons/brown.svg.mjs { IMAGE => "[project]/src/assets/svgs/brushIcons/brown.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default
};
const __TURBOPACK__default__export__ = brushIcons;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/red.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/red.f7d5136a.svg");}}),
"[project]/src/assets/svgs/fillIcons/red.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/red.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$red$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/red.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$red$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/green.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/green.dc0a136e.svg");}}),
"[project]/src/assets/svgs/fillIcons/green.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/green.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$green$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/green.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$green$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/blue.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/blue.80df0343.svg");}}),
"[project]/src/assets/svgs/fillIcons/blue.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/blue.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$blue$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/blue.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$blue$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/yellow.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/yellow.0639ef01.svg");}}),
"[project]/src/assets/svgs/fillIcons/yellow.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/yellow.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$yellow$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/yellow.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$yellow$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/cyan.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/cyan.355b7b0b.svg");}}),
"[project]/src/assets/svgs/fillIcons/cyan.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/cyan.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$cyan$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/cyan.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$cyan$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/magenta.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/magenta.702c0b84.svg");}}),
"[project]/src/assets/svgs/fillIcons/magenta.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/magenta.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$magenta$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/magenta.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$magenta$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/orange.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/orange.b576a531.svg");}}),
"[project]/src/assets/svgs/fillIcons/orange.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/orange.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$orange$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/orange.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$orange$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/darkGreen.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/darkGreen.33b7e5c0.svg");}}),
"[project]/src/assets/svgs/fillIcons/darkGreen.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/darkGreen.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$darkGreen$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/darkGreen.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$darkGreen$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/purple.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/purple.d96f0c1f.svg");}}),
"[project]/src/assets/svgs/fillIcons/purple.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/purple.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$purple$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/purple.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$purple$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/black.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/black.49abc325.svg");}}),
"[project]/src/assets/svgs/fillIcons/black.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/black.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$black$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/black.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$black$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/gray.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/gray.4034f4ed.svg");}}),
"[project]/src/assets/svgs/fillIcons/gray.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/gray.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$gray$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/gray.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$gray$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/brown.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/brown.118a63bd.svg");}}),
"[project]/src/assets/svgs/fillIcons/brown.svg.mjs { IMAGE => \"[project]/src/assets/svgs/fillIcons/brown.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$brown$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/brown.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$brown$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/fillIcons/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const fillIcons = {
    red: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/red.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/red.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    green: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/green.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/green.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    blue: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/blue.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/blue.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    yellow: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/yellow.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/yellow.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    cyan: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/cyan.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/cyan.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    magenta: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/magenta.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/magenta.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    orange: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/orange.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/orange.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    darkGreen: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/darkGreen.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/darkGreen.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    purple: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/purple.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/purple.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    black: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/black.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/black.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    gray: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/gray.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/gray.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    brown: __turbopack_context__.r('[project]/src/assets/svgs/fillIcons/brown.svg.mjs { IMAGE => "[project]/src/assets/svgs/fillIcons/brown.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default
};
const __TURBOPACK__default__export__ = fillIcons;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/eraseIcon.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/eraseIcon.1b673203.svg");}}),
"[project]/src/assets/svgs/eraseIcon.svg.mjs { IMAGE => \"[project]/src/assets/svgs/eraseIcon.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$eraseIcon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/eraseIcon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$eraseIcon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 26,
    height: 26,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/svgs/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/brushIcons/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/fillIcons/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$eraseIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svgs$2f$eraseIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svgs/eraseIcon.svg.mjs { IMAGE => "[project]/src/assets/svgs/eraseIcon.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
;
;
const toolsChangeColor = {
    pen: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$brushIcons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$fillIcons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const normalTool = {
    eraser: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$eraseIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svgs$2f$eraseIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
};
const toolPickerIcons = {
    normalTool,
    toolsChangeColor
};
const __TURBOPACK__default__export__ = toolPickerIcons;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/fonts/nguechngoacfont_7da8c52f.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "nguechngoacfont_7da8c52f-module___HXjzG__className",
});
}}),
"[project]/src/assets/fonts/nguechngoacfont_7da8c52f.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$nguechngoacfont_7da8c52f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/assets/fonts/nguechngoacfont_7da8c52f.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$nguechngoacfont_7da8c52f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'nguechNgoacFont', 'nguechNgoacFont Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$nguechngoacfont_7da8c52f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$nguechngoacfont_7da8c52f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/fonts/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$nguechngoacfont_7da8c52f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/fonts/nguechngoacfont_7da8c52f.js [app-client] (ecmascript)");
;
const fonts = {
    nguechNgoacFont: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$nguechngoacfont_7da8c52f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className
};
const __TURBOPACK__default__export__ = fonts;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gamePlay/drawingPlane/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DrawingPlane)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$colorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gamePlay/drawingPlane/colorPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$toolPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gamePlay/drawingPlane/toolPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$thinknessSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gamePlay/drawingPlane/thinknessSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$paintIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svgs/paintIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/provider/websocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/fonts/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
const { toolsChangeColor, normalTool } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function DrawingPlane({ word, setWord, onDrawRole, setOnDrawRole }) {
    _s();
    const { ws } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"])();
    const [selectedTool, setSelectedTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pen");
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("black");
    const [wordsToChoose, setWordsToChoose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "some",
        "words",
        "here"
    ]);
    const [undoStack, setUndoStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [redoStack, setRedoStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [drawName, setDrawName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("datdz");
    const [onTriggerPaint, setOnTriggerPaint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [strokeWidth, setStrokeWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(6);
    const [backgroundImage, setBackgroundImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isDrawing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrawingPlane.useEffect": ()=>{
            if (ws && onDrawRole) {
                let currentTool = null;
                ws.onmessage = ({
                    "DrawingPlane.useEffect": (event)=>{
                        const payload = JSON.parse(event.data);
                        if (payload.type === "draw") {
                            if (payload.data.status === "START") {
                                currentTool = payload.data.toolType;
                            }
                            if (payload.data.status === "END") {
                                currentTool = null;
                            }
                            if (currentTool && currentTool === "fill") {
                                const { x, y, color } = payload.data;
                                drawFill(x, y, color);
                            } else if (currentTool && currentTool === "pen") {
                                if (payload.data.status) {
                                    const { toolType, x, y, color, thickness } = payload.data;
                                    setLines({
                                        "DrawingPlane.useEffect": (prevLines)=>[
                                                ...prevLines,
                                                {
                                                    tool: toolType,
                                                    points: [
                                                        x,
                                                        y
                                                    ],
                                                    color,
                                                    strokeWidth: thickness
                                                }
                                            ]
                                    }["DrawingPlane.useEffect"]);
                                } else {
                                    const { x, y } = payload.data;
                                    setLines({
                                        "DrawingPlane.useEffect": (line)=>{
                                            const lastLine = line[line.length - 1];
                                            lastLine.points = [
                                                x,
                                                y
                                            ];
                                            return [
                                                ...line,
                                                lastLine
                                            ];
                                        }
                                    }["DrawingPlane.useEffect"]);
                                }
                            }
                            if (currentTool && currentTool === "eraser") {
                                if (payload.data.status) {
                                    const { toolType, x, y, thickness } = payload.data;
                                    setLines({
                                        "DrawingPlane.useEffect": (prevLines)=>[
                                                ...prevLines,
                                                {
                                                    tool: toolType,
                                                    points: [
                                                        x,
                                                        y
                                                    ],
                                                    color: "#fff",
                                                    strokeWidth: thickness
                                                }
                                            ]
                                    }["DrawingPlane.useEffect"]);
                                } else {
                                    const { x, y } = payload.data;
                                    setLines({
                                        "DrawingPlane.useEffect": (line)=>{
                                            const lastLine = line[line.length - 1];
                                            lastLine.points = [
                                                x,
                                                y
                                            ];
                                            return [
                                                ...line,
                                                lastLine
                                            ];
                                        }
                                    }["DrawingPlane.useEffect"]);
                                }
                            }
                        } else if (payload.type === "wordsToChoose") {
                            if (payload.data.words.length > 0) {
                                setOnDrawRole(true);
                                setWord("");
                                setWordsToChoose(payload.data.words);
                                setTimeout({
                                    "DrawingPlane.useEffect": ()=>{
                                        setWord({
                                            "DrawingPlane.useEffect": (currentWord)=>{
                                                let word = payload.data.words[Math.floor(Math.random() * payload.data.words.length)];
                                                if (!currentWord) {
                                                    ws.send(JSON.stringify({
                                                        action: "CHOOSE_WORD",
                                                        data: word
                                                    }));
                                                    setWordsToChoose([]);
                                                    return word;
                                                }
                                                return currentWord;
                                            }
                                        }["DrawingPlane.useEffect"]);
                                    }
                                }["DrawingPlane.useEffect"], 10000);
                            } else {
                                setOnDrawRole(false);
                                setWord("");
                                setWordsToChoose([]);
                                setDrawName(payload.data.name);
                            }
                        }
                    }
                })["DrawingPlane.useEffect"];
            }
        }
    }["DrawingPlane.useEffect"], [
        ws
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrawingPlane.useEffect": ()=>{
            const handleKeyDown = {
                "DrawingPlane.useEffect.handleKeyDown": (e)=>{
                    if (e.ctrlKey && e.key === "z") {
                        handleUndo();
                    } else if (e.ctrlKey && e.key === "y") {
                        handleRedo();
                    }
                }
            }["DrawingPlane.useEffect.handleKeyDown"];
            if (onDrawRole) {
                window.addEventListener("keydown", handleKeyDown);
            }
            return ({
                "DrawingPlane.useEffect": ()=>{
                    if (onDrawRole) {
                        window.removeEventListener("keydown", handleKeyDown);
                    }
                }
            })["DrawingPlane.useEffect"];
        }
    }["DrawingPlane.useEffect"], [
        onDrawRole,
        redoStack,
        lines,
        backgroundImage
    ]);
    const handleUndo = ()=>{
        if (undoStack.length === 0) return;
        const previousState = undoStack[undoStack.length - 1];
        setUndoStack(undoStack.slice(0, -1));
        setRedoStack([
            ...redoStack,
            {
                lines,
                bg: backgroundImage
            }
        ]);
        setLines(previousState.lines);
        setBackgroundImage(previousState.bg);
    };
    const handleRedo = ()=>{
        if (redoStack.length === 0) return;
        const nextState = redoStack[redoStack.length - 1];
        setRedoStack(redoStack.slice(0, -1));
        setUndoStack([
            ...undoStack,
            {
                lines,
                bg: backgroundImage
            }
        ]);
        setLines(nextState.lines);
        setBackgroundImage(nextState.bg);
    };
    const handleMouseDown = (e)=>{
        if (!onDrawRole) return;
        if (selectedTool === "fill") {
            handleFillClick(e);
            return;
        }
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setUndoStack([
            ...undoStack,
            {
                lines,
                bg: backgroundImage
            }
        ]);
        setRedoStack([]);
        setLines([
            ...lines,
            {
                tool: selectedTool,
                points: [
                    pos.x,
                    pos.y
                ],
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$colorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][selectedColor],
                strokeWidth
            }
        ]);
    };
    const handleMouseMove = (e)=>{
        if (!onDrawRole) return;
        if (!isDrawing.current || selectedTool === "fill") return;
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        const lastLine = lines[lines.length - 1];
        lastLine.points = [
            ...lastLine.points,
            point.x,
            point.y
        ];
        setLines([
            ...lines.slice(0, -1),
            lastLine
        ]);
    };
    const handleMouseUp = ()=>{
        isDrawing.current = false;
    };
    const drawFill = (x, y, color)=>{
        const stage = stageRef.current;
        if (!stage) return;
        const layer = stage.getLayers()[0];
        const canvas = layer.toCanvas();
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const { data, width, height } = imageData;
        const targetColor = getPixelColor(data, x, y, width);
        const fillColor = hexToRGBA(color);
        if (colorsMatch(targetColor, fillColor)) return;
        floodFill(data, x, y, width, height, targetColor, fillColor);
        ctx.putImageData(imageData, 0, 0);
        const newImage = new window.Image();
        newImage.src = canvas.toDataURL();
        newImage.onload = ()=>{
            setBackgroundImage(newImage);
        };
    };
    const handleFillClick = (e)=>{
        if (selectedTool !== "fill" || !stageRef.current) return;
        const stage = stageRef.current;
        const layer = stage.getLayers()[0];
        const canvas = layer.toCanvas();
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const pos = stage.getPointerPosition();
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const { data, width, height } = imageData;
        const targetColor = getPixelColor(data, pos.x, pos.y, width);
        const fillColor = hexToRGBA(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$colorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][selectedColor]);
        if (colorsMatch(targetColor, fillColor)) return;
        setUndoStack([
            ...undoStack,
            {
                lines,
                bg: backgroundImage
            }
        ]);
        setRedoStack([]);
        floodFill(data, pos.x, pos.y, width, height, targetColor, fillColor);
        ctx.putImageData(imageData, 0, 0);
        const newImage = new window.Image();
        newImage.src = canvas.toDataURL();
        newImage.onload = ()=>{
            console.log("newImage: ", newImage);
            setBackgroundImage(newImage);
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 gap-2 h-[calc(100%-58px)] bg-white shadow shadow-gray-300 relative",
        children: [
            onDrawRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shadow border-gray-300 overflow-hidden bg-white absolute top-2 z-100 ml-2 pb-3 transition-all duration-400 py-1 rounded-full " + (onTriggerPaint ? "w-14 h-120" : "w-10 h-10"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>setOnTriggerPaint(!onTriggerPaint),
                            className: "flex justify-center items-center  mb-2 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svgs$2f$paintIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                color: "#333",
                                width: onTriggerPaint ? 33 : 28,
                                height: onTriggerPaint ? 33 : 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$toolPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$colorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][selectedColor],
                                    selectedTool: selectedTool,
                                    setSelectedTool: setSelectedTool
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 border-t-1 w-4/5 mx-auto border-[#333]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$thinknessSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    setStrokeWidth: setStrokeWidth,
                                    strokeWidth: strokeWidth
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 border-t-1 w-4/5 mx-auto border-[#333] mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$colorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    selectedColor: selectedColor,
                                    setSelectedColor: setSelectedColor
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                style: {
                    cursor: onDrawRole ? `url('${selectedTool == "eraser" ? normalTool.eraser.src : toolsChangeColor[selectedTool][selectedColor].src}') 0 24, pointer` : ""
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 z-10 bg-black/50 flex items-center gap-4 justify-center transition-transform duration-400 ${wordsToChoose.length > 0 && onDrawRole ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"}`,
                        children: wordsToChoose.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    setWord(value);
                                    ws && ws.send(JSON.stringify({
                                        action: "CHOOSE_WORD",
                                        data: value
                                    }));
                                    setWordsToChoose([]);
                                },
                                className: "text-2xl font-medium bg-gray-600 p-4 text-white cursor-pointer hover:scale-105 transition-transform duration-200",
                                children: value
                            }, index, false, {
                                fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 z-10 bg-black/50 flex items-center gap-4 justify-center transition-transform duration-400 ${drawName && !word && !onDrawRole ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-medium  p-4 text-white  ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl font-bold " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nguechNgoacFont,
                                    children: [
                                        " ",
                                        drawName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                    lineNumber: 383,
                                    columnNumber: 12
                                }, this),
                                " đang chọn từ"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
                        ref: stageRef,
                        width: 834,
                        height: 502,
                        onMouseDown: handleMouseDown,
                        onMouseMove: handleMouseMove,
                        onMouseUp: handleMouseUp,
                        onTouchStart: handleMouseDown,
                        onTouchMove: handleMouseMove,
                        onTouchEnd: handleMouseUp,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                            children: [
                                backgroundImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                    image: backgroundImage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                    lineNumber: 399,
                                    columnNumber: 33
                                }, this),
                                lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        points: line.points,
                                        stroke: line.color,
                                        strokeWidth: line.strokeWidth,
                                        tension: 0.5,
                                        lineCap: "round",
                                        lineJoin: "round",
                                        globalCompositeOperation: line.tool === "eraser" ? "destination-out" : "source-over"
                                    }, i, false, {
                                        fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gamePlay/drawingPlane/index.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
_s(DrawingPlane, "FxJZ19p6A8C64sw4HsjrgGWCpWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"]
    ];
});
_c = DrawingPlane;
function getPixelColor(data, x, y, width) {
    const index = (y * width + x) * 4;
    return [
        data[index],
        data[index + 1],
        data[index + 2],
        data[index + 3]
    ];
}
function hexToRGBA(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [
        bigint >> 16 & 255,
        bigint >> 8 & 255,
        bigint & 255,
        255
    ];
}
function colorsMatch(a, b) {
    return a.every((v, i)=>v === b[i]);
}
function floodFill(data, x, y, width, height, targetColor, fillColor) {
    const stack = [
        [
            x,
            y
        ]
    ];
    while(stack.length > 0){
        const [cx, cy] = stack.pop();
        const index = (cy * width + cx) * 4;
        const currentColor = Array.from(data.slice(index, index + 4));
        if (!colorsMatch(currentColor, targetColor)) continue;
        // Set the fill color
        data.set(fillColor, index);
        if (cx > 0) stack.push([
            cx - 1,
            cy
        ]);
        if (cx < width - 1) stack.push([
            cx + 1,
            cy
        ]);
        if (cy > 0) stack.push([
            cx,
            cy - 1
        ]);
        if (cy < height - 1) stack.push([
            cx,
            cy + 1
        ]);
    }
}
var _c;
__turbopack_context__.k.register(_c, "DrawingPlane");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/playGame.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/playGame.fbf16bf6.png");}}),
"[project]/src/assets/images/playGame.png.mjs { IMAGE => \"[project]/src/assets/images/playGame.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$playGame$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/playGame.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$playGame$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1719,
    height: 1145,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnklEQVR42nXKMQrCMABA0Ryii0OhdEmw4CKl0FJKwCUH8AZOiji7eoLcIUNIAiE4qIheIRAICAaHTG4ZvIDiKvjhbw8QQnbDMGzrut5UVTXHGK/6vl83TbNs23YB8jxHlFImhLhwzg9KqZMx5soY2yOEpgBCOIkxPt8/pZReXdfNQFEUMIQQ/4Isy0ZSyqP3/vHdOXe31t601ueyLMcfxZVe8S4TCMUAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/nameInput.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/nameInput.bb4c2444.jpg");}}),
"[project]/src/assets/images/nameInput.jpg.mjs { IMAGE => \"[project]/src/assets/images/nameInput.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$nameInput$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/nameInput.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$nameInput$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 1179,
    height: 231,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAACAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD00/6//gNAH//Z",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/playBtn.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/playBtn.a45a2d6c.png");}}),
"[project]/src/assets/images/playBtn.png.mjs { IMAGE => \"[project]/src/assets/images/playBtn.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$playBtn$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/playBtn.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$playBtn$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 563,
    height: 171,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAAAAABA/8IxAAAAHElEQVR42mM4d3nTse3nHl9iuHRh5+4d155dBgBxWAyxLhL+7gAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/createPrivateLobbyBtn.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/createPrivateLobbyBtn.8c1244a8.png");}}),
"[project]/src/assets/images/createPrivateLobbyBtn.png.mjs { IMAGE => \"[project]/src/assets/images/createPrivateLobbyBtn.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$createPrivateLobbyBtn$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/createPrivateLobbyBtn.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$createPrivateLobbyBtn$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 674,
    height: 106,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAAAAADGa7CfAAAAEklEQVR42mPYt3Pnrg07NuwGABoDBb5/REKYAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 1
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/languageOptions.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/languageOptions.2a6287a7.png");}}),
"[project]/src/assets/images/languageOptions.png.mjs { IMAGE => \"[project]/src/assets/images/languageOptions.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$languageOptions$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/languageOptions.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$languageOptions$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 550,
    height: 164,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAAAAABA/8IxAAAAHElEQVR42mO48OTh6ZOPn11guPDowb5Tjx9dAgB5UQ10Go9vTQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/clockIcon.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/clockIcon.45ad7312.png");}}),
"[project]/src/assets/images/clockIcon.png.mjs { IMAGE => \"[project]/src/assets/images/clockIcon.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$clockIcon$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/clockIcon.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$clockIcon$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 359,
    height: 402,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAArElEQVR42k1PuwoCMRBck7vLO+kEwUoQQRDFSi0ESxsF/0AbCz9AUFTQRrlr/GNnRfACyzIzu7MTklK2i6KY5nk+9N4f0QeMwbfIOXcIIVxjjC/UA1UCn8HvKaX0xsaJN4UQTfQxxAuGKhZL2Ezo/xrAc4hP4oksy7o1kYD7301Y3LXWS3Dip0ngNecgpdSCLUCscG9kjNlwOFjP2KJnrd1h8ob7FYcB3uIrnQ/5hRYgOfmjjgAAAABJRU5ErkJggg==",
    blurWidth: 7,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/pencilIcon.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/pencilIcon.d20b0244.png");}}),
"[project]/src/assets/images/pencilIcon.png.mjs { IMAGE => \"[project]/src/assets/images/pencilIcon.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$pencilIcon$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/pencilIcon.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$pencilIcon$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 360,
    height: 360,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAeklEQVR42mWNOw6AMAxDW1X9nwPExgVggLKB6AwbDLBy/wmnEkOLpQzJs2PGCnHOndZ6VkoFIURdQgs4OucOGFrMlEFjDMEVoPHenzAvGcQxSikrMmEPVPd1pmQBbUrj2CF50VvAmEES0htmgOn+QRJSD8COD33qLPQCbwUM/6JFWV4AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/eraseIcon.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/eraseIcon.53cabe92.png");}}),
"[project]/src/assets/images/eraseIcon.png.mjs { IMAGE => \"[project]/src/assets/images/eraseIcon.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$eraseIcon$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/eraseIcon.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$eraseIcon$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 500,
    height: 500,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAZklEQVR42l2P0QpAQBBF18ryH/LKKxHFC1K88P+f4tK9xUydmu7Znd1x7l8p2MAEgnFv0IADLOyDlfmnX8GosZIRL2TgAp3jyR0klB6UoALxE8wMao6X9Hp/AAXD00r9oed6rcaqbvN4B9qRAW/sAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/pencil.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/pencil.18459a90.png");}}),
"[project]/src/assets/images/pencil.png.mjs { IMAGE => \"[project]/src/assets/images/pencil.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$pencil$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/pencil.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$pencil$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 295,
    height: 699,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAR0lEQVR42i3MMQ6AIBBE0emsPYGFWmhMjBJIqGjouP99+EMoXvE3uytJKxIW6MKNzdFQUB0fdjyOF8dcHXHO2/HpR3ZEBA87yxUESI0i8t0AAAAASUVORK5CYII=",
    blurWidth: 3,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const images = {
    playGame: __turbopack_context__.r('[project]/src/assets/images/playGame.png.mjs { IMAGE => "[project]/src/assets/images/playGame.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    nameInput: __turbopack_context__.r('[project]/src/assets/images/nameInput.jpg.mjs { IMAGE => "[project]/src/assets/images/nameInput.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    playBtn: __turbopack_context__.r('[project]/src/assets/images/playBtn.png.mjs { IMAGE => "[project]/src/assets/images/playBtn.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    createPrivateLobbyBtn: __turbopack_context__.r('[project]/src/assets/images/createPrivateLobbyBtn.png.mjs { IMAGE => "[project]/src/assets/images/createPrivateLobbyBtn.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    languageOptions: __turbopack_context__.r('[project]/src/assets/images/languageOptions.png.mjs { IMAGE => "[project]/src/assets/images/languageOptions.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    clockIcon: __turbopack_context__.r('[project]/src/assets/images/clockIcon.png.mjs { IMAGE => "[project]/src/assets/images/clockIcon.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    pencilIcon: __turbopack_context__.r('[project]/src/assets/images/pencilIcon.png.mjs { IMAGE => "[project]/src/assets/images/pencilIcon.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    eraeseIcon: __turbopack_context__.r('[project]/src/assets/images/eraseIcon.png.mjs { IMAGE => "[project]/src/assets/images/eraseIcon.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default,
    pencil: __turbopack_context__.r('[project]/src/assets/images/pencil.png.mjs { IMAGE => "[project]/src/assets/images/pencil.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)').default
};
const __TURBOPACK__default__export__ = images;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gamePlay/playerSide.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PlayerSide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/fonts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/provider/websocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function PlayerSide() {
    _s();
    const { ws } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"])();
    // Mock data for testing
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerSide.useEffect": ()=>{
            if (!ws) return;
            const handleMessage = {
                "PlayerSide.useEffect.handleMessage": (event)=>{
                    const payload = JSON.parse(event.data);
                    if (payload.type === "playerList") {
                        setPlayers(payload.data);
                    } else if (payload.type === "DrawRole") {
                        setPlayers({
                            "PlayerSide.useEffect.handleMessage": (prevPlayers)=>prevPlayers.map({
                                    "PlayerSide.useEffect.handleMessage": (player)=>player.id === payload.data ? {
                                            ...player,
                                            role: "draw"
                                        } : {
                                            ...player,
                                            role: "guess"
                                        }
                                }["PlayerSide.useEffect.handleMessage"])
                        }["PlayerSide.useEffect.handleMessage"]);
                    } else if (payload.type === "playerJoin") {
                        setPlayers({
                            "PlayerSide.useEffect.handleMessage": (prevPlayers)=>[
                                    ...prevPlayers,
                                    payload.data
                                ]
                        }["PlayerSide.useEffect.handleMessage"]);
                    } else if (payload.type === "playerLeave") {
                        setPlayers({
                            "PlayerSide.useEffect.handleMessage": (prevPlayers)=>prevPlayers.filter({
                                    "PlayerSide.useEffect.handleMessage": (player)=>player.id !== payload.data
                                }["PlayerSide.useEffect.handleMessage"])
                        }["PlayerSide.useEffect.handleMessage"]);
                    } else if (payload.type === "playerScore") {
                        setPlayers({
                            "PlayerSide.useEffect.handleMessage": (prevPlayers)=>prevPlayers.map({
                                    "PlayerSide.useEffect.handleMessage": (player)=>player.id === payload.data.id ? {
                                            ...player,
                                            score: payload.data.score,
                                            isGuessed: true
                                        } : player
                                }["PlayerSide.useEffect.handleMessage"])
                        }["PlayerSide.useEffect.handleMessage"]);
                    }
                }
            }["PlayerSide.useEffect.handleMessage"];
            ws.addEventListener("message", handleMessage);
            return ({
                "PlayerSide.useEffect": ()=>{
                    ws.removeEventListener("message", handleMessage);
                }
            })["PlayerSide.useEffect"];
        }
    }["PlayerSide.useEffect"], [
        ws
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow shadow-gray-300 overflow-y-auto ",
        children: players.map((player, id)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 flex relative " + (player.isGuessed ? "bg-green-200" : ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: player.avatar,
                            alt: ".",
                            width: 48,
                            height: 48
                        }, void 0, false, {
                            fileName: "[project]/src/components/gamePlay/playerSide.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/playerSide.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold truncate text-center " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nguechNgoacFont,
                                children: player.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/gamePlay/playerSide.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-center ",
                                children: player.score
                            }, void 0, false, {
                                fileName: "[project]/src/components/gamePlay/playerSide.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gamePlay/playerSide.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this),
                    player.role === "draw" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pencil,
                        width: 16,
                        height: 24,
                        className: "absolute right-2 rotate-30",
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/playerSide.tsx",
                        lineNumber: 80,
                        columnNumber: 15
                    }, this)
                ]
            }, id, true, {
                fileName: "[project]/src/components/gamePlay/playerSide.tsx",
                lineNumber: 59,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/gamePlay/playerSide.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(PlayerSide, "8fiSQFQL+vHSvezE05pFz7GQnn4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"]
    ];
});
_c = PlayerSide;
var _c;
__turbopack_context__.k.register(_c, "PlayerSide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gamePlay/chatAndAnswer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChatAndAnswer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/fonts/index.ts [app-client] (ecmascript)");
;
;
;
function ChatAndAnswer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-end h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/123",
                                alt: "",
                                className: "h-12 w-12",
                                width: 48,
                                height: 48
                            }, void 0, false, {
                                fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                                lineNumber: 9,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col ml-2 translate-y-[-8px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-extrabold " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nguechNgoacFont,
                                        children: "dat dsz"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore voluptatibus maxime harum? Iste omnis deserunt, illo, libero distinctio nobis at, autem odio perferendis a quod veritatis amet eligendi id? Deserunt?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/123",
                                alt: "",
                                className: "h-12 w-12",
                                width: 48,
                                height: 48
                            }, void 0, false, {
                                fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col ml-2 translate-y-[-8px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-extrabold " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nguechNgoacFont,
                                        children: "dat dsz"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        children: "Lorem ipsum?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-19/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Chat or answer",
                    className: "h-8 text-sm px-1 w-full outline-none border border-gray-300 my-1.5 ml-1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gamePlay/chatAndAnswer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ChatAndAnswer;
var _c;
__turbopack_context__.k.register(_c, "ChatAndAnswer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gamePlay/guessHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GuessHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/provider/websocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function GuessHeader({ word, setWord, onDrawRole }) {
    _s();
    const { ws } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"])();
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GuessHeader.useEffect": ()=>{
            if (!ws) return; /*  */ 
            const handleMessage = {
                "GuessHeader.useEffect.handleMessage": (event)=>{
                    const payload = JSON.parse(event.data);
                    if (payload.type === "guessWord") {
                        !onDrawRole && setWord(payload.data.word);
                        setCountdown(payload.data.drawTime);
                    }
                }
            }["GuessHeader.useEffect.handleMessage"];
            ws.addEventListener("message", handleMessage);
            return ({
                "GuessHeader.useEffect": ()=>{
                    ws.removeEventListener("message", handleMessage);
                }
            })["GuessHeader.useEffect"];
        }
    }["GuessHeader.useEffect"], [
        ws
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GuessHeader.useEffect": ()=>{
            if (countdown <= 0) return;
            const timer = setInterval({
                "GuessHeader.useEffect.timer": ()=>{
                    setCountdown({
                        "GuessHeader.useEffect.timer": (prev)=>Math.max(prev - 1, 0)
                    }["GuessHeader.useEffect.timer"]);
                }
            }["GuessHeader.useEffect.timer"], 1000);
            return ({
                "GuessHeader.useEffect": ()=>clearInterval(timer)
            })["GuessHeader.useEffect"];
        }
    }["GuessHeader.useEffect"], [
        countdown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[52px] bg-white shadow shadow-gray-300 flex items-center justify-between px-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-11 h-11 relative flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "m-auto",
                        width: 42,
                        height: 42,
                        alt: "Clock Icon",
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clockIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/guessHeader.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 top-1.5 flex flex-col items-center justify-center font-bold text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: countdown
                        }, void 0, false, {
                            fileName: "[project]/src/components/gamePlay/guessHeader.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/guessHeader.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gamePlay/guessHeader.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 justify-center items-center flex-grow text-center",
                children: word.split("").map((letter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xl font-bold ${letter === " " ? "text-transparent" : ""}`,
                        children: letter === " " ? "\u00A0" : letter !== "_" ? letter : "_"
                    }, index, false, {
                        fileName: "[project]/src/components/gamePlay/guessHeader.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/gamePlay/guessHeader.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-11 h-11"
            }, void 0, false, {
                fileName: "[project]/src/components/gamePlay/guessHeader.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gamePlay/guessHeader.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(GuessHeader, "GTXChO94m1hNfGTRsqjtLxGDEuQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"]
    ];
});
_c = GuessHeader;
var _c;
__turbopack_context__.k.register(_c, "GuessHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gamePlay/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GamePlay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gamePlay/drawingPlane/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$playerSide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gamePlay/playerSide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$chatAndAnswer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gamePlay/chatAndAnswer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$guessHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gamePlay/guessHeader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function GamePlay({ gameStatus, setGameStatus, isLoading, setIsLoading }) {
    _s();
    const [onDrawRole, setOnDrawRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [word, setWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("h___ ____d"); // Mock word with hints and spaces
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-[-40px] m-auto xl:w-[1256px] pb-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-48 gap-2 h-[560px] mt-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " col-span-7",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$playerSide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/index.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/gamePlay/index.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-31 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$guessHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onDrawRole: onDrawRole,
                            setWord: setWord,
                            word: word
                        }, void 0, false, {
                            fileName: "[project]/src/components/gamePlay/index.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$drawingPlane$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            word: word,
                            setWord: setWord,
                            onDrawRole: onDrawRole,
                            setOnDrawRole: setOnDrawRole
                        }, void 0, false, {
                            fileName: "[project]/src/components/gamePlay/index.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/gamePlay/index.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow shadow-gray-300 col-span-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$chatAndAnswer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/gamePlay/index.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/gamePlay/index.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gamePlay/index.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/gamePlay/index.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(GamePlay, "vCgU4kPMv/h1EBMIkL/kXFq+33A=");
_c = GamePlay;
var _c;
__turbopack_context__.k.register(_c, "GamePlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gameStart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GameStart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/fonts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/provider/websocketProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function GameStart({ gameStatus, setGameStatus, isLoading, setIsLoading }) {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { connect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "m-auto absolute top-20 left-0 right-0 ",
                alt: "Play Game",
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].playGame,
                width: 400,
                height: 400
            }, void 0, false, {
                fileName: "[project]/src/components/gameStart.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 pl-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "mt-22 hover:scale-101 cursor-pointer",
                                width: 276,
                                height: 200,
                                alt: "Name Input",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nameInput
                            }, void 0, false, {
                                fileName: "[project]/src/components/gameStart.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: username,
                                type: "text",
                                onChange: (e)=>{
                                    setUsername(e.target.value);
                                },
                                className: `absolute text-2xl outline-none font-bold h-6.5 bottom-3.5 w-56 overflow-hidden left-6 transition-all focus:bg-white ${username.trim() ? "bg-white" : "bg-transparent"} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nguechNgoacFont}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/gameStart.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gameStart.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex mt-2 mb-3 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>connect((ws)=>{
                                        setIsLoading(true);
                                        ws.send(JSON.stringify({
                                            action: "JOIN_PUBLIC_LOBBY",
                                            data: {
                                                username: username,
                                                isAuthorized: false
                                            }
                                        }));
                                    }),
                                className: "m-auto hover:scale-101 cursor-pointer",
                                width: 130,
                                height: 100,
                                alt: "Play Button",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].playBtn
                            }, void 0, false, {
                                fileName: "[project]/src/components/gameStart.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "m-auto hover:scale-101 cursor-pointer",
                                width: 130,
                                height: 100,
                                alt: "languageOptions",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].languageOptions
                            }, void 0, false, {
                                fileName: "[project]/src/components/gameStart.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gameStart.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: ()=>connect((ws)=>{
                                setIsLoading(true);
                                ws.send(JSON.stringify({
                                    action: "CREATE_PRIVATE_LOBBY",
                                    data: {
                                        username: username,
                                        isAuthorized: false
                                    }
                                }));
                            }),
                        className: "m-auto hover:scale-101 cursor-pointer",
                        width: 262,
                        height: 100,
                        alt: "Language Options",
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPrivateLobbyBtn
                    }, void 0, false, {
                        fileName: "[project]/src/components/gameStart.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gameStart.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gameStart.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(GameStart, "8qLao7fXwJGFaELwe0iA6xqEJGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"]
    ];
});
_c = GameStart;
var _c;
__turbopack_context__.k.register(_c, "GameStart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/loadingModel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/fonts/index.ts [app-client] (ecmascript)");
;
;
function LoadingModel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-10 bg-black/50 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white text-6xl animate-pulse font-bold translate-y-[-30px] " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nguechNgoacFont,
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/loadingModel.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/loadingModel.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = LoadingModel;
var _c;
__turbopack_context__.k.register(_c, "LoadingModel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gamePlay/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/provider/websocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gameStart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gameStart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loadingModel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loadingModel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const GameUI = {
    playing: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gamePlay$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    end: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gameStart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    landing: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gameStart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function Page() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const lobbyId = searchParams.get("lobby");
    console.log("invite", lobbyId);
    const [gameStatus, setGameStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("playing");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const GameComponent = GameUI[gameStatus];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-19",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$websocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebSocketProvider"], {
            query: "",
            children: [
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loadingModel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameComponent, {
                    gameStatus: gameStatus,
                    setGameStatus: setGameStatus,
                    isLoading: isLoading,
                    setIsLoading: setIsLoading
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Page, "+wQyH5Z8mUZ+YDyXKLGpVyW4Ugo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3086b0c5._.js.map