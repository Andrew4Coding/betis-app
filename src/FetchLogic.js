export const FetchAuth = {
    url: 'https://oprec-betis-be.up.railway.app/perahu',
    bearerToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzdmZTM3OC01N2JjLTQ1N2MtYTM2OS0zN2E1NmViYTFmNjkiLCJpZCI6ImIzN2ZlMzc4LTU3YmMtNDU3Yy1hMzY5LTM3YTU2ZWJhMWY2OSIsInVzZXJuYW1lIjoiYW5kcmV3LmRldml0byIsImlhdCI6MTcwMjAxMzY0OSwiZXhwIjoxNzA0NjA1NjQ5fQ.x496-CoXOkFxM6tPFL4jrgXiizNme7U177BDT3Ope30'
}

export async function getFetch(setData, setSearch, setIsloading, setErrorMessage){
    fetch(FetchAuth.url, {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: FetchAuth.bearerToken
        }}).then(res => {
            if (res.status == 200){
                return res.json()
            }
            else {
                if (res.status === 401){
                    setErrorMessage('Boat Data Not Found')
                }
                else {
                    setErrorMessage(`Error ${res.status}`)
                }
            }
        }).then(data => {
            setData(data.daftarPerahu)
            setSearch(data.daftarPerahu)
            setIsloading(false)
        })
}

export async function getDetailFetch(setData, setIsloading, boatID){
    fetch(`${FetchAuth.url}/${boatID}`, {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: FetchAuth.bearerToken
        }}).then(res => {
        return res.json()
        }).then(data => {
            setData(data.perahu)
            setIsloading(false)
        })
}

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

export async function patchFetch(id, postPerahu, setOpenPopup){
    fetch(FetchAuth.url + `/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            Authorization: FetchAuth.bearerToken
        },
        body: JSON.stringify(postPerahu)
    }).then(() => {
        setOpenPopup(true)
    }).catch(err => {
        console.log(err)
    })
}

export async function deleteFetch(id, setOpenPopup){
    fetch(FetchAuth.url + `/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "appplication/json",
            Authorization: FetchAuth.bearerToken
        }
    }).then(() => {
        setOpenPopup(true)
    }).catch(err => {
        console.log(err)
    })
}