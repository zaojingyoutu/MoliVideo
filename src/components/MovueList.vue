<template>
  <a-list 
  :grid="{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3, xxxl: 2 }"
    size="small"
    :data-source="listData"
  >
    <template #footer>
    </template>
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #extra> </template>
        <div style="width: 40; height: 60">
          <div>
            <img v-if="item.vod_pic" width="120" alt="logo" :src="item.vod_pic" />
            <img v-else width="120" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          </div>
          <div>
            <router-link :to="{ path: '/play', query: { id: item.vod_id } }">
              {{ item.vod_name }}
            </router-link>
          </div>
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent ,ref} from "vue";
import { list } from "@/api/test1";
import { any, string, VueTypeValidableDef } from "vue-types";
import { useRouter } from "vue-router";

export default defineComponent({
  inject:["reload"],
  setup() {
    
    let  kw= useRouter().currentRoute.value.query.wd;
    if(kw == "" || kw == null || kw == undefined){
      kw = 'all'
    }
    let listData: any = ref();

    let allURL;
// if (process.env.VUE_APP_FLAG == "dev") {
//   allURL = process.env.VUE_APP_BASEURL;
// } else{
//   allURL = "https://www.zaojingyoutu.top:8000/api/";
// }
allURL = "https://www.zaojingyoutu.top:8000/api/";
    const a: any = fetch( allURL +"movie/?name="+kw, {
      mode: "cors",
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        listData.value = data.data.list;
      });

    const pagination = {
      onChange: (page: number) => {
        console.log(page);
      },
      pageSize: 3,
    };

    return {
      listData,
      pagination,
      kw
    };
  },
  watch:{
    $route(to, from) {
//监听路由是否变化
if (to.query.wd != from.query.wd) {
location. reload()
}
},
  }
});
</script>

