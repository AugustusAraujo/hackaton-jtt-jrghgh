<script setup lang=ts>

import type { Author } from "~/types/author";
import type { Investments } from "~/types/investments";
import type { Posts } from "~/types/posts";

function createAuthor( name :string, img: any, bio?: string, investments?: Investments, posts?: Posts) {
    return {
        name, img, bio, investments, posts
    }
}

function createPost(author: any, desc:string, name: string, likes: Number) : any{
    return {
        author, desc, name, likes
    }
}

function createInvests(name: string,
    description: string,
    images: string[],
    author: Author,
    moneyValue: number,
    likes: string) {
        return {name, description, images, author, moneyValue, likes}
    }

    let a = createAuthor("Mariana", "https://cdn.discordapp.com/attachments/1263944433704108064/1263945095510626415/pexels-ezekixl-1006202.jpg?ex=669c1419&is=669ac299&hm=618f6ca021c60fe889bf061e1934b84ce2b3eec119664a95b5167bed33347e3c&")
    let a1 = createAuthor("Marie", "https://cdn.discordapp.com/attachments/1263944433704108064/1263945250603274360/pexels-olly-733872.jpg?ex=669c143e&is=669ac2be&hm=f2a245f3aee68b13d5c4a7bada2d67882987aa1f1836a3b5373f443cea66c34a&")
    let a2 = createAuthor("João", "https://cdn.discordapp.com/attachments/1263944433704108064/1263945392870002758/homi.webp?ex=669c1460&is=669ac2e0&hm=f99b550d8954f78877c1ade4d0b2a6045ed1e920f9aa1ea843801c8eda1fc955&")

const posts: any = ref([
    createPost(a, "A GoodLife, empresa dedicada à sustentabilidade, enfrenta desafios financeiros enquanto busca expandir suas iniciativas ambientais. Com um compromisso inabalável com práticas sustentáveis e inovações verdes, a GoodLife está agora em busca de investidores que compartilhem sua visão e possam apoiar seu crescimento. Este investimento não apenas impulsionará suas operações, mas também fortalecerá seu impacto positivo no meio ambiente e na comunidade, demonstrando que o retorno financeiro pode coexistir harmoniosamente com a responsabilidade ambiental.", "Good Life", 94),
    createPost(a1, "No universo dinâmico do design, o Art Studio se destaca como uma plataforma vibrante onde a criatividade e a inovação se encontram. Fundada por visionários apaixonados pela estética e pela funcionalidade, nossa empresa nasceu do desejo ardente de transformar ideias em realidade através do poder do design.", "Art Studio", 201),
    createPost(a2, "No vasto e empolgante universo dos jogos eletrônicos, a GameAttack emerge como uma força criativa determinada a deixar sua marca. Fundada por entusiastas apaixonados por games e tecnologia, nossa empresa nasceu do desejo de criar experiências de jogo memoráveis e envolventes que transcendam as fronteiras da imaginação." ,"Game attack", 505)
])

</script>

<template>
    <div style="width: 600px; display: block; margin: auto;">
        <Header />
        <h2 class="text-3xl font-medium pt-4 pb-2">Explorar</h2>

        <div class="block">
            <Card v-for="(item) in posts" :author="item.author" :desc="item.desc" :likes="item.likes" imgs="" />
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