/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVO } from './UserVO';
export type CommentVO = {
    content?: string;
    createTime?: string;
    id?: number;
    likedNum?: number;
    myLiked?: boolean;
    subCommentList?: Array<CommentVO>;
    userVO?: UserVO;
};

