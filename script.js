const TaskList = Vue.component('task-list', {
	props: ["title"],
  	template: `
  		<ul class="task-list">
  			<h1> {{ title }} </h1>
  			<hr />
  			<slot></slot>
  		</ul>
  	`
})

Vue.component('task', {
  	template: `
  		<li class="task">
  			<slot></slot>
  		</li>
 	`
})

var app = new Vue({
  	el: '#app',
  	data: {
  		"lists": []
  	}
})