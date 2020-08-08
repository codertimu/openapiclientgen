import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** JSON template for Analytics account entry. */
	export interface Account {

		/** Child link for an account entry. Points to the list of web properties for this account. */
		childLink?: AccountChildLink;

		/** Time the account was created. */
		created?: Date;

		/** Account ID. */
		id?: string;

		/** Resource type for Analytics account. */
		kind?: string;

		/** Account name. */
		name?: string;

		/** Permissions the user has for this account. */
		permissions?: AccountPermissions;

		/** Link for this account. */
		selfLink?: string;

		/** Indicates whether this account is starred or not. */
		starred?: boolean;

		/** Time the account was last modified. */
		updated?: Date;
	}

	export interface AccountChildLink {

		/** Link to the list of web properties for this account. */
		href?: string;

		/** Type of the child link. Its value is "analytics#webproperties". */
		type?: string;
	}

	export interface AccountPermissions {

		/** All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW). */
		effective?: Array<string>;
	}


	/** JSON template for a linked account. */
	export interface AccountRef {

		/** Link for this account. */
		href?: string;

		/** Account ID. */
		id?: string;

		/** Analytics account reference. */
		kind?: string;

		/** Account name. */
		name?: string;
	}


	/** An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary. */
	export interface AccountSummaries {

		/** A list of AccountSummaries. */
		items?: Array<AccountSummary>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this AccountSummary collection. */
		nextLink?: string;

		/** Link to previous page for this AccountSummary collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles. */
	export interface AccountSummary {

		/** Account ID. */
		id?: string;

		/** Resource type for Analytics AccountSummary. */
		kind?: string;

		/** Account name. */
		name?: string;

		/** Indicates whether this account is starred or not. */
		starred?: boolean;

		/** List of web properties under this account. */
		webProperties?: Array<WebPropertySummary>;
	}


	/** JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property. */
	export interface WebPropertySummary {

		/** Web property ID of the form UA-XXXXX-YY. */
		id?: string;

		/** Internal ID for this web property. */
		internalWebPropertyId?: string;

		/** Resource type for Analytics WebPropertySummary. */
		kind?: string;

		/** Level for this web property. Possible values are STANDARD or PREMIUM. */
		level?: string;

		/** Web property name. */
		name?: string;

		/** List of profiles under this web property. */
		profiles?: Array<ProfileSummary>;

		/** Indicates whether this web property is starred or not. */
		starred?: boolean;

		/** Website url for this web property. */
		websiteUrl?: string;
	}


	/** JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile. */
	export interface ProfileSummary {

		/** View (profile) ID. */
		id?: string;

		/** Resource type for Analytics ProfileSummary. */
		kind?: string;

		/** View (profile) name. */
		name?: string;

		/** Indicates whether this view (profile) is starred or not. */
		starred?: boolean;

		/** View (Profile) type. Supported types: WEB or APP. */
		type?: string;
	}


	/** JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile. */
	export interface AccountTicket {

		/** JSON template for Analytics account entry. */
		account?: Account;

		/** Account ticket ID used to access the account ticket. */
		id?: string;

		/** Resource type for account ticket. */
		kind?: string;

		/** JSON template for an Analytics view (profile). */
		profile?: Profile;

		/** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL. */
		redirectUri?: string;

		/** JSON template for an Analytics web property. */
		webproperty?: Webproperty;
	}


	/** JSON template for an Analytics view (profile). */
	export interface Profile {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string;

		/** Indicates whether bot filtering is enabled for this view (profile). */
		botFilteringEnabled?: boolean;

		/** Child link for this view (profile). Points to the list of goals for this view (profile). */
		childLink?: ProfileChildLink;

		/** Time this view (profile) was created. */
		created?: Date;

		/**
		 * The currency type associated with this view (profile), defaults to USD. The supported values are:
		 * USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
		 */
		currency?: string;

		/** Default page for this view (profile). */
		defaultPage?: string;

		/** Indicates whether ecommerce tracking is enabled for this view (profile). */
		eCommerceTracking?: boolean;

		/** Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled. */
		enhancedECommerceTracking?: boolean;

		/** The query parameters that are excluded from this view (profile). */
		excludeQueryParameters?: string;

		/** View (Profile) ID. */
		id?: string;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string;

		/** Resource type for Analytics view (profile). */
		kind?: string;

		/** Name of this view (profile). */
		name?: string;

		/** Parent link for this view (profile). Points to the web property to which this view (profile) belongs. */
		parentLink?: ProfileParentLink;

		/** Permissions the user has for this view (profile). */
		permissions?: ProfilePermissions;

		/** Link for this view (profile). */
		selfLink?: string;

		/** Site search category parameters for this view (profile). */
		siteSearchCategoryParameters?: string;

		/** The site search query parameters for this view (profile). */
		siteSearchQueryParameters?: string;

		/** Indicates whether this view (profile) is starred or not. */
		starred?: boolean;

		/** Whether or not Analytics will strip search category parameters from the URLs in your reports. */
		stripSiteSearchCategoryParameters?: boolean;

		/** Whether or not Analytics will strip search query parameters from the URLs in your reports. */
		stripSiteSearchQueryParameters?: boolean;

		/** Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database. */
		timezone?: string;

		/** View (Profile) type. Supported types: WEB or APP. */
		type?: string;

		/** Time this view (profile) was last modified. */
		updated?: Date;

		/** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
		webPropertyId?: string;

		/** Website URL for this view (profile). */
		websiteUrl?: string;
	}

	export interface ProfileChildLink {

		/** Link to the list of goals for this view (profile). */
		href?: string;

		/** Value is "analytics#goals". */
		type?: string;
	}

	export interface ProfileParentLink {

		/** Link to the web property to which this view (profile) belongs. */
		href?: string;

		/** Value is "analytics#webproperty". */
		type?: string;
	}

	export interface ProfilePermissions {

		/** All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent web property. */
		effective?: Array<string>;
	}


	/** JSON template for an Analytics web property. */
	export interface Webproperty {

		/** Account ID to which this web property belongs. */
		accountId?: string;

		/** Child link for this web property. Points to the list of views (profiles) for this web property. */
		childLink?: WebpropertyChildLink;

		/** Time this web property was created. */
		created?: Date;

		/**
		 * Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).
		 * Set to false to delete data associated with the user identifier automatically after the rentention period.
		 * This property cannot be set on insert.
		 */
		dataRetentionResetOnNewActivity?: boolean;

		/**
		 * The length of time for which user and event data is retained.
		 * This property cannot be set on insert.
		 */
		dataRetentionTtl?: string;

		/** Default view (profile) ID. */
		defaultProfileId?: string;

		/** Web property ID of the form UA-XXXXX-YY. */
		id?: string;

		/** The industry vertical/category selected for this web property. */
		industryVertical?: string;

		/** Internal ID for this web property. */
		internalWebPropertyId?: string;

		/** Resource type for Analytics WebProperty. */
		kind?: string;

		/** Level for this web property. Possible values are STANDARD or PREMIUM. */
		level?: string;

		/** Name of this web property. */
		name?: string;

		/** Parent link for this web property. Points to the account to which this web property belongs. */
		parentLink?: WebpropertyParentLink;

		/** Permissions the user has for this web property. */
		permissions?: WebpropertyPermissions;

		/** View (Profile) count for this web property. */
		profileCount?: number;

		/** Link for this web property. */
		selfLink?: string;

		/** Indicates whether this web property is starred or not. */
		starred?: boolean;

		/** Time this web property was last modified. */
		updated?: Date;

		/** Website url for this web property. */
		websiteUrl?: string;
	}

	export interface WebpropertyChildLink {

		/** Link to the list of views (profiles) for this web property. */
		href?: string;

		/** Type of the parent link. Its value is "analytics#profiles". */
		type?: string;
	}

	export interface WebpropertyParentLink {

		/** Link to the account for this web property. */
		href?: string;

		/** Type of the parent link. Its value is "analytics#account". */
		type?: string;
	}

	export interface WebpropertyPermissions {

		/** All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent account. */
		effective?: Array<string>;
	}


	/** JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields. */
	export interface AccountTreeRequest {
		accountName?: string;

		/** Resource type for account ticket. */
		kind?: string;
		profileName?: string;
		timezone?: string;
		webpropertyName?: string;
		websiteUrl?: string;
	}


	/** JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile). */
	export interface AccountTreeResponse {

		/** JSON template for Analytics account entry. */
		account?: Account;

		/** Resource type for account ticket. */
		kind?: string;

		/** JSON template for an Analytics view (profile). */
		profile?: Profile;

		/** JSON template for an Analytics web property. */
		webproperty?: Webproperty;
	}


	/** An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account. */
	export interface Accounts {

		/** A list of accounts. */
		items?: Array<Account>;

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Next link for this account collection. */
		nextLink?: string;

		/** Previous link for this account collection. */
		previousLink?: string;

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for an Google Ads account. */
	export interface AdWordsAccount {

		/** True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation. */
		autoTaggingEnabled?: boolean;

		/** Customer ID. This field is required when creating a Google Ads link. */
		customerId?: string;

		/** Resource type for Google Ads account. */
		kind?: string;
	}


	/** Request template for the delete upload data request. */
	export interface AnalyticsDataimportDeleteUploadDataRequest {

		/** A list of upload UIDs. */
		customDataImportUids?: Array<string>;
	}


	/** JSON template for a metadata column. */
	export interface Column {

		/** Map of attribute name and value for this column. */
		attributes?: {[id: string]: any };

		/** Column id. */
		id?: string;

		/** Resource type for Analytics column. */
		kind?: string;
	}


	/** Lists columns (dimensions and metrics) for a particular report type. */
	export interface Columns {

		/** List of attributes names returned by columns. */
		attributeNames?: Array<string>;

		/** Etag of collection. This etag can be compared with the last response etag to check if response has changed. */
		etag?: string;

		/** List of columns for a report type. */
		items?: Array<Column>;

		/** Collection type. */
		kind?: string;

		/** Total number of columns returned in the response. */
		totalResults?: number;
	}


	/** JSON template for an Analytics custom data source. */
	export interface CustomDataSource {

		/** Account ID to which this custom data source belongs. */
		accountId?: string;
		childLink?: CustomDataSourceChildLink;

		/** Time this custom data source was created. */
		created?: Date;

		/** Description of custom data source. */
		description?: string;

		/** Custom data source ID. */
		id?: string;
		importBehavior?: string;

		/** Resource type for Analytics custom data source. */
		kind?: string;

		/** Name of this custom data source. */
		name?: string;

		/** Parent link for this custom data source. Points to the web property to which this custom data source belongs. */
		parentLink?: CustomDataSourceParentLink;

		/** IDs of views (profiles) linked to the custom data source. */
		profilesLinked?: Array<string>;

		/** Collection of schema headers of the custom data source. */
		schema?: Array<string>;

		/** Link for this Analytics custom data source. */
		selfLink?: string;

		/** Type of the custom data source. */
		type?: string;

		/** Time this custom data source was last modified. */
		updated?: Date;

		/** Upload type of the custom data source. */
		uploadType?: string;

		/** Web property ID of the form UA-XXXXX-YY to which this custom data source belongs. */
		webPropertyId?: string;
	}

	export interface CustomDataSourceChildLink {

		/** Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source. */
		href?: string;

		/** Value is "analytics#dailyUploads". Value is "analytics#uploads". */
		type?: string;
	}

	export interface CustomDataSourceParentLink {

		/** Link to the web property to which this custom data source belongs. */
		href?: string;

		/** Value is "analytics#webproperty". */
		type?: string;
	}


	/** Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source. */
	export interface CustomDataSources {

		/** Collection of custom data sources. */
		items?: Array<CustomDataSource>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this custom data source collection. */
		nextLink?: string;

		/** Link to previous page for this custom data source collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for Analytics Custom Dimension. */
	export interface CustomDimension {

		/** Account ID. */
		accountId?: string;

		/** Boolean indicating whether the custom dimension is active. */
		active?: boolean;

		/** Time the custom dimension was created. */
		created?: Date;

		/** Custom dimension ID. */
		id?: string;

		/** Index of the custom dimension. */
		index?: number;

		/** Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field. */
		kind?: string;

		/** Name of the custom dimension. */
		name?: string;

		/** Parent link for the custom dimension. Points to the property to which the custom dimension belongs. */
		parentLink?: CustomDimensionParentLink;

		/** Scope of the custom dimension: HIT, SESSION, USER or PRODUCT. */
		scope?: string;

		/** Link for the custom dimension */
		selfLink?: string;

		/** Time the custom dimension was last modified. */
		updated?: Date;

		/** Property ID. */
		webPropertyId?: string;
	}

	export interface CustomDimensionParentLink {

		/** Link to the property to which the custom dimension belongs. */
		href?: string;

		/** Type of the parent link. Set to "analytics#webproperty". */
		type?: string;
	}


	/** A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension. */
	export interface CustomDimensions {

		/** Collection of custom dimensions. */
		items?: Array<CustomDimension>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this custom dimension collection. */
		nextLink?: string;

		/** Link to previous page for this custom dimension collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for Analytics Custom Metric. */
	export interface CustomMetric {

		/** Account ID. */
		accountId?: string;

		/** Boolean indicating whether the custom metric is active. */
		active?: boolean;

		/** Time the custom metric was created. */
		created?: Date;

		/** Custom metric ID. */
		id?: string;

		/** Index of the custom metric. */
		index?: number;

		/** Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field. */
		kind?: string;

		/** Max value of custom metric. */
		max_value?: string;

		/** Min value of custom metric. */
		min_value?: string;

		/** Name of the custom metric. */
		name?: string;

		/** Parent link for the custom metric. Points to the property to which the custom metric belongs. */
		parentLink?: CustomMetricParentLink;

		/** Scope of the custom metric: HIT or PRODUCT. */
		scope?: string;

		/** Link for the custom metric */
		selfLink?: string;

		/** Data type of custom metric. */
		type?: string;

		/** Time the custom metric was last modified. */
		updated?: Date;

		/** Property ID. */
		webPropertyId?: string;
	}

	export interface CustomMetricParentLink {

		/** Link to the property to which the custom metric belongs. */
		href?: string;

		/** Type of the parent link. Set to "analytics#webproperty". */
		type?: string;
	}


	/** A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric. */
	export interface CustomMetrics {

		/** Collection of custom metrics. */
		items?: Array<CustomMetric>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this custom metric collection. */
		nextLink?: string;

		/** Link to previous page for this custom metric collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for Analytics Entity Google Ads Link. */
	export interface EntityAdWordsLink {

		/** A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty. */
		adWordsAccounts?: Array<AdWordsAccount>;

		/** Web property being linked. */
		entity?: EntityAdWordsLinkEntity;

		/** Entity Google Ads link ID */
		id?: string;

		/** Resource type for entity Google Ads link. */
		kind?: string;

		/** Name of the link. This field is required when creating a Google Ads link. */
		name?: string;

		/** IDs of linked Views (Profiles) represented as strings. */
		profileIds?: Array<string>;

		/** URL link for this Google Analytics - Google Ads link. */
		selfLink?: string;
	}

	export interface EntityAdWordsLinkEntity {

		/** JSON template for a web property reference. */
		webPropertyRef?: WebPropertyRef;
	}


	/** JSON template for a web property reference. */
	export interface WebPropertyRef {

		/** Account ID to which this web property belongs. */
		accountId?: string;

		/** Link for this web property. */
		href?: string;

		/** Web property ID of the form UA-XXXXX-YY. */
		id?: string;

		/** Internal ID for this web property. */
		internalWebPropertyId?: string;

		/** Analytics web property reference. */
		kind?: string;

		/** Name of this web property. */
		name?: string;
	}


	/** An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link. */
	export interface EntityAdWordsLinks {

		/** A list of entity Google Ads links. */
		items?: Array<EntityAdWordsLink>;

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Next link for this Google Ads link collection. */
		nextLink?: string;

		/** Previous link for this Google Ads link collection. */
		previousLink?: string;

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;
	}


	/** JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity. */
	export interface EntityUserLink {

		/** Entity for this link. It can be an account, a web property, or a view (profile). */
		entity?: EntityUserLinkEntity;

		/** Entity user link ID */
		id?: string;

		/** Resource type for entity user link. */
		kind?: string;

		/** Permissions the user has for this entity. */
		permissions?: EntityUserLinkPermissions;

		/** Self link for this resource. */
		selfLink?: string;

		/** JSON template for a user reference. */
		userRef?: UserRef;
	}

	export interface EntityUserLinkEntity {

		/** JSON template for a linked account. */
		accountRef?: AccountRef;

		/** JSON template for a linked view (profile). */
		profileRef?: ProfileRef;

		/** JSON template for a web property reference. */
		webPropertyRef?: WebPropertyRef;
	}


	/** JSON template for a linked view (profile). */
	export interface ProfileRef {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string;

		/** Link for this view (profile). */
		href?: string;

		/** View (Profile) ID. */
		id?: string;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string;

		/** Analytics view (profile) reference. */
		kind?: string;

		/** Name of this view (profile). */
		name?: string;

		/** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
		webPropertyId?: string;
	}

	export interface EntityUserLinkPermissions {

		/** Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only. */
		effective?: Array<string>;

		/** Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable. */
		local?: Array<string>;
	}


	/** JSON template for a user reference. */
	export interface UserRef {

		/** Email ID of this user. */
		email?: string;

		/** User ID. */
		id?: string;
		kind?: string;
	}


	/** An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link. */
	export interface EntityUserLinks {

		/** A list of entity user links. */
		items?: Array<EntityUserLink>;

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Next link for this account collection. */
		nextLink?: string;

		/** Previous link for this account collection. */
		previousLink?: string;

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;
	}


	/** JSON template for Analytics experiment resource. */
	export interface Experiment {

		/** Account ID to which this experiment belongs. This field is read-only. */
		accountId?: string;

		/** Time the experiment was created. This field is read-only. */
		created?: Date;

		/** Notes about this experiment. */
		description?: string;

		/** If true, the end user will be able to edit the experiment via the Google Analytics user interface. */
		editableInGaUi?: boolean;

		/** The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only. */
		endTime?: Date;

		/** Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED. */
		equalWeighting?: boolean;

		/** Experiment ID. Required for patch and update. Disallowed for create. */
		id?: string;

		/** Internal ID for the web property to which this experiment belongs. This field is read-only. */
		internalWebPropertyId?: string;

		/** Resource type for an Analytics experiment. This field is read-only. */
		kind?: string;

		/** An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
		minimumExperimentLengthInDays?: number;

		/** Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment. */
		name?: string;

		/** The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API". */
		objectiveMetric?: string;

		/** Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED". */
		optimizationType?: string;

		/** Parent link for an experiment. Points to the view (profile) to which this experiment belongs. */
		parentLink?: ExperimentParentLink;

		/** View (Profile) ID to which this experiment belongs. This field is read-only. */
		profileId?: string;

		/** Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only. */
		reasonExperimentEnded?: string;

		/** Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED. */
		rewriteVariationUrlsAsOriginal?: boolean;

		/** Link for this experiment. This field is read-only. */
		selfLink?: string;

		/**
		 * The framework used to serve the experiment variations and evaluate the results. One of:
		 * - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.
		 * - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.
		 * - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.
		 */
		servingFramework?: string;

		/** The snippet of code to include on the control page(s). This field is read-only. */
		snippet?: string;

		/** The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only. */
		startTime?: Date;

		/** Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment. */
		status?: string;

		/** A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
		trafficCoverage?: number;

		/** Time the experiment was last modified. This field is read-only. */
		updated?: Date;

		/** Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING. */
		ExperimentVariations?: Array<ExperimentVariations>;

		/** Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only. */
		webPropertyId?: string;

		/** A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED. */
		winnerConfidenceLevel?: number;

		/** Boolean specifying whether a winner has been found for this experiment. This field is read-only. */
		winnerFound?: boolean;
	}

	export interface ExperimentParentLink {

		/** Link to the view (profile) to which this experiment belongs. This field is read-only. */
		href?: string;

		/** Value is "analytics#profile". This field is read-only. */
		type?: string;
	}

	export interface ExperimentVariations {

		/** The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED. */
		name?: string;

		/** Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED. */
		status?: string;

		/** The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED. */
		url?: string;

		/** Weight that this variation should receive. Only present if the experiment is running. This field is read-only. */
		weight?: number;

		/** True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only. */
		won?: boolean;
	}


	/** An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment. */
	export interface Experiments {

		/** A list of experiments. */
		items?: Array<Experiment>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this experiment collection. */
		nextLink?: string;

		/** Link to previous page for this experiment collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for an Analytics account filter. */
	export interface Filter {

		/** Account ID to which this filter belongs. */
		accountId?: string;

		/** Details for the filter of the type ADVANCED. */
		advancedDetails?: FilterAdvancedDetails;

		/** Time this filter was created. */
		created?: Date;

		/** JSON template for an Analytics filter expression. */
		excludeDetails?: FilterExpression;

		/** Filter ID. */
		id?: string;

		/** JSON template for an Analytics filter expression. */
		includeDetails?: FilterExpression;

		/** Resource type for Analytics filter. */
		kind?: string;

		/** Details for the filter of the type LOWER. */
		lowercaseDetails?: FilterLowercaseDetails;

		/** Name of this filter. */
		name?: string;

		/** Parent link for this filter. Points to the account to which this filter belongs. */
		parentLink?: FilterParentLink;

		/** Details for the filter of the type SEARCH_AND_REPLACE. */
		searchAndReplaceDetails?: FilterSearchAndReplaceDetails;

		/** Link for this filter. */
		selfLink?: string;

		/** Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED. */
		type?: string;

		/** Time this filter was last modified. */
		updated?: Date;

		/** Details for the filter of the type UPPER. */
		uppercaseDetails?: FilterUppercaseDetails;
	}

	export interface FilterAdvancedDetails {

		/** Indicates if the filter expressions are case sensitive. */
		caseSensitive?: boolean;

		/** Expression to extract from field A. */
		extractA?: string;

		/** Expression to extract from field B. */
		extractB?: string;

		/** Field A. */
		fieldA?: string;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldAIndex?: number;

		/** Indicates if field A is required to match. */
		fieldARequired?: boolean;

		/** Field B. */
		fieldB?: string;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldBIndex?: number;

		/** Indicates if field B is required to match. */
		fieldBRequired?: boolean;

		/** Expression used to construct the output value. */
		outputConstructor?: string;

		/** Output field. */
		outputToField?: string;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		outputToFieldIndex?: number;

		/** Indicates if the existing value of the output field, if any, should be overridden by the output expression. */
		overrideOutputField?: boolean;
	}


	/** JSON template for an Analytics filter expression. */
	export interface FilterExpression {

		/** Determines if the filter is case sensitive. */
		caseSensitive?: boolean;

		/** Filter expression value */
		expressionValue?: string;

		/**
		 * Field to filter. Possible values:
		 * - Content and Traffic
		 * - PAGE_REQUEST_URI,
		 * - PAGE_HOSTNAME,
		 * - PAGE_TITLE,
		 * - REFERRAL,
		 * - COST_DATA_URI (Campaign target URL),
		 * - HIT_TYPE,
		 * - INTERNAL_SEARCH_TERM,
		 * - INTERNAL_SEARCH_TYPE,
		 * - SOURCE_PROPERTY_TRACKING_ID,
		 * - Campaign or AdGroup
		 * - CAMPAIGN_SOURCE,
		 * - CAMPAIGN_MEDIUM,
		 * - CAMPAIGN_NAME,
		 * - CAMPAIGN_AD_GROUP,
		 * - CAMPAIGN_TERM,
		 * - CAMPAIGN_CONTENT,
		 * - CAMPAIGN_CODE,
		 * - CAMPAIGN_REFERRAL_PATH,
		 * - E-Commerce
		 * - TRANSACTION_COUNTRY,
		 * - TRANSACTION_REGION,
		 * - TRANSACTION_CITY,
		 * - TRANSACTION_AFFILIATION (Store or order location),
		 * - ITEM_NAME,
		 * - ITEM_CODE,
		 * - ITEM_VARIATION,
		 * - TRANSACTION_ID,
		 * - TRANSACTION_CURRENCY_CODE,
		 * - PRODUCT_ACTION_TYPE,
		 * - Audience/Users
		 * - BROWSER,
		 * - BROWSER_VERSION,
		 * - BROWSER_SIZE,
		 * - PLATFORM,
		 * - PLATFORM_VERSION,
		 * - LANGUAGE,
		 * - SCREEN_RESOLUTION,
		 * - SCREEN_COLORS,
		 * - JAVA_ENABLED (Boolean Field),
		 * - FLASH_VERSION,
		 * - GEO_SPEED (Connection speed),
		 * - VISITOR_TYPE,
		 * - GEO_ORGANIZATION (ISP organization),
		 * - GEO_DOMAIN,
		 * - GEO_IP_ADDRESS,
		 * - GEO_IP_VERSION,
		 * - Location
		 * - GEO_COUNTRY,
		 * - GEO_REGION,
		 * - GEO_CITY,
		 * - Event
		 * - EVENT_CATEGORY,
		 * - EVENT_ACTION,
		 * - EVENT_LABEL,
		 * - Other
		 * - CUSTOM_FIELD_1,
		 * - CUSTOM_FIELD_2,
		 * - USER_DEFINED_VALUE,
		 * - Application
		 * - APP_ID,
		 * - APP_INSTALLER_ID,
		 * - APP_NAME,
		 * - APP_VERSION,
		 * - SCREEN,
		 * - IS_APP (Boolean Field),
		 * - IS_FATAL_EXCEPTION (Boolean Field),
		 * - EXCEPTION_DESCRIPTION,
		 * - Mobile device
		 * - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile),
		 * - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet),
		 * - DEVICE_CATEGORY,
		 * - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field),
		 * - MOBILE_HAS_NFC_SUPPORT (Boolean Field),
		 * - MOBILE_HAS_CELLULAR_RADIO (Boolean Field),
		 * - MOBILE_HAS_WIFI_SUPPORT (Boolean Field),
		 * - MOBILE_BRAND_NAME,
		 * - MOBILE_MODEL_NAME,
		 * - MOBILE_MARKETING_NAME,
		 * - MOBILE_POINTING_METHOD,
		 * - Social
		 * - SOCIAL_NETWORK,
		 * - SOCIAL_ACTION,
		 * - SOCIAL_ACTION_TARGET,
		 * - Custom dimension
		 * - CUSTOM_DIMENSION (See accompanying field index),
		 */
		field?: string;

		/** The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION. */
		fieldIndex?: number;

		/** Kind value for filter expression */
		kind?: string;

		/** Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES. */
		matchType?: string;
	}

	export interface FilterLowercaseDetails {

		/** Field to use in the filter. */
		field?: string;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex?: number;
	}

	export interface FilterParentLink {

		/** Link to the account to which this filter belongs. */
		href?: string;

		/** Value is "analytics#account". */
		type?: string;
	}

	export interface FilterSearchAndReplaceDetails {

		/** Determines if the filter is case sensitive. */
		caseSensitive?: boolean;

		/** Field to use in the filter. */
		field?: string;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex?: number;

		/** Term to replace the search term with. */
		replaceString?: string;

		/** Term to search. */
		searchString?: string;
	}

	export interface FilterUppercaseDetails {

		/** Field to use in the filter. */
		field?: string;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex?: number;
	}


	/** JSON template for a profile filter link. */
	export interface FilterRef {

		/** Account ID to which this filter belongs. */
		accountId?: string;

		/** Link for this filter. */
		href?: string;

		/** Filter ID. */
		id?: string;

		/** Kind value for filter reference. */
		kind?: string;

		/** Name of this filter. */
		name?: string;
	}


	/** A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter. */
	export interface Filters {

		/** A list of filters. */
		items?: Array<Filter>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this filter collection. */
		nextLink?: string;

		/** Link to previous page for this filter collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** Analytics data for a given view (profile). */
	export interface GaData {

		/** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
		GaDataColumnHeaders?: Array<GaDataColumnHeaders>;

		/** Determines if Analytics data contains samples. */
		containsSampledData?: boolean;

		/** The last refreshed time in seconds for Analytics data. */
		dataLastRefreshed?: string;
		dataTable?: GaDataDataTable;

		/** Unique ID for this data response. */
		id?: string;

		/** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Resource type. */
		kind?: string;

		/** Link to next page for this Analytics data query. */
		nextLink?: string;

		/** Link to previous page for this Analytics data query. */
		previousLink?: string;

		/** Information for the view (profile), for which the Analytics data was requested. */
		profileInfo?: GaDataProfileInfo;

		/** Analytics data request query parameters. */
		query?: GaDataQuery;

		/** Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
		rows?: Array<string>;

		/** The number of samples used to calculate the result. */
		sampleSize?: string;

		/** Total size of the sample space from which the samples were selected. */
		sampleSpace?: string;

		/** Link to this page. */
		selfLink?: string;

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults?: number;

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults?: {[id: string]: any };
	}

	export interface GaDataColumnHeaders {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType?: string;

		/** Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc. */
		dataType?: string;

		/** Column name. */
		name?: string;
	}

	export interface GaDataDataTable {
		GaDataDataTableCols?: Array<GaDataDataTableCols>;
		GaDataDataTableRows?: Array<GaDataDataTableRows>;
	}

	export interface GaDataDataTableCols {
		id?: string;
		label?: string;
		type?: string;
	}

	export interface GaDataDataTableRows {
		GaDataDataTableRowsC?: Array<GaDataDataTableRowsC>;
	}

	export interface GaDataDataTableRowsC {
		v?: string;
	}

	export interface GaDataProfileInfo {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string;

		/** View (Profile) ID. */
		profileId?: string;

		/** View (Profile) name. */
		profileName?: string;

		/** Table ID for view (profile). */
		tableId?: string;

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId?: string;
	}

	export interface GaDataQuery {

		/** List of analytics dimensions. */
		dimensions?: string;

		/** End date. */
		end_date?: string;

		/** Comma-separated list of dimension or metric filters. */
		filters?: string;

		/** Unique table ID. */
		ids?: string;

		/** Maximum results per page. */
		max_results?: number;

		/** List of analytics metrics. */
		metrics?: Array<string>;

		/** Desired sampling level */
		samplingLevel?: string;

		/** Analytics advanced segment. */
		segment?: string;

		/** List of dimensions or metrics based on which Analytics data is sorted. */
		sort?: Array<string>;

		/** Start date. */
		start_date?: string;

		/** Start index. */
		start_index?: number;
	}


	/** JSON template for Analytics goal resource. */
	export interface Goal {

		/** Account ID to which this goal belongs. */
		accountId?: string;

		/** Determines whether this goal is active. */
		active?: boolean;

		/** Time this goal was created. */
		created?: Date;

		/** Details for the goal of the type EVENT. */
		eventDetails?: GoalEventDetails;

		/** Goal ID. */
		id?: string;

		/** Internal ID for the web property to which this goal belongs. */
		internalWebPropertyId?: string;

		/** Resource type for an Analytics goal. */
		kind?: string;

		/** Goal name. */
		name?: string;

		/** Parent link for a goal. Points to the view (profile) to which this goal belongs. */
		parentLink?: GoalParentLink;

		/** View (Profile) ID to which this goal belongs. */
		profileId?: string;

		/** Link for this goal. */
		selfLink?: string;

		/** Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT. */
		type?: string;

		/** Time this goal was last modified. */
		updated?: Date;

		/** Details for the goal of the type URL_DESTINATION. */
		urlDestinationDetails?: GoalUrlDestinationDetails;

		/** Goal value. */
		value?: number;

		/** Details for the goal of the type VISIT_NUM_PAGES. */
		visitNumPagesDetails?: GoalVisitNumPagesDetails;

		/** Details for the goal of the type VISIT_TIME_ON_SITE. */
		visitTimeOnSiteDetails?: GoalVisitTimeOnSiteDetails;

		/** Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY. */
		webPropertyId?: string;
	}

	export interface GoalEventDetails {

		/** List of event conditions. */
		GoalEventDetailsEventConditions?: Array<GoalEventDetailsEventConditions>;

		/** Determines if the event value should be used as the value for this goal. */
		useEventValue?: boolean;
	}

	export interface GoalEventDetailsEventConditions {

		/** Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL. */
		comparisonType?: string;

		/** Value used for this comparison. */
		comparisonValue?: string;

		/** Expression used for this match. */
		expression?: string;

		/** Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT. */
		matchType?: string;

		/** Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE. */
		type?: string;
	}

	export interface GoalParentLink {

		/** Link to the view (profile) to which this goal belongs. */
		href?: string;

		/** Value is "analytics#profile". */
		type?: string;
	}

	export interface GoalUrlDestinationDetails {

		/** Determines if the goal URL must exactly match the capitalization of visited URLs. */
		caseSensitive?: boolean;

		/** Determines if the first step in this goal is required. */
		firstStepRequired?: boolean;

		/** Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX. */
		matchType?: string;

		/** List of steps configured for this goal funnel. */
		GoalUrlDestinationDetailsSteps?: Array<GoalUrlDestinationDetailsSteps>;

		/** URL for this goal. */
		url?: string;
	}

	export interface GoalUrlDestinationDetailsSteps {

		/** Step name. */
		name?: string;

		/** Step number. */
		number?: number;

		/** URL for this step. */
		url?: string;
	}

	export interface GoalVisitNumPagesDetails {

		/** Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL. */
		comparisonType?: string;

		/** Value used for this comparison. */
		comparisonValue?: string;
	}

	export interface GoalVisitTimeOnSiteDetails {

		/** Type of comparison. Possible values are LESS_THAN or GREATER_THAN. */
		comparisonType?: string;

		/** Value used for this comparison. */
		comparisonValue?: string;
	}


	/** A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal. */
	export interface Goals {

		/** A list of goals. */
		items?: Array<Goal>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this goal collection. */
		nextLink?: string;

		/** Link to previous page for this goal collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for a hash Client Id request resource. */
	export interface HashClientIdRequest {
		clientId?: string;
		kind?: string;
		webPropertyId?: string;
	}


	/** JSON template for a hash Client Id response resource. */
	export interface HashClientIdResponse {
		clientId?: string;
		hashedClientId?: string;
		kind?: string;
		webPropertyId?: string;
	}


	/** JSON template for an Analytics Remarketing Include Conditions. */
	export interface IncludeConditions {

		/** The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience. */
		daysToLookBack?: number;

		/** Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577 */
		isSmartList?: boolean;

		/** Resource type for include conditions. */
		kind?: string;

		/** Number of days (in the range 1 to 540) a user remains in the audience. */
		membershipDurationDays?: number;

		/** The segment condition that will cause a user to be added to an audience. */
		segment?: string;
	}


	/** JSON template for an Analytics Remarketing Audience Foreign Link. */
	export interface LinkedForeignAccount {

		/** Account ID to which this linked foreign account belongs. */
		accountId?: string;

		/** Boolean indicating whether this is eligible for search. */
		eligibleForSearch?: boolean;

		/** Entity ad account link ID. */
		id?: string;

		/** Internal ID for the web property to which this linked foreign account belongs. */
		internalWebPropertyId?: string;

		/** Resource type for linked foreign account. */
		kind?: string;

		/** The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX. */
		linkedAccountId?: string;

		/** Remarketing audience ID to which this linked foreign account belongs. */
		remarketingAudienceId?: string;

		/** The status of this foreign account link. */
		status?: string;

		/** The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`. */
		type?: string;

		/** Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs. */
		webPropertyId?: string;
	}


	/** Multi-Channel Funnels data for a given view (profile). */
	export interface McfData {

		/** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
		McfDataColumnHeaders?: Array<McfDataColumnHeaders>;

		/** Determines if the Analytics data contains sampled data. */
		containsSampledData?: boolean;

		/** Unique ID for this data response. */
		id?: string;

		/** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Resource type. */
		kind?: string;

		/** Link to next page for this Analytics data query. */
		nextLink?: string;

		/** Link to previous page for this Analytics data query. */
		previousLink?: string;

		/** Information for the view (profile), for which the Analytics data was requested. */
		profileInfo?: McfDataProfileInfo;

		/** Analytics data request query parameters. */
		query?: McfDataQuery;

		/** Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
		rows?: Array<string>;

		/** The number of samples used to calculate the result. */
		sampleSize?: string;

		/** Total size of the sample space from which the samples were selected. */
		sampleSpace?: string;

		/** Link to this page. */
		selfLink?: string;

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults?: number;

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults?: {[id: string]: any };
	}

	export interface McfDataColumnHeaders {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType?: string;

		/** Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc. */
		dataType?: string;

		/** Column name. */
		name?: string;
	}

	export interface McfDataProfileInfo {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string;

		/** View (Profile) ID. */
		profileId?: string;

		/** View (Profile) name. */
		profileName?: string;

		/** Table ID for view (profile). */
		tableId?: string;

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId?: string;
	}

	export interface McfDataQuery {

		/** List of analytics dimensions. */
		dimensions?: string;

		/** End date. */
		end_date?: string;

		/** Comma-separated list of dimension or metric filters. */
		filters?: string;

		/** Unique table ID. */
		ids?: string;

		/** Maximum results per page. */
		max_results?: number;

		/** List of analytics metrics. */
		metrics?: Array<string>;

		/** Desired sampling level */
		samplingLevel?: string;

		/** Analytics advanced segment. */
		segment?: string;

		/** List of dimensions or metrics based on which Analytics data is sorted. */
		sort?: Array<string>;

		/** Start date. */
		start_date?: string;

		/** Start index. */
		start_index?: number;
	}


	/** JSON template for an Analytics profile filter link. */
	export interface ProfileFilterLink {

		/** JSON template for a profile filter link. */
		filterRef?: FilterRef;

		/** Profile filter link ID. */
		id?: string;

		/** Resource type for Analytics filter. */
		kind?: string;

		/** JSON template for a linked view (profile). */
		profileRef?: ProfileRef;

		/**
		 * The rank of this profile filter link relative to the other filters linked to the same profile.
		 * For readonly (i.e., list and get) operations, the rank always starts at 1.
		 * For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.
		 */
		rank?: number;

		/** Link for this profile filter link. */
		selfLink?: string;
	}


	/** A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link. */
	export interface ProfileFilterLinks {

		/** A list of profile filter links. */
		items?: Array<ProfileFilterLink>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this profile filter link collection. */
		nextLink?: string;

		/** Link to previous page for this profile filter link collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile). */
	export interface Profiles {

		/** A list of views (profiles). */
		items?: Array<Profile>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this view (profile) collection. */
		nextLink?: string;

		/** Link to previous page for this view (profile) collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** Real time data for a given view (profile). */
	export interface RealtimeData {

		/** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
		RealtimeDataColumnHeaders?: Array<RealtimeDataColumnHeaders>;

		/** Unique ID for this data response. */
		id?: string;

		/** Resource type. */
		kind?: string;

		/** Information for the view (profile), for which the real time data was requested. */
		profileInfo?: RealtimeDataProfileInfo;

		/** Real time data request query parameters. */
		query?: RealtimeDataQuery;

		/** Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
		rows?: Array<string>;

		/** Link to this page. */
		selfLink?: string;

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults?: number;

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults?: {[id: string]: any };
	}

	export interface RealtimeDataColumnHeaders {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType?: string;

		/** Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc. */
		dataType?: string;

		/** Column name. */
		name?: string;
	}

	export interface RealtimeDataProfileInfo {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string;

		/** View (Profile) ID. */
		profileId?: string;

		/** View (Profile) name. */
		profileName?: string;

		/** Table ID for view (profile). */
		tableId?: string;

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId?: string;
	}

	export interface RealtimeDataQuery {

		/** List of real time dimensions. */
		dimensions?: string;

		/** Comma-separated list of dimension or metric filters. */
		filters?: string;

		/** Unique table ID. */
		ids?: string;

		/** Maximum results per page. */
		max_results?: number;

		/** List of real time metrics. */
		metrics?: Array<string>;

		/** List of dimensions or metrics based on which real time data is sorted. */
		sort?: Array<string>;
	}


	/** JSON template for an Analytics remarketing audience. */
	export interface RemarketingAudience {

		/** Account ID to which this remarketing audience belongs. */
		accountId?: string;

		/** The simple audience definition that will cause a user to be added to an audience. */
		audienceDefinition?: RemarketingAudienceAudienceDefinition;

		/** The type of audience, either SIMPLE or STATE_BASED. */
		audienceType?: string;

		/** Time this remarketing audience was created. */
		created?: Date;

		/** The description of this remarketing audience. */
		description?: string;

		/** Remarketing Audience ID. */
		id?: string;

		/** Internal ID for the web property to which this remarketing audience belongs. */
		internalWebPropertyId?: string;

		/** Collection type. */
		kind?: string;

		/** The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently. */
		linkedAdAccounts?: Array<LinkedForeignAccount>;

		/** The views (profiles) that this remarketing audience is linked to. */
		linkedViews?: Array<string>;

		/** The name of this remarketing audience. */
		name?: string;

		/** A state based audience definition that will cause a user to be added or removed from an audience. */
		stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;

		/** Time this remarketing audience was last modified. */
		updated?: Date;

		/** Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs. */
		webPropertyId?: string;
	}

	export interface RemarketingAudienceAudienceDefinition {

		/** JSON template for an Analytics Remarketing Include Conditions. */
		includeConditions?: IncludeConditions;
	}

	export interface RemarketingAudienceStateBasedAudienceDefinition {

		/** Defines the conditions to exclude users from the audience. */
		excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;

		/** JSON template for an Analytics Remarketing Include Conditions. */
		includeConditions?: IncludeConditions;
	}

	export interface RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions {

		/** Whether to make the exclusion TEMPORARY or PERMANENT. */
		exclusionDuration?: string;

		/** The segment condition that will cause a user to be removed from an audience. */
		segment?: string;
	}


	/** A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience. */
	export interface RemarketingAudiences {

		/** A list of remarketing audiences. */
		items?: Array<RemarketingAudience>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this remarketing audience collection. */
		nextLink?: string;

		/** Link to previous page for this view (profile) collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for an Analytics segment. */
	export interface Segment {

		/** Time the segment was created. */
		created?: Date;

		/** Segment definition. */
		definition?: string;

		/** Segment ID. */
		id?: string;

		/** Resource type for Analytics segment. */
		kind?: string;

		/** Segment name. */
		name?: string;

		/** Segment ID. Can be used with the 'segment' parameter in Core Reporting API. */
		segmentId?: string;

		/** Link for this segment. */
		selfLink?: string;

		/** Type for a segment. Possible values are "BUILT_IN" or "CUSTOM". */
		type?: string;

		/** Time the segment was last modified. */
		updated?: Date;
	}


	/** An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment. */
	export interface Segments {

		/** A list of segments. */
		items?: Array<Segment>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type for segments. */
		kind?: string;

		/** Link to next page for this segment collection. */
		nextLink?: string;

		/** Link to previous page for this segment collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** JSON template for Analytics unsampled report resource. */
	export interface UnsampledReport {

		/** Account ID to which this unsampled report belongs. */
		accountId?: string;

		/** Download details for a file stored in Google Cloud Storage. */
		cloudStorageDownloadDetails?: UnsampledReportCloudStorageDownloadDetails;

		/** Time this unsampled report was created. */
		created?: Date;

		/** The dimensions for the unsampled report. */
		dimensions?: string;

		/** The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field. */
		downloadType?: string;

		/** Download details for a file stored in Google Drive. */
		driveDownloadDetails?: UnsampledReportDriveDownloadDetails;

		/** The end date for the unsampled report. */
		end_date?: string;

		/** The filters for the unsampled report. */
		filters?: string;

		/** Unsampled report ID. */
		id?: string;

		/** Resource type for an Analytics unsampled report. */
		kind?: string;

		/** The metrics for the unsampled report. */
		metrics?: string;

		/** View (Profile) ID to which this unsampled report belongs. */
		profileId?: string;

		/** The segment for the unsampled report. */
		segment?: string;

		/** Link for this unsampled report. */
		selfLink?: string;

		/** The start date for the unsampled report. */
		start_date?: string;

		/** Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED. */
		status?: string;

		/** Title of the unsampled report. */
		title?: string;

		/** Time this unsampled report was last modified. */
		updated?: Date;

		/** Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY. */
		webPropertyId?: string;
	}

	export interface UnsampledReportCloudStorageDownloadDetails {

		/** Id of the bucket the file object is stored in. */
		bucketId?: string;

		/** Id of the file object containing the report data. */
		objectId?: string;
	}

	export interface UnsampledReportDriveDownloadDetails {

		/** Id of the document/file containing the report data. */
		documentId?: string;
	}


	/** An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report. */
	export interface UnsampledReports {

		/** A list of unsampled reports. */
		items?: Array<UnsampledReport>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this unsampled report collection. */
		nextLink?: string;

		/** Link to previous page for this unsampled report collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}


	/** Metadata returned for an upload operation. */
	export interface Upload {

		/** Account Id to which this upload belongs. */
		accountId?: string;

		/** Custom data source Id to which this data import belongs. */
		customDataSourceId?: string;

		/** Data import errors collection. */
		errors?: Array<string>;

		/** A unique ID for this upload. */
		id?: string;

		/** Resource type for Analytics upload. */
		kind?: string;

		/** Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED. */
		status?: string;

		/** Time this file is uploaded. */
		uploadTime?: Date;
	}


	/** Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload. */
	export interface Uploads {

		/** A list of uploads. */
		items?: Array<Upload>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this upload collection. */
		nextLink?: string;

		/** Link to previous page for this upload collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults?: number;
	}


	/** JSON template for a user deletion request resource. */
	export interface UserDeletionRequest {

		/** This marks the point in time for which all user data before should be deleted */
		deletionRequestTime?: Date;

		/** Firebase Project Id */
		firebaseProjectId?: string;

		/** User ID. */
		id?: UserDeletionRequestId;

		/** Value is "analytics#userDeletionRequest". */
		kind?: string;

		/** Property ID */
		propertyId?: string;

		/** Web property ID of the form UA-XXXXX-YY. */
		webPropertyId?: string;
	}

	export interface UserDeletionRequestId {

		/** Type of user */
		type?: string;

		/** The User's id */
		userId?: string;
	}


	/** A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property. */
	export interface Webproperties {

		/** A list of web properties. */
		items?: Array<Webproperty>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number;

		/** Collection type. */
		kind?: string;

		/** Link to next page for this web property collection. */
		nextLink?: string;

		/** Link to previous page for this web property collection. */
		previousLink?: string;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number;

		/** Email ID of the authenticated user */
		username?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns Analytics data for a view (profile).
		 * Get data/ga
		 * @param {string} ids Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
		 * @param {string} start_date Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
		 * @param {string} end_date End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
		 * @param {string} metrics A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
		 * @param {string} dimensions A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
		 * @param {string} filters A comma-separated list of dimension or metric filters to be applied to Analytics data.
		 * @param {boolean} include_empty_rows The response will include empty rows if this parameter is set to true, the default is true
		 * @param {number} max_results The maximum number of entries to include in this feed.
		 * @param {Analytics_data_ga_getOutput} output The selected format for the response. Default format is JSON.
		 * @param {Analytics_data_ga_getSamplingLevel} samplingLevel The desired sampling level.
		 * @param {string} segment An Analytics segment to be applied to data.
		 * @param {string} sort A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_data_ga_get(ids: string, start_date: string, end_date: string, metrics: string, dimensions: string, filters: string, include_empty_rows: boolean, max_results: number, output: Analytics_data_ga_getOutput, samplingLevel: Analytics_data_ga_getSamplingLevel, segment: string, sort: string, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/ga?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&metrics=' + (metrics == null ? '' : encodeURIComponent(metrics)) + '&dimensions=' + (dimensions == null ? '' : encodeURIComponent(dimensions)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&include_empty_rows=' + include_empty_rows + '&max_results=' + max_results + '&output=' + output + '&samplingLevel=' + samplingLevel + '&segment=' + (segment == null ? '' : encodeURIComponent(segment)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns Analytics Multi-Channel Funnels data for a view (profile).
		 * Get data/mcf
		 * @param {string} ids Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
		 * @param {string} start_date Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
		 * @param {string} end_date End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
		 * @param {string} metrics A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
		 * @param {string} dimensions A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
		 * @param {string} filters A comma-separated list of dimension or metric filters to be applied to the Analytics data.
		 * @param {number} max_results The maximum number of entries to include in this feed.
		 * @param {Analytics_data_ga_getSamplingLevel} samplingLevel The desired sampling level.
		 * @param {string} sort A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_data_mcf_get(ids: string, start_date: string, end_date: string, metrics: string, dimensions: string, filters: string, max_results: number, samplingLevel: Analytics_data_ga_getSamplingLevel, sort: string, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/mcf?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&metrics=' + (metrics == null ? '' : encodeURIComponent(metrics)) + '&dimensions=' + (dimensions == null ? '' : encodeURIComponent(dimensions)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&max_results=' + max_results + '&samplingLevel=' + samplingLevel + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns real time data for a view (profile).
		 * Get data/realtime
		 * @param {string} ids Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
		 * @param {string} metrics A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
		 * @param {string} dimensions A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
		 * @param {string} filters A comma-separated list of dimension or metric filters to be applied to real time data.
		 * @param {number} max_results The maximum number of entries to include in this feed.
		 * @param {string} sort A comma-separated list of dimensions or metrics that determine the sort order for real time data.
		 * @return {void} Successful response
		 */
		Analytics_data_realtime_get(ids: string, metrics: string, dimensions: string, filters: string, max_results: number, sort: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/realtime?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&metrics=' + (metrics == null ? '' : encodeURIComponent(metrics)) + '&dimensions=' + (dimensions == null ? '' : encodeURIComponent(dimensions)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&max_results=' + max_results + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
		 * Get management/accountSummaries
		 * @param {number} max_results The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_accountSummaries_list(max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accountSummaries?max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all accounts to which the user has access.
		 * Get management/accounts
		 * @param {number} max_results The maximum number of accounts to include in this response.
		 * @param {number} start_index An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_accounts_list(max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts?max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists account-user links for a given account.
		 * Get management/accounts/{accountId}/entityUserLinks
		 * @param {string} accountId Account ID to retrieve the user links for.
		 * @param {number} max_results The maximum number of account-user links to include in this response.
		 * @param {number} start_index An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_accountUserLinks_list(accountId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/entityUserLinks&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new user to the given account.
		 * Post management/accounts/{accountId}/entityUserLinks
		 * @param {string} accountId Account ID to create the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_accountUserLinks_insert(accountId: string, requestBody: EntityUserLink): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/entityUserLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a user from the given account.
		 * Delete management/accounts/{accountId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to delete the user link for.
		 * @param {string} linkId Link ID to delete the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_accountUserLinks_delete(accountId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates permissions for an existing user on the given account.
		 * Put management/accounts/{accountId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to update the account-user link for.
		 * @param {string} linkId Link ID to update the account-user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_accountUserLinks_update(accountId: string, linkId: string, requestBody: EntityUserLink): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all filters for an account
		 * Get management/accounts/{accountId}/filters
		 * @param {string} accountId Account ID to retrieve filters for.
		 * @param {number} max_results The maximum number of filters to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_filters_list(accountId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new filter.
		 * Post management/accounts/{accountId}/filters
		 * @param {string} accountId Account ID to create filter for.
		 * @return {void} Successful response
		 */
		Analytics_management_filters_insert(accountId: string, requestBody: Filter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a filter.
		 * Delete management/accounts/{accountId}/filters/{filterId}
		 * @param {string} accountId Account ID to delete the filter for.
		 * @param {string} filterId ID of the filter to be deleted.
		 * @return {void} Successful response
		 */
		Analytics_management_filters_delete(accountId: string, filterId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters/' + (filterId == null ? '' : encodeURIComponent(filterId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns filters to which the user has access.
		 * Get management/accounts/{accountId}/filters/{filterId}
		 * @param {string} accountId Account ID to retrieve filters for.
		 * @param {string} filterId Filter ID to retrieve filters for.
		 * @return {void} Successful response
		 */
		Analytics_management_filters_get(accountId: string, filterId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters/' + (filterId == null ? '' : encodeURIComponent(filterId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing filter. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/filters/{filterId}
		 * @param {string} accountId Account ID to which the filter belongs.
		 * @param {string} filterId ID of the filter to be updated.
		 * @return {void} Successful response
		 */
		Analytics_management_filters_patch(accountId: string, filterId: string, requestBody: Filter): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters/' + (filterId == null ? '' : encodeURIComponent(filterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing filter.
		 * Put management/accounts/{accountId}/filters/{filterId}
		 * @param {string} accountId Account ID to which the filter belongs.
		 * @param {string} filterId ID of the filter to be updated.
		 * @return {void} Successful response
		 */
		Analytics_management_filters_update(accountId: string, filterId: string, requestBody: Filter): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters/' + (filterId == null ? '' : encodeURIComponent(filterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists web properties to which the user has access.
		 * Get management/accounts/{accountId}/webproperties
		 * @param {string} accountId Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
		 * @param {number} max_results The maximum number of web properties to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_webproperties_list(accountId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
		 * Post management/accounts/{accountId}/webproperties
		 * @param {string} accountId Account ID to create the web property for.
		 * @return {void} Successful response
		 */
		Analytics_management_webproperties_insert(accountId: string, requestBody: Webproperty): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a web property to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}
		 * @param {string} accountId Account ID to retrieve the web property for.
		 * @param {string} webPropertyId ID to retrieve the web property for.
		 * @return {void} Successful response
		 */
		Analytics_management_webproperties_get(accountId: string, webPropertyId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing web property. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}
		 * @param {string} accountId Account ID to which the web property belongs
		 * @param {string} webPropertyId Web property ID
		 * @return {void} Successful response
		 */
		Analytics_management_webproperties_patch(accountId: string, webPropertyId: string, requestBody: Webproperty): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing web property.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}
		 * @param {string} accountId Account ID to which the web property belongs
		 * @param {string} webPropertyId Web property ID
		 * @return {void} Successful response
		 */
		Analytics_management_webproperties_update(accountId: string, webPropertyId: string, requestBody: Webproperty): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List custom data sources to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources
		 * @param {string} accountId Account Id for the custom data sources to retrieve.
		 * @param {string} webPropertyId Web property Id for the custom data sources to retrieve.
		 * @param {number} max_results The maximum number of custom data sources to include in this response.
		 * @param {number} start_index A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_customDataSources_list(accountId: string, webPropertyId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete data associated with a previous upload.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData
		 * @param {string} accountId Account Id for the uploads to be deleted.
		 * @param {string} webPropertyId Web property Id for the uploads to be deleted.
		 * @param {string} customDataSourceId Custom data source Id for the uploads to be deleted.
		 * @return {void} Successful response
		 */
		Analytics_management_uploads_deleteUploadData(accountId: string, webPropertyId: string, customDataSourceId: string, requestBody: AnalyticsDataimportDeleteUploadDataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources/' + (customDataSourceId == null ? '' : encodeURIComponent(customDataSourceId)) + '/deleteUploadData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List uploads to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads
		 * @param {string} accountId Account Id for the uploads to retrieve.
		 * @param {string} webPropertyId Web property Id for the uploads to retrieve.
		 * @param {string} customDataSourceId Custom data source Id for uploads to retrieve.
		 * @param {number} max_results The maximum number of uploads to include in this response.
		 * @param {number} start_index A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_uploads_list(accountId: string, webPropertyId: string, customDataSourceId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources/' + (customDataSourceId == null ? '' : encodeURIComponent(customDataSourceId)) + '/uploads&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload data for a custom data source.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads
		 * @param {string} accountId Account Id associated with the upload.
		 * @param {string} webPropertyId Web property UA-string associated with the upload.
		 * @param {string} customDataSourceId Custom data source Id to which the data being uploaded belongs.
		 * @return {void} Successful response
		 */
		Analytics_management_uploads_uploadData(accountId: string, webPropertyId: string, customDataSourceId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources/' + (customDataSourceId == null ? '' : encodeURIComponent(customDataSourceId)) + '/uploads', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List uploads to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}
		 * @param {string} accountId Account Id for the upload to retrieve.
		 * @param {string} webPropertyId Web property Id for the upload to retrieve.
		 * @param {string} customDataSourceId Custom data source Id for upload to retrieve.
		 * @param {string} uploadId Upload Id to retrieve.
		 * @return {void} Successful response
		 */
		Analytics_management_uploads_get(accountId: string, webPropertyId: string, customDataSourceId: string, uploadId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources/' + (customDataSourceId == null ? '' : encodeURIComponent(customDataSourceId)) + '/uploads/' + (uploadId == null ? '' : encodeURIComponent(uploadId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists custom dimensions to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions
		 * @param {string} accountId Account ID for the custom dimensions to retrieve.
		 * @param {string} webPropertyId Web property ID for the custom dimensions to retrieve.
		 * @param {number} max_results The maximum number of custom dimensions to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_customDimensions_list(accountId: string, webPropertyId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new custom dimension.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions
		 * @param {string} accountId Account ID for the custom dimension to create.
		 * @param {string} webPropertyId Web property ID for the custom dimension to create.
		 * @return {void} Successful response
		 */
		Analytics_management_customDimensions_insert(accountId: string, webPropertyId: string, requestBody: CustomDimension): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a custom dimension to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}
		 * @param {string} accountId Account ID for the custom dimension to retrieve.
		 * @param {string} webPropertyId Web property ID for the custom dimension to retrieve.
		 * @param {string} customDimensionId The ID of the custom dimension to retrieve.
		 * @return {void} Successful response
		 */
		Analytics_management_customDimensions_get(accountId: string, webPropertyId: string, customDimensionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions/' + (customDimensionId == null ? '' : encodeURIComponent(customDimensionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing custom dimension. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}
		 * @param {string} accountId Account ID for the custom dimension to update.
		 * @param {string} webPropertyId Web property ID for the custom dimension to update.
		 * @param {string} customDimensionId Custom dimension ID for the custom dimension to update.
		 * @param {boolean} ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
		 * @return {void} Successful response
		 */
		Analytics_management_customDimensions_patch(accountId: string, webPropertyId: string, customDimensionId: string, ignoreCustomDataSourceLinks: boolean, requestBody: CustomDimension): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions/' + (customDimensionId == null ? '' : encodeURIComponent(customDimensionId)) + '&ignoreCustomDataSourceLinks=' + ignoreCustomDataSourceLinks, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing custom dimension.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}
		 * @param {string} accountId Account ID for the custom dimension to update.
		 * @param {string} webPropertyId Web property ID for the custom dimension to update.
		 * @param {string} customDimensionId Custom dimension ID for the custom dimension to update.
		 * @param {boolean} ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
		 * @return {void} Successful response
		 */
		Analytics_management_customDimensions_update(accountId: string, webPropertyId: string, customDimensionId: string, ignoreCustomDataSourceLinks: boolean, requestBody: CustomDimension): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions/' + (customDimensionId == null ? '' : encodeURIComponent(customDimensionId)) + '&ignoreCustomDataSourceLinks=' + ignoreCustomDataSourceLinks, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists custom metrics to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics
		 * @param {string} accountId Account ID for the custom metrics to retrieve.
		 * @param {string} webPropertyId Web property ID for the custom metrics to retrieve.
		 * @param {number} max_results The maximum number of custom metrics to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_customMetrics_list(accountId: string, webPropertyId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new custom metric.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics
		 * @param {string} accountId Account ID for the custom metric to create.
		 * @param {string} webPropertyId Web property ID for the custom dimension to create.
		 * @return {void} Successful response
		 */
		Analytics_management_customMetrics_insert(accountId: string, webPropertyId: string, requestBody: CustomMetric): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a custom metric to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}
		 * @param {string} accountId Account ID for the custom metric to retrieve.
		 * @param {string} webPropertyId Web property ID for the custom metric to retrieve.
		 * @param {string} customMetricId The ID of the custom metric to retrieve.
		 * @return {void} Successful response
		 */
		Analytics_management_customMetrics_get(accountId: string, webPropertyId: string, customMetricId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics/' + (customMetricId == null ? '' : encodeURIComponent(customMetricId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing custom metric. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}
		 * @param {string} accountId Account ID for the custom metric to update.
		 * @param {string} webPropertyId Web property ID for the custom metric to update.
		 * @param {string} customMetricId Custom metric ID for the custom metric to update.
		 * @param {boolean} ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
		 * @return {void} Successful response
		 */
		Analytics_management_customMetrics_patch(accountId: string, webPropertyId: string, customMetricId: string, ignoreCustomDataSourceLinks: boolean, requestBody: CustomMetric): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics/' + (customMetricId == null ? '' : encodeURIComponent(customMetricId)) + '&ignoreCustomDataSourceLinks=' + ignoreCustomDataSourceLinks, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing custom metric.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}
		 * @param {string} accountId Account ID for the custom metric to update.
		 * @param {string} webPropertyId Web property ID for the custom metric to update.
		 * @param {string} customMetricId Custom metric ID for the custom metric to update.
		 * @param {boolean} ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
		 * @return {void} Successful response
		 */
		Analytics_management_customMetrics_update(accountId: string, webPropertyId: string, customMetricId: string, ignoreCustomDataSourceLinks: boolean, requestBody: CustomMetric): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics/' + (customMetricId == null ? '' : encodeURIComponent(customMetricId)) + '&ignoreCustomDataSourceLinks=' + ignoreCustomDataSourceLinks, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists webProperty-Google Ads links for a given web property.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to retrieve the Google Ads links for.
		 * @param {number} max_results The maximum number of webProperty-Google Ads links to include in this response.
		 * @param {number} start_index An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_list(accountId: string, webPropertyId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a webProperty-Google Ads link.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks
		 * @param {string} accountId ID of the Google Analytics account to create the link for.
		 * @param {string} webPropertyId Web property ID to create the link for.
		 * @return {void} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_insert(accountId: string, webPropertyId: string, requestBody: EntityAdWordsLink): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a web property-Google Ads link.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to delete the Google Ads link for.
		 * @param {string} webPropertyAdWordsLinkId Web property Google Ads link ID.
		 * @return {void} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_delete(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks/' + (webPropertyAdWordsLinkId == null ? '' : encodeURIComponent(webPropertyAdWordsLinkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a web property-Google Ads link to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to retrieve the Google Ads link for.
		 * @param {string} webPropertyAdWordsLinkId Web property-Google Ads link ID.
		 * @return {void} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_get(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks/' + (webPropertyAdWordsLinkId == null ? '' : encodeURIComponent(webPropertyAdWordsLinkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing webProperty-Google Ads link. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to retrieve the Google Ads link for.
		 * @param {string} webPropertyAdWordsLinkId Web property-Google Ads link ID.
		 * @return {void} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_patch(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string, requestBody: EntityAdWordsLink): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks/' + (webPropertyAdWordsLinkId == null ? '' : encodeURIComponent(webPropertyAdWordsLinkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing webProperty-Google Ads link.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to retrieve the Google Ads link for.
		 * @param {string} webPropertyAdWordsLinkId Web property-Google Ads link ID.
		 * @return {void} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_update(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string, requestBody: EntityAdWordsLink): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks/' + (webPropertyAdWordsLinkId == null ? '' : encodeURIComponent(webPropertyAdWordsLinkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists webProperty-user links for a given web property.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks
		 * @param {string} accountId Account ID which the given web property belongs to.
		 * @param {string} webPropertyId Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {number} max_results The maximum number of webProperty-user Links to include in this response.
		 * @param {number} start_index An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_webpropertyUserLinks_list(accountId: string, webPropertyId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityUserLinks&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new user to the given web property.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks
		 * @param {string} accountId Account ID to create the user link for.
		 * @param {string} webPropertyId Web Property ID to create the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_webpropertyUserLinks_insert(accountId: string, webPropertyId: string, requestBody: EntityUserLink): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityUserLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a user from the given web property.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to delete the user link for.
		 * @param {string} webPropertyId Web Property ID to delete the user link for.
		 * @param {string} linkId Link ID to delete the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_webpropertyUserLinks_delete(accountId: string, webPropertyId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates permissions for an existing user on the given web property.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to update the account-user link for.
		 * @param {string} webPropertyId Web property ID to update the account-user link for.
		 * @param {string} linkId Link ID to update the account-user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_webpropertyUserLinks_update(accountId: string, webPropertyId: string, linkId: string, requestBody: EntityUserLink): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists views (profiles) to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles
		 * @param {string} accountId Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
		 * @param {string} webPropertyId Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
		 * @param {number} max_results The maximum number of views (profiles) to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_profiles_list(accountId: string, webPropertyId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new view (profile).
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles
		 * @param {string} accountId Account ID to create the view (profile) for.
		 * @param {string} webPropertyId Web property ID to create the view (profile) for.
		 * @return {void} Successful response
		 */
		Analytics_management_profiles_insert(accountId: string, webPropertyId: string, requestBody: Profile): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a view (profile).
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}
		 * @param {string} accountId Account ID to delete the view (profile) for.
		 * @param {string} webPropertyId Web property ID to delete the view (profile) for.
		 * @param {string} profileId ID of the view (profile) to be deleted.
		 * @return {void} Successful response
		 */
		Analytics_management_profiles_delete(accountId: string, webPropertyId: string, profileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a view (profile) to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}
		 * @param {string} accountId Account ID to retrieve the view (profile) for.
		 * @param {string} webPropertyId Web property ID to retrieve the view (profile) for.
		 * @param {string} profileId View (Profile) ID to retrieve the view (profile) for.
		 * @return {void} Successful response
		 */
		Analytics_management_profiles_get(accountId: string, webPropertyId: string, profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing view (profile). This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}
		 * @param {string} accountId Account ID to which the view (profile) belongs
		 * @param {string} webPropertyId Web property ID to which the view (profile) belongs
		 * @param {string} profileId ID of the view (profile) to be updated.
		 * @return {void} Successful response
		 */
		Analytics_management_profiles_patch(accountId: string, webPropertyId: string, profileId: string, requestBody: Profile): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing view (profile).
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}
		 * @param {string} accountId Account ID to which the view (profile) belongs
		 * @param {string} webPropertyId Web property ID to which the view (profile) belongs
		 * @param {string} profileId ID of the view (profile) to be updated.
		 * @return {void} Successful response
		 */
		Analytics_management_profiles_update(accountId: string, webPropertyId: string, profileId: string, requestBody: Profile): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists profile-user links for a given view (profile).
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks
		 * @param {string} accountId Account ID which the given view (profile) belongs to.
		 * @param {string} webPropertyId Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {string} profileId View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
		 * @param {number} max_results The maximum number of profile-user links to include in this response.
		 * @param {number} start_index An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_profileUserLinks_list(accountId: string, webPropertyId: string, profileId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/entityUserLinks&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new user to the given view (profile).
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks
		 * @param {string} accountId Account ID to create the user link for.
		 * @param {string} webPropertyId Web Property ID to create the user link for.
		 * @param {string} profileId View (Profile) ID to create the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_profileUserLinks_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: EntityUserLink): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/entityUserLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a user from the given view (profile).
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to delete the user link for.
		 * @param {string} webPropertyId Web Property ID to delete the user link for.
		 * @param {string} profileId View (Profile) ID to delete the user link for.
		 * @param {string} linkId Link ID to delete the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_profileUserLinks_delete(accountId: string, webPropertyId: string, profileId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates permissions for an existing user on the given view (profile).
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to update the user link for.
		 * @param {string} webPropertyId Web Property ID to update the user link for.
		 * @param {string} profileId View (Profile ID) to update the user link for.
		 * @param {string} linkId Link ID to update the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_profileUserLinks_update(accountId: string, webPropertyId: string, profileId: string, linkId: string, requestBody: EntityUserLink): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists experiments to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments
		 * @param {string} accountId Account ID to retrieve experiments for.
		 * @param {string} webPropertyId Web property ID to retrieve experiments for.
		 * @param {string} profileId View (Profile) ID to retrieve experiments for.
		 * @param {number} max_results The maximum number of experiments to include in this response.
		 * @param {number} start_index An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_experiments_list(accountId: string, webPropertyId: string, profileId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new experiment.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments
		 * @param {string} accountId Account ID to create the experiment for.
		 * @param {string} webPropertyId Web property ID to create the experiment for.
		 * @param {string} profileId View (Profile) ID to create the experiment for.
		 * @return {void} Successful response
		 */
		Analytics_management_experiments_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: Experiment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an experiment.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}
		 * @param {string} accountId Account ID to which the experiment belongs
		 * @param {string} webPropertyId Web property ID to which the experiment belongs
		 * @param {string} profileId View (Profile) ID to which the experiment belongs
		 * @param {string} experimentId ID of the experiment to delete
		 * @return {void} Successful response
		 */
		Analytics_management_experiments_delete(accountId: string, webPropertyId: string, profileId: string, experimentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an experiment to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}
		 * @param {string} accountId Account ID to retrieve the experiment for.
		 * @param {string} webPropertyId Web property ID to retrieve the experiment for.
		 * @param {string} profileId View (Profile) ID to retrieve the experiment for.
		 * @param {string} experimentId Experiment ID to retrieve the experiment for.
		 * @return {void} Successful response
		 */
		Analytics_management_experiments_get(accountId: string, webPropertyId: string, profileId: string, experimentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing experiment. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}
		 * @param {string} accountId Account ID of the experiment to update.
		 * @param {string} webPropertyId Web property ID of the experiment to update.
		 * @param {string} profileId View (Profile) ID of the experiment to update.
		 * @param {string} experimentId Experiment ID of the experiment to update.
		 * @return {void} Successful response
		 */
		Analytics_management_experiments_patch(accountId: string, webPropertyId: string, profileId: string, experimentId: string, requestBody: Experiment): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing experiment.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}
		 * @param {string} accountId Account ID of the experiment to update.
		 * @param {string} webPropertyId Web property ID of the experiment to update.
		 * @param {string} profileId View (Profile) ID of the experiment to update.
		 * @param {string} experimentId Experiment ID of the experiment to update.
		 * @return {void} Successful response
		 */
		Analytics_management_experiments_update(accountId: string, webPropertyId: string, profileId: string, experimentId: string, requestBody: Experiment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists goals to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
		 * @param {string} accountId Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
		 * @param {string} webPropertyId Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {string} profileId View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
		 * @param {number} max_results The maximum number of goals to include in this response.
		 * @param {number} start_index An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_goals_list(accountId: string, webPropertyId: string, profileId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new goal.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
		 * @param {string} accountId Account ID to create the goal for.
		 * @param {string} webPropertyId Web property ID to create the goal for.
		 * @param {string} profileId View (Profile) ID to create the goal for.
		 * @return {void} Successful response
		 */
		Analytics_management_goals_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: Goal): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a goal to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}
		 * @param {string} accountId Account ID to retrieve the goal for.
		 * @param {string} webPropertyId Web property ID to retrieve the goal for.
		 * @param {string} profileId View (Profile) ID to retrieve the goal for.
		 * @param {string} goalId Goal ID to retrieve the goal for.
		 * @return {void} Successful response
		 */
		Analytics_management_goals_get(accountId: string, webPropertyId: string, profileId: string, goalId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals/' + (goalId == null ? '' : encodeURIComponent(goalId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing goal. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}
		 * @param {string} accountId Account ID to update the goal.
		 * @param {string} webPropertyId Web property ID to update the goal.
		 * @param {string} profileId View (Profile) ID to update the goal.
		 * @param {string} goalId Index of the goal to be updated.
		 * @return {void} Successful response
		 */
		Analytics_management_goals_patch(accountId: string, webPropertyId: string, profileId: string, goalId: string, requestBody: Goal): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals/' + (goalId == null ? '' : encodeURIComponent(goalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing goal.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}
		 * @param {string} accountId Account ID to update the goal.
		 * @param {string} webPropertyId Web property ID to update the goal.
		 * @param {string} profileId View (Profile) ID to update the goal.
		 * @param {string} goalId Index of the goal to be updated.
		 * @return {void} Successful response
		 */
		Analytics_management_goals_update(accountId: string, webPropertyId: string, profileId: string, goalId: string, requestBody: Goal): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals/' + (goalId == null ? '' : encodeURIComponent(goalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all profile filter links for a profile.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks
		 * @param {string} accountId Account ID to retrieve profile filter links for.
		 * @param {string} webPropertyId Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {string} profileId Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
		 * @param {number} max_results The maximum number of profile filter links to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_profileFilterLinks_list(accountId: string, webPropertyId: string, profileId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new profile filter link.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks
		 * @param {string} accountId Account ID to create profile filter link for.
		 * @param {string} webPropertyId Web property Id to create profile filter link for.
		 * @param {string} profileId Profile ID to create filter link for.
		 * @return {void} Successful response
		 */
		Analytics_management_profileFilterLinks_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: ProfileFilterLink): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a profile filter link.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}
		 * @param {string} accountId Account ID to which the profile filter link belongs.
		 * @param {string} webPropertyId Web property Id to which the profile filter link belongs.
		 * @param {string} profileId Profile ID to which the filter link belongs.
		 * @param {string} linkId ID of the profile filter link to delete.
		 * @return {void} Successful response
		 */
		Analytics_management_profileFilterLinks_delete(accountId: string, webPropertyId: string, profileId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single profile filter link.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}
		 * @param {string} accountId Account ID to retrieve profile filter link for.
		 * @param {string} webPropertyId Web property Id to retrieve profile filter link for.
		 * @param {string} profileId Profile ID to retrieve filter link for.
		 * @param {string} linkId ID of the profile filter link.
		 * @return {void} Successful response
		 */
		Analytics_management_profileFilterLinks_get(accountId: string, webPropertyId: string, profileId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing profile filter link. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}
		 * @param {string} accountId Account ID to which profile filter link belongs.
		 * @param {string} webPropertyId Web property Id to which profile filter link belongs
		 * @param {string} profileId Profile ID to which filter link belongs
		 * @param {string} linkId ID of the profile filter link to be updated.
		 * @return {void} Successful response
		 */
		Analytics_management_profileFilterLinks_patch(accountId: string, webPropertyId: string, profileId: string, linkId: string, requestBody: ProfileFilterLink): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing profile filter link.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}
		 * @param {string} accountId Account ID to which profile filter link belongs.
		 * @param {string} webPropertyId Web property Id to which profile filter link belongs
		 * @param {string} profileId Profile ID to which filter link belongs
		 * @param {string} linkId ID of the profile filter link to be updated.
		 * @return {void} Successful response
		 */
		Analytics_management_profileFilterLinks_update(accountId: string, webPropertyId: string, profileId: string, linkId: string, requestBody: ProfileFilterLink): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists unsampled reports to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports
		 * @param {string} accountId Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
		 * @param {string} webPropertyId Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
		 * @param {string} profileId View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
		 * @param {number} max_results The maximum number of unsampled reports to include in this response.
		 * @param {number} start_index An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_unsampledReports_list(accountId: string, webPropertyId: string, profileId: string, max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unsampledReports&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new unsampled report.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports
		 * @param {string} accountId Account ID to create the unsampled report for.
		 * @param {string} webPropertyId Web property ID to create the unsampled report for.
		 * @param {string} profileId View (Profile) ID to create the unsampled report for.
		 * @return {void} Successful response
		 */
		Analytics_management_unsampledReports_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: UnsampledReport): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unsampledReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an unsampled report.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}
		 * @param {string} accountId Account ID to delete the unsampled report for.
		 * @param {string} webPropertyId Web property ID to delete the unsampled reports for.
		 * @param {string} profileId View (Profile) ID to delete the unsampled report for.
		 * @param {string} unsampledReportId ID of the unsampled report to be deleted.
		 * @return {void} Successful response
		 */
		Analytics_management_unsampledReports_delete(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unsampledReports/' + (unsampledReportId == null ? '' : encodeURIComponent(unsampledReportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single unsampled report.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}
		 * @param {string} accountId Account ID to retrieve unsampled report for.
		 * @param {string} webPropertyId Web property ID to retrieve unsampled reports for.
		 * @param {string} profileId View (Profile) ID to retrieve unsampled report for.
		 * @param {string} unsampledReportId ID of the unsampled report to retrieve.
		 * @return {void} Successful response
		 */
		Analytics_management_unsampledReports_get(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unsampledReports/' + (unsampledReportId == null ? '' : encodeURIComponent(unsampledReportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists remarketing audiences to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences
		 * @param {string} accountId The account ID of the remarketing audiences to retrieve.
		 * @param {string} webPropertyId The web property ID of the remarketing audiences to retrieve.
		 * @param {number} max_results The maximum number of remarketing audiences to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_remarketingAudience_list(accountId: string, webPropertyId: string, max_results: number, start_index: number, type: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences&max_results=' + max_results + '&start_index=' + start_index + '&type=' + (type == null ? '' : encodeURIComponent(type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new remarketing audience.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences
		 * @param {string} accountId The account ID for which to create the remarketing audience.
		 * @param {string} webPropertyId Web property ID for which to create the remarketing audience.
		 * @return {void} Successful response
		 */
		Analytics_management_remarketingAudience_insert(accountId: string, webPropertyId: string, requestBody: RemarketingAudience): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a remarketing audience.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}
		 * @param {string} accountId Account ID to which the remarketing audience belongs.
		 * @param {string} webPropertyId Web property ID to which the remarketing audience belongs.
		 * @param {string} remarketingAudienceId The ID of the remarketing audience to delete.
		 * @return {void} Successful response
		 */
		Analytics_management_remarketingAudience_delete(accountId: string, webPropertyId: string, remarketingAudienceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences/' + (remarketingAudienceId == null ? '' : encodeURIComponent(remarketingAudienceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a remarketing audience to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}
		 * @param {string} accountId The account ID of the remarketing audience to retrieve.
		 * @param {string} webPropertyId The web property ID of the remarketing audience to retrieve.
		 * @param {string} remarketingAudienceId The ID of the remarketing audience to retrieve.
		 * @return {void} Successful response
		 */
		Analytics_management_remarketingAudience_get(accountId: string, webPropertyId: string, remarketingAudienceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences/' + (remarketingAudienceId == null ? '' : encodeURIComponent(remarketingAudienceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing remarketing audience. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}
		 * @param {string} accountId The account ID of the remarketing audience to update.
		 * @param {string} webPropertyId The web property ID of the remarketing audience to update.
		 * @param {string} remarketingAudienceId The ID of the remarketing audience to update.
		 * @return {void} Successful response
		 */
		Analytics_management_remarketingAudience_patch(accountId: string, webPropertyId: string, remarketingAudienceId: string, requestBody: RemarketingAudience): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences/' + (remarketingAudienceId == null ? '' : encodeURIComponent(remarketingAudienceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing remarketing audience.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}
		 * @param {string} accountId The account ID of the remarketing audience to update.
		 * @param {string} webPropertyId The web property ID of the remarketing audience to update.
		 * @param {string} remarketingAudienceId The ID of the remarketing audience to update.
		 * @return {void} Successful response
		 */
		Analytics_management_remarketingAudience_update(accountId: string, webPropertyId: string, remarketingAudienceId: string, requestBody: RemarketingAudience): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences/' + (remarketingAudienceId == null ? '' : encodeURIComponent(remarketingAudienceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Hashes the given Client ID.
		 * Post management/clientId:hashClientId
		 * @return {void} Successful response
		 */
		Analytics_management_clientId_hashClientId(requestBody: HashClientIdRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/clientId:hashClientId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists segments to which the user has access.
		 * Get management/segments
		 * @param {number} max_results The maximum number of segments to include in this response.
		 * @param {number} start_index An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {void} Successful response
		 */
		Analytics_management_segments_list(max_results: number, start_index: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/segments?max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all columns for a report type
		 * Get metadata/{reportType}/columns
		 * @param {string} reportType Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
		 * @return {void} Successful response
		 */
		Analytics_metadata_columns_list(reportType: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'metadata/' + (reportType == null ? '' : encodeURIComponent(reportType)) + '/columns', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an account ticket.
		 * Post provisioning/createAccountTicket
		 * @return {void} Successful response
		 */
		Analytics_provisioning_createAccountTicket(requestBody: AccountTicket): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'provisioning/createAccountTicket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Provision account.
		 * Post provisioning/createAccountTree
		 * @return {void} Successful response
		 */
		Analytics_provisioning_createAccountTree(requestBody: AccountTreeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'provisioning/createAccountTree', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert or update a user deletion requests.
		 * Post userDeletion/userDeletionRequests:upsert
		 * @return {void} Successful response
		 */
		Analytics_userDeletion_userDeletionRequest_upsert(requestBody: UserDeletionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userDeletion/userDeletionRequests:upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Analytics_data_ga_getOutput { dataTable = 0, json = 1 }

	export enum Analytics_data_ga_getSamplingLevel { DEFAULT = 0, FASTER = 1, HIGHER_PRECISION = 2 }

}

