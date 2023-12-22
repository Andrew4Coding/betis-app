export const FetchAuth = {
    url: 'https://oprec-betis-be.up.railway.app/perahu',
    bearerToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzdmZTM3OC01N2JjLTQ1N2MtYTM2OS0zN2E1NmViYTFmNjkiLCJpZCI6ImIzN2ZlMzc4LTU3YmMtNDU3Yy1hMzY5LTM3YTU2ZWJhMWY2OSIsInVzZXJuYW1lIjoiYW5kcmV3LmRldml0byIsImlhdCI6MTcwMjAxMzY0OSwiZXhwIjoxNzA0NjA1NjQ5fQ.x496-CoXOkFxM6tPFL4jrgXiizNme7U177BDT3Ope30'
}

export async function getFetch(setData, setSearch, setIsloading, setErrorMessage, url='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzdmZTM3OC01N2JjLTQ1N2MtYTM2OS0zN2E1NmViYTFmNjkiLCJpZCI6ImIzN2ZlMzc4LTU3YmMtNDU3Yy1hMzY5LTM3YTU2ZWJhMWY2OSIsInVzZXJuYW1lIjoiYW5kcmV3LmRldml0byIsImlhdCI6MTcwMTk2MDUyMywiZXhwIjoxNzA0NTUyNTIzfQ.mBB_8hb7yOGPUbZlnL9o_5K9x5p0xf5mbQki-jR0RNA'){
    fetch(FetchAuth.url, {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: url
        }}).then(res => {
            if (res.status == 200){
                setErrorMessage('')
                return res.json()
            }
            else {
                localStorage.clear()
                setErrorMessage(`Error ${res.status}`)
            }
        }).then(data => {
            if (data){
                setData(data.daftarPerahu)
                setSearch(data.daftarPerahu)
                setIsloading(false)
            }
        })
}

export async function getDetailFetch(setData, setIsloading, boatID, bearerToken){
    fetch(`${FetchAuth.url}/${boatID}`, {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: bearerToken
        }}).then(res => {
        return res.json()
        }).then(data => {
            setData(data.perahu)
            setIsloading(false)
        })
}

export async function postFetch(postPerahu, setOpenPopup, bearerToken){
    fetch(FetchAuth.url, {
      method: "POST",
      headers: {
        "Content-type"  : "application/json",
        Authorization   : bearerToken
      },
      body: JSON.stringify(postPerahu)
    }).then(() => {
        setOpenPopup(true)
    }).catch(err => {
      console.log(err)
    })
}

export async function patchFetch(id, postPerahu, setOpenPopup, bearerToken){
    fetch(FetchAuth.url + `/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            Authorization: bearerToken
        },
        body: JSON.stringify(postPerahu)
    }).then(() => {
        setOpenPopup(true)
    }).catch(err => {
        console.log(err)
    })
}

export async function deleteFetch(id, setOpenPopup, bearerToken){
    fetch(FetchAuth.url + `/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "appplication/json",
            Authorization: bearerToken
        }
    }).then(() => {
        setOpenPopup(true)
    }).catch(err => {
        console.log(err)
    })
}