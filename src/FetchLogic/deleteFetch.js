import { FetchAuth } from "../const"

export default async function deleteFetch(id, setOpen, setOpenPopup, setCreate){
    fetch(FetchAuth.url + `/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "appplication/json",
            Authorization: FetchAuth.bearerToken
        }
    }).then(() => {
        setCreate(false)
        setOpenPopup(true)
        setOpen(false)
    }).catch(err => {
        console.log(err)
    })
}