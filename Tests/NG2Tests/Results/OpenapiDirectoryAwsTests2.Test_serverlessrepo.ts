import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean;
		Labels?: Array<string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;

		/** Application version details. */
		Version?: Version;
	}


	/** Application version details. */
	export interface Version {
		ApplicationId: string;
		CreationTime: string;
		ParameterDefinitions: Array<ParameterDefinition>;
		RequiredCapabilities: Array<Capability>;
		ResourcesSupported: boolean;
		SemanticVersion: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		TemplateUrl: string;
	}


	/** Parameters supported by the application. */
	export interface ParameterDefinition {
		AllowedPattern?: string;
		AllowedValues?: Array<string>;
		ConstraintDescription?: string;
		DefaultValue?: string;
		Description?: string;
		MaxLength?: number;
		MaxValue?: number;
		MinLength?: number;
		MinValue?: number;
		Name: string;
		NoEcho?: boolean;
		ReferencedByResources: Array<string>;
		Type?: string;
	}


	/** Values that must be specified in order to deploy some applications. */
	export enum Capability { CAPABILITY_IAM = 0, CAPABILITY_NAMED_IAM = 1, CAPABILITY_AUTO_EXPAND = 2, CAPABILITY_RESOURCE_POLICY = 3 }

	export interface TooManyRequestsException {
	}

	export interface BadRequestException {
	}

	export interface InternalServerErrorException {
	}

	export interface ConflictException {
	}

	export interface ForbiddenException {
	}

	export interface CreateApplicationVersionResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ParameterDefinitions?: Array<ParameterDefinition>;
		RequiredCapabilities?: Array<Capability>;
		ResourcesSupported?: boolean;
		SemanticVersion?: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		TemplateUrl?: string;
	}

	export interface CreateCloudFormationChangeSetResponse {
		ApplicationId?: string;
		ChangeSetId?: string;
		SemanticVersion?: string;
		StackId?: string;
	}


	/** Parameter value of the application. */
	export interface ParameterValue {
		Name: string;
		Value: string;
	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
	 *  </i> Data Type.
	 */
	export interface RollbackTrigger {
		Arn: string;
		Type: string;
	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>
	 *  </i> Data Type.
	 */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface CreateCloudFormationTemplateResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ExpirationTime?: string;
		SemanticVersion?: string;
		Status?: CreateCloudFormationTemplateResponseStatus;
		TemplateId?: string;
		TemplateUrl?: string;
	}

	export enum CreateCloudFormationTemplateResponseStatus { PREPARING = 0, ACTIVE = 1, EXPIRED = 2 }

	export interface NotFoundException {
	}

	export interface GetApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean;
		Labels?: Array<string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;

		/** Application version details. */
		Version?: Version;
	}

	export interface GetApplicationPolicyResponse {
		Statements?: Array<ApplicationPolicyStatement>;
	}


	/** Policy statement applied to the application. */
	export interface ApplicationPolicyStatement {
		Actions: Array<string>;
		PrincipalOrgIDs?: Array<string>;
		Principals: Array<string>;
		StatementId?: string;
	}

	export interface GetCloudFormationTemplateResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ExpirationTime?: string;
		SemanticVersion?: string;
		Status?: CreateCloudFormationTemplateResponseStatus;
		TemplateId?: string;
		TemplateUrl?: string;
	}

	export interface ListApplicationDependenciesResponse {
		Dependencies?: Array<ApplicationDependencySummary>;
		NextToken?: string;
	}


	/** A nested application summary. */
	export interface ApplicationDependencySummary {
		ApplicationId: string;
		SemanticVersion: string;
	}

	export interface ListApplicationVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionSummary>;
	}


	/** An application version summary. */
	export interface VersionSummary {
		ApplicationId: string;
		CreationTime: string;
		SemanticVersion: string;
		SourceCodeUrl?: string;
	}

	export interface ListApplicationsResponse {
		Applications?: Array<ApplicationSummary>;
		NextToken?: string;
	}


	/** Summary of details about the application. */
	export interface ApplicationSummary {
		ApplicationId: string;
		Author: string;
		CreationTime?: string;
		Description: string;
		HomePageUrl?: string;
		Labels?: Array<string>;
		Name: string;
		SpdxLicenseId?: string;
	}

	export interface PutApplicationPolicyResponse {
		Statements?: Array<ApplicationPolicyStatement>;
	}

	export interface UpdateApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean;
		Labels?: Array<string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;

		/** Application version details. */
		Version?: Version;
	}

	export interface CreateApplicationRequest {
		Author: string;
		Description: string;
		HomePageUrl?: string;
		Labels?: Array<string>;
		LicenseBody?: string;
		LicenseUrl?: string;
		Name: string;
		ReadmeBody?: string;
		ReadmeUrl?: string;
		SemanticVersion?: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		SpdxLicenseId?: string;
		TemplateBody?: string;
		TemplateUrl?: string;
	}

	export interface CreateApplicationVersionRequest {
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		TemplateBody?: string;
		TemplateUrl?: string;
	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
	 *  </i> Data Type.
	 */
	export interface RollbackConfiguration {
		MonitoringTimeInMinutes?: number;
		RollbackTriggers?: Array<RollbackTrigger>;
	}

	export interface CreateCloudFormationChangeSetRequest {
		Capabilities?: Array<string>;
		ChangeSetName?: string;
		ClientToken?: string;
		Description?: string;
		NotificationArns?: Array<string>;
		ParameterOverrides?: Array<ParameterValue>;
		ResourceTypes?: Array<string>;

		/**
		 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
		 * </i> Data Type.
		 */
		RollbackConfiguration?: RollbackConfiguration;
		SemanticVersion?: string;
		StackName: string;
		Tags?: Array<Tag>;
		TemplateId?: string;
	}

	export interface CreateCloudFormationTemplateRequest {
		SemanticVersion?: string;
	}

	export enum Status { PREPARING = 0, ACTIVE = 1, EXPIRED = 2 }

	export interface DeleteApplicationRequest {
	}

	export interface GetApplicationPolicyRequest {
	}

	export interface GetApplicationRequest {
	}

	export interface GetCloudFormationTemplateRequest {
	}

	export interface ListApplicationDependenciesRequest {
	}

	export interface ListApplicationVersionsRequest {
	}

	export interface ListApplicationsRequest {
	}

	export interface PutApplicationPolicyRequest {
		Statements: Array<ApplicationPolicyStatement>;
	}

	export interface UnshareApplicationRequest {
		OrganizationId: string;
	}

	export interface UpdateApplicationRequest {
		Author?: string;
		Description?: string;
		HomePageUrl?: string;
		Labels?: Array<string>;
		ReadmeBody?: string;
		ReadmeUrl?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
		 * Post applications
		 * @return {void} 
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists applications owned by the requester.
		 * Get applications
		 * @param {number} maxItems The total number of items to return.
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(maxItems: number, nextToken: string, MaxItems: string, NextToken: string): Observable<ListApplicationsResponse> {
			return this.http.get<ListApplicationsResponse>(this.baseUri + 'applications?maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an application version.
		 * Put applications/{applicationId}/versions/{semanticVersion}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} semanticVersion The semantic version of the new version.
		 * @return {void} 
		 */
		CreateApplicationVersion(applicationId: string, semanticVersion: string, requestBody: CreateApplicationVersionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/versions/' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an AWS CloudFormation change set for the given application.
		 * Post applications/{applicationId}/changesets
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		CreateCloudFormationChangeSet(applicationId: string, requestBody: CreateCloudFormationChangeSetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/changesets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an AWS CloudFormation template.
		 * Post applications/{applicationId}/templates
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		CreateCloudFormationTemplate(applicationId: string, requestBody: CreateCloudFormationTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified application.
		 * Delete applications/{applicationId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		DeleteApplication(applicationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified application.
		 * Get applications/{applicationId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} semanticVersion The semantic version of the application to get.
		 * @return {GetApplicationResponse} Success
		 */
		GetApplication(applicationId: string, semanticVersion: string): Observable<GetApplicationResponse> {
			return this.http.get<GetApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&semanticVersion=' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)), {});
		}

		/**
		 * Updates the specified application.
		 * Patch applications/{applicationId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(applicationId: string, requestBody: UpdateApplicationPatchBody): Observable<UpdateApplicationResponse> {
			return this.http.patch<UpdateApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the policy for the application.
		 * Get applications/{applicationId}/policy
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {GetApplicationPolicyResponse} Success
		 */
		GetApplicationPolicy(applicationId: string): Observable<GetApplicationPolicyResponse> {
			return this.http.get<GetApplicationPolicyResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/policy', {});
		}

		/**
		 * Sets the permission policy for an application. For the list of actions supported for this operation, see
		 * <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
		 * Permissions</a>
		 * .
		 * Put applications/{applicationId}/policy
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {PutApplicationPolicyResponse} Success
		 */
		PutApplicationPolicy(applicationId: string, requestBody: PutApplicationPolicyPutBody): Observable<PutApplicationPolicyResponse> {
			return this.http.put<PutApplicationPolicyResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the specified AWS CloudFormation template.
		 * Get applications/{applicationId}/templates/{templateId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} templateId <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>
		 * @return {GetCloudFormationTemplateResponse} Success
		 */
		GetCloudFormationTemplate(applicationId: string, templateId: string): Observable<GetCloudFormationTemplateResponse> {
			return this.http.get<GetCloudFormationTemplateResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)), {});
		}

		/**
		 * Retrieves the list of applications nested in the containing application.
		 * Get applications/{applicationId}/dependencies
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {number} maxItems The total number of items to return.
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} semanticVersion The semantic version of the application to get.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationDependenciesResponse} Success
		 */
		ListApplicationDependencies(applicationId: string, maxItems: number, nextToken: string, semanticVersion: string, MaxItems: string, NextToken: string): Observable<ListApplicationDependenciesResponse> {
			return this.http.get<ListApplicationDependenciesResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/dependencies&maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&semanticVersion=' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists versions for the specified application.
		 * Get applications/{applicationId}/versions
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {number} maxItems The total number of items to return.
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationVersionsResponse} Success
		 */
		ListApplicationVersions(applicationId: string, maxItems: number, nextToken: string, MaxItems: string, NextToken: string): Observable<ListApplicationVersionsResponse> {
			return this.http.get<ListApplicationVersionsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/versions&maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
		 * Post applications/{applicationId}/unshare
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		UnshareApplication(applicationId: string, requestBody: UnshareApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/unshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateApplicationPostBody {

		/**
		 * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
		 * Required
		 */
		author: string;

		/**
		 * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
		 * Required
		 */
		description: string;

		/** A URL with more information about the application, for example the location of your GitHub repository for the application. */
		homePageUrl?: string;

		/** <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p> */
		labels?: Array<string>;

		/**
		 * <p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>
		 */
		licenseBody?: string;

		/** <p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p> */
		licenseUrl?: string;

		/**
		 * <p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
		 * Required
		 */
		name: string;

		/**
		 * <p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>
		 */
		readmeBody?: string;

		/** <p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p> */
		readmeUrl?: string;

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string;

		/** <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p> */
		sourceCodeArchiveUrl?: string;

		/** A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit. */
		sourceCodeUrl?: string;

		/** A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>. */
		spdxLicenseId?: string;

		/**
		 * <p>The local raw packaged AWS SAM template file of your application.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>
		 */
		templateBody?: string;

		/** <p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p> */
		templateUrl?: string;
	}

	export interface CreateApplicationVersionPutBody {

		/** <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p> */
		sourceCodeArchiveUrl?: string;

		/** A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit. */
		sourceCodeUrl?: string;

		/** The raw packaged AWS SAM template of your application. */
		templateBody?: string;

		/** A link to the packaged AWS SAM template of your application. */
		templateUrl?: string;
	}

	export interface CreateCloudFormationChangeSetPostBody {

		/**
		 * <p>A list of values that you must specify before you can deploy certain applications.
		 * Some applications might include resources that can affect permissions in your AWS
		 * account, for example, by creating new AWS Identity and Access Management (IAM) users.
		 * For those applications, you must explicitly acknowledge their capabilities by
		 * specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,
		 * CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or
		 * CAPABILITY_NAMED_IAM:
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.
		 * If the application contains IAM resources, you can specify either CAPABILITY_IAM
		 * or CAPABILITY_NAMED_IAM. If the application contains IAM resources
		 * with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS:TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify
		 * CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review
		 * all permissions associated with the application before deploying. If you don't specify
		 * this parameter for an application that requires capabilities, the call will fail.</p>
		 */
		capabilities?: Array<string>;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		changeSetName?: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		clientToken?: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		description?: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		notificationArns?: Array<string>;

		/** A list of parameter values for the parameters of the application. */
		parameterOverrides?: Array<ParameterValue>;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		resourceTypes?: Array<string>;

		/**
		 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
		 * </i> Data Type.
		 */
		rollbackConfiguration?: CreateCloudFormationChangeSetPostBodyRollbackConfiguration;

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 * Required
		 */
		stackName: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		tags?: Array<Tag>;

		/** <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p> */
		templateId?: string;
	}

	export interface CreateCloudFormationChangeSetPostBodyRollbackConfiguration {
		MonitoringTimeInMinutes?: number;
		RollbackTriggers?: Array<RollbackTrigger>;
	}

	export interface CreateCloudFormationTemplatePostBody {

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string;
	}

	export interface UpdateApplicationPatchBody {

		/** <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p> */
		author?: string;

		/** <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p> */
		description?: string;

		/** A URL with more information about the application, for example the location of your GitHub repository for the application. */
		homePageUrl?: string;

		/** <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p> */
		labels?: Array<string>;

		/** <p>A text readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p> */
		readmeBody?: string;

		/** <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p> */
		readmeUrl?: string;
	}

	export interface PutApplicationPolicyPutBody {

		/**
		 * An array of policy statements applied to the application.
		 * Required
		 */
		statements: Array<ApplicationPolicyStatement>;
	}

	export interface UnshareApplicationPostBody {

		/**
		 * The AWS Organization ID to unshare the application from.
		 * Required
		 */
		organizationId: string;
	}

}

