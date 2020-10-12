<template>
  <div class="hotgoods">
    <div class="hotgoods-top">
      <h2>大米明星单品</h2>
      <div class="hotgoods-r"><button>&lt;</button><button>&gt;</button></div>
    </div>
    <ul>
      <li v-for="(item, index) in getnewdata.hotgoods" :key="index">
        <img :src="item.imgsrc" alt="" />
        <div class="detail">
          <p>{{ item.title }}</p>
          <p class="qianse">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
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