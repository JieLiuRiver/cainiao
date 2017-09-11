import {jsonp} from './utils'

window.jsonpCallback = function(d){}

export function getSliderList(options){
	const url = 'https://news.cloud.cainiao.com/open/article/category/news'
	const data = Object.assign({}, {
		callback: "jsonpCallback",
		pageSize: options.pageSize || 5,
		currentPage: options.currentPage || 0,
		ticket: "eyJhcHBfa2V5IjoiY253d3ciLCJleHBpcmVzIjo0NjQ4Nzg3MTIwLjk3Niwic2lnbiI6ImU4ZjNhZjBlOGQ2ZjAxMzc2ZGIyZmNhODAxZTEwZDIyNDFmNmY3YTUzZjQyMDU4NWIxMWRiMmZhNDUzZTEyYzIifQ==_:150476853263"
	})
	return jsonp(url, data, {})
}
