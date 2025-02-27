import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateCustomerGatewayResponse {

		/** Describes the association between a customer gateway, a device, and a link. */
		CustomerGatewayAssociation?: CustomerGatewayAssociation;
	}


	/** Describes the association between a customer gateway, a device, and a link. */
	export interface CustomerGatewayAssociation {
		CustomerGatewayArn?: string;
		GlobalNetworkId?: string;
		DeviceId?: string;
		LinkId?: string;
		State?: CustomerGatewayAssociationState;
	}

	export enum CustomerGatewayAssociationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3 }

	export interface ValidationException {
	}

	export interface ServiceQuotaExceededException {
	}

	export interface AccessDeniedException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ConflictException {
	}

	export interface ThrottlingException {
	}

	export interface InternalServerException {
	}

	export interface AssociateLinkResponse {

		/** Describes the association between a device and a link. */
		LinkAssociation?: LinkAssociation;
	}


	/** Describes the association between a device and a link. */
	export interface LinkAssociation {
		GlobalNetworkId?: string;
		DeviceId?: string;
		LinkId?: string;
		LinkAssociationState?: CustomerGatewayAssociationState;
	}

	export interface CreateDeviceResponse {

		/** Describes a device. */
		Device?: Device;
	}


	/** Describes a device. */
	export interface Device {
		DeviceId?: string;
		DeviceArn?: string;
		GlobalNetworkId?: string;
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;

		/** Describes a location. */
		Location?: Location;
		SiteId?: string;
		CreatedAt?: Date;
		State?: DeviceState;
		Tags?: Array<Tag>;
	}


	/** Describes a location. */
	export interface Location {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}

	export enum DeviceState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }


	/** Describes a tag. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface CreateGlobalNetworkResponse {

		/** Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}


	/** Describes a global network. */
	export interface GlobalNetwork {
		GlobalNetworkId?: string;
		GlobalNetworkArn?: string;
		Description?: string;
		CreatedAt?: Date;
		State?: DeviceState;
		Tags?: Array<Tag>;
	}

	export interface CreateLinkResponse {

		/** Describes a link. */
		Link?: Link;
	}


	/** Describes a link. */
	export interface Link {
		LinkId?: string;
		LinkArn?: string;
		GlobalNetworkId?: string;
		SiteId?: string;
		Description?: string;
		Type?: string;

		/** Describes bandwidth information. */
		Bandwidth?: Bandwidth;
		Provider?: string;
		CreatedAt?: Date;
		State?: DeviceState;
		Tags?: Array<Tag>;
	}


	/** Describes bandwidth information. */
	export interface Bandwidth {
		UploadSpeed?: number;
		DownloadSpeed?: number;
	}

	export interface CreateSiteResponse {

		/** Describes a site. */
		Site?: Site;
	}


	/** Describes a site. */
	export interface Site {
		SiteId?: string;
		SiteArn?: string;
		GlobalNetworkId?: string;
		Description?: string;

		/** Describes a location. */
		Location?: Location;
		CreatedAt?: Date;
		State?: DeviceState;
		Tags?: Array<Tag>;
	}

	export interface DeleteDeviceResponse {

		/** Describes a device. */
		Device?: Device;
	}

	export interface DeleteGlobalNetworkResponse {

		/** Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}

	export interface DeleteLinkResponse {

		/** Describes a link. */
		Link?: Link;
	}

	export interface DeleteSiteResponse {

		/** Describes a site. */
		Site?: Site;
	}

	export interface DeregisterTransitGatewayResponse {

		/** Describes the registration of a transit gateway to a global network. */
		TransitGatewayRegistration?: TransitGatewayRegistration;
	}


	/** Describes the registration of a transit gateway to a global network. */
	export interface TransitGatewayRegistration {
		GlobalNetworkId?: string;
		TransitGatewayArn?: string;

		/** Describes the status of a transit gateway registration. */
		State?: TransitGatewayRegistrationStateReason;
	}


	/** Describes the status of a transit gateway registration. */
	export interface TransitGatewayRegistrationStateReason {
		Code?: TransitGatewayRegistrationStateReasonCode;
		Message?: string;
	}

	export enum TransitGatewayRegistrationStateReasonCode { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3, FAILED = 4 }

	export interface DescribeGlobalNetworksResponse {
		GlobalNetworks?: Array<GlobalNetwork>;
		NextToken?: string;
	}

	export interface DisassociateCustomerGatewayResponse {

		/** Describes the association between a customer gateway, a device, and a link. */
		CustomerGatewayAssociation?: CustomerGatewayAssociation;
	}

	export interface DisassociateLinkResponse {

		/** Describes the association between a device and a link. */
		LinkAssociation?: LinkAssociation;
	}

	export interface GetCustomerGatewayAssociationsResponse {
		CustomerGatewayAssociations?: Array<CustomerGatewayAssociation>;
		NextToken?: string;
	}

	export interface GetDevicesResponse {
		Devices?: Array<Device>;
		NextToken?: string;
	}

	export interface GetLinkAssociationsResponse {
		LinkAssociations?: Array<LinkAssociation>;
		NextToken?: string;
	}

	export interface GetLinksResponse {
		Links?: Array<Link>;
		NextToken?: string;
	}

	export interface GetSitesResponse {
		Sites?: Array<Site>;
		NextToken?: string;
	}

	export interface GetTransitGatewayRegistrationsResponse {
		TransitGatewayRegistrations?: Array<TransitGatewayRegistration>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}

	export interface RegisterTransitGatewayResponse {

		/** Describes the registration of a transit gateway to a global network. */
		TransitGatewayRegistration?: TransitGatewayRegistration;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateDeviceResponse {

		/** Describes a device. */
		Device?: Device;
	}

	export interface UpdateGlobalNetworkResponse {

		/** Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}

	export interface UpdateLinkResponse {

		/** Describes a link. */
		Link?: Link;
	}

	export interface UpdateSiteResponse {

		/** Describes a site. */
		Site?: Site;
	}

	export interface AssociateCustomerGatewayRequest {
		CustomerGatewayArn: string;
		DeviceId: string;
		LinkId?: string;
	}

	export interface AssociateLinkRequest {
		DeviceId: string;
		LinkId: string;
	}

	export interface CreateDeviceRequest {
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;

		/** Describes a location. */
		Location?: Location;
		SiteId?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateGlobalNetworkRequest {
		Description?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateLinkRequest {
		Description?: string;
		Type?: string;

		/**
		 * Describes bandwidth information.
		 * Required
		 */
		Bandwidth: Bandwidth;
		Provider?: string;
		SiteId: string;
		Tags?: Array<Tag>;
	}

	export interface CreateSiteRequest {
		Description?: string;

		/** Describes a location. */
		Location?: Location;
		Tags?: Array<Tag>;
	}

	export interface DeleteDeviceRequest {
	}

	export interface DeleteGlobalNetworkRequest {
	}

	export interface DeleteLinkRequest {
	}

	export interface DeleteSiteRequest {
	}

	export interface DeregisterTransitGatewayRequest {
	}

	export interface DescribeGlobalNetworksRequest {
	}

	export interface DisassociateCustomerGatewayRequest {
	}

	export interface DisassociateLinkRequest {
	}

	export interface GetCustomerGatewayAssociationsRequest {
	}

	export interface GetDevicesRequest {
	}

	export interface GetLinkAssociationsRequest {
	}

	export interface GetLinksRequest {
	}

	export interface GetSitesRequest {
	}

	export interface GetTransitGatewayRegistrationsRequest {
	}

	export enum GlobalNetworkState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export enum LinkState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export enum LinkAssociationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3 }

	export interface ListTagsForResourceRequest {
	}

	export interface RegisterTransitGatewayRequest {
		TransitGatewayArn: string;
	}

	export enum SiteState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export interface TagResourceRequest {
		Tags: Array<Tag>;
	}

	export enum TransitGatewayRegistrationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3, FAILED = 4 }

	export interface UntagResourceRequest {
	}

	export interface UpdateDeviceRequest {
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;

		/** Describes a location. */
		Location?: Location;
		SiteId?: string;
	}

	export interface UpdateGlobalNetworkRequest {
		Description?: string;
	}

	export interface UpdateLinkRequest {
		Description?: string;
		Type?: string;

		/** Describes bandwidth information. */
		Bandwidth?: Bandwidth;
		Provider?: string;
	}

	export interface UpdateSiteRequest {
		Description?: string;

		/** Describes a location. */
		Location?: Location;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate customer gateways that are connected to a VPN attachment on a transit gateway. The transit gateway must be registered in your global network. When you register a transit gateway, customer gateways that are connected to the transit gateway are automatically included in the global network. To list customer gateways that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by <code>transit-gateway-id</code>.</p> <p>You cannot associate a customer gateway with more than one device and link. </p>
		 * Post global-networks/{globalNetworkId}/customer-gateway-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateCustomerGatewayResponse} Success
		 */
		AssociateCustomerGateway(globalNetworkId: string, requestBody: AssociateCustomerGatewayPostBody): Observable<AssociateCustomerGatewayResponse> {
			return this.http.post<AssociateCustomerGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the association information for customer gateways that are associated with devices and links in your global network.
		 * Get global-networks/{globalNetworkId}/customer-gateway-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} customerGatewayArns One or more customer gateway Amazon Resource Names (ARNs). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCustomerGatewayAssociationsResponse} Success
		 */
		GetCustomerGatewayAssociations(globalNetworkId: string, customerGatewayArns: Array<string>, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<GetCustomerGatewayAssociationsResponse> {
			return this.http.get<GetCustomerGatewayAssociationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations&' + customerGatewayArns.map(z => `customerGatewayArns=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.
		 * Post global-networks/{globalNetworkId}/link-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateLinkResponse} Success
		 */
		AssociateLink(globalNetworkId: string, requestBody: AssociateLinkPostBody): Observable<AssociateLinkResponse> {
			return this.http.post<AssociateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the link associations for a device or a link. Either the device ID or the link ID must be specified.
		 * Get global-networks/{globalNetworkId}/link-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} linkId The ID of the link.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLinkAssociationsResponse} Success
		 */
		GetLinkAssociations(globalNetworkId: string, deviceId: string, linkId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<GetLinkAssociationsResponse> {
			return this.http.get<GetLinkAssociationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.
		 * Post global-networks/{globalNetworkId}/devices
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateDeviceResponse} Success
		 */
		CreateDevice(globalNetworkId: string, requestBody: CreateDevicePostBody): Observable<CreateDeviceResponse> {
			return this.http.post<CreateDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more of your devices in a global network.
		 * Get global-networks/{globalNetworkId}/devices
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} deviceIds One or more device IDs. The maximum is 10.
		 * @param {string} siteId The ID of the site.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDevicesResponse} Success
		 */
		GetDevices(globalNetworkId: string, deviceIds: Array<string>, siteId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<GetDevicesResponse> {
			return this.http.get<GetDevicesResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices&' + deviceIds.map(z => `deviceIds=${encodeURIComponent(z)}`).join('&') + '&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new, empty global network.
		 * Post global-networks
		 * @return {CreateGlobalNetworkResponse} Success
		 */
		CreateGlobalNetwork(requestBody: CreateGlobalNetworkPostBody): Observable<CreateGlobalNetworkResponse> {
			return this.http.post<CreateGlobalNetworkResponse>(this.baseUri + 'global-networks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate <code>Get*</code> action. For example, to list the transit gateways in your global network, use <a>GetTransitGatewayRegistrations</a>.
		 * Get global-networks
		 * @param {Array<string>} globalNetworkIds The IDs of one or more global networks. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeGlobalNetworksResponse} Success
		 */
		DescribeGlobalNetworks(globalNetworkIds: Array<string>, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<DescribeGlobalNetworksResponse> {
			return this.http.get<DescribeGlobalNetworksResponse>(this.baseUri + 'global-networks?' + globalNetworkIds.map(z => `globalNetworkIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new link for a specified site.
		 * Post global-networks/{globalNetworkId}/links
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateLinkResponse} Success
		 */
		CreateLink(globalNetworkId: string, requestBody: CreateLinkPostBody): Observable<CreateLinkResponse> {
			return this.http.post<CreateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about one or more links in a specified global network.</p> <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
		 * Get global-networks/{globalNetworkId}/links
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} linkIds One or more link IDs. The maximum is 10.
		 * @param {string} siteId The ID of the site.
		 * @param {string} type The link type.
		 * @param {string} provider The link provider.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLinksResponse} Success
		 */
		GetLinks(globalNetworkId: string, linkIds: Array<string>, siteId: string, type: string, provider: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<GetLinksResponse> {
			return this.http.get<GetLinksResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links&' + linkIds.map(z => `linkIds=${encodeURIComponent(z)}`).join('&') + '&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&provider=' + (provider == null ? '' : encodeURIComponent(provider)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new site in a global network.
		 * Post global-networks/{globalNetworkId}/sites
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateSiteResponse} Success
		 */
		CreateSite(globalNetworkId: string, requestBody: CreateSitePostBody): Observable<CreateSiteResponse> {
			return this.http.post<CreateSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more of your sites in a global network.
		 * Get global-networks/{globalNetworkId}/sites
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} siteIds One or more site IDs. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSitesResponse} Success
		 */
		GetSites(globalNetworkId: string, siteIds: Array<string>, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<GetSitesResponse> {
			return this.http.get<GetSitesResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites&' + siteIds.map(z => `siteIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes an existing device. You must first disassociate the device from any links and customer gateways.
		 * Delete global-networks/{globalNetworkId}/devices/{deviceId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @return {DeleteDeviceResponse} Success
		 */
		DeleteDevice(globalNetworkId: string, deviceId: string): Observable<DeleteDeviceResponse> {
			return this.http.delete<DeleteDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), {});
		}

		/**
		 * Updates the details for an existing device. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/devices/{deviceId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @return {UpdateDeviceResponse} Success
		 */
		UpdateDevice(globalNetworkId: string, deviceId: string, requestBody: UpdateDevicePatchBody): Observable<UpdateDeviceResponse> {
			return this.http.patch<UpdateDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing global network. You must first delete all global network objects (devices, links, and sites) and deregister all transit gateways.
		 * Delete global-networks/{globalNetworkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {DeleteGlobalNetworkResponse} Success
		 */
		DeleteGlobalNetwork(globalNetworkId: string): Observable<DeleteGlobalNetworkResponse> {
			return this.http.delete<DeleteGlobalNetworkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)), {});
		}

		/**
		 * Updates an existing global network. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}
		 * @param {string} globalNetworkId The ID of your global network.
		 * @return {UpdateGlobalNetworkResponse} Success
		 */
		UpdateGlobalNetwork(globalNetworkId: string, requestBody: UpdateGlobalNetworkPatchBody): Observable<UpdateGlobalNetworkResponse> {
			return this.http.patch<UpdateGlobalNetworkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing link. You must first disassociate the link from any devices and customer gateways.
		 * Delete global-networks/{globalNetworkId}/links/{linkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} linkId The ID of the link.
		 * @return {DeleteLinkResponse} Success
		 */
		DeleteLink(globalNetworkId: string, linkId: string): Observable<DeleteLinkResponse> {
			return this.http.delete<DeleteLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links/' + (linkId == null ? '' : encodeURIComponent(linkId)), {});
		}

		/**
		 * Updates the details for an existing link. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/links/{linkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} linkId The ID of the link.
		 * @return {UpdateLinkResponse} Success
		 */
		UpdateLink(globalNetworkId: string, linkId: string, requestBody: UpdateLinkPatchBody): Observable<UpdateLinkResponse> {
			return this.http.patch<UpdateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing site. The site cannot be associated with any device or link.
		 * Delete global-networks/{globalNetworkId}/sites/{siteId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} siteId The ID of the site.
		 * @return {DeleteSiteResponse} Success
		 */
		DeleteSite(globalNetworkId: string, siteId: string): Observable<DeleteSiteResponse> {
			return this.http.delete<DeleteSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites/' + (siteId == null ? '' : encodeURIComponent(siteId)), {});
		}

		/**
		 * Updates the information for an existing site. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/sites/{siteId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} siteId The ID of your site.
		 * @return {UpdateSiteResponse} Success
		 */
		UpdateSite(globalNetworkId: string, siteId: string, requestBody: UpdateSitePatchBody): Observable<UpdateSiteResponse> {
			return this.http.patch<UpdateSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites/' + (siteId == null ? '' : encodeURIComponent(siteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters a transit gateway from your global network. This action does not delete your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.
		 * Delete global-networks/{globalNetworkId}/transit-gateway-registrations/{transitGatewayArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} transitGatewayArn The Amazon Resource Name (ARN) of the transit gateway.
		 * @return {DeregisterTransitGatewayResponse} Success
		 */
		DeregisterTransitGateway(globalNetworkId: string, transitGatewayArn: string): Observable<DeregisterTransitGatewayResponse> {
			return this.http.delete<DeregisterTransitGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations/' + (transitGatewayArn == null ? '' : encodeURIComponent(transitGatewayArn)), {});
		}

		/**
		 * Disassociates a customer gateway from a device and a link.
		 * Delete global-networks/{globalNetworkId}/customer-gateway-associations/{customerGatewayArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} customerGatewayArn The Amazon Resource Name (ARN) of the customer gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * @return {DisassociateCustomerGatewayResponse} Success
		 */
		DisassociateCustomerGateway(globalNetworkId: string, customerGatewayArn: string): Observable<DisassociateCustomerGatewayResponse> {
			return this.http.delete<DisassociateCustomerGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations/' + (customerGatewayArn == null ? '' : encodeURIComponent(customerGatewayArn)), {});
		}

		/**
		 * Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.
		 * Delete global-networks/{globalNetworkId}/link-associations#deviceId&linkId
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} linkId The ID of the link.
		 * @return {DisassociateLinkResponse} Success
		 */
		DisassociateLink(globalNetworkId: string, deviceId: string, linkId: string): Observable<DisassociateLinkResponse> {
			return this.http.delete<DisassociateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations#deviceId&linkId&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)), {});
		}

		/**
		 * Gets information about the transit gateway registrations in a specified global network.
		 * Get global-networks/{globalNetworkId}/transit-gateway-registrations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} transitGatewayArns The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTransitGatewayRegistrationsResponse} Success
		 */
		GetTransitGatewayRegistrations(globalNetworkId: string, transitGatewayArns: Array<string>, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<GetTransitGatewayRegistrationsResponse> {
			return this.http.get<GetTransitGatewayRegistrationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations&' + transitGatewayArns.map(z => `transitGatewayArns=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
		 * Post global-networks/{globalNetworkId}/transit-gateway-registrations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {RegisterTransitGatewayResponse} Success
		 */
		RegisterTransitGateway(globalNetworkId: string, requestBody: RegisterTransitGatewayPostBody): Observable<RegisterTransitGatewayResponse> {
			return this.http.post<RegisterTransitGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for a specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags a specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys to remove from the specified resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AssociateCustomerGatewayPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the customer gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * Required
		 */
		CustomerGatewayArn: string;

		/**
		 * The ID of the device.
		 * Required
		 */
		DeviceId: string;

		/** The ID of the link. */
		LinkId?: string;
	}

	export interface AssociateLinkPostBody {

		/**
		 * The ID of the device.
		 * Required
		 */
		DeviceId: string;

		/**
		 * The ID of the link.
		 * Required
		 */
		LinkId: string;
	}

	export interface CreateDevicePostBody {

		/** <p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/** The type of the device. */
		Type?: string;

		/** <p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Vendor?: string;

		/** <p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Model?: string;

		/** <p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		SerialNumber?: string;

		/** Describes a location. */
		Location?: CreateDevicePostBodyLocation;

		/** The ID of the site. */
		SiteId?: string;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}

	export interface CreateDevicePostBodyLocation {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}

	export interface CreateGlobalNetworkPostBody {

		/** <p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}

	export interface CreateLinkPostBody {

		/** <p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/** <p>The type of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Type?: string;

		/**
		 * Describes bandwidth information.
		 * Required
		 */
		Bandwidth: CreateLinkPostBodyBandwidth;

		/** <p>The provider of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Provider?: string;

		/**
		 * The ID of the site.
		 * Required
		 */
		SiteId: string;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}

	export interface CreateLinkPostBodyBandwidth {
		UploadSpeed?: number;
		DownloadSpeed?: number;
	}

	export interface CreateSitePostBody {

		/** <p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/** Describes a location. */
		Location?: CreateSitePostBodyLocation;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}

	export interface CreateSitePostBodyLocation {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}

	export interface UpdateDevicePatchBody {

		/** <p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/** The type of the device. */
		Type?: string;

		/** <p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Vendor?: string;

		/** <p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Model?: string;

		/** <p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		SerialNumber?: string;

		/** Describes a location. */
		Location?: UpdateDevicePatchBodyLocation;

		/** The ID of the site. */
		SiteId?: string;
	}

	export interface UpdateDevicePatchBodyLocation {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}

	export interface UpdateGlobalNetworkPatchBody {

		/** <p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;
	}

	export interface UpdateLinkPatchBody {

		/** <p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/** <p>The type of the link.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Type?: string;

		/** Describes bandwidth information. */
		Bandwidth?: UpdateLinkPatchBodyBandwidth;

		/** <p>The provider of the link.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Provider?: string;
	}

	export interface UpdateLinkPatchBodyBandwidth {
		UploadSpeed?: number;
		DownloadSpeed?: number;
	}

	export interface UpdateSitePatchBody {

		/** <p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string;

		/** Describes a location. */
		Location?: UpdateSitePatchBodyLocation;
	}

	export interface UpdateSitePatchBodyLocation {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}

	export interface RegisterTransitGatewayPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the transit gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * Required
		 */
		TransitGatewayArn: string;
	}

	export interface TagResourcePostBody {

		/**
		 * The tags to apply to the specified resource.
		 * Required
		 */
		Tags: Array<Tag>;
	}

}

