<script setup lang=ts>

import type { Author } from "~/types/author";
let author: Author = {
    bio: "iergijetbrgehbnj",
    img: "ybhvbrhvbe",
    investments: [],
    name: "Homem",
    posts: [],
}
</script>

<template>
    <div style="width: 600px; display: block; margin: auto;">
        <Header />

        <div class="wrapper block">
            <h2 class="text-3xl font-medium pt-4">Captação de Investimentos</h2>
            <div class="recent-project w-full h-50 block bg-[#e3e3e3] p-4 my-4 rounded-md">
                    <h3 class="text-2xl font-medium">Novo Google</h3>

                <div class="progress mt-5 block">
                    <h3 class="progress">R$ 20.000 / 50.000</h3>
                    <Progress max="50000" value="20000" class="rounded-md mt-3 w-full"/>
                    <NuxtLink class="bg-[#FF7F11] w-full mt-3 rounded-md text-white font-bold uppercase" to="/resgatar">Resgatar</NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.feed-content>.content {
    width: 100%;
    max-height: 300px;
    background-color: #e3e3e3
}
</style>