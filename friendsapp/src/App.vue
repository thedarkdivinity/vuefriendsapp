<template>
  <div class="mainDiv">
    
 <div class="container customGrid">
<FriendsComponent :friends="friends" @delete-friend="deletefriend"/>
<AddFriendsComponent @submit-form="printData"/>
 </div>
</div>
</template>

<script>
// import FriendsComponent from './components/FriendsComponent.vue';
import axios from 'axios'
import FriendsComponent from './components/FriendsComponent.vue'
import AddFriendsComponent from './components/AddFriendsComponent.vue'
export default {
    name: "App",
    data() {
        return {
            friends: []
        };
    },
    async mounted() {
        try {
            const friendlist = await axios.get(`http://localhost:9000/getfriends`);
            console.log(friendlist.data);
            this.friends = friendlist.data;
        }
        catch (err) {
            console.log(err);
        }
    },
    methods: {
     async printData(obj){
        try {
          const submitedFormData= await axios.post(`http://localhost:9000/addfriend`,obj)
          this.friends=[...this.friends,submitedFormData.data]
        } catch (err) {
          console.log(err)
        }
      },
      async deletefriend(id){
        try {
          const deletedFriend= await axios.delete(`http://localhost:9000/deletefriend/${id}`)
          if(deletedFriend.status===200){
            this.friends=this.friends.filter(friend=>friend._id !==id)
          }
          else{
            console.log('some error occured')
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    components: { FriendsComponent , AddFriendsComponent }
}
</script>

<style>
.mainDiv{
  width: 100%;
 
}
.customGrid{
display: grid;
grid-template-columns: repeat(2,1fr);
}

</style>
