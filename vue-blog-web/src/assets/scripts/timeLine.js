+(function() {
    var version = '3.2.0';
    var defaults = {
            item: '.item',
            margin: 120, //左右之间的间距
            top: 20, //距离上一个item的间距
            minTop: 10, //如在手机下显示，可以将上下间距适当缩小
            resize: true, //监听窗口变化
            minScreen: 640 //当窗口小于640时，单列显示
        },
        extend = function(target, source) {
            for (var p in source) {
                if (source.hasOwnProperty(p)) {
                    target[p] = source[p];
                }
            }
            return target;
        },
        /**
         * 获取dom选择器
         * @param node
         * @param element
         * @param index
         * @returns {*}
         */
        $ = function(element, index, node) {
            if (typeof element == "string") {
                if (!node) node = document;
                var nodes = node.querySelectorAll(element);
                return (index == -1) ? nodes : nodes[index];
            }
            return element;
        },
        /**
         * 获取最小高度索引
         * @param arr
         * @param minH
         * @returns {string}
         */
        getMinIndex = function(arr, minH) {
            for (var i in arr) {
                if (arr[i] === minH) {
                    return i;
                }
            }
        },
        addClass = function(element, className) {
            if (hasClass(element, className) == false) {
                element.className += ' ' + className;
            }
        },
        removeClass = function(element, className) {
            var currentClass = element.className;
            if (hasClass(element, className)) {
                currentClass = currentClass.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
                currentClass = currentClass.replace(/(^\s*)|(\s*$)/g, '');
                element.className = currentClass;
            }
        },
        hasClass = function(element, className) {
            return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        };
    var TimeLine = function(container, options) {
        this.config = extend(defaults, options || {});
        container = $(container, -1, document);
        var i = 0,
            len = container.length;
        if (!len) {
            return;
        }
        for (i; i < len; i++) {
            this.init(container[i]);
        }
    };
    var TP = TimeLine.prototype;
    TP.init = function(container) {
        this.container = container;
        this.items = $(this.config.item, -1, this.container);
        this.sizes = this.items.length;
        this.isMinScreen = false;
        this.container.style.cssText += 'position:relative;visibility:hidden;';
        this.render();
        //监听resize
        if (this.config.resize) {
            var me = this;
            window.onresize = function() {
                me.render();
            };
        }
    };
    TP.getContainerWidth = function() {
        var width = Math.round(this.container.offsetWidth);
        this.isMinScreen = (width <= this.config.minScreen);
        return width;
    };
    TP.render = function() {
        var me = this,
            container = me.container,
            o = me.config,
            sizes = me.sizes,
            i = 0,
            width = me.getContainerWidth(),
            isMinScreen = me.isMinScreen,
            heightArr = []; //用于存储每列中的所有块框相加的高度。
        //计算每个Item的宽度
        var itemWidth = parseFloat(width - o.margin) / 2;
        var line = $('.line', 0, container);
        if (!line) {
            line = document.createElement('div');
            line.className = 'line';
            container.appendChild(line);
        }
        /**
         * 获取方向
         * @param index
         * @returns {string}
         */
        var isDirection = function(index) {
            return (Math.round(index * (itemWidth + o.margin)) === 0) ? 'isLeft' : 'isRight';
        };
        for (i; i < sizes; i++) {
            var item = me.items[i],
                point = $('.point', 0, item),
                corner = $('.corner', 0, item);
            removeClass(item, 'isLeft');
            removeClass(item, 'isRight');
            if (!corner) {
                corner = document.createElement('span');
                corner.className = 'corner';
                item.appendChild(corner);
            }
            if (!point) {
                point = document.createElement('span');
                point.className = 'point';
                item.appendChild(point);
            }
            if (isMinScreen && o.resize) { //全屏模式，一列，不显示point,line,corner
                point && (point.style.display = 'none');
                corner && (corner.style.display = 'none');
                line && (line.style.display = 'none');
                item.style.cssText += 'width:100%;position:static;float:none;top:0;left:0;margin-top:' + o.minTop + 'px;overflow:visible;visibility: visible;'
            } else {
                var top = 0,
                    left = 0;
                item.style.cssText += 'width:' + itemWidth + 'px;margin: 0px; padding: 0px; overflow: visible;visibility: visible;position:absolute;';
                line && (line.style.display = 'block');
                corner && (corner.style.display = 'block');
                point && (point.style.display = 'block');
                var height = item.offsetHeight; //高度必须在margin，padding设置位0后获取，以排除box-sizing的影响
                var pointWidth = point.offsetWidth || 0,
                    pointLeft = 0;
                if (i < 2) {
                    heightArr[i] = height;
                    top = 0;
                    left = i * (itemWidth + o.margin);
                    addClass(item, isDirection(i));
                    pointLeft = isDirection(i) == 'isLeft' ? Math.round((o.margin - pointWidth) / 2 + itemWidth) : -Math.round((o.margin + pointWidth) / 2);
                } else {
                    var minH = Math.min.apply(null, heightArr); //数组中的最小值minH
                    var minIndex = getMinIndex(heightArr, minH);
                    heightArr[minIndex] += height + o.top; //更新添加了块框后的列高
                    top = minH + o.top;
                    left = minIndex * (itemWidth + o.margin);
                    addClass(item, isDirection(minIndex));
                    pointLeft = isDirection(minIndex) == 'isLeft' ? Math.round((o.margin - pointWidth) / 2 + itemWidth) : -Math.round((o.margin + pointWidth) / 2);
                }
                item.style.cssText += 'top:' + top + 'px;left:' + left + 'px;float:left;';
                point.style.cssText += 'position:absolute;left:' + pointLeft + 'px;';
            }
        }
        if (!isMinScreen || !o.resize) {
            var maxHeight = Math.max.apply(null, heightArr);
            container.style.cssText += 'height:' + (heightArr[getMinIndex(heightArr, maxHeight)] + 60) + 'px;';
        } else {
            container.style.height = 'auto';
        }
        container.style.cssText += 'visibility:visible;overflow:visible;';
        var lineWidth = line.offsetWidth;
        line.style.cssText += 'position:absolute;left:50%;margin-left:-1px;height:100%;'
    };
    window.timeLine = function(container, options) {
        var o = new TimeLine(container, options);
        return {
            version: version,
            render: function() {
                return o.render;
            }
        };
    };
    //CMD 支持
    if (typeof define === "function" && define.cmd && window.seajs) {
        define(function(require, exports, module) {
            module.exports.timeLine = function(container, options) {
                return timeLine(container, options);
            }
        });
    }
}());