<script setup lang=ts>

import type { Author } from "~/types/author";

let author: Author = {
    bio: "iergijetbrgehbnj",
    img: "https://cdn.discordapp.com/attachments/1263944433704108064/1263962726129078282/1650134273632.png?ex=669c2485&is=669ad305&hm=4e78a9eccab21e6087aff265a4288dd26a31240e0bed78d7f14bb209bbcd45f3&",
    investments: [],
    name: "Thiago Nepomuceno",
    posts: [],
}
</script>

<template>
    <div style="width: 600px; display: block; margin: auto;">
        <div class="flex flex-wrap">
            <div class="w-[100%] h-[150px] bg-orange-400"></div>
            <img src="https://media.licdn.com/dms/image/C4D03AQGGfeg95HcLAg/profile-displayphoto-shrink_200_200/0/1650134273632?e=2147483647&v=beta&t=J3fBE67TNWnAqTLr-8TaB9Lw7lZ8ofwVkB9zkekCyBs" class="w-[120px] h-[120px] rounded-lg bg-gray-400 translate-y-[-60px] ml-5"></img>
        </div>
        <div class="plist block p-5 box-border translate-y-[-60px]">
            <h1 class="text-3xl w-[100%] font-medium">Thiago Nepomuceno</h1>
            <p class="text-justify">Podemos já vislumbrar o modo pelo qual a mobilidade dos capitais internacionais
                ainda não demonstrou
                convincentemente que vai participar na mudança das diretrizes de desenvolvimento para o futuro.</p>
            <h2 class="text-2xl pt-4 font-medium">Contato</h2>
            <span class="flex pt-2 gap-4 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                    </svg>
                </span>
                <p class="text-lg">jovemempreendedor@mail.com</p>
            </span>
            <!-- <h2 class="text-2xl pt-4 font-medium">Empresas</h2>
            <div>
                <div class="pt-2 gap-3">
                    <div class="w-[40px] h-[40px] rounded-md bg-gray-400"></div>
                    <div class="text-lg">Empresa bacana</div>
                </div>
            </div> -->
            <h2 class="text-2xl font-medium pt-4">Publicações e Investimentos</h2>
            <div class="feed-content block">
                <Card desc="A FoodFusion, uma empresa visionária no setor de alimentos, enfrenta desafios financeiros enquanto busca redefinir a culinária moderna. Com um foco apaixonado pela inovação gastronômica e pela sustentabilidade, a FoodFusion está em busca de investidores estratégicos para apoiar sua expansão e lançamento de novos produtos. Apesar das limitações atuais, a empresa está determinada a introduzir novos sabores e conceitos no mercado, oferecendo uma abordagem fresca e sustentável para alimentação saudável e deliciosa." :author="author" likes="100"/>
                <InvestFeedCard desc="A FoodFusion, uma empresa visionária no setor de alimentos, enfrenta desafios financeiros enquanto busca redefinir a culinária moderna. Com um foco apaixonado pela inovação gastronômica e pela sustentabilidade, a FoodFusion está em busca de investidores estratégicos para apoiar sua expansão e lançamento de novos produtos. Apesar das limitações atuais, a empresa está determinada a introduzir novos sabores e conceitos no mercado, oferecendo uma abordagem fresca e sustentável para alimentação saudável e deliciosa." :author="author" likes="72" :value="450" required="500" image="https://cdn.discordapp.com/attachments/1263944433704108064/1263947474934960271/Logo_Hamburguer_Simples_Bold.png?ex=669c1651&is=669ac4d1&hm=fbf2d9c76c6b1ac92af39618a55b0ba83184e885de0e0b3d7775ca465028d9e4&"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.plist {
    width: 100%;
}
</style>