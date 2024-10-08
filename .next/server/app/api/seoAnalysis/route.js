"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/seoAnalysis/route";
exports.ids = ["app/api/seoAnalysis/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FseoAnalysis%2Froute&page=%2Fapi%2FseoAnalysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FseoAnalysis%2Froute.ts&appDir=%2FUsers%2Fsankalpsingh%2FDesktop%2Fprojects%2Fseo-optimise%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsankalpsingh%2FDesktop%2Fprojects%2Fseo-optimise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FseoAnalysis%2Froute&page=%2Fapi%2FseoAnalysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FseoAnalysis%2Froute.ts&appDir=%2FUsers%2Fsankalpsingh%2FDesktop%2Fprojects%2Fseo-optimise%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsankalpsingh%2FDesktop%2Fprojects%2Fseo-optimise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_sankalpsingh_Desktop_projects_seo_optimise_src_app_api_seoAnalysis_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/seoAnalysis/route.ts */ \"(rsc)/./src/app/api/seoAnalysis/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/seoAnalysis/route\",\n        pathname: \"/api/seoAnalysis\",\n        filename: \"route\",\n        bundlePath: \"app/api/seoAnalysis/route\"\n    },\n    resolvedPagePath: \"/Users/sankalpsingh/Desktop/projects/seo-optimise/src/app/api/seoAnalysis/route.ts\",\n    nextConfigOutput,\n    userland: _Users_sankalpsingh_Desktop_projects_seo_optimise_src_app_api_seoAnalysis_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/seoAnalysis/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW9BbmFseXNpcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2VvQW5hbHlzaXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzZW9BbmFseXNpcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNhbmthbHBzaW5naCUyRkRlc2t0b3AlMkZwcm9qZWN0cyUyRnNlby1vcHRpbWlzZSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzYW5rYWxwc2luZ2glMkZEZXNrdG9wJTJGcHJvamVjdHMlMkZzZW8tb3B0aW1pc2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLz8yOWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zYW5rYWxwc2luZ2gvRGVza3RvcC9wcm9qZWN0cy9zZW8tb3B0aW1pc2Uvc3JjL2FwcC9hcGkvc2VvQW5hbHlzaXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Nlb0FuYWx5c2lzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VvQW5hbHlzaXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Nlb0FuYWx5c2lzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NhbmthbHBzaW5naC9EZXNrdG9wL3Byb2plY3RzL3Nlby1vcHRpbWlzZS9zcmMvYXBwL2FwaS9zZW9BbmFseXNpcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2VvQW5hbHlzaXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FseoAnalysis%2Froute&page=%2Fapi%2FseoAnalysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FseoAnalysis%2Froute.ts&appDir=%2FUsers%2Fsankalpsingh%2FDesktop%2Fprojects%2Fseo-optimise%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsankalpsingh%2FDesktop%2Fprojects%2Fseo-optimise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./controllers/seoController.ts":
/*!**************************************!*\
  !*** ./controllers/seoController.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _services_huggingFaceService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/huggingFaceService */ \"(rsc)/./services/huggingFaceService.ts\");\n/* harmony import */ var _services_openAiServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/openAiServices */ \"(rsc)/./services/openAiServices.ts\");\n/* harmony import */ var _services_cacheServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cacheServices */ \"(rsc)/./services/cacheServices.ts\");\n/* harmony import */ var _models_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Content */ \"(rsc)/./models/Content.ts\");\n\n\n\n\n\nasync function POST(request) {\n    try {\n        const { text } = await request.json();\n        const cachedResult = await (0,_services_cacheServices__WEBPACK_IMPORTED_MODULE_3__.getCachedResult)(text);\n        if (cachedResult) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(JSON.parse(cachedResult));\n        }\n        const huggingFaceResult = await (0,_services_huggingFaceService__WEBPACK_IMPORTED_MODULE_1__.analyzeText)(text);\n        const openAIResult = await (0,_services_openAiServices__WEBPACK_IMPORTED_MODULE_2__.optimizeContent)(text);\n        await _models_Content__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create({\n            text,\n            analysisResult: {\n                openAIResult,\n                huggingFaceResult\n            }\n        });\n        await (0,_services_cacheServices__WEBPACK_IMPORTED_MODULE_3__.cacheResult)(text, JSON.stringify({\n            openAIResult,\n            huggingFaceResult\n        }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            openAIResult,\n            huggingFaceResult\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb250cm9sbGVycy9zZW9Db250cm9sbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNLO0FBQ0E7QUFDWTtBQUNqQztBQUVqQyxlQUFlTSxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO1FBRW5DLE1BQU1DLGVBQWUsTUFBTU4sd0VBQWVBLENBQUNJO1FBQzNDLElBQUlFLGNBQWM7WUFDaEIsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQ0UsS0FBS0MsS0FBSyxDQUFDRjtRQUN0QztRQUVBLE1BQU1HLG9CQUFvQixNQUFNWix5RUFBV0EsQ0FBQ087UUFDNUMsTUFBTU0sZUFBZSxNQUFNWix5RUFBZUEsQ0FBQ007UUFFM0MsTUFBTUgsdURBQU9BLENBQUNVLE1BQU0sQ0FBQztZQUNuQlA7WUFDQVEsZ0JBQWdCO2dCQUFFRjtnQkFBY0Q7WUFBa0I7UUFDcEQ7UUFFQSxNQUFNVixvRUFBV0EsQ0FBQ0ssTUFBTUcsS0FBS00sU0FBUyxDQUFDO1lBQUVIO1lBQWNEO1FBQWtCO1FBRXpFLE9BQU9iLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUs7WUFBY0Q7UUFBa0I7SUFDN0QsRUFBRSxPQUFPSyxPQUFZO1FBQ25CLE9BQU9sQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVTLE9BQU9BLE1BQU1DLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29udHJvbGxlcnMvc2VvQ29udHJvbGxlci50cz9lNTg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBhbmFseXplVGV4dCB9IGZyb20gJy4uL3NlcnZpY2VzL2h1Z2dpbmdGYWNlU2VydmljZSc7XG5pbXBvcnQgeyBvcHRpbWl6ZUNvbnRlbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9vcGVuQWlTZXJ2aWNlcyc7XG5pbXBvcnQgeyBjYWNoZVJlc3VsdCwgZ2V0Q2FjaGVkUmVzdWx0IH0gZnJvbSAnLi4vc2VydmljZXMvY2FjaGVTZXJ2aWNlcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9tb2RlbHMvQ29udGVudCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIGNvbnN0IGNhY2hlZFJlc3VsdCA9IGF3YWl0IGdldENhY2hlZFJlc3VsdCh0ZXh0KTtcbiAgICBpZiAoY2FjaGVkUmVzdWx0KSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oSlNPTi5wYXJzZShjYWNoZWRSZXN1bHQpKTtcbiAgICB9XG5cbiAgICBjb25zdCBodWdnaW5nRmFjZVJlc3VsdCA9IGF3YWl0IGFuYWx5emVUZXh0KHRleHQpO1xuICAgIGNvbnN0IG9wZW5BSVJlc3VsdCA9IGF3YWl0IG9wdGltaXplQ29udGVudCh0ZXh0KTtcblxuICAgIGF3YWl0IENvbnRlbnQuY3JlYXRlKHtcbiAgICAgIHRleHQsXG4gICAgICBhbmFseXNpc1Jlc3VsdDogeyBvcGVuQUlSZXN1bHQsIGh1Z2dpbmdGYWNlUmVzdWx0IH0sXG4gICAgfSk7XG5cbiAgICBhd2FpdCBjYWNoZVJlc3VsdCh0ZXh0LCBKU09OLnN0cmluZ2lmeSh7IG9wZW5BSVJlc3VsdCwgaHVnZ2luZ0ZhY2VSZXN1bHQgfSkpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb3BlbkFJUmVzdWx0LCBodWdnaW5nRmFjZVJlc3VsdCB9KTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJhbmFseXplVGV4dCIsIm9wdGltaXplQ29udGVudCIsImNhY2hlUmVzdWx0IiwiZ2V0Q2FjaGVkUmVzdWx0IiwiQ29udGVudCIsIlBPU1QiLCJyZXF1ZXN0IiwidGV4dCIsImpzb24iLCJjYWNoZWRSZXN1bHQiLCJKU09OIiwicGFyc2UiLCJodWdnaW5nRmFjZVJlc3VsdCIsIm9wZW5BSVJlc3VsdCIsImNyZWF0ZSIsImFuYWx5c2lzUmVzdWx0Iiwic3RyaW5naWZ5IiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./controllers/seoController.ts\n");

