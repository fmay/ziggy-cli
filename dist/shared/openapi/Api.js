/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ConnectionTypeEnum;
(function (ConnectionTypeEnum) {
    ConnectionTypeEnum["Postgres"] = "Postgres";
    ConnectionTypeEnum["SqlServer"] = "SqlServer";
    ConnectionTypeEnum["Snowflake"] = "Snowflake";
    ConnectionTypeEnum["Hubspot"] = "Hubspot";
    ConnectionTypeEnum["Salesforce"] = "Salesforce";
    ConnectionTypeEnum["Upsales"] = "Upsales";
    ConnectionTypeEnum["SFTP"] = "SFTP";
    ConnectionTypeEnum["S3"] = "S3";
    ConnectionTypeEnum["MQTTAWS"] = "MQTT AWS";
    ConnectionTypeEnum["MQTTGeneric"] = "MQTT Generic";
    ConnectionTypeEnum["DynamoDB"] = "DynamoDB";
    ConnectionTypeEnum["Cohere"] = "Cohere";
    ConnectionTypeEnum["ChatGPT"] = "ChatGPT";
    ConnectionTypeEnum["Qdrant"] = "Qdrant";
    ConnectionTypeEnum["Elastic"] = "Elastic";
    ConnectionTypeEnum["MCPServer"] = "MCP_Server";
})(ConnectionTypeEnum || (ConnectionTypeEnum = {}));
export var ExecutionEnvironmentModeEnum;
(function (ExecutionEnvironmentModeEnum) {
    ExecutionEnvironmentModeEnum["DEV"] = "DEV";
    ExecutionEnvironmentModeEnum["PROD"] = "PROD";
})(ExecutionEnvironmentModeEnum || (ExecutionEnvironmentModeEnum = {}));
export var StoreFindDtoMode;
(function (StoreFindDtoMode) {
    StoreFindDtoMode["DATA"] = "DATA";
    StoreFindDtoMode["MEMORY"] = "MEMORY";
})(StoreFindDtoMode || (StoreFindDtoMode = {}));
export var PlatformPropertyTypeEnum;
(function (PlatformPropertyTypeEnum) {
    PlatformPropertyTypeEnum["Text"] = "text";
    PlatformPropertyTypeEnum["Select"] = "select";
    PlatformPropertyTypeEnum["MultiSelect"] = "multiSelect";
    PlatformPropertyTypeEnum["Number"] = "number";
    PlatformPropertyTypeEnum["BooleanString"] = "booleanString";
    PlatformPropertyTypeEnum["DateISO"] = "dateISO";
    PlatformPropertyTypeEnum["DateTimeMS"] = "dateTimeMS";
    PlatformPropertyTypeEnum["DateOnly"] = "dateOnly";
    PlatformPropertyTypeEnum["Custom"] = "custom";
    PlatformPropertyTypeEnum["TextArea"] = "textArea";
    PlatformPropertyTypeEnum["PhoneNumber"] = "phoneNumber";
    PlatformPropertyTypeEnum["Email"] = "email";
    PlatformPropertyTypeEnum["File"] = "file";
    PlatformPropertyTypeEnum["Unknown"] = "unknown";
})(PlatformPropertyTypeEnum || (PlatformPropertyTypeEnum = {}));
export var PlatformPropertyDataType;
(function (PlatformPropertyDataType) {
    PlatformPropertyDataType["String"] = "string";
    PlatformPropertyDataType["Number"] = "number";
    PlatformPropertyDataType["Boolean"] = "boolean";
})(PlatformPropertyDataType || (PlatformPropertyDataType = {}));
export var BlockTypeSpecialEnum;
(function (BlockTypeSpecialEnum) {
    BlockTypeSpecialEnum["RECEIVER"] = "RECEIVER";
    BlockTypeSpecialEnum["TERMINATOR"] = "TERMINATOR";
})(BlockTypeSpecialEnum || (BlockTypeSpecialEnum = {}));
export var ObjectTypesWithTagsEnum;
(function (ObjectTypesWithTagsEnum) {
    ObjectTypesWithTagsEnum["Flow"] = "Flow";
    ObjectTypesWithTagsEnum["Secret"] = "Secret";
    ObjectTypesWithTagsEnum["Structure"] = "Structure";
})(ObjectTypesWithTagsEnum || (ObjectTypesWithTagsEnum = {}));
export var StyleTypeEnum;
(function (StyleTypeEnum) {
    StyleTypeEnum["STANDARD"] = "STANDARD";
})(StyleTypeEnum || (StyleTypeEnum = {}));
export var IFlowExecutionStatusEnum;
(function (IFlowExecutionStatusEnum) {
    IFlowExecutionStatusEnum["IDLE"] = "IDLE";
    IFlowExecutionStatusEnum["RUNNING"] = "RUNNING";
    IFlowExecutionStatusEnum["SUCCESS"] = "SUCCESS";
    IFlowExecutionStatusEnum["ERROR"] = "ERROR";
})(IFlowExecutionStatusEnum || (IFlowExecutionStatusEnum = {}));
export var IFlowSocketMessageEnum;
(function (IFlowSocketMessageEnum) {
    IFlowSocketMessageEnum["ActiveBlock"] = "ActiveBlock";
    IFlowSocketMessageEnum["EdgeData"] = "EdgeData";
    IFlowSocketMessageEnum["NodeExecutionTime"] = "NodeExecutionTime";
    IFlowSocketMessageEnum["ConsoleMsg"] = "ConsoleMsg";
    IFlowSocketMessageEnum["LogMsg"] = "LogMsg";
    IFlowSocketMessageEnum["DebugStopped"] = "DebugStopped";
    IFlowSocketMessageEnum["DebugStarted"] = "DebugStarted";
    IFlowSocketMessageEnum["DBRestoreProgress"] = "DBRestoreProgress";
    IFlowSocketMessageEnum["FlowProgress"] = "FlowProgress";
    IFlowSocketMessageEnum["BatchEndData"] = "BatchEndData";
    IFlowSocketMessageEnum["SocketTerminate"] = "SocketTerminate";
    IFlowSocketMessageEnum["LoadTestProgress"] = "LoadTestProgress";
})(IFlowSocketMessageEnum || (IFlowSocketMessageEnum = {}));
export var IFlowLogLevelEnum;
(function (IFlowLogLevelEnum) {
    IFlowLogLevelEnum["DEBUG"] = "DEBUG";
    IFlowLogLevelEnum["INFO"] = "INFO";
    IFlowLogLevelEnum["WARNING"] = "WARNING";
    IFlowLogLevelEnum["FATAL"] = "FATAL";
    IFlowLogLevelEnum["ALL"] = "ALL";
    IFlowLogLevelEnum["TERMINATION"] = "TERMINATION";
})(IFlowLogLevelEnum || (IFlowLogLevelEnum = {}));
export var IFlowExecutionHistoryLevelEnum;
(function (IFlowExecutionHistoryLevelEnum) {
    IFlowExecutionHistoryLevelEnum["USE_DEFAULT"] = "USE_DEFAULT";
    IFlowExecutionHistoryLevelEnum["TIME_LIMITED_ERRORED_WITH_DATA"] = "TIME_LIMITED_ERRORED_WITH_DATA";
    IFlowExecutionHistoryLevelEnum["TIME_LIMITED_ALL_WITH_DATA"] = "TIME_LIMITED_ALL_WITH_DATA";
    IFlowExecutionHistoryLevelEnum["ERRORED_WITH_DATA"] = "ERRORED_WITH_DATA";
    IFlowExecutionHistoryLevelEnum["ERRORED_NO_DATA"] = "ERRORED_NO_DATA";
    IFlowExecutionHistoryLevelEnum["ALL"] = "ALL";
})(IFlowExecutionHistoryLevelEnum || (IFlowExecutionHistoryLevelEnum = {}));
export var IFLowExecutionHistoryActionEnum;
(function (IFLowExecutionHistoryActionEnum) {
    IFLowExecutionHistoryActionEnum["SYSTEMDEFAULT"] = "SYSTEM DEFAULT";
    IFLowExecutionHistoryActionEnum["DONOTLOG"] = "DO NOT LOG";
    IFLowExecutionHistoryActionEnum["LOGWITHDATAFORRETENTIONPERIOD"] = "LOG WITH DATA FOR RETENTION PERIOD";
    IFLowExecutionHistoryActionEnum["LOGWITHOUTDATAFORRETENTIONPERIOD"] = "LOG WITHOUT DATA FOR RETENTION PERIOD";
})(IFLowExecutionHistoryActionEnum || (IFLowExecutionHistoryActionEnum = {}));
export var TerminationStatusEnum;
(function (TerminationStatusEnum) {
    TerminationStatusEnum["SUCCESS"] = "SUCCESS";
    TerminationStatusEnum["FATAL"] = "FATAL";
    TerminationStatusEnum["TIMEDOUT"] = "TIMED OUT";
    TerminationStatusEnum["KILLED"] = "KILLED";
})(TerminationStatusEnum || (TerminationStatusEnum = {}));
export var IFlowDebugEnum;
(function (IFlowDebugEnum) {
    IFlowDebugEnum["None"] = "None";
    IFlowDebugEnum["Step"] = "Step";
    IFlowDebugEnum["Run"] = "Run";
    IFlowDebugEnum["Stop"] = "Stop";
    IFlowDebugEnum["Pause"] = "Pause";
    IFlowDebugEnum["Restart"] = "Restart";
    IFlowDebugEnum["Kill"] = "Kill";
})(IFlowDebugEnum || (IFlowDebugEnum = {}));
export var IFlowListenerTypeEnum;
(function (IFlowListenerTypeEnum) {
    IFlowListenerTypeEnum["REST"] = "REST";
})(IFlowListenerTypeEnum || (IFlowListenerTypeEnum = {}));
export var AIModelTypeEnum;
(function (AIModelTypeEnum) {
    AIModelTypeEnum["CHAT"] = "CHAT";
    AIModelTypeEnum["Embed"] = "Embed";
})(AIModelTypeEnum || (AIModelTypeEnum = {}));
export var BlockGroupEnum;
(function (BlockGroupEnum) {
    BlockGroupEnum["Core"] = "Core";
    BlockGroupEnum["Utility"] = "Utility";
    BlockGroupEnum["Collection"] = "Collection";
})(BlockGroupEnum || (BlockGroupEnum = {}));
export var SystemKeys;
(function (SystemKeys) {
    SystemKeys["DefaultTimeout"] = "DefaultTimeout";
    SystemKeys["DefaultExecutionLogLevel"] = "DefaultExecutionLogLevel";
    SystemKeys["DefaultExecutionLogRetentionTime"] = "DefaultExecutionLogRetentionTime";
    SystemKeys["AutoVacuumCronString"] = "AutoVacuumCronString";
    SystemKeys["AutoBackupCronString"] = "AutoBackupCronString";
    SystemKeys["IPWhitelist"] = "IPWhitelist";
    SystemKeys["AllowExternalExecutionWithToken"] = "AllowExternalExecutionWithToken";
    SystemKeys["FlowTags"] = "FlowTags";
    SystemKeys["SecretTags"] = "SecretTags";
    SystemKeys["StructureTags"] = "StructureTags";
    SystemKeys["AlertSettings"] = "AlertSettings";
    SystemKeys["SysLogSettings"] = "SysLogSettings";
    SystemKeys["SlackSettings"] = "SlackSettings";
    SystemKeys["LoadTestSettings"] = "LoadTestSettings";
    SystemKeys["RemoteBackup"] = "RemoteBackup";
    SystemKeys["MaxConcurrentFlows"] = "MaxConcurrentFlows";
    SystemKeys["MaxSystemQueueSize"] = "MaxSystemQueueSize";
    SystemKeys["JSWorkerPoolSize"] = "JSWorkerPoolSize";
})(SystemKeys || (SystemKeys = {}));
export var AuthRoleEnum;
(function (AuthRoleEnum) {
    AuthRoleEnum["REQUESTED"] = "REQUESTED";
    AuthRoleEnum["ADMIN"] = "ADMIN";
    AuthRoleEnum["EDITOR"] = "EDITOR";
    AuthRoleEnum["VIEWER"] = "VIEWER";
    AuthRoleEnum["MONITOR"] = "MONITOR";
})(AuthRoleEnum || (AuthRoleEnum = {}));
export var TestRunResultEnum;
(function (TestRunResultEnum) {
    TestRunResultEnum["INACTIVE"] = "INACTIVE";
    TestRunResultEnum["SUCCESS"] = "SUCCESS";
    TestRunResultEnum["ERROR"] = "ERROR";
})(TestRunResultEnum || (TestRunResultEnum = {}));
export var TestExecutionStatusEnum;
(function (TestExecutionStatusEnum) {
    TestExecutionStatusEnum["PASSIVE"] = "PASSIVE";
    TestExecutionStatusEnum["RUNNING"] = "RUNNING";
    TestExecutionStatusEnum["SUCCEEDED"] = "SUCCEEDED";
    TestExecutionStatusEnum["TIMEOUT"] = "TIMEOUT";
    TestExecutionStatusEnum["FATAL"] = "FATAL";
    TestExecutionStatusEnum["KILLED"] = "KILLED";
})(TestExecutionStatusEnum || (TestExecutionStatusEnum = {}));
export var AlertLevelEnum;
(function (AlertLevelEnum) {
    AlertLevelEnum["ALERT"] = "ALERT";
    AlertLevelEnum["WARNING"] = "WARNING";
    AlertLevelEnum["IMMEDIATE"] = "IMMEDIATE";
})(AlertLevelEnum || (AlertLevelEnum = {}));
export var AlertTypeEnum;
(function (AlertTypeEnum) {
    AlertTypeEnum["USER"] = "USER";
    AlertTypeEnum["MEMORY"] = "MEMORY";
    AlertTypeEnum["CPU"] = "CPU";
    AlertTypeEnum["QUEUE"] = "QUEUE";
    AlertTypeEnum["EXECUTION_FATAL"] = "EXECUTION_FATAL";
    AlertTypeEnum["EXECUTION_TIMEOUT"] = "EXECUTION_TIMEOUT";
    AlertTypeEnum["SYSTEM"] = "SYSTEM";
})(AlertTypeEnum || (AlertTypeEnum = {}));
export var ImportDuplicatesEnum;
(function (ImportDuplicatesEnum) {
    ImportDuplicatesEnum["LEAVE"] = "LEAVE";
    ImportDuplicatesEnum["OVERWRITE"] = "OVERWRITE";
    ImportDuplicatesEnum["RENAME"] = "RENAME";
})(ImportDuplicatesEnum || (ImportDuplicatesEnum = {}));
export var MessagingTypeEnum;
(function (MessagingTypeEnum) {
    MessagingTypeEnum["MQTTAWS"] = "MQTT AWS";
    MessagingTypeEnum["MQTTGeneric"] = "MQTT Generic";
})(MessagingTypeEnum || (MessagingTypeEnum = {}));
export var MessagingStatusEnum;
(function (MessagingStatusEnum) {
    MessagingStatusEnum["ACTIVE"] = "ACTIVE";
    MessagingStatusEnum["PAUSED"] = "PAUSED";
    MessagingStatusEnum["SUSPENDED"] = "SUSPENDED";
})(MessagingStatusEnum || (MessagingStatusEnum = {}));
export var HistoryTerminationStatus;
(function (HistoryTerminationStatus) {
    HistoryTerminationStatus["SUCCESS"] = "SUCCESS";
    HistoryTerminationStatus["FATAL"] = "FATAL";
    HistoryTerminationStatus["TIMEDOUT"] = "TIMED OUT";
    HistoryTerminationStatus["KILLED"] = "KILLED";
})(HistoryTerminationStatus || (HistoryTerminationStatus = {}));
export var HistoryExecutionEnvironmentMode;
(function (HistoryExecutionEnvironmentMode) {
    HistoryExecutionEnvironmentMode["DEV"] = "DEV";
    HistoryExecutionEnvironmentMode["PROD"] = "PROD";
})(HistoryExecutionEnvironmentMode || (HistoryExecutionEnvironmentMode = {}));
export var FlowExecutionHistoryLevel;
(function (FlowExecutionHistoryLevel) {
    FlowExecutionHistoryLevel["USE_DEFAULT"] = "USE_DEFAULT";
    FlowExecutionHistoryLevel["TIME_LIMITED_ERRORED_WITH_DATA"] = "TIME_LIMITED_ERRORED_WITH_DATA";
    FlowExecutionHistoryLevel["TIME_LIMITED_ALL_WITH_DATA"] = "TIME_LIMITED_ALL_WITH_DATA";
    FlowExecutionHistoryLevel["ERRORED_WITH_DATA"] = "ERRORED_WITH_DATA";
    FlowExecutionHistoryLevel["ERRORED_NO_DATA"] = "ERRORED_NO_DATA";
    FlowExecutionHistoryLevel["ALL"] = "ALL";
})(FlowExecutionHistoryLevel || (FlowExecutionHistoryLevel = {}));
export var CreateAlertDtoLevel;
(function (CreateAlertDtoLevel) {
    CreateAlertDtoLevel["ALERT"] = "ALERT";
    CreateAlertDtoLevel["WARNING"] = "WARNING";
    CreateAlertDtoLevel["IMMEDIATE"] = "IMMEDIATE";
})(CreateAlertDtoLevel || (CreateAlertDtoLevel = {}));
export var AlertLevel;
(function (AlertLevel) {
    AlertLevel["ALERT"] = "ALERT";
    AlertLevel["WARNING"] = "WARNING";
    AlertLevel["IMMEDIATE"] = "IMMEDIATE";
})(AlertLevel || (AlertLevel = {}));
/**
 * Status of the local backup operation
 * @example "success"
 */
