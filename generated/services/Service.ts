/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCommentRequest } from '../models/AddCommentRequest';
import type { AddFriendRequest } from '../models/AddFriendRequest';
import type { AddPostRequest } from '../models/AddPostRequest';
import type { AddTeamRequest } from '../models/AddTeamRequest';
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_CommentVO_ } from '../models/BaseResponse_CommentVO_';
import type { BaseResponse_int_ } from '../models/BaseResponse_int_';
import type { BaseResponse_List_ChatMessageVO_ } from '../models/BaseResponse_List_ChatMessageVO_';
import type { BaseResponse_List_PostVO_ } from '../models/BaseResponse_List_PostVO_';
import type { BaseResponse_List_PrivateChatUserVO_ } from '../models/BaseResponse_List_PrivateChatUserVO_';
import type { BaseResponse_List_TeamChatVO_ } from '../models/BaseResponse_List_TeamChatVO_';
import type { BaseResponse_List_TeamUserVO_ } from '../models/BaseResponse_List_TeamUserVO_';
import type { BaseResponse_List_User_ } from '../models/BaseResponse_List_User_';
import type { BaseResponse_List_UserVO_ } from '../models/BaseResponse_List_UserVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';
import type { BaseResponse_TeamUserVO_ } from '../models/BaseResponse_TeamUserVO_';
import type { BaseResponse_User_ } from '../models/BaseResponse_User_';
import type { BaseResponse_UserVO_ } from '../models/BaseResponse_UserVO_';
import type { ChatRequest } from '../models/ChatRequest';
import type { DeleteTeamRequest } from '../models/DeleteTeamRequest';
import type { FriendRequestVO } from '../models/FriendRequestVO';
import type { JoinTeamRequest } from '../models/JoinTeamRequest';
import type { OpsFriendRequest } from '../models/OpsFriendRequest';
import type { PageRequest } from '../models/PageRequest';
import type { ref } from '../models/ref';
import type { TeamQuitRequest } from '../models/TeamQuitRequest';
import type { TeamUpdateRequest } from '../models/TeamUpdateRequest';
import type { UpdateTagRequest } from '../models/UpdateTagRequest';
import type { User } from '../models/User';
import type { UserId } from '../models/UserId';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Service {
    /**
     * getPrivateChat
     * @param chatRequest chatRequest
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatUsingGet(
        chatRequest: ChatRequest,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/privateChat',
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPrivateChat
     * @param chatRequest chatRequest
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatUsingHead(
        chatRequest: ChatRequest,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/chat/privateChat',
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getPrivateChat
     * @param chatRequest chatRequest
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getPrivateChatUsingPost(
        chatRequest: ChatRequest,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/privateChat',
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPrivateChat
     * @param chatRequest chatRequest
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getPrivateChatUsingPut(
        chatRequest: ChatRequest,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/chat/privateChat',
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPrivateChat
     * @param chatRequest chatRequest
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatUsingDelete(
        chatRequest: ChatRequest,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/chat/privateChat',
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getPrivateChat
     * @param chatRequest chatRequest
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatUsingOptions(
        chatRequest: ChatRequest,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/chat/privateChat',
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getPrivateChat
     * @param chatRequest chatRequest
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatUsingPatch(
        chatRequest: ChatRequest,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/chat/privateChat',
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getPrivateChatList
     * @returns BaseResponse_List_PrivateChatUserVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatListUsingGet(): CancelablePromise<BaseResponse_List_PrivateChatUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/privateChatList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPrivateChatList
     * @returns BaseResponse_List_PrivateChatUserVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatListUsingHead(): CancelablePromise<BaseResponse_List_PrivateChatUserVO_> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/chat/privateChatList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getPrivateChatList
     * @returns BaseResponse_List_PrivateChatUserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getPrivateChatListUsingPost(): CancelablePromise<BaseResponse_List_PrivateChatUserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/privateChatList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPrivateChatList
     * @returns BaseResponse_List_PrivateChatUserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getPrivateChatListUsingPut(): CancelablePromise<BaseResponse_List_PrivateChatUserVO_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/chat/privateChatList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPrivateChatList
     * @returns BaseResponse_List_PrivateChatUserVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatListUsingDelete(): CancelablePromise<BaseResponse_List_PrivateChatUserVO_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/chat/privateChatList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getPrivateChatList
     * @returns BaseResponse_List_PrivateChatUserVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatListUsingOptions(): CancelablePromise<BaseResponse_List_PrivateChatUserVO_> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/chat/privateChatList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getPrivateChatList
     * @returns BaseResponse_List_PrivateChatUserVO_ OK
     * @throws ApiError
     */
    public static getPrivateChatListUsingPatch(): CancelablePromise<BaseResponse_List_PrivateChatUserVO_> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/chat/privateChatList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getTeamChat
     * @param chatRequest chatRequest
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getTeamChatUsingGet(
        chatRequest: ChatRequest,
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/teamChat',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeamChat
     * @param chatRequest chatRequest
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getTeamChatUsingHead(
        chatRequest: ChatRequest,
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/chat/teamChat',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getTeamChat
     * @param chatRequest chatRequest
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getTeamChatUsingPost(
        chatRequest: ChatRequest,
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/teamChat',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeamChat
     * @param chatRequest chatRequest
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getTeamChatUsingPut(
        chatRequest: ChatRequest,
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/chat/teamChat',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeamChat
     * @param chatRequest chatRequest
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getTeamChatUsingDelete(
        chatRequest: ChatRequest,
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/chat/teamChat',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getTeamChat
     * @param chatRequest chatRequest
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getTeamChatUsingOptions(
        chatRequest: ChatRequest,
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/chat/teamChat',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getTeamChat
     * @param chatRequest chatRequest
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_ChatMessageVO_ OK
     * @throws ApiError
     */
    public static getTeamChatUsingPatch(
        chatRequest: ChatRequest,
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_ChatMessageVO_> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/chat/teamChat',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            body: chatRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getTeamChatList
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_TeamChatVO_ OK
     * @throws ApiError
     */
    public static getTeamChatListUsingGet(
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_TeamChatVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/teamChatList',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeamChatList
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_TeamChatVO_ OK
     * @throws ApiError
     */
    public static getTeamChatListUsingHead(
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_TeamChatVO_> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/chat/teamChatList',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getTeamChatList
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_TeamChatVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getTeamChatListUsingPost(
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_TeamChatVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/teamChatList',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeamChatList
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_TeamChatVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getTeamChatListUsingPut(
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_TeamChatVO_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/chat/teamChatList',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeamChatList
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_TeamChatVO_ OK
     * @throws ApiError
     */
    public static getTeamChatListUsingDelete(
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_TeamChatVO_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/chat/teamChatList',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getTeamChatList
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_TeamChatVO_ OK
     * @throws ApiError
     */
    public static getTeamChatListUsingOptions(
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_TeamChatVO_> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/chat/teamChatList',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getTeamChatList
     * @param creationTime
     * @param id
     * @param lastAccessedTime
     * @param maxInactiveInterval
     * @param _new
     * @param servletContextClassLoader
     * @param servletContextContextPath
     * @param servletContextDefaultSessionTrackingModes
     * @param servletContextEffectiveMajorVersion
     * @param servletContextEffectiveMinorVersion
     * @param servletContextEffectiveSessionTrackingModes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0Buffer
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType
     * @param servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes
     * @param servletContextJspConfigDescriptorJspPropertyGroups0IsXml
     * @param servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding
     * @param servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid
     * @param servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces
     * @param servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns
     * @param servletContextJspConfigDescriptorTaglibs0TaglibLocation
     * @param servletContextJspConfigDescriptorTaglibs0TaglibUri
     * @param servletContextMajorVersion
     * @param servletContextMinorVersion
     * @param servletContextRequestCharacterEncoding
     * @param servletContextResponseCharacterEncoding
     * @param servletContextServerInfo
     * @param servletContextServletContextName
     * @param servletContextSessionCookieConfigComment
     * @param servletContextSessionCookieConfigDomain
     * @param servletContextSessionCookieConfigHttpOnly
     * @param servletContextSessionCookieConfigMaxAge
     * @param servletContextSessionCookieConfigName
     * @param servletContextSessionCookieConfigPath
     * @param servletContextSessionCookieConfigSecure
     * @param servletContextSessionTimeout
     * @param servletContextVirtualServerName
     * @param valueNames
     * @returns BaseResponse_List_TeamChatVO_ OK
     * @throws ApiError
     */
    public static getTeamChatListUsingPatch(
        creationTime?: number,
        id?: string,
        lastAccessedTime?: number,
        maxInactiveInterval?: number,
        _new?: boolean,
        servletContextClassLoader?: ref,
        servletContextContextPath?: string,
        servletContextDefaultSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextEffectiveMajorVersion?: number,
        servletContextEffectiveMinorVersion?: number,
        servletContextEffectiveSessionTrackingModes?: 'COOKIE' | 'URL' | 'SSL',
        servletContextJspConfigDescriptorJspPropertyGroups0Buffer?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes?: Array<string>,
        servletContextJspConfigDescriptorJspPropertyGroups0IsXml?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces?: string,
        servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns?: Array<string>,
        servletContextJspConfigDescriptorTaglibs0TaglibLocation?: string,
        servletContextJspConfigDescriptorTaglibs0TaglibUri?: string,
        servletContextMajorVersion?: number,
        servletContextMinorVersion?: number,
        servletContextRequestCharacterEncoding?: string,
        servletContextResponseCharacterEncoding?: string,
        servletContextServerInfo?: string,
        servletContextServletContextName?: string,
        servletContextSessionCookieConfigComment?: string,
        servletContextSessionCookieConfigDomain?: string,
        servletContextSessionCookieConfigHttpOnly?: boolean,
        servletContextSessionCookieConfigMaxAge?: number,
        servletContextSessionCookieConfigName?: string,
        servletContextSessionCookieConfigPath?: string,
        servletContextSessionCookieConfigSecure?: boolean,
        servletContextSessionTimeout?: number,
        servletContextVirtualServerName?: string,
        valueNames?: Array<string>,
    ): CancelablePromise<BaseResponse_List_TeamChatVO_> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/chat/teamChatList',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'servletContext.classLoader': servletContextClassLoader,
                'servletContext.contextPath': servletContextContextPath,
                'servletContext.defaultSessionTrackingModes': servletContextDefaultSessionTrackingModes,
                'servletContext.effectiveMajorVersion': servletContextEffectiveMajorVersion,
                'servletContext.effectiveMinorVersion': servletContextEffectiveMinorVersion,
                'servletContext.effectiveSessionTrackingModes': servletContextEffectiveSessionTrackingModes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer': servletContextJspConfigDescriptorJspPropertyGroups0Buffer,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType': servletContextJspConfigDescriptorJspPropertyGroups0DefaultContentType,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral': servletContextJspConfigDescriptorJspPropertyGroups0DeferredSyntaxAllowedAsLiteral,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored': servletContextJspConfigDescriptorJspPropertyGroups0ElIgnored,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace': servletContextJspConfigDescriptorJspPropertyGroups0ErrorOnUndeclaredNamespace,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas': servletContextJspConfigDescriptorJspPropertyGroups0IncludeCodas,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes': servletContextJspConfigDescriptorJspPropertyGroups0IncludePreludes,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml': servletContextJspConfigDescriptorJspPropertyGroups0IsXml,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding': servletContextJspConfigDescriptorJspPropertyGroups0PageEncoding,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid': servletContextJspConfigDescriptorJspPropertyGroups0ScriptingInvalid,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces': servletContextJspConfigDescriptorJspPropertyGroups0TrimDirectiveWhitespaces,
                'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns': servletContextJspConfigDescriptorJspPropertyGroups0UrlPatterns,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation': servletContextJspConfigDescriptorTaglibs0TaglibLocation,
                'servletContext.jspConfigDescriptor.taglibs[0].taglibURI': servletContextJspConfigDescriptorTaglibs0TaglibUri,
                'servletContext.majorVersion': servletContextMajorVersion,
                'servletContext.minorVersion': servletContextMinorVersion,
                'servletContext.requestCharacterEncoding': servletContextRequestCharacterEncoding,
                'servletContext.responseCharacterEncoding': servletContextResponseCharacterEncoding,
                'servletContext.serverInfo': servletContextServerInfo,
                'servletContext.servletContextName': servletContextServletContextName,
                'servletContext.sessionCookieConfig.comment': servletContextSessionCookieConfigComment,
                'servletContext.sessionCookieConfig.domain': servletContextSessionCookieConfigDomain,
                'servletContext.sessionCookieConfig.httpOnly': servletContextSessionCookieConfigHttpOnly,
                'servletContext.sessionCookieConfig.maxAge': servletContextSessionCookieConfigMaxAge,
                'servletContext.sessionCookieConfig.name': servletContextSessionCookieConfigName,
                'servletContext.sessionCookieConfig.path': servletContextSessionCookieConfigPath,
                'servletContext.sessionCookieConfig.secure': servletContextSessionCookieConfigSecure,
                'servletContext.sessionTimeout': servletContextSessionTimeout,
                'servletContext.virtualServerName': servletContextVirtualServerName,
                'valueNames': valueNames,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * deleteComment
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteCommentUsingGet(
        id: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/deleteComment/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deletePost
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deletePostUsingGet(
        id: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/deletePost/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * liked
     * @param id id
     * @param type type
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static likedUsingGet(
        id: number,
        type: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/liked/{type}/{id}',
            path: {
                'id': id,
                'type': type,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listMyPost
     * @returns BaseResponse_List_PostVO_ OK
     * @throws ApiError
     */
    public static listMyPostUsingGet(): CancelablePromise<BaseResponse_List_PostVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/listMyPost',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listPost
     * @param pageRequest pageRequest
     * @returns BaseResponse_List_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPostUsingPost(
        pageRequest: PageRequest,
    ): CancelablePromise<BaseResponse_List_PostVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/listPost',
            body: pageRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * uploadImage
     * @param file file
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadImageUsingPost(
        file?: Blob,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/postImage/upload',
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * publishComment
     * @param addCommentRequest addCommentRequest
     * @returns BaseResponse_CommentVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static publishCommentUsingPost(
        addCommentRequest: AddCommentRequest,
    ): CancelablePromise<BaseResponse_CommentVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/publishComment',
            body: addCommentRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * publishPost
     * @param addPostRequest addPostRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static publishPostUsingPost(
        addPostRequest: AddPostRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/publishPost',
            body: addPostRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * createRequest
     * @param addFriendRequest addFriendRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static createRequestUsingPost(
        addFriendRequest: AddFriendRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/request/addFriend',
            body: addFriendRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getRequestList
     * @returns FriendRequestVO OK
     * @throws ApiError
     */
    public static getRequestListUsingGet(): CancelablePromise<Array<FriendRequestVO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/request/getRequestList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * opsFriend
     * @param opsFriendRequest opsFriendRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static opsFriendUsingPost(
        opsFriendRequest: OpsFriendRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/request/opsFriend',
            body: opsFriendRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * addTeam
     * @param teamRequest teamRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addTeamUsingPost(
        teamRequest: AddTeamRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/team/add',
            body: teamRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteTeam
     * @param deleteTeamRequest deleteTeamRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteTeamUsingPost(
        deleteTeamRequest: DeleteTeamRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/team/delete',
            body: deleteTeamRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeamById
     * @param id id
     * @returns BaseResponse_TeamUserVO_ OK
     * @throws ApiError
     */
    public static getTeamByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_TeamUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/team/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * joinTeam
     * @param joinTeamRequest joinTeamRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static joinTeamUsingPost(
        joinTeamRequest: JoinTeamRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/team/join',
            body: joinTeamRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * hasCreateTeamList
     * @returns BaseResponse_List_TeamUserVO_ OK
     * @throws ApiError
     */
    public static hasCreateTeamListUsingGet(): CancelablePromise<BaseResponse_List_TeamUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/team/list/myCreate',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * myHasJoinTeamList
     * @returns BaseResponse_List_TeamUserVO_ OK
     * @throws ApiError
     */
    public static myHasJoinTeamListUsingGet(): CancelablePromise<BaseResponse_List_TeamUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/team/list/myJoin',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * hasJoinTeamList
     * @returns BaseResponse_List_TeamUserVO_ OK
     * @throws ApiError
     */
    public static hasJoinTeamListUsingGet(): CancelablePromise<BaseResponse_List_TeamUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/team/list/myTeam',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listTeams
     * @param description
     * @param id
     * @param maxNum
     * @param pageNum
     * @param pageSize
     * @param searchText
     * @param teamName
     * @param teamStatus
     * @param total
     * @param userId
     * @returns BaseResponse_List_TeamUserVO_ OK
     * @throws ApiError
     */
    public static listTeamsUsingGet(
        description?: string,
        id?: number,
        maxNum?: number,
        pageNum?: number,
        pageSize?: number,
        searchText?: string,
        teamName?: string,
        teamStatus?: number,
        total?: number,
        userId?: number,
    ): CancelablePromise<BaseResponse_List_TeamUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/team/list/page',
            query: {
                'description': description,
                'id': id,
                'maxNum': maxNum,
                'pageNum': pageNum,
                'pageSize': pageSize,
                'searchText': searchText,
                'teamName': teamName,
                'teamStatus': teamStatus,
                'total': total,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * quitTeam
     * @param teamQuitRequest teamQuitRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static quitTeamUsingPost(
        teamQuitRequest: TeamQuitRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/team/quit',
            body: teamQuitRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateTeam
     * @param teamUpdateRequest teamUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateTeamUsingPost(
        teamUpdateRequest: TeamUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/team/update',
            body: teamUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * uploadAvatar
     * @param file file
     * @param teamId teamId
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadAvatarUsingPost(
        file: Blob,
        teamId?: number,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/team/uploadAvatar',
            query: {
                'teamId': teamId,
            },
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getCurrentUser
     * @returns BaseResponse_User_ OK
     * @throws ApiError
     */
    public static getCurrentUserUsingGet(): CancelablePromise<BaseResponse_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/current',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteUser
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserUsingPost(
        id: UserId,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/delete',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getFriendList
     * @returns BaseResponse_List_UserVO_ OK
     * @throws ApiError
     */
    public static getFriendListUsingGet(): CancelablePromise<BaseResponse_List_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/friendList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getFriendList
     * @returns BaseResponse_List_UserVO_ OK
     * @throws ApiError
     */
    public static getFriendListUsingHead(): CancelablePromise<BaseResponse_List_UserVO_> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/user/friendList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getFriendList
     * @returns BaseResponse_List_UserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getFriendListUsingPost(): CancelablePromise<BaseResponse_List_UserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/friendList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getFriendList
     * @returns BaseResponse_List_UserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getFriendListUsingPut(): CancelablePromise<BaseResponse_List_UserVO_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/friendList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getFriendList
     * @returns BaseResponse_List_UserVO_ OK
     * @throws ApiError
     */
    public static getFriendListUsingDelete(): CancelablePromise<BaseResponse_List_UserVO_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/friendList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getFriendList
     * @returns BaseResponse_List_UserVO_ OK
     * @throws ApiError
     */
    public static getFriendListUsingOptions(): CancelablePromise<BaseResponse_List_UserVO_> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/user/friendList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * getFriendList
     * @returns BaseResponse_List_UserVO_ OK
     * @throws ApiError
     */
    public static getFriendListUsingPatch(): CancelablePromise<BaseResponse_List_UserVO_> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/friendList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * userLogin
     * @param userLoginRequest userLoginRequest
     * @returns BaseResponse_User_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginUsingPost(
        userLoginRequest: UserLoginRequest,
    ): CancelablePromise<BaseResponse_User_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: userLoginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * userLough
     * @returns any OK
     * @throws ApiError
     */
    public static userLoughUsingPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/lough',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * recommend
     * @param num num
     * @returns BaseResponse_List_UserVO_ OK
     * @throws ApiError
     */
    public static recommendUsingGet(
        num?: number,
    ): CancelablePromise<BaseResponse_List_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/match',
            query: {
                'num': num,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * modifyInfo
     * @param userInfo userInfo
     * @returns BaseResponse_User_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static modifyInfoUsingPut(
        userInfo: User,
    ): CancelablePromise<BaseResponse_User_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/modifyInfo',
            body: userInfo,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * modifyTags
     * @param updateTagRequest updateTagRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static modifyTagsUsingPost(
        updateTagRequest: UpdateTagRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/modifyTags',
            body: updateTagRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * list
     * @param pageNum
     * @param pageSize
     * @param total
     * @returns BaseResponse_List_User_ OK
     * @throws ApiError
     */
    public static listUsingGet(
        pageNum?: number,
        pageSize?: number,
        total?: number,
    ): CancelablePromise<BaseResponse_List_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/pageList',
            query: {
                'pageNum': pageNum,
                'pageSize': pageSize,
                'total': total,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * query
     * @param pageNum
     * @param pageSize
     * @param total
     * @param username username
     * @returns BaseResponse_List_UserVO_ OK
     * @throws ApiError
     */
    public static queryUsingGet1(
        pageNum?: number,
        pageSize?: number,
        total?: number,
        username?: string,
    ): CancelablePromise<BaseResponse_List_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/query',
            query: {
                'pageNum': pageNum,
                'pageSize': pageSize,
                'total': total,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * query
     * @param id id
     * @returns BaseResponse_UserVO_ OK
     * @throws ApiError
     */
    public static queryUsingGet(
        id: number,
    ): CancelablePromise<BaseResponse_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/query/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * recommendUsers
     * @param pageNum pageNum
     * @param pageSize pageSize
     * @returns BaseResponse_List_UserVO_ OK
     * @throws ApiError
     */
    public static recommendUsersUsingGet(
        pageNum?: number,
        pageSize?: number,
    ): CancelablePromise<BaseResponse_List_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/recommend',
            query: {
                'pageNum': pageNum,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * userRegister
     * @param userRegisterRequest userRegisterRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userRegisterUsingPost(
        userRegisterRequest: UserRegisterRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/register',
            body: userRegisterRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * removeFriend
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static removeFriendUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/removeFriend',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * removeFriend
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static removeFriendUsingHead(
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/user/removeFriend',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * removeFriend
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static removeFriendUsingPost(
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/removeFriend',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * removeFriend
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static removeFriendUsingPut(
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/removeFriend',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * removeFriend
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static removeFriendUsingDelete(
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/removeFriend',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * removeFriend
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static removeFriendUsingOptions(
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/user/removeFriend',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * removeFriend
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static removeFriendUsingPatch(
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/removeFriend',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * searchUsers
     * @param userAccount userAccount
     * @param username username
     * @returns User OK
     * @throws ApiError
     */
    public static searchUsersUsingGet(
        userAccount?: string,
        username?: string,
    ): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/search',
            query: {
                'userAccount': userAccount,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * searchUserByTags
     * @param pageNum pageNum
     * @param pageSize pageSize
     * @param tagList tagList
     * @returns BaseResponse_List_User_ OK
     * @throws ApiError
     */
    public static searchUserByTagsUsingGet(
        pageNum?: number,
        pageSize?: number,
        tagList?: Array<string>,
    ): CancelablePromise<BaseResponse_List_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/search/list',
            query: {
                'pageNum': pageNum,
                'pageSize': pageSize,
                'tagList': tagList,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateUser
     * @param user user
     * @returns BaseResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserUsingPost(
        user: User,
    ): CancelablePromise<BaseResponse_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/update',
            body: user,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * uploadAvatar
     * @param file file
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadAvatarUsingPost1(
        file: Blob,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/uploadAvatar',
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
