<template>
  <div class="template-holder" v-if="data !== null">
    <div class="filter">
      <div class="input-group">
        <span class="input-group-addon input-group-title">Marketplace</span>
        <span class="input-group-addon">Search</span>
        <input type="text" class="form-control" placeholder="Search here...">

        <span class="input-group-addon" style="margin-left: 20px;">Categories</span>
        <select class="form-control">
          <option>School</option>
          <option>Office</option>
        </select>
      </div>
    </div>
    <div class="template-list">
      <product v-for="item, index in data" v-if="data !==null" :item="item" :key="item.id" :index="index"></product>
    </div>
  </div>
</template>
<style scoped>
.template-holder{
  width: 100%;
  float: left;
}
.filter{
  width: 75%;
  float: left;
  margin-right: 25%;
  height: 50px;
}

.form-control{
  height: 45px !important;
}
.input-group{
  margin-bottom: 10px !important;
}
.input-group-addon{
  width: 100px !important;
  background: #22b173 !important;
  color: #fff !important;
}
.input-group-title{
  width: 100px !important;
  background: #028170 !important;
  color: #fff !important;
}

.template-list{
  width: 100%;
  float: left;
  margin-top: 25px;
}
</style>
<script>
import ROUTER from '../../router'
import AUTH from '../../services/auth'
import CONFIG from '../../config.js'
import axios from 'axios'
export default {
  mounted(){
    this.retrieve()
  },
  data(){
    return {
      user: AUTH.user,
      config: CONFIG,
      errorMessage: null,
      data: null,
      prevIndex: null
    }
  },
  components: {
    'product': require('modules/marketplace/Product.vue')
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    },
    retrieve(){
      let parameter = {
        account_id: this.user.userID
      }
      this.APIRequest('marketplace/retrieve', parameter).then(response => {
        if(response.data.length > 0){
          this.data = response.data
        }else{
          this.data = null
        }
      })
    },
    makeActive(index){
      if(this.prevIndex === null){
        this.prevIndex = index
        this.data[index].active = true
      }else{
        if(this.prevIndex !== index){
          this.data[this.prevIndex].active = false
          this.data[index].active = true
          this.prevIndex = index
        }else{
          this.data[this.prevIndex].active = false
          this.prevIndex = null
        }
      }
    }
  }
}
</script>