export var BackupResponseDtoLocalBackupStatus;
(function (BackupResponseDtoLocalBackupStatus) {
    BackupResponseDtoLocalBackupStatus["Success"] = "success";
    BackupResponseDtoLocalBackupStatus["Failed"] = "failed";
})(BackupResponseDtoLocalBackupStatus || (BackupResponseDtoLocalBackupStatus = {}));
/**
 * Status of the S3 copy operation
 * @example "success"
 */
export var BackupResponseDtoS3CopyStatus;
(function (BackupResponseDtoS3CopyStatus) {
    BackupResponseDtoS3CopyStatus["Success"] = "success";
    BackupResponseDtoS3CopyStatus["Failed"] = "failed";
    BackupResponseDtoS3CopyStatus["NotConfigured"] = "not_configured";
})(BackupResponseDtoS3CopyStatus || (BackupResponseDtoS3CopyStatus = {}));
/**
 * Plugin type (npm package or local file)
 * @example "local"
 */
export var RegisterPluginDtoType;
(function (RegisterPluginDtoType) {
    RegisterPluginDtoType["Npm"] = "npm";
    RegisterPluginDtoType["Local"] = "local";
})(RegisterPluginDtoType || (RegisterPluginDtoType = {}));
export var PluginRegistryType;
(function (PluginRegistryType) {
    PluginRegistryType["Npm"] = "npm";
    PluginRegistryType["Local"] = "local";
})(PluginRegistryType || (PluginRegistryType = {}));
export var CreateMessagingDtoType;
(function (CreateMessagingDtoType) {
    CreateMessagingDtoType["MQTTAWS"] = "MQTT AWS";
    CreateMessagingDtoType["MQTTGeneric"] = "MQTT Generic";
})(CreateMessagingDtoType || (CreateMessagingDtoType = {}));
export var CreateMessagingDtoStatus;
(function (CreateMessagingDtoStatus) {
    CreateMessagingDtoStatus["ACTIVE"] = "ACTIVE";
    CreateMessagingDtoStatus["PAUSED"] = "PAUSED";
    CreateMessagingDtoStatus["SUSPENDED"] = "SUSPENDED";
})(CreateMessagingDtoStatus || (CreateMessagingDtoStatus = {}));
export var MessagingType;
(function (MessagingType) {
    MessagingType["MQTTAWS"] = "MQTT AWS";
    MessagingType["MQTTGeneric"] = "MQTT Generic";
})(MessagingType || (MessagingType = {}));
export var MessagingStatus;
(function (MessagingStatus) {
    MessagingStatus["ACTIVE"] = "ACTIVE";
    MessagingStatus["PAUSED"] = "PAUSED";
    MessagingStatus["SUSPENDED"] = "SUSPENDED";
})(MessagingStatus || (MessagingStatus = {}));
export var UpdateMessagingDtoType;
(function (UpdateMessagingDtoType) {
    UpdateMessagingDtoType["MQTTAWS"] = "MQTT AWS";
    UpdateMessagingDtoType["MQTTGeneric"] = "MQTT Generic";
})(UpdateMessagingDtoType || (UpdateMessagingDtoType = {}));
export var UpdateMessagingDtoStatus;
(function (UpdateMessagingDtoStatus) {
    UpdateMessagingDtoStatus["ACTIVE"] = "ACTIVE";
    UpdateMessagingDtoStatus["PAUSED"] = "PAUSED";
    UpdateMessagingDtoStatus["SUSPENDED"] = "SUSPENDED";
})(UpdateMessagingDtoStatus || (UpdateMessagingDtoStatus = {}));
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
    baseUrl = '';
    securityData = null;
    securityWorker;
    abortControllers = new Map();
    customFetch = (...fetchParams) => fetch(...fetchParams);
    baseApiParams = {
        credentials: 'same-origin',
        headers: {},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };
    constructor(apiConfig = {}) {
        Object.assign(this, apiConfig);
    }
    setSecurityData = (data) => {
        this.securityData = data;
    };
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v) => this.encodeQueryParam(key, v)).join('&');
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key]);
        return keys
            .map(key => Array.isArray(query[key])
            ? this.addArrayQueryParam(query, key)
            : this.addQueryParam(query, key))
            .join('&');
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : '';
    }
    contentFormatters = {
        [ContentType.Json]: (input) => input !== null && (typeof input === 'object' || typeof input === 'string')
            ? JSON.stringify(input)
            : input,
        [ContentType.Text]: (input) => input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
        [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === 'object' && property !== null
                    ? JSON.stringify(property)
                    : `${property}`);
            return formData;
        }, new FormData()),
        [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
    };
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    createAbortSignal = (cancelToken) => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }
        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };
    abortRequest = (cancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);
        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };
    request = async ({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }) => {
        const secureParams = ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
            this.securityWorker &&
            (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;
        return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
            },
            signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
            body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
        }).then(async (response) => {
            const r = response;
            r.data = null;
            r.error = null;
            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                    .then(data => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch(e => {
                    r.error = e;
                    return r;
                });
            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }
            if (!response.ok)
                throw data;
            return data;
        });
    };
}
/**
 * @title Migrate
 * @version 1.0.0
 * @contact
 *
 * Migrate API specification
 */
