# tetris

## initial webpack project
pugin
- html-webpack-plugin
- clean-webpack-plugin
- webpack-dev-server
- ts-loader
- typescript

## 游戏开发
- 单一智能原则：每个类只做与他相关的事情
- 关闭原则：系统中的类，应该对拓展开放，对修改关闭

基于以上两个原则，系统中使用如下的模式
数据-界面分离模式（数据和界面解耦）

### 开发俄罗斯方块小方块类
```
export class Square {
    x: 0,
    y: 0,
    color: 'red'
}
```
Square 中x，y代表逻辑坐标
<img src="./src/assets/wangge.png">
原则：
- 书写面向对象的class时，class中的属性全部私有化。需要修改的属性，使用公开的方法修改；

