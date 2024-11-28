/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentVO } from './CommentVO';
import type { UserVO } from './UserVO';
export type PostVO = {
    commentVOList?: Array<CommentVO>;
    content?: string;
    createTime?: string;
    id?: number;
    imageUrl?: Array<string>;
    likedNum?: number;
    module?: string;
    myLiked?: boolean;
    userVO?: UserVO;
};

