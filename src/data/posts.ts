export type Post = {
	slug: string;
	title: string;
	date: string;
	tags: string[];
	excerpt: string;
	body: string[];
	views: number;
	featured?: boolean;
};

export const posts: Post[] = [
	{
		slug: 'astro-site-skeleton',
		title: '用 Astro 搭一个干净的个人站骨架',
		date: '2026-07-08',
		tags: ['Astro', 'Frontend', 'Structure'],
		excerpt: '从路由、布局、组件和数据开始，把个人网站先搭成可以继续生长的形状。',
		body: [
			'v0.1 阶段最重要的是边界清楚：页面能访问，内容有承载位置，导航能把人带到正确的地方。',
			'Astro 的文件路由很适合这种小型个人站。页面留在 src/pages，复用界面拆进 src/components，mock 数据暂时放进 src/data。',
			'后续可以把文章迁移到 Content Collections，再补充 Markdown 正文、SEO、RSS 和更完整的视觉系统。',
		],
		views: 1280,
		featured: true,
	},
	{
		slug: 'writing-system-notes',
		title: '写作系统的第一版只需要三件事',
		date: '2026-06-24',
		tags: ['Writing', 'Workflow'],
		excerpt: '标题池、草稿区和发布列表，比复杂工具更能帮助一个内容系统先跑起来。',
		body: [
			'很多写作系统失败在一开始就太完整。真正需要先固定下来的，是想法进入、草稿推进和发布归档这三件事。',
			'标题池负责收集灵感，草稿区负责承载半成品，发布列表负责让内容持续被看见。',
			'当这三块稳定以后，再去补搜索、标签页、订阅和自动化，会更自然。',
		],
		views: 940,
		featured: true,
	},
	{
		slug: 'project-page-prototype',
		title: '项目页应该先展示决策线索',
		date: '2026-05-19',
		tags: ['Projects', 'Design'],
		excerpt: '项目介绍不只是截图陈列，也应该让读者看到问题、选择和结果。',
		body: [
			'一个项目页的第一版不必很华丽，但需要说明这个项目为什么存在。',
			'比起堆功能列表，先写清楚目标、约束、状态和下一步，会让读者更容易判断项目的价值。',
			'这也是 v0.1 骨架要保留详情页的原因：先给未来的案例叙事留好位置。',
		],
		views: 1520,
		featured: true,
	},
	{
		slug: 'small-site-navigation',
		title: '小网站导航越直接越好',
		date: '2026-04-03',
		tags: ['Navigation', 'UX'],
		excerpt: '当信息结构还很小，清楚的锚点和返回按钮比复杂菜单更有用。',
		body: [
			'个人站早期通常只有首页、文章和项目。导航设计应该优先服务这三个入口。',
			'长首页用锚点串起主要 section，列表页和详情页则用返回按钮降低迷路成本。',
			'等内容规模真的变大，再加入搜索、归档和多层级导航也不迟。',
		],
		views: 720,
	},
];

export const getPostsByDate = () =>
	[...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostsByViews = () => [...posts].sort((a, b) => b.views - a.views);

export const getPostBySlug = (slug: string) => posts.find((post) => post.slug === slug);
