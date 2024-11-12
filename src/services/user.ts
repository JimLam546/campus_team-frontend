import myAxios from "../libs/axiosRequest.ts";

export const getCurrentUser = async () => {
    const res: resType = await myAxios.get('/user/current');
    if(res?.code === 0) {
        return res.data;
    }
    return null;
}
export const getUser = async (id: any) => {
    const res: resType = await myAxios.get("/user/query/" + id);
    if (res?.code === 0) {
        return res.data;
    }
    return null;
}
export const getFriendList = async () => {
    return await myAxios.get("/user/friendList");
}
export const removeFriend = async (id: any) => {
    return await myAxios.postForm("/user/removeFriend", {id: id});
}
