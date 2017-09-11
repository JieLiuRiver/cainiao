<template>
	<div class="c-h5-ctn f-h-full" :style="containStyles">
		<div class="fullpage-wrapper f-w-full f-pa" :style="wrapperStyles">
			<audio 
				ref="soundBg"
				style="display:none" 
				:src="bgmp3url" 
				preload="auto"
				autoplay="autoplay"
				loop="loop">
			</audio>
			<div class="fixed-box" :style="fixedBoxStyles">
				<video controls="" id="vd" :src="mp4" preload="auto" playsinline="" webkit-playsinline="" :style="fixedBoxStyles" ref="video">
					
				</video>
				<div class="close f-pa" @click="closeVideo"> 
					<i class="icon ion-android-close"></i>
				</div>
			</div>
			<div class="page-list" :style="pageListStyles" ref="pageList">

				<div class="page page1 f-w-full f-pa f-ib" :style="pageStyles(0)">
					<div class="sound-bg-start f-w-full" :style="pageStyles"
						@touchstart="touchStart"
						@touchmove="touchMove">
						<img src="https://gw.alicdn.com/tfs/TB1HTjgRXXXXXckXVXXXXXXXXXX-375-667.gif" width="100%" height="100%" alt="">
						<div class="mask-con f-h-full f-w-full f-pa"></div>
						<a href="javascript:;" class="logo f-ib f-pa"></a>
						<p class="p1text ptext f-pa">
							What’s New？
							<br>
							<span>你所畅想的智慧物流在这里</span>
						</p>
						<div class="video-btn f-pa f-ib" @click="playVideo">
							<span class="desc f-ib f-w-full">点此播放</span>
						</div>
						<div class="bottom-btn f-pa f-ib f-w-full f-tc"
							@click.stop.prevent="nextPage">
							<i class="icon ion-chevron-down f-ib"></i>
						</div>
					</div>
				</div>

				<div class="page page2 f-w-full f-pa f-ib" :style="pageStyles(1)">
					<div class="sound-bg-start f-w-full" :style="pageStyles"
						@touchstart="touchStart"
						@touchmove="touchMove">
						<img src="https://gw.alicdn.com/tfs/TB1veNJRXXXXXcSapXXXXXXXXXX-750-1334.jpg" width="100%" height="100%" alt="">
						<div class="mask-con f-h-full f-w-full f-pa"></div>
						<a href="javascript:;" class="logo f-ib f-pa"></a>
						<p class="p2text1 f-pa">菜鸟品牌全新升级</p>
						<p class="p2text2 f-pa">用智慧的方式，连接世界</p>
						<p class="p2text3 f-pa">全新的菜鸟品牌标识简洁直观，<br>代表着基于流动的物流数据延伸所提供的智能化服务。</p>
						<div class="p2slide f-pa">
							<div class="item">
								<img src="https://gw.alicdn.com/tfs/TB1mWtiRXXXXXXoXFXXXXXXXXXX-650-445.jpg" width="100%" height="100%" alt="" v-show="p2slideimg1">
								<img src="https://gw.alicdn.com/tfs/TB1RolRRXXXXXXFapXXXXXXXXXX-650-446.png" width="100%" height="100%" alt="" v-show="!p2slideimg1">
							</div>
						</div>
						
						<div class="page2-slide-btn f-pa f-clear">
							<div class="p2paga" :class="{'p2paga-active': p2slideimg1}" @click="p2slideimg1 = !p2slideimg1">NEW</div>
							<div class="p2paga" :class="{'p2paga-active': !p2slideimg1}" @click="p2slideimg1 = !p2slideimg1">BEFORE</div>
						</div>

						<div class="bottom-btn f-pa f-ib f-w-full f-tc"
							@click.stop.prevent="nextPage">
							<i class="icon ion-chevron-down f-ib"></i>
						</div>
					</div>
				</div>

				<div class="page page3 f-w-full f-pa f-ib" :style="pageStyles(2)">
					<div class="sound-bg-start f-w-full" :style="pageStyles"
						@touchstart="touchStart"
						@touchmove="touchMove">
						<img src="https://gw.alicdn.com/tfs/TB1e5WvRXXXXXcaXXXXXXXXXXXX-749-1334.jpg" width="100%" height="100%" alt="">
						<div class="mask-con f-h-full f-w-full f-pa"></div>
						<a href="javascript:;" class="logo f-ib f-pa"></a>
						<p class="p2text1 f-pa">菜鸟品牌使命</p>
						<p class="p2text2 f-pa">数据驱动，高效协同，<br>连接未来</p>
						<p class="p2text3 f-pa p3text3">菜鸟是价值链共赢的生态中枢，并以数据驱动和社会化协同的<br>智慧物流平台。菜鸟将创造万物生机，以流动的数据、智能的<br>
						服务、高效的协同，助力世界未来。</p>

						<div class="p2slide f-pa">
							<swiper class="swiper-component-wrapper" 
					        :options="swiperOption" 
					        :not-next-tick="true" ref="pageSwiper">
						      <swiper-slide v-for="(item, index) in page3Swiplist" :key="index">
						        <img v-lazy="item" alt="" width="100%" height="100%">
						      </swiper-slide>
						      <div class="swiper-pagination" slot="pagination"></div>
						    </swiper>
						</div>
						
						<div class="page2-slide-btn page3-slide-btn f-pa f-clear">
							<div class="p2paga f-fl" :class="{'p2paga-active': p3slideIndx===1}" @click="p3slideChange(1)">数据</div>

							<div class="p2paga f-fl" :class="{'p2paga-active': p3slideIndx===2}" @click="p3slideChange(2)">协同</div>

							<div class="p2paga f-fl" :class="{'p2paga-active': p3slideIndx===3}" @click="p3slideChange(3)">智能</div>
						</div>

						<div class="bottom-btn f-pa f-ib f-w-full f-tc"
							@click.stop.prevent="nextPage">
							<i class="icon ion-chevron-down f-ib"></i>
						</div>
					</div>
				</div>

				<div class="page page4 f-w-full f-pa f-ib" :style="pageStyles(3)">
					<div class="sound-bg-start f-w-full" :style="pageStyles"
						@touchstart="touchStart"
						@touchmove="touchMove">
						<div class="mask-con f-h-full f-w-full f-pa"></div>
						
						<div class="mask-con"></div>
						
						<p class="p4_text1 f-pa">设计的故事</p>
						<p class="p4_text2 f-pa">49个方案</p>
						<p class="p4_text3 f-pa">历经3400个工作时<br>让我们的品牌无论在线上还是传统平媒<br>都能体现“流通” 这个概念</p>
						
						<div class="bottom-btn f-pa f-ib f-w-full f-tc"
							@click.stop.prevent="nextPage">
							<i class="icon ion-chevron-down f-ib"></i>
						</div>
					</div>
				</div>

				<div class="page page4 f-w-full f-pa f-ib" :style="pageStyles(4)">
					<div class="sound-bg-start f-w-full" :style="pageStyles"
						@touchstart="touchStart"
						@touchmove="touchMove">
						<div class="mask-con f-h-full f-w-full f-pa"></div>
						
						<p class="p2text1 f-pa p5text1">品牌应用</p>
						<p class="p2text2 f-pa p5text2">你将很快看到这一切</p>
						<p class="p2text3 f-pa p5text3">菜鸟在流畅的数据和物流网络中为客户提供先机，<br>应对未来的市场变化。动态的标识形态很好的体<br>
						现菜鸟的使命和能力，以源源不断的动力赋予给<br>
						同行者持续的价值和有序增长。</p>
						
						<div class="p2slide f-pa p5img">
							<div class="item">
								<img src="https://gw.alicdn.com/tfs/TB1cC2wRXXXXXXpaXXXXXXXXXXX-641-675.jpg" width="100%" height="100%" alt="">
							</div>
						</div>

						<div class="bottom-btn f-pa f-ib f-w-full f-tc"
							@click.stop.prevent="nextPage">
							<i class="icon ion-chevron-down f-ib"></i>
						</div>
					</div>
				</div>

				<div class="page page4 f-w-full f-pa f-ib" :style="pageStyles(5)">
					<div class="sound-bg-start f-w-full" :style="pageStyles"
						@touchstart="touchStart"
						@touchmove="touchMove">
						<div class="mask-con f-h-full f-w-full f-pa"></div>
						<img src="https://gw.alicdn.com/tfs/TB1XbLPRXXXXXXhXXXXXXXXXXXX-750-1334.jpg" width="100%" height="100%" alt="">

						<p class="p2text2 f-pa p6text2">更多业务详情<br>请访问菜鸟官网</p>
				
						<div class="page2-slide-btn f-pa f-clear p6-btn">
							<div class="p2paga p2paga-active" >www.cainiao.com</div>
							<div class="p2paga" >点击进入</div>
						</div>
						
						<div class="bottom-btn f-pa f-ib f-w-full f-tc"
							@click.stop.prevent="prevPage">
							<i class="icon ion-chevron-up f-ib"></i>
						</div>

					</div>
				</div>

			</div>
		</div>
		<!-- <div class="loading f-pr" v-if="!completeLoadImageFlag">
			<div class="icon-loading">
				<i class="icon ion-load-d rotate"></i>
				<span class="f-ib f-pr f-w-full">加载中...</span>	
			</div>
		</div> -->
	</div>
