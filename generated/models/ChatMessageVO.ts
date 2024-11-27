/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatUserVO } from './ChatUserVO';
export type ChatMessageVO = {
    chatType?: number;
    createTime?: string;
    fromUser?: ChatUserVO;
    isAdmin?: boolean;
    myMessage?: boolean;
    teamId?: number;
    text?: string;
    toUser?: ChatUserVO;
};

