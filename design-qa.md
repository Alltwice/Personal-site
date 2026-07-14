# Design QA — 首页时间与 Scroll 重排

## Comparison Target

- Source visual truth: `C:\Users\31482\Desktop\参考图.png`
- Implementation route: `http://localhost:4321/`
- Intended primary viewport: `1917 × 1002`
- Additional responsive viewports: `1280 × 720`, `980 × 720`, `390 × 844`
- State: 首页默认态，时间运行中，Scroll 指向 `#home-detail`

## Evidence

- Source visual: 已通过本地图片查看器打开并确认。
- Implementation screenshot: unavailable。
- Full-view comparison: blocked；应用内浏览器运行时无法初始化，错误为 `Cannot redefine property: process`，因此不能生成同视口实现截图。
- Focused region comparison: blocked；缺少实现截图，无法对时间区、上方文案和右下角 Scroll 做同画面对比。

## Engineering Checks

- Astro 静态构建通过，共生成 12 个页面。
- 首页开发服务器返回 HTTP 200。
- 构建结果包含 `showcase__meta`、`data-current-time`、`showcase__indicator` 和 `href="#home-detail"`。
- 时间已从文案区移至 `meta` 插槽；桌面端放大，移动端保留缩放规则。
- Scroll 桌面端定位到首页右下角，移动端恢复正常流并右对齐。
- `git diff --check` 通过。

## Required Fidelity Surfaces

- Fonts and typography: 静态样式确认沿用现有字体、字重和颜色；缺少浏览器截图，无法确认最终光学比例与换行。
- Spacing and layout rhythm: 代码已扩大文案内部间距，并重排时间与 Scroll；缺少同视口截图，无法确认实际留白和重叠情况。
- Colors and visual tokens: 未修改现有颜色 token、背景或阴影。
- Image quality and asset fidelity: 未生成或替换资产，继续使用现有头像、人物图和图标。
- Copy and content: 未修改页面文案、时间格式或 Scroll 标签。
- Responsiveness: 已配置 `1280px`、`980px`、`760px` 断点；缺少浏览器截图，无法完成视觉确认。
- Interactions and accessibility: DOM 中保留时间脚本、Scroll 锚点与原有语义；无法在浏览器中验证每秒更新、点击、hover、focus 和控制台状态。

## Findings

- [P1] 缺少浏览器渲染证据
  - Location: 首页整体、时间区、Scroll。
  - Evidence: 参考图可用，但实现截图因浏览器初始化失败而不可用。
  - Impact: 无法证明最终尺寸、底部对齐和响应式布局与参考图一致。
  - Fix: 浏览器连接恢复后，在相同视口捕获实现截图，与参考图放入同一比较画面；修复任何 P0/P1/P2 差异后重新验证。

## Comparison History

- Pass 1: 工程实现和静态检查完成；视觉比较因浏览器初始化错误被阻塞，未进行视觉修正循环。

## Implementation Checklist

- [x] 移动时间到首页底部 `meta` 区域。
- [x] 放大桌面时间并添加响应式尺寸。
- [x] 将 Scroll 放到桌面右下角，移动端恢复正常流。
- [x] 增加上方文案内部间距。
- [x] 通过构建、HTTP 和差异检查。
- [ ] 捕获同视口实现截图并完成设计对比。
- [ ] 验证时间更新、Scroll 跳转、hover、focus 和浏览器控制台。

final result: blocked
