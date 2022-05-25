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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy na pewno chcesz usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'Tak!',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.value) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJtZXNzYWdlIiwic3RhdHVzIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9kZWxldGUuanM/NmMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmRlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOidDenkgbmEgcGV3bm8gY2hjZXN6IHVzdW7EhcSHIHJla29yZD8nLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnVGFrIScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOaWUnXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogZGVsZXRlVXJsICsgJCh0aGlzKS5kYXRhKFwiaWRcIilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKCdPb3BzLi4uJywgZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSwgZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVztFQUNUQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEtBQWIsQ0FBbUIsWUFBVztJQUFBOztJQUMxQkMsSUFBSSxDQUFDQyxJQUFMLENBQVU7TUFDTkMsS0FBSyxFQUFDLG9DQURBO01BRU5DLElBQUksRUFBRSxTQUZBO01BR05DLGdCQUFnQixFQUFFLElBSFo7TUFJTkMsaUJBQWlCLEVBQUUsTUFKYjtNQUtOQyxnQkFBZ0IsRUFBRTtJQUxaLENBQVYsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLE1BQUQsRUFBWTtNQUNoQixJQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7UUFDZFgsQ0FBQyxDQUFDWSxJQUFGLENBQU87VUFDSEMsTUFBTSxFQUFFLFFBREw7VUFFSEMsR0FBRyxFQUFFQyxTQUFTLEdBQUdmLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWdCLElBQVIsQ0FBYSxJQUFiO1FBRmQsQ0FBUCxFQUlDQyxJQUpELENBSU0sVUFBU0QsSUFBVCxFQUFlO1VBQ2pCRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO1FBQ0gsQ0FORCxFQU9DQyxJQVBELENBT00sVUFBVUwsSUFBVixFQUFnQjtVQUNsQmQsSUFBSSxDQUFDQyxJQUFMLENBQVUsU0FBVixFQUFxQmEsSUFBSSxDQUFDTSxZQUFMLENBQWtCQyxPQUF2QyxFQUFnRFAsSUFBSSxDQUFDTSxZQUFMLENBQWtCRSxNQUFsRTtRQUNILENBVEQ7TUFVSDtJQUNKLENBbkJEO0VBb0JILENBckJEO0FBc0JILENBdkJBLENBQUQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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