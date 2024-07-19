<script setup lang=ts>

import type { Author } from "~/types/author";

let author: Author = {
    bio: "fdsfds",
    img: "https://cdn.discordapp.com/attachments/1263944433704108064/1263963489966493726/1687457682863.png?ex=669c253b&is=669ad3bb&hm=8f126e218d61bf417fb07c017649e55af8708c1ca954d2874496dc1acaa24817&",
    investments: [],
    name: "Endy Miyashita",
    posts: [],
}
let author2: Author = {
    bio: "fdsfds",
    img: "https://cdn.discordapp.com/attachments/1263944433704108064/1263946697474576474/pexels-rquiros-1727273.jpg?ex=669c1597&is=669ac417&hm=35987200ae690d964dcebf083df97db59c78f0e480e9ac52631e19feaccc8b97&",
    investments: [],
    name: "Jessica",
    posts: [],
}
</script>

<template>
    <div style="width: 600px; display: block; margin: auto;">
        <Header />
        <h2 class="text-3xl font-medium pt-4">Buscar Investimentos</h2>
        <div class="flex justify-between w-full h-20 filter-feed mt-3">
            <div class="rounded-xl filter-item bg-orange-400 p-5 h-[45px] w-[100px]  flex justify-center items-center">
                Todos
            </div>
            <div
                class="filter-item h-[45px] w-[100px] flex justify-center items-center rounded-xl filter-item bg-gray-100">
                Tecnologia
            </div>
            <div
                class="filter-item h-[45px] w-[100px] flex justify-center items-center rounded-xl filter-item bg-gray-100">
                Agronomia
            </div>
            <div
                class="filter-item h-[45px] w-[100px] flex justify-center items-center rounded-xl filter-item bg-gray-100">
                Saúde
            </div>
        </div>
        <div class="block">
            <InvestFeedCard
                desc="Em um mundo onde a expressão artística transcende fronteiras, a Dance Club emerge como um farol de criatividade e movimento. Fundada por apaixonados pela dança e pela cultura artística, nossa empresa nasceu do desejo profundo de compartilhar a beleza e a emoção da dança com o mundo."
                :author="author" likes="72" :value="20" required="500" name="Dance Club" image="https://cdn.discordapp.com/attachments/1263944433704108064/1263946024616198315/dance.png?ex=669c14f7&is=669ac377&hm=54ff2f2c383717922662fe4751641356a8b1df6ec57589223d90e5a6e5756881&" />
                <InvestFeedCard
                desc="A QuantumTech, uma startup focada em inteligência artificial de ponta, enfrenta desafios financeiros significativos enquanto busca transformar teorias em aplicações práticas. Com uma equipe dedicada e apaixonada por inovação, a QuantumTech está buscando investidores estratégicos para impulsionar seu crescimento e expandir seu impacto no mercado. Embora enfrentem restrições de recursos no momento, a empresa está posicionada para liderar avanços revolucionários na IA, desde análise de dados complexos até automação avançada, com o objetivo de moldar o futuro da tecnologia digital"
                :author="author2" likes="189" :value="160" required="500" name="Quatum Tech" image="https://cdn.discordapp.com/attachments/1263944433704108064/1263946697915236382/Logotipo_para_assistencia_tecnica_de_celular_moderno_preto_e_verde.png?ex=669c1597&is=669ac417&hm=731c581552b20d1d79e636d989a33eb7b9dcf74854c08ec9ba445db92395c70c&" />
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