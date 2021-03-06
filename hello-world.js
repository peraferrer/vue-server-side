/**
 * Created by gperaferrer on 10/17/16.
 */

// Step 1: Create a Vue instance
var Vue = require('vue')
var app = new Vue({
  render: (h) => h('p', 'hello world')
})

// Step 2: Create a renderer
var renderer = require('vue-server-renderer').createRenderer()

// Step 3: Render the Vue instance to HTML
renderer.renderToString(app, (error, html) => {
  if (error) throw error
  console.log(html)
  // => <p server-rendered="true">hello world</p>
})