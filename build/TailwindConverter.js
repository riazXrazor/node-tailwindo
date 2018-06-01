'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _helpers = require('./helpers');

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function TailwindConverter($givencontent) {
        _classCallCheck(this, TailwindConverter);

        this.givenContent = '';

        this.isCssClassesOnly = false;

        this.changes = 0;

        this.lastSearches = [];

        this.mediaOptions = {
            'xs': 'sm',
            'sm': 'sm',
            'md': 'md',
            'lg': 'lg',
            'xl': 'xl'
        };

        this.grid = {
            '1': '1/6',
            '2': '1/5',
            '3': '1/4',
            '4': '1/3',
            '5': '2/5',
            '6': '1/2',
            '7': '3/5',
            '8': '2/3',
            '9': '3/4',
            '10': '4/5',
            '11': '5/6',
            '12': 'full'
        };

        this.colors = {
            'primary': 'blue',
            'secondary': 'grey',
            'success': 'green',
            'danger': 'red',
            'warning': 'yellow',
            'info': 'teal',
            'light': 'grey-lightest',
            'dark': 'black',
            'white': 'white',
            'muted': 'grey'
        };

        if ($givencontent) {
            this.givenContent = $givencontent;
        }

        return this;
    }

    /**
    * Set the content.
    *
    * @param string $content
    *
    * @return Converter
    */


    _createClass(TailwindConverter, [{
        key: 'setContent',
        value: function setContent($content) {
            this.givenContent = $content;

            return this;
        }

        /**
         * Is the given content a CSS content or HTML content.
         *
         * @param bool $value
         *
         * @return Converter
         */

    }, {
        key: 'classesOnly',
        value: function classesOnly($value) {
            this.isCssClassesOnly = $value;

            return this;
        }

        /**
         * Run the conversion.
         *
         * @return Converter
         */

    }, {
        key: 'convert',
        value: function convert() {
            this.convertGeneral();
            this.convertGrid();
            this.convertBorders();
            this.convertMediaObject();
            this.convertColors();
            this.convertDisplay();
            this.convertSizing();
            this.convertFlexElements();
            this.convertSpacing();
            this.convertText();
            this.convertFloats();
            this.convertPositioning();
            this.convertVisibility();
            this.convertAlerts();
            this.convertVerticalAlignment();
            this.convertBadges();
            this.convertBreadcrumb();
            this.convertButtons();
            this.convertCards();
            this.convertDropdowns();
            this.convertForms();
            this.convertInputGroups();
            this.convertListGroups();
            this.convertModals();
            this.convertNavs();
            this.convertPagination();

            return this;
        }

        /**
         * Get the converted content.
         *
         * @return string
         */

    }, {
        key: 'get',
        value: function get() {
            return this.givenContent;
        }

        /**
         * Get the number of comitted changes.
         *
         * @return int
         */

    }, {
        key: 'changes',
        value: function changes() {
            return this.changes;
        }

        /**
         * Convert main elements.
         *
         * @return null
         */

    }, {
        key: 'convertGeneral',
        value: function convertGeneral() {
            var _$mainClasses,
                _this = this;

            var $mainClasses = (_$mainClasses = {
                'container-fluid': 'container mx-auto',
                'container': 'container mx-auto',

                //http://getbootstrap.com/docs/4.0/utilities/close-icon/
                'close': '',

                //http://getbootstrap.com/docs/4.0/utilities/embed/
                'embed-responsive': '',
                'embed-responsive-item': '',
                'embed-responsive-21by9': '',
                'embed-responsive-16by9': '',
                'embed-responsive-4by3': '',
                'embed-responsive-1by1': '',

                //http://getbootstrap.com/docs/4.0/utilities/image-replacement/
                'text-hide': '',

                //http://getbootstrap.com/docs/4.0/utilities/screenreaders/
                'sr-only': '',
                'sr-only-focusable': '',

                //http://getbootstrap.com/docs/4.0/content/images/
                'img-fluid': 'max-w-full h-auto',
                'img-thumbnail': 'max-w-full h-auto border-1 border-grey rounded p-1',

                //http://getbootstrap.com/docs/4.0/content/tables/
                'table': 'w-full max-w-full mb-4 bg-transparent',
                'table-sm': 'p-1',
                // 'table-bordered' : '',
                // 'table-striped' : '',
                'table-responsive': 'block w-full overflow-auto scrolling-touch',
                'table-responsive-{regex_string}': 'block w-full overflow-auto scrolling-touch',

                //http://getbootstrap.com/docs/4.0/content/figures/
                'figure': 'inline-block mb-4',
                'figure-img': 'mb-2 leading-none',
                'figure-caption': 'text-grey',

                'fade': 'opacity-0',
                'show': 'opacity-100 block', //need to be checked
                'disabled': 'opacity-75',

                //http://getbootstrap.com/docs/4.0/components/collapse/
                // 'collapse' : 'hidden',
                'collapsing': 'relative h-0 overflow-hidden ' }, _defineProperty(_$mainClasses, 'close', 'absolute pin-t pin-b pin-r px-4 py-3'), _defineProperty(_$mainClasses, 'jumbotron', 'py-8 px-4 mb-8 bg-grey-lighter rounded'), _defineProperty(_$mainClasses, 'jumbotron-fluid', 'pr-0 pl-0 rounded-none'), _$mainClasses);

            var $mainClassesEachScreen = {
                //name-{screen}-someting
            };

            _lodash2.default.each($mainClasses, function ($twClass, $btClass) {
                return _this.searchAndReplace($btClass, $twClass);
            });

            _lodash2.default.each($mainClassesEachScreen, function ($twClass, $btClass) {
                _lodash2.default.each(_this.mediaOptions, function ($twMedia, $btMedia) {
                    _this.searchAndReplace($btMedia.replace($btClass, '{screen}'), $twMedia.replace($twMedia, '{screen}'));
                });
            });
        }

        /**
         * Convert grid elements.
         *
         * @return null
         */

    }, {
        key: 'convertGrid',
        value: function convertGrid() {
            var _this2 = this;

            this.searchAndReplace('row', 'flex flex-wrap');
            this.searchAndReplace('col', 'flex-grow');

            //col-(xs|sm|md|lg|xl) = (sm|md|lg|xl):flex-grow
            //ml-(xs|sm|md|lg|xl)-auto = (sm|md|lg|xl):mx-auto:ml-auto
            //mr-(xs|sm|md|lg|xl)-auto = (sm|md|lg|xl):mx-auto:mr-auto

            _lodash2.default.each(this.mediaOptions, function ($twMedia, $btMedia) {

                _this2.searchAndReplace('col-' + $btMedia, $twMedia + ':flex-grow');
                _this2.searchAndReplace('ml-' + $btMedia + '-auto', $twMedia + ':ml-auto');
                _this2.searchAndReplace('mr-' + $btMedia + '-auto', $twMedia + ':mr-auto');

                //col-btElem
                //col-(xs|sm|md|lg|xl)-btElem = (sm|md|lg|xl):w-twElem
                //offset-(xs|sm|md|lg|xl)-btElem = (sm|md|lg|xl):mx-auto
                _lodash2.default.each(_this2.grid, function ($twElem, $btElem) {
                    if ($btMedia === 'xs') {
                        _this2.searchAndReplace('col-' + $btElem, 'w-' + $twElem);
                    }

                    _this2.searchAndReplace('col-' + $btMedia + '-' + $btElem, $twMedia + ':w-' + $twElem + ' pr-4 pl-4');

                    //might work :)
                    _this2.searchAndReplace('offset-' + $btMedia + '-' + $btElem, $twMedia + ':mx-' + $twElem);
                });
            });
        }
    }, {
        key: 'convertMediaObject',
        value: function convertMediaObject() {
            //http://getbootstrap.com/docs/4.0/layout/media-object/
        }
    }, {
        key: 'convertBorders',
        value: function convertBorders() {
            var _this3 = this;

            _lodash2.default.each({
                'top': 't',
                'right': 'r',
                'bottom': 'b',
                'left': 'l'
            }, function ($twSide, $btSide) {
                _this3.searchAndReplace('border-' + $btSide, 'border-' + $twSide);
                _this3.searchAndReplace('border-' + $btSide + '-0', 'border-' + $twSide + '-0');
            });

            _lodash2.default.each(this.colors, function ($twColor, $btColor) {
                return _this3.searchAndReplace('border-' + $btColor, 'border-' + $twColor);
            });

            _lodash2.default.each({
                'top': 't',
                'right': 'r',
                'bottom': 'b',
                'left': 'l',
                'circle': 'full',
                '0': 'none'
            }, function ($twStyle, $btStyle) {
                return _this3.searchAndReplace('rounded-' + $btStyle, 'rounded-' + $twStyle);
            });
        }
    }, {
        key: 'convertColors',
        value: function convertColors() {
            var _this4 = this;

            _lodash2.default.each(this.colors, function ($twColor, $btColor) {
                _this4.searchAndReplace('text-' + $btColor, 'text-' + $twColor);
                _this4.searchAndReplace('bg-' + $btColor, 'bg-' + $twColor);
                _this4.searchAndReplace('table-' + $btColor, 'bg-' + $twColor);
                // this.searchAndReplace('bg-gradient-'+$btColor, 'bg-'+$twColor);
            });
        }
    }, {
        key: 'convertDisplay',
        value: function convertDisplay() {
            var _this5 = this;

            //.d-none
            //.d-{sm,md,lg,xl}-none

            _lodash2.default.each({
                'none': 'hidden',
                'inline': 'inline',
                'inline-block': 'inline-block',
                'block': 'block',
                'table': 'table',
                'table-cell': 'table-cell',
                'flex': 'flex',
                'inline-flex': 'inline-flex'
            }, function ($twElem, $btElem) {
                _this5.searchAndReplace('d-' + $btElem, $twElem);

                _lodash2.default.each(_this5.mediaOptions, function ($twMedia, $btMedia) {
                    return _this5.searchAndReplace('d-' + $btMedia + '-' + $btElem, $twMedia + ':' + $twElem);
                });
            });
        }
    }, {
        key: 'convertFlexElements',
        value: function convertFlexElements() {
            var _this6 = this;

            this.mediaOptions[''] = '';
            _lodash2.default.each(this.mediaOptions, function ($twMedia, $btMedia) {

                _lodash2.default.each(['row', 'row-reverse', 'col', 'col-reverse'], function ($key) {
                    return _this6.searchAndReplace('flex' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-' + $key, (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'flex-' + $key);
                });
                _lodash2.default.each(['start', 'end', 'center', 'between', 'around'], function ($key) {
                    return _this6.searchAndReplace('justify-content' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-' + $key, (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'justify-' + $key);
                });
                _lodash2.default.each(['start', 'end', 'center', 'stretch', 'baseline'], function ($key) {
                    return _this6.searchAndReplace('align-items' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-' + $key, (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'align-' + $key);
                });
                _lodash2.default.each(['start', 'end', 'center', 'stretch', 'baseline'], function ($key) {
                    return _this6.searchAndReplace('align-content' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-' + $key, (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'content-' + $key);
                });
                _lodash2.default.each(['start', 'end', 'center', 'stretch', 'baseline'], function ($key) {
                    return _this6.searchAndReplace('align-self' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-' + $key, (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'self-' + $key);
                });

                _this6.searchAndReplace('flex' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-wrap', (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'flex-wrap');
                _this6.searchAndReplace('flex' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-wrap-reverse', (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'flex-wrap-reverse');
                _this6.searchAndReplace('flex' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-nowrap', (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'flex-no-wrap');

                _this6.searchAndReplace('flex' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-nowrap', (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'flex-no-wrap');
                _lodash2.default.each(_lodash2.default.range(1, 12), function ($order) {
                    return _this6.searchAndReplace('order' + (_lodash2.default.isEmpty($btMedia) ? '' : '-').$btMedia + '-' + $order, '');
                });
            });
        }
    }, {
        key: 'convertSizing',
        value: function convertSizing() {
            var _this7 = this;

            _lodash2.default.each({
                '25': '1/4',
                '50': '1/2',
                '75': '3/4',
                '100': 'full'
            }, function ($twClass, $btClass) {
                _this7.searchAndReplace('w-' + $btClass, 'w-' + $twClass);
                //no percentages in TW for heights except for full
                if ($btClass === '100') {
                    _this7.searchAndReplace('h-' + $btClass, 'h-' + $twClass);
                }
            });

            this.searchAndReplace('mw-100', 'max-w-full');
            this.searchAndReplace('mh-100', 'max-h-full');
        }
    }, {
        key: 'convertSpacing',
        value: function convertSpacing() {
            var _this8 = this;

            _lodash2.default.each(this.mediaOptions, function ($twMedia, $btMedia) {
                _this8.searchAndReplace('m-' + $btMedia + '-{regex_number}', $twMedia + ':m-{regex_number}');
                _this8.searchAndReplace('m{regex_string}-' + $btMedia + '-{regex_number}', $twMedia + ':m{regex_string}-{regex_number}');
                _this8.searchAndReplace('p-' + $btMedia + '-{regex_number}', $twMedia + ':p-{regex_number}');
                _this8.searchAndReplace('p{regex_string}-' + $btMedia + '-{regex_number}', $twMedia + ':p {regex_string}-{regex_number}');
            });
        }
    }, {
        key: 'convertText',
        value: function convertText() {
            var _this9 = this;

            this.mediaOptions[''] = '';
            _lodash2.default.each(this.mediaOptions, function ($twMedia, $btMedia) {
                _this9.searchAndReplace('text' + (_lodash2.default.isEmpty($btMedia) ? '' : '-') + '-' + $btMedia + '-left', (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'text-left');
                _this9.searchAndReplace('text' + (_lodash2.default.isEmpty($btMedia) ? '' : '-') + '-' + $btMedia + '-right', (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'text-right');
                _this9.searchAndReplace('text' + (_lodash2.default.isEmpty($btMedia) ? '' : '-') + '-' + $btMedia + '-center', (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'text-center');
                _this9.searchAndReplace('text' + (_lodash2.default.isEmpty($btMedia) ? '' : '-') + '-' + $btMedia + '-justify', (_lodash2.default.isEmpty($twMedia) ? '' : $twMedia + ':') + 'text-justify');
            });

            this.searchAndReplace('text-nowrap', 'whitespace-no-wrap');
            this.searchAndReplace('text-truncate', 'truncate');

            this.searchAndReplace('text-lowercase', 'lowercase');
            this.searchAndReplace('text-uppercase', 'uppercase');
            this.searchAndReplace('text-capitalize', 'capitalize');

            this.searchAndReplace('initialism', '');
            this.searchAndReplace('lead', 'text-lg font-light');
            this.searchAndReplace('small', 'text-sm');
            this.searchAndReplace('mark', '');
            this.searchAndReplace('display-1', 'text-xl');
            this.searchAndReplace('display-2', 'text-2xl');
            this.searchAndReplace('display-3', 'text-3xl');
            this.searchAndReplace('display-4', 'text-4xl');

            this.searchAndReplace('h-1', 'mb-2 font-medium leading-tight text-4xl');
            this.searchAndReplace('h-2', 'mb-2 font-medium leading-tight text-3xl');
            this.searchAndReplace('h-3', 'mb-2 font-medium leading-tight text-2xl');
            this.searchAndReplace('h-4', 'mb-2 font-medium leading-tight text-xl');
            this.searchAndReplace('h-5', 'mb-2 font-medium leading-tight text-lg');
            this.searchAndReplace('h-6', 'mb-2 font-medium leading-tight text-base');

            this.searchAndReplace('blockquote', 'mb-6 text-lg');
            this.searchAndReplace('blockquote-footer', 'block text-grey');

            this.searchAndReplace('font-weight-bold', 'font-bold');
            this.searchAndReplace('font-weight-normal', 'font-normal');
            this.searchAndReplace('font-weight-light', 'font-light');
            this.searchAndReplace('font-italic', 'italic');
        }
    }, {
        key: 'convertFloats',
        value: function convertFloats() {
            var _this10 = this;

            _lodash2.default.each(this.mediaOptions, function ($twMedia, $btMedia) {
                return _lodash2.default.each(['left', 'right', 'none'], function ($alignment) {
                    return _this10.searchAndReplace('float-' + $btMedia + '-' + $alignment, $twMedia + ':float-' + $alignment);
                });
            });
        }
    }, {
        key: 'convertPositioning',
        value: function convertPositioning() {
            var _this11 = this;

            _lodash2.default.each({
                'position-static': 'static',
                'position-relative': 'relative',
                'position-absolute': 'absolute',
                'position-fixed': 'fixed',
                'position-sticky': '',
                'fixed-top': 'pin-t',
                'fixed-bottom': 'pin-b'
            }, function ($twPosition, $btPosition) {
                return _this11.searchAndReplace($btPosition, $twPosition);
            });
        }
    }, {
        key: 'convertVerticalAlignment',
        value: function convertVerticalAlignment() {
            //same
            // foreach ([
            //     'baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'
            // ] as $btAlign: $twAlign) {
            //     this.searchAndReplace('align-'+$btAlign, 'align-'+$twAlign);
            // }
        }
    }, {
        key: 'convertVisibility',
        value: function convertVisibility() {
            //same
        }
    }, {
        key: 'convertAlerts',
        value: function convertAlerts() {
            var _this12 = this;

            this.searchAndReplace('alert', 'relative px-3 py-3 mb-4 border rounded');
            this.searchAndReplace('alert-heading', ''); //color: inherit
            this.searchAndReplace('alert-link', 'font-bold no-underline');
            this.searchAndReplace('alert-dismissible', '');

            _lodash2.default.each(this.colors, function ($twColor, $btColor) {
                return _this12.searchAndReplace('alert-' + $btColor, 'text-' + $twColor + '-darker' + ' border-' + $twColor + '-dark bg-' + $twColor + '-lighter');
            });
        }
    }, {
        key: 'convertBadges',
        value: function convertBadges() {
            var _this13 = this;

            this.searchAndReplace('badge', 'inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded');
            this.searchAndReplace('badge-pill', 'rounded-full py-1 px-3');

            _lodash2.default.each(this.colors, function ($twColor, $btColor) {
                if ($btColor === 'dark') {
                    _this13.searchAndReplace('badge-' + $btColor, 'text-white bg-black');
                } else if ($btColor == 'light') {
                    _this13.searchAndReplace('badge-' + $btColor, 'text-black bg-grey-light');
                } else {
                    _this13.searchAndReplace('badge-' + $btColor, 'text-' + $twColor + '-darker' + ' bg-' + $twColor + '-light');
                }
            });
        }
    }, {
        key: 'convertBreadcrumb',
        value: function convertBreadcrumb() {
            this.searchAndReplace('breadcrumb', 'flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-grey-light rounded');
            this.searchAndReplace('breadcrumb-item', 'inline-block px-2 py-2 text-grey-dark');
        }
    }, {
        key: 'convertButtons',
        value: function convertButtons() {
            var _this14 = this;

            this.searchAndReplace('btn', 'inline-block align-middle text-center select-none border font-normal whitespace-no-wrap py-2 px-4 rounded text-base leading-normal no-underline');
            this.searchAndReplace('btn-group', 'relative inline-flex align-middle');
            this.searchAndReplace('btn-group-vertical', 'relative inline-flex align-middle flex-col items-start justify-center');
            this.searchAndReplace('btn-toolbar', 'flex flex-wrap justify-start');
            this.searchAndReplace('btn-link', 'font-normal blue bg-transparent');
            this.searchAndReplace('btn-block', 'block w-full');

            _lodash2.default.each({
                'sm': 'py-1 px-2 text-sm leading-tight',
                'lg': 'py-3 px-4 text-xl leading-tight'
            }, function ($twClasses, $btMedia) {
                _this14.searchAndReplace('btn-' + $btMedia, $twClasses);
                _this14.searchAndReplace('btn-group-' + $btMedia, $twClasses);
            });

            _lodash2.default.each(this.colors, function ($twColor, $btColor) {
                _this14.searchAndReplace('btn-' + $btColor, 'text-' + $twColor + '-lightest bg-' + $twColor + ' hover:bg-' + $twColor + '-light');
                _this14.searchAndReplace('btn-outline-' + $btColor, 'text-' + $twColor + '-dark border-' + $twColor + ' bg-white hover:bg-' + $twColor + '-light hover:text-' + $twColor + '-darker');
            });
        }
    }, {
        key: 'convertCards',
        value: function convertCards() {
            this.searchAndReplace('card', 'relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-grey-light');
            this.searchAndReplace('card-body', 'flex-auto p-6');
            this.searchAndReplace('card-title', 'mb-3');
            this.searchAndReplace('card-text', 'mb-0');
            this.searchAndReplace('card-subtitle', '-mt-2 mb-0');
            this.searchAndReplace('card-link', 'ml-6');
            this.searchAndReplace('card-header', 'py-3 px-6 mb-0 bg-grey-lighter border-b-1 border-grey-light text-grey-darkest');
            this.searchAndReplace('card-footer', 'py-3 px-6 bg-grey-lighter border-t-1 border-grey-light');
            this.searchAndReplace('card-header-tabs', 'border-b-0 -ml-2 -mb-3');
            this.searchAndReplace('card-header-pills', '-ml-3 -mr-3');
            this.searchAndReplace('card-img-overlay', 'absolute pin-y pin-x p-6');
            this.searchAndReplace('card-img', 'w-full rounded');
            this.searchAndReplace('card-img-top', 'w-full rounded rounded-t');
            this.searchAndReplace('card-img-bottom', 'w-full rounded rounded-b');
            this.searchAndReplace('card-deck', 'flex flex-col sm:flex-wrap sm:-ml-1 sm:-mr-1');
            this.searchAndReplace('card-group', 'flex flex-col');
        }
    }, {
        key: 'convertDropdowns',
        value: function convertDropdowns() {
            this.searchAndReplace('dropdown', 'relative');
            this.searchAndReplace('dropup', 'relative');
            this.searchAndReplace('dropdown-toggle', ' inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1');
            this.searchAndReplace('dropdown-menu', ' absolute pin-l z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-grey-light rounded');
            this.searchAndReplace('dropdown-divider', 'h-0 my-2 overflow-hidden border-t-1 border-grey-light');
            this.searchAndReplace('dropdown-item', 'block w-full py-1 px-6 font-normal text-grey-darkest whitespace-no-wrap border-0');
            this.searchAndReplace('dropdown-header', 'block py-2 px-6 mb-0 text-sm text-greay-dark whitespace-no-wrap');
        }
    }, {
        key: 'convertForms',
        value: function convertForms() {
            this.searchAndReplace('form-group', 'mb-4');
            this.searchAndReplace('form-control', 'block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-grey-darker border border-grey rounded');
            this.searchAndReplace('form-control-lg', 'py-2 px-4 text-lg leading-normal rouned');
            this.searchAndReplace('form-control-sm', 'py-1 px-2 text-sm leading-normal rouned');
            this.searchAndReplace('form-control-file', 'block appearance-none');
            this.searchAndReplace('form-control-range', 'block appearance-none');

            this.searchAndReplace('form-inline', 'flex items-center');

            this.searchAndReplace('col-form-label', 'pt-2 pb-2 mb-0 leading-normal');
            this.searchAndReplace('col-form-label-lg', 'pt-3 pb-3 mb-0 leading-normal');
            this.searchAndReplace('col-form-label-sm', 'pt-1 pb-1 mb-0 leading-normal');

            this.searchAndReplace('col-form-legend', 'pt-2 pb-2 mb-0 text-base');
            this.searchAndReplace('col-form-plaintext', 'pt-2 pb-2 mb-0 leading-normal bg-transparent border-transparent border-r-0 border-l-0 border-t-1 border-b-1');

            this.searchAndReplace('form-text', 'block mt-1');
            this.searchAndReplace('form-row', 'flex flex-wrap -mr-1 -ml-1');
            this.searchAndReplace('form-check', 'relative block mb-2');
            this.searchAndReplace('form-check-label', 'text-grey-dark pl-6 mb-0');
            this.searchAndReplace('form-check-input', 'absolute mt-1 -ml-6');

            this.searchAndReplace('form-check-inline', 'inline-block mr-2');
            this.searchAndReplace('valid-feedback', 'hidden mt-1 text-sm text-green');
            this.searchAndReplace('valid-tooltip', 'absolute z-10 hidden w-4 font-normal leading-noraml text-white rounded p-2 bg-green-dark');
            this.searchAndReplace('is-valid', 'bg-green-dark');
            this.searchAndReplace('invalid-feedback', 'hidden mt-1 text-sm text-red');
            this.searchAndReplace('invalid-tooltip', 'absolute z-10 hidden w-4 font-normal leading-noraml text-white rounded p-2 bg-red-dark');
            this.searchAndReplace('is-invalid', 'bg-red-dark');
        }
    }, {
        key: 'convertInputGroups',
        value: function convertInputGroups() {
            this.searchAndReplace('input-group', 'relative flex items-stretch w-full');
            this.searchAndReplace('input-group-addon', 'py-1 px-2 mb-1 text-base font-normal leading-normal text-grey-darkest text-center bg-grey-light border border-4 border-grey-lighter rounded');
            this.searchAndReplace('input-group-addon-lg', 'py-2 px-3 mb-0 text-lg');
            this.searchAndReplace('input-group-addon-sm', 'py-3 px-4 mb-0 text-lg');
        }
    }, {
        key: 'convertListGroups',
        value: function convertListGroups() {
            var _this15 = this;

            this.searchAndReplace('list-group', 'flex flex-col pl-0 mb-0 border rounded border-grey-light');
            this.searchAndReplace('list-group-item-action', 'w-fill');
            this.searchAndReplace('list-group-item', 'relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-grey-light no-underline');
            this.searchAndReplace('list-group-flush', '');
            _lodash2.default.each(this.colors, function ($twColor, $btColor) {
                if ($btColor === 'dark') {
                    _this15.searchAndReplace('list-group-item-' + $btColor, 'text-white bg-grey-dark');
                } else if ($btColor == 'light') {
                    _this15.searchAndReplace('list-group-item-' + $btColor, 'text-black bg-grey-light');
                } else {
                    _this15.searchAndReplace('list-group-item-' + $btColor, 'bg-' + $twColor + '-lighter text-' + $twColor + '-darkest');
                }
            });
        }
    }, {
        key: 'convertModals',
        value: function convertModals() {
            //TODO
        }
    }, {
        key: 'convertNavs',
        value: function convertNavs() {
            this.searchAndReplace('nav', 'flex flex-wrap list-reset pl-0 mb-0');
            this.searchAndReplace('nav-tabs', 'border border-t-0 border-r-0 border-l-0 border-b-1 border-grey-light');
            this.searchAndReplace('nav-pills', '');
            this.searchAndReplace('nav-fill', '');
            this.searchAndReplace('nav-justified', '');

            var $navLinkClasses = 'inline-block py-2 px-4 no-underline';
            var $navItemClasses = '';

            if (this.isInLastSearches('nav-tabs', 5)) {
                $navLinkClasses += ' border border-b-0 mx-1 rounded rounded-t';
                $navItemClasses += '-mb-px';
            }

            if (this.isInLastSearches('nav-pills', 5)) {
                $navLinkClasses += ' border border-blue bg-blue rounded text-white mx-1';
            }

            if (this.isInLastSearches('nav-fill', 5)) {
                $navItemClasses += ' flex-auto text-center';
            }

            if (this.isInLastSearches('nav-justified', 5)) {
                $navItemClasses += ' flex-grow text-center';
            }

            this.searchAndReplace('nav-link', $navLinkClasses);
            this.searchAndReplace('nav-item', $navItemClasses);

            this.searchAndReplace('navbar', 'relative flex flex-wrap items-center content-between py-2 px-4');
            this.searchAndReplace('navbar-brand', 'inline-block pt-1 pb-1 mr-4 text-lg whitespace-nowrap');
            this.searchAndReplace('navbar-nav', 'flex flex-wrap list-reset pl-0 mb-0');
            this.searchAndReplace('navbar-text', 'inline-block pt-2 pb-2');
            this.searchAndReplace('navbar-collapse', 'flex-grow items-center');
            this.searchAndReplace('navbar-expand', 'flex-no-wrap content-start');
            this.searchAndReplace('navbar-expand-{regex_string}', '');
            this.searchAndReplace('navbar-toggler', 'py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded');
        }
    }, {
        key: 'convertPagination',
        value: function convertPagination() {
            this.searchAndReplace('pagination', 'flex list-reset pl-0 rounded');
            this.searchAndReplace('pagination-lg', 'text-xl');
            this.searchAndReplace('pagination-sm', 'text-sm');
            this.searchAndReplace('page-link', 'relative block py-2 px-3 -ml-px leading-normal text-blue bg-white border border-grey no-underline hover:text-blue-darker hover:bg-grey-light');
            // this.searchAndReplace('page-link', 'relative block py-2 px-3 -ml-px leading-normal text-blue bg-white border border-grey');
        }

        /**
         * search for a word in the last searches.
         *
         * @param string $searchFor
         * @param int    $limitLast limit the search to last $limitLast items
         *
         * @return bool
         */

    }, {
        key: 'isInLastSearches',
        value: function isInLastSearches($searchFor) {
            var $limitLast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var $i = 0;
            var $return = void 0;
            _lodash2.default.each(this.lastSearches, function ($search) {
                if (_lodash2.default.includes($search, $searchFor)) {
                    $return = true;
                    return false;
                }

                if ($i++ >= $limitLast && $limitLast > 0) {
                    $return = false;
                    return false;
                }
            });
            return $return;
        }

        /**
         * Search the given content and replace.
         *
         * @param string $search
         * @param string $replace
         *
         * @return null
         */

    }, {
        key: 'searchAndReplace',
        value: function searchAndReplace($_search, $replace) {
            var $currentContent = this.givenContent;

            var $regexStart = !this.isCssClassesOnly ? '(?<start>class\s*=\s*["\'].*?)' : '(?<start>\s*)';
            var $regexEnd = !this.isCssClassesOnly ? '(?<end>.*?["\'])' : '(?<end>\s*)';

            var $search = helpers.preg_quote($_search);

            var $currentSubstitute = 0;

            while (true) {
                if ($search.indexOf('\{regex_string\}') !== -1 || $search.indexOf('\{regex_number\}') !== -1) {
                    _lodash2.default.each({ 'regex_string': '[a-zA-Z0-9]+', 'regex_number': '[0-9]+' }, function ($regexValue, $regeName) {
                        $currentSubstitute++;
                        $search = $search.replace(new RegExp('/\\\{' + $regeName + '\\\}/'), '(?<' + $regeName + '_' + $currentSubstitute + '>' + $regexValue + ')');
                        $replace = $replace.replace(new RegExp('/{' + $regeName + '\}/'), '${' + $regeName + '_' + $currentSubstitute + '}');
                    });
                    continue;
                }
                break;
            }

            // console.log($search)
            // console.log($replace)
            // process.exit();

            //class=" given given-md something-given-md"
            this.givenContent = helpers.preg_replace_callback('/' + $regexStart + '(?<given>(?<![\-_.\w\d])' + $search + '(?![\-_.\w\d]))' + $regexEnd + '/i', function ($match) {
                $replace = helpers.preg_replace_callback('/\$\{regex_(\w+)_(\d+)\}/', function ($m) {
                    return $match['regex_' + $m[1] + '_' + $m[2]];
                }, $replace);

                return $match.groups['start'] + $replace + $match.groups['end'];
            }, this.givenContent);

            if ($currentContent.localeCompare(this.givenContent) !== 0) {
                this.changes++;

                this.lastSearches.push(helpers.stripslashes($search));

                if (this.lastSearches.length >= 10) {
                    this.lastSearches = this.lastSearches.slice(-10, 10);
                }
            }
        }
    }]);

    return TailwindConverter;
}();