<script setup>
let props = defineProps(["imgs", "name", "desc", "likes", "author"])
</script>

<template>
    <div class="block pt-3">
        <NuxtLink to="/profile" class="block">
            <header  class="flex items-center gap-3 w-[40px] h-[40px]">
                <img class="min-w-[40px] h-[40px] object-cover rounded-md" :src="props.author.img" alt="Proile">
                <h4 class="font-medium">{{ props.author.name }}</h4>
            </header>
        </NuxtLink>
        <p class="block text-justify">{{ props.desc }}</p>
        <div class="block pt-3">
            <div class="gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>

                {{ props.likes }} likes
            </div>
        </div>
        <br>
        <hr>
        <br>
    </div>
</template>