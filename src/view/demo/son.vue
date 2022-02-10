<template>
  <div >子组件</div>
  <div>{{list}}</div>
  <div  v-for="item in list">
     <span>{{item.name}}</span>
     <span>{{item.size}}</span>
  </div>

  <button @click="$emit('propsClick',{size:'111'})">抛出打印</button>
</template>
<script setup>
   import {defineProps} from "vue";
   defineProps({
     list:{
       type:Array,
       default:()=>{
         return []
       }
     }
   })
</script>