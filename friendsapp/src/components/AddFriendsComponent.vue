<template>
    <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" v-model="name" class="form-control" id="name" >
         
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email"   v-model="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <input type="email"   v-model="address" class="form-control" id="address">
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="number"   v-model.number="phone" class="form-control" id="phone">
          </div>
        <button @click="submitForm" class="btn btn-primary">Submit</button>
      </form>
</template>
<script>
    export default{
        name:'AddFriendsComponent',
        data(){
            return{
                name:'',
                email:'',
                phone:'',
                address:''
            }
        },
        methods: {
            submitForm(e){
                e.preventDefault();
                const submittedData={
                    name:this.name,
                    email:this.email,
                    phone:this.phone,
                    address:this.address
                }
                this.$emit('submit-form',submittedData)
                this.name=''
                this.email=''
                this.phone=''
                this.address=''
            }

        },
    }
</script>