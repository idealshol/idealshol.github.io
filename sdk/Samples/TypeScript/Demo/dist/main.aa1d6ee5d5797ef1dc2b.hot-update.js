"use strict";
self["webpackHotUpdate"]("main",{

/***/ "../../../Framework/src/math/cubismmodelmatrix.ts":
/*!********************************************************!*\
  !*** ../../../Framework/src/math/cubismmodelmatrix.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Live2DCubismFramework = exports.CubismModelMatrix = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! ./cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var CubismModelMatrix = (function (_super) {
    __extends(CubismModelMatrix, _super);
    function CubismModelMatrix(w, h) {
        var _this = _super.call(this) || this;
        _this._width = w !== undefined ? w : 0.0;
        _this._height = h !== undefined ? h : 0.0;
        _this.setHeight(2.5);
        return _this;
    }
    CubismModelMatrix.prototype.setWidth = function (w) {
        var scaleX = w / this._width;
        var scaleY = scaleX;
        this.scale(scaleX, scaleY);
    };
    CubismModelMatrix.prototype.setHeight = function (h) {
        var scaleX = h / this._height;
        var scaleY = scaleX;
        this.scale(scaleX, scaleY);
    };
    CubismModelMatrix.prototype.setPosition = function (x, y) {
        this.translate(x, y);
    };
    CubismModelMatrix.prototype.setCenterPosition = function (x, y) {
        this.centerX(x);
        this.centerY(y);
    };
    CubismModelMatrix.prototype.top = function (y) {
        this.setY(y);
    };
    CubismModelMatrix.prototype.bottom = function (y) {
        var h = this._height * this.getScaleY();
        this.translateY(y - h);
    };
    CubismModelMatrix.prototype.left = function (x) {
        this.setX(x);
    };
    CubismModelMatrix.prototype.right = function (x) {
        var w = this._width * this.getScaleX();
        this.translateX(x - w);
    };
    CubismModelMatrix.prototype.centerX = function (x) {
        var w = this._width * this.getScaleX();
        this.translateX(x - w / 2.0);
    };
    CubismModelMatrix.prototype.setX = function (x) {
        this.translateX(x);
    };
    CubismModelMatrix.prototype.centerY = function (y) {
        var h = this._height * this.getScaleY();
        this.translateY(y - h / 2.0);
    };
    CubismModelMatrix.prototype.setY = function (y) {
        this.translateY(y);
    };
    CubismModelMatrix.prototype.setupFromLayout = function (layout) {
        var keyWidth = 'width';
        var keyHeight = 'height';
        var keyX = 'x';
        var keyY = 'y';
        var keyCenterX = 'center_x';
        var keyCenterY = 'center_y';
        var keyTop = 'top';
        var keyBottom = 'bottom';
        var keyLeft = 'left';
        var keyRight = 'right';
        for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
            var key = ite.ptr().first;
            var value = ite.ptr().second;
            if (key == keyWidth) {
                this.setWidth(value);
            }
            else if (key == keyHeight) {
                this.setHeight(value);
            }
        }
        for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
            var key = ite.ptr().first;
            var value = ite.ptr().second;
            if (key == keyX) {
                this.setX(value);
            }
            else if (key == keyY) {
                this.setY(value);
            }
            else if (key == keyCenterX) {
                this.centerX(value);
            }
            else if (key == keyCenterY) {
                this.centerY(value);
            }
            else if (key == keyTop) {
                this.top(value);
            }
            else if (key == keyBottom) {
                this.bottom(value);
            }
            else if (key == keyLeft) {
                this.left(value);
            }
            else if (key == keyRight) {
                this.right(value);
            }
        }
    };
    return CubismModelMatrix;
}(cubismmatrix44_1.CubismMatrix44));
exports.CubismModelMatrix = CubismModelMatrix;
var $ = __importStar(__webpack_require__(/*! ./cubismmodelmatrix */ "../../../Framework/src/math/cubismmodelmatrix.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelMatrix = $.CubismModelMatrix;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2b3103a1b9ed94ca0b87"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYTFkNmVlNWQ1Nzk3ZWYxZGMyYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxvSEFBa0Q7QUFPbEQ7SUFBdUMscUNBQWM7SUFPbkQsMkJBQVksQ0FBVSxFQUFFLENBQVU7UUFBbEMsWUFDRSxpQkFBTyxTQU1SO1FBSkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRXpDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBQ3RCLENBQUM7SUFPTSxvQ0FBUSxHQUFmLFVBQWdCLENBQVM7UUFDdkIsSUFBTSxNQUFNLEdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFNTSxxQ0FBUyxHQUFoQixVQUFpQixDQUFTO1FBQ3hCLElBQU0sTUFBTSxHQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQU0sTUFBTSxHQUFXLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBUU0sdUNBQVcsR0FBbEIsVUFBbUIsQ0FBUyxFQUFFLENBQVM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQVVNLDZDQUFpQixHQUF4QixVQUF5QixDQUFTLEVBQUUs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LCtCQUFjLEdBME1wRDtBQTFNWSw4Q0FBaUI7QUE2TTlCLHlIQUF5QztBQUV6QyxJQUFpQixxQkFBcUIsQ0FHckM7QUFIRCxXQUFpQixxQkFBcUI7SUFDdkIsdUNBQWlCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0FBRXZELENBQUMsRUFIZ0IscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFHckM7Ozs7Ozs7OztVQ2pPRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vRnJhbWV3b3JrL3NyYy9tYXRoL2N1YmlzbW1vZGVsbWF0cml4LnRzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgY3NtTWFwLCBpdGVyYXRvciB9IGZyb20gJy4uL3R5cGUvY3NtbWFwJztcbmltcG9ydCB7IEN1YmlzbU1hdHJpeDQ0IH0gZnJvbSAnLi9jdWJpc21tYXRyaXg0NCc7XG5cbi8qKlxuICog44Oi44OH44Or5bqn5qiZ6Kit5a6a55So44GuNHg06KGM5YiXXG4gKlxuICog44Oi44OH44Or5bqn5qiZ6Kit5a6a55So44GuNHg06KGM5YiX44Kv44Op44K5XG4gKi9cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb2RlbE1hdHJpeCBleHRlbmRzIEN1YmlzbU1hdHJpeDQ0IHtcbiAgLyoqXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgKlxuICAgKiBAcGFyYW0gdyDmqKrluYVcbiAgICogQHBhcmFtIGgg57im5bmFXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih3PzogbnVtYmVyLCBoPzogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX3dpZHRoID0gdyAhPT0gdW5kZWZpbmVkID8gdyA6IDAuMDtcbiAgICB0aGlzLl9oZWlnaHQgPSBoICE9PSB1bmRlZmluZWQgPyBoIDogMC4wO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoMi41KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmqKrluYXjgpLoqK3lrppcbiAgICpcbiAgICogQHBhcmFtIHcg5qiq5bmFXG4gICAqL1xuICBwdWJsaWMgc2V0V2lkdGgodzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc2NhbGVYOiBudW1iZXIgPSB3IC8gdGhpcy5fd2lkdGg7XG4gICAgY29uc3Qgc2NhbGVZOiBudW1iZXIgPSBzY2FsZVg7XG4gICAgdGhpcy5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG4gIH1cblxuICAvKipcbiAgICog57im5bmF44KS6Kit5a6aXG4gICAqIEBwYXJhbSBoIOe4puW5hVxuICAgKi9cbiAgcHVibGljIHNldEhlaWdodChoOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzY2FsZVg6IG51bWJlciA9IGggLyB0aGlzLl9oZWlnaHQ7XG4gICAgY29uc3Qgc2NhbGVZOiBudW1iZXIgPSBzY2FsZVg7XG4gICAgdGhpcy5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG4gIH1cblxuICAvKipcbiAgICog5L2N572u44KS6Kit5a6aXG4gICAqXG4gICAqIEBwYXJhbSB4IFjou7jjga7kvY3nva5cbiAgICogQHBhcmFtIHkgWei7uOOBruS9jee9rlxuICAgKi9cbiAgcHVibGljIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2xhdGUoeCwgeSk7XG4gIH1cblxuICAvKipcbiAgICog5Lit5b+D5L2N572u44KS6Kit5a6aXG4gICAqXG4gICAqIEBwYXJhbSB4IFjou7jjga7kuK3lv4PkvY3nva5cbiAgICogQHBhcmFtIHkgWei7uOOBruS4reW/g+S9jee9rlxuICAgKlxuICAgKiBAbm90ZSB3aWR0aOOBi2hlaWdodOOCkuioreWumuOBl+OBn+OBguOBqOOBp+OBquOBhOOBqOOAgeaLoeWkp+eOh+OBjOato+OBl+OBj+WPluW+l+OBp+OBjeOBquOBhOOBn+OCgeOBmuOCjOOCi+OAglxuICAgKi9cbiAgcHVibGljIHNldENlbnRlclBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5jZW50ZXJYKHgpO1xuICAgIHRoaXMuY2VudGVyWSh5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuIrovrrjga7kvY3nva7jgpLoqK3lrprjgZnjgotcbiAgICpcbiAgICogQHBhcmFtIHkg5LiK6L6644GuWei7uOS9jee9rlxuICAgKi9cbiAgcHVibGljIHRvcCh5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldFkoeSk7XG4gIH1cblxuICAvKipcbiAgICog5LiL6L6644Gu5L2N572u44KS6Kit5a6a44GZ44KLXG4gICAqXG4gICAqIEBwYXJhbSB5IOS4i+i+uuOBrlnou7jkvY3nva5cbiAgICovXG4gIHB1YmxpYyBib3R0b20oeTogbnVtYmVyKSB7XG4gICAgY29uc3QgaDogbnVtYmVyID0gdGhpcy5faGVpZ2h0ICogdGhpcy5nZXRTY2FsZVkoKTtcblxuICAgIHRoaXMudHJhbnNsYXRlWSh5IC0gaCk7XG4gIH1cblxuICAvKipcbiAgICog5bem6L6644Gu5L2N572u44KS6Kit5a6aXG4gICAqXG4gICAqIEBwYXJhbSB4IOW3pui+uuOBrljou7jkvY3nva5cbiAgICovXG4gIHB1YmxpYyBsZWZ0KHg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0WCh4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlj7Povrrjga7kvY3nva7jgpLoqK3lrppcbiAgICpcbiAgICogQHBhcmFtIHgg5Y+z6L6644GuWOi7uOS9jee9rlxuICAgKi9cbiAgcHVibGljIHJpZ2h0KHg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHcgPSB0aGlzLl93aWR0aCAqIHRoaXMuZ2V0U2NhbGVYKCk7XG5cbiAgICB0aGlzLnRyYW5zbGF0ZVgoeCAtIHcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFjou7jjga7kuK3lv4PkvY3nva7jgpLoqK3lrppcbiAgICpcbiAgICogQHBhcmFtIHggWOi7uOOBruS4reW/g+S9jee9rlxuICAgKi9cbiAgcHVibGljIGNlbnRlclgoeDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdyA9IHRoaXMuX3dpZHRoICogdGhpcy5nZXRTY2FsZVgoKTtcblxuICAgIHRoaXMudHJhbnNsYXRlWCh4IC0gdyAvIDIuMCk7XG4gIH1cblxuICAvKipcbiAgICogWOi7uOOBruS9jee9ruOCkuioreWumlxuICAgKlxuICAgKiBAcGFyYW0geCBY6Lu444Gu5L2N572uXG4gICAqL1xuICBwdWJsaWMgc2V0WCh4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVgoeCk7XG4gIH1cblxuICAvKipcbiAgICogWei7uOOBruS4reW/g+S9jee9ruOCkuioreWumlxuICAgKlxuICAgKiBAcGFyYW0geSBZ6Lu444Gu5Lit5b+D5L2N572uXG4gICAqL1xuICBwdWJsaWMgY2VudGVyWSh5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBoOiBudW1iZXIgPSB0aGlzLl9oZWlnaHQgKiB0aGlzLmdldFNjYWxlWSgpO1xuXG4gICAgdGhpcy50cmFuc2xhdGVZKHkgLSBoIC8gMi4wKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBZ6Lu444Gu5L2N572u44KS6Kit5a6a44GZ44KLXG4gICAqXG4gICAqIEBwYXJhbSB5IFnou7jjga7kvY3nva5cbiAgICovXG4gIHB1YmxpYyBzZXRZKHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudHJhbnNsYXRlWSh5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjgqTjgqLjgqbjg4jmg4XloLHjgYvjgonkvY3nva7jgpLoqK3lrppcbiAgICpcbiAgICogQHBhcmFtIGxheW91dCDjg6zjgqTjgqLjgqbjg4jmg4XloLFcbiAgICovXG4gIHB1YmxpYyBzZXR1cEZyb21MYXlvdXQobGF5b3V0OiBjc21NYXA8c3RyaW5nLCBudW1iZXI+KTogdm9pZCB7XG4gICAgY29uc3Qga2V5V2lkdGggPSAnd2lkdGgnO1xuICAgIGNvbnN0IGtleUhlaWdodCA9ICdoZWlnaHQnO1xuICAgIGNvbnN0IGtleVggPSAneCc7XG4gICAgY29uc3Qga2V5WSA9ICd5JztcbiAgICBjb25zdCBrZXlDZW50ZXJYID0gJ2NlbnRlcl94JztcbiAgICBjb25zdCBrZXlDZW50ZXJZID0gJ2NlbnRlcl95JztcbiAgICBjb25zdCBrZXlUb3AgPSAndG9wJztcbiAgICBjb25zdCBrZXlCb3R0b20gPSAnYm90dG9tJztcbiAgICBjb25zdCBrZXlMZWZ0ID0gJ2xlZnQnO1xuICAgIGNvbnN0IGtleVJpZ2h0ID0gJ3JpZ2h0JztcblxuICAgIGZvciAoXG4gICAgICBjb25zdCBpdGU6IGl0ZXJhdG9yPHN0cmluZywgbnVtYmVyPiA9IGxheW91dC5iZWdpbigpO1xuICAgICAgaXRlLm5vdEVxdWFsKGxheW91dC5lbmQoKSk7XG4gICAgICBpdGUucHJlSW5jcmVtZW50KClcbiAgICApIHtcbiAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gaXRlLnB0cigpLmZpcnN0O1xuICAgICAgY29uc3QgdmFsdWU6IG51bWJlciA9IGl0ZS5wdHIoKS5zZWNvbmQ7XG5cbiAgICAgIGlmIChrZXkgPT0ga2V5V2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PSBrZXlIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zZXRIZWlnaHQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoXG4gICAgICBjb25zdCBpdGU6IGl0ZXJhdG9yPHN0cmluZywgbnVtYmVyPiA9IGxheW91dC5iZWdpbigpO1xuICAgICAgaXRlLm5vdEVxdWFsKGxheW91dC5lbmQoKSk7XG4gICAgICBpdGUucHJlSW5jcmVtZW50KClcbiAgICApIHtcbiAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gaXRlLnB0cigpLmZpcnN0O1xuICAgICAgY29uc3QgdmFsdWU6IG51bWJlciA9IGl0ZS5wdHIoKS5zZWNvbmQ7XG5cbiAgICAgIGlmIChrZXkgPT0ga2V5WCkge1xuICAgICAgICB0aGlzLnNldFgodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT0ga2V5WSkge1xuICAgICAgICB0aGlzLnNldFkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT0ga2V5Q2VudGVyWCkge1xuICAgICAgICB0aGlzLmNlbnRlclgodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT0ga2V5Q2VudGVyWSkge1xuICAgICAgICB0aGlzLmNlbnRlclkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT0ga2V5VG9wKSB7XG4gICAgICAgIHRoaXMudG9wKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09IGtleUJvdHRvbSkge1xuICAgICAgICB0aGlzLmJvdHRvbSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PSBrZXlMZWZ0KSB7XG4gICAgICAgIHRoaXMubGVmdCh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PSBrZXlSaWdodCkge1xuICAgICAgICB0aGlzLnJpZ2h0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyOyAvLyDmqKrluYVcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7IC8vIOe4puW5hVxufVxuXG4vLyBOYW1lc3BhY2UgZGVmaW5pdGlvbiBmb3IgY29tcGF0aWJpbGl0eS5cbmltcG9ydCAqIGFzICQgZnJvbSAnLi9jdWJpc21tb2RlbG1hdHJpeCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmsge1xuICBleHBvcnQgY29uc3QgQ3ViaXNtTW9kZWxNYXRyaXggPSAkLkN1YmlzbU1vZGVsTWF0cml4O1xuICBleHBvcnQgdHlwZSBDdWJpc21Nb2RlbE1hdHJpeCA9ICQuQ3ViaXNtTW9kZWxNYXRyaXg7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMmIzMTAzYTFiOWVkOTRjYTBiODdcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==