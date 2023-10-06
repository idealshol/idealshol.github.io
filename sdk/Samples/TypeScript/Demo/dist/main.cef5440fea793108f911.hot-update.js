"use strict";
self["webpackHotUpdate"]("main",{

/***/ "../../../Framework/src/model/cubismusermodel.ts":
/*!*******************************************************!*\
  !*** ../../../Framework/src/model/cubismusermodel.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismUserModel = void 0;
var cubismbreath_1 = __webpack_require__(/*! ../effect/cubismbreath */ "../../../Framework/src/effect/cubismbreath.ts");
var cubismeyeblink_1 = __webpack_require__(/*! ../effect/cubismeyeblink */ "../../../Framework/src/effect/cubismeyeblink.ts");
var cubismpose_1 = __webpack_require__(/*! ../effect/cubismpose */ "../../../Framework/src/effect/cubismpose.ts");
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismmodelmatrix_1 = __webpack_require__(/*! ../math/cubismmodelmatrix */ "../../../Framework/src/math/cubismmodelmatrix.ts");
var cubismtargetpoint_1 = __webpack_require__(/*! ../math/cubismtargetpoint */ "../../../Framework/src/math/cubismtargetpoint.ts");
var cubismexpressionmotion_1 = __webpack_require__(/*! ../motion/cubismexpressionmotion */ "../../../Framework/src/motion/cubismexpressionmotion.ts");
var cubismmotion_1 = __webpack_require__(/*! ../motion/cubismmotion */ "../../../Framework/src/motion/cubismmotion.ts");
var cubismmotionmanager_1 = __webpack_require__(/*! ../motion/cubismmotionmanager */ "../../../Framework/src/motion/cubismmotionmanager.ts");
var cubismphysics_1 = __webpack_require__(/*! ../physics/cubismphysics */ "../../../Framework/src/physics/cubismphysics.ts");
var cubismrenderer_webgl_1 = __webpack_require__(/*! ../rendering/cubismrenderer_webgl */ "../../../Framework/src/rendering/cubismrenderer_webgl.ts");
var cubismdebug_1 = __webpack_require__(/*! ../utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var cubismmoc_1 = __webpack_require__(/*! ./cubismmoc */ "../../../Framework/src/model/cubismmoc.ts");
var cubismmodeluserdata_1 = __webpack_require__(/*! ./cubismmodeluserdata */ "../../../Framework/src/model/cubismmodeluserdata.ts");
var CubismUserModel = (function () {
    function CubismUserModel() {
        this.loadMotion = function (buffer, size, name, onFinishedMotionHandler) { return cubismmotion_1.CubismMotion.create(buffer, size, onFinishedMotionHandler); };
        this._moc = null;
        this._model = null;
        this._motionManager = null;
        this._expressionManager = null;
        this._eyeBlink = null;
        this._breath = null;
        this._modelMatrix = null;
        this._pose = null;
        this._dragManager = null;
        this._physics = null;
        this._modelUserData = null;
        this._initialized = false;
        this._updating = false;
        this._opacity = 1.0;
        this._lipsync = true;
        this._lastLipSyncValue = 0.0;
        this._dragX = 0.0;
        this._dragY = 0.0;
        this._accelerationX = 0.0;
        this._accelerationY = 0.0;
        this._accelerationZ = 0.0;
        this._debugMode = false;
        this._renderer = null;
        this._motionManager = new cubismmotionmanager_1.CubismMotionManager();
        this._motionManager.setEventCallback(CubismUserModel.cubismDefaultMotionEventCallback, this);
        this._expressionManager = new cubismmotionmanager_1.CubismMotionManager();
        this._dragManager = new cubismtargetpoint_1.CubismTargetPoint();
    }
    CubismUserModel.prototype.isInitialized = function () {
        return this._initialized;
    };
    CubismUserModel.prototype.setInitialized = function (v) {
        this._initialized = v;
    };
    CubismUserModel.prototype.isUpdating = function () {
        return this._updating;
    };
    CubismUserModel.prototype.setUpdating = function (v) {
        this._updating = v;
    };
    CubismUserModel.prototype.setDragging = function (x, y) {
        this._dragManager.set(x, y);
    };
    CubismUserModel.prototype.setAcceleration = function (x, y, z) {
        this._accelerationX = x;
        this._accelerationY = y;
        this._accelerationZ = z;
    };
    CubismUserModel.prototype.getModelMatrix = function () {
        return this._modelMatrix;
    };
    CubismUserModel.prototype.setOpacity = function (a) {
        this._opacity = a;
    };
    CubismUserModel.prototype.getOpacity = function () {
        return this._opacity;
    };
    CubismUserModel.prototype.loadModel = function (buffer) {
        this._moc = cubismmoc_1.CubismMoc.create(buffer);
        this._model = this._moc.createModel();
        this._model.saveParameters();
        if (this._moc == null || this._model == null) {
            (0, cubismdebug_1.CubismLogError)('Failed to CreateModel().');
            return;
        }
        this._modelMatrix = new cubismmodelmatrix_1.CubismModelMatrix(this._model.getCanvasWidth(), this._model.getCanvasHeight());
    };
    CubismUserModel.prototype.loadExpression = function (buffer, size, name) {
        return cubismexpressionmotion_1.CubismExpressionMotion.create(buffer, size);
    };
    CubismUserModel.prototype.loadPose = function (buffer, size) {
        this._pose = cubismpose_1.CubismPose.create(buffer, size);
    };
    CubismUserModel.prototype.loadUserData = function (buffer, size) {
        this._modelUserData = cubismmodeluserdata_1.CubismModelUserData.create(buffer, size);
    };
    CubismUserModel.prototype.loadPhysics = function (buffer, size) {
        this._physics = cubismphysics_1.CubismPhysics.create(buffer, size);
    };
    CubismUserModel.prototype.isHit = function (drawableId, pointX, pointY) {
        var drawIndex = this._model.getDrawableIndex(drawableId);
        if (drawIndex < 0) {
            return false;
        }
        var count = this._model.getDrawableVertexCount(drawIndex);
        var vertices = this._model.getDrawableVertices(drawIndex);
        var left = vertices[0];
        var right = vertices[0];
        var top = vertices[1];
        var bottom = vertices[1];
        for (var j = 1; j < count; ++j) {
            var x = vertices[live2dcubismframework_1.Constant.vertexOffset + j * live2dcubismframework_1.Constant.vertexStep];
            var y = vertices[live2dcubismframework_1.Constant.vertexOffset + j * live2dcubismframework_1.Constant.vertexStep + 1];
            if (x < left) {
                left = x;
            }
            if (x > right) {
                right = x;
            }
            if (y < top) {
                top = y;
            }
            if (y > bottom) {
                bottom = y;
            }
        }
        var tx = this._modelMatrix.invertTransformX(pointX);
        var ty = this._modelMatrix.invertTransformY(pointY);
        console.log("4");
        return left <= tx && tx <= right && top <= ty && ty <= bottom;
    };
    CubismUserModel.prototype.getModel = function () {
        return this._model;
    };
    CubismUserModel.prototype.getRenderer = function () {
        return this._renderer;
    };
    CubismUserModel.prototype.createRenderer = function () {
        if (this._renderer) {
            this.deleteRenderer();
        }
        this._renderer = new cubismrenderer_webgl_1.CubismRenderer_WebGL();
        this._renderer.initialize(this._model);
    };
    CubismUserModel.prototype.deleteRenderer = function () {
        if (this._renderer != null) {
            this._renderer.release();
            this._renderer = null;
        }
    };
    CubismUserModel.prototype.motionEventFired = function (eventValue) {
        (0, cubismdebug_1.CubismLogInfo)('{0}', eventValue.s);
    };
    CubismUserModel.cubismDefaultMotionEventCallback = function (caller, eventValue, customData) {
        var model = customData;
        if (model != null) {
            model.motionEventFired(eventValue);
        }
    };
    CubismUserModel.prototype.release = function () {
        if (this._motionManager != null) {
            this._motionManager.release();
            this._motionManager = null;
        }
        if (this._expressionManager != null) {
            this._expressionManager.release();
            this._expressionManager = null;
        }
        if (this._moc != null) {
            this._moc.deleteModel(this._model);
            this._moc.release();
            this._moc = null;
        }
        this._modelMatrix = null;
        cubismpose_1.CubismPose.delete(this._pose);
        cubismeyeblink_1.CubismEyeBlink.delete(this._eyeBlink);
        cubismbreath_1.CubismBreath.delete(this._breath);
        this._dragManager = null;
        cubismphysics_1.CubismPhysics.delete(this._physics);
        cubismmodeluserdata_1.CubismModelUserData.delete(this._modelUserData);
        this.deleteRenderer();
    };
    return CubismUserModel;
}());
exports.CubismUserModel = CubismUserModel;
var $ = __importStar(__webpack_require__(/*! ./cubismusermodel */ "../../../Framework/src/model/cubismusermodel.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismUserModel = $.CubismUserModel;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "139b2debcc7963811890"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQztRQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6Qix1QkFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsK0JBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6Qiw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMseUNBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTRCSCxzQkFBQztBQUFELENBQUM7QUEvWVksMENBQWU7QUFrWjVCLHNIQUF1QztBQUV2QyxJQUFpQixxQkFBcUIsQ0FHckM7QUFIRCxXQUFpQixxQkFBcUI7SUFDdkIscUNBQWUsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO0FBRW5ELENBQUMsRUFIZ0IscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFHckM7Ozs7Ozs7OztVQ3ZiRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vRnJhbWV3b3JrL3NyYy9tb2RlbC9jdWJpc211c2VybW9kZWwudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21CcmVhdGggfSBmcm9tICcuLi9lZmZlY3QvY3ViaXNtYnJlYXRoJztcbmltcG9ydCB7IEN1YmlzbUV5ZUJsaW5rIH0gZnJvbSAnLi4vZWZmZWN0L2N1YmlzbWV5ZWJsaW5rJztcbmltcG9ydCB7IEN1YmlzbVBvc2UgfSBmcm9tICcuLi9lZmZlY3QvY3ViaXNtcG9zZSc7XG5pbXBvcnQgeyBDdWJpc21JZEhhbmRsZSB9IGZyb20gJy4uL2lkL2N1YmlzbWlkJztcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSAnLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrJztcbmltcG9ydCB7IEN1YmlzbU1vZGVsTWF0cml4IH0gZnJvbSAnLi4vbWF0aC9jdWJpc21tb2RlbG1hdHJpeCc7XG5pbXBvcnQgeyBDdWJpc21UYXJnZXRQb2ludCB9IGZyb20gJy4uL21hdGgvY3ViaXNtdGFyZ2V0cG9pbnQnO1xuaW1wb3J0IHsgQUN1YmlzbU1vdGlvbiwgRmluaXNoZWRNb3Rpb25DYWxsYmFjayB9IGZyb20gJy4uL21vdGlvbi9hY3ViaXNtbW90aW9uJztcbmltcG9ydCB7IEN1YmlzbUV4cHJlc3Npb25Nb3Rpb24gfSBmcm9tICcuLi9tb3Rpb24vY3ViaXNtZXhwcmVzc2lvbm1vdGlvbic7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb24gfSBmcm9tICcuLi9tb3Rpb24vY3ViaXNtbW90aW9uJztcbmltcG9ydCB7IEN1YmlzbU1vdGlvbk1hbmFnZXIgfSBmcm9tICcuLi9tb3Rpb24vY3ViaXNtbW90aW9ubWFuYWdlcic7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXIgfSBmcm9tICcuLi9tb3Rpb24vY3ViaXNtbW90aW9ucXVldWVtYW5hZ2VyJztcbmltcG9ydCB7IEN1YmlzbVBoeXNpY3MgfSBmcm9tICcuLi9waHlzaWNzL2N1YmlzbXBoeXNpY3MnO1xuaW1wb3J0IHsgQ3ViaXNtUmVuZGVyZXJfV2ViR0wgfSBmcm9tICcuLi9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXJfd2ViZ2wnO1xuaW1wb3J0IHsgY3NtU3RyaW5nIH0gZnJvbSAnLi4vdHlwZS9jc21zdHJpbmcnO1xuaW1wb3J0IHsgQ3ViaXNtTG9nRXJyb3IsIEN1YmlzbUxvZ0luZm8gfSBmcm9tICcuLi91dGlscy9jdWJpc21kZWJ1Zyc7XG5pbXBvcnQgeyBDdWJpc21Nb2MgfSBmcm9tICcuL2N1YmlzbW1vYyc7XG5pbXBvcnQgeyBDdWJpc21Nb2RlbCB9IGZyb20gJy4vY3ViaXNtbW9kZWwnO1xuaW1wb3J0IHsgQ3ViaXNtTW9kZWxVc2VyRGF0YSB9IGZyb20gJy4vY3ViaXNtbW9kZWx1c2VyZGF0YSc7XG5cbi8qKlxuICog44Om44O844K244O844GM5a6f6Zqb44Gr5L2/55So44GZ44KL44Oi44OH44OrXG4gKlxuICog44Om44O844K244O844GM5a6f6Zqb44Gr5L2/55So44GZ44KL44Oi44OH44Or44Gu5Z+65bqV44Kv44Op44K544CC44GT44KM44KS57aZ5om/44GX44Gm44Om44O844K244O844GM5a6f6KOF44GZ44KL44CCXG4gKi9cbmV4cG9ydCBjbGFzcyBDdWJpc21Vc2VyTW9kZWwge1xuICAvKipcbiAgICog5Yid5pyf5YyW54q25oWL44Gu5Y+W5b6XXG4gICAqXG4gICAqIOWIneacn+WMluOBleOCjOOBpuOBhOOCi+eKtuaFi+OBi++8n1xuICAgKlxuICAgKiBAcmV0dXJuIHRydWUgICAgIOWIneacn+WMluOBleOCjOOBpuOBhOOCi1xuICAgKiBAcmV0dXJuIGZhbHNlICAgIOWIneacn+WMluOBleOCjOOBpuOBhOOBquOBhFxuICAgKi9cbiAgcHVibGljIGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMlueKtuaFi+OBruioreWumlxuICAgKlxuICAgKiDliJ3mnJ/ljJbnirbmhYvjgpLoqK3lrprjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIHYg5Yid5pyf5YyW54q25oWLXG4gICAqL1xuICBwdWJsaWMgc2V0SW5pdGlhbGl6ZWQodjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdjtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrDnirbmhYvjga7lj5blvpdcbiAgICpcbiAgICog5pu05paw44GV44KM44Gm44GE44KL54q25oWL44GL77yfXG4gICAqXG4gICAqIEByZXR1cm4gdHJ1ZSAgICAg5pu05paw44GV44KM44Gm44GE44KLXG4gICAqIEByZXR1cm4gZmFsc2UgICAg5pu05paw44GV44KM44Gm44GE44Gq44GEXG4gICAqL1xuICBwdWJsaWMgaXNVcGRhdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRpbmc7XG4gIH1cblxuICAvKipcbiAgICog5pu05paw54q25oWL44Gu6Kit5a6aXG4gICAqXG4gICAqIOabtOaWsOeKtuaFi+OCkuioreWumuOBmeOCi1xuICAgKlxuICAgKiBAcGFyYW0gdiDmm7TmlrDnirbmhYtcbiAgICovXG4gIHB1YmxpYyBzZXRVcGRhdGluZyh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdXBkYXRpbmcgPSB2O1xuICB9XG5cbiAgLyoqXG4gICAqIOODnuOCpuOCueODieODqeODg+OCsOaDheWgseOBruioreWumlxuICAgKiBAcGFyYW0g44OJ44Op44OD44Kw44GX44Gm44GE44KL44Kr44O844K944Or44GuWOS9jee9rlxuICAgKiBAcGFyYW0g44OJ44Op44OD44Kw44GX44Gm44GE44KL44Kr44O844K944Or44GuWeS9jee9rlxuICAgKi9cbiAgcHVibGljIHNldERyYWdnaW5nKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fZHJhZ01hbmFnZXIuc2V0KHgsIHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWKoOmAn+W6puOBruaDheWgseOCkuioreWumuOBmeOCi1xuICAgKiBAcGFyYW0geCBY6Lu45pa55ZCR44Gu5Yqg6YCf5bqmXG4gICAqIEBwYXJhbSB5IFnou7jmlrnlkJHjga7liqDpgJ/luqZcbiAgICogQHBhcmFtIHogWui7uOaWueWQkeOBruWKoOmAn+W6plxuICAgKi9cbiAgcHVibGljIHNldEFjY2VsZXJhdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fYWNjZWxlcmF0aW9uWCA9IHg7XG4gICAgdGhpcy5fYWNjZWxlcmF0aW9uWSA9IHk7XG4gICAgdGhpcy5fYWNjZWxlcmF0aW9uWiA9IHo7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OH44Or6KGM5YiX44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm4g44Oi44OH44Or6KGM5YiXXG4gICAqL1xuICBwdWJsaWMgZ2V0TW9kZWxNYXRyaXgoKTogQ3ViaXNtTW9kZWxNYXRyaXgge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbE1hdHJpeDtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuI3pgI/mmI7luqbjga7oqK3lrppcbiAgICogQHBhcmFtIGEg5LiN6YCP5piO5bqmXG4gICAqL1xuICBwdWJsaWMgc2V0T3BhY2l0eShhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9vcGFjaXR5ID0gYTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuI3pgI/mmI7luqbjga7lj5blvpdcbiAgICogQHJldHVybiDkuI3pgI/mmI7luqZcbiAgICovXG4gIHB1YmxpYyBnZXRPcGFjaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29wYWNpdHk7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OH44Or44OH44O844K/44KS6Kqt44G/6L6844KAXG4gICAqXG4gICAqIEBwYXJhbSBidWZmZXIgICAgbW9jM+ODleOCoeOCpOODq+OBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgKi9cbiAgcHVibGljIGxvYWRNb2RlbChidWZmZXI6IEFycmF5QnVmZmVyKSB7XG4gICAgdGhpcy5fbW9jID0gQ3ViaXNtTW9jLmNyZWF0ZShidWZmZXIpO1xuICAgIHRoaXMuX21vZGVsID0gdGhpcy5fbW9jLmNyZWF0ZU1vZGVsKCk7XG4gICAgdGhpcy5fbW9kZWwuc2F2ZVBhcmFtZXRlcnMoKTtcblxuICAgIGlmICh0aGlzLl9tb2MgPT0gbnVsbCB8fCB0aGlzLl9tb2RlbCA9PSBudWxsKSB7XG4gICAgICBDdWJpc21Mb2dFcnJvcignRmFpbGVkIHRvIENyZWF0ZU1vZGVsKCkuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZWxNYXRyaXggPSBuZXcgQ3ViaXNtTW9kZWxNYXRyaXgoXG4gICAgICB0aGlzLl9tb2RlbC5nZXRDYW52YXNXaWR0aCgpLFxuICAgICAgdGhpcy5fbW9kZWwuZ2V0Q2FudmFzSGVpZ2h0KClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OCkuiqreOBv+i+vOOCgFxuICAgKiBAcGFyYW0gYnVmZmVyIG1vdGlvbjMuanNvbuODleOCoeOCpOODq+OBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICogQHBhcmFtIG5hbWUg44Oi44O844K344On44Oz44Gu5ZCN5YmNXG4gICAqIEBwYXJhbSBvbkZpbmlzaGVkTW90aW9uSGFuZGxlciDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/ntYLkuobmmYLjgavlkbzjgbPlh7rjgZXjgozjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjgq/jg6njgrlcbiAgICovXG4gIHB1YmxpYyBsb2FkTW90aW9uID0gKFxuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXIsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBvbkZpbmlzaGVkTW90aW9uSGFuZGxlcj86IEZpbmlzaGVkTW90aW9uQ2FsbGJhY2tcbiAgKSA9PiBDdWJpc21Nb3Rpb24uY3JlYXRlKGJ1ZmZlciwgc2l6ZSwgb25GaW5pc2hlZE1vdGlvbkhhbmRsZXIpO1xuXG4gIC8qKlxuICAgKiDooajmg4Xjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb9cbiAgICogQHBhcmFtIGJ1ZmZlciBleHDjg5XjgqHjgqTjg6vjgYzoqq3jgb/ovrzjgb7jgozjgabjgYTjgovjg5Djg4Pjg5XjgqFcbiAgICogQHBhcmFtIHNpemUg44OQ44OD44OV44Kh44Gu44K144Kk44K6XG4gICAqIEBwYXJhbSBuYW1lIOihqOaDheOBruWQjeWJjVxuICAgKi9cbiAgcHVibGljIGxvYWRFeHByZXNzaW9uKFxuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXIsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZ1xuICApOiBBQ3ViaXNtTW90aW9uIHtcbiAgICByZXR1cm4gQ3ViaXNtRXhwcmVzc2lvbk1vdGlvbi5jcmVhdGUoYnVmZmVyLCBzaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg53jg7zjgrrjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb9cbiAgICogQHBhcmFtIGJ1ZmZlciBwb3NlMy5qc29u44GM6Kqt44G/6L6844G+44KM44Gm44GE44KL44OQ44OD44OV44KhXG4gICAqIEBwYXJhbSBzaXplIOODkOODg+ODleOCoeOBruOCteOCpOOCulxuICAgKi9cbiAgcHVibGljIGxvYWRQb3NlKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3Bvc2UgPSBDdWJpc21Qb3NlLmNyZWF0ZShidWZmZXIsIHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODh+ODq+OBq+S7mOWxnuOBmeOCi+ODpuODvOOCtuODvOODh+ODvOOCv+OCkuiqreOBv+i+vOOCgFxuICAgKiBAcGFyYW0gYnVmZmVyIHVzZXJkYXRhMy5qc29u44GM6Kqt44G/6L6844G+44KM44Gm44GE44KL44OQ44OD44OV44KhXG4gICAqIEBwYXJhbSBzaXplIOODkOODg+ODleOCoeOBruOCteOCpOOCulxuICAgKi9cbiAgcHVibGljIGxvYWRVc2VyRGF0YShidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2RlbFVzZXJEYXRhID0gQ3ViaXNtTW9kZWxVc2VyRGF0YS5jcmVhdGUoYnVmZmVyLCBzaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDniannkIbmvJTnrpfjg4fjg7zjgr/jga7oqq3jgb/ovrzjgb9cbiAgICogQHBhcmFtIGJ1ZmZlciAgcGh5c2ljczMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgKiBAcGFyYW0gc2l6ZSAgICDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICovXG4gIHB1YmxpYyBsb2FkUGh5c2ljcyhidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9waHlzaWNzID0gQ3ViaXNtUGh5c2ljcy5jcmVhdGUoYnVmZmVyLCBzaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPjgZ/jgorliKTlrprjga7lj5blvpdcbiAgICogQHBhcmFtIGRyYXdhYmxlSWQg5qSc6Ki844GX44Gf44GERHJhd2FibGXjga5JRFxuICAgKiBAcGFyYW0gcG9pbnRYIFjkvY3nva5cbiAgICogQHBhcmFtIHBvaW50WSBZ5L2N572uXG4gICAqIEByZXR1cm4gdHJ1ZSDjg5Ljg4Pjg4jjgZfjgabjgYTjgotcbiAgICogQHJldHVybiBmYWxzZSDjg5Ljg4Pjg4jjgZfjgabjgYTjgarjgYRcbiAgICovXG4gIHB1YmxpYyBpc0hpdChcbiAgICBkcmF3YWJsZUlkOiBDdWJpc21JZEhhbmRsZSxcbiAgICBwb2ludFg6IG51bWJlcixcbiAgICBwb2ludFk6IG51bWJlclxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBkcmF3SW5kZXg6IG51bWJlciA9IHRoaXMuX21vZGVsLmdldERyYXdhYmxlSW5kZXgoZHJhd2FibGVJZCk7XG5cbiAgICBpZiAoZHJhd0luZGV4IDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyDlrZjlnKjjgZfjgarjgYTloLTlkIjjga9mYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5nZXREcmF3YWJsZVZlcnRleENvdW50KGRyYXdJbmRleCk7XG4gICAgY29uc3QgdmVydGljZXM6IEZsb2F0MzJBcnJheSA9IHRoaXMuX21vZGVsLmdldERyYXdhYmxlVmVydGljZXMoZHJhd0luZGV4KTtcblxuICAgIGxldCBsZWZ0OiBudW1iZXIgPSB2ZXJ0aWNlc1swXTtcbiAgICBsZXQgcmlnaHQ6IG51bWJlciA9IHZlcnRpY2VzWzBdO1xuICAgIGxldCB0b3A6IG51bWJlciA9IHZlcnRpY2VzWzFdO1xuICAgIGxldCBib3R0b206IG51bWJlciA9IHZlcnRpY2VzWzFdO1xuXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBjb3VudDsgKytqKSB7XG4gICAgICBjb25zdCB4ID0gdmVydGljZXNbQ29uc3RhbnQudmVydGV4T2Zmc2V0ICsgaiAqIENvbnN0YW50LnZlcnRleFN0ZXBdO1xuICAgICAgY29uc3QgeSA9IHZlcnRpY2VzW0NvbnN0YW50LnZlcnRleE9mZnNldCArIGogKiBDb25zdGFudC52ZXJ0ZXhTdGVwICsgMV07XG5cbiAgICAgIGlmICh4IDwgbGVmdCkge1xuICAgICAgICBsZWZ0ID0geDsgLy8gTWluIHhcbiAgICAgIH1cblxuICAgICAgaWYgKHggPiByaWdodCkge1xuICAgICAgICByaWdodCA9IHg7IC8vIE1heCB4XG4gICAgICB9XG5cbiAgICAgIGlmICh5IDwgdG9wKSB7XG4gICAgICAgIHRvcCA9IHk7IC8vIE1pbiB5XG4gICAgICB9XG5cbiAgICAgIGlmICh5ID4gYm90dG9tKSB7XG4gICAgICAgIGJvdHRvbSA9IHk7IC8vIE1heCB5XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdHg6IG51bWJlciA9IHRoaXMuX21vZGVsTWF0cml4LmludmVydFRyYW5zZm9ybVgocG9pbnRYKTtcbiAgICBjb25zdCB0eTogbnVtYmVyID0gdGhpcy5fbW9kZWxNYXRyaXguaW52ZXJ0VHJhbnNmb3JtWShwb2ludFkpO1xuICAgIGNvbnNvbGUubG9nKFwiNFwiKVxuICAgIHJldHVybiBsZWZ0IDw9IHR4ICYmIHR4IDw9IHJpZ2h0ICYmIHRvcCA8PSB0eSAmJiB0eSA8PSBib3R0b207XG4gIH1cblxuICAvKipcbiAgICog44Oi44OH44Or44Gu5Y+W5b6XXG4gICAqIEByZXR1cm4g44Oi44OH44OrXG4gICAqL1xuICBwdWJsaWMgZ2V0TW9kZWwoKTogQ3ViaXNtTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njga7lj5blvpdcbiAgICogQHJldHVybiDjg6zjg7Pjg4Djg6lcbiAgICovXG4gIHB1YmxpYyBnZXRSZW5kZXJlcigpOiBDdWJpc21SZW5kZXJlcl9XZWJHTCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeOCkuS9nOaIkOOBl+OBpuWIneacn+WMluOCkuWun+ihjOOBmeOCi1xuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlbmRlcmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yZW5kZXJlcikge1xuICAgICAgdGhpcy5kZWxldGVSZW5kZXJlcigpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlcmVyID0gbmV3IEN1YmlzbVJlbmRlcmVyX1dlYkdMKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuaW5pdGlhbGl6ZSh0aGlzLl9tb2RlbCk7XG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44Gu6Kej5pS+XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlUmVuZGVyZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JlbmRlcmVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbGVhc2UoKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Kk44OZ44Oz44OI55m654Gr5pmC44Gu5qiZ5rqW5Yem55CGXG4gICAqXG4gICAqIEV2ZW5044GM5YaN55Sf5Yem55CG5pmC44Gr44GC44Gj44Gf5aC05ZCI44Gu5Yem55CG44KS44GZ44KL44CCXG4gICAqIOe2meaJv+OBp+S4iuabuOOBjeOBmeOCi+OBk+OBqOOCkuaDs+WumuOBl+OBpuOBhOOCi+OAglxuICAgKiDkuIrmm7jjgY3jgZfjgarjgYTloLTlkIjjga/jg63jgrDlh7rlipvjgpLjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50VmFsdWUg55m654Gr44GX44Gf44Kk44OZ44Oz44OI44Gu5paH5a2X5YiX44OH44O844K/XG4gICAqL1xuICBwdWJsaWMgbW90aW9uRXZlbnRGaXJlZChldmVudFZhbHVlOiBjc21TdHJpbmcpOiB2b2lkIHtcbiAgICBDdWJpc21Mb2dJbmZvKCd7MH0nLCBldmVudFZhbHVlLnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCpOODmeODs+ODiOeUqOOBruOCs+ODvOODq+ODkOODg+OCr1xuICAgKlxuICAgKiBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXLjgavjgqTjg5njg7Pjg4jnlKjjgavnmbvpjLLjgZnjgovjgZ/jgoHjga5DYWxsYmFja+OAglxuICAgKiBDdWJpc21Vc2VyTW9kZWzjga7ntpnmib/lhYjjga5FdmVudEZpcmVk44KS5ZG844G244CCXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXIg55m654Gr44GX44Gf44Kk44OZ44Oz44OI44KS566h55CG44GX44Gm44GE44Gf44Oi44O844K344On44Oz44Oe44ON44O844K444Oj44O844CB5q+U6LyD55SoXG4gICAqIEBwYXJhbSBldmVudFZhbHVlIOeZuueBq+OBl+OBn+OCpOODmeODs+ODiOOBruaWh+Wtl+WIl+ODh+ODvOOCv1xuICAgKiBAcGFyYW0gY3VzdG9tRGF0YSBDdWJpc21Vc2VyTW9kZWzjgpLntpnmib/jgZfjgZ/jgqTjg7Pjgrnjgr/jg7PjgrnjgpLmg7PlrppcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY3ViaXNtRGVmYXVsdE1vdGlvbkV2ZW50Q2FsbGJhY2soXG4gICAgY2FsbGVyOiBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXIsXG4gICAgZXZlbnRWYWx1ZTogY3NtU3RyaW5nLFxuICAgIGN1c3RvbURhdGE6IEN1YmlzbVVzZXJNb2RlbFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBtb2RlbDogQ3ViaXNtVXNlck1vZGVsID0gY3VzdG9tRGF0YTtcblxuICAgIGlmIChtb2RlbCAhPSBudWxsKSB7XG4gICAgICBtb2RlbC5tb3Rpb25FdmVudEZpcmVkKGV2ZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlkITlpInmlbDliJ3mnJ/ljJZcbiAgICB0aGlzLl9tb2MgPSBudWxsO1xuICAgIHRoaXMuX21vZGVsID0gbnVsbDtcbiAgICB0aGlzLl9tb3Rpb25NYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLl9leHByZXNzaW9uTWFuYWdlciA9IG51bGw7XG4gICAgdGhpcy5fZXllQmxpbmsgPSBudWxsO1xuICAgIHRoaXMuX2JyZWF0aCA9IG51bGw7XG4gICAgdGhpcy5fbW9kZWxNYXRyaXggPSBudWxsO1xuICAgIHRoaXMuX3Bvc2UgPSBudWxsO1xuICAgIHRoaXMuX2RyYWdNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLl9waHlzaWNzID0gbnVsbDtcbiAgICB0aGlzLl9tb2RlbFVzZXJEYXRhID0gbnVsbDtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fb3BhY2l0eSA9IDEuMDtcbiAgICB0aGlzLl9saXBzeW5jID0gdHJ1ZTtcbiAgICB0aGlzLl9sYXN0TGlwU3luY1ZhbHVlID0gMC4wO1xuICAgIHRoaXMuX2RyYWdYID0gMC4wO1xuICAgIHRoaXMuX2RyYWdZID0gMC4wO1xuICAgIHRoaXMuX2FjY2VsZXJhdGlvblggPSAwLjA7XG4gICAgdGhpcy5fYWNjZWxlcmF0aW9uWSA9IDAuMDtcbiAgICB0aGlzLl9hY2NlbGVyYXRpb25aID0gMC4wO1xuICAgIHRoaXMuX2RlYnVnTW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8vIOODouODvOOCt+ODp+ODs+ODnuODjeODvOOCuOODo+ODvOOCkuS9nOaIkFxuICAgIHRoaXMuX21vdGlvbk1hbmFnZXIgPSBuZXcgQ3ViaXNtTW90aW9uTWFuYWdlcigpO1xuICAgIHRoaXMuX21vdGlvbk1hbmFnZXIuc2V0RXZlbnRDYWxsYmFjayhcbiAgICAgIEN1YmlzbVVzZXJNb2RlbC5jdWJpc21EZWZhdWx0TW90aW9uRXZlbnRDYWxsYmFjayxcbiAgICAgIHRoaXNcbiAgICApO1xuXG4gICAgLy8g6KGo5oOF44Oe44ON44O844K444Oj44O844KS5L2c5oiQXG4gICAgdGhpcy5fZXhwcmVzc2lvbk1hbmFnZXIgPSBuZXcgQ3ViaXNtTW90aW9uTWFuYWdlcigpO1xuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL44Ki44OL44Oh44O844K344On44OzXG4gICAgdGhpcy5fZHJhZ01hbmFnZXIgPSBuZXcgQ3ViaXNtVGFyZ2V0UG9pbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjgrnjg4jjg6njgq/jgr/jgavnm7jlvZPjgZnjgovlh6bnkIZcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlKCkge1xuICAgIGlmICh0aGlzLl9tb3Rpb25NYW5hZ2VyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX21vdGlvbk1hbmFnZXIucmVsZWFzZSgpO1xuICAgICAgdGhpcy5fbW90aW9uTWFuYWdlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyLnJlbGVhc2UoKTtcbiAgICAgIHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbW9jICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX21vYy5kZWxldGVNb2RlbCh0aGlzLl9tb2RlbCk7XG4gICAgICB0aGlzLl9tb2MucmVsZWFzZSgpO1xuICAgICAgdGhpcy5fbW9jID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RlbE1hdHJpeCA9IG51bGw7XG5cbiAgICBDdWJpc21Qb3NlLmRlbGV0ZSh0aGlzLl9wb3NlKTtcbiAgICBDdWJpc21FeWVCbGluay5kZWxldGUodGhpcy5fZXllQmxpbmspO1xuICAgIEN1YmlzbUJyZWF0aC5kZWxldGUodGhpcy5fYnJlYXRoKTtcblxuICAgIHRoaXMuX2RyYWdNYW5hZ2VyID0gbnVsbDtcblxuICAgIEN1YmlzbVBoeXNpY3MuZGVsZXRlKHRoaXMuX3BoeXNpY3MpO1xuICAgIEN1YmlzbU1vZGVsVXNlckRhdGEuZGVsZXRlKHRoaXMuX21vZGVsVXNlckRhdGEpO1xuXG4gICAgdGhpcy5kZWxldGVSZW5kZXJlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9tb2M6IEN1YmlzbU1vYzsgLy8gTW9j44OH44O844K/XG4gIHByb3RlY3RlZCBfbW9kZWw6IEN1YmlzbU1vZGVsOyAvLyBNb2RlbOOCpOODs+OCueOCv+ODs+OCuVxuXG4gIHByb3RlY3RlZCBfbW90aW9uTWFuYWdlcjogQ3ViaXNtTW90aW9uTWFuYWdlcjsgLy8g44Oi44O844K344On44Oz566h55CGXG4gIHByb3RlY3RlZCBfZXhwcmVzc2lvbk1hbmFnZXI6IEN1YmlzbU1vdGlvbk1hbmFnZXI7IC8vIOihqOaDheeuoeeQhlxuICBwcm90ZWN0ZWQgX2V5ZUJsaW5rOiBDdWJpc21FeWVCbGluazsgLy8g6Ieq5YuV44G+44Gw44Gf44GNXG4gIHByb3RlY3RlZCBfYnJlYXRoOiBDdWJpc21CcmVhdGg7IC8vIOWRvOWQuFxuICBwcm90ZWN0ZWQgX21vZGVsTWF0cml4OiBDdWJpc21Nb2RlbE1hdHJpeDsgLy8g44Oi44OH44Or6KGM5YiXXG4gIHByb3RlY3RlZCBfcG9zZTogQ3ViaXNtUG9zZTsgLy8g44Od44O844K6566h55CGXG4gIHByb3RlY3RlZCBfZHJhZ01hbmFnZXI6IEN1YmlzbVRhcmdldFBvaW50OyAvLyDjg57jgqbjgrnjg4njg6njg4PjgrBcbiAgcHJvdGVjdGVkIF9waHlzaWNzOiBDdWJpc21QaHlzaWNzOyAvLyDniannkIbmvJTnrpdcbiAgcHJvdGVjdGVkIF9tb2RlbFVzZXJEYXRhOiBDdWJpc21Nb2RlbFVzZXJEYXRhOyAvLyDjg6bjg7zjgrbjg7zjg4fjg7zjgr9cblxuICBwcm90ZWN0ZWQgX2luaXRpYWxpemVkOiBib29sZWFuOyAvLyDliJ3mnJ/ljJbjgZXjgozjgZ/jgYvjganjgYbjgYtcbiAgcHJvdGVjdGVkIF91cGRhdGluZzogYm9vbGVhbjsgLy8g5pu05paw44GV44KM44Gf44GL44Gp44GG44GLXG4gIHByb3RlY3RlZCBfb3BhY2l0eTogbnVtYmVyOyAvLyDkuI3pgI/mmI7luqZcbiAgcHJvdGVjdGVkIF9saXBzeW5jOiBib29sZWFuOyAvLyDjg6rjg4Pjg5fjgrfjg7Pjgq/jgZnjgovjgYvjganjgYbjgYtcbiAgcHJvdGVjdGVkIF9sYXN0TGlwU3luY1ZhbHVlOiBudW1iZXI7IC8vIOacgOW+jOOBruODquODg+ODl+OCt+ODs+OCr+OBruWItuW+oeWcsFxuICBwcm90ZWN0ZWQgX2RyYWdYOiBudW1iZXI7IC8vIOODnuOCpuOCueODieODqeODg+OCsOOBrljkvY3nva5cbiAgcHJvdGVjdGVkIF9kcmFnWTogbnVtYmVyOyAvLyDjg57jgqbjgrnjg4njg6njg4PjgrDjga5Z5L2N572uXG4gIHByb3RlY3RlZCBfYWNjZWxlcmF0aW9uWDogbnVtYmVyOyAvLyBY6Lu45pa55ZCR44Gu5Yqg6YCf5bqmXG4gIHByb3RlY3RlZCBfYWNjZWxlcmF0aW9uWTogbnVtYmVyOyAvLyBZ6Lu45pa55ZCR44Gu5Yqg6YCf5bqmXG4gIHByb3RlY3RlZCBfYWNjZWxlcmF0aW9uWjogbnVtYmVyOyAvLyBa6Lu45pa55ZCR44Gu5Yqg6YCf5bqmXG4gIHByb3RlY3RlZCBfZGVidWdNb2RlOiBib29sZWFuOyAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4njgYvjganjgYbjgYtcblxuICBwcml2YXRlIF9yZW5kZXJlcjogQ3ViaXNtUmVuZGVyZXJfV2ViR0w7IC8vIOODrOODs+ODgOODqVxufVxuXG4vLyBOYW1lc3BhY2UgZGVmaW5pdGlvbiBmb3IgY29tcGF0aWJpbGl0eS5cbmltcG9ydCAqIGFzICQgZnJvbSAnLi9jdWJpc211c2VybW9kZWwnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IEN1YmlzbVVzZXJNb2RlbCA9ICQuQ3ViaXNtVXNlck1vZGVsO1xuICBleHBvcnQgdHlwZSBDdWJpc21Vc2VyTW9kZWwgPSAkLkN1YmlzbVVzZXJNb2RlbDtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxMzliMmRlYmNjNzk2MzgxMTg5MFwiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9