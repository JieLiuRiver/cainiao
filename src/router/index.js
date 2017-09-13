import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = (resolve) => {
  import('@/components/Index/Index').then((module) => {
    resolve(module)
  })
}


const Homeh5 = (resolve) => {
  import('@/components/CHomeh5/CHomeh5').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/homeh5',
      component: Homeh5,
      name: 'Homeh5'
    },
    {
      path: '/index',
      component: Index,
      name: 'Index'
      /*
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
      */
    }
  ]
})
