<template>
  <div class="mainDiv">
    <div class="cmodal" v-show="showModal">
      <h1>Update Friend</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="email" v-model="friendName" class="form-control w-50 mx-auto" id="exampleInputEmail1">
    
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Email</label>
          <input type="email" v-model="friendEmail" class="form-control w-50 mx-auto" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
          <label for="Address" class="form-label">friendAddress</label>
          <input type="text" v-model="friendAddress" class="form-control w-50 mx-auto" id="Address">
        </div>
        <div class="mb-3">
          <label for="Phone" class="form-label">friendPhone</label>
          <input type="text" v-model="friendPhone" class="form-control w-50 mx-auto" id="Phone">
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
      </form>
      <button class="mt-3 btn btn-danger btn-block" @click="showModal=false">Close</button>
    </div>
    <h1 class="text-center" id="vueappheading">Friends App</h1>

 <div class="container customGrid">
<FriendsComponent :friends="friends" @delete-friend="deletefriend" @update-friend="updatefriend"/>
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
            friends: [],
            showModal:false,
            friendEmail:'',
            friendAddress:'',
            friendName:'',
            friendPhone:''
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
      },
      updatefriend(obj){
        console.log(`${obj.email } is to be updated`)
        this.friendEmail=obj.email
        this.friendAddress=obj.address
        this.friendName=obj.name
        this.friendPhone=obj.phone
        this.showModal=true

       
      

      }
    },

    components: { FriendsComponent, AddFriendsComponent }
}
</script>

<style>
  .cmodal{
    width: 500px;
    text-align: center;
    height: auto;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin-top: 60px;
    z-index: 4000;
    background:white;
    border: 1px solid gray;
    padding: 20px;
  }
.mainDiv{
  width: 100%;
 
}
.customGrid{
display: grid;
grid-template-columns: repeat(2,1fr);
}

</style>
