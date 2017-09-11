import * as types from './mutation-types'

const mutations = {
  [types.SET_ROOTFONTSIZE](state, value) {
    state.rootFontSize = value
  },
  [types.MODIFY_MENUFLAG](state, flag) {
    state.menuOpenFlag = flag
  }
}

export default mutations