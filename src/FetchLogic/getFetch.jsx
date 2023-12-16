import { FetchAuth } from "../const"

export default function getFetch(setData, setSearch, setIsloading){
    fetch(FetchAuth.url, {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: FetchAuth.bearerToken
        }}).then(res => {
        return res.json()
        }).then(data => {
            setData(data.daftarPerahu)
            setSearch(data.daftarPerahu)
            setIsloading(false)
        })
}