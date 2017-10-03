<template>
  <div class="col-md-8">
        <div class="thumbnail">
          <!-- <img src="..." alt="..."> -->
          <div class="caption">
            <h3>List Content</h3>
            <ul>
              <li>{{result.title}}</li>
              <li>{{result.author}}</li>
              <li>{{result.content}}</li>
            </ul>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  props: ['result']
}
</script>
