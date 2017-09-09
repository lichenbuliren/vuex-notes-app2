<template>
  <div class="toolbar">
    <i class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30"></i>
    <i @click="newNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<style>
  .toolbar{
    width: 80px;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;
  }

  .starred {
    color: #F7AE4F;
  }

  .toolbar i {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }

  .toolbar i:hover{
    opacity: 1;
  }
</style>


<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Toolbar',
  methods: mapActions([
    'newNote',
    'toggleFavorite',
    'deleteNote'
  ]),
  computed: mapState([
    'activeNote'
  ])
}
</script>
