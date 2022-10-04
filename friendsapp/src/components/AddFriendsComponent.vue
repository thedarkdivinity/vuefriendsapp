<template>
    <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" v-model="name" class="form-control" id="name" >
          <p class="text-danger text-center mt-1 nameMsg">{{nameMsg}}</p>
         
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email"   v-model="email" class="form-control" id="email">
          <p class="text-danger text-center mt-1 emailMsg">{{emailMsg}}</p>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <input type="email"   v-model="address" class="form-control" id="address">
            <p class="text-danger text-center mt-1 addressMsg">{{addressMsg}}</p>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="number"   v-model.number="phone" class="form-control" id="phone">
            <p class="text-danger text-center mt-1 numMsg">{{numMsg}}</p>
          </div>
        <button @click="submitForm" id="formSubmitTest" class="btn btn-primary">Submit</button>
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
                address:'',
                numMsg:'',
                nameMsg:'',
                addressMsg:'',
                emailMsg:''
            }
        },
        methods: {
            submitForm(e){
              let flag=false
                e.preventDefault();

                if(this.phone==''){
                  this.numMsg='cant be blank'
                  flag=true
                  
                }
                if(this.email==''){
                  this.emailMsg='cant be blank'
                  flag=true
                  
                }
                if(this.address==''){
                  this.addressMsg='cant be blank'
                  flag=true
                }
                if(this.address.length>0 && this.address.length<5)
                {
                  this.addressMsg='Address must be atleast 5 letters'
                  flag=true
                }
                if(this.name=='')
                {
                  this.nameMsg='cant be blank'
                  flag=true
                }
                if(this.name.length>0 && this.name.length<5)
                {
                  this.nameMsg='Name must be atleast 5 letters'
                  flag=true 
                }
                if(flag)
                {
                  return
                }
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
                this.numMsg=''
                this.emailMsg=''
                this.nameMsg=''
                this.addressMsg=''
            }

        },
    }
</script>