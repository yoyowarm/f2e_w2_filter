<template>
  <div class="hello">
    <div class="topbar">
      <div class="container">
        <div class="logo">Have Fun</div>
        <div class="search"><input type="text" placeholder="輸入欲查詢地區"><i class="fas fa-search fasearch"></i></div>
      </div>
    </div>
    <div class="storyArea">
      <div class="siderBar">
        <div class="filter">
          <div class="location">
            <h3>Location</h3>
            <select>
              <option  v-for="(item,index) in LocationList" >{{item}}</option>
              
            </select>
          </div>
          <div class="date">
            <h3>Date</h3>
          </div>
          <div class="Categories">
            <h3>Categories</h3>
            <ul class="categories-list">
              <li v-for="(item,index) in filterItem"><label  class="label--checkbox">{{item}}<input type="checkbox"><span class="checkmark"></span></label></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="story">
         <router-view></router-view>
      </div>
    </div>
   
  </div>
</template>

<script>
import { mapActions,mapState,mapGetters,mapMutations } from 'vuex'
import fontawesome from '@fortawesome/fontawesome'
import fasearch from '@fortawesome/fontawesome-free-solid/fasearch'
fontawesome.library.add(fasearch)
export default {
  name: 'HelloWorld',
  data () {
    return {
      filterItem:['All','Entertainment','Food','Learning','Outdoors'],
      LocationList:['高雄市','三民區','內門區','美濃區','大樹區','小港區','六龜區','仁武區','左營區','田寮區','永安區','甲仙區','鼓山區','杉林區','岡山區','前鎮區','新興區','苓雅區','茂林區','茄萣區','梓官區','旗津區','桃源區','楠梓區','前金區','鳳山區','旗山區','橋頭區','燕巢區','茄萣區','彌陀區','鹽埕區','鳥松區','阿蓮區','大寮區','內門區','湖內區'],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    
  },
  created(){
    this.$store.dispatch('init')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.topbar {
  width: 100%;
  height: 92px;
  background: #7828B4;
  .container{
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start
  }
  
  .logo{
    flex-grow:1;
    text-align: left;
    color: #fff;
    font-family: Optima-ExtraBlack;
    font-size: 2em;
    padding:24px 0 24px 40px
  }
  .search{
    flex-grow:3;
    text-align: left;
    padding:24px 0;
    position: relative;

    input {
      background: none;
      border: 0px;
      border-bottom: 1px solid #fff;
      color: #fff;
      font-size: 1.2em;
      width: 350px;
      padding: 5px 0 5px 30px;
      &:focus{outline:none}
    }
    .fasearch {
      color: #fff;
      position: absolute;
      left: 0;
      top: 32px
    }


  }
}
.storyArea {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content:space-between;
    .siderBar{
      flex-grow:1;
      .filter{
      width: 300px;
      height: 400px;
      background: #ebebeb;
      .location{
        padding: 24px 40px;
        text-align: left;
        border-bottom:1px solid #d7d7d7;
        select {
          background: #fff;
          width: 200px;
          margin-top: 20px;
          border: 0px;
          border-radius: 0px  
        }
      }
      .date{
        padding: 24px 40px;
        text-align: left;
        border-bottom:1px solid #d7d7d7;
      }
      .Categories{
        padding: 24px 40px;
        text-align: left;
        .categories-list li{
          display: block;
          margin: 4px 0;
        }
      }
      }
    }
    .story{
      flex-grow:12;
      padding: 0 30px
    }
  }
.label--checkbox{
   display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
    }
    &:hover input ~ .checkmark{
       background-color: #ccc;
    }
    input:checked ~ .checkmark {
    background-color: #9013FE ;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.checkmark:after {
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h3{
  margin: 0
}
/* a {
  color: #42b983;
} */
</style>
