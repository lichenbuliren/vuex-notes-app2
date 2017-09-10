<template>
  <div class="notes-list">
    <div class="list-header">
      <h2>Notes | heavenru.com</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- all -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toggleShow('all')"
            :class="{active: show === 'all'}">All Notes</button>
        </div>

        <!-- favorites -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toggleShow('favorite')"
            :class="{active: show === 'favorite'}">Favorites</button>
        </div>
      </div>

      <div class="btn-group btn-group-justified" role="group">
        <div class="input-group search">
          <input type="text" class="form-control" v-model="search" placeholder="Search for...">
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-search"></i>
          </span>
        </div>
      </div>

    </div>

    <!-- 渲染笔记列表 -->
    <div class="container">
      <div class="list-group">
        <div
          v-for="(note, index) in searchNotes" :key="index"
          class="list-group-item"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.title.trim().substring(0,30)}}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .notes-list {
    flex:1;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  .list-header {
    padding: 5px 25px 25px 25px;
  }

  .list-header .search{
    margin-top: 20px;
  }

  .list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }

  .container {
    height: calc(100% - 204px);
    max-height: calc(100% - 204px);
    overflow: auto;
    width: 100%;
    padding: 0;
  }

  .container .list-group-item{
    border: 0;
    border-radius: 0;
  }

  .list-group-item-heading{
    font-weight: 300;
    font-size: 15px;
  }
</style>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
export default {
  name: 'NoteList',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters([
      'filteredNotes'
    ]),

    ...mapState([
      'show',
      'activeNote'
    ]),

    searchNotes() {
      if (this.search.length > 0) {
        return this.filteredNotes.filter((note) => note.title.toLowerCase().indexOf(this.search) > -1);
      } else {
        return this.filteredNotes;
      }
    }
  },
  methods: {
    ...mapActions([
      'toggleListShow',
      'setActiveNote'
    ]),

    toggleShow(type) {
      this.toggleListShow({ show: type});
    },

    updateActiveNote(note) {
      this.setActiveNote({ note });
    }
  }
}
</script>