export class Api extends HttpClient {
    /**
     * No description
     *
     * @tags Health
     * @name AppControllerRender
     * @summary Serve up front-end application
     * @request GET:/
     */
    appControllerRender = (params = {}) => this.request({
        path: `/`,
        method: 'GET',
        ...params,
    });
    health = {
        /**
         * No description
         *
         * @tags Health
         * @name AppControllerHealth
         * @summary Health Check
         * @request GET:/health
         */
        appControllerHealth: (params = {}) => this.request({
            path: `/health`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
    };
    assets = {
        /**
         * No description
         *
         * @tags Health
         * @name AppControllerAssets
         * @summary Serve up front-end application
         * @request GET:/assets/{file}
         */
        appControllerAssets: (file, params = {}) => this.request({
            path: `/assets/${file}`,
            method: 'GET',
            ...params,
        }),
    };
    oauth = {
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthError
         * @summary oAuth error
         * @request GET:/oauth/error
         */
        oauthError: (params = {}) => this.request({
            path: `/oauth/error`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthLogout
         * @summary logout
         * @request GET:/oauth/logout
         */
        oauthLogout: (params = {}) => this.request({
            path: `/oauth/logout`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthCallbackGithub
         * @summary Get authorisation code from server github
         * @request GET:/oauth/oauth-callback-github
         */
        oauthCallbackGithub: (params = {}) => this.request({
            path: `/oauth/oauth-callback-github`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthCallbackHubspot
         * @summary Get authorisation code from server hubspot
         * @request GET:/oauth/oauth-callback-hubspot
         */
        oauthCallbackHubspot: (params = {}) => this.request({
            path: `/oauth/oauth-callback-hubspot`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthInstall
         * @summary Install an oAuth app.
         * @request GET:/oauth/install/{provider}
         */
        oauthInstall: (provider, params = {}) => this.request({
            path: `/oauth/install/${provider}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthInstallWithConnectionUuid
         * @summary Install an oAuth app. If oauthConnectionUuid is provided, it is a special case connection-based oAuth login
         * @request GET:/oauth/install-connection/{provider}/{oauthConnectionUuid}/{environmentMode}
         */
        oauthInstallWithConnectionUuid: (provider, oauthConnectionUuid, environmentMode, params = {}) => this.request({
            path: `/oauth/install-connection/${provider}/${oauthConnectionUuid}/${environmentMode}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthRefreshToken
         * @summary Get access token and refresh if necessary
         * @request POST:/oauth/refresh-token
         */
        oauthRefreshToken: (params = {}) => this.request({
            path: `/oauth/refresh-token`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
    };
    auth = {
        /**
         * No description
         *
         * @tags Health
         * @name SoloAuthControllerHealth
         * @summary Health Check
         * @request GET:/auth/health
         */
        soloAuthControllerHealth: (params = {}) => this.request({
            path: `/auth/health`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name SoloAuthControllerHealthPrivate
         * @summary Health Check Private Endpoint
         * @request GET:/auth/health-private
         */
        soloAuthControllerHealthPrivate: (params = {}) => this.request({
            path: `/auth/health-private`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name AuthLogin
         * @summary Login
         * @request POST:/auth/login
         */
        authLogin: (data, params = {}) => this.request({
            path: `/auth/login`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name AuthRefreshToken
         * @summary Refresh access token
         * @request POST:/auth/refresh-token
         */
        authRefreshToken: (data, params = {}) => this.request({
            path: `/auth/refresh-token`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name AuthUserAdd
         * @summary Add new user
         * @request POST:/auth/user-add/{email}/{role}
         */
        authUserAdd: (email, role, params = {}) => this.request({
            path: `/auth/user-add/${email}/${role}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name UserChangePassword
         * @summary Change user password
         * @request PATCH:/auth/change-password/{uuid}
         */
        userChangePassword: (uuid, data, params = {}) => this.request({
            path: `/auth/change-password/${uuid}`,
            method: 'PATCH',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name UserRole
         * @summary Set the role of a user
         * @request PATCH:/auth/user-role/{email}/{role}
         */
        userRole: (email, role, params = {}) => this.request({
            path: `/auth/user-role/${email}/${role}`,
            method: 'PATCH',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name UserAlerts
         * @summary Set the alert status of a user
         * @request PATCH:/auth/user-alerts/{email}/{status}
         */
        userAlerts: (email, status, params = {}) => this.request({
            path: `/auth/user-alerts/${email}/${status}`,
            method: 'PATCH',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name UserFetch
         * @summary Fetch list of Users
         * @request GET:/auth/users
         */
        userFetch: (params = {}) => this.request({
            path: `/auth/users`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name SoloAuthControllerCallback
         * @request GET:/auth/callback
         */
        soloAuthControllerCallback: (params = {}) => this.request({
            path: `/auth/callback`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name AuthLogout
         * @summary Logout
         * @request GET:/auth/logout/{userId}
         */
        authLogout: (userId, params = {}) => this.request({
            path: `/auth/logout/${userId}`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name SoloAuthControllerGetProfile
         * @request GET:/auth/profile
         */
        soloAuthControllerGetProfile: (params = {}) => this.request({
            path: `/auth/profile`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name AuthUserDelete
         * @summary Delete user
         * @request DELETE:/auth/user-delete/{email}
         */
        authUserDelete: (email, params = {}) => this.request({
            path: `/auth/user-delete/${email}`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name AuthInitiatePasswordReset
         * @summary Initiate password reset process
         * @request POST:/auth/password-reset/initiate
         */
        authInitiatePasswordReset: (data, params = {}) => this.request({
            path: `/auth/password-reset/initiate`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @tags Health
         * @name AuthResetPassword
         * @summary Complete password reset with token
         * @request POST:/auth/password-reset/complete
         */
        authResetPassword: (data, params = {}) => this.request({
            path: `/auth/password-reset/complete`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
    };
    memstore = {
        /**
         * No description
         *
         * @name MemStoreMethods
         * @summary Fetch Memory Store method
         * @request GET:/memstore/methods
         */
        memStoreMethods: (params = {}) => this.request({
            path: `/memstore/methods`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
    };
    connection = {
        /**
         * No description
         *
         * @name ConnectionCreate
         * @summary Create a new connection
         * @request POST:/connection
         */
        connectionCreate: (data, params = {}) => this.request({
            path: `/connection`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name ConnectionFetch
         * @summary Fetch Connections
         * @request GET:/connection
         */
        connectionFetch: (query, params = {}) => this.request({
            path: `/connection`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name ConnectionTest
         * @summary Test a connection
         * @request POST:/connection/test/{mode}
         */
        connectionTest: (mode, data, params = {}) => this.request({
            path: `/connection/test/${mode}`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name ConnectionGetConnectionObjectsTemplates
         * @summary Get connection object templates
         * @request GET:/connection/connection-templates
         */
        connectionGetConnectionObjectsTemplates: (params = {}) => this.request({
            path: `/connection/connection-templates`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name ConnectionFindOne
         * @summary Fetch a connection by its UUID
         * @request GET:/connection/{id}
         */
        connectionFindOne: (id, params = {}) => this.request({
            path: `/connection/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name ConnectionSave
         * @summary Save connection
         * @request PUT:/connection/{id}
         */
        connectionSave: (id, data, params = {}) => this.request({
            path: `/connection/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name ConnectionDelete
         * @summary Delete connection
         * @request DELETE:/connection/{id}
         */
        connectionDelete: (id, params = {}) => this.request({
            path: `/connection/${id}`,
            method: 'DELETE',
            ...params,
        }),
    };
    secret = {
        /**
         * No description
         *
         * @name SecretCreate
         * @summary Create a new Secret
         * @request POST:/secret
         */
        secretCreate: (data, params = {}) => this.request({
            path: `/secret`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name SecretFetch
         * @summary Fetch Secrets
         * @request GET:/secret
         */
        secretFetch: (params = {}) => this.request({
            path: `/secret`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name SecretGetObfuscatedByName
         * @summary Fetch a Secret's obfuscated value by its name
         * @request GET:/secret/get-obfuscated-by-name/{name}
         */
        secretGetObfuscatedByName: (name, params = {}) => this.request({
            path: `/secret/get-obfuscated-by-name/${name}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name SecretFindOne
         * @summary Fetch a Secret by its UUID
         * @request GET:/secret/{id}
         */
        secretFindOne: (id, params = {}) => this.request({
            path: `/secret/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name SecretSave
         * @summary Save Secret
         * @request PUT:/secret/{id}
         */
        secretSave: (id, data, params = {}) => this.request({
            path: `/secret/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name SecretDelete
         * @summary Delete Secret
         * @request DELETE:/secret/{id}
         */
        secretDelete: (id, params = {}) => this.request({
            path: `/secret/${id}`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @name SecretUpdateSecretValue
         * @summary Update Secret value
         * @request PATCH:/secret/update-secret-value
         */
        secretUpdateSecretValue: (data, params = {}) => this.request({
            path: `/secret/update-secret-value`,
            method: 'PATCH',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
    };
    variable = {
        /**
         * No description
         *
         * @name VariableCreate
         * @summary Create a new variable
         * @request POST:/variable
         */
        variableCreate: (data, params = {}) => this.request({
            path: `/variable`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name VariableFetch
         * @summary Fetch Variables
         * @request GET:/variable
         */
        variableFetch: (params = {}) => this.request({
            path: `/variable`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name VariableFindOne
         * @summary Fetch a variable by its UUID
         * @request GET:/variable/{id}
         */
        variableFindOne: (id, params = {}) => this.request({
            path: `/variable/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name VariableSave
         * @summary Save variable
         * @request PUT:/variable/{id}
         */
        variableSave: (id, data, params = {}) => this.request({
            path: `/variable/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name VariableDelete
         * @summary Delete variable
         * @request DELETE:/variable/{id}
         */
        variableDelete: (id, params = {}) => this.request({
            path: `/variable/${id}`,
            method: 'DELETE',
            ...params,
        }),
    };
    alert = {
        /**
         * No description
         *
         * @name AlertPurge
         * @summary Purges the alert log
         * @request POST:/alert/purge
         */
        alertPurge: (params = {}) => this.request({
            path: `/alert/purge`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AlertAdd
         * @summary Add an alert log entry
         * @request POST:/alert
         */
        alertAdd: (data, params = {}) => this.request({
            path: `/alert`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name IfSmtpTest
         * @summary Test SMTP server with test email
         * @request POST:/alert/smtp-test
         */
        ifSmtpTest: (params = {}) => this.request({
            path: `/alert/smtp-test`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AlertRowCount
         * @summary Get alert log row count
         * @request GET:/alert/row-count
         */
        alertRowCount: (params = {}) => this.request({
            path: `/alert/row-count`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AlertFetch
         * @summary Fetch Alerts
         * @request GET:/alert/{take}/{skip}
         */
        alertFetch: (take, skip, params = {}) => this.request({
            path: `/alert/${take}/${skip}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AlertFindOne
         * @summary Fetch an alert entry
         * @request GET:/alert/{id}
         */
        alertFindOne: (id, params = {}) => this.request({
            path: `/alert/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AlertDelete
         * @summary Delete Alert
         * @request DELETE:/alert/{id}
         */
        alertDelete: (id, params = {}) => this.request({
            path: `/alert/${id}`,
            method: 'DELETE',
            ...params,
        }),
    };
    system = {
        /**
         * No description
         *
         * @tags System
         * @name SystemBackupDb
         * @summary Backup database
         * @request POST:/system/backup-db
         */
        systemBackupDb: (params = {}) => this.request({
            path: `/system/backup-db`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemTransferDb
         * @summary Transfer database
         * @request POST:/system/transfer-db
         */
        systemTransferDb: (params = {}) => this.request({
            path: `/system/transfer-db`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemRestoreDb
         * @summary Restore transfer file
         * @request POST:/system/restore-db
         */
        systemRestoreDb: (params = {}) => this.request({
            path: `/system/restore-db`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemCheckHubspotPat
         * @summary Check Hubspot Private Access Token
         * @request POST:/system/check-hubspot-pat
         */
        systemCheckHubspotPat: (data, params = {}) => this.request({
            path: `/system/check-hubspot-pat`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemUpdateWorkerPoolSize
         * @summary Update worker pool size
         * @request POST:/system/worker-pool-size/{key}/{value}
         */
        systemUpdateWorkerPoolSize: (key, value, params = {}) => this.request({
            path: `/system/worker-pool-size/${key}/${value}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemUpdateMaxConcurrentFlows
         * @summary Update max concurrent flows
         * @request POST:/system/max-concurrent-flows/{key}/{value}
         */
        systemUpdateMaxConcurrentFlows: (key, value, params = {}) => this.request({
            path: `/system/max-concurrent-flows/${key}/${value}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemUpdateMaxSystemQueueSize
         * @summary Update max system queue size
         * @request POST:/system/max-system-queue-size/{key}/{value}
         */
        systemUpdateMaxSystemQueueSize: (key, value, params = {}) => this.request({
            path: `/system/max-system-queue-size/${key}/${value}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemExecuteLoadTest
         * @summary Execute load test
         * @request POST:/system/execute-load-test
         */
        systemExecuteLoadTest: (params = {}) => this.request({
            path: `/system/execute-load-test`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemAbortLoadTest
         * @summary Abort load test
         * @request POST:/system/abort-load-test
         */
        systemAbortLoadTest: (params = {}) => this.request({
            path: `/system/abort-load-test`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemDevopsTest
         * @summary Performs connection tests
         * @request GET:/system/devops-test
         */
        systemDevopsTest: (params = {}) => this.request({
            path: `/system/devops-test`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemGetTenantInfo
         * @summary Gets tenant information
         * @request GET:/system/tenant-info
         */
        systemGetTenantInfo: (params = {}) => this.request({
            path: `/system/tenant-info`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemGetVerisonInfo
         * @summary Gets version information
         * @request GET:/system/version-info
         */
        systemGetVerisonInfo: (params = {}) => this.request({
            path: `/system/version-info`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemGetGoogleSheetMappings
         * @summary Retrieves Google Sheet data from a url
         * @request GET:/system/gsheet-mapping/{url}/{sheet}
         */
        systemGetGoogleSheetMappings: (url, sheet, params = {}) => this.request({
            path: `/system/gsheet-mapping/${url}/${sheet}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemGetValue
         * @summary Gets one system value
         * @request GET:/system/value/{value}
         */
        systemGetValue: (value, params = {}) => this.request({
            path: `/system/value/${value}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchWrittenFiles
         * @summary Fetch files written by File block
         * @request GET:/system/written-files
         */
        systemFetchWrittenFiles: (params = {}) => this.request({
            path: `/system/written-files`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchWrittenFile
         * @summary Fetch one written file stream
         * @request GET:/system/written-file/{filename}
         */
        systemFetchWrittenFile: (filename, params = {}) => this.request({
            path: `/system/written-file/${filename}`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemDownloadTransferFile
         * @summary Download the database transfer file
         * @request GET:/system/download-transfer
         */
        systemDownloadTransferFile: (params = {}) => this.request({
            path: `/system/download-transfer`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemUploadTransferFile
         * @summary Upload and restore database transfer file
         * @request POST:/system/upload-transfer
         */
        systemUploadTransferFile: (data, params = {}) => this.request({
            path: `/system/upload-transfer`,
            method: 'POST',
            body: data,
            type: ContentType.FormData,
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchSysLogFiles
         * @summary Fetch system log files names
         * @request GET:/system/syslog-files
         */
        systemFetchSysLogFiles: (params = {}) => this.request({
            path: `/system/syslog-files`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchSysEventsFiles
         * @summary Fetch sys-events log files names
         * @request GET:/system/sys-events-files
         */
        systemFetchSysEventsFiles: (params = {}) => this.request({
            path: `/system/sys-events-files`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchWarnErrorFiles
         * @summary Fetch warn-error log files names
         * @request GET:/system/warn-error-files
         */
        systemFetchWarnErrorFiles: (params = {}) => this.request({
            path: `/system/warn-error-files`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchSysLogFile
         * @summary Fetch one system log file
         * @request GET:/system/syslog-file/{filename}
         */
        systemFetchSysLogFile: (filename, params = {}) => this.request({
            path: `/system/syslog-file/${filename}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchSysEventsFile
         * @summary Fetch one sys-events log file
         * @request GET:/system/sys-events-file/{filename}
         */
        systemFetchSysEventsFile: (filename, params = {}) => this.request({
            path: `/system/sys-events-file/${filename}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchWarnErrorFile
         * @summary Fetch one warn-error log file
         * @request GET:/system/warn-error-file/{filename}
         */
        systemFetchWarnErrorFile: (filename, params = {}) => this.request({
            path: `/system/warn-error-file/${filename}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchProgressMessages
         * @summary Fetch progress messages
         * @request GET:/system/progress
         */
        systemFetchProgressMessages: (params = {}) => this.request({
            path: `/system/progress`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemGetSystemMonitor
         * @summary Get system monitoring information
         * @request GET:/system/system-monitor
         */
        systemGetSystemMonitor: (params = {}) => this.request({
            path: `/system/system-monitor`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemGetValues
         * @summary Gets all system values
         * @request GET:/system
         */
        systemGetValues: (params = {}) => this.request({
            path: `/system`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemSetHubspotPat
         * @summary Sets Hubspot Private Access Token
         * @request PUT:/system/set-hubspot-pat
         */
        systemSetHubspotPat: (data, params = {}) => this.request({
            path: `/system/set-hubspot-pat`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemSetValue
         * @summary Update a system value
         * @request PUT:/system/{uuid}
         */
        systemSetValue: (uuid, data, params = {}) => this.request({
            path: `/system/${uuid}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemAddTag
         * @summary Adds a tag to the list of values for the specified type, if not already there
         * @request PATCH:/system/add-tag/{type}/{value}
         */
        systemAddTag: (type, value, params = {}) => this.request({
            path: `/system/add-tag/${type}/${value}`,
            method: 'PATCH',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemRemoveTag
         * @summary Removes a flow tag from the list of values, if it is not already in use
         * @request DELETE:/system/remove-tag/{type}/{uuid}/{value}
         */
        systemRemoveTag: (type, uuid, value, params = {}) => this.request({
            path: `/system/remove-tag/${type}/${uuid}/${value}`,
            method: 'DELETE',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemDeleteSysLogFileContents
         * @summary Deletes contents of a log file
         * @request DELETE:/system/delete-log-contents/{filename}
         */
        systemDeleteSysLogFileContents: (filename, params = {}) => this.request({
            path: `/system/delete-log-contents/${filename}`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemDeleteProgressHistory
         * @summary Deletes progress history
         * @request DELETE:/system/delete-progress
         */
        systemDeleteProgressHistory: (params = {}) => this.request({
            path: `/system/delete-progress`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @tags System
         * @name SystemDeleteWrittenFile
         * @summary Deletes a ziggy stored file written by File block
         * @request DELETE:/system/delete-written-file/{filename}
         */
        systemDeleteWrittenFile: (filename, params = {}) => this.request({
            path: `/system/delete-written-file/${filename}`,
            method: 'DELETE',
            ...params,
        }),
    };
    hubspot = {
        /**
         * @description Save or update HubSpot properties for a connection
         *
         * @name HubspotSaveProps
         * @summary Save HubSpot properties
         * @request POST:/hubspot/props/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotSaveProps: (connectionUuid, objectId, environmentMode, data, params = {}) => this.request({
            path: `/hubspot/props/${connectionUuid}/${objectId}/${environmentMode}`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * @description Load HubSpot properties by connection UUID and object ID
         *
         * @name HubspotLoadProps
         * @summary Load HubSpot properties
         * @request GET:/hubspot/props/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotLoadProps: (connectionUuid, objectId, environmentMode, params = {}) => this.request({
            path: `/hubspot/props/${connectionUuid}/${objectId}/${environmentMode}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * @description Get all dirty HubSpot properties
         *
         * @name HubspotGetDirty
         * @summary Get dirty HubSpot properties
         * @request GET:/hubspot/dirty/{connectionUuid}/{environmentMode}
         */
        hubspotGetDirty: (connectionUuid, environmentMode, params = {}) => this.request({
            path: `/hubspot/dirty/${connectionUuid}/${environmentMode}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * @description Get HubSpot groups for a specific connection and object
         *
         * @name HubspotGetGroups
         * @summary Get HubSpot groups
         * @request GET:/hubspot/groups/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotGetGroups: (connectionUuid, objectId, environmentMode, params = {}) => this.request({
            path: `/hubspot/groups/${connectionUuid}/${objectId}/${environmentMode}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * @description Create a new HubSpot group for a specific connection and object
         *
         * @name HubspotCreateGroup
         * @summary Create HubSpot group
         * @request POST:/hubspot/groups/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotCreateGroup: (connectionUuid, objectId, environmentMode, data, params = {}) => this.request({
            path: `/hubspot/groups/${connectionUuid}/${objectId}/${environmentMode}`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * @description Update a HubSpot group for a specific connection and object
         *
         * @name HubspotUpdateGroup
         * @summary Update HubSpot group
         * @request PATCH:/hubspot/groups/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotUpdateGroup: (connectionUuid, objectId, environmentMode, data, params = {}) => this.request({
            path: `/hubspot/groups/${connectionUuid}/${objectId}/${environmentMode}`,
            method: 'PATCH',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * @description Delete a HubSpot group for a specific connection and object
         *
         * @name HubspotDeleteGroup
         * @summary Delete HubSpot group
         * @request DELETE:/hubspot/groups/{connectionUuid}/{objectId}/{environmentMode}/{groupInternalName}
         */
        hubspotDeleteGroup: (environmentMode, connectionUuid, objectId, groupInternalName, params = {}) => this.request({
            path: `/hubspot/groups/${connectionUuid}/${objectId}/${environmentMode}/${groupInternalName}`,
            method: 'DELETE',
            format: 'json',
            ...params,
        }),
        /**
         * @description Update HubSpot properties for a specific connection and object
         *
         * @name HubspotUpdateProperties
         * @summary Update HubSpot properties
         * @request POST:/hubspot/update-properties/{connectionUuid}/{environmentMode}/{objectId}
         */
        hubspotUpdateProperties: (connectionUuid, environmentMode, objectId, params = {}) => this.request({
            path: `/hubspot/update-properties/${connectionUuid}/${environmentMode}/${objectId}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * @description Update a single HubSpot property by internal ID for a specific connection and object
         *
         * @name HubspotUpdateOneProperty
         * @summary Update one HubSpot property
         * @request POST:/hubspot/update-one-property/{connectionUuid}/{environmentMode}/{objectId}/{internalId}
         */
        hubspotUpdateOneProperty: (connectionUuid, environmentMode, objectId, internalId, params = {}) => this.request({
            path: `/hubspot/update-one-property/${connectionUuid}/${environmentMode}/${objectId}/${internalId}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * @description Resync HubSpot properties for a specific connection and object
         *
         * @name HubspotResyncProperties
         * @summary Resync HubSpot properties
         * @request POST:/hubspot/resync/{connectionUuid}/{environmentMode}/{objectId}/{mode}
         */
        hubspotResyncProperties: (connectionUuid, environmentMode, objectId, mode, params = {}) => this.request({
            path: `/hubspot/resync/${connectionUuid}/${environmentMode}/${objectId}/${mode}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * @description Get property usages for a specific connection, object and property
         *
         * @name HubspotGetPropertyUsages
         * @summary Get property usages
         * @request GET:/hubspot/property-usages/{connectionUuid}/{environmentMode}/{objectId}/{internalId}
         */
        hubspotGetPropertyUsages: (connectionUuid, environmentMode, objectId, internalId, params = {}) => this.request({
            path: `/hubspot/property-usages/${connectionUuid}/${environmentMode}/${objectId}/${internalId}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * @description Get options array for a specified HubSpot property
         *
         * @name HubspotGetOptions
         * @summary Get HubSpot property options
         * @request GET:/hubspot/options/{environmentMode}/{connectionUuid}/{objectId}/{propertyName}
         */
        hubspotGetOptions: (environmentMode, connectionUuid, objectId, propertyName, params = {}) => this.request({
            path: `/hubspot/options/${environmentMode}/${connectionUuid}/${objectId}/${propertyName}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * @description Export HubSpot object data to CSV file
         *
         * @name HubspotExportObject
         * @summary Export HubSpot object data
         * @request POST:/hubspot/export/{environmentMode}/{connectionUuid}/{objectId}
         */
        hubspotExportObject: (environmentMode, connectionUuid, objectId, data, params = {}) => this.request({
            path: `/hubspot/export/${environmentMode}/${connectionUuid}/${objectId}`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * @description Export HubSpot property options to CSV file
         *
         * @name HubspotExportOptions
         * @summary Export HubSpot property options
         * @request POST:/hubspot/export-options/{environmentMode}/{connectionUuid}/{objectId}/{propertyName}
         */
        hubspotExportOptions: (environmentMode, connectionUuid, objectId, propertyName, params = {}) => this.request({
            path: `/hubspot/export-options/${environmentMode}/${connectionUuid}/${objectId}/${propertyName}`,
            method: 'POST',
            ...params,
        }),
        /**
         * @description Copy custom properties from source connection to target connection
         *
         * @name HubspotGetConnectionCustomProperties
         * @summary Get connection custom properties
         * @request POST:/hubspot/connection-custom-properties
         */
        hubspotGetConnectionCustomProperties: (data, params = {}) => this.request({
            path: `/hubspot/connection-custom-properties`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
    };
    executionKeys = {
        /**
         * No description
         *
         * @tags execution-keys
         * @name ExecutionKeyFetchAll
         * @summary Fetch execution keys
         * @request POST:/execution-keys/fetch
         */
        executionKeyFetchAll: (params = {}) => this.request({
            path: `/execution-keys/fetch`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags execution-keys
         * @name ExecutionKeyGenerate
         * @summary Generate an execution key
         * @request POST:/execution-keys/generate
         */
        executionKeyGenerate: (params = {}) => this.request({
            path: `/execution-keys/generate`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags execution-keys
         * @name ExecutionKeyRename
         * @summary Rename an execution key
         * @request PATCH:/execution-keys/rename/{uuid}/{newName}
         */
        executionKeyRename: (uuid, newName, params = {}) => this.request({
            path: `/execution-keys/rename/${uuid}/${newName}`,
            method: 'PATCH',
            ...params,
        }),
        /**
         * No description
         *
         * @tags execution-keys
         * @name ExecutionKeyRevoke
         * @summary Revoke an execution key
         * @request DELETE:/execution-keys/revoke/{uuid}
         */
        executionKeyRevoke: (uuid, params = {}) => this.request({
            path: `/execution-keys/revoke/${uuid}`,
            method: 'DELETE',
            ...params,
        }),
    };
    flow = {
        /**
         * No description
         *
         * @name FlowClone
         * @summary Clone the specified Flow
         * @request POST:/flow/clone/{uuid}
         */
        flowClone: (uuid, params = {}) => this.request({
            path: `/flow/clone/${uuid}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowCreate
         * @summary Create a new Flow with the specified receiver type and name
         * @request POST:/flow/{name}/{receiverType}
         */
        flowCreate: (name, receiverType, params = {}) => this.request({
            path: `/flow/${name}/${receiverType}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowExportTagged
         * @summary JSON export of tagged flows
         * @request POST:/flow/export-tagged
         */
        flowExportTagged: (data, params = {}) => this.request({
            path: `/flow/export-tagged`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowGetTaggedExport
         * @summary Get the generated tagged-export.json
         * @request GET:/flow/export-tagged
         */
        flowGetTaggedExport: (params = {}) => this.request({
            path: `/flow/export-tagged`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowImport
         * @summary Upload a file to import flows, connections and secrets (without secret values)
         * @request POST:/flow/import
         */
        flowImport: (data, params = {}) => this.request({
            path: `/flow/import`,
            method: 'POST',
            body: data,
            type: ContentType.FormData,
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowExternalExecutionUrl
         * @summary Get the external execution url
         * @request GET:/flow/external-execution-url/{uuid}
         */
        flowExternalExecutionUrl: (uuid, params = {}) => this.request({
            path: `/flow/external-execution-url/${uuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowExportAll
         * @summary JSON export of whole project
         * @request GET:/flow/export-all
         */
        flowExportAll: (params = {}) => this.request({
            path: `/flow/export-all`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowVacuum
         * @summary Removes deleted records and vacuums the database
         * @request GET:/flow/vacuum
         */
        flowVacuum: (params = {}) => this.request({
            path: `/flow/vacuum`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowGetRestResponse
         * @summary Get REST response for a specific block execution
         * @request GET:/flow/rest-response/{flowUuid}/{executionId}/{blockId}
         */
        flowGetRestResponse: (flowUuid, executionId, blockId, params = {}) => this.request({
            path: `/flow/rest-response/${flowUuid}/${executionId}/${blockId}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowFindOne
         * @summary Fetch a Flow by its UUID
         * @request GET:/flow/{id}
         */
        flowFindOne: (id, params = {}) => this.request({
            path: `/flow/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowSave
         * @summary Save flow
         * @request PUT:/flow/{id}
         */
        flowSave: (id, data, params = {}) => this.request({
            path: `/flow/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowDelete
         * @summary Delete Flow
         * @request DELETE:/flow/{id}
         */
        flowDelete: (id, params = {}) => this.request({
            path: `/flow/${id}`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowFetch
         * @summary Fetch flows with optional search parameters
         * @request GET:/flow
         */
        flowFetch: (query, params = {}) => this.request({
            path: `/flow`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name FlowDeleteTaggedExport
         * @summary Delete tagged flow export
         * @request DELETE:/flow/tagged-export
         */
        flowDeleteTaggedExport: (params = {}) => this.request({
            path: `/flow/tagged-export`,
            method: 'DELETE',
            ...params,
        }),
    };
    structure = {
        /**
         * No description
         *
         * @name StructureValidateInterfaceSyntax
         * @summary Validate typescript Interface syntax
         * @request POST:/structure/validate-syntax-interface
         */
        structureValidateInterfaceSyntax: (data, params = {}) => this.request({
            path: `/structure/validate-syntax-interface`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StructureCreate
         * @summary Create a new Structure
         * @request POST:/structure
         */
        structureCreate: (data, params = {}) => this.request({
            path: `/structure`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StructureFetch
         * @summary Fetch Structures
         * @request GET:/structure
         */
        structureFetch: (query, params = {}) => this.request({
            path: `/structure`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StructureFindOne
         * @summary Fetch a Structure by its UUID
         * @request GET:/structure/{id}
         */
        structureFindOne: (id, params = {}) => this.request({
            path: `/structure/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StructureSave
         * @summary Save Structure
         * @request PUT:/structure/{id}
         */
        structureSave: (id, data, params = {}) => this.request({
            path: `/structure/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name StructureDelete
         * @summary Delete Structure
         * @request DELETE:/structure/{id}
         */
        structureDelete: (id, params = {}) => this.request({
            path: `/structure/${id}`,
            method: 'DELETE',
            ...params,
        }),
    };
    schedule = {
        /**
         * No description
         *
         * @name ScheduleCreate
         * @summary Create a new Schedule
         * @request POST:/schedule
         */
        scheduleCreate: (data, params = {}) => this.request({
            path: `/schedule`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name ScheduleFetch
         * @summary Fetch Schedules
         * @request GET:/schedule
         */
        scheduleFetch: (params = {}) => this.request({
            path: `/schedule`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name IfUpdateAutoVacuum
         * @summary Update the Auto Vacuum scheduler
         * @request POST:/schedule/update-auto-vacuum
         */
        ifUpdateAutoVacuum: (params = {}) => this.request({
            path: `/schedule/update-auto-vacuum`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @name IfUpdateAutoBackup
         * @summary Update the Auto Backup scheduler
         * @request POST:/schedule/update-auto-backup
         */
        ifUpdateAutoBackup: (params = {}) => this.request({
            path: `/schedule/update-auto-backup`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @name ScheduleFindOne
         * @summary Fetch a Schedule by its UUID
         * @request GET:/schedule/{id}
         */
        scheduleFindOne: (id, params = {}) => this.request({
            path: `/schedule/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name ScheduleSave
         * @summary Save Schedule
         * @request PUT:/schedule/{id}
         */
        scheduleSave: (id, data, params = {}) => this.request({
            path: `/schedule/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name ScheduleDelete
         * @summary Delete Schedule
         * @request DELETE:/schedule/{id}
         */
        scheduleDelete: (id, params = {}) => this.request({
            path: `/schedule/${id}`,
            method: 'DELETE',
            ...params,
        }),
    };
    ziggy = {
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueSystemQueueStatus
         * @summary Is job in system queue
         * @request GET:/ziggy/system-queue-status/{executionUuid}
         */
        queueSystemQueueStatus: (executionUuid, params = {}) => this.request({
            path: `/ziggy/system-queue-status/${executionUuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueSystemQueueList
         * @summary get list of all items in system queue
         * @request GET:/ziggy/system-queue-list
         */
        queueSystemQueueList: (params = {}) => this.request({
            path: `/ziggy/system-queue-list`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueSystemQueueListInternal
         * @summary get list of all items in system queue : not to be used by executeExternal due to ExecutionGuard()
         * @request GET:/ziggy/system-queue-list-internal
         */
        queueSystemQueueListInternal: (params = {}) => this.request({
            path: `/ziggy/system-queue-list-internal`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueSystemQueueSize
         * @summary Get current size of the system queue
         * @request GET:/ziggy/system-queue-size
         */
        queueSystemQueueSize: (params = {}) => this.request({
            path: `/ziggy/system-queue-size`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryLoad
         * @summary Load a flow from History
         * @request GET:/ziggy/history-load/{uuid}
         */
        ifHistoryLoad: (uuid, params = {}) => this.request({
            path: `/ziggy/history-load/${uuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfFetchNamedSaves
         * @summary Load named saves
         * @request GET:/ziggy/named-saves/{flowUuid}
         */
        ifFetchNamedSaves: (flowUuid, params = {}) => this.request({
            path: `/ziggy/named-saves/${flowUuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfExecutionStatus
         * @summary Get the execution status for the specified execution id
         * @request GET:/ziggy/execution-status/{executionUuid}
         */
        ifExecutionStatus: (executionUuid, params = {}) => this.request({
            path: `/ziggy/execution-status/${executionUuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFlowCounts
         * @summary Number of history items for each flow
         * @request GET:/ziggy/history-flow-counts
         */
        ifHistoryFlowCounts: (params = {}) => this.request({
            path: `/ziggy/history-flow-counts`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfGetRunningFlows
         * @summary Get a list of running flows
         * @request GET:/ziggy/get-running-flows
         */
        ifGetRunningFlows: (params = {}) => this.request({
            path: `/ziggy/get-running-flows`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfGetRunningFlow
         * @summary Get running flow info, if running
         * @request GET:/ziggy/get-running-flow/{executionUuid}
         */
        ifGetRunningFlow: (executionUuid, params = {}) => this.request({
            path: `/ziggy/get-running-flow/${executionUuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHealthCheckRunningFlows
         * @summary Health check for stuck flows - returns diagnostics about potentially stuck jobs
         * @request GET:/ziggy/health-check-running-flows
         */
        ifHealthCheckRunningFlows: (params = {}) => this.request({
            path: `/ziggy/health-check-running-flows`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFetchCount
         * @summary Fetch total # of history entries
         * @request POST:/ziggy/history-row-count
         */
        ifHistoryFetchCount: (data, params = {}) => this.request({
            path: `/ziggy/history-row-count`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryCounts
         * @summary Fetch History counts
         * @request POST:/ziggy/history-counts
         */
        ifHistoryCounts: (data, params = {}) => this.request({
            path: `/ziggy/history-counts`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFetch
         * @summary Fetch History entries
         * @request POST:/ziggy/history-fetch/{take}/{skip}
         */
        ifHistoryFetch: (take, skip, data, params = {}) => this.request({
            path: `/ziggy/history-fetch/${take}/${skip}`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryNamedSave
         * @summary Add a named save
         * @request POST:/ziggy/history-named-save/{uuid}/{name}
         */
        ifHistoryNamedSave: (uuid, name, params = {}) => this.request({
            path: `/ziggy/history-named-save/${uuid}/${name}`,
            method: 'POST',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfExecuteInternal
         * @summary Execute an integration flow from the Ziggy editor
         * @request POST:/ziggy/execute-internal
         */
        ifExecuteInternal: (data, params = {}) => this.request({
            path: `/ziggy/execute-internal`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfExecuteExternal
         * @summary Execute a flow
         * @request POST:/ziggy/execute-external
         */
        ifExecuteExternal: (query, params = {}) => this.request({
            path: `/ziggy/execute-external`,
            method: 'POST',
            query: query,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfExecuteTest
         * @summary Execute a flow in test mode
         * @request POST:/ziggy/execute-test
         */
        ifExecuteTest: (data, params = {}) => this.request({
            path: `/ziggy/execute-test`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfUpdateFlowSocket
         * @summary Update the Flow with a new socket id
         * @request PATCH:/ziggy/update-flow-socket/{executionUuid}/{socketId}
         */
        ifUpdateFlowSocket: (executionUuid, socketId, params = {}) => this.request({
            path: `/ziggy/update-flow-socket/${executionUuid}/${socketId}`,
            method: 'PATCH',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFlush
         * @summary Flush history
         * @request DELETE:/ziggy/history-flush/{flowUuid}/{date}/{time}
         */
        ifHistoryFlush: (flowUuid, date, time, params = {}) => this.request({
            path: `/ziggy/history-flush/${flowUuid}/${date}/${time}`,
            method: 'DELETE',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFilterFlush
         * @summary Flush history based on the dashboard filter
         * @request DELETE:/ziggy/history-filter-flush
         */
        ifHistoryFilterFlush: (data, params = {}) => this.request({
            path: `/ziggy/history-filter-flush`,
            method: 'DELETE',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfKillFlow
         * @summary Kill a running flow
         * @request DELETE:/ziggy/kill-flow/{executionUuid}
         */
        ifKillFlow: (executionUuid, params = {}) => this.request({
            path: `/ziggy/kill-flow/${executionUuid}`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueKillSystemJob
         * @summary Delete System Queue job
         * @request DELETE:/ziggy/kill-system-queue-item/{executionUuid}
         */
        queueKillSystemJob: (executionUuid, params = {}) => this.request({
            path: `/ziggy/kill-system-queue-item/${executionUuid}`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueResetSystemQueueHighestReached
         * @summary Reset System Queue Highest Reached Value
         * @request POST:/ziggy/reset-system-queue-highest-reached
         */
        queueResetSystemQueueHighestReached: (params = {}) => this.request({
            path: `/ziggy/reset-system-queue-highest-reached`,
            method: 'POST',
            ...params,
        }),
    };
    plugins = {
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerRegisterPlugin
         * @summary Register a new plugin
         * @request POST:/plugins/register
         * @secure
         */
        pluginControllerRegisterPlugin: (data, params = {}) => this.request({
            path: `/plugins/register`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetEnabledPlugins
         * @summary Get all enabled plugins
         * @request GET:/plugins/enabled
         * @secure
         */
        pluginControllerGetEnabledPlugins: (params = {}) => this.request({
            path: `/plugins/enabled`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetRegistryStats
         * @summary Get block registry statistics
         * @request GET:/plugins/registry/stats
         * @secure
         */
        pluginControllerGetRegistryStats: (params = {}) => this.request({
            path: `/plugins/registry/stats`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetAllBlockTypes
         * @summary Get all registered block types
         * @request GET:/plugins/registry/blocks
         * @secure
         */
        pluginControllerGetAllBlockTypes: (params = {}) => this.request({
            path: `/plugins/registry/blocks`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetClientBlocks
         * @summary Get all client block definitions for plugin blocks
         * @request GET:/plugins/client/blocks
         * @secure
         */
        pluginControllerGetClientBlocks: (params = {}) => this.request({
            path: `/plugins/client/blocks`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetPluginBundle
         * @summary Get plugin client bundle
         * @request GET:/plugins/bundles/{pluginId}
         * @secure
         */
        pluginControllerGetPluginBundle: (pluginId, params = {}) => this.request({
            path: `/plugins/bundles/${pluginId}`,
            method: 'GET',
            secure: true,
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetAllPlugins
         * @summary Get all plugins
         * @request GET:/plugins
         * @secure
         */
        pluginControllerGetAllPlugins: (params = {}) => this.request({
            path: `/plugins`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetPluginBlocks
         * @summary Get blocks provided by a plugin
         * @request GET:/plugins/{id}/blocks
         * @secure
         */
        pluginControllerGetPluginBlocks: (id, params = {}) => this.request({
            path: `/plugins/${id}/blocks`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetPlugin
         * @summary Get a specific plugin
         * @request GET:/plugins/{id}
         * @secure
         */
        pluginControllerGetPlugin: (id, params = {}) => this.request({
            path: `/plugins/${id}`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerUpdatePlugin
         * @summary Update plugin configuration or enable/disable
         * @request PATCH:/plugins/{id}
         * @secure
         */
        pluginControllerUpdatePlugin: (id, data, params = {}) => this.request({
            path: `/plugins/${id}`,
            method: 'PATCH',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerUninstallPlugin
         * @summary Uninstall a plugin
         * @request DELETE:/plugins/{id}
         * @secure
         */
        pluginControllerUninstallPlugin: (id, params = {}) => this.request({
            path: `/plugins/${id}`,
            method: 'DELETE',
            secure: true,
            ...params,
        }),
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerSyncPlugin
         * @summary Sync plugin with current dist folder (refresh blocks)
         * @request POST:/plugins/{id}/sync
         * @secure
         */
        pluginControllerSyncPlugin: (id, params = {}) => this.request({
            path: `/plugins/${id}/sync`,
            method: 'POST',
            secure: true,
            format: 'json',
            ...params,
        }),
    };
    store = {
        /**
         * No description
         *
         * @name StoreMethods
         * @summary Fetch Store method
         * @request GET:/store/methods
         */
        storeMethods: (params = {}) => this.request({
            path: `/store/methods`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StoreFetchStoreData
         * @summary Fetch Data or Memory Store data
         * @request POST:/store/fetch-store-data
         */
        storeFetchStoreData: (data, params = {}) => this.request({
            path: `/store/fetch-store-data`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StoreFetchStoreDataRowCount
         * @summary Fetch row count for Data or Memory Store data (infinite scrolling support)
         * @request POST:/store/fetch-store-data-row-count
         */
        storeFetchStoreDataRowCount: (data, params = {}) => this.request({
            path: `/store/fetch-store-data-row-count`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StoreFetchStats
         * @summary Fetch store stats
         * @request GET:/store/stats/{mode}
         */
        storeFetchStats: (mode, params = {}) => this.request({
            path: `/store/stats/${mode}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StoreFetchNameSpaces
         * @summary Fetch list of names spaces with search key
         * @request GET:/store/namespaces/{mode}/{searchKey}
         */
        storeFetchNameSpaces: (mode, searchKey, params = {}) => this.request({
            path: `/store/namespaces/${mode}/${searchKey}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name StoreDeleteNamespace
         * @summary Deletes a namespace or the entire store
         * @request DELETE:/store/delete-namespace/{mode}/{namespace}
         */
        storeDeleteNamespace: (mode, namespace, params = {}) => this.request({
            path: `/store/delete-namespace/${mode}/${namespace}`,
            method: 'DELETE',
            ...params,
        }),
    };
    queue = {
        /**
         * No description
         *
         * @name QueuePause
         * @summary Pause Queue
         * @request POST:/queue/pause/{uuid}
         */
        queuePause: (uuid, params = {}) => this.request({
            path: `/queue/pause/${uuid}`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueResume
         * @summary Resume Queue
         * @request POST:/queue/resume/{uuid}
         */
        queueResume: (uuid, params = {}) => this.request({
            path: `/queue/resume/${uuid}`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueResetHighestReached
         * @summary Reset Highest Reached Value
         * @request POST:/queue/reset-highest-reached/{uuid}
         */
        queueResetHighestReached: (uuid, params = {}) => this.request({
            path: `/queue/reset-highest-reached/${uuid}`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueCreate
         * @summary Create a new Queue
         * @request POST:/queue
         */
        queueCreate: (data, params = {}) => this.request({
            path: `/queue`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueFetch
         * @summary Fetch Queue
         * @request GET:/queue
         */
        queueFetch: (params = {}) => this.request({
            path: `/queue`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueGetCurrentQueueSizes
         * @summary Get current queue sizes for all queues
         * @request GET:/queue/sizes
         */
        queueGetCurrentQueueSizes: (params = {}) => this.request({
            path: `/queue/sizes`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueGetCurrentQueueSize
         * @summary Get current queue size
         * @request GET:/queue/size/{uuid}
         */
        queueGetCurrentQueueSize: (uuid, params = {}) => this.request({
            path: `/queue/size/${uuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueFindOne
         * @summary Fetch a Queue by its UUID
         * @request GET:/queue/{id}
         */
        queueFindOne: (id, params = {}) => this.request({
            path: `/queue/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueSave
         * @summary Save Queue
         * @request PUT:/queue/{id}
         */
        queueSave: (id, data, params = {}) => this.request({
            path: `/queue/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name QueueDelete
         * @summary Delete Queue
         * @request DELETE:/queue/{id}
         */
        queueDelete: (id, params = {}) => this.request({
            path: `/queue/${id}`,
            method: 'DELETE',
            ...params,
        }),
    };
    platform = {
        /**
         * No description
         *
         * @name PlatformGetObjects
         * @summary Get all objects
         * @request POST:/platform/get-objects
         */
        platformGetObjects: (data, params = {}) => this.request({
            path: `/platform/get-objects`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name PlatformGetDatabases
         * @summary Get database names
         * @request GET:/platform/get-databases/{environmentMode}/{connectionUuid}
         */
        platformGetDatabases: (environmentMode, connectionUuid, params = {}) => this.request({
            path: `/platform/get-databases/${environmentMode}/${connectionUuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name PlatformGetDbSchemas
         * @summary Get database schemas
         * @request GET:/platform/get-schemas/{environmentMode}/{connectionUuid}/{database}
         */
        platformGetDbSchemas: (environmentMode, connectionUuid, database, params = {}) => this.request({
            path: `/platform/get-schemas/${environmentMode}/${connectionUuid}/${database}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name PlatformGetProperties
         * @summary Get all properties for an object
         * @request GET:/platform/get-properties/{environmentMode}/{connectionUuid}/{objectId}/{database}/{schema}
         */
        platformGetProperties: (environmentMode, connectionUuid, objectId, database, schema, params = {}) => this.request({
            path: `/platform/get-properties/${environmentMode}/${connectionUuid}/${objectId}/${database}/${schema}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name PlatformGetAssociationInfo
         * @summary Get all associations between two object types
         * @request GET:/platform/get-association-types/{environmentMode}/{connectionUuid}/{fromObjectId}/{toObjectId}
         */
        platformGetAssociationInfo: (environmentMode, connectionUuid, fromObjectId, toObjectId, params = {}) => this.request({
            path: `/platform/get-association-types/${environmentMode}/${connectionUuid}/${fromObjectId}/${toObjectId}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name PlatformIsManyToMany
         * @summary Check if an object is many to many
         * @request GET:/platform/many-to-many/{environmentMode}/{connectionUuid}/{objectId}
         */
        platformIsManyToMany: (environmentMode, connectionUuid, objectId, params = {}) => this.request({
            path: `/platform/many-to-many/${environmentMode}/${connectionUuid}/${objectId}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name PlatformGetHsTimelineEventTemplates
         * @summary Get Hubspot Timeline Event Templates
         * @request GET:/platform/hs-timeline-event-templates/{environmentMode}/{connectionUuid}
         */
        platformGetHsTimelineEventTemplates: (environmentMode, connectionUuid, params = {}) => this.request({
            path: `/platform/hs-timeline-event-templates/${environmentMode}/${connectionUuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
    };
    elastic = {
        /**
         * No description
         *
         * @name ElasticExecutePrompt
         * @summary Generate a prompt
         * @request POST:/elastic/execute-prompt
         */
        elasticExecutePrompt: (data, params = {}) => this.request({
            path: `/elastic/execute-prompt`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name ElasticRebuildIndex
         * @summary Rebuild an index (destroys all data)
         * @request POST:/elastic/rebuild-index/{environmentMode}
         */
        elasticRebuildIndex: (environmentMode, data, params = {}) => this.request({
            path: `/elastic/rebuild-index/${environmentMode}`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name ElasticAddIndex
         * @summary Add new index
         * @request POST:/elastic/add-index/{environmentMode}/{connectionUuid}/{indexName}
         */
        elasticAddIndex: (environmentMode, connectionUuid, indexName, params = {}) => this.request({
            path: `/elastic/add-index/${environmentMode}/${connectionUuid}/${indexName}`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @name ElasticGetIndices
         * @summary Get indices
         * @request GET:/elastic/get-indices/{connectionUuid}/{environmentMode}
         */
        elasticGetIndices: (environmentMode, connectionUuid, params = {}) => this.request({
            path: `/elastic/get-indices/${connectionUuid}/${environmentMode}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name GetSchemaInfo
         * @summary Get index schema information
         * @request GET:/elastic/get-schema-info/{environmentMode}/{connectionUuid}/{indexName}
         */
        getSchemaInfo: (environmentMode, connectionUuid, indexName, params = {}) => this.request({
            path: `/elastic/get-schema-info/${environmentMode}/${connectionUuid}/${indexName}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
    };
    openai = {
        /**
         * No description
         *
         * @tags Openai
         * @name OpenaiZodify
         * @summary Generate a Zod object from a javascript object
         * @request POST:/openai/zodify
         */
        openaiZodify: (data, params = {}) => this.request({
            path: `/openai/zodify`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Openai
         * @name OpenaiMappify
         * @summary Generate a best guess mapping between two objects
         * @request POST:/openai/mappify
         */
        openaiMappify: (data, params = {}) => this.request({
            path: `/openai/mappify`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Openai
         * @name OpenaiJavascriptAssistant
         * @summary JavaScript code assistant
         * @request POST:/openai/javascript-assistant
         */
        openaiJavascriptAssistant: (data, params = {}) => this.request({
            path: `/openai/javascript-assistant`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
    };
    aiAgent = {
        /**
         * No description
         *
         * @name AiAgentCreateCollection
         * @summary Create a new AI database collection
         * @request POST:/ai-agent/add-collection
         */
        aiAgentCreateCollection: (data, params = {}) => this.request({
            path: `/ai-agent/add-collection`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name AiAgentRebuildCollection
         * @summary Rebuild a collection
         * @request POST:/ai-agent/rebuild-collection
         */
        aiAgentRebuildCollection: (data, params = {}) => this.request({
            path: `/ai-agent/rebuild-collection`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name AiAgentExecutePrompt
         * @summary Execute a prompt
         * @request POST:/ai-agent/execute-prompt
         */
        aiAgentExecutePrompt: (data, params = {}) => this.request({
            path: `/ai-agent/execute-prompt`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AiAgentInsertPromptTokens
         * @summary Execute a prompt
         * @request POST:/ai-agent/insert-prompt-tokens
         */
        aiAgentInsertPromptTokens: (data, params = {}) => this.request({
            path: `/ai-agent/insert-prompt-tokens`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AiAgentValidateJsonlogic
         * @summary Validate a jsonlogic structure
         * @request POST:/ai-agent/validate-jsonlogic
         */
        aiAgentValidateJsonlogic: (data, params = {}) => this.request({
            path: `/ai-agent/validate-jsonlogic`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AiAgentGetModels
         * @summary Get models for the specified platform
         * @request GET:/ai-agent/models/{connectionUuid}/{type}
         */
        aiAgentGetModels: (connectionUuid, type, params = {}) => this.request({
            path: `/ai-agent/models/${connectionUuid}/${type}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AiAgentGetCollections
         * @summary Get collections for the specified vector DB
         * @request GET:/ai-agent/collections/{connectionUuid}
         */
        aiAgentGetCollections: (connectionUuid, params = {}) => this.request({
            path: `/ai-agent/collections/${connectionUuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AiAgentGetCollectionInfo
         * @summary Get collection information for the specified vector DB and collection
         * @request GET:/ai-agent/collection-info/{connectionUuid}/{collection}
         */
        aiAgentGetCollectionInfo: (connectionUuid, collection, params = {}) => this.request({
            path: `/ai-agent/collection-info/${connectionUuid}/${collection}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name AiAgentChatWidget
         * @summary Embeddable chat widget
         * @request GET:/ai-agent/chat-widget/{flowUuid}
         */
        aiAgentChatWidget: (flowUuid, params = {}) => this.request({
            path: `/ai-agent/chat-widget/${flowUuid}`,
            method: 'GET',
            ...params,
        }),
    };
    test = {
        /**
         * No description
         *
         * @name TestCreate
         * @summary Create a new test
         * @request POST:/test
         */
        testCreate: (data, params = {}) => this.request({
            path: `/test`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name TestFetch
         * @summary Fetch Tests
         * @request GET:/test
         */
        testFetch: (params = {}) => this.request({
            path: `/test`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name TestUpdateOrder
         * @summary Update tests order
         * @request POST:/test/update-tests-order
         */
        testUpdateOrder: (data, params = {}) => this.request({
            path: `/test/update-tests-order`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name TestFindOne
         * @summary Fetch a test by its UUID
         * @request GET:/test/{id}
         */
        testFindOne: (id, params = {}) => this.request({
            path: `/test/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name TestUpdate
         * @summary Update test
         * @request PUT:/test/{id}
         */
        testUpdate: (id, data, params = {}) => this.request({
            path: `/test/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name TestDelete
         * @summary Delete test
         * @request DELETE:/test/{id}
         */
        testDelete: (id, params = {}) => this.request({
            path: `/test/${id}`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @name TestConnectFlowToTest
         * @summary Connect a flow to a test
         * @request PATCH:/test/connect-flow-to-test/{testUuid}/{flowUuid}
         */
        testConnectFlowToTest: (testUuid, flowUuid, params = {}) => this.request({
            path: `/test/connect-flow-to-test/${testUuid}/${flowUuid}`,
            method: 'PATCH',
            ...params,
        }),
        /**
         * No description
         *
         * @name TestDisconnectFlowFromTest
         * @summary Disconnect a flow from a test
         * @request PATCH:/test/disconnect-flow-from-test/{testUuid}/{flowUuid}
         */
        testDisconnectFlowFromTest: (testUuid, flowUuid, params = {}) => this.request({
            path: `/test/disconnect-flow-from-test/${testUuid}/${flowUuid}`,
            method: 'PATCH',
            ...params,
        }),
    };
    tenant = {
        /**
         * No description
         *
         * @name TenantCreate
         * @summary Create a new tenant
         * @request POST:/tenant/create
         */
        tenantCreate: (data, params = {}) => this.request({
            path: `/tenant/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name TenantFindAll
         * @summary Fetch tenants
         * @request GET:/tenant
         */
        tenantFindAll: (query, params = {}) => this.request({
            path: `/tenant`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params,
        }),
    };
    aiDocumentor = {
        /**
         * No description
         *
         * @name AiDocumentorHealth
         * @summary Health check for AI Documentor
         * @request GET:/ai-documentor/health
         */
        aiDocumentorHealth: (params = {}) => this.request({
            path: `/ai-documentor/health`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @name AiDocumentorDocumentFlow
         * @summary Generate documentation for a flow
         * @request GET:/ai-documentor/document-flow/{flowUuid}
         */
        aiDocumentorDocumentFlow: (flowUuid, params = {}) => this.request({
            path: `/ai-documentor/document-flow/${flowUuid}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
    };
    slack = {
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsGet
         * @request GET:/slack/events
         */
        slackControllerHandleSlackEventsGet: (params = {}) => this.request({
            path: `/slack/events`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsPost
         * @request POST:/slack/events
         */
        slackControllerHandleSlackEventsPost: (params = {}) => this.request({
            path: `/slack/events`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsPut
         * @request PUT:/slack/events
         */
        slackControllerHandleSlackEventsPut: (params = {}) => this.request({
            path: `/slack/events`,
            method: 'PUT',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsDelete
         * @request DELETE:/slack/events
         */
        slackControllerHandleSlackEventsDelete: (params = {}) => this.request({
            path: `/slack/events`,
            method: 'DELETE',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsPatch
         * @request PATCH:/slack/events
         */
        slackControllerHandleSlackEventsPatch: (params = {}) => this.request({
            path: `/slack/events`,
            method: 'PATCH',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsOptions
         * @request OPTIONS:/slack/events
         */
        slackControllerHandleSlackEventsOptions: (params = {}) => this.request({
            path: `/slack/events`,
            method: 'OPTIONS',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsHead
         * @request HEAD:/slack/events
         */
        slackControllerHandleSlackEventsHead: (params = {}) => this.request({
            path: `/slack/events`,
            method: 'HEAD',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsSearch
         * @request SEARCH:/slack/events
         */
        slackControllerHandleSlackEventsSearch: (params = {}) => this.request({
            path: `/slack/events`,
            method: 'SEARCH',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerOauthCallback
         * @request GET:/slack/oauth/callback
         */
        slackControllerOauthCallback: (query, params = {}) => this.request({
            path: `/slack/oauth/callback`,
            method: 'GET',
            query: query,
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerGetInstallUrl
         * @request GET:/slack/install
         */
        slackControllerGetInstallUrl: (params = {}) => this.request({
            path: `/slack/install`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerTestEndpoint
         * @request GET:/slack/test-endpoint
         */
        slackControllerTestEndpoint: (params = {}) => this.request({
            path: `/slack/test-endpoint`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerTestPost
         * @request POST:/slack/test-post
         */
        slackControllerTestPost: (params = {}) => this.request({
            path: `/slack/test-post`,
            method: 'POST',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerHealth
         * @request GET:/slack/health
         */
        slackControllerHealth: (params = {}) => this.request({
            path: `/slack/health`,
            method: 'GET',
            ...params,
        }),
        /**
         * No description
         *
         * @name SlackControllerAppInfo
         * @request GET:/slack/info
         */
        slackControllerAppInfo: (params = {}) => this.request({
            path: `/slack/info`,
            method: 'GET',
            ...params,
        }),
    };
    messaging = {
        /**
         * No description
         *
         * @name MessagingCreate
         * @summary Create a new Messaging
         * @request POST:/messaging
         */
        messagingCreate: (data, params = {}) => this.request({
            path: `/messaging`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name MessagingFetch
         * @summary Fetch Messaging configs
         * @request GET:/messaging
         */
        messagingFetch: (params = {}) => this.request({
            path: `/messaging`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name MessagingFindOne
         * @summary Fetch a Messaging by its UUID
         * @request GET:/messaging/{id}
         */
        messagingFindOne: (id, params = {}) => this.request({
            path: `/messaging/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @name MessagingSave
         * @summary Save Messaging
         * @request PUT:/messaging/{id}
         */
        messagingSave: (id, data, params = {}) => this.request({
            path: `/messaging/${id}`,
            method: 'PUT',
            body: data,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * No description
         *
         * @name MessagingDelete
         * @summary Delete Messaging
         * @request DELETE:/messaging/{id}
         */
        messagingDelete: (id, params = {}) => this.request({
            path: `/messaging/${id}`,
            method: 'DELETE',
            ...params,
        }),
    };
}
//# sourceMappingURL=Api.js.map