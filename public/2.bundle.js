(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js!./src/containers/works.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/containers/works.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".works {\n    background-color: blueviolet;\n}\n\n.work-page {\n    margin-top: 100px\n}\n\n.work-block {\n    color: chocolate;\n    text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ "./src/containers/WorksPage.js":
/*!*************************************!*\
  !*** ./src/containers/WorksPage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./works.css */ "./src/containers/works.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorksPage = function (_Component) {
    _inherits(WorksPage, _Component);

    function WorksPage(props) {
        _classCallCheck(this, WorksPage);

        var _this = _possibleConstructorReturn(this, (WorksPage.__proto__ || Object.getPrototypeOf(WorksPage)).call(this, props));

        _this.state = {
            test: ''
        };
        console.log('constructor');
        return _this;
    }

    _createClass(WorksPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log('did mount');
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            console.log('will mount');
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log('will unmount');
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            console.log('will update');
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            console.log('should update');
            return true;
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            console.log('did update');
        }
    }, {
        key: "changeState",
        value: function changeState() {
            this.setState({ test: 'something' });
        }
    }, {
        key: "render",
        value: function render() {
            console.log('render');
            return _react2.default.createElement(
                "div",
                { className: "work-page" },
                _react2.default.createElement(
                    "style",
                    null,
                    "\n                    .work-page {\n                        color: green;\n                    }\n                    \n                "
                ),
                _react2.default.createElement(
                    "div",
                    { className: "work-block" },
                    "this is ",
                    this.props.match.path,
                    " page",
                    _react2.default.createElement(
                        "button",
                        { onClick: this.changeState.bind(this) },
                        "ok"
                    )
                )
            );
        }
    }]);

    return WorksPage;
}(_react.Component);

exports.default = WorksPage;

/***/ }),

/***/ "./src/containers/works.css":
/*!**********************************!*\
  !*** ./src/containers/works.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./works.css */ "./node_modules/css-loader/index.js!./src/containers/works.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map