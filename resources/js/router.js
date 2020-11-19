import Vue from 'vue';
import VueRouter from 'vue-router'


require('./extra/filter');
require('./extra/progressbar');
require('./extra/customEvents');


import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import Post from './components/Post.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/blog', component: Blog},
        {path: '/post', component: Post},
        {path: '/about', component: About},
        {path: '/contact', component: Contact},
        {path: '/login', component: Login},
        {path: '/register', component: Register},

    ],
    mode: 'history',
})

