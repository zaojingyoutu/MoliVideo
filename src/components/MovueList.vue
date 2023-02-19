<template>
  <a-list 
  :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3, xxxl: 2 }"
    size="small"
    :data-source="listData"
  >
    <template #footer>
      <div>
        <b>ant design vue</b>
        footer part
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #extra> </template>
        <div style="width: 40; height: 60">
          <div>
            <img width="120" alt="logo" :src="item.vod_pic" />
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
    const a: any = fetch(" https://www.zaojingyoutu.top:8000/api/movie/?name="+kw, {
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
});
</script>

