/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVO } from './UserVO';
export type TeamUserVO = {
    avatarUrl?: string;
    createTime?: string;
    createUser?: UserVO;
    description?: string;
    expireTime?: string;
    hasJoin?: boolean;
    hasJoinNum?: number;
    id?: number;
    maxNum?: number;
    teamName?: string;
    teamStatus?: number;
    teamUserList?: Array<UserVO>;
    updateTime?: string;
    userId?: number;
};

