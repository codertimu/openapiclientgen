import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Specifies the audit configuration for a service.
	 * The configuration determines which permission types are logged, and what
	 * identities, if any, are exempted from logging.
	 * An AuditConfig must have one or more AuditLogConfigs.
	 * If there are AuditConfigs for both `allServices` and a specific service,
	 * the union of the two AuditConfigs is used for that service: the log_types
	 * specified in each AuditConfig are enabled, and the exempted_members in each
	 * AuditLogConfig are exempted.
	 * Example Policy with multiple AuditConfigs:
	 *     {
	 *       "audit_configs": [
	 *         {
	 *           "service": "allServices"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *               "exempted_members": [
	 *                 "user:jose@example.com"
	 *               ]
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *             },
	 *             {
	 *               "log_type": "ADMIN_READ",
	 *             }
	 *           ]
	 *         },
	 *         {
	 *           "service": "sampleservice.googleapis.com"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *               "exempted_members": [
	 *                 "user:aliya@example.com"
	 *               ]
	 *             }
	 *           ]
	 *         }
	 *       ]
	 *     }
	 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
	 * logging. It also exempts jose@example.com from DATA_READ logging, and
	 * aliya@example.com from DATA_WRITE logging.
	 */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string;
	}


	/**
	 * Provides the configuration for logging a type of permissions.
	 * Example:
	 *     {
	 *       "audit_log_configs": [
	 *         {
	 *           "log_type": "DATA_READ",
	 *           "exempted_members": [
	 *             "user:jose@example.com"
	 *           ]
	 *         },
	 *         {
	 *           "log_type": "DATA_WRITE",
	 *         }
	 *       ]
	 *     }
	 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
	 * jose@example.com from DATA_READ logging.
	 */
	export interface AuditLogConfig {

		/**
		 * Specifies the identities that do not cause logging for this type of
		 * permission.
		 * Follows the same format of Binding.members.
		 */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType;
	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource.
		 * `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is
		 * on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone
		 * who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google
		 * account. For example, `alice@example.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service
		 * account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group.
		 * For example, `admins@example.com`.
		 * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a user that has been recently deleted. For
		 * example, `alice@example.com?uid=123456789012345678901`. If the user is
		 * recovered, this value reverts to `user:{emailid}` and the recovered user
		 * retains the role in the binding.
		 * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
		 * unique identifier) representing a service account that has been recently
		 * deleted. For example,
		 * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
		 * If the service account is undeleted, this value reverts to
		 * `serviceAccount:{emailid}` and the undeleted service account retains the
		 * role in the binding.
		 * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a Google group that has been recently
		 * deleted. For example, `admins@example.com?uid=123456789012345678901`. If
		 * the group is recovered, this value reverts to `group:{emailid}` and the
		 * recovered group retains the role in the binding.
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the
		 * users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string>;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string;
	}


	/**
	 * Represents a textual expression in the Common Expression Language (CEL)
	 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
	 * are documented at https://github.com/google/cel-spec.
	 * Example (Comparison):
	 *     title: "Summary size limit"
	 *     description: "Determines if a summary is less than 100 chars"
	 *     expression: "document.summary.size() < 100"
	 * Example (Equality):
	 *     title: "Requestor is owner"
	 *     description: "Determines if requestor is the document owner"
	 *     expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 *     title: "Public documents"
	 *     description: "Determine whether the document should be publicly visible"
	 *     expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 *     title: "Notification string"
	 *     description: "Create a notification string with a timestamp."
	 *     expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression
	 * are determined by the service that evaluates it. See the service
	 * documentation for additional information.
	 */
	export interface Expr {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** Response for ListRepos.  The size is not set in the returned repositories. */
	export interface ListReposResponse {

		/**
		 * If non-empty, additional repositories exist within the project. These
		 * can be retrieved by including this value in the next ListReposRequest's
		 * page_token field.
		 */
		nextPageToken?: string;

		/** The listed repos. */
		repos?: Array<Repo>;
	}


	/** A repository (or repo) is a Git repository storing versioned source content. */
	export interface Repo {

		/**
		 * Configuration to automatically mirror a repository from another
		 * hosting service, for example GitHub or Bitbucket.
		 */
		mirrorConfig?: MirrorConfig;

		/**
		 * Resource name of the repository, of the form
		 * `projects/<project>/repos/<repo>`.  The repo name may contain slashes.
		 * eg, `projects/myproject/repos/name/with/slash`
		 */
		name?: string;

		/**
		 * How this repository publishes a change in the repository through Cloud
		 * Pub/Sub. Keyed by the topic names.
		 */
		pubsubConfigs?: {[id: string]: PubsubConfig };

		/**
		 * The disk usage of the repo, in bytes. Read-only field. Size is only
		 * returned by GetRepo.
		 */
		size?: string;

		/**
		 * URL to clone the repository from Google Cloud Source Repositories.
		 * Read-only field.
		 */
		url?: string;
	}


	/**
	 * Configuration to automatically mirror a repository from another
	 * hosting service, for example GitHub or Bitbucket.
	 */
	export interface MirrorConfig {

		/**
		 * ID of the SSH deploy key at the other hosting service.
		 * Removing this key from the other service would deauthorize
		 * Google Cloud Source Repositories from mirroring.
		 */
		deployKeyId?: string;

		/** URL of the main repository at the other hosting service. */
		url?: string;

		/**
		 * ID of the webhook listening to updates to trigger mirroring.
		 * Removing this webhook from the other hosting service will stop
		 * Google Cloud Source Repositories from receiving notifications,
		 * and thereby disabling mirroring.
		 */
		webhookId?: string;
	}


	/** Configuration to publish a Cloud Pub/Sub message. */
	export interface PubsubConfig {

		/** The format of the Cloud Pub/Sub messages. */
		messageFormat?: PubsubConfigMessageFormat;

		/**
		 * Email address of the service account used for publishing Cloud Pub/Sub
		 * messages. This service account needs to be in the same project as the
		 * PubsubConfig. When added, the caller needs to have
		 * iam.serviceAccounts.actAs permission on this service account. If
		 * unspecified, it defaults to the compute engine default service account.
		 */
		serviceAccountEmail?: string;

		/**
		 * A topic of Cloud Pub/Sub. Values are of the form
		 * `projects/<project>/topics/<topic>`. The project needs to be the same
		 * project as this config is in.
		 */
		topic?: string;
	}

	export enum PubsubConfigMessageFormat { MESSAGE_FORMAT_UNSPECIFIED = 0, PROTOBUF = 1, JSON = 2 }


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access
	 * controls for Google Cloud resources.
	 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
	 * `members` to a single `role`. Members can be user accounts, service accounts,
	 * Google groups, and domains (such as G Suite). A `role` is a named list of
	 * permissions; each `role` can be an IAM predefined role or a user-created
	 * custom role.
	 * Optionally, a `binding` can specify a `condition`, which is a logical
	 * expression that allows access to a resource only if the expression evaluates
	 * to `true`. A condition can add constraints based on attributes of the
	 * request, the resource, or both.
	 * **JSON example:**
	 *     {
	 *       "bindings": [
	 *         {
	 *           "role": "roles/resourcemanager.organizationAdmin",
	 *           "members": [
	 *             "user:mike@example.com",
	 *             "group:admins@example.com",
	 *             "domain:google.com",
	 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *           ]
	 *         },
	 *         {
	 *           "role": "roles/resourcemanager.organizationViewer",
	 *           "members": ["user:eve@example.com"],
	 *           "condition": {
	 *             "title": "expirable access",
	 *             "description": "Does not grant access after Sep 2020",
	 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *           }
	 *         }
	 *       ],
	 *       "etag": "BwWWja0YfJA=",
	 *       "version": 3
	 *     }
	 * **YAML example:**
	 *     bindings:
	 *     - members:
	 *       - user:mike@example.com
	 *       - group:admins@example.com
	 *       - domain:google.com
	 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *       role: roles/resourcemanager.organizationAdmin
	 *     - members:
	 *       - user:eve@example.com
	 *       role: roles/resourcemanager.organizationViewer
	 *       condition:
	 *         title: expirable access
	 *         description: Does not grant access after Sep 2020
	 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 *     - etag: BwWWja0YfJA=
	 *     - version: 3
	 * For a description of IAM and its features, see the
	 * [IAM documentation](https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding>;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of a policy from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform policy updates in order to avoid race
		 * conditions: An `etag` is returned in the response to `getIamPolicy`, and
		 * systems are expected to put that etag in the request to `setIamPolicy` to
		 * ensure that their change will be applied to the same version of the policy.
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 */
		etag?: string;

		/**
		 * Specifies the format of the policy.
		 * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
		 * are rejected.
		 * Any operation that affects conditional role bindings must specify version
		 * `3`. This requirement applies to the following operations:
		 * * Getting a policy that includes a conditional role binding
		 * * Adding a conditional role binding to a policy
		 * * Changing a conditional role binding in a policy
		 * * Removing any role binding, with or without a condition, from a policy
		 * that includes conditions
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 * If a policy does not include any conditions, operations on that policy may
		 * specify any valid version or leave the field unset.
		 */
		version?: number;
	}


	/** Cloud Source Repositories configuration of a project. */
	export interface ProjectConfig {

		/** Reject a Git push that contains a private key. */
		enablePrivateKeyCheck?: boolean;

		/** The name of the project. Values are of the form `projects/<project>`. */
		name?: string;

		/**
		 * How this project publishes a change in the repositories through Cloud
		 * Pub/Sub. Keyed by the topic names.
		 */
		pubsubConfigs?: {[id: string]: PubsubConfig };
	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access
		 * controls for Google Cloud resources.
		 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
		 * `members` to a single `role`. Members can be user accounts, service accounts,
		 * Google groups, and domains (such as G Suite). A `role` is a named list of
		 * permissions; each `role` can be an IAM predefined role or a user-created
		 * custom role.
		 * Optionally, a `binding` can specify a `condition`, which is a logical
		 * expression that allows access to a resource only if the expression evaluates
		 * to `true`. A condition can add constraints based on attributes of the
		 * request, the resource, or both.
		 * **JSON example:**
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * **YAML example:**
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the
		 * [IAM documentation](https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy;

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * paths: "bindings, etag"
		 * This field is only used by Cloud IAM.
		 */
		updateMask?: string;
	}


	/**
	 * Metadata of SyncRepo.
	 * This message is in the metadata field of Operation.
	 */
	export interface SyncRepoMetadata {

		/**
		 * The name of the repo being synchronized. Values are of the form
		 * `projects/<project>/repos/<repo>`.
		 */
		name?: string;

		/** The time this operation is started. */
		startTime?: string;

		/** The latest status message on syncing the repository. */
		statusMessage?: string;

		/** The time this operation's status message is updated. */
		updateTime?: string;
	}


	/** Request for SyncRepo. */
	export interface SyncRepoRequest {
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string>;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string>;
	}


	/** Request for UpdateProjectConfig. */
	export interface UpdateProjectConfigRequest {

		/** Cloud Source Repositories configuration of a project. */
		projectConfig?: ProjectConfig;

		/**
		 * A FieldMask specifying which fields of the project_config to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, this
		 * request is no-op.
		 */
		updateMask?: string;
	}


	/** Request for UpdateRepo. */
	export interface UpdateRepoRequest {

		/** A repository (or repo) is a Git repository storing versioned source content. */
		repo?: Repo;

		/**
		 * A FieldMask specifying which fields of the repo to modify. Only the fields
		 * in the mask will be modified. If no mask is provided, this request is
		 * no-op.
		 */
		updateMask?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a repo.
		 * Delete v1/{name}
		 * @param {string} name The name of the repo to delete. Values are of the form
		 * `projects/<project>/repos/<repo>`.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a repo.
		 * Get v1/{name}
		 * @param {string} name The name of the requested repository. Values are of the form
		 * `projects/<project>/repos/<repo>`.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates information about a repo.
		 * Patch v1/{name}
		 * @param {string} name The name of the requested repository. Values are of the form
		 * `projects/<project>/repos/<repo>`.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_patch(name: string, requestBody: UpdateRepoRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the Cloud Source Repositories configuration of the project.
		 * Get v1/{name}/config
		 * @param {string} name The name of the requested project. Values are of the form
		 * `projects/<project>`.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_getConfig(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the Cloud Source Repositories configuration of the project.
		 * Patch v1/{name}/config
		 * @param {string} name The name of the requested project. Values are of the form
		 * `projects/<project>`.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_updateConfig(name: string, requestBody: UpdateProjectConfigRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all repos belonging to a project. The sizes of the repos are
		 * not set by ListRepos.  To get the size of a repo, use GetRepo.
		 * Get v1/{name}/repos
		 * @param {string} name The project ID whose repos should be listed. Values are of the form
		 * `projects/<project>`.
		 * @param {number} pageSize Maximum number of repositories to return; between 1 and 500.
		 * If not set or zero, defaults to 100 at the server.
		 * @param {string} pageToken Resume listing repositories where a prior ListReposResponse
		 * left off. This is an opaque token that must be obtained from
		 * a recent, prior ListReposResponse's next_page_token field.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_list(name: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/repos&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Synchronize a connected repo.
		 * The response contains SyncRepoMetadata in the metadata field.
		 * Post v1/{name}:sync
		 * @param {string} name The name of the repo to synchronize. Values are of the form
		 * `projects/<project>/repos/<repo>`.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_sync(name: string, requestBody: SyncRepoRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':sync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a repo in the given project with the given name.
		 * If the named repository already exists, `CreateRepo` returns
		 * `ALREADY_EXISTS`.
		 * Post v1/{parent}/repos
		 * @param {string} parent The project in which to create the repo. Values are of the form
		 * `projects/<project>`.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_create(parent: string, requestBody: Repo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a resource.
		 * Returns an empty policy if the resource exists and does not have a policy
		 * set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_getIamPolicy(resource: string, options_requestedPolicyVersion: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any
		 * existing policy.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * If the resource does not exist, this will return an empty set of
		 * permissions, not a NOT_FOUND error.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Sourcerepo_projects_repos_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

