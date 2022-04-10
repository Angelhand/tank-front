let LangEn = {
  eyeblueTank: "EyeblueTank",
  dashboard: {
    totalInvokeNum: 'Total PV',
    weekRate: 'Week',
    dayRate: 'Day',
    yesterdayInvoke: 'Yesterday PV',
    totalUV: 'Total UV',
    yesterdayUV: 'Yesterday UV',
    totalMatterNum: 'Total file num',
    yesterdayMatterNum: 'Yesterday File Num',
    totalFileSize: 'Total File Size',
    yesterdayMatterSize: 'Yesterday File Size',
    recentDayInvokeUV: 'Recent {} days PV/UV',
    downloadMatterTop10: 'File download TOP10',
    activeIpTop10: 'Active IP TOP10',
    loading: 'loading...',
    date: 'Date',
    num: 'Num',
    warnHint: 'Hint: data in this page updates everyday at 0.a.m. ',
    reRun: 'ReRun',
  },
  install: {
    configMysql: "Config Database",
    dbType: "Database Type",
    port: "Port",
    schema: "Schema",
    username: "Username",
    password: "Password",
    charset: "Charset",
    mysqlConnectionPass: "Connect MySQL Ok",
    testMysqlConnection: "Tes MySQL Connection",
    notice: "Notice",
    sqliteNotice1: "Sqlite is a tiny file database, you can use it without installation",
    mysqlNotice1: "If Mysql and EyeblueTank installed on the same server, Host is 127.0.0.1",
    mysqlNotice2: "Your mysql account must have access to create table, or the second step will fail.",
    validateMysqlFirst: "Please test the mysql connection firstly.",
    preStep: "Pre Step",
    nextStep: "Next Step",
    createTable: "Craete Tables",
    installed: "Installed",
    installedButMissing: "Installed, but missing fields",
    toBeInstalled: "To be installed",
    allFields: "All fields",
    missingFields: "Missing fields",
    tableNotice: "'Create Tables' will trigger the following actions:",
    tableNotice1: "If a table not exist, create it.",
    tableNotice2: "If a table exist and no fields missing, nothing will do on this table.",
    tableNotice3: "If a table exist but some fields is missing, it will add the missing fields.",
    tableNotice4: "If a table exist and some fields not necessary, nothing will do on this table.",
    oneKeyCreate: "Create Tables",
    createFinish: "Finish Creating Tables",
    createTableSuccess: "Create tables successfully",
    crateTableFirst: "Please click 'Create Tables'",
    setAdministrator: "Config Administrator",
    detectAdministrator: "Detect the following administrators:",
    useOrCreateAdministrator: "You can validate one of them, or you can create a new one.",
    validateAdministrator: "Validate administrator",
    createAdministrator: "Create administrator",
    administratorUsername: "username",
    administratorPassword: "password",
    administratorRePassword: "Enter administrator password again",
    usernameRule: "EyeblueTank will use username as directory name, so only lowercase letter and number and _ is permitted.",
    congratulationInstall: "Congratulations, install successfully!",
    configAdminFirst: "Please config administrator first.",
    createAdminSuccess: "Create administrator successfully!",
    validateAdminSuccess: "Validate administrator successfully!",
    pressToHome: "Click the button below to enter home。",
    enterHome: "Finish And Enter Home",
    finish: "Finish",
  },
  layout: {
    allFiles: "Files",
    myShare: "My Share",
    bin: "Recycle bin",
    setting: "Setting",
    dashboard: "Dashboard",
    users: "Users",
    logout: "Logout",
    about: "About",
    install: "Install",
    dragMouseUp: "Put file here~"
  },
  matter: {
    file: "File",
    directory: "Directory",
    rename: "Rename",
    download: "Download",
    delete: "Delete",
    hardDelete: "Hard delete",
    recovery: "Recovery",
    more: "More",
    share: "Share",
    close: "Close",
    size: "Size",
    preview: "Preview",
    move: "Move",
    moveTo: "MoveTo",
    upload: "Upload",
    create: "Create",
    createTime: "Create Time",
    updateTime: "Update Time",
    deleteTime: "Deleted Time",
    root: "Root",
    fillInPicLink: "Fill in Picture Link",
    rePick: "Re Choose",
    chooseImage: "Choose Image",
    uploadMode: "Upload Mode",
    fillMode: "Fill Mode",
    sizeExceedLimit: "File size exceed limit {}>{}",
    dropNotDirectory: "Cannot drag and drop folders for uploading",
    setPublic: "Set as public",
    setPrivate: "Set as private",
    copyLink: "Copy Link",
    enterName: "Please enter name",
    publicFileEveryoneCanVisit: "Public file, anyone can access",
    fileDetail: "File info",
    expire: "Expire",
    copyLinkAndCode: "Copy link and code",
    uploaded: "Uploaded",
    uploadDir: 'Upload dir',
    uploadInfo: 'Upload Info',
    uploadErrorInfo: 'Some files failed to upload, you can export CSV files for viewing',
    exportCSV: 'Export upload error detail',
    speed: "Speed",
    fileInfo: "File basic info",
    fileName: "Filename",
    path: "Path",
    copyPath: "Copy path",
    publicOrPrivate: "Public or private",
    privateInfo: "Private file, only self or auth user can download",
    publicInfo: "Public file, anyone can download",
    downloadTimes: "Download times",
    operations: "Operation",
    oneTimeLink: "One time link",
    oneTimeLinkInfo: "One time link will expire after downloading, click to copy",
    imageCache: "Image cache",
    searchFile: "Search file",
    noContentYet: "No content under this directory yet",
    allFiles: "All Files",
    newDirectory: "New directory",
    notChoose: "Not choose any file",
    exceed1000: "Exceed file limit 1000",
    noImageCache: "No image cache",
    recycleBin: "Recycle bin",
    deleted: "Deleted",
    unCompatibleBrowser: "The current browser does not support it. Please try choose another one",
    canIUse: "To see if the current browser supports it",
    intoRecycleBin: "Recycle bin",
    finishingTip: "Please wait while files are sorted..."
  },
  router: {
    allFiles: "All Files",
    fileDetail: "File Detail",
    login: "Login",
    autoLogin: "Auto Login",
    register: "Register",
    users: "Users",
    userDetail: "User Detail",
    changePassword: "Change password",
    editUser: "Edit User",
    createUser: "Create User",
    shareDetail: "Share Detail",
    myShare: "My Share",
    dashboard: "Dashboard",
    install: "Install",
    setting: "Setting"
  },
  preference: {
    basic: "Base Info",
    preview: "Preview Conf",
    scan: "Scan Disk",
    websiteName: "Website Name",
    logo: "Logo",
    logoSquare: "Logo will be cropped to square size",
    onlyAllowIco: "Only .ico allowed",
    copyright: "Copyright (support html)",
    extraInfo: "Extra info (support html)",
    zipMaxNumLimit: "Zip download max num limit",
    zipMaxSizeLimit: "Zip download max size limit(B)",
    current: "Current",
    noLimit: "No limit",
    userDefaultSizeLimit: "User default size limit(B) ",
    matterBinDefaultSaveDay: "Matter bin storage days",
    enterMatterBinDefaultSaveDay: "Please enter matter bin storage days!",
    docLink: "Document Link",
    tankDocLink: "https://tank-doc.eyeblue.cn",
    allowRegister: "Allow register",
    systemCleanup: "System Cleanup",
    systemCleanupDescription: "This operation will cleanup everything except administrators' data",
    systemCleanupPrompt: "This operation will cleanup everything except administrators' account data, please input login password.",
    previewConfig: "File Preview Config",
    editPreference: "Edit Preference",
    editPreviewEngine: "Edit Preview engine",
    enterWebsiteName: "Please enter website name!",
    enterZipMaxNumLimit: "Please enter zip max num!",
    enterZipMaxSizeLimit: "Please enter zip max size!",
    enterUserDefaultSizeLimit: "Please enter user's default size!",
    engine: "The number {} engine",
    noEngine: "No preview engine",
    newEngine: "Add a preview engine",
    engineReg: "Engine format",
    engineSuffix: "Engine suffix",
    enginePreview: "Engine preview",
    defaultPreview: "Default preview engine",
    previewEngine: "Number {} preview engine",
    defaultPreviewDesc: "Default preview engine, can not be removed",
    engineUsageHint: "Previewing a file using the first engine matches the extentions.",
    engineRegHelper: "template syntax, {url} represents the file path, the preview will automatically replace with the corresponding file url",
    engineRegPlaceHolder: "eg：https://xxx.xxx.xxx?url={url}",
    engineSuffixPlaceHolder: "suffix can not be null, split by comma, look like: doc,ppt,xls",
    previewCurrent: "preview in current page",
    previewOpen: "preview in new page",
    editScan: "Edit Scan disk",
    enableScan: "Enable Scan disk",
    disabledScan: "Disabled Scan disk",
    scanCron: "Regularly Scan disk",
    cron: "Cron expression",
    cronValidate: "Cron expression can not be null",
    scanScope: "Scan scope",
    scanUsers: "Scan users",
    scanPerTenSeconds: "Scan every ten seconds",
    scanPerThirtySeconds: "Scan every thirty seconds",
    scanPerMinute: "Scan every minute",
    scanPerHour: "Scan every hour",
    scanCustom: "Scan custom",
    chooseUsers: "Fuzzy search users",
    chooseUsersValidate: "choose one more user",
    scanLoading: "waiting...",
    matterBinDefaultTip: "set zero means to turn off the recycle bin"
  },
  share: {
    shareDetail: "Share Detail",
    shareTime: "Share Time",
    expireTime: "Expire Time",
    noExpire: "Never Expire",
    expired: "Expired",
    copyLinkAndCode: "Copy Link And Code",
    shareSuccess: "Share Successfully",
    sharer: "Share Person",
    link: "Link",
    copyLink: "Copy Link",
    code: "Code",
    copyCode: "Copy Code",
    copySuccess: "Copy Successfully",
    more: "More",
    cancelShare: "Cancel Share",
    getLink: "Get Link",
    allFiles: "All Files",
    noContent: "No content in this directory",
    enterCode: "Please enter code",
    getFiles: "Get Files",
    codeError: "Code Error",
    cancelPrompt: "This operation will cancel sharing forever, continue?",
    hour: "1 Hour",
    day: "1 Day",
    week: "1 Week",
    month: "1 Month",
    year: "1 Year",
    infinity: "Forever",
    emptyHint: "No Share Yet",
  },
  user: {
    redirecting: "Redirecting...",
    oldPassword: "Old Password",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    cannotBeNull: "Cannot be null！",
    passwordNotSame: "passwords above not same！",
    role: "Role",
    singleFileSizeLimit: "Single File Limit",
    totalFileSizeLimit: "Total Space Limit",
    current: "Current",
    noLimit: "No Limit",
    totalFileSize: "Used Space",
    status: "Status",
    lastLogin: "Last Login",
    lastLoginIp: "Last Login Ip",
    lastLoginTime: "Last Login Time",
    resetPassword: "Reset Password",
    transfiguration: "Transfiguration",
    changePassword: "Edit Password",
    enterPassword: "Please Enter Password",
    enterUsername: "Please Enter Username",
    enterNewPassword: "Please Enter New Password",
    profile: "Profile",
    avatar: "Avatar",
    username: "Username",
    password: "Password",
    confirmPassword: "Confirm Password",
    disabled: "Disabled",
    disableUser: "Disable this user",
    disable: "Disable",
    active: "Active",
    sync: "Sync",
    activeUser: "Active this user",
    deleteUser: "Delete this user",
    deleteHint: "This action will delete {}'s all records, including files,shares,user infos etc. Continue？",
    welcomeLogin: "Welcome Login",
    logining: "Login...",
    login: "Login",
    loginSuccess: "Login Success",
    toToRegister: "Go To Register",
    welcomeRegister: "Welcome Register",
    registering: "Login...",
    register: "Register",
    goToLogin: "Go To Login",
    roleGuest: "Guest",
    roleUser: "User",
    roleAdministrator: "Administrator",
    statusActive: "Ok",
    statusDisabled: "Disabled",
    webdavLink: "WebDAV Link",
    docLink: "Document Link",
    createUser: "Create User",
    editUser: "Edit User",
    editSomebodyPassword: "Edit {}'s Password",
    transfigurationPromptText: "Transfiguration Prompt",
    transfigurationPrompt: "You will login as this user.Please visit this link in other browser, if in current browser, you will logout.",
    allUsers: "All users",
    partialUsers: "Partial users",
    searchUser: "Search user"
  },
  model: {
    usernameRule: "only lowercase letter and number and _ is permitted.",
    passwordRule: "Password must have more than 6 chars",
    linkCodeText: "Link:{} Code:{}",
    copyLinkCodeSuccess: "Copy Link and Code successfully",

  },
  plugin: {
    cannotPreview: "Cannot Preview",
    emptyHintDefault: "No Items",
    everyPage: "Every Page",
    items: "Items",
    total: "Total",
    clickRefresh: "Click To Refresh",
  },
  loading: "Loading",
  selectAll: "All",
  edit: "Edit",
  createTime: "Create Time",
  download: "Download",
  close: "Close",
  required: "Required",
  cancel: "Cancel",
  delete: "Delete",
  actionCanNotRevertConfirm: "This action cannot be reverted, confirm?",
  actionDeleteConfirm: "Delete, confirm?",
  actionRecoveryConfirm: "Recovery, confirm?",
  prompt: "Prompt",
  confirm: "Confirm",
  copy: "Copy",
  copySuccess: "Copy Success！",
  copyError: "Copy Error！",
  showMore: "Show More",
  username: "Username",
  password: "Password",
  submit: "Submit",
  save: "Save",
  create: "Create",
  finish: "Finish",
  operationSuccess: "Operation success",
  operation: "Operation",
  notFound: "404 Not Found",
  login: "Login",
  logout: "Logout",
  yes: "Yes",
  no: "No",
  all: "All",
  refresh: "refresh",
  inputRequired: "Input required",
}

export default LangEn
