import axios from "axios"

// let get =
// axios.defaults.baseURL = "http://47.239.26.67"

let tokens = localStorage.getItem('tokne');
console.log(tokens)
export const banners = {
    list: () => axios.get('/ajax/api.php?c=bannerList')
}
export const homeConfig = {
    info: () => axios.get('/ajax/api.php?c=index_config')
}
export const news = {
    list: () => axios.get("/api_list/wp-json/wp/v2/posts",
        {
            headers: {
                Authorization: tokens
            }
        }
    )
}
export const token = {
    token: (params) => axios.post("/api_list/wp-json/api/v1/token", params)
}
export const home_journals={
    cates:()=>axios.get("/api_list/journals/index.php/index/api/v1/take?c=categoreList"),
    artList:(params)=>axios.get("/api_list/journals/index.php/index/api/v1/take?c=artList&id="+params.id)
}