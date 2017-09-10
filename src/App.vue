<template>
  <div id="app" class="app">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<style>
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }

  .app {
    display: flex;
    align-items: stretch;
    height: 100vh;
  }
</style>

<script>
import Toolbar from './components/Toolbar';
import NoteList from './components/NoteList';
import Editor from './components/Editor';

export default {
  name: 'app',
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>
