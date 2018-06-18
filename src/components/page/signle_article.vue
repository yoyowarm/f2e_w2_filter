<template>
  <div class="single">
    <div v-for="(item,index) in getInit" class="single_item">
      <div class="article_photo" :style="{ backgroundImage: 'url(' + `${item.Picture1}` + ')' }"></div>
      <div class="article_info">
        <router-link to="/content_article"><h3>{{item.Name}}</h3></router-link>
        <div class="description">
          {{item.Description}}
        </div>
        <div class="tag">
         <span class="title">行政區:</span> <span class="text">{{item.Zone}}</span>
        </div>
        <div class="open">
         <span class="title">開放時間:</span> <span class="text">{{item.Opentime}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapState,mapGetters,mapMutations } from 'vuex'
import fontawesome from '@fortawesome/fontawesome'
export default {
  name: 'search_results',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  },
  computed:{
    getInit(){
      let data = this.$store.getters.getInit
      console.log(data)
     return this.$store.getters.getInit
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.single{
  .single_item{
  margin:10px auto;
  text-align: left;
  transition: all 0.3s;
  display: flex;
  flex-wrap: nowrap;
  box-shadow: 0px 0px 10px #999;
  background: #fff;
  .article_photo{
    width: 220px;
    height: 220px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center
  }
  .article_info{
    padding: 20px;
    h3{
      font-family: Roboto-Bold;
      font-size: 20px;
      color: #9013FE;
      line-height: 36px;
      display: inline;
    }
    .tag{
      margin-top: 40px;
      .title{
      font-weight: 700;
      font-size: 12px;
      color: #000000;
      }
      .text{
        font-size: 12px;
        color:#fff;
        background: #D7D7D7;
        border-radius: 100px;
        padding: 2px 10px
      }
    }
    .open{
      margin-top: 5px;
      .title{
      font-weight: 700;
      font-size: 12px;
      color: #000000;
      }
      .text{
        font-size: 12px;
        color: #9B9B9B;
      }
    }
  }
  &:hover{
    box-shadow: 5px 5px 20px rgb(202, 202, 202);
  }
  .description{
    font-family: Roboto-Regular;
    font-size: 16px;
    color: #000;
    line-height: 24px;
    text-overflow : ellipsis;
    // white-space : nowrap;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 50px;
    max-width: 520px;
    overflow: hidden;
    margin:12px 0
  }
  }
  
}
h1, h2 {
  font-weight: normal;
}
h3{
  margin: 0
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
  text-decoration:none;
}
</style>
