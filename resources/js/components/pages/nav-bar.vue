<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" :to="`/`">Laravel</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="`/blog`">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="`/post`">Post</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="`/about`">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="`/contact`">Contact</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <!-- @guest -->
                        <li class="nav-item">
                            <router-link class="nav-link" :to="`/login`">Login</router-link>
                        </li>
                        <!-- @if (Route::has('register')) -->
                            <li class="nav-item">
                                <router-link class="nav-link" :to="`/register`">Register</router-link>
                            </li>
                        <!-- @endif -->
                    <!-- @else -->
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Name
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="">
                                    Logout
                                </a>
                            </div>
                        </li>
                    <!-- @endguest -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
