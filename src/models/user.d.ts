/**
 * 用户类别
 */
type UserType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl:string;
    gender: number;
    phone: string;
    profile: string;
    email: string;
    userRole: number;
    tags: string;
    createTime: Date;
    createTimeStr: string
    tagList?: []
}
