import {
  NEW_NOTE,
  TOGGLE_FAVORITE,
  DELETE_NOTE,
  TOGGLE_LIST_SHOW,
  UPDATE_NOTE,
  SET_CURRENT_ACTIVE_NOTE
} from './mutation-types';

export default {
  [NEW_NOTE](state, data = { newNote: {
    id: +new Date(),
    title: '',
    content: '',
    favorite: false
  } }) {
    state.notes.push(data.newNote);
    state.activeNote = data.newNote;
  },

  [TOGGLE_FAVORITE](state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  [DELETE_NOTE](state) {
    for (let i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === state.activeNote.id) {
        state.notes.splice(i, 1);
        state.activeNote = state.notes[0] || {};
        return;
      }
    }
  },

  [TOGGLE_LIST_SHOW](state, data) {
    state.show = data.show;
  },

  [UPDATE_NOTE](state, data) {
    state.notes.forEach((note) => {
      if (note.id === data.note.id) {
        note = data.note;
      }
    });
  },

  [SET_CURRENT_ACTIVE_NOTE](state, data) {
    state.activeNote = data.note;
  }
}
