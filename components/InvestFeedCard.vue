<script setup>
let props = defineProps(["image", "name", "desc", "likes", "author", "value", "required", "website"])
</script>

<template>
    <NuxtLink to="/investir" class="block pt-3 w-full">
        <NuxtLink to="/profile" class="block">
            <header class="flex items-center gap-3">
                <img class="min-w-[40px] h-[40px] object-cover rounded-md" :src="props.author.img" alt="Proile">
                <h4 class="font-medium">{{ props.author.name }}</h4>
            </header>
        </NuxtLink>
        <h2 class="text-2xl mt-2">{{ props.name }}</h2>
        <progress :max="props.required" :value="props.value" class="w-[100%] mb-3 mt-3 rounded-sm"
            color="#FF7F11"></progress>
        <div>R$ {{ props.value }} / R$ {{ props.required }}</div><br>
        <p class="block">{{ props.desc }}</p>
        <div class="block pt-3">
            <div class="gap-3">
                <div class="block">
                    <img class="w-full h-full rounded-md mb-4" :src="props.image" alt="company Img">
                </div>
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
    </NuxtLink>
</template>