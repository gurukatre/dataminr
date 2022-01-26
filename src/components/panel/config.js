export const general = {
    title: "GENERAL",
    flags: [
        {
            text: "CASE MANAGEMENT",
            field: {
                type: "checkbox",
                id: "general-caseManagement"
            }
        },
        {
            text: "MAP TIMELINE",
            field: {
                type: "checkbox",
                id: "general-mapTimeline"
            }
        },
        {
            text: "VIEW & BRIEFING",
            field: {
                type: "checkbox",
                id: "general-viewBriefing"
            }
        },
        {
            text: "NOTIFICATION",
            field: {
                type: "checkbox",
                id: "general-notification"
            }
        },
        {
            text: "MASS COMMUNICATION",
            field: {
                type: "checkbox",
                id: "general-massCommunication"
            }
        },
        {
            text: "TRAFFIC CAMERAS",
            field: {
                type: "checkbox",
                id: "general-trafficCameras"
            }
        }
    ]
};

export const setting = {
    title: "SETTING",
    flags: [
        {
            text: "AUDIT LOG",
            field: {
                type: "checkbox",
                id: "setting-auditLog"
            }
        },
        {
            text: "USERS",
            field: {
                type: "checkbox",
                id: "setting-users",
                groupId: "setting-child-user",
                fields: [
                    {
                        text: "USERS ADD",
                        field: {
                            type: "checkbox",
                            id: "setting-child-users-add"
                        }
                    },
                    {
                        text: "USERS DELETE",
                        field: {
                            type: "checkbox",
                            id: "setting-child-users-delete"
                        }
                    },
                    {
                        text: "USERS EDIT",
                        field: {
                            type: "checkbox",
                            id: "setting-child-users-edit"
                        }
                    },
                    
                ]
            }
        },
    ]
};

export const alerts = {
    title: "ALERTS",
    flags: [
        {
            text: "ALERT MANAGER",
            field: {
                type: "checkbox",
                id: "alerts-alert-manager"
            }
        },
        {
            text: "ALERT RULES",
            field: {
                type: "checkbox",
                id: "alerts-alert-rules"
            }
        }
    ]
};