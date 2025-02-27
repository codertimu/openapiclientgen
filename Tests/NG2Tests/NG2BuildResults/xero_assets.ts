import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Assets {
		pagination?: Pagination;
		items?: Array<Asset>;
	}

	export interface Asset {

		/** The Xero-generated Id for the asset */
		assetId?: string;

		/**
		 * The name of the asset
		 * Required
		 */
		assetName: string;

		/** The Xero-generated Id for the asset type */
		assetTypeId?: string;

		/** Must be unique. */
		assetNumber?: string;

		/** The date the asset was purchased YYYY-MM-DD */
		purchaseDate?: Date;

		/** The purchase price of the asset */
		purchasePrice?: number;

		/** The price the asset was disposed at */
		disposalPrice?: number;

		/** See Asset Status Codes. */
		assetStatus?: AssetAssetStatus;

		/** The date the asset’s warranty expires (if needed) YYYY-MM-DD */
		warrantyExpiryDate?: string;

		/** The asset's serial number */
		serialNumber?: string;
		bookDepreciationSetting?: BookDepreciationSetting;
		bookDepreciationDetail?: BookDepreciationDetail;

		/** Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn't have 'legacy' journal entries and if there is no lock period that would prevent this asset from rolling back. */
		canRollback?: boolean;

		/** The accounting value of the asset */
		accountingBookValue?: number;

		/** Boolean to indicate whether delete is enabled */
		isDeleteEnabledForDate?: boolean;
	}

	export enum AssetAssetStatus { Draft = 0, Registered = 1, Disposed = 2 }

	export interface Pagination {
		page?: number;
		pageSize?: number;
		pageCount?: number;
		itemCount?: number;
	}


	/** See Asset Status Codes. */
	export enum AssetStatus { Draft = 0, Registered = 1, Disposed = 2 }


	/** See Asset Status Codes. */
	export enum AssetStatusQueryParam { DRAFT = 0, REGISTERED = 1, DISPOSED = 2 }

	export interface AssetType {

		/** Xero generated unique identifier for asset types */
		assetTypeId?: string;

		/**
		 * The name of the asset type
		 * Required
		 */
		assetTypeName: string;

		/** The asset account for fixed assets of this type */
		fixedAssetAccountId?: string;

		/** The expense account for the depreciation of fixed assets of this type */
		depreciationExpenseAccountId?: string;

		/** The account for accumulated depreciation of fixed assets of this type */
		accumulatedDepreciationAccountId?: string;
		bookDepreciationSetting: BookDepreciationSetting;

		/** All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed. */
		locks?: number;
	}

	export interface BookDepreciationSetting {

		/** The method of depreciation applied to this asset. See Depreciation Methods */
		depreciationMethod?: BookDepreciationSettingDepreciationMethod;

		/** The method of averaging applied to this asset. See Averaging Methods */
		averagingMethod?: BookDepreciationSettingAveragingMethod;

		/** The rate of depreciation (e.g. 0.05) */
		depreciationRate?: number;

		/** Effective life of the asset in years (e.g. 5) */
		effectiveLifeYears?: number;

		/** See Depreciation Calculation Methods */
		depreciationCalculationMethod?: BookDepreciationSettingDepreciationCalculationMethod;

		/** Unique Xero identifier for the depreciable object */
		depreciableObjectId?: string;

		/** The type of asset object */
		depreciableObjectType?: string;

		/** Unique Xero identifier for the effective date change */
		bookEffectiveDateOfChangeId?: string;
	}

	export enum BookDepreciationSettingDepreciationMethod { NoDepreciation = 0, StraightLine = 1, DiminishingValue100 = 2, DiminishingValue150 = 3, DiminishingValue200 = 4, FullDepreciation = 5 }

	export enum BookDepreciationSettingAveragingMethod { FullMonth = 0, ActualDays = 1 }

	export enum BookDepreciationSettingDepreciationCalculationMethod { Rate = 0, Life = 1, None = 2 }

	export interface BookDepreciationDetail {

		/** When an asset is disposed, this will be the sell price minus the purchase price if a profit was made. */
		currentCapitalGain?: number;

		/** When an asset is disposed, this will be the lowest one of sell price or purchase price, minus the current book value. */
		currentGainLoss?: number;

		/** YYYY-MM-DD */
		depreciationStartDate?: Date;

		/** The value of the asset you want to depreciate, if this is less than the cost of the asset. */
		costLimit?: number;

		/** The value of the asset remaining when you've fully depreciated it. */
		residualValue?: number;

		/** All depreciation prior to the current financial year. */
		priorAccumDepreciationAmount?: number;

		/** All depreciation occurring in the current financial year. */
		currentAccumDepreciationAmount?: number;
	}

	export interface Setting {

		/** The prefix used for fixed asset numbers (“FA-” by default) */
		assetNumberPrefix?: string;

		/** The next available sequence number */
		assetNumberSequence?: string;

		/** The date depreciation calculations started on registered fixed assets in Xero */
		assetStartDate?: Date;

		/** The last depreciation date */
		lastDepreciationDate?: Date;

		/** Default account that gains are posted to */
		defaultGainOnDisposalAccountId?: string;

		/** Default account that losses are posted to */
		defaultLossOnDisposalAccountId?: string;

		/** Default account that capital gains are posted to */
		defaultCapitalGainOnDisposalAccountId?: string;

		/** opt in for tax calculation */
		optInForTax?: boolean;
	}

	export interface Error {

		/** Array of elements of resource validation errors */
		resourceValidationErrors?: Array<ResourceValidationErrorsElement>;

		/** Array of elements of field validation errors */
		fieldValidationErrors?: Array<FieldValidationErrorsElement>;

		/** The internal type of error, not accessible externally */
		type?: string;

		/** Title of the error */
		title?: string;

		/** Detail of the error */
		detail?: string;
	}

	export interface ResourceValidationErrorsElement {

		/** The field name of the erroneous field */
		resourceName?: string;

		/** Explaination of the resource validation error */
		localisedMessage?: string;

		/** Internal type of the resource error message */
		type?: string;

		/** Title of the resource validation error */
		title?: string;

		/** Detail of the resource validation error */
		detail?: string;
	}

	export interface FieldValidationErrorsElement {

		/** The field name of the erroneous field */
		fieldName?: string;

		/** The provided value */
		valueProvided?: string;

		/** Explaination of the field validation error */
		localisedMessage?: string;

		/** Internal type of the field validation error message */
		type?: string;

		/** Title of the field validation error */
		title?: string;

		/** Detail of the field validation error */
		detail?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * searches fixed asset
		 * By passing in the appropriate options, you can search for available fixed asset in the system
		 * Get Assets
		 * @param {AssetStatusQueryParam} status Required when retrieving a collection of assets. See Asset Status Codes
		 * @param {number} page Results are paged. This specifies which page of the results to return. The default page is 1.
		 * @param {number} pageSize The number of records returned per page. By default the number of records returned is 10.
		 * @param {GetAssetsOrderBy} orderBy Requests can be ordered by AssetType, AssetName, AssetNumber, PurchaseDate and PurchasePrice. If the asset status is DISPOSED it also allows DisposalDate and DisposalPrice.
		 * @param {GetAssetsSortDirection} sortDirection ASC or DESC
		 * @param {GetAssetsFilterBy} filterBy A string that can be used to filter the list to only return assets containing the text. Checks it against the AssetName, AssetNumber, Description and AssetTypeName fields.
		 * @return {Assets} search results matching criteria
		 */
		GetAssets(status: AssetStatusQueryParam, page: number, pageSize: number, orderBy: GetAssetsOrderBy, sortDirection: GetAssetsSortDirection, filterBy: GetAssetsFilterBy): Observable<Assets> {
			return this.http.get<Assets>(this.baseUri + 'Assets?status=' + status + '&page=' + page + '&pageSize=' + pageSize + '&orderBy=' + orderBy + '&sortDirection=' + sortDirection + '&filterBy=' + filterBy, {});
		}

		/**
		 * adds a fixed asset
		 * Adds an asset to the system
		 * Post Assets
		 * @param {Asset} requestBody Fixed asset you are creating
		 * @return {Asset} return single object - create new asset
		 */
		CreateAsset(requestBody: Asset): Observable<Asset> {
			return this.http.post<Asset>(this.baseUri + 'Assets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieves fixed asset by id
		 * By passing in the appropriate asset id, you can search for
		 * a specific fixed asset in the system
		 * Get Assets/{id}
		 * @param {string} id fixed asset id for single object
		 * @return {Asset} search results matching criteria
		 */
		GetAssetById(id: string): Observable<Asset> {
			return this.http.get<Asset>(this.baseUri + 'Assets/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * searches fixed asset types
		 * By passing in the appropriate options, you can search for available fixed asset types in the system
		 * Get AssetTypes
		 * @return {Array<AssetType>} search results matching criteria
		 */
		GetAssetTypes(): Observable<Array<AssetType>> {
			return this.http.get<Array<AssetType>>(this.baseUri + 'AssetTypes', {});
		}

		/**
		 * adds a fixed asset type
		 * Adds an fixed asset type to the system
		 * Post AssetTypes
		 * @param {AssetType} requestBody Asset type to add
		 * @return {AssetType} results single object -  created fixed type
		 */
		CreateAssetType(requestBody: AssetType): Observable<AssetType> {
			return this.http.post<AssetType>(this.baseUri + 'AssetTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches fixed asset settings
		 * By passing in the appropriate options, you can search for available fixed asset types in the system
		 * Get Settings
		 * @return {Setting} search results matching criteria
		 */
		GetAssetSettings(): Observable<Setting> {
			return this.http.get<Setting>(this.baseUri + 'Settings', {});
		}
	}

	export enum GetAssetsOrderBy { AssetType = 0, AssetName = 1, AssetNumber = 2, PurchaseDate = 3, PurchasePrice = 4, DisposalDate = 5, DisposalPrice = 6 }

	export enum GetAssetsSortDirection { asc = 0, desc = 1 }

	export enum GetAssetsFilterBy { AssetName = 0, AssetNumber = 1, Description = 2, AssetTypeName = 3 }

}

