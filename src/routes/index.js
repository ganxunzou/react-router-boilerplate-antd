import lazyLoad from '../layouts/lazyLoad';
import BasicLayout from '../layouts/BasicLayout';
import routes from './routes';

export const getRouteData = () => {
	const routerConfig = {
		// 首页
		'/': {
			module: lazyLoad(() => import('VIEW')),
			layout: BasicLayout,
		},
		'/form': {
			module: lazyLoad(() => import('VIEW/form')),
			layout: BasicLayout,
		},
		'/jsFiddle': {
			module: lazyLoad(() => import('VIEW/jsFiddle/index')),
			layout: BasicLayout,
		},
		'/jsFiddleDemo': {
			module: lazyLoad(() => import('VIEW/jsFiddle/demo')),
			layout: BasicLayout,
		},
		...routes,
		// 强制“刷新”页面的 hack
		'/redirect': { module: lazyLoad(() => import('COMPONENT/Redirect')) },
		// 无路由匹配的情况一定要放到最后，否则会拦截所有路由
		'*': { module: lazyLoad(() => import('COMPONENT/404')) },
	};

	const routeData = [];
	for (let [k, v] of Object.entries(routerConfig)) {
		routeData.push({
			path: k,
			component: v.module,
			onEnter: v.onEnter,
			layout: v.layout,
		});
	}

	return routeData;
};
