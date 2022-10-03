<template>
    <div>
    <div class="card mt-5" style="width: 70%;">
        <div class="card-body">
          <h5 class="card-title">{{friend.name}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{friend.phone}}</h6>
          <p class="card-text">{{friend.address}}</p>
          <div class="d-flex mt-2 align-items-center justify-content-space-between">
          <button class="btn btn-block btn-danger " style="margin-right:20px" @click="$emit('update-friend',friend)"> Update</button>
         <button class="btn btn-block btn-danger" @click="$emit('delete-friend',friend._id)">Delete</button>
        </div>
        </div>
      </div>
      
    </div>
</template>
<script>
    export default{
        name:'FriendComponent',
        props:{
            friend:{
                type:Object
            }
        }
    }
</script>