<template>
	<div class="c-header-ctn" :style="{backgroundColor: menuOpenFlag ? '#fff' : '#06F'}">
		<div class="i-logo f-h-full f-pr" 
			@click="toggleMenu" 
			:style="{color: menuOpenFlag ? '#06F' : '#fff', background: touchingFlag ? '#0052cc' : 'none'}" 
			@touchstart.prevent="touchStartToggleBtn"
		    @touchend.prevent="touchEndToggleBtn"> 
			<i class="icon ion-navicon-round f-pa f-ib"></i> 	
		</div>
		
		<div class="c-header-inner f-pa f-w-full f-h-full">
			<img class="c-h-logo f-pa" v-show="!menuOpenFlag" :src="logo" alt="">
			<img class="c-h-logo f-pa" v-show="menuOpenFlag" :src="logoA" alt="">
		</div>
	</div>
</template>


<script>
	import { LOGO_GIF, LOGO_A_GIF } from '@/common/js/config'
	import { mapGetters, mapMutations } from 'vuex'
	import Scroll from '@/base/scroll/scroll'
	export default{
		name: 'CHeader',
		data() {
			return {
				logo: LOGO_GIF,
				logoA: LOGO_A_GIF,
				touchingFlag: false
			}
		},
		computed: {
			...mapGetters([
				'menuOpenFlag'
			])
		},
		created() {
			
		},
		components: {
			Scroll
		},
		methods: {
			...mapMutations({
				modify_menuflag: 'MODIFY_MENUFLAG'
			}),
			toggleMenu() {
				this.modify_menuflag(!this.menuOpenFlag)

				// this.modify_menuflag(!this.menuOpenFlag)
				// let route = !this.menuOpenFlag ? 'index' : 'menu'
				// this.$router.push(route)
			},
			touchStartToggleBtn(){
				this.touchingFlag = true
			},
			touchEndToggleBtn(){
				this.touchingFlag = false
			}
		},
		watch: {
			menuOpenFlag(d) {
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '../../common/css/index.styl'
	.c-header-ctn
		position: fixed
		left:0
		top:0
		right:0
		width: 100%
		z-index: 100
		r1('height', 50)
		r1('font-size', 14)
		background-color: $color-background
		border-bottom: 1px solid #06c
		r1(border-bottom-width, 1)
		.c-header-inner
			left:0
			top:0
		.c-h-logo
			r1('width', 85)
			r1('height', 30)
			left: 50%
			top: 50%
			transform: translate3d(-50%, -50%, 0)
			-webkit-transform: translate3d(-50%, -50%, 0)
		.i-logo
			r1('font-size', 20)
			r1('width', 50)
			r1('padding-left', 17)
			r1('padding-top', 15)
			color: #fff
			left:0
			top:0
			z-index: 10

</style>