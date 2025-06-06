# Vue 3 + TypeScript + Vite

一、eslint 配置

```
pnpm i eslint -D

npx eslint --init
```

二、环境代码检测插件

```
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

```
pnpm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

三、加入scss

```
pnpm install sass
```

新版sass已经弃用`@import`，改用`@use`。

四、husky 支持

```
pnpm install -D husky

npx husky-init
```

五、集成element-plus

```
pnpm install element-plus @element-plus/icons-vue
```

六、 环境变量

3种环境变量文件

七、加入svg

```
pnpm install vite-plugin-svg-icons -D
```

八、 Mock数据

```
pnpm install -D vite-plugin-mock mockjs
```

半成品预览
![图片](https://cdn.jsdelivr.net/gh/eecopilot/cdn@v1.3/github/1747281065903.jpg)