import 'setimmediate'
import cloudinary from 'cloudinary'
import uploadImage from "@/modules/daybook/helpers/uploadImage"
import axios from "axios"

cloudinary.config({
    cloud_name: 'docvea5nn',
    api_key: '363512999421397',
    api_secret: 'XXf7Jm7J4n4sCS6m0nP3uEUhDoo'
})

describe('Pruebas en el uploadImage', () => {
    test('debe de cargar un archivo y retornar el url', async() => {
        const {data} = await axios.get('https://res.cloudinary.com/docvea5nn/image/upload/v1673579999/o1ueqofou2chitfa50hb.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')

        const url = await uploadImage(file)

        expect(typeof url).toBe('string')


        //Tomar el id
        const segments = url.split('/')
        const imageId = segments[segments.length - 1].replace('.jpg','')
        
        const resp = await cloudinary.v2.api.delete_resources(imageId)
        //console.log(resp.deleted[imageId]);//id del objeto borrado
        expect(resp.deleted).toEqual(expect.objectContaining({
            [imageId]: 'deleted'
        }))
    })
})