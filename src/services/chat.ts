import myAxios from "../libs/axiosRequest.ts";

export const getPrivateChatUserList = async () => {
    const res: resType = await myAxios.get("/chat/privateChatList");
    if (res.code === 0) {
        return res.data;
    }
    return null;
}
export const getPrivateMessageList = async (toId : any) => {
    const res : resType = await myAxios.post("/chat/privateChat", {toId: toId});
    if (res?.code === 0) {
        return res.data;
    }
    return null;
}
