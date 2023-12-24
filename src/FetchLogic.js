export const FetchAuth = {
    url: 'https://oprec-betis-be.up.railway.app/perahu',
}

export async function getFetch(setData, setSearch, setIsloading, setErrorMessage, bearerToken='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzdmZTM3OC01N2JjLTQ1N2MtYTM2OS0zN2E1NmViYTFmNjkiLCJpZCI6ImIzN2ZlMzc4LTU3YmMtNDU3Yy1hMzY5LTM3YTU2ZWJhMWY2OSIsInVzZXJuYW1lIjoiYW5kcmV3LmRldml0byIsImlhdCI6MTcwMTk2MDUyMywiZXhwIjoxNzA0NTUyNTIzfQ.mBB_8hb7yOGPUbZlnL9o_5K9x5p0xf5mbQki-jR0RNA'){
    fetch(FetchAuth.url, {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: bearerToken
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
        }).catch(() => {
            // If no connection
            if (TypeError){
                setErrorMessage('No Internet')
                localStorage.clear()
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