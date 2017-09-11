<template>
	<div class="index-container f-pa f-w-full" v-show="completeLoadSwiperImageFlag">	
		<div v-show="afterFinishedAnimateFlag">
			<section class="swiper" @click="viewH5Page">
		        <swiper class="swiper-component-wrapper" 
		        :options="swiperOption" 
		        :not-next-tick="true" 
		        ref="mySwiper">
			      <swiper-slide v-for="(item, index) in sliderlist" :key="index">
			        <img :src="item.picUrl" alt="" width="100%" height="100%">
			      </swiper-slide>
			      <div class="swiper-pagination" slot="pagination"></div>
			    </swiper>
		    </section>

			<section class="news-wrap f-w-full">
				<div class="new-list f-h-full">
					<div class="content f-h-full">
						<div class="voice f-h-full f-pr">
							<i class="icon ion-volume-low f-ib f-h-full f-pa"></i>
						</div>
						<div class="new-content f-h-full">
							<router-link to="index" class="f-ellipsis f-ib f-h-full f-w-full">菜鸟发布全新品牌 两大战略升级智慧</router-link>
						</div>	
					</div>
					
				</div>
				<div class="more f-h-full">
					<router-link to="index">更多
						<i class="icon ion-ios-arrow-right"></i>
					</router-link>
				</div>
			</section>
			<section class="section-data">
				<div class="content f-h-full">

					<div class="item">
						<div class="item-nodes" :style="nodesStyles1" ref="nodes1">
							<div class="node" v-for="(node, k) in nodeslist1">
								<div class="item-icon">
									<i class="iconfont">{{ node.iconfont }}</i>
								</div>
								<div class="title">
									{{node.title}}
								</div>
								<div class="img">
									<img class="f-ib" :src="node.url" alt="">
									<span class="f-ib">{{node.sub}}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="item-nodes" :style="nodesStyles2" ref="nodes2">
							<div class="node" v-for="(node, k) in nodeslist2">
								<div class="item-icon">
									<i class="iconfont">{{ node.iconfont }}</i>
								</div>
								<div class="title">
									{{node.title}}
								</div>
								<div class="img">
									<img class="f-ib" :src="node.url" alt="">
									<span class="f-ib">{{node.sub}}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="item-nodes" :style="nodesStyles3" ref="nodes3">
							<div class="node" v-for="(node, k) in nodeslist3">
								<div class="item-icon">
									<i class="iconfont">{{ node.iconfont }}</i>
								</div>
								<div class="title">
									{{node.title}}
								</div>
								<div class="img">
									<img class="f-ib" :src="node.url" alt="">
									<span class="f-ib">{{node.sub}}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="item-nodes" :style="nodesStyles4" ref="nodes4">
							<div class="node" v-for="(node, k) in nodeslist4">
								<div class="item-icon">
									<i class="iconfont">{{ node.iconfont }}</i>
								</div>
								<div class="title">
									{{node.title}}
								</div>
								<div class="img">
									<img class="f-ib" :src="node.url" alt="">
									<span class="f-ib">{{node.sub}}</span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
			
			<section v-if="completeLoadImageFlag">
				<h3 class="bussiness-title f-tc">我们的业务</h3>

				<div class="section-business f-pr">
					<div class="slider-business-back f-pa f-h-full f-w-full f-tc">
						
						<div class="f-ib f-w-full f-h-full slider-bg-item f-pa" 
							v-for="(m, n) in slidenavlist" :key="n"
							:style="calcBgImage(m)"
							v-show="m.active"></div>

						<div class="slick-track f-ib f-pr">
							<div class="slick-slide f-h-full"
							 v-for="(o, i) in slidenavlist"
							 :key="i"
							 :class="{'slick-active': o.active}"
							 @click="changeSlickNav(o, i)">
								{{ o.name }}
							</div>
							<div class="content-container f-w-full f-pa">
								<div class="content-list f-ib f-clear" :style="contentListStyles">

									<div class="describe-wrap f-w-full f-fl"
										v-for="(item, index) in slidenavlist">
										<div class="title">{{ item.name }}</div>
										<p class="describe">{{ item.desc }}</p>
										<div class="w-line"></div>
									</div>

								</div>
							</div>
							
						</div>
					</div>
				</div>
				
			</section>


			<section class="cnwww f-clear">
				<div class="cnwww-item f-fl f-pr" v-for="(o,k) in cnwwwlist" :key="k">
					<img :src="o.url" width="100%" height="100%" alt="">
					<span class="f-ib f-w-full f-tc f-pa title">{{ o.title }}</span>
				</div>
			</section>


			<section class="section-cp">
				<div class="content">
					<div class="head f-clear">
						<h3 class="title">合作伙伴</h3>
						<div class="more">更多<i class="icon ion-ios-arrow-forward"></i></div>
					</div>
					<div class="cp-list">
						<swiper class="" 
				        :options="cpSwiperOption" 
				        :not-next-tick="true" >
					      <swiper-slide v-for="(item, index) in cpSwiperlist" :key="index">
					        <ul class="cp-icon-list f-clear f-ib">
					        	<li class="cp-icon-item f-fl" v-for="(m,n) in item.cplist">
					        		<img :src="m" width="100%" height="100%" alt="">
					        	</li>
					        </ul>
					      </swiper-slide>
					      <div class="swiper-pagination-cp" slot="pagination"></div>
					    </swiper>
					</div>
				</div>
			</section>


			<footer>
				<ul class="footlist">
					<li 
					v-for="o in ['关于菜鸟', '菜鸟品牌', '新闻/动态', '廉正举报', '法律政策']"
					class=""> 
						{{ o }}
					</li>
				</ul>
			</footer>
		</div>

		<transition name="slide">
			<div ref="menuContainer" class="c-menu-ctn f-w-full"  :style="menuStyles" v-show="menuOpenFlag">
				<div class="inner f-h-full">
					<div class="list-wrap f-ib" ref="listWrap" :style="listWrapStyles">
						<ul> 
							<li class="item f-ellipsis" 
								v-for="(o, i) in menulist"
								:key="i"
								@click="changeMenu(o)">
								<span class="f-ib f-h-full title f-pr" 
								:class="{active: o.active}">{{ o.title }} <i class="icon ion-ios-play f-pa"></i></span>
							</li>	
						</ul>
							
					</div>
					<div class="content">
						<div class="brief">以覆盖全国的仓配网络与大数据决策平台为基础，构建专业高效的供应链服务</div>
						<div class="ch-more">了解更多</div>
						<div class="ch-group-extend">
							<div class="title">行业解决方案</div>
							<ul class="f-clear">
								<li class="item f-fl" v-for="(o, i) in 7" :key="i">
									<img src="//gw.alicdn.com/tfs/TB1vKmNRXXXXXbQXFXXXXXXXXXX-120-120.png" alt="">
									<span class="text">电器行业</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>	
		</transition>

	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { getSliderList } from '@/common/js/api'
	import { prefixStyle, loadImageAsync } from '@/common/js/utils'
	import BScroll from 'better-scroll'

	const transitionDuration = prefixStyle('transitionDuration')
	const transitionDelay = prefixStyle('transitionDelay')
	const transition = prefixStyle('transition')
	const transform = prefixStyle('transform')
	const TIMEDELAY = 4000
	const TRANSITION_TIME_NUM = 4
	const baseImageUrl = 'https://img.alicdn.com/tfs/'

	export default{
		data() {
			return {
				afterFinishedAnimateFlag: true,
				screenHeight: screen.height,
				swiperOption: {
		          pagination: '.swiper-pagination',
		          autoplay: 2000,
		          loop: true,
		          effect: 'fade'
		        },
		        cpSwiperOption: {
				  pagination: '.swiper-pagination-cp',
		          autoplay: 2000,
		          loop: true
		        },
		        news: [],
				sliderlist: [
					{
						linkUrl: '',
						picUrl: baseImageUrl + "TB1WysHRXXXXXbhapXXXXXXXXXX-750-500.jpg"
					},
					{
						linkUrl: '',
						picUrl: baseImageUrl + "TB1j6o1RXXXXXcUXVXXXXXXXXXX-750-500.jpg"
					},
					{
						linkUrl: '',
						picUrl: baseImageUrl + "TB1po7KRXXXXXa5apXXXXXXXXXX-750-500.jpg"
					},
					{
						linkUrl: '',
						picUrl: baseImageUrl + "TB1EMZ5RXXXXXXRXVXXXXXXXXXX-750-500.jpg"
					}
				],
				slick: {
					item1Index: 0,
					item1Timer: null,
					item2Index: 0,
					item2Timer: null,
					item3Index: 0,
					item3Timer: null,
					item4Index: 0,
					item4Timer: null
				},
				nodeslist1: [
					{
						iconfont: '',
						sub: '个',
						title: '覆盖全球国家地区数',
						url: 'https://img.alicdn.com/tfs/TB1qvQMRXXXXXafXXXXXXXXXXXX-140-72.png'
					},
					{
						iconfont: '',
						sub: '条',
						title: '日处理数据量',
						url: 'https://img.alicdn.com/tfs/TB13ckBRXXXXXaRXpXXXXXXXXXX-202-72.png'
					},
					{
						iconfont: '',
						sub: '以上',
						title: '包裹与网点精准匹配率',
						url: 'https://img.alicdn.com/tfs/TB1JZZsRXXXXXbFXFXXXXXXXXXX-140-72.png'
					},
					{
						iconfont: '',
						sub: '个',
						title: '覆盖全球国家地区数',
						url: 'https://img.alicdn.com/tfs/TB1qvQMRXXXXXafXXXXXXXXXXXX-140-72.png'
					},
					{
						iconfont: '',
						sub: '条',
						title: '日处理数据量',
						url: 'https://img.alicdn.com/tfs/TB13ckBRXXXXXaRXpXXXXXXXXXX-202-72.png'
					}
				],
				nodeslist2: [
					{
						iconfont: '',
						sub: '个',
						title: '覆盖国内县区数量',
						url: 'https://img.alicdn.com/tfs/TB1xVcsRXXXXXa0XFXXXXXXXXXX-186-72.png'
					},
					{
						iconfont: '',
						sub: '公里',
						title: '每天累计快递运输里程超',
						url: 'https://img.alicdn.com/tfs/TB1giY3RXXXXXcyapXXXXXXXXXX-214-72.png'
					},
					{
						iconfont: '',
						sub: '条',
						title: '包裹与网点精准匹配率',
						url: 'https://img.alicdn.com/tfs/TB1B0gvRXXXXXbXXpXXXXXXXXXX-122-72.png'
					},
					{
						iconfont: '',
						sub: '个',
						title: '覆盖国内县区数量',
						url: 'https://img.alicdn.com/tfs/TB1xVcsRXXXXXa0XFXXXXXXXXXX-186-72.png'
					},
					{
						iconfont: '',
						sub: '公里',
						title: '每天累计快递运输里程超',
						url: 'https://img.alicdn.com/tfs/TB1giY3RXXXXXcyapXXXXXXXXXX-214-72.png'
					}
				],
				nodeslist3: [
					{
						iconfont: '',
						sub: '家',
						title: '合作伙伴数量超',
						url: 'https://img.alicdn.com/tfs/TB1h5EERXXXXXagXpXXXXXXXXXX-188-72.png'
					},
					{
						iconfont: '',
						sub: '小时',
						title: '每天节省快递等待时间',
						url: 'https://img.alicdn.com/tfs/TB1BBZFRXXXXXbTXXXXXXXXXXXX-186-72.png'
					},
					{
						iconfont: '',
						sub: '辆',
						title: '合作伙伴运输车辆超',
						url: 'https://img.alicdn.com/tfs/TB1Wtz1RXXXXXcWapXXXXXXXXXX-162-72.png'
					},
					{
						iconfont: '',
						sub: '家',
						title: '合作伙伴数量超',
						url: 'https://img.alicdn.com/tfs/TB1h5EERXXXXXagXpXXXXXXXXXX-188-72.png'
					},
					{
						iconfont: '',
						sub: '小时',
						title: '每天节省快递等待时间',
						url: 'https://img.alicdn.com/tfs/TB1BBZFRXXXXXbTXXXXXXXXXXXX-186-72.png'
					}
				],
				nodeslist4: [
					{
						iconfont: '',
						sub: '条',
						title: '专业线路',
						url: 'https://img.alicdn.com/tfs/TB1Iq_3RXXXXXafapXXXXXXXXXX-210-72.png'
					},
					{
						iconfont: '',
						sub: '',
						title: '覆盖中国快递包裹数',
						url: 'https://img.alicdn.com/tfs/TB1LAsKRXXXXXbWXXXXXXXXXXXX-138-72.png'
					},
					{
						iconfont: '',
						sub: '',
						title: '接入快递员超',
						url: 'https://img.alicdn.com/tfs/TB1n7UERXXXXXatXpXXXXXXXXXX-206-72.png'
					},
					{
						iconfont: '',
						sub: '条',
						title: '专业线路',
						url: 'https://img.alicdn.com/tfs/TB1Iq_3RXXXXXafapXXXXXXXXXX-210-72.png'
					},
					{
						iconfont: '',
						sub: '',
						title: '覆盖中国快递包裹数',
						url: 'https://img.alicdn.com/tfs/TB1LAsKRXXXXXbWXXXXXXXXXXXX-138-72.png'
					}
				],
				slidenavlist: [{
					name: '仓配网络',
					active: true,
					desc: '以覆盖全国的仓配网络与大数据决策平台为基础，构建专业高效的供应链服务',
					bg: 'TB1QEssRXXXXXa3aXXXXXXXXXXX-750-650.jpg'
				},{
					name: '跨境网络',
					active: false,
					desc: '中国领先的跨境智能物流平台“环球无忧”，让“全球买全球卖”后顾无忧',
					bg: 'TB1Rp.pRXXXXXavapXXXXXXXXXX-750-650.jpg'
				},{
					name: '快递平台',
					active: false,
					desc: '以覆盖全国的仓配网络与大数据决策平台为基础，构建专业高效的供应链服务',
					bg: 'TB1Wco.RXXXXXXmXpXXXXXXXXXX-750-650.jpg'
				},{
					name: 'E.T物流实验室',
					active: false,
					desc: '希望将最前沿的科技引入中国物流行业， 实现的智能机械代替人工，提高生产效率',
					bg: 'TB1WJoMRXXXXXXIXVXXXXXXXXXX-750-650.jpg'
				}],
				currentSlidenavIndex: 0,
				currentBgImage: 'TB1QEssRXXXXXa3aXXXXXXXXXXX-750-650.jpg',
				completeLoadImageFlag: false,
				completeLoadSwiperImageFlag: false,
				cnwwwlist: [
					{
						title: '菜鸟驿站',
						url: baseImageUrl + 'TB1IWzYRXXXXXa0aFXXXXXXXXXX-740-740.jpg'
					},
					{
						title: '菜鸟乡村',
						url: baseImageUrl + 'TB1rjH7RXXXXXX6apXXXXXXXXXX-740-740.jpg'
					},
					{
						title: '菜鸟物流云',
						url: baseImageUrl + 'TB1LAH3RXXXXXbaapXXXXXXXXXX-740-740.jpg'
					},
					{
						title: '菜鸟裹裹',
						url: baseImageUrl + 'TB1R1wjRXXXXXaVXVXXXXXXXXXX-740-740.jpg'
					}
				],
				cpSwiperlist:[
					{
						cplist: [
							baseImageUrl + 'TB1GzobRXXXXXbxXXXXXXXXXXXX-240-120.png'
						]
					},
					{
						cplist: [
							baseImageUrl + 'TB1GzobRXXXXXbxXXXXXXXXXXXX-240-120.png'
						]
					}
				],
				menulist: [{
					title: '首页',
					active: false
				},{
					title: '仓配网络',
					active: true
				},{
					title: '跨境网络',
					active: false
				},{
					title: '快递平台',
					active: false
				},{
					title: '菜鸟物流云',
					active: false
				},{
					title: '菜鸟乡村',
					active: false
				},{
					title: '菜鸟驿站',
					active: false
				},{
					title: 'E.T实验室',
					active: false
				},{
					title: '菜鸟园区',
					active: false
				},{
					title: '供应链金融',
					active: false
				},{
					title: '新闻/动态',
					active: false
				}]
			}
		},
		components: {
			swiper,
      		swiperSlide
		},
		methods: {
			...mapMutations({
				setMenuflag: 'MODIFY_MENUFLAG'
			}),
			loadImage() {
				// console.log('complete loaded image')
			},
			_loadData(){
				let opts = {
					pageSize: 5,
					currentPage: 0
				}
				getSliderList(opts)
					.then(resp => {
						if (resp.success === 'success') {
							this.news = resp.data.items
						}
					})
			},
			_initAnimated() {
				this.setupTimer('item1Timer', 'item1Index', 'nodes1', TRANSITION_TIME_NUM * 0)
				this.setupTimer('item2Timer', 'item2Index', 'nodes2', TRANSITION_TIME_NUM * 1)
				this.setupTimer('item3Timer', 'item3Index', 'nodes3', TRANSITION_TIME_NUM * 2)
				this.setupTimer('item4Timer', 'item4Index', 'nodes4', TRANSITION_TIME_NUM * 3)
			},
			setupTimer(timerAttr, itemIndex, nodes, delay) {
				let vm = this
				this.slick[timerAttr] && clearInterval(this.slick[timerAttr])
				this.slick[timerAttr] = setInterval(() => {
					vm.slick[itemIndex]++
					if (vm.slick[itemIndex] === 4) {
						this.slick[timerAttr + 4] && clearTimeout(this.slick[timerAttr + 4])
						this.slick[timerAttr + 4] = setTimeout(() => {
							vm.$refs[nodes].style[transitionDuration] = '0s'
							vm.slick[itemIndex] = 1	
						},TRANSITION_TIME_NUM * 100 + delay * 100)
					} else {
						if (vm.$refs[nodes] !== undefined && vm.$refs[nodes].style !== undefined) {
							vm.$refs[nodes].style[transition] = `0.4s all ${0.1 * delay}s`
						}
					}
				}, TIMEDELAY)
			},
			changeSlickNav(o, k) {
				this.slidenavlist.forEach((item) => {
					item.active = false
				})
				o.active = true
				this.currentSlidenavIndex = k
				this.currentBgImage = o.bg
			},
			calcBgImage(o) {
				return {
					backgroundImage: `url(${baseImageUrl + o.bg})`,
					backgroundSize: '100%'
				}
			},
			changeMenu(o) {
				this.menulist.forEach((item) => {
					item.active = false
				})
				o.active = true
			},
			_initScroll() {
				if (!this.$refs.listWrap) {
					return
				}
				this.scroll = new BScroll('.list-wrap')
			},
			viewH5Page() {
				this.$router.push('homeh5')
			}
		},
		created() {
			let vm = this

			this.setMenuflag(false)

			loadImageAsync([
				baseImageUrl + 'TB1WysHRXXXXXbhapXXXXXXXXXX-750-500.jpg',
				baseImageUrl + 'TB1j6o1RXXXXXcUXVXXXXXXXXXX-750-500.jpg',
				baseImageUrl + 'TB1po7KRXXXXXa5apXXXXXXXXXX-750-500.jpg',
				baseImageUrl + 'TB1EMZ5RXXXXXXRXVXXXXXXXXXX-750-500.jpg'
			], () => {
				vm.completeLoadSwiperImageFlag = true
			}, () => {
				console.log('load fail')
			})

			loadImageAsync([
				baseImageUrl + 'TB1QEssRXXXXXa3aXXXXXXXXXXX-750-650.jpg',
				baseImageUrl + 'TB1Rp.pRXXXXXavapXXXXXXXXXX-750-650.jpg',
				baseImageUrl + 'TB1Wco.RXXXXXXmXpXXXXXXXXXX-750-650.jpg',
				baseImageUrl + 'TB1WJoMRXXXXXXIXVXXXXXXXXXX-750-650.jpg',
			], () => {
				vm.completeLoadImageFlag = true
			}, () => {
				console.log('load fail')
			})

			this.cpSwiperlist.forEach((item) => {
				for (let i = 0; i < 15; i++) {
					item.cplist.push(item.cplist[0])
				}
			})

			

		},
		mounted(){
			this._loadData()
			this._initAnimated()
			setTimeout(() => {
				this._initScroll()
			}, 20)
			
			let imgArr = [
				'https://gw.alicdn.com/tfs/TB1HTjgRXXXXXckXVXXXXXXXXXX-375-667.gif',
				'https://gw.alicdn.com/tfs/TB1veNJRXXXXXcSapXXXXXXXXXX-750-1334.jpg',
				'https://gw.alicdn.com/tfs/TB1e5WvRXXXXXcaXXXXXXXXXXXX-749-1334.jpg',
				'https://gw.alicdn.com/tfs/TB1Nc_NRXXXXXc6XpXXXXXXXXXX-750-1334.jpg',
				'https://gw.alicdn.com/tfs/TB1PHfZRXXXXXb.XpXXXXXXXXXX-188-334.gif',
				'https://gw.alicdn.com/tfs/TB1TiulRXXXXXXBXFXXXXXXXXXX-750-1334.jpg',
				'https://gw.alicdn.com/tfs/TB1XbLPRXXXXXXhXXXXXXXXXXXX-750-1334.jpg'
			]
			setTimeout(() => {
				loadImageAsync(imgArr, () => {
					console.info('completed load  H5 images')
				}, () => { 
					console.log('load fail') 
					window.location.reload() 
				})
			}, 2000) 
			
		},
		computed: {
			...mapGetters([
				'rootFontSize',
				'menuOpenFlag'
			]),
		    swiper() {
		       return this.$refs.mySwiper.swiper
		    },
			slideItemStyles() {
				return {
					width: window.innerWidth/this.rootFontSize + 'rem'
				}
			},
			nodesStyles1() {
				let style = {
					transform: `translate3d(0, ${-1.3*this.slick.item1Index}rem, 0)`,
					webkitTransform: `translate3d(0, ${-1.3*this.slick.item1Index}rem, 0)`
				}
				return style
			},
			nodesStyles2() {
				let style = {
					transform: `translate3d(0, ${-1.3*this.slick.item2Index}rem, 0)`,
					webkitTransform: `translate3d(0, ${-1.3*this.slick.item2Index}rem, 0)`
				}
				return style
			},
			nodesStyles3() {
				let style = {
					transform: `translate3d(0, ${-1.3*this.slick.item3Index}rem, 0)`,
					webkitTransform: `translate3d(0, ${-1.3*this.slick.item3Index}rem, 0)`
				}
				return style
			},
			nodesStyles4() {
				let style = {
					transform: `translate3d(0, ${-1.3*this.slick.item4Index}rem, 0)`,
					webkitTransform: `translate3d(0, ${-1.3*this.slick.item4Index}rem, 0)`
				}
				return style
			},
			businessBackStyles() {
				return {
					backgroundImage: `url(${baseImageUrl}${this.currentBgImage})`,
					backgroundSize: '100%',
					opacity: 0.9,
					transition: '.3s'
				}
			},
			contentListStyles() {
				return {
					width: `${3.1 * this.slidenavlist.length}rem`,
					transform: `translate3d(${-3.1 * this.currentSlidenavIndex}rem, 0, 0)`
				}
			},
			menuStyles() {
				return {
					 transform: `translate3d(${this.slideDistance}, 0, 0)`,
					 height: this.screenHeight/100 + 'rem'
				}
			},
			listWrapStyles() {
				return {
					height: `${(screen.height - 100)/100}rem`
				}
			}
		},
		watch: {
			menuOpenFlag(flag) {
				if (flag) {
					this.$refs.menuContainer.addEventListener('transitionend', () => {
						if (this.menuOpenFlag) {
							this.afterFinishedAnimateFlag = false
						}
						this.$refs.menuContainer.removeEventListener('transitionend',() => {},false)
					})
				} else {
					this.afterFinishedAnimateFlag = true
				}
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '../../common/css/calc.styl';
	
	.index-container
		r1('top', 50)
		r1('font-size', 14)
		.news-wrap
			r1(height, 45)
			r1(margin-top, -2)
			background-color: rgba(34,44,58,.7)
			display: flex
			flex-flow: row nowrap
			justify-content: flex-start
			align-items: center
			overflow: hidden
			.new-list
				flex: 1
				.content
					position: relative
					.voice
						position: absolute
						left:0
						top:0
						r1(width, 50)
						.icon
							r1(font-size, 24)
							color: #fff
							r2(left, 15, top, 10)
					.new-content
						position: absolute
						r1(margin-right, 10)
						top:0
						r1(left, 50)
						right: 0
						overflow: hidden
						color: #fff
						r1(line-height, 44)
						a
							r2(padding-left, 20, padding-right, 10px)	
			.more
				flex: 0 0 0.6rem
				r1(width, 60)
				background-color: rgba(0,102,255,.8)
				text-align: center	
				color: #fff	
				r1(font-size, 14)
				a
					position: relative
					r1(top, 15)
					
		.section-data
			display: flex
			flex-flow: row nowrap
			justify-content: center
			.content
				width: 90%
				display: flex
				justify-content: flex-start
				flex-flow: row wrap
				r2(padding-top, 20, padding-bottom, 20)
				.item
					overflow: hidden
					r2(width, 168, height, 130)
					border-right-color: #eee
					border-right-style: solid
					border-bottom-color: #eee
					border-bottom-style: solid
					r2(border-right-width, 1,border-bottom-width, 1)
					&:nth-child(even)
						border-right: 0
					&:nth-of-type(3), &:nth-of-type(4)
						border-bottom: 0
						r1(padding-top, 10)
					.item-nodes
						transition: .4s all
						-webkit-transition: .4s all
						width: 100%
						height: auto		
						.node
							width: 100%
							r1(height, 130)
							r1(padding-left, 10)
							.item-icon
								r2(width, 28, height, 28)
								r1(padding-top, 4)
								i
									r1(font-size, 24)
									color: #666
							.title
								r2(margin-top, 10, margin-bottom, 10)
								r1(font-size, 12)
								color: #666
							.img
								img
									r1(margin-right,2)
									r1(height, 32)
								span
									r1(font-size, 12)
									color: #666
									vertical-align: top				
	
		.bussiness-title
			r1(font-size, 18)	
			color: #666
			r1(margin-bottom, 20)	
		.section-business
			r1(height, 325)
			.slider-business-back
				left: 0
				top: 0	
				background-repeat: no-repeat
			    background-size: 100%
			    background-position: center	
			.slider-bg-item
				left: 0
				top: 0 
			    transition: .3s
			    -webkit-trasition: .3s   
			.slick-track
				position:relative
				width: 90%
				left: 5%
				display: flex
				flex-flow: row nowrap
				r1(height, 85)
				.slick-slide
					position: relative
					r1(width, 87)
					r1(line-height, 85)
					overflow: hidden
					cursor: pointer
					r1(font-size, 12)
					color: #fff
					&::after
						content: ' '
						position: absolute
						r2(left, 0, bottom,10)
						width: 100%
						r1(height, 11)
						background: url(https://gw.alicdn.com/tfs/TB1aJmRRXXXXXXEaXXXXXXXXXXX-187-11.png) no-repeat
						background-size: 100%
					&.slick-active
						r1(font-size, 16)
						&::after
							background: url(https://gw.alicdn.com/tfs/TB1gYrpRXXXXXayXXXXXXXXXXXX-187-11.png) no-repeat
							background-size: 100%
				
				.content-container	
					width: 90%
					left: 5%
					r1(top, 85)
					r1(height, 158)	
					overflow: hidden
					.content-list
						transition: .3s
						-webkit-transition: .3s
						width: auto
						r1(height, 158)
						.describe-wrap
							r1(width, 310)
							r1(margin-top,50)
							text-align: left
							r1(height, 88)	
							color: #fff
							.title
								r1(font-size, 16)	
							.describe
								r2(margin-top,10, margin-bottom, 10)
								r1(line-height, 18)
								r1(font-size, 12)
							.w-line
								r2(width, 30, height, 4)
								background-color: #6F0		
								
		.cnwww
			r1(height, 376)
			overflow: hidden
			.cnwww-item
				width: 50%
				r1(height, 187.5)
			.title
				left: 0
				top: 50%
				transform: translate3d(0, -50%, 0)
				-webkit-transform: translate3d(0, -50%, 0)
				color: #fff
		
		.section-cp
			background-color: #06F
			r2(padding-top, 30, padding-bottom, 0)
			.content
				margin: 0 auto
				width: 90%
				.head
					r1(height, 30)
					color: #fff
					.title
						float: left
						r1(font-size, 18)
					.more
						float: right
						r1(font-size, 12)
						r1(margin-top, 4)	
						i
							r1(font-size, 14)
				.cp-list
					r1(margin-left, 10)
					r1(height, 240)	
					.cp-icon-list
						.cp-icon-item
							r2(width, 78, height, 40)	
							r1(margin-top, 12)	
							text-align: center
					.swiper-pagination-cp
						text-align: center
						.swiper-pagination-bullet
							width: 50px
							height: 6px
	
	footer
		r2(padding-top, 30, padding-bottom, 30)		
		background: #222C3A
		color: #fff					
		.footlist
			display: flex
			justify-content: space-around
			flex-flow: row nowrap	
			r1(font-size, 12)	
			

	.c-menu-ctn
		background-color: #fff
		position: fixed
		left:0 
		top: 0
		right: 0
		z-index: 100
		r1(margin-top, 50)
		r1(font-size, 12)
		overflow: hidden
		.inner
			display: flex
			.list-wrap
				flex: 0 0 1.2rem
				overflow-y: scroll
				.listview
					position: relative
				    width: 100%
				.item
					cursor: pointer
					r1(margin-top, 22)
					width: 100%
					r2(height, 24, line-height, 24)
					r1(padding-left, 15)
					r1(font-size, 15)
					.title
						r2(padding-left, 5, padding-right, 5)
						i
							r1(right, -19)
							r1(top, -7)
							color: #fff
							r1(font-size, 39)
						&.active
							background: #06f 
							color: #fff
							i
								color: #06f
							
			.content
				flex: 1	
				padding: 0.14rem 0.3rem
				color: #666
				.brief
					r1(margin-bottom ,20)
					r1(line-height, 18)	
					r1(font-size, 12)	
				.ch-more
					r2(margin-top, 20, margin-bottom, 20)
					border: 0.01rem solid #888	
					text-align: center	
					r1(font-size, 12)
					r1(line-height, 28)
				.ch-group-extend
					.title
						r1(font-size,16)
						r1(margin-bottom, 30)
						text-align: center
					ul
						width: 100%	
						.item
							width: 48%
							r1(height, 66)
							r1(margin-bottom, 20)
							text-align: center
							img
								r2(width ,40, height, 40)
								display: inline-block
							.text
								r1(margin-top, 10)
								text-align: center
								display: inline-block
								r1(font-size,12)
								width: 100%		

</style>



