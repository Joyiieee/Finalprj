"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _home = _interopRequireDefault(require("@/components/home"));

var _blog = _interopRequireDefault(require("@/components/blog.vue"));

var _services = _interopRequireDefault(require("@/components/services.vue"));

var _contact = _interopRequireDefault(require("@/components/contact.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'home',
    component: _home["default"]
  }, {
    path: '/blog',
    name: 'blog',
    component: _blog["default"]
  }, {
    path: '/services',
    name: 'services',
    component: _services["default"]
  }, {
    path: '/contact',
    name: 'contact',
    component: _contact["default"]
  }]
});

exports["default"] = _default;