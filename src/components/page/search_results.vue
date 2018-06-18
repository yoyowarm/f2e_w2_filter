<template>
  <div class="search_results">
    <div class="search_head">
      <h3>Showing<span class="reault_limit">{{this.$store.state.total}}</span>results by...</h3>
    </div>
    <div class="search_filter">
      <ul>
        <li><span class="filter_text">Koahsiung</span><i class="fas fa-times"></i></li>
        <li><span class="filter_text">Entertainment</span><i class="fas fa-times"></i></li>
      </ul>
    </div>
    <singleArticle></singleArticle>
   
  </div>
</template>

<script>
import singleArticle from './signle_article'
import { mapActions,mapState,mapGetters,mapMutations } from 'vuex'
import fontawesome from '@fortawesome/fontawesome'
import fatimes from '@fortawesome/fontawesome-free-solid/fatimes'
fontawesome.library.add(fatimes)
export default {
  name: 'search_results',
  data () {
    return {
      
      msg: 'Welcome to Your Vue.js App'
    }
  },
   components: {
    singleArticle
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$text-color: #9013FE;
.search_head {
  text-align: left;
  .reault_limit{
    color: #7828B4;
    padding: 0 8px;
    font-weight: 700
  }
  h3{
  font-family: Roboto-Regular;
  font-size: 24px;
  color: #000000;
  font-weight: 400;
  margin-bottom: 10px
  }
}
.search_filter{
  text-align: left;
  
  li{
    color: $text-color;
    border: 1px solid #9013FE;
    border-radius: 100px;
    padding: 8px 8px 8px 16px;
    transition: all 0.3s;
    &:hover{
      background: #9013FE;
      color:#fff
    }
  }
  .filter_text{
    font-family: Roboto-Italic;
    font-size: 14px;
  }
  .fa-times{
    font-size: 14px;
    padding:0 9px;
    cursor: pointer;
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