/***/ }),

/***/ "(rsc)/./models/Content.ts":
/*!***************************!*\
  !*** ./models/Content.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst contentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    text: {\n        type: String,\n        required: true\n    },\n    analysisResult: {\n        type: Object,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Content = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Content || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Content\", contentSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvQ29udGVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUcsZ0JBQWMsSUFBSUgsNENBQU1BLENBQUM7SUFDM0JJLE1BQUs7UUFBQ0MsTUFBS0M7UUFBT0MsVUFBUztJQUFJO0lBQy9CQyxnQkFBZTtRQUFDSCxNQUFLSTtRQUFPRixVQUFTO0lBQUk7QUFFN0MsR0FBRTtJQUFDRyxZQUFXO0FBQUk7QUFFbEIsTUFBTUMsVUFBUVQsNENBQU1BLENBQUNTLE9BQU8sSUFBSVYsK0NBQUtBLENBQUMsV0FBVUU7QUFFaEQsaUVBQWVRLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9tb2RlbHMvQ29udGVudC50cz8yOGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZW1hICxtb2RlbCxtb2RlbHN9IGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBjb250ZW50U2NoZW1hPW5ldyBTY2hlbWEoe1xuICAgIHRleHQ6e3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWV9LFxuICAgIGFuYWx5c2lzUmVzdWx0Ont0eXBlOk9iamVjdCxyZXF1aXJlZDp0cnVlfSxcblxufSx7dGltZXN0YW1wczp0cnVlfSlcblxuY29uc3QgQ29udGVudD1tb2RlbHMuQ29udGVudCB8fCBtb2RlbCgnQ29udGVudCcsY29udGVudFNjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsImNvbnRlbnRTY2hlbWEiLCJ0ZXh0IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiYW5hbHlzaXNSZXN1bHQiLCJPYmplY3QiLCJ0aW1lc3RhbXBzIiwiQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Content.ts\n");

/***/ }),

