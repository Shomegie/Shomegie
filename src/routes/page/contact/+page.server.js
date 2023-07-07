export const actions = {
    default: async (event)=>{
        let data = await event.request.formData()
        console.log(data)
    }
}