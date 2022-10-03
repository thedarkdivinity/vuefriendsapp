import { mount } from '@vue/test-utils'
import AddFriendsComponent from '../../src/components/AddFriendsComponent.vue'
describe('AddFriendsComponent.vue',()=>{
    it('number msg empty',()=>{
        const wrapper=mount(AddFriendsComponent)
        const numMsg=wrapper.find('.numMsg')
        expect(numMsg.text()).toBe('')
    })
    it('name msg empty',()=>{
        const wrapper=mount(AddFriendsComponent)
        const nameMsg=wrapper.find('.nameMsg')
        expect(nameMsg.text()).toBe('')
    })
    it('address msg empty',()=>{
        const wrapper=mount(AddFriendsComponent)
        const addressMsg=wrapper.find('.addressMsg')
        expect(addressMsg.text()).toBe('')
    })
    it('email msg empty',()=>{
        const wrapper=mount(AddFriendsComponent)
        const emailMsg=wrapper.find('.emailMsg')
        expect(emailMsg.text()).toBe('')
    })
   it('phone number error msg',async()=>{
    const wrapper=mount(AddFriendsComponent)
    const numMsg=wrapper.find('.numMsg')
    const submitBtn=wrapper.find('#formSubmitTest')
    await submitBtn.trigger('click')
    expect(numMsg.text()).toBe('cant be blank')
   })
   it('Name error msg',async()=>{
    const wrapper=mount(AddFriendsComponent)
    const nameMsg=wrapper.find('.nameMsg')
    const submitBtn=wrapper.find('#formSubmitTest')
    await submitBtn.trigger('click')
    expect(nameMsg.text()).toBe('cant be blank')
   })
   it('Email error msg',async()=>{
    const wrapper=mount(AddFriendsComponent)
    const emailMsg=wrapper.find('.emailMsg')
    const submitBtn=wrapper.find('#formSubmitTest')
    await submitBtn.trigger('click')
    expect(emailMsg.text()).toBe('cant be blank')
   })
   it('Address error msg',async()=>{
    const wrapper=mount(AddFriendsComponent)
    const addressMsg=wrapper.find('.addressMsg')
    const submitBtn=wrapper.find('#formSubmitTest')
    await submitBtn.trigger('click')
    expect(addressMsg.text()).toBe('cant be blank')
   })
})