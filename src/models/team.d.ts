/**
 * 队伍类别
 */
type teamType = {
    id: number; // 队伍id
    teamName: string;
    description: string;
    userId: number;
    createTime: string;
    updateTime: string;
    expireTime: string;
    maxNum: number;
    hasJoinNum: number;
    teamStatus: number;
    createUser: UserType;
    teamPassword: string;
    hasJoin: boolean;
    avatarUrl: string;
}
