<script setup>
import img from "@/assets/logo.png"</script>

<template>
    <header class="w-full h-16 flex align-center my-8">
        <img :src="img" alt="logo" class="rounded-md mr-3">
        <h1 class="self-center">YOUNG LEADERS</h1>
        <NuxtLink to="/add" class="self-center ml-auto bg-[#FF7F11] rounded-md p-1 h-[60px] w-[60px] flex justify-center items-center cursor-pointer hover:opacity-80 transition-colors">

            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_19_6)">
                    <path d="M12 5V19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_19_6">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </NuxtLink>


    </header>
</template>