/***/ "(rsc)/./services/cacheServices.ts":
/*!***********************************!*\
  !*** ./services/cacheServices.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cacheResult: () => (/* binding */ cacheResult),\n/* harmony export */   getCachedResult: () => (/* binding */ getCachedResult)\n/* harmony export */ });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"(rsc)/./node_modules/redis/dist/index.js\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst redisClient = (0,redis__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    url: process.env.REDIS_URL\n});\nredisClient.on(\"error\", (err)=>console.error(\"Redis Error:\", err));\nconst cacheResult = async (key, value, expiry = 3600)=>{\n    try {\n        await redisClient.set(key, value, {\n            EX: expiry\n        }); // Expiry in seconds\n        console.log(`Cached result for key: ${key}`);\n    } catch (error) {\n        console.error(\"Error caching result in Redis:\", error);\n    }\n};\nconst getCachedResult = async (key)=>{\n    try {\n        const cachedValue = await redisClient.get(key);\n        if (cachedValue) {\n            console.log(`Retrieved cached result for key: ${key}`);\n        }\n        return cachedValue; // Return null if no cache found\n    } catch (error) {\n        console.error(\"Error retrieving cached result from Redis:\", error);\n        return null;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9jYWNoZVNlcnZpY2VzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsY0FBY0QsbURBQVlBLENBQUM7SUFBRUUsS0FBS0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQUM7QUFFOURKLFlBQVlLLEVBQUUsQ0FBQyxTQUFTLENBQUNDLE1BQVFDLFFBQVFDLEtBQUssQ0FBQyxnQkFBZ0JGO0FBRXhELE1BQU1HLGNBQWMsT0FBT0MsS0FBYUMsT0FBZUMsU0FBUyxJQUFJO0lBQ3pFLElBQUk7UUFDRixNQUFNWixZQUFZYSxHQUFHLENBQUNILEtBQUtDLE9BQU87WUFBRUcsSUFBSUY7UUFBTyxJQUFLLG9CQUFvQjtRQUN4RUwsUUFBUVEsR0FBRyxDQUFDLENBQUMsdUJBQXVCLEVBQUVMLElBQUksQ0FBQztJQUM3QyxFQUFFLE9BQU9GLE9BQU87UUFDZEQsUUFBUUMsS0FBSyxDQUFDLGtDQUFrQ0E7SUFDbEQ7QUFDRixFQUFFO0FBRUssTUFBTVEsa0JBQWtCLE9BQU9OO0lBQ3BDLElBQUk7UUFDRixNQUFNTyxjQUFjLE1BQU1qQixZQUFZa0IsR0FBRyxDQUFDUjtRQUMxQyxJQUFJTyxhQUFhO1lBQ2ZWLFFBQVFRLEdBQUcsQ0FBQyxDQUFDLGlDQUFpQyxFQUFFTCxJQUFJLENBQUM7UUFDdkQ7UUFDQSxPQUFPTyxhQUFjLGdDQUFnQztJQUN2RCxFQUFFLE9BQU9ULE9BQU87UUFDZEQsUUFBUUMsS0FBSyxDQUFDLDhDQUE4Q0E7UUFDNUQsT0FBTztJQUNUO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NlcnZpY2VzL2NhY2hlU2VydmljZXMudHM/ZWQyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdyZWRpcyc7XG5cbmNvbnN0IHJlZGlzQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHsgdXJsOiBwcm9jZXNzLmVudi5SRURJU19VUkwgfSk7XG5cbnJlZGlzQ2xpZW50Lm9uKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUuZXJyb3IoJ1JlZGlzIEVycm9yOicsIGVycikpO1xuXG5leHBvcnQgY29uc3QgY2FjaGVSZXN1bHQgPSBhc3luYyAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyeSA9IDM2MDApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCByZWRpc0NsaWVudC5zZXQoa2V5LCB2YWx1ZSwgeyBFWDogZXhwaXJ5IH0pOyAgLy8gRXhwaXJ5IGluIHNlY29uZHNcbiAgICBjb25zb2xlLmxvZyhgQ2FjaGVkIHJlc3VsdCBmb3Iga2V5OiAke2tleX1gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWNoaW5nIHJlc3VsdCBpbiBSZWRpczonLCBlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYWNoZWRSZXN1bHQgPSBhc3luYyAoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYWNoZWRWYWx1ZSA9IGF3YWl0IHJlZGlzQ2xpZW50LmdldChrZXkpO1xuICAgIGlmIChjYWNoZWRWYWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coYFJldHJpZXZlZCBjYWNoZWQgcmVzdWx0IGZvciBrZXk6ICR7a2V5fWApO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVmFsdWU7ICAvLyBSZXR1cm4gbnVsbCBpZiBubyBjYWNoZSBmb3VuZFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgY2FjaGVkIHJlc3VsdCBmcm9tIFJlZGlzOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJyZWRpc0NsaWVudCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJSRURJU19VUkwiLCJvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNhY2hlUmVzdWx0Iiwia2V5IiwidmFsdWUiLCJleHBpcnkiLCJzZXQiLCJFWCIsImxvZyIsImdldENhY2hlZFJlc3VsdCIsImNhY2hlZFZhbHVlIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./services/cacheServices.ts\n");

