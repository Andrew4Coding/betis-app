import { FetchAuth } from "../const"

export default async function patchFetch(id, postPerahu, setOpen, setOpenPopup){
    fetch(FetchAuth.url + `/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            Authorization: FetchAuth.bearerToken
        },
        body: JSON.stringify(postPerahu)
    }).then(() => {
        setOpenPopup(true)
        setOpen(false)
    }).catch(err => {
        console.log(err)
    })
}