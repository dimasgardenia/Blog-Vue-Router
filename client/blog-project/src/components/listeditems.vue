<template>
  <div class="row">
          <div class="thumbnail"  v-for="datas in data">
            <!-- <img src="..." alt="..."> -->
            <div class="caption">
              <h3>List Article</h3>
              <ul>
                <li>{{datas.title}}</li>
              </ul>
              <p><a href="#" class="btn btn-primary" role="button" v-on:click="getpress(datas)">Read</a></p>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    getpress (result) {
      this.$emit('getdata', result)
    }
  }
}
</script>
