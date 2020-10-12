<template>
  <div>
      <Header/>
      <Menu/>
      <Banner/>
      <Bootentry/>
      <Hotgoods :getnewdata='getnewdata'/>
      <Hardware :getnewdata='getnewdata'/>
      <Footer/>
      <ul><li v-for="item in getnewdata" :key="item.id">
          
          </li></ul>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue';
import Banner from '@/components/Banner.vue';
import Bootentry from '@/components/Bootentry.vue';
import Hotgoods from '@/components/Hotgoods.vue';
import Hardware from '@/components/Hardware.vue';
import Footer from '@/components/Footer.vue';
export default {
    data() {
        return {
            datalist: {}
        }
    },
    components:{
        Header,
        Menu,
        Banner,
        Bootentry,
        Hotgoods,
        Hardware,
        Footer
    },
    created(){
        this.$store.dispatch('getdata')
    },
    computed:{
        getnewdata(){
            return this.$store.state.data
        }
    }
        
        

    
}
</script>

<style>

</style>