/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy na pewno chcesz usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'Tak!',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.value) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRlbGV0ZVVybCIsImRhdGEiLCJkb25lIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcz82YzExIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6J0N6eSBuYSBwZXdubyBjaGNlc3ogdXN1bsSFxIcgcmVrb3JkPycsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdUYWshJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05pZSdcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkZWxldGVVcmwgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoJ09vcHMuLi4nLCBkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlLCBkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFXO0VBQ1RBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsS0FBYixDQUFtQixZQUFXO0lBQUE7O0lBQzFCQyxJQUFJLENBQUNDLElBQUwsQ0FBVTtNQUNOQyxLQUFLLEVBQUMsb0NBREE7TUFFTkMsSUFBSSxFQUFFLFNBRkE7TUFHTkMsZ0JBQWdCLEVBQUUsSUFIWjtNQUlOQyxpQkFBaUIsRUFBRSxNQUpiO01BS05DLGdCQUFnQixFQUFFO0lBTFosQ0FBVixFQU1HQyxJQU5ILENBTVEsVUFBQ0MsTUFBRCxFQUFZO01BQ2hCLElBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtRQUNkWCxDQUFDLENBQUNZLElBQUYsQ0FBTztVQUNIQyxNQUFNLEVBQUUsUUFETDtVQUVIQyxHQUFHLEVBQUVDLFNBQVMsR0FBR2YsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFRZ0IsSUFBUixDQUFhLElBQWI7UUFGZCxDQUFQLEVBSUNDLElBSkQsQ0FJTSxVQUFTRCxJQUFULEVBQWU7VUFDakJFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7UUFDSCxDQU5ELEVBT0NDLElBUEQsQ0FPTSxVQUFVTCxJQUFWLEVBQWdCO1VBQ2xCZCxJQUFJLENBQUNDLElBQUwsQ0FBVSxTQUFWLEVBQXFCYSxJQUFJLENBQUNNLFlBQUwsQ0FBa0JDLE9BQXZDLEVBQWdEUCxJQUFJLENBQUNNLFlBQUwsQ0FBa0JFLE1BQWxFO1FBQ0gsQ0FURDtNQVVIO0lBQ0osQ0FuQkQ7RUFvQkgsQ0FyQkQ7QUFzQkgsQ0F2QkEsQ0FBRCJ9\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;