/***/ }),

/***/ "(rsc)/./services/huggingFaceService.ts":
/*!****************************************!*\
  !*** ./services/huggingFaceService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeText: () => (/* binding */ analyzeText)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n\nconst HUGGING_FACE_API_URL = \"https://api-inference.huggingface.co/models/\";\nconst MODEL_NAME = \"distilbert-base-uncased-finetuned-sst-2-english\";\nconsole.log(\"Hugging Face API Key:\", process.env.HUGGING_FACE_API_KEY);\nconst API_KEY = process.env.HUGGING_FACE_API_KEY;\nif (!API_KEY) {\n    throw new Error(\"Missing Hugging Face API Key. Please set the HUGGING_FACE_API_KEY environment variable.\");\n}\nconst analyzeText = async (text)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${HUGGING_FACE_API_URL}${MODEL_NAME}`, {\n            inputs: text\n        }, {\n            headers: {\n                Authorization: `Bearer ${API_KEY}`,\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (response.data) {\n            console.log(\"Hugging Face API result:\", response.data);\n            return response.data;\n        } else {\n            throw new Error(\"No response data from Hugging Face API.\");\n        }\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            console.error(\"Hugging Face API Error (Axios):\", error.response?.data?.error);\n            throw new Error(`Hugging Face API Error: ${error.response?.data?.error || error.message}`);\n        } else if (error instanceof Error) {\n            console.error(\"Hugging Face API Error:\", error.message);\n            throw new Error(`Hugging Face API Error: ${error.message}`);\n        } else {\n            throw new Error(\"An unknown error occurred with Hugging Face API\");\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9odWdnaW5nRmFjZVNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsdUJBQXVCO0FBQzdCLE1BQU1DLGFBQWE7QUFFbkJDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CO0FBRXJFLE1BQU1DLFVBQVVILFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CO0FBRWhELElBQUksQ0FBQ0MsU0FBUztJQUNaLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQU9PLE1BQU1DLGNBQWMsT0FBT0M7SUFDaEMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTVosNkNBQUtBLENBQUNhLElBQUksQ0FDL0IsQ0FBQyxFQUFFWixxQkFBcUIsRUFBRUMsV0FBVyxDQUFDLEVBQ3RDO1lBQUVZLFFBQVFIO1FBQUssR0FDZjtZQUNFSSxTQUFTO2dCQUNQQyxlQUFlLENBQUMsT0FBTyxFQUFFUixRQUFRLENBQUM7Z0JBQ2xDLGdCQUFnQjtZQUNsQjtRQUNGO1FBR0YsSUFBSUksU0FBU0ssSUFBSSxFQUFFO1lBQ2pCZCxRQUFRQyxHQUFHLENBQUMsNEJBQTRCUSxTQUFTSyxJQUFJO1lBQ3JELE9BQU9MLFNBQVNLLElBQUk7UUFDdEIsT0FBTztZQUNMLE1BQU0sSUFBSVIsTUFBTTtRQUNsQjtJQUNGLEVBQUUsT0FBT1MsT0FBZ0I7UUFDdkIsSUFBSWxCLDZDQUFLQSxDQUFDbUIsWUFBWSxDQUFDRCxRQUFRO1lBQzdCZixRQUFRZSxLQUFLLENBQUMsbUNBQW1DQSxNQUFNTixRQUFRLEVBQUVLLE1BQU1DO1lBQ3ZFLE1BQU0sSUFBSVQsTUFBTSxDQUFDLHdCQUF3QixFQUFFUyxNQUFNTixRQUFRLEVBQUVLLE1BQU1DLFNBQVNBLE1BQU1FLE9BQU8sQ0FBQyxDQUFDO1FBQzNGLE9BQU8sSUFBSUYsaUJBQWlCVCxPQUFPO1lBQ2pDTixRQUFRZSxLQUFLLENBQUMsMkJBQTJCQSxNQUFNRSxPQUFPO1lBQ3RELE1BQU0sSUFBSVgsTUFBTSxDQUFDLHdCQUF3QixFQUFFUyxNQUFNRSxPQUFPLENBQUMsQ0FBQztRQUM1RCxPQUFPO1lBQ0wsTUFBTSxJQUFJWCxNQUFNO1FBQ2xCO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc2VydmljZXMvaHVnZ2luZ0ZhY2VTZXJ2aWNlLnRzPzk3MzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgSFVHR0lOR19GQUNFX0FQSV9VUkwgPSAnaHR0cHM6Ly9hcGktaW5mZXJlbmNlLmh1Z2dpbmdmYWNlLmNvL21vZGVscy8nO1xuY29uc3QgTU9ERUxfTkFNRSA9ICdkaXN0aWxiZXJ0LWJhc2UtdW5jYXNlZC1maW5ldHVuZWQtc3N0LTItZW5nbGlzaCc7XG5cbmNvbnNvbGUubG9nKCdIdWdnaW5nIEZhY2UgQVBJIEtleTonLCBwcm9jZXNzLmVudi5IVUdHSU5HX0ZBQ0VfQVBJX0tFWSk7XG5cbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5IVUdHSU5HX0ZBQ0VfQVBJX0tFWTtcblxuaWYgKCFBUElfS0VZKSB7XG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBIdWdnaW5nIEZhY2UgQVBJIEtleS4gUGxlYXNlIHNldCB0aGUgSFVHR0lOR19GQUNFX0FQSV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGUuJyk7XG59XG5cbmludGVyZmFjZSBIdWdnaW5nRmFjZVJlc3BvbnNlIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc2NvcmU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGFuYWx5emVUZXh0ID0gYXN5bmMgKHRleHQ6IHN0cmluZyk6IFByb21pc2U8SHVnZ2luZ0ZhY2VSZXNwb25zZVtdPiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgYCR7SFVHR0lOR19GQUNFX0FQSV9VUkx9JHtNT0RFTF9OQU1FfWAsXG4gICAgICB7IGlucHV0czogdGV4dCB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FQSV9LRVl9YCxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0h1Z2dpbmcgRmFjZSBBUEkgcmVzdWx0OicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgSHVnZ2luZ0ZhY2VSZXNwb25zZVtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlc3BvbnNlIGRhdGEgZnJvbSBIdWdnaW5nIEZhY2UgQVBJLicpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xuICAgICAgY29uc29sZS5lcnJvcignSHVnZ2luZyBGYWNlIEFQSSBFcnJvciAoQXhpb3MpOicsIGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEh1Z2dpbmcgRmFjZSBBUEkgRXJyb3I6ICR7ZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8IGVycm9yLm1lc3NhZ2V9YCk7XG4gICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdIdWdnaW5nIEZhY2UgQVBJIEVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIdWdnaW5nIEZhY2UgQVBJIEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCB3aXRoIEh1Z2dpbmcgRmFjZSBBUEknKTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJIVUdHSU5HX0ZBQ0VfQVBJX1VSTCIsIk1PREVMX05BTUUiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIkhVR0dJTkdfRkFDRV9BUElfS0VZIiwiQVBJX0tFWSIsIkVycm9yIiwiYW5hbHl6ZVRleHQiLCJ0ZXh0IiwicmVzcG9uc2UiLCJwb3N0IiwiaW5wdXRzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./services/huggingFaceService.ts\n");

