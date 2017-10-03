<template>
  <form class="form-horizontal" @submit="postdata(bucket)">
    <div class="form-group">
      <label for="inputEmail3" class="control-label">Author</label>
        <input type="text" class="form-control" v-model="bucket.author" placeholder="Author">
      </div>
    <div class="form-group">
      <label for="inputPassword3" class="control-label">Title</label>
        <input type="text" class="form-control" v-model="bucket.title" placeholder="Title">
      </div>
    <div class="form-group">
        <div class="checkbox">
            <label for="inputPassword3" class="control-label">text area</label>
          <textarea class="form-control" v-model="bucket.content" rows="3"></textarea>
      </div>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-default">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      bucket: {
        author: '',
        title: '',
        content: ''
      }
    }
  },
  methods: {
    postdata (data) {
      event.preventDefault()
      axios.post('http://localhost:3000/post', data)
      .then(({data}) => {
        this.$emit('tambahdata', data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
