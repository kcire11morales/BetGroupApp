export enum RESPONSE_STATUS {
	OK = 200,
	CREATED = 201
}

export enum RESPONSE_ERROR {
	SIGNUP_NICKNAME_ERROR = "USR001",
	SIGNUP_EMAIL_ERROR = "USR002",
	LOGIN_NICKNAME_ERROR = "USR003",
	LOGIN_PASSWORD_ERROR = "USR004",
	FORGOT_PASSWORD_ERROR = "USR005",
	FORGOT_PASSWORD_ERROR2 = "E0011",
	GAME_PASSWORD_ERROR = "INS001",
	GAME_SAVE_ERROR = "E0005",
	CREDIT_COLLECT_ERROR = "CRE001",
	CREDIT_COLLECT_ERROR2 = "CRE002",
	CREDIT_ADD_ERROR = "CRE003",
	CREDIT_ADD_ERROR2 = "CRE004",
	CREDIT_ADD_ERROR3 = "CRE005",
	BET_SAVE_ERROR = "BET001",
	INVITE_FRIEND_ERROR = "INVAMIG001"
}

export enum TRANSACTION_TYPE {
	ADD_CREDIT = 1,
	COLLECT_CREDIT = 2
}

export enum TRANSACTION_STATUS {
	PENDING = 0
}

export const DATE_FORMAT_ISO8601 = 'YYYY-MM-DDTHH:mm:ss Z';