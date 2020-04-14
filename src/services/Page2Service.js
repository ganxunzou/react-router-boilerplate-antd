import xhr from './xhr/';

class Page2Service {
	action(param) {
		return xhr({
			method: 'post',
			url: '/hello.do',
			body: param,
			showErr: false,
		});
	}
}

// 实例化后再导出
export default new Page2Service();
