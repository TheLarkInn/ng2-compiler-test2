"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* This file is generated by the Angular 2 template compiler.
* Do not edit.
*/
var import0 = require('@angular/core/src/linker/debug_context');
var import1 = require('./test');
var import3 = require('@angular/core/src/linker/view');
var import4 = require('./app');
var import5 = require('@angular/core/src/linker/element');
var import6 = require('@angular/core/src/linker/view_utils');
var import8 = require('@angular/core/src/linker/view_type');
var import9 = require('@angular/core/src/change_detection/change_detection');
var import10 = require('./test.ngfactory');
var import11 = require('@angular/core/src/metadata/view');
var import12 = require('@angular/core/src/linker/component_factory');
var styles_App = [];
var nodeDebugInfos_App0 = [
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([import1.TestComponent], import1.TestComponent, {}),
    new import0.StaticNodeDebugInfo([], null, {})
];
var renderType_App = null;
var _View_App0 = (function (_super) {
    __extends(_View_App0, _super);
    function _View_App0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_App0, renderType_App, import8.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import9.ChangeDetectionStrategy.CheckAlways, nodeDebugInfos_App0);
    }
    _View_App0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n	  ', this.debug(0, 0, 0));
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', this.debug(1, 1, 3));
        this._text_2 = this.renderer.createText(this._el_1, '', this.debug(2, 1, 8));
        this._text_3 = this.renderer.createText(parentRenderNode, '\n	  ', this.debug(3, 1, 28));
        this._el_4 = this.renderer.createElement(parentRenderNode, 'test-component', this.debug(4, 2, 3));
        this._appEl_4 = new import5.AppElement(4, null, this, this._el_4);
        var compView_4 = import10.viewFactory_TestComponent0(this.viewUtils, this.injector(4), this._appEl_4);
        this._TestComponent_4_4 = new import1.TestComponent();
        this._appEl_4.initComponent(this._TestComponent_4_4, [], compView_4);
        compView_4.create(this._TestComponent_4_4, [], null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n	', this.debug(5, 2, 36));
        this._expr_0 = import9.uninitialized;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._el_4,
            this._text_5
        ], [], []);
        return null;
    };
    _View_App0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.TestComponent) && (4 === requestNodeIndex))) {
            return this._TestComponent_4_4;
        }
        return notFoundResult;
    };
    _View_App0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(2, 1, 8);
        var currVal_0 = import6.interpolate(1, 'Hello ', this.context.name, '');
        if (import6.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_2, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_App0;
}(import3.DebugAppView));
function viewFactory_App0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_App === null)) {
        (renderType_App = viewUtils.createRenderComponentType('/Users/robwormald/Dev/demos/ng2-compiler-test2/src/app.ts class App - inline template', 0, import11.ViewEncapsulation.None, styles_App));
    }
    return new _View_App0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_App0 = viewFactory_App0;
var styles_App_Host = [];
var nodeDebugInfos_App_Host0 = [new import0.StaticNodeDebugInfo([import4.App], import4.App, {})];
var renderType_App_Host = null;
var _View_App_Host0 = (function (_super) {
    __extends(_View_App_Host0, _super);
    function _View_App_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_App_Host0, renderType_App_Host, import8.ViewType.HOST, viewUtils, parentInjector, declarationEl, import9.ChangeDetectionStrategy.CheckAlways, nodeDebugInfos_App_Host0);
    }
    _View_App_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('test-app', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_App0(this.viewUtils, this.injector(0), this._appEl_0);
        this._App_0_4 = new import4.App();
        this._appEl_0.initComponent(this._App_0_4, [], compView_0);
        compView_0.create(this._App_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_App_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import4.App) && (0 === requestNodeIndex))) {
            return this._App_0_4;
        }
        return notFoundResult;
    };
    return _View_App_Host0;
}(import3.DebugAppView));
function viewFactory_App_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_App_Host === null)) {
        (renderType_App_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.Emulated, styles_App_Host));
    }
    return new _View_App_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppNgFactory = new import12.ComponentFactory('test-app', viewFactory_App_Host0, import4.App);