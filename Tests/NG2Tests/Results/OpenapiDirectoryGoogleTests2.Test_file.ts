import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
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


	/** File share configuration for the instance. */
	export interface FileShareConfig {

		/**
		 * File share capacity in gigabytes (GB).
		 * Cloud Filestore defines 1 GB as 1024^3 bytes.
		 */
		capacityGb?: string;

		/** The name of the file share (must be 16 characters or less). */
		name?: string;
	}

	export interface GoogleCloudSaasacceleratorManagementProvidersV1Instance {

		/**
		 * consumer_defined_name is the name that is set by the consumer. On the other
		 * hand Name field represents system-assigned id of an instance so consumers
		 * are not necessarily aware of it.
		 * consumer_defined_name is used for notification/UI purposes for consumer to
		 * recognize their instances.
		 */
		consumerDefinedName?: string;

		/** Output only. Timestamp when the resource was created. */
		createTime?: string;

		/**
		 * Optional. Resource labels to represent user provided metadata. Each label
		 * is a key-value pair, where both the key and the value are arbitrary strings
		 * provided by the user.
		 */
		labels?: {[id: string]: any };

		/**
		 * The MaintenancePolicies that have been attached to the instance.
		 * The key must be of the type name of the oneof policy name defined in
		 * MaintenancePolicy, and the referenced policy must define the same policy
		 * type. For complete details of MaintenancePolicy, please refer to
		 * go/cloud-saas-mw-ug.
		 */
		maintenancePolicyNames?: {[id: string]: any };

		/**
		 * The MaintenanceSchedule contains the scheduling information of published
		 * maintenance schedule.
		 */
		maintenanceSchedules?: {[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule };

		/**
		 * Unique name of the resource. It uses the form:
		 * `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
		 */
		name?: string;

		/**
		 * Output only. Custom string attributes used primarily to expose
		 * producer-specific information in monitoring dashboards.
		 * See go/get-instance-metadata.
		 */
		producerMetadata?: {[id: string]: any };

		/**
		 * Output only. The list of data plane resources provisioned for this
		 * instance, e.g. compute VMs. See go/get-instance-metadata.
		 */
		provisionedResources?: Array<GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource>;

		/**
		 * Link to the SLM instance template. Only populated when updating SLM
		 * instances via SSA's Actuation service adaptor.
		 * Service producers with custom control plane (e.g. Cloud SQL) doesn't
		 * need to populate this field. Instead they should use software_versions.
		 */
		slmInstanceTemplate?: string;

		/**
		 * SloMetadata contains resources required for proper SLO classification of the
		 * instance.
		 */
		sloMetadata?: GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata;

		/**
		 * Software versions that are used to deploy this instance. This can be
		 * mutated by rollout services.
		 */
		softwareVersions?: {[id: string]: any };

		/**
		 * Output only. Current lifecycle state of the resource (e.g. if it's being
		 * created or ready to use).
		 */
		state?: GoogleCloudSaasacceleratorManagementProvidersV1InstanceState;

		/**
		 * Output only. ID of the associated GCP tenant project.
		 * See go/get-instance-metadata.
		 */
		tenantProjectId?: string;

		/** Output only. Timestamp when the resource was last modified. */
		updateTime?: string;
	}


	/**
	 * Maintenance schedule which is exposed to customer and potentially end user,
	 * indicating published upcoming future maintenance schedule
	 */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule {

		/**
		 * Can this scheduled update be rescheduled?
		 * By default, it's true and API needs to do explicitly check whether it's
		 * set, if it's set as false explicitly, it's false
		 */
		canReschedule?: boolean;

		/** The scheduled end time for the maintenance. */
		endTime?: string;

		/**
		 * The rollout management policy this maintenance schedule is associated
		 * with. When doing reschedule update request, the reschedule should be
		 * against this given policy.
		 */
		rolloutManagementPolicy?: string;

		/** The scheduled start time for the maintenance. */
		startTime?: string;
	}


	/** Describes provisioned dataplane resources. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource {

		/**
		 * Type of the resource. This can be either a GCP resource or a custom one
		 * (e.g. another cloud provider's VM). For GCP compute resources use singular
		 * form of the names listed in GCP compute API documentation
		 * (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with
		 * 'compute-', for example: 'compute-instance', 'compute-disk',
		 * 'compute-autoscaler'.
		 */
		resourceType?: string;

		/**
		 * URL identifying the resource, e.g.
		 * "https://www.googleapis.com/compute/v1/projects/...)".
		 */
		resourceUrl?: string;
	}


	/**
	 * SloMetadata contains resources required for proper SLO classification of the
	 * instance.
	 */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata {

		/**
		 * SloEligibility is a tuple containing eligibility value: true if an instance
		 * is eligible for SLO calculation or false if it should be excluded from all
		 * SLO-related calculations along with a user-defined reason.
		 */
		eligibility?: GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility;

		/**
		 * List of SLO exclusion windows. When multiple entries in the list match
		 * (matching the exclusion time-window against current time point)
		 * the exclusion reason used in the first matching entry will be published.
		 * It is not needed to include expired exclusion in this list, as only the
		 * currently applicable exclusions are taken into account by the eligibility
		 * exporting subsystem (the historical state of exclusions will be reflected
		 * in the historically produced timeseries regardless of the current state).
		 * This field can be used to mark the instance as temporary ineligible
		 * for the purpose of SLO calculation. For permanent instance SLO exclusion,
		 * use of custom instance eligibility is recommended. See 'eligibility' field
		 * below.
		 */
		exclusions?: Array<GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion>;

		/**
		 * Optional. List of nodes.
		 * Some producers need to use per-node metadata to calculate SLO.
		 * This field allows such producers to publish per-node SLO meta data,
		 * which will be consumed by SSA Eligibility Exporter and published in the
		 * form of per node metric to Monarch.
		 */
		nodes?: Array<GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata>;

		/**
		 * Name of the SLO tier the Instance belongs to. This name will be expected to
		 * match the tiers specified in the service SLO configuration.
		 * Field is mandatory and must not be empty.
		 */
		tier?: string;
	}


	/**
	 * SloEligibility is a tuple containing eligibility value: true if an instance
	 * is eligible for SLO calculation or false if it should be excluded from all
	 * SLO-related calculations along with a user-defined reason.
	 */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility {

		/** Whether an instance is eligible or ineligible. */
		eligible?: boolean;

		/**
		 * User-defined reason for the current value of instance eligibility. Usually,
		 * this can be directly mapped to the internal state. An empty reason is
		 * allowed.
		 */
		reason?: string;
	}


	/** SloExclusion represents an exclusion in SLI calculation applies to all SLOs. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion {

		/**
		 * Exclusion duration. No restrictions on the possible values.
		 * When an ongoing operation is taking longer than initially expected,
		 * an existing entry in the exclusion list can be updated by extending the
		 * duration. This is supported by the subsystem exporting eligibility data
		 * as long as such extension is committed at least 10 minutes before the
		 * original exclusion expiration - otherwise it is possible that there will
		 * be "gaps" in the exclusion application in the exported timeseries.
		 */
		duration?: string;

		/**
		 * Human-readable reason for the exclusion.
		 * This should be a static string (e.g. "Disruptive update in progress")
		 * and should not contain dynamically generated data (e.g. instance name).
		 * Can be left empty.
		 */
		reason?: string;

		/**
		 * Name of an SLI that this exclusion applies to. Can be left empty,
		 * signaling that the instance should be excluded from all SLIs defined
		 * in the service SLO configuration.
		 */
		sliName?: string;

		/** Start time of the exclusion. No alignment (e.g. to a full minute) needed. */
		startTime?: string;
	}


	/**
	 * Node information for custom per-node SLO implementations.
	 * SSA does not support per-node SLO, but producers can populate per-node
	 * information in SloMetadata for custom precomputations.
	 * SSA Eligibility Exporter will emit per-node metric based on this information.
	 */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata {

		/**
		 * By default node is eligible if instance is eligible.
		 * But individual node might be excluded from SLO by adding entry here.
		 * For semantic see SloMetadata.exclusions.
		 * If both instance and node level exclusions are present for time period,
		 * the node level's reason will be reported by Eligibility Exporter.
		 */
		exclusions?: Array<GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion>;

		/** The location of the node, if different from instance location. */
		location?: string;

		/**
		 * The id of the node.
		 * This should be equal to SaasInstanceNode.node_id.
		 */
		nodeId?: string;
	}

	export enum GoogleCloudSaasacceleratorManagementProvidersV1InstanceState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, UPDATING = 3, REPAIRING = 4, DELETING = 5, ERROR = 6 }


	/** A Cloud Filestore instance. */
	export interface Instance {

		/** Output only. The time when the instance was created. */
		createTime?: string;

		/** The description of the instance (2048 characters or less). */
		description?: string;

		/**
		 * Server-specified ETag for the instance resource to prevent simultaneous
		 * updates from overwriting each other.
		 */
		etag?: string;

		/**
		 * File system shares on the instance.
		 * For this version, only a single file share is supported.
		 */
		fileShares?: Array<FileShareConfig>;

		/** Resource labels to represent user provided metadata. */
		labels?: {[id: string]: any };

		/**
		 * Output only. The resource name of the instance, in the format
		 * projects/{project}/locations/{location}/instances/{instance}.
		 */
		name?: string;

		/**
		 * VPC networks to which the instance is connected.
		 * For this version, only a single network is supported.
		 */
		networks?: Array<NetworkConfig>;

		/** Output only. The instance state. */
		state?: InstanceState;

		/** Output only. Additional information about the instance state, if available. */
		statusMessage?: string;

		/** The service tier of the instance. */
		tier?: InstanceTier;
	}


	/** Network configuration for the instance. */
	export interface NetworkConfig {

		/**
		 * Output only. IPv4 addresses in the format
		 * {octet 1}.{octet 2}.{octet 3}.{octet 4} or IPv6 addresses in the format
		 * {block 1}:{block 2}:{block 3}:{block 4}:{block 5}:{block 6}:{block
		 * 7}:{block 8}.
		 */
		ipAddresses?: Array<string>;

		/**
		 * Internet protocol versions for which the instance has IP addresses
		 * assigned. For this version, only MODE_IPV4 is supported.
		 */
		modes?: Array<string>;

		/**
		 * The name of the Google Compute Engine
		 * [VPC network](/compute/docs/networks-and-firewalls#networks) to which the
		 * instance is connected.
		 */
		network?: string;

		/**
		 * A /29 CIDR block in one of the
		 * [internal IP address
		 * ranges](https://www.arin.net/knowledge/address_filters.html) that
		 * identifies the range of IP addresses reserved for this instance. For
		 * example, 10.0.0.0/29 or 192.168.0.0/29. The range you specify can't overlap
		 * with either existing subnets or assigned IP address ranges for other Cloud
		 * Filestore instances in the selected VPC network.
		 */
		reservedIpRange?: string;
	}

	export enum InstanceState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, REPAIRING = 3, DELETING = 4, ERROR = 5 }

	export enum InstanceTier { TIER_UNSPECIFIED = 0, STANDARD = 1, PREMIUM = 2, BASIC_HDD = 3, BASIC_SSD = 4, HIGH_SCALE_SSD = 5 }


	/** ListInstancesResponse is the result of ListInstancesRequest. */
	export interface ListInstancesResponse {

		/**
		 * A list of instances in the project for the specified location.
		 * If the {location} value in the request is "-", the response contains a list
		 * of instances from all locations. If any location is unreachable, the
		 * response will only return instances in reachable locations and the
		 * "unreachable" field will be populated with a list of unreachable locations.
		 */
		instances?: Array<Instance>;

		/**
		 * The token you can use to retrieve the next page of results. Not returned
		 * if there are no more results in the list.
		 */
		nextPageToken?: string;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: any };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any };

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}


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


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** [Output only] API version used to start the operation. */
		apiVersion?: string;

		/**
		 * [Output only] Identifies whether the user has requested cancellation
		 * of the operation. Operations that have successfully been cancelled
		 * have Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 */
		cancelRequested?: boolean;

		/** [Output only] The time the operation was created. */
		createTime?: string;

		/** [Output only] The time the operation finished running. */
		endTime?: string;

		/** [Output only] Human-readable status of the operation, if any. */
		statusDetail?: string;

		/** [Output only] Server-defined resource path for the target of the operation. */
		target?: string;

		/** [Output only] Name of the verb executed by the operation. */
		verb?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an instance.
		 * Delete v1/{name}
		 * @param {string} name Required. The instance resource name, in the format
		 * projects/{project_id}/locations/{location}/instances/{instance_id}
		 * @return {void} Successful response
		 */
		File_projects_locations_instances_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the details of a specific instance.
		 * Get v1/{name}
		 * @param {string} name Required. The instance resource name, in the format
		 * projects/{project_id}/locations/{location}/instances/{instance_id}.
		 * @return {void} Successful response
		 */
		File_projects_locations_instances_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the settings of a specific instance.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name of the instance, in the format
		 * projects/{project}/locations/{location}/instances/{instance}.
		 * @param {string} updateMask Mask of fields to update.  At least one path must be supplied in this
		 * field.  The elements of the repeated paths field may only include these
		 * fields:
		 * * "description"
		 * * "file_shares"
		 * * "labels"
		 * @return {void} Successful response
		 */
		File_projects_locations_instances_patch(name: string, updateMask: string, requestBody: Instance): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {boolean} includeUnrevealedLocations If true, the returned list will include locations which are not yet
		 * revealed.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		File_projects_locations_list(name: string, filter: string, includeUnrevealedLocations: boolean, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&includeUnrevealedLocations=' + includeUnrevealedLocations + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		File_projects_locations_operations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.  The server
		 * makes a best effort to cancel the operation, but success is not
		 * guaranteed.  If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		File_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all instances in a project for either a specified location
		 * or for all locations.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. The project and location for which to retrieve instance information,
		 * in the format projects/{project_id}/locations/{location}. In Cloud
		 * Filestore, locations map to GCP zones, for example **us-west1-b**. To
		 * retrieve instance information for all locations, use "-" for the {location}
		 * value.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results. Supported values are "name", "name desc" or "" (unsorted).
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value to use if there are additional
		 * results to retrieve for this list request.
		 * @return {void} Successful response
		 */
		File_projects_locations_instances_list(parent: string, filter: string, orderBy: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an instance.
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. The instance's project and location, in the format
		 * projects/{project_id}/locations/{location}. In Cloud Filestore,
		 * locations map to GCP zones, for example **us-west1-b**.
		 * @param {string} instanceId Required. The name of the instance to create.
		 * The name must be unique for the specified project and location.
		 * @return {void} Successful response
		 */
		File_projects_locations_instances_create(parent: string, instanceId: string, requestBody: Instance): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

