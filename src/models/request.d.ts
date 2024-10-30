/**
 * 请求类别
 */
type requestType = {
    fromUserVO: UserType;
    /**
     * 是否读取；0-未读，1-已读
     */
    isRead: number;
    /**
     * 状态：0-未处理；1-同意；2-拒绝
     */
    state: number;
    /**
     * 备注
     */
    remark: string;
    /**
     * 创建时间
     */
    createTime;
}
