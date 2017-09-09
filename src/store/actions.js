import {
  NEW_NOTE,
  TOGGLE_FAVORITE,
  DELETE_NOTE,
  TOGGLE_LIST_SHOW,
  UPDATE_NOTE,
  SET_CURRENT_ACTIVE_NOTE
} from './mutation-types';

export default {
  // 新增一篇文章
  newNote({ commit }) {
    commit(NEW_NOTE);
  },

  // 切换当前激活文章的 favorite 状态
  toggleFavorite({ commit }) {
    commit(TOGGLE_FAVORITE);
  },

  // 删除当前激活文章
  deleteNote({ commit }) {
    commit(DELETE_NOTE);
  },

  // 切换收藏文章列表
  toggleListShow({ commit }, data = { show: 'all' }) {
    commit(TOGGLE_LIST_SHOW, data);
  },

  // 文章编辑更新
  updateNote({ commit }, data = { note: {} }) {
    commit(UPDATE_NOTE, data);
  },

  // 点击文章标题，实时更新编辑文章内容
  setActiveNote({ commit }, data = { note: {} }) {
    commit(SET_CURRENT_ACTIVE_NOTE, data);
  }
}
