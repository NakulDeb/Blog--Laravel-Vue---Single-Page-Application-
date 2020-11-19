<template>
    <div>
        <nav-bar></nav-bar>
        <h3 class="text-center py-3 text-secondary">Welcome</h3>
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

