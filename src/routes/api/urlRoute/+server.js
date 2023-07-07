export async function POST(event) {
    // console.log(request)
    let data = await event.request.formData()
    console.log(data)

    return new Response({five:5})
}
