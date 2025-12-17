export interface ConsentUrlResponseDto {
    url: string;
}
export interface RefreshTokenResponseDto {
    accessToken: string;
}
export type SoloAuthLogin = object;
export interface LoginResponseDto {
    uuid: string;
    username: string;
    role: string;
    token: string;
    resetPassword?: boolean;
    passwordWasReset?: boolean;
    passwordStrengthOk: boolean;
    errorMessage?: string;
}
export interface RefreshTokenRequestDTO {
    token: string;
    userId: string;
    provider: string;
    tenantId?: string;
}
export interface AddUserResponseDto {
    userId: string;
    email: string;
    password: string;
    role: string;
}
export type ChangePasswordDto = object;
export interface ChangePasswordResponseDto {
    passwordStrengthOk: boolean;
    oldPasswordOk: boolean;
    passwordErrors?: string[];
}
export interface User {
    tenantId: string;
    uuid: string;
    email: string;
    password: string;
    role: string;
    receiveAlerts: boolean;
    /** @format int32 */
    expiresAt: number | null;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export type InitiatePasswordResetDto = object;
export type ResetPasswordDto = object;
export interface CreateConnectionDto {
    tenantId: string;
    name: string;
    type: string;
    description: string;
    isCorePlatform?: boolean | null;
    devValue: string;
    prodValue: string;
    /** @default false */
    isDeleted?: boolean | null;
    devOAuthToken?: string | null;
    prodOAuthToken?: string | null;
}
export interface ConnectionDto {
    tenantId: string;
    uuid: string;
    name: string;
    type: string;
    description: string;
    isCorePlatform: boolean | null;
    devValue: string;
    prodValue: string;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
    devOAuthToken: string | null;
    prodOAuthToken: string | null;
}
export interface History {
    tenantId: string;
    uuid: string;
    flowName: string;
    /** @format int32 */
    executionCounter: number;
    executionUuid: string;
    externalExecutionId: string | null;
    flowHistory: object;
    logData: object[];
    consoleData: object[];
    terminationStatus: HistoryTerminationStatus;
    /** @format int32 */
    ms: number;
    isSubFlow: boolean;
    isTest: boolean;
    isQueue: boolean;
    hasSnapshotData: boolean;
    saveName: string | null;
    isNamedSave: boolean | null;
    isSnapshot: boolean | null;
    isDebugStep: boolean | null;
    isAlertSent: boolean;
    executionEnvironmentMode: HistoryExecutionEnvironmentMode;
    flowUUID: string;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
    flow?: Flow;
}
export interface Schedule {
    tenantId: string;
    uuid: string;
    name: string;
    config: string;
    isPaused: boolean;
    executionMode: string | null;
    /** @format int32 */
    numExecutions: number;
    flowUuid: string | null;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
    flow?: Flow | null;
}
export interface Variable {
    tenantId: string;
    uuid: string;
    name: string;
    description: string;
    value: string;
    privateFlowUUID: string | null;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
    privateFlow?: Flow | null;
    inFlows?: Flow[];
}
export interface HSProps {
    uuid: string;
    connectionUuid: string;
    executionEnvironmentMode: string;
    objectId: string;
    originalData: object;
    currentData: object;
    dirty: boolean;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    connection?: Connection;
}
export interface Connection {
    tenantId: string;
    uuid: string;
    name: string;
    type: string;
    description: string;
    isCorePlatform: boolean | null;
    devValue: string;
    prodValue: string;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
    inFlows?: Flow[];
    devOAuthToken: string | null;
    prodOAuthToken: string | null;
    hsProps?: HSProps[];
}
export interface Secret {
    tenantId: string;
    uuid: string;
    name: string;
    description: string;
    type: string;
    group: string;
    devValue: string | null;
    prodValue: string | null;
    tags: string[];
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
    inFlows?: Flow[];
}
export interface Structure {
    tenantId: string;
    uuid: string;
    name: string;
    description: string;
    value: string;
    tags: string[];
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
    inFlows?: Flow[];
}
export interface Flow {
    tenantId: string;
    uuid: string;
    queueUuid: string;
    nodes: object;
    edges: object;
    viewport: object;
    info: string;
    executionHistoryLevel: FlowExecutionHistoryLevel;
    /** @format int32 */
    executionHistoryMins: number;
    isValid: boolean;
    name: string;
    listenerType: string;
    /** @format int32 */
    numBlocks: number;
    tags: string[];
    isSubflow: boolean;
    isCommander: boolean;
    /** @format int32 */
    timeout: number;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
    isLocked: boolean;
    history?: History[];
    schedules?: Schedule[];
    privateVariables?: Variable[];
    connections?: Connection[];
    secrets?: Secret[];
    structures?: Structure[];
    variables?: Variable[];
}
export interface TestConnectionResponseDto {
    isOk: boolean;
    msg: string;
}
export declare enum ConnectionTypeEnum {
    Postgres = "Postgres",
    SqlServer = "SqlServer",
    Snowflake = "Snowflake",
    Hubspot = "Hubspot",
    Salesforce = "Salesforce",
    Upsales = "Upsales",
    SFTP = "SFTP",
    SMTP = "SMTP",
    Twilio = "Twilio",
    S3 = "S3",
    AZURE_BLOB = "AZURE_BLOB",
    MQTTAWS = "MQTT AWS",
    MQTTGeneric = "MQTT Generic",
    DynamoDB = "DynamoDB",
    Cohere = "Cohere",
    ChatGPT = "ChatGPT",
    Qdrant = "Qdrant",
    Elastic = "Elastic",
    MCPServer = "MCP_Server",
    RedisEventStream = "Redis Event Stream",
    RedisPubSub = "Redis Pub Sub",
    IMAP = "IMAP"
}
export interface ConnectionObjectTemplateDto {
    type: ConnectionTypeEnum;
    connectionObject: object;
    alternativeObject?: object;
}
export interface UpdateConnectionDto {
    tenantId?: string;
    name?: string;
    type?: string;
    description?: string;
    isCorePlatform?: boolean | null;
    devValue?: string;
    prodValue?: string;
    /** @default false */
    isDeleted?: boolean | null;
    devOAuthToken?: string | null;
    prodOAuthToken?: string | null;
}
export interface CreateSecretDto {
    tenantId: string;
    name: string;
    description: string;
    type: string;
    group: string;
    devValue?: string | null;
    prodValue?: string | null;
    tags: string[];
    /** @default false */
    isDeleted?: boolean | null;
}
export interface ObfuscatedSecretWithUUIDDto {
    uuid: string;
    value: string;
}
export interface UpdateSecretDto {
    tenantId?: string;
    name?: string;
    description?: string;
    type?: string;
    group?: string;
    devValue?: string | null;
    prodValue?: string | null;
    tags?: string[];
    /** @default false */
    isDeleted?: boolean | null;
}
export declare enum ExecutionEnvironmentModeEnum {
    DEV = "DEV",
    PROD = "PROD"
}
export interface UpdateKeyRequestDto {
    executionEnvironmentMode: ExecutionEnvironmentModeEnum;
    uuid: string;
    secret: string;
}
export interface CreateVariableDto {
    tenantId: string;
    name: string;
    description: string;
    value: string;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface VariableDto {
    tenantId: string;
    uuid: string;
    name: string;
    description: string;
    value: string;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface UpdateVariableDto {
    tenantId?: string;
    name?: string;
    description?: string;
    value?: string;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface CreateAlertDto {
    tenantId: string;
    level: CreateAlertDtoLevel;
    msg: string;
    type: string;
    /** @default false */
    isAlertSent?: boolean;
    sentTo: string[];
    /** @default "" */
    extraData?: string;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface Alert {
    tenantId: string;
    uuid: string;
    level: AlertLevel;
    msg: string;
    type: string;
    isAlertSent: boolean;
    sentTo: string[];
    extraData: string;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface BackupResponseDto {
    /**
     * Status of the local backup operation
     * @example "success"
     */
    localBackupStatus: BackupResponseDtoLocalBackupStatus;
    /**
     * Path to the local backup file if successful
     * @example "/files/backups/ziggy_dump_2025-01-15.sql.gz"
     */
    localBackupFile?: string;
    /**
     * Status of the remote backup copy operation (S3 or Azure)
     * @example "success"
     */
    remoteBackupStatus: BackupResponseDtoRemoteBackupStatus;
    /**
     * Error message if remote backup copy failed
     * @example "Storage bucket/container does not exist"
     */
    remoteBackupError?: string;
}
export interface PatCheckResponseDto {
    keyCheck: boolean;
    schemaCompany: number;
    schemaContact: number;
    schemaDeal: number;
    schemaLineItem: number;
    schemaCustom: number;
    companyResult: number;
    contactResult: number;
    dealResult: number;
    lineItemsResult: number;
    ticketResult: number;
    noteResult: number;
    callResult: number;
    emailResult: number;
    taskResult: number;
    meetingResult: number;
}
export interface PoolSizeUpdateResponseDto {
    /** Requested pool size */
    requested: number;
    /** Actual pool size created */
    actual: number;
    /** Whether pool creation was limited by memory constraints */
    memoryConstrained: boolean;
    /** Memory usage percentage when stopped (if constrained) */
    memoryPercent?: number;
}
export interface RedisMemoryStatsDto {
    /** Redis used memory in bytes */
    usedMemory: number;
    /** Redis used memory RSS (resident set size) in bytes */
    usedMemoryRss: number;
    /** Redis peak memory usage in bytes */
    usedMemoryPeak: number;
    /** Memory fragmentation ratio */
    memFragmentationRatio: number;
    /** Total commands processed since startup */
    commandsProcessed: number;
    /** Operations per second */
    opsPerSec: number;
    /** Keyspace hit rate (0-100) */
    keyspaceHitRate: number;
    /** Number of connected clients */
    connectedClients: number;
    /** Redis server uptime in seconds */
    uptime: number;
}
export interface MemoryStatsDto {
    /** Total memory in bytes */
    total: number;
    /** Free memory in bytes */
    free: number;
    /** Used memory in bytes */
    used: number;
    /** Memory usage percentage */
    usagePercent: number;
    /** Redis memory and performance statistics */
    redis?: RedisMemoryStatsDto;
}
export interface DiskStatsDto {
    /** Total disk space in bytes */
    total: number;
    /** Available disk space in bytes */
    available: number;
    /** Used disk space in bytes */
    used: number;
    /** Disk usage percentage */
    usagePercent: number;
}
export interface CpuStatsDto {
    /** CPU usage percentage (0-100) */
    usagePercent: number;
    /** Load average over 1 minute */
    loadAverage1min: number;
    /** Load average over 5 minutes */
    loadAverage5min: number;
    /** Load average over 15 minutes */
    loadAverage15min: number;
    /** Number of CPU cores */
    cores: number;
}
export interface NodeStatsDto {
    /** Resident Set Size - total memory allocated to Node.js process in bytes */
    rss: number;
    /** V8 heap total allocated in bytes */
    heapTotal: number;
    /** V8 heap used in bytes */
    heapUsed: number;
    /** V8 heap usage percentage */
    heapUsagePercent: number;
    /** Maximum heap size limit in bytes */
    heapSizeLimit: number;
    /** Memory used by C++ objects bound to JavaScript objects in bytes */
    external: number;
    /** Memory allocated for ArrayBuffers and SharedArrayBuffers in bytes */
    arrayBuffers: number;
    /** Node.js version */
    version: string;
    /** Process uptime in seconds */
    uptime: number;
}
export interface DockerStatsDto {
    /** Whether running in Docker container */
    isRunningInDocker?: boolean;
    /** Container ID */
    containerId?: string;
    /** Container name */
    containerName?: string;
    /** Image name */
    imageName?: string;
}
export interface WorkerPoolStatsDto {
    /** Worker pool size (max workers) */
    poolSize: number;
    /** Requested worker pool size (may differ from actual if memory constrained) */
    poolSizeRequested: number;
    /** Worker pool heap size (MB) */
    poolHeapSize: number;
    /** Total workers in pool */
    totalWorkers: number;
    /** Number of busy workers */
    busyWorkers: number;
    /** Number of available workers */
    availableWorkers: number;
    /** Current number of queued tasks */
    queuedTasks: number;
    /** Maximum queue size reached since server started */
    maxQueueSizeReached: number;
    /** Whether pool creation was limited by memory constraints */
    memoryConstrained: boolean;
}
export interface SystemQueueStatsDto {
    /** Maximum concurrent flows */
    maxConcurrentFlows: number;
    /** Maximum system queue size */
    maxSystemQueueSize: number;
    /** Peak system queue size */
    peakSystemQueueSize: number;
    /** Current system queue size */
    currentSystemQueueSize: number;
}
export interface SystemMonitorDto {
    /** Memory statistics */
    memory: MemoryStatsDto;
    /** Disk statistics */
    disk: DiskStatsDto;
    /** CPU statistics */
    cpu: CpuStatsDto;
    /** Node.js process statistics */
    node: NodeStatsDto;
    /** Docker container information */
    docker?: DockerStatsDto;
    /** Worker pool statistics */
    workerPool: WorkerPoolStatsDto;
    /** System queue statistics */
    systemQueueStats: SystemQueueStatsDto;
    /** Timestamp of the monitoring snapshot */
    timestamp: string;
}
export interface DevopsTestDto {
    redisResult: string;
    databaseResult: string;
    tenantResult: string;
    isMultiTenant: boolean;
    oauthTypes: string[];
}
export interface TenantInfoDto {
    isMultiTenant: boolean;
    oauthTypes: string[];
}
export interface VersionInfoDto {
    major: number;
    minor: number;
    build: string;
    info: string;
}
export interface SheetMappingResponseDto {
    from: string;
    to: string;
}
export interface System {
    tenantId: string;
    uuid: string;
    key: string;
    value: string | null;
    isServerOnly: boolean | null;
    isEncrypted: boolean | null;
    isDeleted: boolean | null;
}
export interface ProgressMessageDto {
    /** @format date-time */
    updatedAt: string;
    flowUuid: string;
    flowName: string;
    msg: string;
    groupId: string;
}
export interface InstanceStatsDto {
    /** Unique identifier for this server instance */
    instanceId: string;
    /** Whether this instance is the current leader */
    isLeader: boolean;
    /** Server instance name (e.g., AWS instance ID, Azure VM ID, or local port) */
    serverInstanceName?: string;
    /** Memory statistics */
    memory: MemoryStatsDto;
    /** Disk statistics */
    disk: DiskStatsDto;
    /** CPU statistics */
    cpu: CpuStatsDto;
    /** Node.js process statistics */
    node: NodeStatsDto;
    /** Docker container information */
    docker?: DockerStatsDto;
    /** Worker pool statistics */
    workerPool: WorkerPoolStatsDto;
    /** System queue statistics */
    systemQueueStats: SystemQueueStatsDto;
    /** ISO timestamp when these stats were collected */
    timestamp: string;
}
export interface AllInstancesStatsDto {
    /** Array of stats for all alive instances */
    instances: InstanceStatsDto[];
    /** Total number of alive instances */
    totalInstances: number;
    /** ISO timestamp when this data was retrieved */
    retrievedAt: string;
}
export interface ToggleStatsCollectionDto {
    /** Enable or disable continuous stats collection */
    enabled: boolean;
}
export interface UpdateSystemDto {
    tenantId?: string;
    key?: string;
    value?: string | null;
    /** @default false */
    isServerOnly?: boolean | null;
    /** @default false */
    isEncrypted?: boolean | null;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface UpdateHSPropsDto {
    executionEnvironmentMode?: string;
    objectId?: string;
    originalData?: object;
    currentData?: object;
    dirty?: boolean;
}
export interface DirtyHSPropsDto {
    /**
     * Connection UUID
     * @example "uuid-string"
     */
    connectionUuid: string;
    /**
     * Object ID
     * @example "contact"
     */
    objectId: string;
    /**
     * Dirty flag indicating if properties have unsaved changes
     * @example true
     */
    dirty: boolean;
}
export interface HubspotPropertyGroupDto {
    /**
     * The internal name of the property group (unique, immutable)
     * @example "custom_info"
     */
    name: string;
    /**
     * The display label of the property group (can be updated)
     * @example "Custom Info"
     */
    label: string;
    /**
     * Order of appearance for the group in the HubSpot UI
     * @example 2
     */
    displayOrder: number;
    /**
     * Whether the group is archived
     * @example false
     */
    archived: boolean;
}
export interface HSUpdateResultDto {
    label: string;
    value: string;
    isUpdated: boolean;
    description: string;
    errorMessage?: string;
}
export interface HSFetchedPropertiesDto {
    label: string;
    value: string;
    dataType: string;
    fieldType: string;
    numberOfOptions: number;
    description?: string;
}
export interface HSPropertyUsageResponseDto {
    propertyName: string;
    usageCount: number;
    hasUsages: boolean;
}
export interface PlatformPropertyOptionsDto {
    hidden: boolean;
    displayOrder: number;
    description: string;
    label: string;
    value: string;
    usageCount?: number;
}
export interface ExportObjectRequestDto {
    /**
     * Whether to export only custom properties (hubspotDefined = false)
     * @example true
     */
    customPropertiesOnly: boolean;
}
export interface GetConnectionCustomPropertiesRequestDto {
    /** @example "DEV" */
    sourceEnvironmentMode: ExecutionEnvironmentModeEnum;
    /**
     * Source connection UUID
     * @example "12345678-1234-1234-1234-123456789012"
     */
    sourceConnectionUuid: string;
    /**
     * Source object ID
     * @example "contact"
     */
    sourceObjectId: string;
    /** @example "PROD" */
    targetEnvironmentMode: ExecutionEnvironmentModeEnum;
    /**
     * Target connection UUID
     * @example "87654321-4321-4321-4321-210987654321"
     */
    targetConnectionUuid: string;
    /**
     * Target object ID
     * @example "contact"
     */
    targetObjectId: string;
    /**
     * Array of property names to import
     * @example ["custom_property_1","custom_property_2"]
     */
    properties: string[];
}
export interface ExecutionKey {
    uuid: string;
    tenantId: string;
    name: string;
    value: string;
    isDeleted: boolean;
}
export interface CreateQueueDto {
    tenantId: string;
    name: string;
    description: string;
    /**
     * @format int32
     * @default 0
     */
    rateLimit?: number;
    /** @default false */
    isRunning?: boolean;
    /**
     * @format int32
     * @default 0
     */
    count?: number;
    /**
     * @format int32
     * @default 100
     */
    alertThreshold?: number;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface Queue {
    tenantId: string;
    uuid: string;
    name: string;
    description: string;
    /** @format int32 */
    rateLimit: number;
    isRunning: boolean;
    /** @format int32 */
    count: number;
    /** @format int32 */
    alertThreshold: number;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface QueueSizeResponseDto {
    /**
     * Number of jobs waiting in the queue
     * @format int32
     */
    waiting: number;
    /**
     * Number of paused jobs in the queue
     * @format int32
     */
    paused: number;
    /**
     * Number of active jobs currently being processed
     * @format int32
     */
    active: number;
    /**
     * Overflow table size
     * @format int32
     */
    overflowSize: number;
    /**
     * Number of completed jobs
     * @format int32
     */
    completed: number;
    /**
     * Number of failed jobs
     * @format int32
     */
    failed: number;
    /**
     * Total number of jobs (paused + waiting)
     * @format int32
     */
    total: number;
    /**
     * Peak queue size reached
     * @format int32
     */
    peakSystemQueue: number;
    /**
     * Peak overflow reached
     * @format int32
     */
    peakOverflow: number;
    /**
     * Peak queue size reached
     * @format int32
     */
    peakQueueSize: number;
    uuid: string;
    name: string;
    description: string;
    alertThreshold: number;
    rateLimit: number;
}
export interface UpdateQueueDto {
    tenantId?: string;
    name?: string;
    description?: string;
    /**
     * @format int32
     * @default 0
     */
    rateLimit?: number;
    /**
     * @format int32
     * @default 100
     */
    alertThreshold?: number;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface CloneResponseDto {
    uuid: string;
}
export interface TaggedExportRequestDto {
    tags: string[];
}
export interface ExternalUrlDto {
    url: string;
}
export interface FetchFlowsResponseDto {
    uuid: string;
    isSubflow: boolean;
    name: string;
    listenerType: string;
    tags: string[];
    /** @format date-time */
    updatedAt: string;
}
export interface UpdateFlowDto {
    tenantId?: string;
    nodes?: object;
    edges?: object;
    viewport?: object;
    isValid?: boolean;
    name?: string;
    listenerType?: string;
    /** @format int32 */
    numBlocks?: number;
    tags?: string[];
    isCommander?: boolean;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface ValidateInterfaceDto {
    interfaceStr: string;
}
export interface CreateStructureDto {
    tenantId: string;
    name: string;
    description: string;
    value: string;
    tags: string[];
    /** @default false */
    isDeleted?: boolean | null;
}
export interface StructureDto {
    tenantId: string;
    uuid: string;
    name: string;
    description: string;
    value: string;
    tags: string[];
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface UpdateStructureDto {
    tenantId?: string;
    name?: string;
    description?: string;
    value?: string;
    tags?: string[];
    /** @default false */
    isDeleted?: boolean | null;
}
export interface QueueStatsInfo {
    name: string;
    size: number;
    peakQueueSize: number;
    overFlowSize: number;
    peakOverflowSize: number;
}
export interface LoadStats {
    totalTimeMs: number;
    overallMemoryUsagePercent: number;
    overallCpuLoad: number;
    nodeProcessCpuPercent: number;
    nodeHeapLimitBytes: number;
    nodeHeapUsedBytes: number;
}
export interface FinalStats {
    totalTimeMs: number;
    flowsPerSecond: number;
    aborted: boolean;
}
export interface LoadTestStats {
    status: string;
    countIndex: number;
    activeFlows: number;
    systemQueueSize: number;
    overflowSize: number;
    peakSystemQueueSize: number;
    peakOverflowSize: number;
    jsWorkerQueueSize: number;
    jsWorkerMaxQueueSize: number;
    percentCompletePC: number;
    totalCalls: number;
    loadStats: LoadStats;
    queueStats: QueueStatsInfo[];
    finalStats: FinalStats;
}
export interface CheckSystemQueueResponseDto {
    result: boolean;
}
export interface RunningFlowDto {
    /** Instance ID */
    instanceId: string;
    /** Unique execution ID */
    executionId: string;
    /** Flow UUID */
    flowUuid: string;
    /** Flow name */
    flowName: string;
    /** User name */
    userName: string;
    /** Timestamp */
    timestamp?: number;
    /** Active block UUID */
    activeBlockUuid?: string;
}
export interface ExecutionStatusResponseDto {
    executionId: string;
    terminationStatus: string;
    ms: number;
    executionEnvironmentMode: string;
    /** @format date-time */
    createdAt: string;
    flowUuid: string;
    flowName: string;
}
export interface FlowCountsResponseDto {
    flowUuid: string;
    count: number;
}
export interface OverflowRunningFlowDto {
    /** Number of overflow flows */
    count: number;
}
export interface RunningFlowsResponseDto {
    /** List of running flows */
    flows: RunningFlowDto[];
    /** Overflow information */
    overflow: OverflowRunningFlowDto;
}
export interface DashboardFilter {
    executionEnvironmentMode: ExecutionEnvironmentModeEnum | null;
    flowUuid: string | null;
    terminationStatus: string | null;
    /** @format date-time */
    fromDate: string | null;
    /** @format date-time */
    toDate: string | null;
    lastNMinutes: number | null;
    namedSaves: boolean;
    subflows: boolean;
    queue: boolean | null;
    tags: string[] | null;
}
export interface HistoryCountsResponseDto {
    success: number;
    dev: number;
    prod: number;
    queue: number;
    notQueue: number;
    timedOut: number;
    errored: number;
    minMs: number;
    maxMs: number;
    avgMs: number;
    count: number;
}
export interface ExecuteFlowDto {
    executionEnvironmentMode?: ExecutionEnvironmentModeEnum;
    flowUuid: string;
    flowName?: string;
    doNotQueue?: boolean;
    data?: object;
    externalId?: string | null;
    executionId?: string;
    socketId?: string | null;
    isDebug?: boolean;
    isStep?: boolean;
    isSubflow?: boolean;
    showSubflowProgress?: boolean;
    pauseAtBlockId?: string;
    isTest?: boolean;
    isFromSystemQueue?: boolean;
    isFromQueue?: boolean;
    jwtToken?: string;
    provider?: string;
    userId?: string;
    tenantId?: string;
    executionKey?: string;
    timestamp?: number;
    jobGroup?: string;
    instanceId?: string;
}
export interface TestExecutionResultDto {
    status: string;
    executionHistoryUuid?: string;
}
export interface RegisterPluginDto {
    /**
     * Plugin type (npm package or local file)
     * @example "local"
     */
    type: RegisterPluginDtoType;
    /**
     * Package name (for npm) or file path (for local)
     * @example "plugins/my-custom-plugin/index.js"
     */
    source: string;
    /**
     * Optional plugin configuration
     * @example {"apiKey":"secret","endpoint":"https://api.example.com"}
     */
    config?: object;
}
export interface PluginRegistry {
    uuid: string;
    name: string;
    version: string;
    type: PluginRegistryType;
    source: string;
    enabled: boolean;
    config: object;
    metadata: object;
    clientBundlePath: string | null;
    tenantId: string;
    /** @format date-time */
    installedAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean;
    blocks?: PluginBlock[];
}
export interface PluginBlock {
    uuid: string;
    pluginUuid: string;
    blockType: string;
    blockName: string;
    blockGroup: string;
    metadata: object;
    tenantId: string;
    /** @format date-time */
    createdAt: string;
    plugin?: PluginRegistry;
}
export interface RegistryStatsDto {
    /**
     * Total number of registered server blocks
     * @example 42
     */
    totalServerBlocks: number;
    /**
     * Total number of registered client blocks
     * @example 35
     */
    totalClientBlocks: number;
    /**
     * Number of core blocks
     * @example 30
     */
    coreBlocks: number;
    /**
     * Number of plugin blocks
     * @example 12
     */
    pluginBlocks: number;
}
export interface BlockTypesDto {
    /**
     * List of registered server block types
     * @example ["LOGGER","HTTP_REQUEST","CONDITION"]
     */
    server: string[];
    /**
     * List of registered client block types
     * @example ["LOGGER","HTTP_REQUEST","CONDITION"]
     */
    client: string[];
}
export interface CheckBlockExistenceDto {
    /**
     * Block type identifier to check for existence
     * @example "MY_CUSTOM_BLOCK_V1"
     */
    blockType: string;
}
export interface BlockConflictDto {
    /**
     * The block type that conflicts
     * @example "MY_CUSTOM_BLOCK_V1"
     */
    blockType: string;
    /**
     * Source of the conflict (core or plugin)
     * @example "plugin"
     */
    conflictSource: BlockConflictDtoConflictSource;
    /**
     * Name of the plugin if conflict is from a plugin
     * @example "@mycompany/my-plugin"
     */
    pluginName?: string;
    /**
     * UUID of the plugin if conflict is from a plugin
     * @example "123e4567-e89b-12d3-a456-426614174000"
     */
    pluginUuid?: string;
}
export interface CheckBlockExistenceResponseDto {
    /**
     * Whether the block type already exists
     * @example true
     */
    exists: boolean;
    /** Array of conflicts if block exists */
    conflicts?: BlockConflictDto[];
}
export interface ClientBlockDefinitionDto {
    /** Block type identifier */
    blockType: string;
    /** Plugin UUID */
    pluginId: string;
    /** URL to client bundle */
    clientBundleUrl: string;
    /** Block definition properties */
    definition: object;
    /** Block metadata */
    metadata: object;
}
export interface UpdatePluginDto {
    /** Whether the plugin is enabled */
    enabled?: boolean;
    /** Plugin configuration */
    config?: object;
}
export declare enum StoreFindDtoMode {
    DATA = "DATA",
    MEMORY = "MEMORY"
}
export interface StoreFindDto {
    mode: StoreFindDtoMode;
    tenantId: string;
    flowUuid?: string;
    limit: number;
    offset: number;
    key?: string;
    nameSpace?: string;
    data?: string;
    isRowCount?: boolean;
    cursor?: number;
}
export type Buffer = object;
export interface Store {
    tenantId: string;
    uuid: string;
    name: string;
    key: string | null;
    data: object;
    blob: Buffer | null;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface StoreResponseWithPaginationDto {
    data: Store[];
    cursor?: number;
}
export interface StoreStatsDto {
    nameSpaces: number;
    total: number;
    deleted: number;
}
export interface NameSpaceCountsDto {
    nameSpace: string;
    count: number;
}
export interface PlatformObjectRequestDto {
    environmentMode: ExecutionEnvironmentModeEnum;
    connectionUuid: string;
    database?: string;
    schema?: string;
    allObjects?: boolean;
}
export interface PlatformObjectDto {
    uuid: string;
    objectId: string;
    internalId: string;
    description: string;
    friendlyName: string;
    apiName: string;
    isCustom: boolean;
}
export interface PlatformDBNameDto {
    name: string;
}
export interface PlatformDBSchema {
    name: string;
}
export declare enum PlatformPropertyTypeEnum {
    Text = "text",
    Select = "select",
    MultiSelect = "multiSelect",
    Number = "number",
    BooleanString = "booleanString",
    DateISO = "dateISO",
    DateTimeMS = "dateTimeMS",
    DateOnly = "dateOnly",
    Custom = "custom",
    TextArea = "textArea",
    PhoneNumber = "phoneNumber",
    Email = "email",
    File = "file",
    Unknown = "unknown"
}
export declare enum PlatformPropertyDataType {
    String = "string",
    Number = "number",
    Boolean = "boolean"
}
export interface PlatformObjectPropertyDto {
    platformType: PlatformPropertyTypeEnum;
    dataType: PlatformPropertyDataType;
    options: PlatformPropertyOptionsDto[];
    uuid: string;
    createdAt: number;
    updatedAt: number;
    updatedById: string;
    updatedByName: string;
    groupName: string;
    internalId: string;
    displayName: string;
    originalType?: string;
    originalFieldType?: string;
    platformSpecificName: string;
    description: string;
    referenceTo?: string[];
    customProperty?: boolean;
    uniqueValue: boolean;
    hidden: boolean;
    readOnly: boolean;
    readOnlyDefinition: boolean;
    archivable: boolean;
    calculated: boolean;
    extraData: object;
}
export interface PlatformAssociationTypeDto {
    id: string;
    label: string;
    category: string;
    isReversed: boolean;
}
export interface ManyToManyDto {
    isManyToMany: boolean;
    fieldNames: string[];
    fieldLabels: string[];
}
export type TimelineEventTemplate = object;
export interface ElasticAddPromptRequestDto {
    prompt: string;
}
export interface ElasticAddPromptResponseDto {
    responseContent: object;
    responseFull: object;
}
export interface AIPromptResponseDTO {
    responseContent: object;
    responseFull: object;
    prompt?: string;
}
export interface ElasticIndicesResponseDto {
    name: string;
}
export interface OpenAIZodifyRequestDto {
    mode: string;
    object: object;
}
export interface OpenAIResponse {
    result: string;
}
export interface OpenAIMappifyRequestDto {
    source: string[];
    target: string[];
}
export interface OpenAIJavascriptAssistantRequestDto {
    incomingEdges: object[];
    prompt: string;
    code: string;
    backedUpCode: string;
}
export interface OpenAIEdgeDataAssistantRequestDto {
    incomingData: object[];
    prompt: string;
    code: string;
}
export interface CreateAICollectionRequestDto {
    connectionUuid: string;
    name: string;
    payload: object[];
    hnswConfig: object;
    optimizerConfig: object;
}
export interface AIPromptRequestDto {
    modelConnectionUuid: string;
    model: string;
    query: string;
    temperature: number;
    k: number;
    maxTokens: number;
    data?: object;
}
export type InsertPromptTokensRequestDTO = object;
export interface InsertPromptTokensResponseDTO {
    prompt: string;
}
export interface AIValidateJSONLogicRequestDto {
    jsonLogic: object;
    allowedFields: string[];
}
export interface AIValidateJSONLogicResponseDto {
    jsonLogic: object;
}
export interface AIAvailableModels {
    vendor: string;
    name: string;
    apiName: string;
    useForChat: boolean;
    useForEmbed: boolean;
    vectorSizes: number[];
}
export interface AICollectionInfoResponseVectorInfo {
    name: string;
    size: number;
    distance: string;
}
export interface AICollectionInfoResponsePayloadSchemaItem {
    name: string;
    type: string;
}
export interface AICollectionInfoResponseDto {
    status: string;
    numPoints: number;
    vectors: AICollectionInfoResponseVectorInfo[];
    payloadSchema: AICollectionInfoResponsePayloadSchemaItem[];
}
export interface MessagingMQTTAWS {
    endPoint: string;
    clientId: string;
    certificateEncrypt: string;
    privateKeyEncrypt: string;
    caEncrypt: string;
}
export interface MessagingTopicFlow {
    uuid: string;
    flowUuid: string;
    topic: string;
    description: string;
}
export interface CreateMessagingDto {
    name: string;
    type: CreateMessagingDtoType;
    config: object;
    connectionUuid: string;
    topicFlows: object;
    status: CreateMessagingDtoStatus;
    tenantId: string;
}
export interface Messaging {
    uuid: string;
    name: string;
    type: MessagingType;
    config: object;
    connectionUuid: string;
    topicFlows: object;
    status: MessagingStatus;
    tenantId: string;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean;
}
export interface UpdateMessagingDto {
    name?: string;
    type?: UpdateMessagingDtoType;
    config?: object;
    connectionUuid?: string;
    topicFlows?: object;
    status?: UpdateMessagingDtoStatus;
    tenantId?: string;
}
export interface CreateScheduleDto {
    tenantId: string;
    name: string;
    config: string;
    isPaused: boolean;
    /** @default "DEV" */
    executionMode?: string | null;
    flowUuid?: string | null;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface ScheduleDto {
    tenantId: string;
    uuid: string;
    name: string;
    config: string;
    isPaused: boolean;
    executionMode: string | null;
    /** @format int32 */
    numExecutions: number;
    flowUuid: string | null;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface UpdateScheduleDto {
    tenantId?: string;
    name?: string;
    config?: string;
    isPaused?: boolean;
    /** @default "DEV" */
    executionMode?: string | null;
    flowUuid?: string | null;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface CreateTestDto {
    tenantId: string;
    name: string;
    description: string;
    items: object;
    /** @format int32 */
    index: number;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface TestDto {
    tenantId: string;
    uuid: string;
    name: string;
    description: string;
    items: object;
    /** @format int32 */
    index: number;
    isRunning: boolean;
    lastRunOk: boolean;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface TestsOrderDto {
    uuid: string;
    index: number;
}
export interface TestsOrderPayload {
    pairs: TestsOrderDto[];
}
export interface Test {
    tenantId: string;
    uuid: string;
    name: string;
    description: string;
    items: object;
    /** @format int32 */
    index: number;
    isRunning: boolean;
    lastRunOk: boolean;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface UpdateTestDto {
    tenantId?: string;
    name?: string;
    description?: string;
    items?: object;
    /** @format int32 */
    index?: number;
    /** @default false */
    isDeleted?: boolean | null;
}
export interface CreateTenantRequestDto {
    company: string;
    flagSecure: boolean;
    flagPartner: boolean;
    flagIntegrations: boolean;
    flagMigrations: boolean;
    flagDataPrep: boolean;
    flagOther: boolean;
    otherText: string;
}
export interface CreateTenantResponseDto {
    success: boolean;
    subDomainInvalid?: boolean;
    subDomainTaken?: boolean;
}
export interface Tenant {
    uuid: string;
    tenantId: string;
    primaryEmail: string;
    company: string;
    www: string;
    flagSecure: boolean;
    flagPartner: boolean;
    flagIntegrations: boolean;
    flagMigrations: boolean;
    flagDataPrep: boolean;
    flagOther: boolean;
    otherText: string | null;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt: string | null;
    isDeleted: boolean | null;
}
export interface DocumentorResponseDto {
    summary: string;
    details: string[];
    response: object;
    success: boolean;
}
export declare enum BlockTypeSpecialEnum {
    RECEIVER = "RECEIVER",
    TERMINATOR = "TERMINATOR"
}
export declare enum ObjectTypesWithTagsEnum {
    Flow = "Flow",
    Secret = "Secret",
    Structure = "Structure"
}
export declare enum StyleTypeEnum {
    STANDARD = "STANDARD"
}
export declare enum IFlowExecutionStatusEnum {
    IDLE = "IDLE",
    RUNNING = "RUNNING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
export declare enum IFlowSocketMessageEnum {
    ActiveBlock = "ActiveBlock",
    EdgeData = "EdgeData",
    NodeExecutionTime = "NodeExecutionTime",
    ConsoleMsg = "ConsoleMsg",
    LogMsg = "LogMsg",
    DebugStopped = "DebugStopped",
    DebugStarted = "DebugStarted",
    DBRestoreProgress = "DBRestoreProgress",
    FlowProgress = "FlowProgress",
    BatchEndData = "BatchEndData",
    SocketTerminate = "SocketTerminate",
    LoadTestProgress = "LoadTestProgress"
}
export declare enum IFlowLogLevelEnum {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARNING = "WARNING",
    FATAL = "FATAL",
    ALL = "ALL",
    TERMINATION = "TERMINATION"
}
export declare enum IFlowExecutionHistoryLevelEnum {
    USE_DEFAULT = "USE_DEFAULT",
    TIME_LIMITED_ERRORED_WITH_DATA = "TIME_LIMITED_ERRORED_WITH_DATA",
    TIME_LIMITED_ALL_WITH_DATA = "TIME_LIMITED_ALL_WITH_DATA",
    ERRORED_WITH_DATA = "ERRORED_WITH_DATA",
    ERRORED_NO_DATA = "ERRORED_NO_DATA",
    ALL = "ALL"
}
export declare enum IFLowExecutionHistoryActionEnum {
    SYSTEMDEFAULT = "SYSTEM DEFAULT",
    DONOTLOG = "DO NOT LOG",
    LOGWITHDATAFORRETENTIONPERIOD = "LOG WITH DATA FOR RETENTION PERIOD",
    LOGWITHOUTDATAFORRETENTIONPERIOD = "LOG WITHOUT DATA FOR RETENTION PERIOD"
}
export declare enum TerminationStatusEnum {
    SUCCESS = "SUCCESS",
    FATAL = "FATAL",
    TIMEDOUT = "TIMED OUT",
    KILLED = "KILLED"
}
export declare enum IFlowDebugEnum {
    None = "None",
    Step = "Step",
    Run = "Run",
    Stop = "Stop",
    Pause = "Pause",
    Restart = "Restart",
    Kill = "Kill"
}
export declare enum IFlowListenerTypeEnum {
    REST = "REST"
}
export declare enum AIModelTypeEnum {
    CHAT = "CHAT",
    Embed = "Embed"
}
export declare enum BlockGroupEnum {
    Core = "Core",
    Utility = "Utility",
    Collection = "Collection"
}
export declare enum SystemKeys {
    DefaultTimeout = "DefaultTimeout",
    DefaultExecutionLogLevel = "DefaultExecutionLogLevel",
    DefaultExecutionLogRetentionTime = "DefaultExecutionLogRetentionTime",
    AutoVacuumCronString = "AutoVacuumCronString",
    AutoBackupCronString = "AutoBackupCronString",
    IPWhitelist = "IPWhitelist",
    AllowExternalExecutionWithToken = "AllowExternalExecutionWithToken",
    FlowTags = "FlowTags",
    SecretTags = "SecretTags",
    StructureTags = "StructureTags",
    AlertSettings = "AlertSettings",
    SysLogSettings = "SysLogSettings",
    SlackSettings = "SlackSettings",
    LoadTestSettings = "LoadTestSettings",
    RemoteBackup = "RemoteBackup",
    MaxConcurrentFlows = "MaxConcurrentFlows",
    MaxSystemQueueSize = "MaxSystemQueueSize",
    JSWorkerPoolSize = "JSWorkerPoolSize",
    JSWorkerPoolHeapSize = "JSWorkerPoolHeapSize"
}
export declare enum AuthRoleEnum {
    REQUESTED = "REQUESTED",
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    VIEWER = "VIEWER",
    MONITOR = "MONITOR"
}
export declare enum TestRunResultEnum {
    INACTIVE = "INACTIVE",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
export declare enum TestExecutionStatusEnum {
    PASSIVE = "PASSIVE",
    RUNNING = "RUNNING",
    SUCCEEDED = "SUCCEEDED",
    TIMEOUT = "TIMEOUT",
    FATAL = "FATAL",
    KILLED = "KILLED"
}
export declare enum AlertLevelEnum {
    ALERT = "ALERT",
    WARNING = "WARNING",
    IMMEDIATE = "IMMEDIATE"
}
export declare enum AlertTypeEnum {
    USER = "USER",
    MEMORY = "MEMORY",
    SWAP = "SWAP",
    CPU = "CPU",
    QUEUE = "QUEUE",
    EXECUTION_FATAL = "EXECUTION_FATAL",
    EXECUTION_TIMEOUT = "EXECUTION_TIMEOUT",
    SYSTEM = "SYSTEM"
}
export declare enum ImportDuplicatesEnum {
    LEAVE = "LEAVE",
    OVERWRITE = "OVERWRITE",
    RENAME = "RENAME"
}
export declare enum MessagingTypeEnum {
    MQTTAWS = "MQTT AWS",
    MQTTGeneric = "MQTT Generic",
    RedisPubSub = "Redis Pub Sub",
    RedisEventStream = "Redis Event Stream",
    SMTP = "SMTP",
    IMAP = "IMAP"
}
export declare enum MessagingStatusEnum {
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    SUSPENDED = "SUSPENDED"
}
export interface EnumManifest {
    ExecutionEnvironmentModeEnum: ExecutionEnvironmentModeEnum;
    BlockTypeSpecialEnum: BlockTypeSpecialEnum;
    IFlowNodeType: string;
    ObjectTypesWithTagsEnum: ObjectTypesWithTagsEnum;
    StyleTypeEnum: StyleTypeEnum;
    IFlowExecutionStatusEnum: IFlowExecutionStatusEnum;
    IFlowSocketMessageEnum: IFlowSocketMessageEnum;
    IFlowLogLevelEnum: IFlowLogLevelEnum;
    IFlowExecutionHistoryLevelEnum: IFlowExecutionHistoryLevelEnum;
    IFLowExecutionHistoryActionEnum: IFLowExecutionHistoryActionEnum;
    TerminationStatusEnum: TerminationStatusEnum;
    IFlowDebugEnum: IFlowDebugEnum;
    IFlowListenerTypeEnum: IFlowListenerTypeEnum;
    ConnectionTypeEnum: ConnectionTypeEnum;
    AIModelTypeEnum: AIModelTypeEnum;
    BlockGroupEnum: BlockGroupEnum;
    SystemKeys: SystemKeys;
    AuthRoleEnum: AuthRoleEnum;
    TestRunResultEnum: TestRunResultEnum;
    TestExecutionStatusEnum: TestExecutionStatusEnum;
    LogLevelEnum: AlertLevelEnum;
    LogTypeEnum: AlertTypeEnum;
    ImportDuplicatesEnum: ImportDuplicatesEnum;
    MessagingTypeEnum: MessagingTypeEnum;
    MessagingStatusEnum: MessagingStatusEnum;
}
export interface UILogMsg {
    timestamp: number;
    level: IFlowLogLevelEnum;
    msg: string;
    terminationStatus: TerminationStatusEnum;
    extraData?: object;
}
export interface IFlowBlockPosition {
    x: number;
    y: number;
}
export interface IFlowBlockData {
    type: string;
    special?: BlockTypeSpecialEnum;
    name: string;
    friendlyName?: string;
    version?: number;
    help?: string;
    helpFile?: string;
    isValid: boolean;
    collapse?: boolean;
    group: BlockGroupEnum;
    styleType: StyleTypeEnum;
    numInputs: number;
    numOutputs: number;
    hasInternalOutputHandles: boolean;
    hasInternalInputHandles: boolean;
    headerColor?: string;
    config: Record<string, any> | string;
    isActive?: boolean;
    executionTime?: number;
    extraData?: object;
    waitingForAllEdgeData?: boolean;
    queueUuid?: string;
    _componentVersion?: number;
}
export interface IFlowBlock {
    id: string;
    type: string;
    width: number;
    height: number;
    position: IFlowBlockPosition;
    selected?: boolean;
    data: IFlowBlockData;
}
export interface IFlowModel {
    uuid: string;
    queueUuid: string;
    name: string;
    info: string;
    tags: object[];
    isSubflow: boolean;
    isCommander: boolean;
    isLocked: boolean;
    timeout: number;
    nodes: IFlowBlock[];
    edges: object[];
    viewport: object;
    listenerType: IFlowListenerTypeEnum;
    executionHistoryLevel: IFlowExecutionHistoryLevelEnum;
    numBlocks: number;
    isValid: boolean;
    executionStatus: IFlowExecutionStatusEnum;
    numExecutions?: number;
    createdAt?: object;
    updatedAt?: object;
}
export interface TestFlowItem {
    flowUuid: string;
    index: number;
    timestamp?: number;
    result?: TestRunResultEnum;
    isRunning?: boolean;
    executionHistoryUuid?: string;
}
export interface IFlowEdgeData {
    payload: object | null;
    payloadInput: object | null;
    validate?: boolean;
    validationHardCoded?: boolean;
    strictValidation?: boolean;
    stripFailedValidation?: boolean;
    failedValidationNamespace?: string;
    mapData?: boolean;
    failedValidation: object[] | null;
    failedMappingValidation: object[] | null;
    transformData?: boolean;
    transformer: string;
    inputStructureUuid?: string | null;
    outputStructureUuid?: string | null;
    literalStructure?: string;
    isInputArray?: boolean;
    edgeDataErrorMsg?: string | null;
    mapping?: Record<string, string>;
    batchSize?: number;
    batchOriginatorUuid?: string | null;
    inputValidationErrorMessage?: string;
    outputValidationErrorMessage?: string;
    batchItems?: string[];
    aiPrompt?: string;
    aiJavascript?: string;
}
export interface AlertSettings {
    smtpHost: string;
    smtpPort: number;
    smtpUserName: string;
    smtpPassword: string;
    smtpSecureTLS: boolean;
    smtpTestEmail: string;
    purgeDays: number;
    resourcesEnabled: boolean;
    resourcesFrequency: number;
    resourcesMemThreshold: number;
    resourcesCPUThreshold: number;
    resourcesDiskThreshold: number;
    erroredEnabled: boolean;
    erroredFrequency: number;
    queueEnabled: boolean;
    queueFrequency: number;
}
export interface LoadTestSettings {
    flowUuid: string;
    executionKeyUuid: string;
    totalCalls: number;
    pauseBetweenCalls: number;
    resetPeaks: boolean;
}
export interface HSExtendedPropertiesDto {
    platformType: PlatformPropertyTypeEnum;
    dataType: PlatformPropertyDataType;
    options: PlatformPropertyOptionsDto[];
    /**
     * Comments for the property
     * @example "This property is used for..."
     */
    comments: string;
    /**
     * Whether the property is approved
     * @example true
     */
    approved: boolean;
    /**
     * Whether the property has been modified (dirty)
     * @example false
     */
    dirty: boolean;
    /**
     * Whether the property should be saved
     * @example true
     */
    shouldSave: boolean;
    /**
     * Whether there is a difference in the property
     * @example false
     */
    difference: boolean;
    /**
     * Whether the property is marked for deletion
     * @example false
     */
    isDeleted: boolean;
    /**
     * Whether the property represents a percentage value
     * @example false
     */
    isPercent: boolean;
    /**
     * Whether the property represents a currency value
     * @example false
     */
    isCurrency: boolean;
    uuid: string;
    createdAt: number;
    updatedAt: number;
    updatedById: string;
    updatedByName: string;
    groupName: string;
    internalId: string;
    displayName: string;
    originalType?: string;
    originalFieldType?: string;
    platformSpecificName: string;
    description: string;
    referenceTo?: string[];
    customProperty?: boolean;
    uniqueValue: boolean;
    hidden: boolean;
    readOnly: boolean;
    readOnlyDefinition: boolean;
    archivable: boolean;
    calculated: boolean;
    extraData: object;
}
export interface MessagingMQTTGeneric {
    brokerUrl: string;
    port: number;
    clientId: string;
    usernameEncrypt: string;
    passwordEncrypt: string;
    tlsEnabled: boolean;
    caCertEncrypt: string;
    clientCertEncrypt: string;
    clientKeyEncrypt: string;
}
export interface InterfacesManifest {
    UILogMsg: UILogMsg;
    IFlowModel: IFlowModel;
    TestFlowItem: TestFlowItem;
    IFlowEdgeData: IFlowEdgeData;
    IFlowBlock: IFlowBlock;
    IFlowBlockPosition: IFlowBlockPosition;
    IFlowBlockData: IFlowBlockData;
    AlertSettings: AlertSettings;
    LoadTestSettings: LoadTestSettings;
    HSExtendedPropertiesDto: HSExtendedPropertiesDto;
    MessagingTopicFlow: MessagingTopicFlow;
    MessagingMQTT_AWS: MessagingMQTTAWS;
    MessagingMQTT_Generic: MessagingMQTTGeneric;
}
export declare enum HistoryTerminationStatus {
    SUCCESS = "SUCCESS",
    FATAL = "FATAL",
    TIMEDOUT = "TIMED OUT",
    KILLED = "KILLED"
}
export declare enum HistoryExecutionEnvironmentMode {
    DEV = "DEV",
    PROD = "PROD"
}
export declare enum FlowExecutionHistoryLevel {
    USE_DEFAULT = "USE_DEFAULT",
    TIME_LIMITED_ERRORED_WITH_DATA = "TIME_LIMITED_ERRORED_WITH_DATA",
    TIME_LIMITED_ALL_WITH_DATA = "TIME_LIMITED_ALL_WITH_DATA",
    ERRORED_WITH_DATA = "ERRORED_WITH_DATA",
    ERRORED_NO_DATA = "ERRORED_NO_DATA",
    ALL = "ALL"
}
export declare enum CreateAlertDtoLevel {
    ALERT = "ALERT",
    WARNING = "WARNING",
    IMMEDIATE = "IMMEDIATE"
}
export declare enum AlertLevel {
    ALERT = "ALERT",
    WARNING = "WARNING",
    IMMEDIATE = "IMMEDIATE"
}
/**
 * Status of the local backup operation
 * @example "success"
 */
export declare enum BackupResponseDtoLocalBackupStatus {
    Success = "success",
    Failed = "failed"
}
/**
 * Status of the remote backup copy operation (S3 or Azure)
 * @example "success"
 */
export declare enum BackupResponseDtoRemoteBackupStatus {
    Success = "success",
    Failed = "failed",
    NotConfigured = "not_configured"
}
/**
 * Plugin type (npm package or local file)
 * @example "local"
 */
export declare enum RegisterPluginDtoType {
    Npm = "npm",
    Local = "local"
}
export declare enum PluginRegistryType {
    Npm = "npm",
    Local = "local"
}
/**
 * Source of the conflict (core or plugin)
 * @example "plugin"
 */
export declare enum BlockConflictDtoConflictSource {
    Core = "core",
    Plugin = "plugin"
}
export declare enum CreateMessagingDtoType {
    MQTTAWS = "MQTT AWS",
    MQTTGeneric = "MQTT Generic",
    RedisPubSub = "Redis Pub Sub",
    RedisEventStream = "Redis Event Stream",
    SMTP = "SMTP",
    IMAP = "IMAP"
}
export declare enum CreateMessagingDtoStatus {
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    SUSPENDED = "SUSPENDED"
}
export declare enum MessagingType {
    MQTTAWS = "MQTT AWS",
    MQTTGeneric = "MQTT Generic",
    RedisPubSub = "Redis Pub Sub",
    RedisEventStream = "Redis Event Stream",
    SMTP = "SMTP",
    IMAP = "IMAP"
}
export declare enum MessagingStatus {
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    SUSPENDED = "SUSPENDED"
}
export declare enum UpdateMessagingDtoType {
    MQTTAWS = "MQTT AWS",
    MQTTGeneric = "MQTT Generic",
    RedisPubSub = "Redis Pub Sub",
    RedisEventStream = "Redis Event Stream",
    SMTP = "SMTP",
    IMAP = "IMAP"
}
export declare enum UpdateMessagingDtoStatus {
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    SUSPENDED = "SUSPENDED"
}
export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;
export interface FullRequestParams extends Omit<RequestInit, 'body'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected encodeQueryParam(key: string, value: any): string;
    protected addQueryParam(query: QueryParamsType, key: string): string;
    protected addArrayQueryParam(query: QueryParamsType, key: string): any;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams;
    protected createAbortSignal: (cancelToken: CancelToken) => AbortSignal | undefined;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title Migrate
 * @version 1.0.0
 * @contact
 *
 * Migrate API specification
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Health
     * @name AppControllerRender
     * @summary Serve up front-end application
     * @request GET:/
     */
    appControllerRender: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    health: {
        /**
         * No description
         *
         * @tags Health
         * @name AppControllerHealth
         * @summary Health Check
         * @request GET:/health
         */
        appControllerHealth: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
    };
    assets: {
        /**
         * No description
         *
         * @tags Health
         * @name AppControllerAssets
         * @summary Serve up front-end application
         * @request GET:/assets/{file}
         */
        appControllerAssets: (file: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    oauth: {
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthError
         * @summary oAuth error
         * @request GET:/oauth/error
         */
        oauthError: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthLogout
         * @summary logout
         * @request GET:/oauth/logout
         */
        oauthLogout: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthCallbackGithub
         * @summary Get authorisation code from server github
         * @request GET:/oauth/oauth-callback-github
         */
        oauthCallbackGithub: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthCallbackHubspot
         * @summary Get authorisation code from server hubspot
         * @request GET:/oauth/oauth-callback-hubspot
         */
        oauthCallbackHubspot: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthInstall
         * @summary Install an oAuth app.
         * @request GET:/oauth/install/{provider}
         */
        oauthInstall: (provider: string, params?: RequestParams) => Promise<HttpResponse<ConsentUrlResponseDto, any>>;
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthInstallWithConnectionUuid
         * @summary Install an oAuth app. If oauthConnectionUuid is provided, it is a special case connection-based oAuth login
         * @request GET:/oauth/install-connection/{provider}/{oauthConnectionUuid}/{environmentMode}
         */
        oauthInstallWithConnectionUuid: (provider: string, oauthConnectionUuid: string, environmentMode: string, params?: RequestParams) => Promise<HttpResponse<ConsentUrlResponseDto, any>>;
        /**
         * No description
         *
         * @tags oAuth
         * @name OauthRefreshToken
         * @summary Get access token and refresh if necessary
         * @request POST:/oauth/refresh-token
         */
        oauthRefreshToken: (params?: RequestParams) => Promise<HttpResponse<RefreshTokenResponseDto, any>>;
    };
    auth: {
        /**
         * No description
         *
         * @tags Health
         * @name SoloAuthControllerHealth
         * @summary Health Check
         * @request GET:/auth/health
         */
        soloAuthControllerHealth: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name SoloAuthControllerHealthPrivate
         * @summary Health Check Private Endpoint
         * @request GET:/auth/health-private
         */
        soloAuthControllerHealthPrivate: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name AuthLogin
         * @summary Login
         * @request POST:/auth/login
         */
        authLogin: (data: SoloAuthLogin, params?: RequestParams) => Promise<HttpResponse<LoginResponseDto, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name AuthRefreshToken
         * @summary Refresh access token
         * @request POST:/auth/refresh-token
         */
        authRefreshToken: (data: RefreshTokenRequestDTO, params?: RequestParams) => Promise<HttpResponse<RefreshTokenResponseDto, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name AuthUserAdd
         * @summary Add new user
         * @request POST:/auth/user-add/{email}/{role}
         */
        authUserAdd: (email: string, role: string, params?: RequestParams) => Promise<HttpResponse<AddUserResponseDto, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name UserChangePassword
         * @summary Change user password
         * @request PATCH:/auth/change-password/{uuid}
         */
        userChangePassword: (uuid: string, data: ChangePasswordDto, params?: RequestParams) => Promise<HttpResponse<ChangePasswordResponseDto, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name UserRole
         * @summary Set the role of a user
         * @request PATCH:/auth/user-role/{email}/{role}
         */
        userRole: (email: string, role: string, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name UserAlerts
         * @summary Set the alert status of a user
         * @request PATCH:/auth/user-alerts/{email}/{status}
         */
        userAlerts: (email: string, status: string, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name UserFetch
         * @summary Fetch list of Users
         * @request GET:/auth/users
         */
        userFetch: (params?: RequestParams) => Promise<HttpResponse<User[], any>>;
        /**
         * No description
         *
         * @tags Health
         * @name SoloAuthControllerCallback
         * @request GET:/auth/callback
         */
        soloAuthControllerCallback: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name AuthLogout
         * @summary Logout
         * @request GET:/auth/logout/{userId}
         */
        authLogout: (userId: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name SoloAuthControllerGetProfile
         * @request GET:/auth/profile
         */
        soloAuthControllerGetProfile: (params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name AuthUserDelete
         * @summary Delete user
         * @request DELETE:/auth/user-delete/{email}
         */
        authUserDelete: (email: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name AuthInitiatePasswordReset
         * @summary Initiate password reset process
         * @request POST:/auth/password-reset/initiate
         */
        authInitiatePasswordReset: (data: InitiatePasswordResetDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Health
         * @name AuthResetPassword
         * @summary Complete password reset with token
         * @request POST:/auth/password-reset/complete
         */
        authResetPassword: (data: ResetPasswordDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    memstore: {
        /**
         * No description
         *
         * @name MemStoreMethods
         * @summary Fetch Memory Store method
         * @request GET:/memstore/methods
         */
        memStoreMethods: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
    };
    connection: {
        /**
         * No description
         *
         * @name ConnectionCreate
         * @summary Create a new connection
         * @request POST:/connection
         */
        connectionCreate: (data: CreateConnectionDto, params?: RequestParams) => Promise<HttpResponse<ConnectionDto, any>>;
        /**
         * No description
         *
         * @name ConnectionFetch
         * @summary Fetch Connections
         * @request GET:/connection
         */
        connectionFetch: (query?: {
            type?: string;
            core?: string;
        }, params?: RequestParams) => Promise<HttpResponse<Connection[], any>>;
        /**
         * No description
         *
         * @name ConnectionTest
         * @summary Test a connection
         * @request POST:/connection/test/{mode}
         */
        connectionTest: (mode: string, data: Connection, params?: RequestParams) => Promise<HttpResponse<TestConnectionResponseDto, any>>;
        /**
         * No description
         *
         * @name ConnectionGetConnectionObjectsTemplates
         * @summary Get connection object templates
         * @request GET:/connection/connection-templates
         */
        connectionGetConnectionObjectsTemplates: (params?: RequestParams) => Promise<HttpResponse<ConnectionObjectTemplateDto[], any>>;
        /**
         * No description
         *
         * @name ConnectionFindOne
         * @summary Fetch a connection by its UUID
         * @request GET:/connection/{id}
         */
        connectionFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<ConnectionDto, any>>;
        /**
         * No description
         *
         * @name ConnectionSave
         * @summary Save connection
         * @request PUT:/connection/{id}
         */
        connectionSave: (id: string, data: UpdateConnectionDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ConnectionDelete
         * @summary Delete connection
         * @request DELETE:/connection/{id}
         */
        connectionDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    secret: {
        /**
         * No description
         *
         * @name SecretCreate
         * @summary Create a new Secret
         * @request POST:/secret
         */
        secretCreate: (data: CreateSecretDto, params?: RequestParams) => Promise<HttpResponse<Secret, any>>;
        /**
         * No description
         *
         * @name SecretFetch
         * @summary Fetch Secrets
         * @request GET:/secret
         */
        secretFetch: (params?: RequestParams) => Promise<HttpResponse<Secret[], any>>;
        /**
         * No description
         *
         * @name SecretGetObfuscatedByName
         * @summary Fetch a Secret's obfuscated value by its name
         * @request GET:/secret/get-obfuscated-by-name/{name}
         */
        secretGetObfuscatedByName: (name: string, params?: RequestParams) => Promise<HttpResponse<ObfuscatedSecretWithUUIDDto, any>>;
        /**
         * No description
         *
         * @name SecretFindOne
         * @summary Fetch a Secret by its UUID
         * @request GET:/secret/{id}
         */
        secretFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<Secret, any>>;
        /**
         * No description
         *
         * @name SecretSave
         * @summary Save Secret
         * @request PUT:/secret/{id}
         */
        secretSave: (id: string, data: UpdateSecretDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SecretDelete
         * @summary Delete Secret
         * @request DELETE:/secret/{id}
         */
        secretDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SecretUpdateSecretValue
         * @summary Update Secret value
         * @request PATCH:/secret/update-secret-value
         */
        secretUpdateSecretValue: (data: UpdateKeyRequestDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    variable: {
        /**
         * No description
         *
         * @name VariableCreate
         * @summary Create a new variable
         * @request POST:/variable
         */
        variableCreate: (data: CreateVariableDto, params?: RequestParams) => Promise<HttpResponse<VariableDto, any>>;
        /**
         * No description
         *
         * @name VariableFetch
         * @summary Fetch Variables
         * @request GET:/variable
         */
        variableFetch: (params?: RequestParams) => Promise<HttpResponse<Variable[], any>>;
        /**
         * No description
         *
         * @name VariableFindOne
         * @summary Fetch a variable by its UUID
         * @request GET:/variable/{id}
         */
        variableFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<VariableDto, any>>;
        /**
         * No description
         *
         * @name VariableSave
         * @summary Save variable
         * @request PUT:/variable/{id}
         */
        variableSave: (id: string, data: UpdateVariableDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name VariableDelete
         * @summary Delete variable
         * @request DELETE:/variable/{id}
         */
        variableDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    alert: {
        /**
         * No description
         *
         * @name AlertPurge
         * @summary Purges the alert log
         * @request POST:/alert/purge
         */
        alertPurge: (params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @name AlertAdd
         * @summary Add an alert log entry
         * @request POST:/alert
         */
        alertAdd: (data: CreateAlertDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name IfSmtpTest
         * @summary Test SMTP server with test email
         * @request POST:/alert/smtp-test
         */
        ifSmtpTest: (params?: RequestParams) => Promise<HttpResponse<boolean, any>>;
        /**
         * No description
         *
         * @name AlertRowCount
         * @summary Get alert log row count
         * @request GET:/alert/row-count
         */
        alertRowCount: (params?: RequestParams) => Promise<HttpResponse<number, any>>;
        /**
         * No description
         *
         * @name AlertFetch
         * @summary Fetch Alerts
         * @request GET:/alert/{take}/{skip}
         */
        alertFetch: (take: string, skip: string, params?: RequestParams) => Promise<HttpResponse<Alert[], any>>;
        /**
         * No description
         *
         * @name AlertFindOne
         * @summary Fetch an alert entry
         * @request GET:/alert/{id}
         */
        alertFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<Alert, any>>;
        /**
         * No description
         *
         * @name AlertDelete
         * @summary Delete Alert
         * @request DELETE:/alert/{id}
         */
        alertDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    system: {
        /**
         * No description
         *
         * @tags System
         * @name SystemBackupDb
         * @summary Backup database
         * @request POST:/system/backup-db
         */
        systemBackupDb: (params?: RequestParams) => Promise<HttpResponse<BackupResponseDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemTestRemoteBackup
         * @summary Test remote backup configuration
         * @request POST:/system/test-remote-backup
         */
        systemTestRemoteBackup: (params?: RequestParams) => Promise<HttpResponse<BackupResponseDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemTransferDb
         * @summary Transfer database
         * @request POST:/system/transfer-db
         */
        systemTransferDb: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemRestoreDb
         * @summary Restore transfer file
         * @request POST:/system/restore-db
         */
        systemRestoreDb: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemCheckHubspotPat
         * @summary Check Hubspot Private Access Token
         * @request POST:/system/check-hubspot-pat
         */
        systemCheckHubspotPat: (data: ObfuscatedSecretWithUUIDDto, params?: RequestParams) => Promise<HttpResponse<PatCheckResponseDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemUpdateWorkerPoolSize
         * @summary Update worker pool size
         * @request POST:/system/worker-pool-size/{key}/{value}
         */
        systemUpdateWorkerPoolSize: (key: string, value: string, params?: RequestParams) => Promise<HttpResponse<PoolSizeUpdateResponseDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemUpdateWorkerPoolHeapSize
         * @summary Update worker pool heap size
         * @request POST:/system/worker-pool-heap-size/{value}
         */
        systemUpdateWorkerPoolHeapSize: (value: string, params?: RequestParams) => Promise<HttpResponse<PoolSizeUpdateResponseDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemUpdateMaxConcurrentFlows
         * @summary Update max concurrent flows
         * @request POST:/system/max-concurrent-flows/{key}/{value}
         */
        systemUpdateMaxConcurrentFlows: (key: string, value: string, params?: RequestParams) => Promise<HttpResponse<SystemMonitorDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemUpdateMaxSystemQueueSize
         * @summary Update max system queue size
         * @request POST:/system/max-system-queue-size/{key}/{value}
         */
        systemUpdateMaxSystemQueueSize: (key: string, value: string, params?: RequestParams) => Promise<HttpResponse<SystemMonitorDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemExecuteLoadTest
         * @summary Execute load test
         * @request POST:/system/execute-load-test
         */
        systemExecuteLoadTest: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemAbortLoadTest
         * @summary Abort load test
         * @request POST:/system/abort-load-test
         */
        systemAbortLoadTest: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemResetSystemPeaks
         * @summary Reset system queue peaks
         * @request POST:/system/reset-system-peaks
         */
        systemResetSystemPeaks: (params?: RequestParams) => Promise<HttpResponse<{
            success?: boolean;
            message?: string;
        }, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemControllerError500
         * @request GET:/system/error500
         */
        systemControllerError500: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemDevopsTest
         * @summary Performs connection tests
         * @request GET:/system/devops-test
         */
        systemDevopsTest: (params?: RequestParams) => Promise<HttpResponse<DevopsTestDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetTenantInfo
         * @summary Gets tenant information
         * @request GET:/system/tenant-info
         */
        systemGetTenantInfo: (params?: RequestParams) => Promise<HttpResponse<TenantInfoDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetVerisonInfo
         * @summary Gets version information
         * @request GET:/system/version-info
         */
        systemGetVerisonInfo: (params?: RequestParams) => Promise<HttpResponse<VersionInfoDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetGoogleSheetMappings
         * @summary Retrieves Google Sheet data from a url
         * @request GET:/system/gsheet-mapping/{url}/{sheet}
         */
        systemGetGoogleSheetMappings: (url: string, sheet: string, params?: RequestParams) => Promise<HttpResponse<SheetMappingResponseDto[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetValue
         * @summary Gets one system value
         * @request GET:/system/value/{value}
         */
        systemGetValue: (value: string, params?: RequestParams) => Promise<HttpResponse<System, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchWrittenFiles
         * @summary Fetch files written by File block
         * @request GET:/system/written-files
         */
        systemFetchWrittenFiles: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchWrittenFile
         * @summary Fetch one written file stream
         * @request GET:/system/written-file/{filename}
         */
        systemFetchWrittenFile: (filename: string, params?: RequestParams) => Promise<HttpResponse<File, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemDownloadTransferFile
         * @summary Download the database transfer file
         * @request GET:/system/download-transfer
         */
        systemDownloadTransferFile: (params?: RequestParams) => Promise<HttpResponse<File, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemUploadTransferFile
         * @summary Upload and restore database transfer file
         * @request POST:/system/upload-transfer
         */
        systemUploadTransferFile: (data: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchSysLogFiles
         * @summary Fetch system log files names
         * @request GET:/system/syslog-files
         */
        systemFetchSysLogFiles: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchSysEventsFiles
         * @summary Fetch sys-events log files names
         * @request GET:/system/sys-events-files
         */
        systemFetchSysEventsFiles: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchWarnErrorFiles
         * @summary Fetch warn-error log files names
         * @request GET:/system/warn-error-files
         */
        systemFetchWarnErrorFiles: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchSysLogFile
         * @summary Fetch one system log file
         * @request GET:/system/syslog-file/{filename}
         */
        systemFetchSysLogFile: (filename: string, params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchSysEventsFile
         * @summary Fetch one sys-events log file
         * @request GET:/system/sys-events-file/{filename}
         */
        systemFetchSysEventsFile: (filename: string, params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchWarnErrorFile
         * @summary Fetch one warn-error log file
         * @request GET:/system/warn-error-file/{filename}
         */
        systemFetchWarnErrorFile: (filename: string, params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemFetchProgressMessages
         * @summary Fetch progress messages
         * @request GET:/system/progress
         */
        systemFetchProgressMessages: (params?: RequestParams) => Promise<HttpResponse<ProgressMessageDto[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetSystemMonitor
         * @summary Get system monitoring information
         * @request GET:/system/system-monitor
         */
        systemGetSystemMonitor: (params?: RequestParams) => Promise<HttpResponse<SystemMonitorDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetAliveInstances
         * @summary Get list of alive server instances
         * @request GET:/system/instances
         */
        systemGetAliveInstances: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetAllInstancesStats
         * @summary Get stats for all alive server instances
         * @request GET:/system/instances/stats
         */
        systemGetAllInstancesStats: (params?: RequestParams) => Promise<HttpResponse<AllInstancesStatsDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetInstanceStats
         * @summary Get stats for a specific server instance
         * @request GET:/system/instance/{instanceId}/stats
         */
        systemGetInstanceStats: (instanceId: string, params?: RequestParams) => Promise<HttpResponse<InstanceStatsDto, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemToggleStatsCollection
         * @summary Enable or disable continuous stats collection
         * @request POST:/system/instances/stats-collection
         */
        systemToggleStatsCollection: (data: ToggleStatsCollectionDto, params?: RequestParams) => Promise<HttpResponse<{
            enabled?: boolean;
            message?: string;
        }, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemGetValues
         * @summary Gets all system values
         * @request GET:/system
         */
        systemGetValues: (params?: RequestParams) => Promise<HttpResponse<System[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemSetHubspotPat
         * @summary Sets Hubspot Private Access Token
         * @request PUT:/system/set-hubspot-pat
         */
        systemSetHubspotPat: (data: ObfuscatedSecretWithUUIDDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemSetValue
         * @summary Update a system value
         * @request PUT:/system/{uuid}
         */
        systemSetValue: (uuid: string, data: UpdateSystemDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemAddTag
         * @summary Adds a tag to the list of values for the specified type, if not already there
         * @request PATCH:/system/add-tag/{type}/{value}
         */
        systemAddTag: (type: string, value: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemRemoveTag
         * @summary Removes a flow tag from the list of values, if it is not already in use
         * @request DELETE:/system/remove-tag/{type}/{uuid}/{value}
         */
        systemRemoveTag: (type: string, uuid: string, value: string, params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemDeleteSysLogFileContents
         * @summary Deletes contents of a log file
         * @request DELETE:/system/delete-log-contents/{filename}
         */
        systemDeleteSysLogFileContents: (filename: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemDeleteProgressHistory
         * @summary Deletes progress history
         * @request DELETE:/system/delete-progress
         */
        systemDeleteProgressHistory: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags System
         * @name SystemDeleteWrittenFile
         * @summary Deletes a ziggy stored file written by File block
         * @request DELETE:/system/delete-written-file/{filename}
         */
        systemDeleteWrittenFile: (filename: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    hubspot: {
        /**
         * @description Save or update HubSpot properties for a connection
         *
         * @name HubspotSaveProps
         * @summary Save HubSpot properties
         * @request POST:/hubspot/props/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotSaveProps: (connectionUuid: string, objectId: string, environmentMode: string, data: UpdateHSPropsDto, params?: RequestParams) => Promise<HttpResponse<UpdateHSPropsDto, any>>;
        /**
         * @description Load HubSpot properties by connection UUID and object ID
         *
         * @name HubspotLoadProps
         * @summary Load HubSpot properties
         * @request GET:/hubspot/props/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotLoadProps: (connectionUuid: string, objectId: string, environmentMode: string, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * @description Get all dirty HubSpot properties
         *
         * @name HubspotGetDirty
         * @summary Get dirty HubSpot properties
         * @request GET:/hubspot/dirty/{connectionUuid}/{environmentMode}
         */
        hubspotGetDirty: (connectionUuid: string, environmentMode: string, params?: RequestParams) => Promise<HttpResponse<DirtyHSPropsDto[], any>>;
        /**
         * @description Get HubSpot groups for a specific connection and object
         *
         * @name HubspotGetGroups
         * @summary Get HubSpot groups
         * @request GET:/hubspot/groups/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotGetGroups: (connectionUuid: string, objectId: string, environmentMode: string, params?: RequestParams) => Promise<HttpResponse<HubspotPropertyGroupDto[], any>>;
        /**
         * @description Create a new HubSpot group for a specific connection and object
         *
         * @name HubspotCreateGroup
         * @summary Create HubSpot group
         * @request POST:/hubspot/groups/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotCreateGroup: (connectionUuid: string, objectId: string, environmentMode: string, data: HubspotPropertyGroupDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * @description Update a HubSpot group for a specific connection and object
         *
         * @name HubspotUpdateGroup
         * @summary Update HubSpot group
         * @request PATCH:/hubspot/groups/{connectionUuid}/{objectId}/{environmentMode}
         */
        hubspotUpdateGroup: (connectionUuid: string, objectId: string, environmentMode: string, data: HubspotPropertyGroupDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * @description Delete a HubSpot group for a specific connection and object
         *
         * @name HubspotDeleteGroup
         * @summary Delete HubSpot group
         * @request DELETE:/hubspot/groups/{connectionUuid}/{objectId}/{environmentMode}/{groupInternalName}
         */
        hubspotDeleteGroup: (environmentMode: string, connectionUuid: string, objectId: string, groupInternalName: string, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * @description Update HubSpot properties for a specific connection and object
         *
         * @name HubspotUpdateProperties
         * @summary Update HubSpot properties
         * @request POST:/hubspot/update-properties/{connectionUuid}/{environmentMode}/{objectId}
         */
        hubspotUpdateProperties: (connectionUuid: string, environmentMode: string, objectId: string, params?: RequestParams) => Promise<HttpResponse<HSUpdateResultDto[], any>>;
        /**
         * @description Update a single HubSpot property by internal ID for a specific connection and object
         *
         * @name HubspotUpdateOneProperty
         * @summary Update one HubSpot property
         * @request POST:/hubspot/update-one-property/{connectionUuid}/{environmentMode}/{objectId}/{internalId}
         */
        hubspotUpdateOneProperty: (connectionUuid: string, environmentMode: string, objectId: string, internalId: string, params?: RequestParams) => Promise<HttpResponse<HSUpdateResultDto[], any>>;
        /**
         * @description Resync HubSpot properties for a specific connection and object
         *
         * @name HubspotResyncProperties
         * @summary Resync HubSpot properties
         * @request POST:/hubspot/resync/{connectionUuid}/{environmentMode}/{objectId}/{mode}
         */
        hubspotResyncProperties: (connectionUuid: string, environmentMode: string, objectId: string, mode: string, params?: RequestParams) => Promise<HttpResponse<HSFetchedPropertiesDto[], any>>;
        /**
         * @description Get property usages for a specific connection, object and property
         *
         * @name HubspotGetPropertyUsages
         * @summary Get property usages
         * @request GET:/hubspot/property-usages/{connectionUuid}/{environmentMode}/{objectId}/{internalId}
         */
        hubspotGetPropertyUsages: (connectionUuid: string, environmentMode: string, objectId: string, internalId: string, params?: RequestParams) => Promise<HttpResponse<HSPropertyUsageResponseDto, any>>;
        /**
         * @description Get options array for a specified HubSpot property
         *
         * @name HubspotGetOptions
         * @summary Get HubSpot property options
         * @request GET:/hubspot/options/{environmentMode}/{connectionUuid}/{objectId}/{propertyName}
         */
        hubspotGetOptions: (environmentMode: string, connectionUuid: string, objectId: string, propertyName: string, params?: RequestParams) => Promise<HttpResponse<PlatformPropertyOptionsDto[], any>>;
        /**
         * @description Export HubSpot object data to CSV file
         *
         * @name HubspotExportObject
         * @summary Export HubSpot object data
         * @request POST:/hubspot/export/{environmentMode}/{connectionUuid}/{objectId}
         */
        hubspotExportObject: (environmentMode: string, connectionUuid: string, objectId: string, data: ExportObjectRequestDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * @description Export HubSpot property options to CSV file
         *
         * @name HubspotExportOptions
         * @summary Export HubSpot property options
         * @request POST:/hubspot/export-options/{environmentMode}/{connectionUuid}/{objectId}/{propertyName}
         */
        hubspotExportOptions: (environmentMode: string, connectionUuid: string, objectId: string, propertyName: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * @description Copy custom properties from source connection to target connection
         *
         * @name HubspotGetConnectionCustomProperties
         * @summary Get connection custom properties
         * @request POST:/hubspot/connection-custom-properties
         */
        hubspotGetConnectionCustomProperties: (data: GetConnectionCustomPropertiesRequestDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    executionKeys: {
        /**
         * No description
         *
         * @tags execution-keys
         * @name ExecutionKeyFetchAll
         * @summary Fetch execution keys
         * @request POST:/execution-keys/fetch
         */
        executionKeyFetchAll: (params?: RequestParams) => Promise<HttpResponse<ExecutionKey[], any>>;
        /**
         * No description
         *
         * @tags execution-keys
         * @name ExecutionKeyGenerate
         * @summary Generate an execution key
         * @request POST:/execution-keys/generate
         */
        executionKeyGenerate: (params?: RequestParams) => Promise<HttpResponse<ExecutionKey, any>>;
        /**
         * No description
         *
         * @tags execution-keys
         * @name ExecutionKeyRename
         * @summary Rename an execution key
         * @request PATCH:/execution-keys/rename/{uuid}/{newName}
         */
        executionKeyRename: (uuid: string, newName: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags execution-keys
         * @name ExecutionKeyRevoke
         * @summary Revoke an execution key
         * @request DELETE:/execution-keys/revoke/{uuid}
         */
        executionKeyRevoke: (uuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    queue: {
        /**
         * No description
         *
         * @name QueuePause
         * @summary Pause Queue
         * @request POST:/queue/pause/{uuid}
         */
        queuePause: (uuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name QueueResume
         * @summary Resume Queue
         * @request POST:/queue/resume/{uuid}
         */
        queueResume: (uuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name QueueResetHighestReached
         * @summary Reset Highest Reached Value
         * @request POST:/queue/reset-highest-reached/{uuid}
         */
        queueResetHighestReached: (uuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name QueueCreate
         * @summary Create a new Queue
         * @request POST:/queue
         */
        queueCreate: (data: CreateQueueDto, params?: RequestParams) => Promise<HttpResponse<Queue, any>>;
        /**
         * No description
         *
         * @name QueueFetch
         * @summary Fetch Queue
         * @request GET:/queue
         */
        queueFetch: (params?: RequestParams) => Promise<HttpResponse<Queue[], any>>;
        /**
         * No description
         *
         * @name QueueGetCurrentQueueSizes
         * @summary Get current queue sizes for all queues
         * @request GET:/queue/sizes
         */
        queueGetCurrentQueueSizes: (params?: RequestParams) => Promise<HttpResponse<QueueSizeResponseDto[], any>>;
        /**
         * No description
         *
         * @name QueueGetCurrentQueueSize
         * @summary Get current queue size
         * @request GET:/queue/size/{uuid}
         */
        queueGetCurrentQueueSize: (uuid: string, params?: RequestParams) => Promise<HttpResponse<QueueSizeResponseDto, any>>;
        /**
         * No description
         *
         * @name QueueFindOne
         * @summary Fetch a Queue by its UUID
         * @request GET:/queue/{id}
         */
        queueFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<Queue, any>>;
        /**
         * No description
         *
         * @name QueueSave
         * @summary Save Queue
         * @request PUT:/queue/{id}
         */
        queueSave: (id: string, data: UpdateQueueDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name QueueDelete
         * @summary Delete Queue
         * @request DELETE:/queue/{id}
         */
        queueDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    flow: {
        /**
         * No description
         *
         * @name FlowClone
         * @summary Clone the specified Flow
         * @request POST:/flow/clone/{uuid}
         */
        flowClone: (uuid: string, params?: RequestParams) => Promise<HttpResponse<CloneResponseDto, any>>;
        /**
         * No description
         *
         * @name FlowCreate
         * @summary Create a new Flow with the specified receiver type and name
         * @request POST:/flow/{name}/{receiverType}
         */
        flowCreate: (name: string, receiverType: string, params?: RequestParams) => Promise<HttpResponse<Flow, any>>;
        /**
         * No description
         *
         * @name FlowExportTagged
         * @summary JSON export of tagged flows
         * @request POST:/flow/export-tagged
         */
        flowExportTagged: (data: TaggedExportRequestDto, params?: RequestParams) => Promise<HttpResponse<string, any>>;
        /**
         * No description
         *
         * @name FlowGetTaggedExport
         * @summary Get the generated tagged-export.json
         * @request GET:/flow/export-tagged
         */
        flowGetTaggedExport: (params?: RequestParams) => Promise<HttpResponse<File, any>>;
        /**
         * No description
         *
         * @name FlowImport
         * @summary Upload a file to import flows, connections and secrets (without secret values)
         * @request POST:/flow/import
         */
        flowImport: (data: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name FlowExternalExecutionUrl
         * @summary Get the external execution url
         * @request GET:/flow/external-execution-url/{uuid}
         */
        flowExternalExecutionUrl: (uuid: string, params?: RequestParams) => Promise<HttpResponse<ExternalUrlDto, any>>;
        /**
         * No description
         *
         * @name FlowExportAll
         * @summary JSON export of whole project
         * @request GET:/flow/export-all
         */
        flowExportAll: (params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @name FlowVacuum
         * @summary Removes deleted records and vacuums the database
         * @request GET:/flow/vacuum
         */
        flowVacuum: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name FlowGetRestResponse
         * @summary Get REST response for a specific block execution
         * @request GET:/flow/rest-response/{flowUuid}/{executionId}/{blockId}
         */
        flowGetRestResponse: (flowUuid: string, executionId: string, blockId: string, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @name FlowFindOne
         * @summary Fetch a Flow by its UUID
         * @request GET:/flow/{id}
         */
        flowFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<Flow, any>>;
        /**
         * No description
         *
         * @name FlowSave
         * @summary Save flow
         * @request PUT:/flow/{id}
         */
        flowSave: (id: string, data: UpdateFlowDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name FlowDelete
         * @summary Delete Flow
         * @request DELETE:/flow/{id}
         */
        flowDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name FlowFetch
         * @summary Fetch flows with optional search parameters
         * @request GET:/flow
         */
        flowFetch: (query: {
            search: string;
            flowId: string;
            tags: string;
        }, params?: RequestParams) => Promise<HttpResponse<FetchFlowsResponseDto[], any>>;
        /**
         * No description
         *
         * @name FlowDeleteTaggedExport
         * @summary Delete tagged flow export
         * @request DELETE:/flow/tagged-export
         */
        flowDeleteTaggedExport: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    structure: {
        /**
         * No description
         *
         * @name StructureValidateInterfaceSyntax
         * @summary Validate typescript Interface syntax
         * @request POST:/structure/validate-syntax-interface
         */
        structureValidateInterfaceSyntax: (data: ValidateInterfaceDto, params?: RequestParams) => Promise<HttpResponse<boolean, any>>;
        /**
         * No description
         *
         * @name StructureCreate
         * @summary Create a new Structure
         * @request POST:/structure
         */
        structureCreate: (data: CreateStructureDto, params?: RequestParams) => Promise<HttpResponse<Structure, any>>;
        /**
         * No description
         *
         * @name StructureFetch
         * @summary Fetch Structures
         * @request GET:/structure
         */
        structureFetch: (query: {
            tags: string;
        }, params?: RequestParams) => Promise<HttpResponse<Structure[], any>>;
        /**
         * No description
         *
         * @name StructureFindOne
         * @summary Fetch a Structure by its UUID
         * @request GET:/structure/{id}
         */
        structureFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<StructureDto, any>>;
        /**
         * No description
         *
         * @name StructureSave
         * @summary Save Structure
         * @request PUT:/structure/{id}
         */
        structureSave: (id: string, data: UpdateStructureDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name StructureDelete
         * @summary Delete Structure
         * @request DELETE:/structure/{id}
         */
        structureDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    ziggy: {
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueSystemQueueStatus
         * @summary Is job in system queue
         * @request GET:/ziggy/system-queue-status/{executionUuid}
         */
        queueSystemQueueStatus: (executionUuid: string, params?: RequestParams) => Promise<HttpResponse<CheckSystemQueueResponseDto, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueSystemQueueList
         * @summary get list of all items in system queue
         * @request GET:/ziggy/system-queue-list
         */
        queueSystemQueueList: (params?: RequestParams) => Promise<HttpResponse<RunningFlowDto, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueSystemQueueListInternal
         * @summary get list of all items in system queue : not to be used by executeExternal due to ExecutionGuard()
         * @request GET:/ziggy/system-queue-list-internal
         */
        queueSystemQueueListInternal: (params?: RequestParams) => Promise<HttpResponse<RunningFlowDto, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueSystemQueueSize
         * @summary Get current size of the system queue
         * @request GET:/ziggy/system-queue-size
         */
        queueSystemQueueSize: (params?: RequestParams) => Promise<HttpResponse<QueueSizeResponseDto[], any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryLoad
         * @summary Load a flow from History
         * @request GET:/ziggy/history-load/{uuid}
         */
        ifHistoryLoad: (uuid: string, params?: RequestParams) => Promise<HttpResponse<History, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfFetchNamedSaves
         * @summary Load named saves
         * @request GET:/ziggy/named-saves/{flowUuid}
         */
        ifFetchNamedSaves: (flowUuid: string, params?: RequestParams) => Promise<HttpResponse<History[], any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfExecutionStatus
         * @summary Get the execution status for the specified execution id
         * @request GET:/ziggy/execution-status/{executionUuid}
         */
        ifExecutionStatus: (executionUuid: string, params?: RequestParams) => Promise<HttpResponse<ExecutionStatusResponseDto[], any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFlowCounts
         * @summary Number of history items for each flow
         * @request GET:/ziggy/history-flow-counts
         */
        ifHistoryFlowCounts: (params?: RequestParams) => Promise<HttpResponse<FlowCountsResponseDto[], any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfGetRunningFlows
         * @summary Get a list of running flows
         * @request GET:/ziggy/get-running-flows
         */
        ifGetRunningFlows: (params?: RequestParams) => Promise<HttpResponse<RunningFlowsResponseDto, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfGetRunningFlow
         * @summary Get running flow info, if running
         * @request GET:/ziggy/get-running-flow/{executionUuid}
         */
        ifGetRunningFlow: (executionUuid: string, params?: RequestParams) => Promise<HttpResponse<RunningFlowDto[], any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHealthCheckRunningFlows
         * @summary Health check for stuck flows - returns diagnostics about potentially stuck jobs
         * @request GET:/ziggy/health-check-running-flows
         */
        ifHealthCheckRunningFlows: (params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFetchCount
         * @summary Fetch total # of history entries
         * @request POST:/ziggy/history-row-count
         */
        ifHistoryFetchCount: (data: DashboardFilter, params?: RequestParams) => Promise<HttpResponse<number, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryCounts
         * @summary Fetch History counts
         * @request POST:/ziggy/history-counts
         */
        ifHistoryCounts: (data: DashboardFilter, params?: RequestParams) => Promise<HttpResponse<HistoryCountsResponseDto, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFetch
         * @summary Fetch History entries
         * @request POST:/ziggy/history-fetch/{take}/{skip}
         */
        ifHistoryFetch: (take: number, skip: number, data: DashboardFilter, params?: RequestParams) => Promise<HttpResponse<History[], any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryNamedSave
         * @summary Add a named save
         * @request POST:/ziggy/history-named-save/{uuid}/{name}
         */
        ifHistoryNamedSave: (uuid: string, name: string, params?: RequestParams) => Promise<HttpResponse<string, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfExecuteInternal
         * @summary Execute an integration flow from the Ziggy editor
         * @request POST:/ziggy/execute-internal
         */
        ifExecuteInternal: (data: ExecuteFlowDto, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfExecuteExternal
         * @summary Execute a flow
         * @request POST:/ziggy/execute-external
         */
        ifExecuteExternal: (query: {
            flowUuid: string;
            isDebug: string;
            isStep: string;
            executionEnvironmentMode: string;
            executionId: string;
            doNotQueue: string;
        }, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfExecuteTest
         * @summary Execute a flow in test mode
         * @request POST:/ziggy/execute-test
         */
        ifExecuteTest: (data: ExecuteFlowDto, params?: RequestParams) => Promise<HttpResponse<TestExecutionResultDto, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfUpdateFlowSocket
         * @summary Update the Flow with a new socket id
         * @request PATCH:/ziggy/update-flow-socket/{executionUuid}/{socketId}
         */
        ifUpdateFlowSocket: (executionUuid: string, socketId: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFlush
         * @summary Flush history
         * @request DELETE:/ziggy/history-flush/{flowUuid}/{date}/{time}
         */
        ifHistoryFlush: (flowUuid: string, date: string, time: string, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfHistoryFilterFlush
         * @summary Flush history based on the dashboard filter
         * @request DELETE:/ziggy/history-filter-flush
         */
        ifHistoryFilterFlush: (data: DashboardFilter, params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfKillFlow
         * @summary Kill a running flow
         * @request DELETE:/ziggy/kill-flow/{executionUuid}
         */
        ifKillFlow: (executionUuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name IfKillAllRunningFlows
         * @summary Kill all running flows for the specified flow UUID
         * @request DELETE:/ziggy/kill-all-running-flows/{flowUuid}
         */
        ifKillAllRunningFlows: (flowUuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueKillSystemJob
         * @summary Delete System Queue job
         * @request DELETE:/ziggy/kill-system-queue-item/{executionUuid}
         */
        queueKillSystemJob: (executionUuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Ziggy executions
         * @name QueueResetSystemQueueHighestReached
         * @summary Reset System Queue Highest Reached Value
         * @request POST:/ziggy/reset-system-queue-highest-reached
         */
        queueResetSystemQueueHighestReached: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    plugins: {
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerRegisterPlugin
         * @summary Register a new plugin
         * @request POST:/plugins/register
         * @secure
         */
        pluginControllerRegisterPlugin: (data: RegisterPluginDto, params?: RequestParams) => Promise<HttpResponse<PluginRegistry, void>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetEnabledPlugins
         * @summary Get all enabled plugins
         * @request GET:/plugins/enabled
         * @secure
         */
        pluginControllerGetEnabledPlugins: (params?: RequestParams) => Promise<HttpResponse<PluginRegistry[], any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetRegistryStats
         * @summary Get block registry statistics
         * @request GET:/plugins/registry/stats
         * @secure
         */
        pluginControllerGetRegistryStats: (params?: RequestParams) => Promise<HttpResponse<RegistryStatsDto, any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetAllBlockTypes
         * @summary Get all registered block types
         * @request GET:/plugins/registry/blocks
         * @secure
         */
        pluginControllerGetAllBlockTypes: (params?: RequestParams) => Promise<HttpResponse<BlockTypesDto, any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerCheckBlockExistence
         * @summary Check if a block type already exists
         * @request POST:/plugins/check-block-existence
         * @secure
         */
        pluginControllerCheckBlockExistence: (data: CheckBlockExistenceDto, params?: RequestParams) => Promise<HttpResponse<CheckBlockExistenceResponseDto, any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetClientBlocks
         * @summary Get all client block definitions for plugin blocks
         * @request GET:/plugins/client/blocks
         * @secure
         */
        pluginControllerGetClientBlocks: (params?: RequestParams) => Promise<HttpResponse<ClientBlockDefinitionDto[], any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetPluginBundle
         * @summary Get plugin client bundle
         * @request GET:/plugins/bundles/{pluginId}
         * @secure
         */
        pluginControllerGetPluginBundle: (pluginId: string, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetPluginAsset
         * @summary Get plugin static asset (icon, image, etc.)
         * @request GET:/plugins/assets/{pluginId}/*
         * @secure
         */
        pluginControllerGetPluginAsset: (pluginId: string, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetAllPlugins
         * @summary Get all plugins
         * @request GET:/plugins
         * @secure
         */
        pluginControllerGetAllPlugins: (params?: RequestParams) => Promise<HttpResponse<PluginRegistry[], any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetPluginBlocks
         * @summary Get blocks provided by a plugin
         * @request GET:/plugins/{id}/blocks
         * @secure
         */
        pluginControllerGetPluginBlocks: (id: string, params?: RequestParams) => Promise<HttpResponse<PluginBlock[], any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerGetPlugin
         * @summary Get a specific plugin
         * @request GET:/plugins/{id}
         * @secure
         */
        pluginControllerGetPlugin: (id: string, params?: RequestParams) => Promise<HttpResponse<PluginRegistry, void>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerUpdatePlugin
         * @summary Update plugin configuration or enable/disable
         * @request PATCH:/plugins/{id}
         * @secure
         */
        pluginControllerUpdatePlugin: (id: string, data: UpdatePluginDto, params?: RequestParams) => Promise<HttpResponse<PluginRegistry, any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerUninstallPlugin
         * @summary Uninstall a plugin
         * @request DELETE:/plugins/{id}
         * @secure
         */
        pluginControllerUninstallPlugin: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @tags Plugins
         * @name PluginControllerSyncPlugin
         * @summary Sync plugin with current dist folder (refresh blocks)
         * @request POST:/plugins/{id}/sync
         * @secure
         */
        pluginControllerSyncPlugin: (id: string, params?: RequestParams) => Promise<HttpResponse<{
            blocksAdded?: number;
            blocksRemoved?: number;
            blocksUpdated?: number;
            addedBlocks?: string[];
            removedBlocks?: string[];
        }, void>>;
    };
    store: {
        /**
         * No description
         *
         * @name StoreMethods
         * @summary Fetch Store method
         * @request GET:/store/methods
         */
        storeMethods: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @name StoreFetchStoreData
         * @summary Fetch Data or Memory Store data
         * @request POST:/store/fetch-store-data
         */
        storeFetchStoreData: (data: StoreFindDto, params?: RequestParams) => Promise<HttpResponse<StoreResponseWithPaginationDto, any>>;
        /**
         * No description
         *
         * @name StoreFetchStoreDataRowCount
         * @summary Fetch row count for Data or Memory Store data (infinite scrolling support)
         * @request POST:/store/fetch-store-data-row-count
         */
        storeFetchStoreDataRowCount: (data: StoreFindDto, params?: RequestParams) => Promise<HttpResponse<number, any>>;
        /**
         * No description
         *
         * @name StoreFetchStats
         * @summary Fetch store stats
         * @request GET:/store/stats/{mode}
         */
        storeFetchStats: (mode: string, params?: RequestParams) => Promise<HttpResponse<StoreStatsDto, any>>;
        /**
         * No description
         *
         * @name StoreFetchNameSpaces
         * @summary Fetch list of names spaces with search key
         * @request GET:/store/namespaces/{mode}/{searchKey}
         */
        storeFetchNameSpaces: (mode: string, searchKey: string, params?: RequestParams) => Promise<HttpResponse<NameSpaceCountsDto[], any>>;
        /**
         * No description
         *
         * @name StoreDeleteNamespace
         * @summary Deletes a namespace or the entire store
         * @request DELETE:/store/delete-namespace/{mode}/{namespace}
         */
        storeDeleteNamespace: (mode: string, namespace: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    platform: {
        /**
         * No description
         *
         * @name PlatformGetObjects
         * @summary Get all objects
         * @request POST:/platform/get-objects
         */
        platformGetObjects: (data: PlatformObjectRequestDto, params?: RequestParams) => Promise<HttpResponse<PlatformObjectDto[], any>>;
        /**
         * No description
         *
         * @name PlatformGetDatabases
         * @summary Get database names
         * @request GET:/platform/get-databases/{environmentMode}/{connectionUuid}
         */
        platformGetDatabases: (environmentMode: string, connectionUuid: string, params?: RequestParams) => Promise<HttpResponse<PlatformDBNameDto[], any>>;
        /**
         * No description
         *
         * @name PlatformGetDbSchemas
         * @summary Get database schemas
         * @request GET:/platform/get-schemas/{environmentMode}/{connectionUuid}/{database}
         */
        platformGetDbSchemas: (environmentMode: string, connectionUuid: string, database: string, params?: RequestParams) => Promise<HttpResponse<PlatformDBSchema[], any>>;
        /**
         * No description
         *
         * @name PlatformGetProperties
         * @summary Get all properties for an object
         * @request GET:/platform/get-properties/{environmentMode}/{connectionUuid}/{objectId}/{database}/{schema}
         */
        platformGetProperties: (environmentMode: string, connectionUuid: string, objectId: string, database: string, schema: string, params?: RequestParams) => Promise<HttpResponse<PlatformObjectPropertyDto[], any>>;
        /**
         * No description
         *
         * @name PlatformGetAssociationInfo
         * @summary Get all associations between two object types
         * @request GET:/platform/get-association-types/{environmentMode}/{connectionUuid}/{fromObjectId}/{toObjectId}
         */
        platformGetAssociationInfo: (environmentMode: string, connectionUuid: string, fromObjectId: string, toObjectId: string, params?: RequestParams) => Promise<HttpResponse<PlatformAssociationTypeDto[], any>>;
        /**
         * No description
         *
         * @name PlatformIsManyToMany
         * @summary Check if an object is many to many
         * @request GET:/platform/many-to-many/{environmentMode}/{connectionUuid}/{objectId}
         */
        platformIsManyToMany: (environmentMode: string, connectionUuid: string, objectId: string, params?: RequestParams) => Promise<HttpResponse<ManyToManyDto, any>>;
        /**
         * No description
         *
         * @name PlatformGetHsTimelineEventTemplates
         * @summary Get Hubspot Timeline Event Templates
         * @request GET:/platform/hs-timeline-event-templates/{environmentMode}/{connectionUuid}
         */
        platformGetHsTimelineEventTemplates: (environmentMode: string, connectionUuid: string, params?: RequestParams) => Promise<HttpResponse<object[], any>>;
    };
    elastic: {
        /**
         * No description
         *
         * @name ElasticExecutePrompt
         * @summary Generate a prompt
         * @request POST:/elastic/execute-prompt
         */
        elasticExecutePrompt: (data: ElasticAddPromptRequestDto, params?: RequestParams) => Promise<HttpResponse<ElasticAddPromptResponseDto, any>>;
        /**
         * No description
         *
         * @name ElasticRebuildIndex
         * @summary Rebuild an index (destroys all data)
         * @request POST:/elastic/rebuild-index/{environmentMode}
         */
        elasticRebuildIndex: (environmentMode: string, data: any, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ElasticAddIndex
         * @summary Add new index
         * @request POST:/elastic/add-index/{environmentMode}/{connectionUuid}/{indexName}
         */
        elasticAddIndex: (environmentMode: string, connectionUuid: string, indexName: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ElasticGetIndices
         * @summary Get indices
         * @request GET:/elastic/get-indices/{connectionUuid}/{environmentMode}
         */
        elasticGetIndices: (environmentMode: string, connectionUuid: string, params?: RequestParams) => Promise<HttpResponse<ElasticIndicesResponseDto[], any>>;
        /**
         * No description
         *
         * @name GetSchemaInfo
         * @summary Get index schema information
         * @request GET:/elastic/get-schema-info/{environmentMode}/{connectionUuid}/{indexName}
         */
        getSchemaInfo: (environmentMode: string, connectionUuid: string, indexName: string, params?: RequestParams) => Promise<HttpResponse<object, any>>;
    };
    openai: {
        /**
         * No description
         *
         * @tags Openai
         * @name OpenaiZodify
         * @summary Generate a Zod object from a javascript object
         * @request POST:/openai/zodify
         */
        openaiZodify: (data: OpenAIZodifyRequestDto, params?: RequestParams) => Promise<HttpResponse<OpenAIResponse, any>>;
        /**
         * No description
         *
         * @tags Openai
         * @name OpenaiMappify
         * @summary Generate a best guess mapping between two objects
         * @request POST:/openai/mappify
         */
        openaiMappify: (data: OpenAIMappifyRequestDto, params?: RequestParams) => Promise<HttpResponse<OpenAIResponse, any>>;
        /**
         * No description
         *
         * @tags Openai
         * @name OpenaiJavascriptAssistant
         * @summary JavaScript code assistant
         * @request POST:/openai/javascript-assistant
         */
        openaiJavascriptAssistant: (data: OpenAIJavascriptAssistantRequestDto, params?: RequestParams) => Promise<HttpResponse<AIPromptResponseDTO, any>>;
        /**
         * No description
         *
         * @tags Openai
         * @name OpenaiEdgeAssistant
         * @summary JavaScript edge assistant
         * @request POST:/openai/edge-ai-assistant
         */
        openaiEdgeAssistant: (data: OpenAIEdgeDataAssistantRequestDto, params?: RequestParams) => Promise<HttpResponse<AIPromptResponseDTO, any>>;
    };
    aiAgent: {
        /**
         * No description
         *
         * @name AiAgentCreateCollection
         * @summary Create a new AI database collection
         * @request POST:/ai-agent/add-collection
         */
        aiAgentCreateCollection: (data: CreateAICollectionRequestDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AiAgentRebuildCollection
         * @summary Rebuild a collection
         * @request POST:/ai-agent/rebuild-collection
         */
        aiAgentRebuildCollection: (data: any, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AiAgentExecutePrompt
         * @summary Execute a prompt
         * @request POST:/ai-agent/execute-prompt
         */
        aiAgentExecutePrompt: (data: AIPromptRequestDto, params?: RequestParams) => Promise<HttpResponse<AIPromptResponseDTO, any>>;
        /**
         * No description
         *
         * @name AiAgentExecuteGeneratePrompt
         * @summary Execute a prompt for generate
         * @request POST:/ai-agent/execute-generate
         */
        aiAgentExecuteGeneratePrompt: (data: AIPromptRequestDto, params?: RequestParams) => Promise<HttpResponse<AIPromptResponseDTO, any>>;
        /**
         * No description
         *
         * @name AiAgentInsertPromptTokens
         * @summary Execute a prompt
         * @request POST:/ai-agent/insert-prompt-tokens
         */
        aiAgentInsertPromptTokens: (data: InsertPromptTokensRequestDTO, params?: RequestParams) => Promise<HttpResponse<InsertPromptTokensResponseDTO, any>>;
        /**
         * No description
         *
         * @name AiAgentValidateJsonlogic
         * @summary Validate a jsonlogic structure
         * @request POST:/ai-agent/validate-jsonlogic
         */
        aiAgentValidateJsonlogic: (data: AIValidateJSONLogicRequestDto, params?: RequestParams) => Promise<HttpResponse<AIValidateJSONLogicResponseDto, any>>;
        /**
         * No description
         *
         * @name AiAgentGetModels
         * @summary Get models for the specified platform
         * @request GET:/ai-agent/models/{connectionUuid}/{type}
         */
        aiAgentGetModels: (connectionUuid: string, type: string, params?: RequestParams) => Promise<HttpResponse<AIAvailableModels[], any>>;
        /**
         * No description
         *
         * @name AiAgentGetCollections
         * @summary Get collections for the specified vector DB
         * @request GET:/ai-agent/collections/{connectionUuid}
         */
        aiAgentGetCollections: (connectionUuid: string, params?: RequestParams) => Promise<HttpResponse<AICollectionInfoResponseDto[], any>>;
        /**
         * No description
         *
         * @name AiAgentGetCollectionInfo
         * @summary Get collection information for the specified vector DB and collection
         * @request GET:/ai-agent/collection-info/{connectionUuid}/{collection}
         */
        aiAgentGetCollectionInfo: (connectionUuid: string, collection: string, params?: RequestParams) => Promise<HttpResponse<AICollectionInfoResponseDto, any>>;
        /**
         * No description
         *
         * @name AiAgentChatWidget
         * @summary Embeddable chat widget
         * @request GET:/ai-agent/chat-widget/{flowUuid}
         */
        aiAgentChatWidget: (flowUuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    messaging: {
        /**
         * No description
         *
         * @name MessagingCreate
         * @summary Create a new Messaging
         * @request POST:/messaging
         */
        messagingCreate: (data: CreateMessagingDto, params?: RequestParams) => Promise<HttpResponse<Messaging, any>>;
        /**
         * No description
         *
         * @name MessagingFetch
         * @summary Fetch Messaging configs
         * @request GET:/messaging
         */
        messagingFetch: (params?: RequestParams) => Promise<HttpResponse<Messaging[], any>>;
        /**
         * No description
         *
         * @name MessagingFindOne
         * @summary Fetch a Messaging by its UUID
         * @request GET:/messaging/{id}
         */
        messagingFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<Messaging, any>>;
        /**
         * No description
         *
         * @name MessagingSave
         * @summary Save Messaging
         * @request PUT:/messaging/{id}
         */
        messagingSave: (id: string, data: UpdateMessagingDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name MessagingDelete
         * @summary Delete Messaging
         * @request DELETE:/messaging/{id}
         */
        messagingDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    schedule: {
        /**
         * No description
         *
         * @name ScheduleCreate
         * @summary Create a new Schedule
         * @request POST:/schedule
         */
        scheduleCreate: (data: CreateScheduleDto, params?: RequestParams) => Promise<HttpResponse<Schedule, any>>;
        /**
         * No description
         *
         * @name ScheduleFetch
         * @summary Fetch Schedules
         * @request GET:/schedule
         */
        scheduleFetch: (params?: RequestParams) => Promise<HttpResponse<Schedule[], any>>;
        /**
         * No description
         *
         * @name IfUpdateAutoVacuum
         * @summary Update the Auto Vacuum scheduler
         * @request POST:/schedule/update-auto-vacuum
         */
        ifUpdateAutoVacuum: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name IfUpdateAutoBackup
         * @summary Update the Auto Backup scheduler
         * @request POST:/schedule/update-auto-backup
         */
        ifUpdateAutoBackup: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ScheduleFindOne
         * @summary Fetch a Schedule by its UUID
         * @request GET:/schedule/{id}
         */
        scheduleFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<ScheduleDto, any>>;
        /**
         * No description
         *
         * @name ScheduleSave
         * @summary Save Schedule
         * @request PUT:/schedule/{id}
         */
        scheduleSave: (id: string, data: UpdateScheduleDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name ScheduleDelete
         * @summary Delete Schedule
         * @request DELETE:/schedule/{id}
         */
        scheduleDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    test: {
        /**
         * No description
         *
         * @name TestCreate
         * @summary Create a new test
         * @request POST:/test
         */
        testCreate: (data: CreateTestDto, params?: RequestParams) => Promise<HttpResponse<TestDto, any>>;
        /**
         * No description
         *
         * @name TestFetch
         * @summary Fetch Tests
         * @request GET:/test
         */
        testFetch: (params?: RequestParams) => Promise<HttpResponse<Test[], any>>;
        /**
         * No description
         *
         * @name TestUpdateOrder
         * @summary Update tests order
         * @request POST:/test/update-tests-order
         */
        testUpdateOrder: (data: TestsOrderPayload, params?: RequestParams) => Promise<HttpResponse<TestDto, any>>;
        /**
         * No description
         *
         * @name TestFindOne
         * @summary Fetch a test by its UUID
         * @request GET:/test/{id}
         */
        testFindOne: (id: string, params?: RequestParams) => Promise<HttpResponse<TestDto, any>>;
        /**
         * No description
         *
         * @name TestUpdate
         * @summary Update test
         * @request PUT:/test/{id}
         */
        testUpdate: (id: string, data: UpdateTestDto, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name TestDelete
         * @summary Delete test
         * @request DELETE:/test/{id}
         */
        testDelete: (id: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name TestConnectFlowToTest
         * @summary Connect a flow to a test
         * @request PATCH:/test/connect-flow-to-test/{testUuid}/{flowUuid}
         */
        testConnectFlowToTest: (testUuid: string, flowUuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name TestDisconnectFlowFromTest
         * @summary Disconnect a flow from a test
         * @request PATCH:/test/disconnect-flow-from-test/{testUuid}/{flowUuid}
         */
        testDisconnectFlowFromTest: (testUuid: string, flowUuid: string, params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
    tenant: {
        /**
         * No description
         *
         * @name TenantCreate
         * @summary Create a new tenant
         * @request POST:/tenant/create
         */
        tenantCreate: (data: CreateTenantRequestDto, params?: RequestParams) => Promise<HttpResponse<CreateTenantResponseDto, any>>;
        /**
         * No description
         *
         * @name TenantFindAll
         * @summary Fetch tenants
         * @request GET:/tenant
         */
        tenantFindAll: (query: {
            tags: string;
        }, params?: RequestParams) => Promise<HttpResponse<Tenant[], any>>;
    };
    aiDocumentor: {
        /**
         * No description
         *
         * @name AiDocumentorHealth
         * @summary Health check for AI Documentor
         * @request GET:/ai-documentor/health
         */
        aiDocumentorHealth: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name AiDocumentorDocumentFlow
         * @summary Generate documentation for a flow
         * @request GET:/ai-documentor/document-flow/{flowUuid}
         */
        aiDocumentorDocumentFlow: (flowUuid: string, params?: RequestParams) => Promise<HttpResponse<DocumentorResponseDto, any>>;
    };
    slack: {
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsGet
         * @request GET:/slack/events
         */
        slackControllerHandleSlackEventsGet: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsPost
         * @request POST:/slack/events
         */
        slackControllerHandleSlackEventsPost: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsPut
         * @request PUT:/slack/events
         */
        slackControllerHandleSlackEventsPut: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsDelete
         * @request DELETE:/slack/events
         */
        slackControllerHandleSlackEventsDelete: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsPatch
         * @request PATCH:/slack/events
         */
        slackControllerHandleSlackEventsPatch: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsOptions
         * @request OPTIONS:/slack/events
         */
        slackControllerHandleSlackEventsOptions: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsHead
         * @request HEAD:/slack/events
         */
        slackControllerHandleSlackEventsHead: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerHandleSlackEventsSearch
         * @request SEARCH:/slack/events
         */
        slackControllerHandleSlackEventsSearch: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerOauthCallback
         * @request GET:/slack/oauth/callback
         */
        slackControllerOauthCallback: (query: {
            code: string;
            state: string;
            error: string;
        }, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerGetInstallUrl
         * @request GET:/slack/install
         */
        slackControllerGetInstallUrl: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerTestEndpoint
         * @request GET:/slack/test-endpoint
         */
        slackControllerTestEndpoint: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerTestPost
         * @request POST:/slack/test-post
         */
        slackControllerTestPost: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerHealth
         * @request GET:/slack/health
         */
        slackControllerHealth: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * No description
         *
         * @name SlackControllerAppInfo
         * @request GET:/slack/info
         */
        slackControllerAppInfo: (params?: RequestParams) => Promise<HttpResponse<void, any>>;
    };
}
export {};
