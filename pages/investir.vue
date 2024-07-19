<script setup lang=ts>

import qr from "@/assets/qr.png"

import type { Author } from "~/types/author";
let author: Author = {
    bio: "iergijetbrgehbnj",
    img: "ybhvbrhvbe",
    investments: [],
    name: "Homem",
    posts: [],
}
let didit = ref(false)
let val = ref(100);
</script>

<template>
    <div style="width: 600px; display: block; margin: auto;">
        <Header />
        <div v-if="didit">
            <br>
            <br>
            <h2 class="text-4xl text-center">R$ {{ val }}</h2>
            <br>
            <h4 class="text-xl text-center">Realize o pagamento</h4>
            <br>
            <img :src="qr" alt="qr code" class="m-auto">
            <br>
            <p>00020532970014br.gov.bcb.pix0178423e4123-e12b-12d1-a456-432257890000 5204000053012343202BR5913Cicrano de
                Tal3008BRASILIA61050503***63041D3D</p>
            <br>
            <br>
            <NuxtLink to="/"
                class="bg-[#FF7F11] w-full mt-3 rounded-md text-white font-bold uppercase h-[60px] flex justify-center items-center cursor-pointer">
                VOLTAR</NuxtLink>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
        <div v-else>
            <br>
            <br>
            <h4 class="text-3xl text-center uppercase">Valor do investimento</h4>
            <br>
            <input type="number" class="bg-gray-300 w-full h-[60px] text-2xl box-border p-5 rounded-md" v-model="val">
            <br>
            <div @click="() => didit = true"
                class="bg-[#FF7F11] w-full mt-3 rounded-md text-white font-bold uppercase h-[60px] flex justify-center items-center cursor-pointer">
                INVESTIR</div>
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