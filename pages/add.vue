<template>
    <div style="width: 600px; display: block; margin: auto;">
        <Header />
        <div>
            <br>
            <br>
            <h4 class="text-4xl text-center">Novo investimento</h4>
            <br>
            <br>
            <input type="text" class="bg-gray-300 w-full h-[60px] text-2xl box-border p-5 rounded-md" placeholder="Nome">
            <br>
            <br>
            <textarea name="" placeholder="Descrição" class="bg-gray-300 w-full h-[100px] text-2xl box-border p-5 rounded-md" ></textarea>
            <br>
            <br>
            <input type="number" class="bg-gray-300 w-full h-[60px] text-2xl box-border p-5 rounded-md" placeholder="Valor do investimento (R$)">
            <br>
            <br>
            <input type="file"  class="bg-gray-300 w-full h-[60px] text-2xl box-border p-5 rounded-md" placeholder="Imagens">
            <br>
            <NuxtLink to="/"
                class="bg-[#FF7F11] w-full mt-3 rounded-md text-white font-bold uppercase h-[60px] flex justify-center items-center cursor-pointer">
                PEDIR INVESTIMENTO
            </NuxtLink>
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
    </div>
</template>

<style>
.feed-content>.content {
    width: 100%;
    max-height: 300px;
    background-color: #e3e3e3
}
</style>