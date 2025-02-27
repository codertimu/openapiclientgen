import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents the input for <code>AddTagsToStream</code>. */
	export interface AddTagsToStreamInput {
		StreamName: string;
		Tags: TagMap;
	}

	export interface TagMap {
	}


	/** The requested resource could not be found. The stream might not be specified correctly. */
	export interface ResourceNotFoundException {
		message?: string;
	}


	/** The resource is not available for this operation. For successful operation, the resource must be in the <code>ACTIVE</code> state. */
	export interface ResourceInUseException {
		message?: string;
	}


	/** A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message. */
	export interface InvalidArgumentException {
		message?: string;
	}


	/** The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.  */
	export interface LimitExceededException {
		message?: string;
	}


	/** Represents the input for <code>CreateStream</code>. */
	export interface CreateStreamInput {
		StreamName: string;
		ShardCount: number;
	}


	/** Represents the input for <a>DecreaseStreamRetentionPeriod</a>. */
	export interface DecreaseStreamRetentionPeriodInput {
		StreamName: string;
		RetentionPeriodHours: number;
	}


	/** Represents the input for <a>DeleteStream</a>. */
	export interface DeleteStreamInput {
		StreamName: string;
		EnforceConsumerDeletion?: boolean;
	}

	export interface DeregisterStreamConsumerInput {
		StreamARN?: string;
		ConsumerName?: string;
		ConsumerARN?: string;
	}

	export interface DescribeLimitsOutput {
		ShardLimit: number;
		OpenShardCount: number;
	}

	export interface DescribeLimitsInput {
	}


	/** Represents the output for <code>DescribeStream</code>. */
	export interface DescribeStreamOutput {

		/**
		 * Represents the output for <a>DescribeStream</a>.
		 * Required
		 */
		StreamDescription: StreamDescription;
	}


	/** Represents the output for <a>DescribeStream</a>. */
	export interface StreamDescription {
		StreamName: string;
		StreamARN: string;
		StreamStatus: StreamDescriptionStreamStatus;
		Shards: Array<Shard>;
		HasMoreShards: boolean;
		RetentionPeriodHours: number;
		StreamCreationTimestamp: Date;
		EnhancedMonitoring: Array<EnhancedMetrics>;
		EncryptionType?: StreamDescriptionEncryptionType;
		KeyId?: string;
	}

	export enum StreamDescriptionStreamStatus { CREATING = 0, DELETING = 1, ACTIVE = 2, UPDATING = 3 }


	/** A uniquely identified group of data records in a Kinesis data stream. */
	export interface Shard {
		ShardId: string;
		ParentShardId?: string;
		AdjacentParentShardId?: string;

		/**
		 * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
		 * Required
		 */
		HashKeyRange: HashKeyRange;

		/**
		 * The range of possible sequence numbers for the shard.
		 * Required
		 */
		SequenceNumberRange: SequenceNumberRange;
	}


	/** The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers. */
	export interface HashKeyRange {
		StartingHashKey: string;
		EndingHashKey: string;
	}


	/** The range of possible sequence numbers for the shard. */
	export interface SequenceNumberRange {
		StartingSequenceNumber: string;
		EndingSequenceNumber?: string;
	}


	/** Represents enhanced metrics types. */
	export interface EnhancedMetrics {
		ShardLevelMetrics?: Array<MetricsName>;
	}

	export enum MetricsName { IncomingBytes = 0, IncomingRecords = 1, OutgoingBytes = 2, OutgoingRecords = 3, WriteProvisionedThroughputExceeded = 4, ReadProvisionedThroughputExceeded = 5, IteratorAgeMilliseconds = 6, ALL = 7 }

	export enum StreamDescriptionEncryptionType { NONE = 0, KMS = 1 }


	/** Represents the input for <code>DescribeStream</code>. */
	export interface DescribeStreamInput {
		StreamName: string;
		Limit?: number;
		ExclusiveStartShardId?: string;
	}

	export interface DescribeStreamConsumerOutput {

		/**
		 * An object that represents the details of a registered consumer.
		 * Required
		 */
		ConsumerDescription: ConsumerDescription;
	}


	/** An object that represents the details of a registered consumer. */
	export interface ConsumerDescription {
		ConsumerName: string;
		ConsumerARN: string;
		ConsumerStatus: ConsumerDescriptionConsumerStatus;
		ConsumerCreationTimestamp: Date;
		StreamARN: string;
	}

	export enum ConsumerDescriptionConsumerStatus { CREATING = 0, DELETING = 1, ACTIVE = 2 }

	export interface DescribeStreamConsumerInput {
		StreamARN?: string;
		ConsumerName?: string;
		ConsumerARN?: string;
	}

	export interface DescribeStreamSummaryOutput {

		/**
		 * Represents the output for <a>DescribeStreamSummary</a>
		 * Required
		 */
		StreamDescriptionSummary: StreamDescriptionSummary;
	}


	/** Represents the output for <a>DescribeStreamSummary</a>  */
	export interface StreamDescriptionSummary {
		StreamName: string;
		StreamARN: string;
		StreamStatus: StreamDescriptionStreamStatus;
		RetentionPeriodHours: number;
		StreamCreationTimestamp: Date;
		EnhancedMonitoring: Array<EnhancedMetrics>;
		EncryptionType?: StreamDescriptionEncryptionType;
		KeyId?: string;
		OpenShardCount: number;
		ConsumerCount?: number;
	}

	export interface DescribeStreamSummaryInput {
		StreamName: string;
	}


	/** Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>. */
	export interface EnhancedMonitoringOutput {
		StreamName?: string;
		CurrentShardLevelMetrics?: Array<MetricsName>;
		DesiredShardLevelMetrics?: Array<MetricsName>;
	}


	/** Represents the input for <a>DisableEnhancedMonitoring</a>. */
	export interface DisableEnhancedMonitoringInput {
		StreamName: string;
		ShardLevelMetrics: Array<MetricsName>;
	}


	/** Represents the input for <a>EnableEnhancedMonitoring</a>. */
	export interface EnableEnhancedMonitoringInput {
		StreamName: string;
		ShardLevelMetrics: Array<MetricsName>;
	}


	/** Represents the output for <a>GetRecords</a>. */
	export interface GetRecordsOutput {
		Records: Array<Record>;
		NextShardIterator?: string;
		MillisBehindLatest?: number;
	}


	/** The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob. */
	export interface Record {
		SequenceNumber: string;
		ApproximateArrivalTimestamp?: Date;
		Data: string;
		PartitionKey: string;
		EncryptionType?: StreamDescriptionEncryptionType;
	}


	/** Represents the input for <a>GetRecords</a>. */
	export interface GetRecordsInput {
		ShardIterator: string;
		Limit?: number;
	}


	/** The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>, and <a href="http://docs.aws.amazon.com/general/latest/gr/api-retries.html">Error Retries and Exponential Backoff in AWS</a> in the <i>AWS General Reference</i>. */
	export interface ProvisionedThroughputExceededException {
		message?: string;
	}


	/** The provided iterator exceeds the maximum age allowed. */
	export interface ExpiredIteratorException {
		message?: string;
	}


	/** The request was rejected because the specified customer master key (CMK) isn't enabled. */
	export interface KMSDisabledException {
		message?: string;
	}


	/** The request was rejected because the state of the specified resource isn't valid for this request. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>. */
	export interface KMSInvalidStateException {
		message?: string;
	}


	/** The ciphertext references a key that doesn't exist or that you don't have access to. */
	export interface KMSAccessDeniedException {
		message?: string;
	}


	/** The request was rejected because the specified entity or resource can't be found. */
	export interface KMSNotFoundException {
		message?: string;
	}


	/** The AWS access key ID needs a subscription for the service. */
	export interface KMSOptInRequired {
		message?: string;
	}


	/** The request was denied due to request throttling. For more information about throttling, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>. */
	export interface KMSThrottlingException {
		message?: string;
	}


	/** Represents the output for <code>GetShardIterator</code>. */
	export interface GetShardIteratorOutput {
		ShardIterator?: string;
	}


	/** Represents the input for <code>GetShardIterator</code>. */
	export interface GetShardIteratorInput {
		StreamName: string;
		ShardId: string;
		ShardIteratorType: GetShardIteratorInputShardIteratorType;
		StartingSequenceNumber?: string;
		Timestamp?: Date;
	}

	export enum GetShardIteratorInputShardIteratorType { AT_SEQUENCE_NUMBER = 0, AFTER_SEQUENCE_NUMBER = 1, TRIM_HORIZON = 2, LATEST = 3, AT_TIMESTAMP = 4 }


	/** Represents the input for <a>IncreaseStreamRetentionPeriod</a>. */
	export interface IncreaseStreamRetentionPeriodInput {
		StreamName: string;
		RetentionPeriodHours: number;
	}

	export interface ListShardsOutput {
		Shards?: Array<Shard>;
		NextToken?: string;
	}

	export interface ListShardsInput {
		StreamName?: string;
		NextToken?: string;
		ExclusiveStartShardId?: string;
		MaxResults?: number;
		StreamCreationTimestamp?: Date;
	}


	/** The pagination token passed to the operation is expired. */
	export interface ExpiredNextTokenException {
		message?: string;
	}

	export interface ListStreamConsumersOutput {
		Consumers?: Array<Consumer>;
		NextToken?: string;
	}


	/** An object that represents the details of the consumer you registered. */
	export interface Consumer {
		ConsumerName: string;
		ConsumerARN: string;
		ConsumerStatus: ConsumerDescriptionConsumerStatus;
		ConsumerCreationTimestamp: Date;
	}

	export interface ListStreamConsumersInput {
		StreamARN: string;
		NextToken?: string;
		MaxResults?: number;
		StreamCreationTimestamp?: Date;
	}


	/** Represents the output for <code>ListStreams</code>. */
	export interface ListStreamsOutput {
		StreamNames: Array<string>;
		HasMoreStreams: boolean;
	}


	/** Represents the input for <code>ListStreams</code>. */
	export interface ListStreamsInput {
		Limit?: number;
		ExclusiveStartStreamName?: string;
	}


	/** Represents the output for <code>ListTagsForStream</code>. */
	export interface ListTagsForStreamOutput {
		Tags: Array<Tag>;
		HasMoreTags: boolean;
	}


	/** Metadata assigned to the stream, consisting of a key-value pair. */
	export interface Tag {
		Key: string;
		Value?: string;
	}


	/** Represents the input for <code>ListTagsForStream</code>. */
	export interface ListTagsForStreamInput {
		StreamName: string;
		ExclusiveStartTagKey?: string;
		Limit?: number;
	}


	/** Represents the input for <code>MergeShards</code>. */
	export interface MergeShardsInput {
		StreamName: string;
		ShardToMerge: string;
		AdjacentShardToMerge: string;
	}


	/** Represents the output for <code>PutRecord</code>. */
	export interface PutRecordOutput {
		ShardId: string;
		SequenceNumber: string;
		EncryptionType?: StreamDescriptionEncryptionType;
	}


	/** Represents the input for <code>PutRecord</code>. */
	export interface PutRecordInput {
		StreamName: string;
		Data: string;
		PartitionKey: string;
		ExplicitHashKey?: string;
		SequenceNumberForOrdering?: string;
	}


	/**  <code>PutRecords</code> results. */
	export interface PutRecordsOutput {
		FailedRecordCount?: number;
		Records: Array<PutRecordsResultEntry>;
		EncryptionType?: StreamDescriptionEncryptionType;
	}


	/** Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result. */
	export interface PutRecordsResultEntry {
		SequenceNumber?: string;
		ShardId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}


	/** A <code>PutRecords</code> request. */
	export interface PutRecordsInput {
		Records: Array<PutRecordsRequestEntry>;
		StreamName: string;
	}


	/** Represents the output for <code>PutRecords</code>. */
	export interface PutRecordsRequestEntry {
		Data: string;
		ExplicitHashKey?: string;
		PartitionKey: string;
	}

	export interface RegisterStreamConsumerOutput {

		/**
		 * An object that represents the details of the consumer you registered.
		 * Required
		 */
		Consumer: Consumer;
	}

	export interface RegisterStreamConsumerInput {
		StreamARN: string;
		ConsumerName: string;
	}


	/** Represents the input for <code>RemoveTagsFromStream</code>. */
	export interface RemoveTagsFromStreamInput {
		StreamName: string;
		TagKeys: Array<string>;
	}


	/** Represents the input for <code>SplitShard</code>. */
	export interface SplitShardInput {
		StreamName: string;
		ShardToSplit: string;
		NewStartingHashKey: string;
	}

	export interface StartStreamEncryptionInput {
		StreamName: string;
		EncryptionType: StreamDescriptionEncryptionType;
		KeyId: string;
	}

	export interface StopStreamEncryptionInput {
		StreamName: string;
		EncryptionType: StreamDescriptionEncryptionType;
		KeyId: string;
	}

	export interface UpdateShardCountOutput {
		StreamName?: string;
		CurrentShardCount?: number;
		TargetShardCount?: number;
	}

	export interface UpdateShardCountInput {
		StreamName: string;
		TargetShardCount: number;
		ScalingType: UpdateShardCountInputScalingType;
	}

	export enum UpdateShardCountInputScalingType { UNIFORM_SCALING = 0 }

	export enum ConsumerStatus { CREATING = 0, DELETING = 1, ACTIVE = 2 }

	export enum EncryptionType { NONE = 0, KMS = 1 }

	export enum ShardIteratorType { AT_SEQUENCE_NUMBER = 0, AFTER_SEQUENCE_NUMBER = 1, TRIM_HORIZON = 2, LATEST = 3, AT_TIMESTAMP = 4 }

	export interface InternalFailureException {
		message?: string;
	}

	export enum ScalingType { UNIFORM_SCALING = 0 }

	export interface StartingPosition {
		Type: GetShardIteratorInputShardIteratorType;
		SequenceNumber?: string;
		Timestamp?: Date;
	}

	export enum StreamStatus { CREATING = 0, DELETING = 1, ACTIVE = 2, UPDATING = 3 }


	/** After you call <a>SubscribeToShard</a>, Kinesis Data Streams sends events of this type to your consumer.  */
	export interface SubscribeToShardEvent {
		Records: Array<Record>;
		ContinuationSequenceNumber: string;
		MillisBehindLatest: number;
	}

	export interface SubscribeToShardEventStream {

		/**
		 * After you call <a>SubscribeToShard</a>, Kinesis Data Streams sends events of this type to your consumer.
		 * Required
		 */
		SubscribeToShardEvent: SubscribeToShardEvent;
	}

	export interface SubscribeToShardInput {
		ConsumerARN: string;
		ShardId: string;
		StartingPosition: StartingPosition;
	}

	export interface SubscribeToShardOutput {
		EventStream: SubscribeToShardEventStream;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds or updates tags for the specified Kinesis data stream. Each time you invoke this operation, you can specify up to 10 tags. If you want to add more than 10 tags to your stream, you can invoke this operation multiple times. In total, each stream can have up to 50 tags.</p> <p>If tags have already been assigned to the stream, <code>AddTagsToStream</code> overwrites any existing tags that correspond to the specified tag keys.</p> <p> <a>AddTagsToStream</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.AddTagsToStream
		 * @return {void} Success
		 */
		AddTagsToStream(requestBody: AddTagsToStreamInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.AddTagsToStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a Kinesis data stream. A stream captures and transports data records that are continuously emitted from different data sources or <i>producers</i>. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream.</p> <p>You specify and control the number of shards that a stream is composed of. Each shard can support reads up to five transactions per second, up to a maximum data read total of 2 MB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second. If the amount of data input increases or decreases, you can add or remove shards.</p> <p>The stream name identifies the stream. The name is scoped to the AWS account used by the application. It is also scoped by AWS Region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different Regions, can have the same name.</p> <p> <code>CreateStream</code> is an asynchronous operation. Upon receiving a <code>CreateStream</code> request, Kinesis Data Streams immediately returns and sets the stream status to <code>CREATING</code>. After the stream is created, Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. You should perform read and write operations only on an <code>ACTIVE</code> stream. </p> <p>You receive a <code>LimitExceededException</code> when making a <code>CreateStream</code> request when you try to do one of the following:</p> <ul> <li> <p>Have more than five streams in the <code>CREATING</code> state at any point in time.</p> </li> <li> <p>Create more shards than are authorized for your account.</p> </li> </ul> <p>For the default shard limit for an AWS account, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To increase this limit, <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact AWS Support</a>.</p> <p>You can use <code>DescribeStream</code> to check the stream status, which is returned in <code>StreamStatus</code>.</p> <p> <a>CreateStream</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.CreateStream
		 * @return {void} Success
		 */
		CreateStream(requestBody: CreateStreamInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.CreateStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Decreases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The minimum value of a stream's retention period is 24 hours.</p> <p>This operation may result in lost data. For example, if the stream's retention period is 48 hours and is decreased to 24 hours, any data already in the stream that is older than 24 hours is inaccessible.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod
		 * @return {void} Success
		 */
		DecreaseStreamRetentionPeriod(requestBody: DecreaseStreamRetentionPeriodInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a Kinesis data stream and all its shards and data. You must shut down any applications that are operating on the stream before you delete the stream. If an application attempts to operate on a deleted stream, it receives the exception <code>ResourceNotFoundException</code>.</p> <p>If the stream is in the <code>ACTIVE</code> state, you can delete it. After a <code>DeleteStream</code> request, the specified stream is in the <code>DELETING</code> state until Kinesis Data Streams completes the deletion.</p> <p> <b>Note:</b> Kinesis Data Streams might continue to accept data read and write operations, such as <a>PutRecord</a>, <a>PutRecords</a>, and <a>GetRecords</a>, on a stream in the <code>DELETING</code> state until the stream deletion is complete.</p> <p>When you delete a stream, any shards in that stream are also deleted, and any tags are dissociated from the stream.</p> <p>You can use the <a>DescribeStream</a> operation to check the state of the stream, which is returned in <code>StreamStatus</code>.</p> <p> <a>DeleteStream</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DeleteStream
		 * @return {void} Success
		 */
		DeleteStream(requestBody: DeleteStreamInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DeleteStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>To deregister a consumer, provide its ARN. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to deregister, you can use the <a>ListStreamConsumers</a> operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its name and ARN.</p> <p>This operation has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer
		 * @return {void} Success
		 */
		DeregisterStreamConsumer(requestBody: DeregisterStreamConsumerInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the shard limits and usage for the account.</p> <p>If you update your account limits, the old limits might be returned for a few minutes.</p> <p>This operation has a limit of one transaction per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DescribeLimits
		 * @return {DescribeLimitsOutput} Success
		 */
		DescribeLimits(requestBody: DescribeLimitsInput): Observable<DescribeLimitsOutput> {
			return this.http.post<DescribeLimitsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DescribeLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified Kinesis data stream.</p> <p>The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream.</p> <p>You can limit the number of shards returned by each call. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-retrieve-shards.html">Retrieving Shards from a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard.</p> <p>This operation has a limit of 10 transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DescribeStream
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartShardId Pagination token
		 * @return {DescribeStreamOutput} Success
		 */
		DescribeStream(Limit: string, ExclusiveStartShardId: string, requestBody: DescribeStreamInput): Observable<DescribeStreamOutput> {
			return this.http.post<DescribeStreamOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DescribeStream?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartShardId=' + (ExclusiveStartShardId == null ? '' : encodeURIComponent(ExclusiveStartShardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>To get the description of a registered consumer, provide the ARN of the consumer. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to describe, you can use the <a>ListStreamConsumers</a> operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream.</p> <p>This operation has a limit of 20 transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer
		 * @return {DescribeStreamConsumerOutput} Success
		 */
		DescribeStreamConsumer(requestBody: DescribeStreamConsumerInput): Observable<DescribeStreamConsumerOutput> {
			return this.http.post<DescribeStreamConsumerOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a summarized description of the specified Kinesis data stream without the shard list.</p> <p>The information returned includes the stream name, Amazon Resource Name (ARN), status, record retention period, approximate creation time, monitoring, encryption details, and open shard count. </p>
		 * Post #X-Amz-Target=Kinesis_20131202.DescribeStreamSummary
		 * @return {DescribeStreamSummaryOutput} Success
		 */
		DescribeStreamSummary(requestBody: DescribeStreamSummaryInput): Observable<DescribeStreamSummaryOutput> {
			return this.http.post<DescribeStreamSummaryOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables enhanced monitoring.
		 * Post #X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring
		 * @return {EnhancedMonitoringOutput} Success
		 */
		DisableEnhancedMonitoring(requestBody: DisableEnhancedMonitoringInput): Observable<EnhancedMonitoringOutput> {
			return this.http.post<EnhancedMonitoringOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables enhanced Kinesis data stream monitoring for shard-level metrics.
		 * Post #X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring
		 * @return {EnhancedMonitoringOutput} Success
		 */
		EnableEnhancedMonitoring(requestBody: EnableEnhancedMonitoringInput): Observable<EnhancedMonitoringOutput> {
			return this.http.post<EnhancedMonitoringOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets data records from a Kinesis data stream's shard.</p> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading data records sequentially. If there are no records available in the portion of the shard that the iterator points to, <a>GetRecords</a> returns an empty list. It might take multiple calls to get to a portion of the shard that contains records.</p> <p>You can scale by provisioning multiple shards per stream while considering service limits (for more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>). Your application should have one thread per shard, each reading continuously from its stream. To read from a stream continually, call <a>GetRecords</a> in a loop. Use <a>GetShardIterator</a> to get the shard iterator to specify in the first <a>GetRecords</a> call. <a>GetRecords</a> returns a new shard iterator in <code>NextShardIterator</code>. Specify the shard iterator returned in <code>NextShardIterator</code> in subsequent calls to <a>GetRecords</a>. If the shard has been closed, the shard iterator can't return more data and <a>GetRecords</a> returns <code>null</code> in <code>NextShardIterator</code>. You can terminate the loop when the shard is closed, or when the shard iterator reaches the record with the sequence number or other attribute that marks it as the last record to process.</p> <p>Each data record can be up to 1 MiB in size, and each shard can read up to 2 MiB per second. You can ensure that your calls don't exceed the maximum supported size or throughput by using the <code>Limit</code> parameter to specify the maximum number of records that <a>GetRecords</a> can return. Consider your average record size when determining this limit. The maximum number of records that can be returned per call is 10,000.</p> <p>The size of the data returned by <a>GetRecords</a> varies depending on the utilization of the shard. The maximum size of data that <a>GetRecords</a> can return is 10 MiB. If a call returns this amount of data, subsequent calls made within the next 5 seconds throw <code>ProvisionedThroughputExceededException</code>. If there is insufficient provisioned throughput on the stream, subsequent calls made within the next 1 second throw <code>ProvisionedThroughputExceededException</code>. <a>GetRecords</a> doesn't return any data when it throws an exception. For this reason, we recommend that you wait 1 second between calls to <a>GetRecords</a>. However, it's possible that the application will get exceptions for longer than 1 second.</p> <p>To detect whether the application is falling behind in processing, you can use the <code>MillisBehindLatest</code> response attribute. You can also monitor the stream using CloudWatch metrics and other mechanisms (see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/monitoring.html">Monitoring</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>).</p> <p>Each Amazon Kinesis record includes a value, <code>ApproximateArrivalTimestamp</code>, that is set when a stream successfully receives and stores a record. This is commonly referred to as a server-side time stamp, whereas a client-side time stamp is set when a data producer creates or sends the record to a stream (a data producer is any data source putting data records into a stream, for example with <a>PutRecords</a>). The time stamp has millisecond precision. There are no guarantees about the time stamp accuracy, or that the time stamp is always increasing. For example, records in a shard or across a stream might have time stamps that are out of order.</p> <p>This operation has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.GetRecords
		 * @return {GetRecordsOutput} Success
		 */
		GetRecords(requestBody: GetRecordsInput): Observable<GetRecordsOutput> {
			return this.http.post<GetRecordsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.GetRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets an Amazon Kinesis shard iterator. A shard iterator expires 5 minutes after it is returned to the requester.</p> <p>A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards.</p> <p>You must specify the shard iterator type. For example, you can set the <code>ShardIteratorType</code> parameter to read exactly from the position denoted by a specific sequence number by using the <code>AT_SEQUENCE_NUMBER</code> shard iterator type. Alternatively, the parameter can read right after the sequence number by using the <code>AFTER_SEQUENCE_NUMBER</code> shard iterator type, using sequence numbers returned by earlier calls to <a>PutRecord</a>, <a>PutRecords</a>, <a>GetRecords</a>, or <a>DescribeStream</a>. In the request, you can specify the shard iterator type <code>AT_TIMESTAMP</code> to read records from an arbitrary point in time, <code>TRIM_HORIZON</code> to cause <code>ShardIterator</code> to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or <code>LATEST</code> so that you always read the most recent data in the shard. </p> <p>When you read repeatedly from a stream, use a <a>GetShardIterator</a> request to get the first shard iterator for use in your first <a>GetRecords</a> request and for subsequent reads use the shard iterator returned by the <a>GetRecords</a> request in <code>NextShardIterator</code>. A new shard iterator is returned by every <a>GetRecords</a> request in <code>NextShardIterator</code>, which you use in the <code>ShardIterator</code> parameter of the next <a>GetRecords</a> request. </p> <p>If a <a>GetShardIterator</a> request is made too often, you receive a <code>ProvisionedThroughputExceededException</code>. For more information about throughput limits, see <a>GetRecords</a>, and <a href="http://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If the shard is closed, <a>GetShardIterator</a> returns a valid iterator for the last sequence number of the shard. A shard can be closed as a result of using <a>SplitShard</a> or <a>MergeShards</a>.</p> <p> <a>GetShardIterator</a> has a limit of five transactions per second per account per open shard.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.GetShardIterator
		 * @return {GetShardIteratorOutput} Success
		 */
		GetShardIterator(requestBody: GetShardIteratorInput): Observable<GetShardIteratorOutput> {
			return this.http.post<GetShardIteratorOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.GetShardIterator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Increases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 168 hours (7 days).</p> <p>If you choose a longer stream retention period, this operation increases the time period during which records that have not yet expired are accessible. However, it does not make previous, expired data (older than the stream's previous retention period) accessible after the operation has been called. For example, if a stream's retention period is set to 24 hours and is increased to 168 hours, any data that is older than 24 hours remains inaccessible to consumer applications.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod
		 * @return {void} Success
		 */
		IncreaseStreamRetentionPeriod(requestBody: IncreaseStreamRetentionPeriodInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the shards in a stream and provides information about each shard. This operation has a limit of 100 transactions per second per data stream.</p> <important> <p>This API is a new operation that is used by the Amazon Kinesis Client Library (KCL). If you have a fine-grained IAM policy that only allows specific operations, you must update your policy to allow calls to this API. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html">Controlling Access to Amazon Kinesis Data Streams Resources Using IAM</a>.</p> </important>
		 * Post #X-Amz-Target=Kinesis_20131202.ListShards
		 * @return {ListShardsOutput} Success
		 */
		ListShards(requestBody: ListShardsInput): Observable<ListShardsOutput> {
			return this.http.post<ListShardsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.ListShards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the consumers registered to receive data from a stream using enhanced fan-out, and provides information about each consumer.</p> <p>This operation has a limit of 10 transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.ListStreamConsumers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStreamConsumersOutput} Success
		 */
		ListStreamConsumers(MaxResults: string, NextToken: string, requestBody: ListStreamConsumersInput): Observable<ListStreamConsumersOutput> {
			return this.http.post<ListStreamConsumersOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.ListStreamConsumers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your Kinesis data streams.</p> <p>The number of streams may be too large to return from a single call to <code>ListStreams</code>. You can limit the number of returned streams using the <code>Limit</code> parameter. If you do not specify a value for the <code>Limit</code> parameter, Kinesis Data Streams uses the default limit, which is currently 10.</p> <p>You can detect if there are more streams available to list by using the <code>HasMoreStreams</code> flag from the returned output. If there are more streams available, you can request more streams by using the name of the last stream returned by the <code>ListStreams</code> request in the <code>ExclusiveStartStreamName</code> parameter in a subsequent request to <code>ListStreams</code>. The group of stream names returned by the subsequent request is then added to the list. You can continue this process until all the stream names have been collected in the list. </p> <p> <a>ListStreams</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.ListStreams
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartStreamName Pagination token
		 * @return {ListStreamsOutput} Success
		 */
		ListStreams(Limit: string, ExclusiveStartStreamName: string, requestBody: ListStreamsInput): Observable<ListStreamsOutput> {
			return this.http.post<ListStreamsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.ListStreams?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartStreamName=' + (ExclusiveStartStreamName == null ? '' : encodeURIComponent(ExclusiveStartStreamName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified Kinesis data stream. This operation has a limit of five transactions per second per account.
		 * Post #X-Amz-Target=Kinesis_20131202.ListTagsForStream
		 * @return {ListTagsForStreamOutput} Success
		 */
		ListTagsForStream(requestBody: ListTagsForStreamInput): Observable<ListTagsForStreamOutput> {
			return this.http.post<ListTagsForStreamOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.ListTagsForStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Merges two adjacent shards in a Kinesis data stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards.</p> <p> <code>MergeShards</code> is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-merge.html">Merge Two Shards</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If the stream is in the <code>ACTIVE</code> state, you can call <code>MergeShards</code>. If a stream is in the <code>CREATING</code>, <code>UPDATING</code>, or <code>DELETING</code> state, <code>MergeShards</code> returns a <code>ResourceInUseException</code>. If the specified stream does not exist, <code>MergeShards</code> returns a <code>ResourceNotFoundException</code>. </p> <p>You can use <a>DescribeStream</a> to check the state of the stream, which is returned in <code>StreamStatus</code>.</p> <p> <code>MergeShards</code> is an asynchronous operation. Upon receiving a <code>MergeShards</code> request, Amazon Kinesis Data Streams immediately returns a response and sets the <code>StreamStatus</code> to <code>UPDATING</code>. After the operation is completed, Kinesis Data Streams sets the <code>StreamStatus</code> to <code>ACTIVE</code>. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state. </p> <p>You use <a>DescribeStream</a> to determine the shard IDs that are specified in the <code>MergeShards</code> request. </p> <p>If you try to operate on too many streams in parallel using <a>CreateStream</a>, <a>DeleteStream</a>, <code>MergeShards</code>, or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p> <p> <code>MergeShards</code> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.MergeShards
		 * @return {void} Success
		 */
		MergeShards(requestBody: MergeShardsInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.MergeShards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Writes a single data record into an Amazon Kinesis data stream. Call <code>PutRecord</code> to send data into the stream for real-time ingestion and subsequent processing, one record at a time. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second.</p> <p>You must specify the name of the stream that captures, stores, and transports the data; a partition key; and the data blob itself.</p> <p>The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.</p> <p>The partition key is used by Kinesis Data Streams to distribute data across shards. Kinesis Data Streams segregates the data records that belong to a stream into multiple shards, using the partition key associated with each data record to determine the shard to which a given data record belongs.</p> <p>Partition keys are Unicode strings, with a maximum length limit of 256 characters for each key. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards using the hash key ranges of the shards. You can override hashing the partition key to determine the shard by explicitly specifying a hash value using the <code>ExplicitHashKey</code> parameter. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p> <code>PutRecord</code> returns the shard ID of where the data record was placed and the sequence number that was assigned to the data record.</p> <p>Sequence numbers increase over time and are specific to a shard within a stream, not across all shards within a stream. To guarantee strictly increasing ordering, write serially to a shard and use the <code>SequenceNumberForOrdering</code> parameter. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If a <code>PutRecord</code> request cannot be processed because of insufficient provisioned throughput on the shard involved in the request, <code>PutRecord</code> throws <code>ProvisionedThroughputExceededException</code>. </p> <p>By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.PutRecord
		 * @return {PutRecordOutput} Success
		 */
		PutRecord(requestBody: PutRecordInput): Observable<PutRecordOutput> {
			return this.http.post<PutRecordOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.PutRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Writes multiple data records into a Kinesis data stream in a single call (also referred to as a <code>PutRecords</code> request). Use this operation to send data into the stream for data ingestion and processing. </p> <p>Each <code>PutRecords</code> request can support up to 500 records. Each record in the request can be as large as 1 MB, up to a limit of 5 MB for the entire request, including partition keys. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second.</p> <p>You must specify the name of the stream that captures, stores, and transports the data; and an array of request <code>Records</code>, with each record in the array requiring a partition key and data blob. The record size limit applies to the total size of the partition key and data blob.</p> <p>The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.</p> <p>The partition key is used by Kinesis Data Streams as input to a hash function that maps the partition key and associated data to a specific shard. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>Each record in the <code>Records</code> array may include an optional parameter, <code>ExplicitHashKey</code>, which overrides the partition key to shard mapping. This parameter allows a data producer to determine explicitly the shard where the record is stored. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>The <code>PutRecords</code> response includes an array of response <code>Records</code>. Each record in the response array directly correlates with a record in the request array using natural ordering, from the top to the bottom of the request and response. The response <code>Records</code> array always includes the same number of records as the request array.</p> <p>The response <code>Records</code> array includes both successfully and unsuccessfully processed records. Kinesis Data Streams attempts to process all records in each <code>PutRecords</code> request. A single record failure does not stop the processing of subsequent records.</p> <p>A successfully processed record includes <code>ShardId</code> and <code>SequenceNumber</code> values. The <code>ShardId</code> parameter identifies the shard in the stream where the record is stored. The <code>SequenceNumber</code> parameter is an identifier assigned to the put record, unique to all records in the stream.</p> <p>An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error and can be one of the following values: <code>ProvisionedThroughputExceededException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the <code>ProvisionedThroughputExceededException</code> exception including the account ID, stream name, and shard ID of the record that was throttled. For more information about partially successful responses, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-add-data-to-stream.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.PutRecords
		 * @return {PutRecordsOutput} Success
		 */
		PutRecords(requestBody: PutRecordsInput): Observable<PutRecordsOutput> {
			return this.http.post<PutRecordsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.PutRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a consumer with a Kinesis data stream. When you use this operation, the consumer you register can read data from the stream at a rate of up to 2 MiB per second. This rate is unaffected by the total number of consumers that read from the same stream.</p> <p>You can register up to 5 consumers per stream. A given consumer can only be registered with one stream.</p> <p>This operation has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer
		 * @return {RegisterStreamConsumerOutput} Success
		 */
		RegisterStreamConsumer(requestBody: RegisterStreamConsumerInput): Observable<RegisterStreamConsumerOutput> {
			return this.http.post<RegisterStreamConsumerOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes tags from the specified Kinesis data stream. Removed tags are deleted and cannot be recovered after this operation successfully completes.</p> <p>If you specify a tag that does not exist, it is ignored.</p> <p> <a>RemoveTagsFromStream</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream
		 * @return {void} Success
		 */
		RemoveTagsFromStream(requestBody: RemoveTagsFromStreamInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Splits a shard into two new shards in the Kinesis data stream, to increase the stream's capacity to ingest and transport data. <code>SplitShard</code> is called when there is a need to increase the overall capacity of a stream because of an expected increase in the volume of data records being ingested. </p> <p>You can also use <code>SplitShard</code> when a shard appears to be approaching its maximum utilization; for example, the producers sending data into the specific shard are suddenly sending more than previously anticipated. You can also call <code>SplitShard</code> to increase stream capacity, so that more Kinesis Data Streams applications can simultaneously read data from the stream for real-time processing. </p> <p>You must specify the shard to be split and the new hash key, which is the position in the shard where the shard gets split in two. In many cases, the new hash key might be the average of the beginning and ending hash key, but it can be any hash key value in the range being mapped into the shard. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-split.html">Split a Shard</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>You can use <a>DescribeStream</a> to determine the shard ID and hash key values for the <code>ShardToSplit</code> and <code>NewStartingHashKey</code> parameters that are specified in the <code>SplitShard</code> request.</p> <p> <code>SplitShard</code> is an asynchronous operation. Upon receiving a <code>SplitShard</code> request, Kinesis Data Streams immediately returns a response and sets the stream status to <code>UPDATING</code>. After the operation is completed, Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state. </p> <p>You can use <code>DescribeStream</code> to check the status of the stream, which is returned in <code>StreamStatus</code>. If the stream is in the <code>ACTIVE</code> state, you can call <code>SplitShard</code>. If a stream is in <code>CREATING</code> or <code>UPDATING</code> or <code>DELETING</code> states, <code>DescribeStream</code> returns a <code>ResourceInUseException</code>.</p> <p>If the specified stream does not exist, <code>DescribeStream</code> returns a <code>ResourceNotFoundException</code>. If you try to create more shards than are authorized for your account, you receive a <code>LimitExceededException</code>. </p> <p>For the default shard limit for an AWS account, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To increase this limit, <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact AWS Support</a>.</p> <p>If you try to operate on too many streams simultaneously using <a>CreateStream</a>, <a>DeleteStream</a>, <a>MergeShards</a>, and/or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p> <p> <code>SplitShard</code> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.SplitShard
		 * @return {void} Success
		 */
		SplitShard(requestBody: SplitShardInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.SplitShard', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables or updates server-side encryption using an AWS KMS key for a specified stream. </p> <p>Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is <code>UPDATING</code>. Once the status of the stream is <code>ACTIVE</code>, encryption begins for records written to the stream. </p> <p>API Limits: You can successfully apply a new AWS KMS key for server-side encryption 25 times in a rolling 24-hour period.</p> <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from <code>PutRecord</code> or <code>PutRecords</code>.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.StartStreamEncryption
		 * @return {void} Success
		 */
		StartStreamEncryption(requestBody: StartStreamEncryptionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.StartStreamEncryption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disables server-side encryption for a specified stream. </p> <p>Stopping encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Stopping encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is <code>UPDATING</code>. Once the status of the stream is <code>ACTIVE</code>, records written to the stream are no longer encrypted by Kinesis Data Streams. </p> <p>API Limits: You can successfully disable server-side encryption 25 times in a rolling 24-hour period. </p> <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status before all records written to the stream are no longer subject to encryption. After you disabled encryption, you can verify that encryption is not applied by inspecting the API response from <code>PutRecord</code> or <code>PutRecords</code>.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.StopStreamEncryption
		 * @return {void} Success
		 */
		StopStreamEncryption(requestBody: StopStreamEncryptionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.StopStreamEncryption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the shard count of the specified stream to the specified number of shards.</p> <p>Updating the shard count is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is <code>UPDATING</code>.</p> <p>To update the shard count, Kinesis Data Streams performs splits or merges on individual shards. This can cause short-lived shards to be created, in addition to the final shards. We recommend that you double or halve the shard count, as this results in the fewest number of splits or merges.</p> <p>This operation has the following default limits. By default, you cannot do the following:</p> <ul> <li> <p>Scale more than twice per rolling 24-hour period per stream</p> </li> <li> <p>Scale up to more than double your current shard count for a stream</p> </li> <li> <p>Scale down below half your current shard count for a stream</p> </li> <li> <p>Scale up to more than 500 shards in a stream</p> </li> <li> <p>Scale a stream with more than 500 shards down unless the result is less than 500 shards</p> </li> <li> <p>Scale up to more than the shard limit for your account</p> </li> </ul> <p>For the default limits for an AWS account, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the <a href="https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase&amp;limitType=service-code-kinesis">limits form</a>.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.UpdateShardCount
		 * @return {UpdateShardCountOutput} Success
		 */
		UpdateShardCount(requestBody: UpdateShardCountInput): Observable<UpdateShardCountOutput> {
			return this.http.post<UpdateShardCountOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.UpdateShardCount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsToStreamX_Amz_Target { Kinesis_20131202_AddTagsToStream = 0 }

	export enum CreateStreamX_Amz_Target { Kinesis_20131202_CreateStream = 0 }

	export enum DecreaseStreamRetentionPeriodX_Amz_Target { Kinesis_20131202_DecreaseStreamRetentionPeriod = 0 }

	export enum DeleteStreamX_Amz_Target { Kinesis_20131202_DeleteStream = 0 }

	export enum DeregisterStreamConsumerX_Amz_Target { Kinesis_20131202_DeregisterStreamConsumer = 0 }

	export enum DescribeLimitsX_Amz_Target { Kinesis_20131202_DescribeLimits = 0 }

	export enum DescribeStreamX_Amz_Target { Kinesis_20131202_DescribeStream = 0 }

	export enum DescribeStreamConsumerX_Amz_Target { Kinesis_20131202_DescribeStreamConsumer = 0 }

	export enum DescribeStreamSummaryX_Amz_Target { Kinesis_20131202_DescribeStreamSummary = 0 }

	export enum DisableEnhancedMonitoringX_Amz_Target { Kinesis_20131202_DisableEnhancedMonitoring = 0 }

	export enum EnableEnhancedMonitoringX_Amz_Target { Kinesis_20131202_EnableEnhancedMonitoring = 0 }

	export enum GetRecordsX_Amz_Target { Kinesis_20131202_GetRecords = 0 }

	export enum GetShardIteratorX_Amz_Target { Kinesis_20131202_GetShardIterator = 0 }

	export enum IncreaseStreamRetentionPeriodX_Amz_Target { Kinesis_20131202_IncreaseStreamRetentionPeriod = 0 }

	export enum ListShardsX_Amz_Target { Kinesis_20131202_ListShards = 0 }

	export enum ListStreamConsumersX_Amz_Target { Kinesis_20131202_ListStreamConsumers = 0 }

	export enum ListStreamsX_Amz_Target { Kinesis_20131202_ListStreams = 0 }

	export enum ListTagsForStreamX_Amz_Target { Kinesis_20131202_ListTagsForStream = 0 }

	export enum MergeShardsX_Amz_Target { Kinesis_20131202_MergeShards = 0 }

	export enum PutRecordX_Amz_Target { Kinesis_20131202_PutRecord = 0 }

	export enum PutRecordsX_Amz_Target { Kinesis_20131202_PutRecords = 0 }

	export enum RegisterStreamConsumerX_Amz_Target { Kinesis_20131202_RegisterStreamConsumer = 0 }

	export enum RemoveTagsFromStreamX_Amz_Target { Kinesis_20131202_RemoveTagsFromStream = 0 }

	export enum SplitShardX_Amz_Target { Kinesis_20131202_SplitShard = 0 }

	export enum StartStreamEncryptionX_Amz_Target { Kinesis_20131202_StartStreamEncryption = 0 }

	export enum StopStreamEncryptionX_Amz_Target { Kinesis_20131202_StopStreamEncryption = 0 }

	export enum UpdateShardCountX_Amz_Target { Kinesis_20131202_UpdateShardCount = 0 }

}

