<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 justify-content-center">
      <div class="modal-content mx-auto mt-3" max-width="800">
        <div class="card">
          <h3 class="card-header">
            Area Detail
          </h3>
          <div class="card-body">
            <div class="mb-3">
              <label
                class="form-label"
              >
                ID Area:
              </label>
              <label
                class="form-label"
              >
                <b>{{ area.id }}</b>
              </label>
            </div>
            <div class="mb-3">
              <label
                class="form-label"
              >
                Sequence ID:
              </label>
              <label
                class="form-label"
              >
                <b>{{ area.sequence }}</b>
              </label>
            </div>
            <div class="mb-3">
              <label
                class="form-label"
              >
                Name:
              </label>
              <label
                class="form-label"
              >
                <b>{{ area.name }}</b>
              </label>
            </div>

            <button
              type="button"
              class="btn btn-danger"
              @click="back"
            >
              Back
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "@/plugins/axios";

export default {
  async asyncData({params}){
    const { data } = await axios.get('/areas/'+params.detail)
    return {area: data, origin: params.origin, prevData:params.data, keyword:params.kw}
  },
  data(){
    return{
      area:{},
      origin:'',
      prevData:{},
      keyword:''
    }
  },
  created() {
    console.log('keyword',this.keyword)
  },
  mounted() {
    console.log(this.prevData)
  },
  methods:{
    back(){
        this.$router.push({name:this.origin, params:{kw:this.keyword, data:this.prevData}})
    },
  }
}
</script>
