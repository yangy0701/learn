<template>
<!--    <div>-->
<!--        现在时间：{{state.nowTime}}-->
<!--    </div>-->
<!--    <button @click="getNowDate">获取时间</button>-->
  <div ref="refTest">
    现在时间：{{nowTime}}
  </div>
  <button @click="getNowDate">获取时间</button>
  <div>{{oldTime}}</div>
  <div>被子组件影响的值{{count}}</div>
  <div  v-for="item in list" >
    <span>{{item.name}}</span>
    <span>{{item.size}}</span>
  </div>
  <br>
  <son :list='list'  @props-click ='propsClick'></son>
</template>
<script setup>
  //reactive() 声明已个响应式对象
  //ref 声明一个任意类型发的响应式   ref本质是reactive()

  import {computed, onMounted, reactive, ref} from 'vue';
  import son from '/@/view/demo/son.vue'

  // export default {
  //   setup(){
  //     const state = reactive({
  //       nowTime:'2020'
  //     })
  //     function getNowDate(){
  //       state.nowTime = String(new Date());
  //     }
  //     return{
  //       state,
  //       getNowDate
  //     }
  //   }
  // }
  let nowTime = ref('0');
  const list = ref([{name:'123',size:'10'},{name:"234",size:'11'}])
  console.log(list)
  let count  = ref(0)
  function getNowDate(){
    nowTime.value = String(new Date());
  }
  function propsClick(obj){
    count.value++
  }
  //计算属性
  const oldTime = computed(()=>{
    return nowTime.value+'computed'
  })
</script>