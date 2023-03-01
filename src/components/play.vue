<template>
  <div style="height: 40%;">
     <iframe :src="play_url.url"  marginwidth="0" marginheight="0" border="0" scrolling="no" frameborder="0" topmargin="0" width="100%" height="100%" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen=" msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
  </div>
    <div>
        <a-list :data-source="modelRef.movue.vod_play_url">
            <template #renderItem="{ item }">
<!--                <a-button  @click="play(item)">{{ item.name }}</a-button>-->
                <a-radio-group v-model:value="value1" button-style="solid">
                    <a-radio-button :value="item.name" @click="play(item)">{{ item.name }}</a-radio-button>
                </a-radio-group>
            </template>
            </a-list>
    </div>

</template>

<script lang="ts">
import { defineComponent,reactive,ref } from 'vue';
import { useRouter } from "vue-router";
import { any } from 'vue-types';


export default defineComponent({

    setup(){
        const  id= useRouter().currentRoute.value.query.id;
        const modelRef = reactive({
            "movue": any
        })

        let allURL;
// if (process.env.VUE_APP_FLAG == "dev") {
//   allURL = process.env.VUE_APP_BASEURL;
// } else{
//   allURL = "https://www.zaojingyoutu.top:8000/api/";
// }
allURL = "https://www.zaojingyoutu.top:8000/api/"
    const a:any=fetch( allURL + "movie/?id=" + id, {
  "mode":"cors",
  "method": "GET"
}).then(response => response.json())
  .then(data =>
          {        

            let movue:any  = data.data.list[0]
            let vod_play_url_list: any =movue.vod_play_url.split('#')
            let    collects:any =[]
            for(let i=0;i<vod_play_url_list.length;i++){
                let collect:any = vod_play_url_list[i].split('$')
                // collects[collect[0]] = 'https://vip.zykbf.com/?url='  + collect[1]
                
                collects.push({"name":collect[0],'url':'https://vip.zykbf.com/?url='  + collect[1]})
            }      
            movue.vod_play_url = collects

            modelRef.movue = movue
          }
  
  );
  const play_url = reactive({
            "url": 'https://vip.zykbf.com/?url='
        })

  const play=(value: { url: string; name:string})=>{
    play_url.url =value.url
      value1.value =value.name
  }
const value1 = ref<string>()
  return{
    modelRef,
    play,
    play_url,
      value1

  }
    }



})
</script>