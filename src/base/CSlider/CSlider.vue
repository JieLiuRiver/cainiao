<template>
	<div class="c-slider-ctn f-w-full" ref="slider">
		<div class="c-slider-group f-clear f-ib f-pr" ref="sliderGroup" :style="sliderGroupStyles">
	      <slot>
	      </slot>
	    </div>
	</div>
</template> 


<script>
	import BScroll from 'better-scroll'
	import { mapGetters, mapMutations } from 'vuex'
	export default{
		name: 'CSlider',
		props: {
	      // 是否轮播
	      loop: {
	        type: Boolean,
	        default: true
	      },
	      // 是否自动
	      autoPlay: {
	        type: Boolean,
	        default: true
	      },
	      // 间隔
	      interval: {
	        type: Number,
	        default: 4000
	      }
	    },
		data() {
			return {
				children: [],
				slideWidth: 0
			}
		},
		mounted() {
			setTimeout(() => {
				this._setSliderWidth()
			}, 20)
		},
		methods: {
			_setSliderWidth() {
				this.children = this.$refs.sliderGroup.children
				let _width = 0
				this.slideWidth = this.$refs.slider.clientWidth 
				// for (let i = 0; i < this.children.length; i++) {
		  //         let child = this.children[i]
		  //         child.style.width = window.innerWidth/this.rootFontSize +'rem'
		  //         _width += this.slideWidth
		  //       }
		       	// this.$refs.sliderGroup.style.width = _width/this.rootFontSize + 'rem'
			}
		},
		computed: {
			...mapGetters([
				'rootFontSize'
			]),
			sliderGroupStyles() {
				return {
					// width: `${(this.children.length || 1) * slideWidth}%`
				}
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '../../common/css/index.styl'
	.c-slider-ctn
		background-color: #fff
		.c-slider-group
			position: relative
			overflow: hidden
			white-space: nowrap
</style>