/***/ }),

/***/ "(rsc)/./services/openAiServices.ts":
/*!************************************!*\
  !*** ./services/openAiServices.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   optimizeContent: () => (/* binding */ optimizeContent)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n\nconst API_KEY = process.env.OPENAI_API_KEY;\nif (!API_KEY) {\n    throw new Error(\"Missing OpenAI API key. Please set the OPENAI_API_KEY environment variable.\");\n}\nconst optimizeContent = async (text)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://api.openai.com/v1/chat/completions\", {\n            model: \"gpt-4-turbo\",\n            messages: [\n                {\n                    role: \"user\",\n                    content: text\n                }\n            ],\n            max_tokens: 500\n        }, {\n            headers: {\n                Authorization: `Bearer ${API_KEY}`,\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            if (error.response) {\n                console.error(\"OpenAI API Error Response:\", error.response.data);\n                throw new Error(`OpenAI API Error: ${error.response.data.error?.message || error.message}`);\n            } else if (error.request) {\n                console.error(\"OpenAI API No Response:\", error.request);\n                throw new Error(\"No response received from OpenAI API.\");\n            }\n        } else if (error instanceof Error) {\n            console.error(\"Unexpected Error:\", error.message);\n            throw new Error(`Unexpected error: ${error.message}`);\n        } else {\n            throw new Error(\"An unknown error occurred with OpenAI API.\");\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9vcGVuQWlTZXJ2aWNlcy50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFFMUMsSUFBSSxDQUFDSCxTQUFTO0lBQ1osTUFBTSxJQUFJSSxNQUFNO0FBQ2xCO0FBRU8sTUFBTUMsa0JBQWtCLE9BQU9DO0lBQ3BDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1SLDZDQUFLQSxDQUFDUyxJQUFJLENBQy9CLDhDQUNBO1lBQ0VDLE9BQU87WUFDUEMsVUFBVTtnQkFBQztvQkFBRUMsTUFBTTtvQkFBUUMsU0FBU047Z0JBQUs7YUFBRTtZQUMzQ08sWUFBWTtRQUNkLEdBQ0E7WUFDRUMsU0FBUztnQkFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRWYsUUFBUSxDQUFDO2dCQUNsQyxnQkFBZ0I7WUFDbEI7UUFDRjtRQUdGLE9BQU9PLFNBQVNTLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFnQjtRQUN2QixJQUFJbEIsNkNBQUtBLENBQUNtQixZQUFZLENBQUNELFFBQVE7WUFDN0IsSUFBSUEsTUFBTVYsUUFBUSxFQUFFO2dCQUNsQlksUUFBUUYsS0FBSyxDQUFDLDhCQUE4QkEsTUFBTVYsUUFBUSxDQUFDUyxJQUFJO2dCQUMvRCxNQUFNLElBQUlaLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRWEsTUFBTVYsUUFBUSxDQUFDUyxJQUFJLENBQUNDLEtBQUssRUFBRUcsV0FBV0gsTUFBTUcsT0FBTyxDQUFDLENBQUM7WUFDNUYsT0FBTyxJQUFJSCxNQUFNSSxPQUFPLEVBQUU7Z0JBQ3hCRixRQUFRRixLQUFLLENBQUMsMkJBQTJCQSxNQUFNSSxPQUFPO2dCQUN0RCxNQUFNLElBQUlqQixNQUFNO1lBQ2xCO1FBQ0YsT0FBTyxJQUFJYSxpQkFBaUJiLE9BQU87WUFDakNlLFFBQVFGLEtBQUssQ0FBQyxxQkFBcUJBLE1BQU1HLE9BQU87WUFDaEQsTUFBTSxJQUFJaEIsTUFBTSxDQUFDLGtCQUFrQixFQUFFYSxNQUFNRyxPQUFPLENBQUMsQ0FBQztRQUN0RCxPQUFPO1lBQ0wsTUFBTSxJQUFJaEIsTUFBTTtRQUNsQjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NlcnZpY2VzL29wZW5BaVNlcnZpY2VzLnRzP2I0NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZO1xuXG5pZiAoIUFQSV9LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIE9wZW5BSSBBUEkga2V5LiBQbGVhc2Ugc2V0IHRoZSBPUEVOQUlfQVBJX0tFWSBlbnZpcm9ubWVudCB2YXJpYWJsZS4nKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wdGltaXplQ29udGVudCA9IGFzeW5jICh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLFxuICAgICAge1xuICAgICAgICBtb2RlbDogJ2dwdC00LXR1cmJvJyxcbiAgICAgICAgbWVzc2FnZXM6IFt7IHJvbGU6ICd1c2VyJywgY29udGVudDogdGV4dCB9XSxcbiAgICAgICAgbWF4X3Rva2VuczogNTAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtBUElfS0VZfWAsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdPcGVuQUkgQVBJIEVycm9yIFJlc3BvbnNlOicsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9wZW5BSSBBUEkgRXJyb3I6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcj8ubWVzc2FnZSB8fCBlcnJvci5tZXNzYWdlfWApO1xuICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ09wZW5BSSBBUEkgTm8gUmVzcG9uc2U6JywgZXJyb3IucmVxdWVzdCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBPcGVuQUkgQVBJLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgd2l0aCBPcGVuQUkgQVBJLicpO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJFcnJvciIsIm9wdGltaXplQ29udGVudCIsInRleHQiLCJyZXNwb25zZSIsInBvc3QiLCJtb2RlbCIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJtYXhfdG9rZW5zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsInJlcXVlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./services/openAiServices.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/seoAnalysis/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/seoAnalysis/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _controllers_seoController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers/seoController */ \"(rsc)/./controllers/seoController.ts\");\n\n // Updated path for controllers\nasync function POST(request) {\n    try {\n        const { text } = await request.json();\n        const result = await (0,_controllers_seoController__WEBPACK_IMPORTED_MODULE_1__.handleSEOAnalysis)(text);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(result);\n    } catch (error) {\n        if (error instanceof Error) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: error.message\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unknown error occurred\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW9BbmFseXNpcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDK0IsQ0FBQywrQkFBK0I7QUFFbkcsZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUQsUUFBUUUsSUFBSTtRQUNuQyxNQUFNQyxTQUFTLE1BQU1MLDZFQUFpQkEsQ0FBQ0c7UUFDdkMsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FBQ0M7SUFDM0IsRUFBRSxPQUFPQyxPQUFnQjtRQUN2QixJQUFJQSxpQkFBaUJDLE9BQU87WUFDMUIsT0FBT1IscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFBRUUsT0FBT0EsTUFBTUUsT0FBTztZQUFDLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuRTtRQUNBLE9BQU9WLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF5QixHQUFHO1lBQUVHLFFBQVE7UUFBSTtJQUM5RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcC9hcGkvc2VvQW5hbHlzaXMvcm91dGUudHM/YjdhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBoYW5kbGVTRU9BbmFseXNpcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRyb2xsZXJzL3Nlb0NvbnRyb2xsZXInOyAvLyBVcGRhdGVkIHBhdGggZm9yIGNvbnRyb2xsZXJzXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHRleHQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhbmRsZVNFT0FuYWx5c2lzKHRleHQpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXN1bHQpO1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1Vua25vd24gZXJyb3Igb2NjdXJyZWQnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJoYW5kbGVTRU9BbmFseXNpcyIsIlBPU1QiLCJyZXF1ZXN0IiwidGV4dCIsImpzb24iLCJyZXN1bHQiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/seoAnalysis/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag","vendor-chunks/@redis","vendor-chunks/generic-pool","vendor-chunks/yallist","vendor-chunks/redis","vendor-chunks/cluster-key-slot"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FseoAnalysis%2Froute&page=%2Fapi%2FseoAnalysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FseoAnalysis%2Froute.ts&appDir=%2FUsers%2Fsankalpsingh%2FDesktop%2Fprojects%2Fseo-optimise%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsankalpsingh%2FDesktop%2Fprojects%2Fseo-optimise&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();