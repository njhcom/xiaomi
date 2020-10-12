<template>
  <div class="hotgoods hardware">
    <div class="hardware-in">
      <div class="hotgoods-top hardware-top">
        <h2>智能硬件</h2>
        <div class="hotgoods-r hardware-r">
          <button>&lt;</button><button>&gt;</button>
        </div>
      </div>
      <div class="hardware-main">
        <div class="hardware-l">
          <img src="../assets/image/T1IhLjBC_T1RXrhCrK.jpg" alt="" />
        </div>
        <ul>
          <li v-for="(item,index) in getnewdata.hardware" :key="index">
            <img :src="item.imgsrc" alt="" />
            <div class="detail">
              <p>{{item.title}}</p>
              <p class="qianse">{{item.desc}}</p>
              <p class="money">{{item.price}}</p>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    getnewdata: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style>
</style>