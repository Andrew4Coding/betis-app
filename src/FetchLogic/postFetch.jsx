import { FetchAuth } from "../const"

export async function postFetch(postPerahu, setOpenPopup){
    fetch(FetchAuth.url, {
      method: "POST",
      headers: {
        "Content-type"  : "application/json",
        Authorization   : FetchAuth.bearerToken
      },
      body: JSON.stringify(postPerahu)
    }).then(() => {
        setOpenPopup(true)
    }).catch(err => {
      console.log(err)
    })
}