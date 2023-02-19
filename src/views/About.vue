<template>
  <a-list :grid="{ gutter: 20, column: 8 }" size="small" :data-source="listData">
    <template #footer>
      <div>
        <b>ant design vue</b>
        footer part
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #extra>        
        </template>
        <div style="width: 40;height: 60;">
          <div >
            <img
            width="120"
            alt="logo"
            :src="item.vod_pic"
          />
          </div>         
          <div>
            <router-link :to="{path:'/play',query:{id: item.vod_id}}">
              {{ item.vod_name }}
            </router-link>
            
          </div>
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import {list} from '@/api/test1'
import { any, string } from 'vue-types';



export default defineComponent({
  components: {
  },
  setup() {
    let listData: any= ref();
  const a:any=fetch(" http://127.0.0.1:8000/api/movie/?name=狂飙", {
  "mode":"cors",
  "method": "GET"
}).then(response => response.json())
  .then(data =>
          {
            listData.value = data.data.list
           
          }
  
  );

    
    const pagination = {
      onChange: (page: number) => {
        console.log(page);
      },
      pageSize: 3,
    };
    
      
    
    return {
      listData,
      pagination,
   
    };
  },
});
</script>

