# Change Log

## 0.0.71 (Mon Jun 29 2020)

-   增加`incrementDate`, `decreaseDate`方法增加/减少天数

## 0.0.70 (Thu May 30 2019)

-   增加`date`相关工具函数

## 0.0.66 (Mon May 13 2019)

-   `CreateNnavigateHandle`防止空格阻止默认操作

## 0.0.65 (Sat May 11 2019)

-   `CreateNnavigateHandle`再次修复，并传递事件参数

## 0.0.64 (Sat May 11 2019)

-   `CreateNnavigateHandle`阻止冒泡

## 0.0.63 (Sat May 11 2019)

-   `alignElement`修改签名， 增加`restAnimation`参数，控制是否重置动画

## 0.0.62 (Sat May 11 2019)

-   修复编译的.d.ts 问题

## 0.0.61 (Sat May 11 2019)

-   修复`AlignDOM`在元素存在缩放动画时，获取不到正确高度和宽度问题

## 0.0.60 (Fri May 10 2019)

-   修复`AlignDom`反转逻辑，往可视区域更多的地方反转

## 0.0.58 (Fri May 10 2019)

-   `AlignDom`增加`contaninScroll`参数, 控制视窗尺寸判断还是内容尺寸判断

## 0.0.57 (Fri Apr 19 2019)

-   `Navigate`上下方向键阻止跳转光标

## 0.0.56 (Mon Apr 15 2019)

-   删除之前打包残留

## 0.0.55 (Mon Apr 15 2019)

-   调整`AlignDom`微调和反转顺序, 并且微调只在少量距离的时候才进行

## 0.0.54 (Mon Apr 15 2019)

-   重构`AlignDom`对齐函数， 并增加测试

## 0.0.53 (Fri Apr 05 2019)

-   增加`CreateNnavigateHandle`

## 0.0.52 (Sun Mar 24 2019)

-   修复 AlignDom 累加偏移量的 BUG

## 0.0.51 (Tue Mar 26 2019)

-   修复`AlignDom`累加 offset 的判断失误

## 0.0.50 (Sun Mar 24 2019)

-   修复 AlignDom 对齐逻辑

## 0.0.49 (Sat Mar 23 2019)

-   AlignDom 返回是否翻转信息

## 0.0.47 (Sat Mar 23 2019)

-   增加`PointMap`对齐点映射

## 0.0.46 (Sat Mar 23 2019)

-   更新`listenClick`签名

## 0.0.45 (Sat Mar 23 2019)

-   增加`ListenEvent`

## 0.0.44 (Fri Mar 22 2019)

-   增加`alignElement`

## 0.0.43 (Wed Mar 20 2019)

-   增加`getDocument`方法
-   增加`getViewport`方法
-   增加`isWindow`方法

## 0.0.42 (March 8, 2019)

-   更改输出目标`esnext`为`es5`
-   默认使用`es`模块

## 0.0.41 (March 8, 2019)

-   更改输出目标`esnext`为`es6`
-   更改`.d.ts`目录为`typings`

## 0.0.1 (March 1, 2019)

-   初始化项目
