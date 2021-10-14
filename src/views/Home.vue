<template>
    <div class="home">
    <home @childsent="parent"></home>
    <br>
    用户传来的:{{message}}
    
    </div>
</template>

<script>
import home from "@/components/home.vue";
import pre from "@/components/pre.vue";
import  character from "@/components/character.vue";
import game from "@/components/game.vue";
import rewards from "@/components/rewards.vue";
export default {
    name: "Home",
    data(){
        return{
            message:''
        }
    },
    methods:{
        parent(a){
            this.message=a
        }
    },
    components: {
        home,
        pre,
        rewards,
        character,
        game
    }
};
</script>
