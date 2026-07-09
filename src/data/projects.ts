export type Project = {
	slug: string;
	name: string;
	summary: string;
	tags: string[];
	status: '规划中' | '进行中' | '已发布';
	description: string[];
	featured?: boolean;
};

export const projects: Project[] = [
	{
		slug: 'personal-site-v01',
		name: 'Personal Site v0.1',
		summary: '个人网站的基础骨架，覆盖首页、文章、项目和详情页。',
		tags: ['Astro', 'Portfolio', 'Content'],
		status: '进行中',
		description: [
			'这个项目先解决个人站的基本信息架构：首页负责总览，文章页负责内容列表，项目页负责作品展示。',
			'当前版本不追求复杂视觉效果，重点是让页面结构、跳转路径和组件拆分都清楚。',
		],
		featured: true,
	},
	{
		slug: 'notes-dashboard',
		name: 'Notes Dashboard',
		summary: '把零散笔记整理成可浏览、可追踪的个人知识面板。',
		tags: ['Knowledge', 'Dashboard'],
		status: '规划中',
		description: [
			'目标是用轻量列表和标签帮助笔记快速归档，并给长期主题留出回顾入口。',
			'第一阶段只定义核心数据结构和浏览页面，避免过早引入复杂编辑器。',
		],
		featured: true,
	},
	{
		slug: 'reading-tracker',
		name: 'Reading Tracker',
		summary: '记录阅读进度、摘录和复盘结论的小工具。',
		tags: ['Reading', 'Tooling'],
		status: '进行中',
		description: [
			'阅读追踪器关注阅读后的沉淀，而不只是记录已经读过多少页。',
			'项目会从书籍列表、阅读状态和复盘笔记三个基础模块开始。',
		],
		featured: true,
	},
	{
		slug: 'tiny-lab',
		name: 'Tiny Lab',
		summary: '用于存放小实验、小交互和前端原型的集合页。',
		tags: ['Experiment', 'Frontend'],
		status: '已发布',
		description: [
			'Tiny Lab 更像一个轻量游乐场，用来保存还没有成长为完整项目的想法。',
			'它的价值在于低成本试错，让小想法可以先被看见，再决定是否继续投入。',
		],
	},
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
	projects.find((project) => project.slug === slug);
