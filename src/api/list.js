import axios from "axios"
axios.defaults.headers={
    'Content-Type': 'application/x-www-form-urlencoded'
}
// let get =
axios.defaults.baseURL = "https://ojs.cdwuhu.com/"

let tokens = localStorage.getItem('tokne');
export const banners = {
    list: () => axios.get('/api/index/getBanner')
}
export const homeConfig = {
    info: () => axios.get('/ajax/api.php?c=index_config')
}
export const news = {
    list: () => axios.get("/api/index/getNew",
        {
            headers: {
                Authorization: tokens
            }
        }
    )
}
export const HomeLinks = {
    list:()=>axios.get('/api/index/getLinks')
}
export const token = {
    token: (params) => axios.post("/wp-json/api/v1/token", params)
}
export const home_journals = {
    cates: () => axios.get("/api/index/getJtitle"),
    artList: (params) => axios.post("/api/index/getJournal", params)
}

export const user={
    register:params=>axios.post("/api/user/register",params),
    login:params=>axios.post("/api/user/login",params),
    code:(params)=>axios.post('/api/ems/send',params)
}