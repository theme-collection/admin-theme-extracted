(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../../handsontable"));
	else if(typeof define === 'function' && define.amd)
		define(["../../handsontable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../../handsontable")) : factory(root["Handsontable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: Handsoncode
                                                                                                                                                                                                                   * Last updated: Nov 17, 2017
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for Polish - Poland language-country.
                                                                                                                                                                                                                   */


var C = _handsontable2.default.languages.dictionaryKeys;

var dictionary = (_dictionary = {
  languageCode: 'pl-PL'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Wstaw wiersz powy??ej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Wstaw wiersz poni??ej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Wstaw kolumn?? z lewej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Wstaw kolumn?? z prawej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Usu?? wiersz', 'Usu?? wiersze']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Usu?? kolumn??', 'Usu?? kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Cofnij'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Pon??w'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Tylko do odczytu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Wyczy???? kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Wyr??wnanie'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Do lewej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Do ??rodka'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Do prawej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Wyjustuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Do g??ry'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Wy??rodkuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Do do??u'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Zablokuj kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Odblokuj kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Obramowanie'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Kraw??d?? g??rna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Kraw??d?? prawa'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Kraw??d?? dolna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Kraw??d?? lewa'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Usu?? obramowanie(a)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Dodaj komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Edytuj komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Usu?? komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Komentarz tylko do odczytu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Scal kom??rki'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Rozdziel kom??rki'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopiuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Wytnij'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Wstaw wiersz podrz??dny'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Od????cz od nadrz??dnego'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Ukryj kolumn??', 'Ukryj kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Poka?? kolumn??', 'Poka?? kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Ukryj wiersz', 'Ukryj wiersze']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Poka?? wiersz', 'Poka?? wiersze']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Brak'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Kom??rka jest pusta'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Kom??rka nie jest pusta'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Jest r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Jest r????ne od'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Tekst zaczyna si?? od'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Tekst ko??czy si?? na'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Tekst zawiera fragment'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Tekst nie zawiera fragmentu'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Wi??ksze ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Wi??ksze lub r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Mniejsze ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Mniejsze lub r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Jest pomi??dzy'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Nie jest pomi??dzy'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Data p????niejsza ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Data wcze??niejsza ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Dzisiaj'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Jutro'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Wczoraj'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Puste miejsca'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtruj wg warunku'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtruj wg warto??ci'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Oraz'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Lub'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Zaznacz wszystko'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Wyczy????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Anuluj'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Szukaj'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Warto????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Druga warto????'), _dictionary);

_handsontable2.default.languages.registerLanguageDictionary(dictionary);

exports.default = dictionary;

/***/ })

/******/ })["___"];
});