</template>


<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import $ from 'n-zepto'
	import { prefixStyle, loadImageAsync } from '@/common/js/utils'
	export default{
		name: 'homeh5',
		data() {
			return {
				loadMp4: 'https://os.alipayobjects.com/rmsportal/AwFOhbnlWWxrpLRnwDtR.mp4',
				mp4: '',
				playVideoFlag: false,
				swiperOption: {
		          pagination: '.swiper-pagination',
		          autoplay: 2000,
		          loop: true,
		          effect: 'fade',
		          paginationType : 'progress'
		        },
		        page3Swiplist: [
		        	'https://img.alicdn.com/tfs/TB1zuy6RXXXXXb.aXXXXXXXXXXX-900-640.jpg',
		        	'https://gw.alicdn.com/tfs/TB1AyyhRXXXXXbgXFXXXXXXXXXX-650-462.jpg',
		        	'https://gw.alicdn.com/tfs/TB1SNJ5RXXXXXb0XVXXXXXXXXXX-650-462.jpg'
		        ],
				p2slideimg1: true,
				p3slideIndx: 1,
				completeLoadImageFlag: false,
				bgmp3url: 'https://os.alipayobjects.com/rmsportal/fTPDwTDwiwxoictGRzfJ.mp3',
				slideDistance: 1,
				screentHeight: screen.height,
				pagelist: [
					{
						url: 'https://gw.alicdn.com/tfs/TB1HTjgRXXXXXckXVXXXXXXXXXX-375-667.gif'
					},
					{
						url: 'https://gw.alicdn.com/tfs/TB1veNJRXXXXXcSapXXXXXXXXXX-750-1334.jpg'
					},
					{
						url: 'https://gw.alicdn.com/tfs/TB1e5WvRXXXXXcaXXXXXXXXXXXX-749-1334.jpg'
					},
					{
						url: 'https://gw.alicdn.com/tfs/TB1Nc_NRXXXXXc6XpXXXXXXXXXX-750-1334.jpg'
					},
					{
						url: 'https://gw.alicdn.com/tfs/TB1PHfZRXXXXXb.XpXXXXXXXXXX-188-334.gif'
					},
					{
						url: 'https://gw.alicdn.com/tfs/TB1TiulRXXXXXXBXFXXXXXXXXXX-750-1334.jpg'
					},
					{
						url: 'https://gw.alicdn.com/tfs/TB1XbLPRXXXXXXhXXXXXXXXXXXX-750-1334.jpg'
					}
				]
			}
		},
		computed: {
			wrapperStyles() {
				return {
					height: `${this.screentHeight/100}rem`
				}
			},
			containStyles() {
				return {
					height: `${this.screentHeight/100}rem`
				}
			},
			pageListStyles(){
				return {
					height: `${this.pagelist.length * (this.screentHeight/100)}rem`,
					transform: `translate3d(0, ${-this.slideDistance * (this.screentHeight/100)}rem, 0)`,
					webkitTransform: `translate3d(0, ${-this.slideDistance * (this.screentHeight/100)}rem, 0)`,
					transition: '0.7s all ease',
					webkitTransition: '0.7s all ease',
				}
			},
			fixedBoxStyles() {
				return {
					display: `${this.playVideoFlag ? 'block' : 'none'}`,
					height: `${this.screentHeight/100}rem`
				}
			}
		},
		methods: {
			nextPage() {
				this.pointToUp()
			},
			prevPage() {
				this.pointToDown()
			},
			pageStyles(index) {
				return {
					top: `${index * (this.screentHeight/100)}rem`,
					height: `${this.screentHeight/100}rem`
				}
			},
			touchStart(e){
				const touch = e.touches[0]
				if (this.touch.status !== 2) {
		        	return
				}
				this.touch.status = 0
		        this.touch.startX = touch.pageX
		        this.touch.startY = touch.pageY
			},
			touchMove(e) {
				let vm = this
				const touch = e.touches[0]
		        const deltaX = touch.pageX - this.touch.startX
		        const deltaY = touch.pageY - this.touch.startY
		        if (deltaY < 0) {
		        	if (this.slideDistance < 5 && Math.abs(deltaY) > 50 && this.touch.status === 0) {
		        		this.pointToUp()
			        }
		        } else if (deltaY > 0) {
		        	if (this.slideDistance > 0 && deltaY > 50 && this.touch.status === 0) {
		        		this.pointToDown()
		        	}
		        }
			},
			pointToUp() {
				if (this.slideDistance === 0) {
        			$('.p2text').removeClass('textanimated')
        			$('.p2text1').removeClass('textanimated')
        			$('.p2text2').removeClass('textanimated')
        			$('.p2text3').removeClass('textanimated')
        			$('.p2slide').removeClass('fadeanimated')
        			$('.page2 .page2-slide-btn').removeClass('fadeanimated')
        		} else if (this.slideDistance === 1) {
        			$('.page3 .p2text1').removeClass('textanimated')
        			$('.page3 .p2text2').removeClass('textanimated')
        			$('.page3 .p2text3').removeClass('textanimated')
        			$('.page3 .p2slide').removeClass('fadeanimated')
        			$('.page3 .page3-slide-btn').removeClass('fadeanimated')
        		} else if (this.slideDistance === 2) {
        			$('.p4_text1').removeClass('textanimated')
        			$('.p4_text2').removeClass('textanimated')
        			$('.p4_text3').removeClass('textanimated')
        		} else if (this.slideDistance === 3) {
        			$('.p5text1').removeClass('textanimated')
        			$('.p5text2').removeClass('textanimated')
        			$('.p5text3').removeClass('textanimated')
        			$('.p5img').removeClass('fadeanimated')
        		} else if (this.slideDistance === 4) {
        			$('.p6text2').removeClass('textanimated')
        			$('.p6-btn').removeClass('textanimated')
        		}
	        	this.touch.status = 1
	        	this.slideDistance += 1
	        	this.$refs.pageList.addEventListener('transitionend', this.tranEnd.bind(this), false)
	        	this.$refs.pageList.addEventListener('webkitTransitionend', this.tranEnd.bind(this), false)
			},
			pointToDown() {
				if (this.slideDistance === 1) {

        			$('.p1text').removeClass('textanimated')
        			$('.video-btn').removeClass('fadeanimated')
        			
        		} else if (this.slideDistance === 2){
        			$('.p2text').removeClass('textanimated')
        			$('.p2text1').removeClass('textanimated')
        			$('.p2text2').removeClass('textanimated')
        			$('.p2text3').removeClass('textanimated')
        			$('.p2slide').removeClass('fadeanimated')
        			$('.page2 .page2-slide-btn').removeClass('fadeanimated')
        		} else if (this.slideDistance === 3) {
        			$('.page3 .p2text1').removeClass('textanimated')
        			$('.page3 .p2text2').removeClass('textanimated')
        			$('.page3 .p2text3').removeClass('textanimated')
        			$('.page3 .p2slide').removeClass('fadeanimated')
        			$('.page3 .page3-slide-btn').removeClass('fadeanimated')
        		} else if (this.slideDistance === 4){
        			$('.p4_text1').removeClass('textanimated')
        			$('.p4_text2').removeClass('textanimated')
        			$('.p4_text3').removeClass('textanimated')
        		} else if (this.slideDistance === 5) {
        			$('.p5text1').removeClass('textanimated')
        			$('.p5text2').removeClass('textanimated')
        			$('.p5text3').removeClass('textanimated')
        			$('.p5img').removeClass('fadeanimated')
        		}

        		this.touch.status = 1
        		this.slideDistance -= 1
        		this.$refs.pageList.addEventListener('transitionend', this.tranEnd.bind(this), false)
	        	this.$refs.pageList.addEventListener('webkitTransitionend', this.tranEnd.bind(this), false)
			},
			tranEnd() {
				this.touch.status = 2
		        this.$refs.pageList.removeEventListener('transitionend', this.tranEnd, false)
		        this.$refs.pageList.removeEventListener('webkitTransitionend', this.tranEnd, false)
		        if (this.slideDistance === 0) {
		        	$('.p1text').addClass('textanimated')
		        	$('.video-btn').addClass('fadeanimated')
		        } else if (this.slideDistance === 1) {
		        	$('.p2text').addClass('textanimated')
		        	$('.p2text1').addClass('textanimated')
		        	$('.p2text2').addClass('textanimated')
		        	$('.p2text3').addClass('textanimated')
		        	$('.p2slide').addClass('fadeanimated')
		        	$('.page2 .page2-slide-btn').addClass('fadeanimated')
		        } else if (this.slideDistance === 2) {
		        	$('.page3 .p2text1').addClass('textanimated')
		        	$('.page3 .p2text2').addClass('textanimated')
        			$('.page3 .p2text3').addClass('textanimated')
        			$('.page3 .p2slide').addClass('fadeanimated')	
        			$('.page3 .page3-slide-btn').addClass('fadeanimated')	
		        } else if (this.slideDistance === 3) {
		        	$('.p4_text1').addClass('textanimated')
        			$('.p4_text2').addClass('textanimated')
        			$('.p4_text3').addClass('textanimated')
		        } else if (this.slideDistance === 4) {
		        	$('.p5text1').addClass('textanimated')
        			$('.p5text2').addClass('textanimated')
        			$('.p5text3').addClass('textanimated')
        			$('.p5img').addClass('fadeanimated')
		        } else if (this.slideDistance === 5) {
		        	$('.p6text2').addClass('textanimated')
		        	$('.p6-btn').addClass('textanimated')
		        }
			},
			p3slideChange(index) {
				this.p3slideIndx = index
				this.$refs.pageSwiper.swiper.slideTo(index)
			},
			playVideo() {
				this.mp4 = this.loadMp4
				this.playVideoFlag = true
				document.getElementById('vd').play()
			},
			closeVideo() {
				this.playVideoFlag = false
				document.getElementById('vd').pause()
			}
		},
		mounted(){
			// console.log($(window).height(), screen.height)
			this.pointToDown()
		},
		created() {
			let vm = this
			vm.touch = {
				status: 2
			}
			let imgArr = [
				'https://gw.alicdn.com/tfs/TB1HTjgRXXXXXckXVXXXXXXXXXX-375-667.gif',
				'https://gw.alicdn.com/tfs/TB1veNJRXXXXXcSapXXXXXXXXXX-750-1334.jpg',
				'https://gw.alicdn.com/tfs/TB1e5WvRXXXXXcaXXXXXXXXXXXX-749-1334.jpg',
				'https://gw.alicdn.com/tfs/TB1Nc_NRXXXXXc6XpXXXXXXXXXX-750-1334.jpg',
				'https://gw.alicdn.com/tfs/TB1PHfZRXXXXXb.XpXXXXXXXXXX-188-334.gif',
				'https://gw.alicdn.com/tfs/TB1TiulRXXXXXXBXFXXXXXXXXXX-750-1334.jpg',
				'https://gw.alicdn.com/tfs/TB1XbLPRXXXXXXhXXXXXXXXXXXX-750-1334.jpg'
			]
			loadImageAsync(imgArr, () => {
				vm.completeLoadImageFlag = true
				console.info('completed load images')
			}, () => { 
				console.log('加载图片失败') 
				window.location.reload() 
			})
		},
		components: {
			swiper,
      		swiperSlide
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '../../common/css/index.styl'
	

	.fixed-box
		background: rgba(0,0,0,0.5)
		z-index: 10
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100%
		video
			width: 100%
		    height: 100%
		    background-color: #000
		.close
			r2(width, 18, height, 18)
			r2(top, 10, right, 10)
			color: #fff 
			i
				display: block
				r1(font-size, 20)   
	.textanimated
		-webkit-animation: textanimate 1s forwards .5
		animation: textanimate 1s forwards .5
	.fadeanimated
		-webkit-animation: fade 1s forwards .5
		animation: fade 1s forwards .5
	.loading
		text-align: center
		.icon-loading
			width: 100%
			r1(height, 80)
			i
				display: block
				r1(font-size, 30)
				position: absolute
				left: 50%
				top: 50%
				transform: translate3d(-50%, -50%, 0)
				-webkit-transform: translate3d(-50%, -50%, 0)
			.rotate
				animation:rotate 1s infinite linear 
				-webkit-animation:rotate 1s infinite linear
		span
			r1(font-size, 14)
			position: relative
			r1(left, 12)
	.c-h5-ctn
		overflow: hidden
		.fullpage-wrapper
			left: 0	
			top: 0
			height: auto
			touch-action: none
			overflow: hidden
			
			.page
				left: 0	
				.sound-bg-start
					.mask-con
						left: 0
						top: 0
						background: rgba(0, 0, 0, .6)
					.logo
						r2(width, 83, height, 28)
						r2(left, 30, top, 50)
						background: url(https://gw.alicdn.com/tfs/TB1yMWRRXXXXXaXXpXXXXXXXXXX-151-51.png) no-repeat
						background-size: 100%
					.ptext
						opacity: 0
						color: #fff
						r2(font-size, 28, line-height, 40)	
						r2(left, 20, top, 160)
						span
							r2(font-size, 36, line-height, 40)
					.p2text1
						opacity: 0
						color: #6eef38
						r1(font-size, 16)
						r2(left, 30, top, 80)
					.p2text2
						color: #fff
						opacity: 0
						r1(font-size, 30)
						r2(left, 30, top, 106)
						animation-delay: .5s
						-webkit-animation-delay: .5s
					.p2text3
						animation-delay: 1s
						-webkit-animation-delay: 1s
						color: #fff
						opacity: 0
						r1(font-size, 13)
						r1(line-height, 18)
						r2(left, 30, top, 146)	
					.p2slide
						animation-delay: 1.5s
						-webkit-animation-delay: 1.5s
						opacity: 0
						r2(width, 320, height, 245)
						r2(left, 28, top, 240)
						img
							transition: .3s all linear
							-webkit-transition: .3s all linear
					.page2-slide-btn
						opacity: 0
						animation-delay: 1.5s
						-webkit-animation-delay: 1.5s
						r2(width, 174, height, 36)
						r1(bottom, 100)
						left: 50%
						transform: translate3d(-50%, 0, 0)
						-webkittransform: translate3d(-50%, 0, 0)
						background: #74fd3b
						color: #1f73fb
					.p2paga
						r1(width, 87)
						float:left
						height: 100%
						r1(font-size, 15)
						background-color: #242424
						color: #74fd3b
						r1(line-height, 36)
						text-align: center
					.p2paga-active
						background-color: #74fd3b
						color: #1f73fb
					.p3text3
						r1(top, 170)	
						r1(font-size, 10)
					.page3-slide-btn
						opacity: 0
						animation-delay: 1.5s
						-webkit-animation-delay: 1.5s
						background: none	
						r1(width, 280)
					.mask-con
						width: 100%
						height: 100%
						position: absolute
						left: 0
						top: 0
						background-color: rgba(0, 0, 0, .6)
					.p4_text1
						opacity: 0
						color: #fff
						r2(left, 30, top, 240)
						r1(font-size, 18)
						r1(width, 230)
						text-align: right
					.p4_text2
						animation-delay: .5s
						-webkit-animation-delay: .5s
						opacity: 0
						color: #74fd3b
						r2(left, 30, top, 270)
						r1(font-size, 46)
						r1(width, 230)
						text-align: right
					.p4_text3
						animation-delay: 1s
						-webkit-animation-delay: 1s
						opacity: 0
						color: #fff
						r1(width, 230)
						r1(font-size, 10)
						r2(left, 30, top, 330)
						text-align: right
						r1(line-height, 18)	
					.p5img
						animation-delay: 1.5s
						-webkit-animation-delay: 1.5s
					.p6text2
						opacity:0
						r1(top, 220)
						r1(font-size, 36)
						r1(line-height, 44)
					.p6-btn
						animation-delay: .5s
						-webkit-animation-delay: .5s
						opacity: 0
						r1(top, 340)
						r1(left, 30)
						r1(width, 300)	
						.p2paga:first-child
							r1(width, 180)
						.p2paga:last-child
							r1(width, 120)	
				.video-btn
					animation-delay: .5s
					-webkit-animation-delay: .5s
					opacity: 0
					background: url(https://gw.alicdn.com/tfs/TB1Ktt7RXXXXXaUXpXXXXXXXXXX-160-160.png) no-repeat
					background-size: 100%
					left: 50%
					r1(bottom, 160)
					transform: translate3d(-50%, 0, 0)
					-webkit-transform: translate3d(-50%, 0, 0)
					r2(width, 91, height, 91)
					.desc
						r1(font-size, 15)
						color: #74fd3b
						position: absolute
						r1(bottom, -30)
						left: 0
						text-align: center
						letter-spacing: 2px
						
				.bottom-btn
					r1(bottom, 20)
					r1(font-size, 30)
					color: #74fd3b
    				r2(width, 32, height, 18)
</style>


