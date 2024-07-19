<script setup lang=ts>

import type { Author } from "~/types/author";
let author: Author = {
    bio: "iergijetbrgehbnj",
    img: "ybhvbrhvbe",
    investments: [],
    name: "Homem",
    posts: [],
}

let didit = ref(false)
</script>

<template>
    <div style="width: 600px; display: block; margin: auto;">
        <Header />
        <div v-if="!didit">
            <br>
            <br>
            <h2 class="text-4xl text-center">R$ 20.000,00</h2>
            <br>
            <h4 class="text-xl text-center">Insira sua chave pix para o resgate:</h4>
            <br>
            <br>
            <input type="text" class="bg-gray-300 w-full h-[60px] text-2xl box-border p-5 rounded-md">
            <br>
            <button @click="() => didit = true"
                class="bg-[#FF7F11] w-full mt-3 rounded-md text-white font-bold uppercase h-[60px] flex justify-center items-center cursor-pointer"
                to="/resgatar">CONFIRMAR</button>
        </div>
        <div v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#419D78"
                class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check m-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
            </svg>
            <br>
            <h4 class="text-3xl text-center upppercase">TRANSFERÊNCIA REALIZADA</h4>
            <NuxtLink to="/"
                class="bg-[#FF7F11] w-full mt-3 rounded-md text-white font-bold uppercase h-[60px] flex justify-center items-center cursor-pointer">
                voltar</NuxtLink>
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