<template>
    <div class="container cgrid">
        
    <div  v-for="friend in friends" :key="friend._id" class="row">
  
  <FriendComponent  @delete-friend="$emit('delete-friend',friend._id)" @update-friend="$emit('update-friend',friend)" :friend="friend"/>
  
</div>
</div>
</template>

<script>
import FriendComponent from './FriendComponent.vue';
export default {
    name: "FriendsComponent",
    props: {
        friends: {
            type: Array
        }
    },
    components: { FriendComponent }
}
</script>

<style scoped>

.cgrid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
@media(max-width: 600px)
{
    .cgrid{
        display: grid;
        grid-template-columns: 1fr;
    }
}
</style>