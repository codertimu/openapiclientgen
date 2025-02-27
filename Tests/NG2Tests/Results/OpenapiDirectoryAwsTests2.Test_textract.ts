import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AnalyzeDocumentResponse {

		/** Information about the input document. */
		DocumentMetadata?: DocumentMetadata;
		Blocks?: Array<Block>;

		/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
		HumanLoopActivationOutput?: HumanLoopActivationOutput;
		AnalyzeDocumentModelVersion?: string;
	}


	/** Information about the input document. */
	export interface DocumentMetadata {
		Pages?: number;
	}


	/** <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p> */
	export interface Block {
		BlockType?: BlockBlockType;
		Confidence?: number;
		Text?: string;
		RowIndex?: number;
		ColumnIndex?: number;
		RowSpan?: number;
		ColumnSpan?: number;

		/** Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements. */
		Geometry?: Geometry;
		Id?: string;
		Relationships?: Array<Relationship>;
		EntityTypes?: Array<EntityType>;
		SelectionStatus?: BlockSelectionStatus;
		Page?: number;
	}

	export enum BlockBlockType { KEY_VALUE_SET = 0, PAGE = 1, LINE = 2, WORD = 3, TABLE = 4, CELL = 5, SELECTION_ELEMENT = 6 }


	/** Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements. */
	export interface Geometry {

		/** <p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> */
		BoundingBox?: BoundingBox;
		Polygon?: Array<Point>;
	}


	/** <p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> */
	export interface BoundingBox {
		Width?: number;
		Height?: number;
		Left?: number;
		Top?: number;
	}


	/** <p>The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide. </p> */
	export interface Point {
		X?: number;
		Y?: number;
	}


	/** <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p> */
	export interface Relationship {
		Type?: RelationshipType;
		Ids?: Array<string>;
	}

	export enum RelationshipType { VALUE = 0, CHILD = 1 }

	export enum EntityType { KEY = 0, VALUE = 1 }

	export enum BlockSelectionStatus { SELECTED = 0, NOT_SELECTED = 1 }


	/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
	export interface HumanLoopActivationOutput {
		HumanLoopArn?: string;
		HumanLoopActivationReasons?: Array<string>;
		HumanLoopActivationConditionsEvaluationResults?: string;
	}

	export interface AnalyzeDocumentRequest {

		/**
		 * <p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p>
		 * Required
		 */
		Document: Document;
		FeatureTypes: Array<FeatureType>;

		/** Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. */
		HumanLoopConfig?: HumanLoopConfig;
	}


	/** <p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p> */
	export interface Document {
		Bytes?: string;

		/** <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p> */
		S3Object?: S3Object;
	}


	/** <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p> */
	export interface S3Object {
		Bucket?: string;
		Name?: string;
		Version?: string;
	}

	export enum FeatureType { TABLES = 0, FORMS = 1 }


	/** Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.  */
	export interface HumanLoopConfig {
		HumanLoopName: string;
		FlowDefinitionArn: string;

		/** Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content. */
		DataAttributes?: HumanLoopDataAttributes;
	}


	/** Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content.  */
	export interface HumanLoopDataAttributes {
		ContentClassifiers?: Array<ContentClassifier>;
	}

	export enum ContentClassifier { FreeOfPersonallyIdentifiableInformation = 0, FreeOfAdultContent = 1 }

	export interface InvalidParameterException {
	}

	export interface InvalidS3ObjectException {
	}

	export interface UnsupportedDocumentException {
	}

	export interface DocumentTooLargeException {
	}

	export interface BadDocumentException {
	}

	export interface AccessDeniedException {
	}

	export interface ProvisionedThroughputExceededException {
	}

	export interface InternalServerError {
	}

	export interface ThrottlingException {
	}

	export interface HumanLoopQuotaExceededException {
	}

	export interface DetectDocumentTextResponse {

		/** Information about the input document. */
		DocumentMetadata?: DocumentMetadata;
		Blocks?: Array<Block>;
		DetectDocumentTextModelVersion?: string;
	}

	export interface DetectDocumentTextRequest {

		/**
		 * <p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p>
		 * Required
		 */
		Document: Document;
	}

	export interface GetDocumentAnalysisResponse {

		/** Information about the input document. */
		DocumentMetadata?: DocumentMetadata;
		JobStatus?: GetDocumentAnalysisResponseJobStatus;
		NextToken?: string;
		Blocks?: Array<Block>;
		Warnings?: Array<Warning>;
		StatusMessage?: string;
		AnalyzeDocumentModelVersion?: string;
	}

	export enum GetDocumentAnalysisResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2, PARTIAL_SUCCESS = 3 }


	/** A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>).  */
	export interface Warning {
		ErrorCode?: string;
		Pages?: Array<number>;
	}

	export interface GetDocumentAnalysisRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface InvalidJobIdException {
	}

	export interface GetDocumentTextDetectionResponse {

		/** Information about the input document. */
		DocumentMetadata?: DocumentMetadata;
		JobStatus?: GetDocumentAnalysisResponseJobStatus;
		NextToken?: string;
		Blocks?: Array<Block>;
		Warnings?: Array<Warning>;
		StatusMessage?: string;
		DetectDocumentTextModelVersion?: string;
	}

	export interface GetDocumentTextDetectionRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface StartDocumentAnalysisResponse {
		JobId?: string;
	}

	export interface StartDocumentAnalysisRequest {

		/**
		 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>
		 * Required
		 */
		DocumentLocation: DocumentLocation;
		FeatureTypes: Array<FeatureType>;
		ClientRequestToken?: string;
		JobTag?: string;

		/** The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. */
		NotificationChannel?: NotificationChannel;
	}


	/** <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p> */
	export interface DocumentLocation {

		/** <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p> */
		S3Object?: S3Object;
	}


	/** The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>.  */
	export interface NotificationChannel {
		SNSTopicArn: string;
		RoleArn: string;
	}

	export interface IdempotentParameterMismatchException {
	}

	export interface LimitExceededException {
	}

	export interface StartDocumentTextDetectionResponse {
		JobId?: string;
	}

	export interface StartDocumentTextDetectionRequest {

		/**
		 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>
		 * Required
		 */
		DocumentLocation: DocumentLocation;
		ClientRequestToken?: string;
		JobTag?: string;

		/** The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. */
		NotificationChannel?: NotificationChannel;
	}

	export enum BlockType { KEY_VALUE_SET = 0, PAGE = 1, LINE = 2, WORD = 3, TABLE = 4, CELL = 5, SELECTION_ELEMENT = 6 }

	export enum SelectionStatus { SELECTED = 0, NOT_SELECTED = 1 }

	export enum JobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2, PARTIAL_SUCCESS = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Analyzes an input document for relationships between detected items. </p> <p>The types of information returned are as follows: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of <code>FeatureTypes</code>). </p> </li> </ul> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>You can choose which type of analysis to perform by specifying the <code>FeatureTypes</code> list. </p> <p>The output is returned in a list of <code>Block</code> objects.</p> <p> <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentAnalysis</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
		 * Post #X-Amz-Target=Textract.AnalyzeDocument
		 * @return {AnalyzeDocumentResponse} Success
		 */
		AnalyzeDocument(requestBody: AnalyzeDocumentRequest): Observable<AnalyzeDocumentResponse> {
			return this.http.post<AnalyzeDocumentResponse>(this.baseUri + '#X-Amz-Target=Textract.AnalyzeDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be an image in JPEG or PNG format. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p> <code>DetectDocumentText</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentTextDetection</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
		 * Post #X-Amz-Target=Textract.DetectDocumentText
		 * @return {DetectDocumentTextResponse} Success
		 */
		DetectDocumentText(requestBody: DetectDocumentTextRequest): Observable<DetectDocumentTextResponse> {
			return this.http.post<DetectDocumentTextResponse>(this.baseUri + '#X-Amz-Target=Textract.DetectDocumentText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p> <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p> <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following types of information are returned: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of the <code>StartDocumentAnalysis</code> <code>FeatureTypes</code> input parameter). </p> </li> </ul> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
		 * Post #X-Amz-Target=Textract.GetDocumentAnalysis
		 * @return {GetDocumentAnalysisResponse} Success
		 */
		GetDocumentAnalysis(requestBody: GetDocumentAnalysisRequest): Observable<GetDocumentAnalysisResponse> {
			return this.http.post<GetDocumentAnalysisResponse>(this.baseUri + '#X-Amz-Target=Textract.GetDocumentAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentTextDetection</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p> <code>GetDocumentTextDetection</code> returns an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
		 * Post #X-Amz-Target=Textract.GetDocumentTextDetection
		 * @return {GetDocumentTextDetectionResponse} Success
		 */
		GetDocumentTextDetection(requestBody: GetDocumentTextDetectionRequest): Observable<GetDocumentTextDetectionResponse> {
			return this.http.post<GetDocumentTextDetectionResponse>(this.baseUri + '#X-Amz-Target=Textract.GetDocumentTextDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the asynchronous analysis of an input document for relationships between detected items such as key-value pairs, tables, and selection elements.</p> <p> <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartDocumentAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
		 * Post #X-Amz-Target=Textract.StartDocumentAnalysis
		 * @return {StartDocumentAnalysisResponse} Success
		 */
		StartDocumentAnalysis(requestBody: StartDocumentAnalysisRequest): Observable<StartDocumentAnalysisResponse> {
			return this.http.post<StartDocumentAnalysisResponse>(this.baseUri + '#X-Amz-Target=Textract.StartDocumentAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p> <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
		 * Post #X-Amz-Target=Textract.StartDocumentTextDetection
		 * @return {StartDocumentTextDetectionResponse} Success
		 */
		StartDocumentTextDetection(requestBody: StartDocumentTextDetectionRequest): Observable<StartDocumentTextDetectionResponse> {
			return this.http.post<StartDocumentTextDetectionResponse>(this.baseUri + '#X-Amz-Target=Textract.StartDocumentTextDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AnalyzeDocumentX_Amz_Target { Textract_AnalyzeDocument = 0 }

	export enum DetectDocumentTextX_Amz_Target { Textract_DetectDocumentText = 0 }

	export enum GetDocumentAnalysisX_Amz_Target { Textract_GetDocumentAnalysis = 0 }

	export enum GetDocumentTextDetectionX_Amz_Target { Textract_GetDocumentTextDetection = 0 }

	export enum StartDocumentAnalysisX_Amz_Target { Textract_StartDocumentAnalysis = 0 }

	export enum StartDocumentTextDetectionX_Amz_Target { Textract_StartDocumentTextDetection = 0 }

}

