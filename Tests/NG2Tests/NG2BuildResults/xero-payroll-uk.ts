import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Pagination {
		page?: number;
		pageSize?: number;
		pageCount?: number;
		itemCount?: number;
	}


	/** The object returned for a bad request */
	export interface Problem {

		/** The type of error format */
		type?: string;

		/** The type of the error */
		title?: string;

		/** The error status code */
		status?: string;

		/** A description of the error */
		detail?: string;
		instance?: string;
		invalidFields?: Array<InvalidField>;
	}

	export interface InvalidField {

		/** The name of the field that caused the error */
		name?: string;

		/** The reason the error occurred */
		reason?: string;
	}

	export interface Employees {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		employees?: Array<Employee>;
	}

	export interface Employee {

		/** Xero unique identifier for the employee */
		employeeID?: string;

		/** Title of the employee */
		title?: string;

		/** First name of employee */
		firstName?: string;

		/** Last name of employee */
		lastName?: string;

		/** Date of birth of the employee (YYYY-MM-DD) */
		dateOfBirth?: Date;
		address?: Address;

		/** The email address for the employee */
		email?: string;

		/** The employee’s gender */
		gender?: EmployeeGender;

		/** Employee phone number */
		phoneNumber?: string;

		/** Employment start date of the employee at the time it was requested */
		startDate?: Date;

		/** Employment end date of the employee at the time it was requested */
		endDate?: Date;

		/** Xero unique identifier for the payroll calendar of the employee */
		payrollCalendarID?: string;

		/** UTC timestamp of last update to the employee */
		updatedDateUTC?: Date;

		/** UTC timestamp when the employee was created in Xero */
		createdDateUTC?: Date;

		/** National insurance number of the employee */
		nationalInsuranceNumber?: string;
	}

	export interface Address {

		/**
		 * Address line 1 for employee home address
		 * Required
		 */
		addressLine1: string;

		/** Address line 2 for employee home address */
		addressLine2?: string;

		/**
		 * Suburb for employee home address
		 * Required
		 */
		city: string;

		/**
		 * PostCode for employee home address
		 * Required
		 */
		postCode: string;

		/** Country of HomeAddress */
		countryName?: string;
	}

	export enum EmployeeGender { M = 0, F = 1 }

	export interface EmployeeObject {
		pagination?: Pagination;
		employee?: Employee;

		/** The object returned for a bad request */
		problem?: Problem;
	}

	export interface EmploymentObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		employment?: Employment;
	}

	export interface Employment {

		/** Xero unique identifier for the payroll calendar of the employee */
		payrollCalendarID?: string;

		/** Start date of the employment (YYYY-MM-DD) */
		startDate?: Date;

		/** The employment number of the employee */
		employeeNumber?: string;

		/** The NI Category of the employee */
		niCategory?: EmploymentNiCategory;
	}

	export enum EmploymentNiCategory { A = 0, B = 1, C = 2, H = 3, J = 4, M = 5, Z = 6, X = 7 }

	export interface EmployeeTaxObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		employeeTax?: EmployeeTax;
	}

	export interface EmployeeTax {

		/** The Starter type. */
		starterType?: string;

		/** Starter declaration. */
		starterDeclaration?: string;

		/** The Tax code. */
		taxCode?: string;

		/** Describes whether the tax settings is W1M1 */
		w1M1?: boolean;

		/** The previous taxable pay */
		previousTaxablePay?: number;

		/** The tax amount previously paid */
		previousTaxPaid?: number;

		/** The employee's student loan deduction type */
		studentLoanDeduction?: string;

		/** Describes whether the employee has post graduate loans */
		hasPostGraduateLoans?: boolean;

		/** Describes whether the employee is director */
		isDirector?: boolean;

		/** The directorship start date */
		directorshipStartDate?: Date;

		/** NICs calculation method */
		nicCalculationMethod?: string;
	}

	export interface EmployeeOpeningBalancesObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		openingBalances?: EmployeeOpeningBalances;
	}

	export interface EmployeeOpeningBalances {

		/** The total accumulated statutory adoption pay amount received by the employee for current fiscal year to date */
		statutoryAdoptionPay?: number;

		/** The total accumulated statutory maternity pay amount received by the employee for current fiscal year to date */
		statutoryMaternityPay?: number;

		/** The total accumulated statutory paternity pay amount received by the employee for current fiscal year to date */
		statutoryPaternityPay?: number;

		/** The total accumulated statutory shared parental pay amount received by the employee for current fiscal year to date */
		statutorySharedParentalPay?: number;

		/** The total accumulated statutory sick pay amount received by the employee for current fiscal year to date */
		statutorySickPay?: number;

		/** The unique employee number issued by the employee's former employer */
		priorEmployeeNumber?: number;
	}

	export interface EmployeeLeaves {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		leave?: Array<EmployeeLeave>;
	}

	export interface EmployeeLeave {

		/** The Xero identifier for LeaveType */
		leaveID?: string;

		/**
		 * The Xero identifier for LeaveType
		 * Required
		 */
		leaveTypeID: string;

		/**
		 * The description of the leave  (max length = 50)
		 * Required
		 */
		description: string;

		/**
		 * Start date of the leave (YYYY-MM-DD)
		 * Required
		 */
		startDate: Date;

		/**
		 * End date of the leave (YYYY-MM-DD)
		 * Required
		 */
		endDate: Date;

		/** The leave period information. The StartDate, EndDate and NumberOfUnits needs to be specified when you do not want to calculate NumberOfUnits automatically. Using incorrect period StartDate and EndDate will result in automatic computation of the NumberOfUnits. */
		periods?: Array<LeavePeriod>;

		/** UTC timestamp of last update to the leave type note */
		updatedDateUTC?: Date;
	}

	export interface LeavePeriod {

		/** The Pay Period Start Date (YYYY-MM-DD) */
		periodStartDate?: Date;

		/** The Pay Period End Date (YYYY-MM-DD) */
		periodEndDate?: Date;

		/** The Number of Units for the leave */
		numberOfUnits?: number;

		/** Period Status */
		periodStatus?: LeavePeriodPeriodStatus;
	}

	export enum LeavePeriodPeriodStatus { Approved = 0, Completed = 1 }

	export interface EmployeeLeaveObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		leave?: EmployeeLeave;
	}

	export interface LeavePeriods {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		periods?: Array<LeavePeriod>;
	}

	export interface EmployeeLeaveBalances {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		leaveBalances?: Array<EmployeeLeaveBalance>;
	}

	export interface EmployeeLeaveBalance {

		/** Name of the leave type. */
		name?: string;

		/** The Xero identifier for leave type */
		leaveTypeID?: string;

		/** The employees current balance for the corresponding leave type. */
		balance?: number;

		/** The type of the units of the leave. */
		typeOfUnits?: string;
	}

	export interface EmployeeStatutoryLeaveBalanceObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		leaveBalance?: EmployeeStatutoryLeaveBalance;
	}

	export interface EmployeeStatutoryLeaveBalance {

		/** The type of statutory leave */
		leaveType?: EmployeeStatutoryLeaveBalanceLeaveType;

		/** The balance remaining for the corresponding leave type as of specified date. */
		balanceRemaining?: number;

		/** The units will be "Hours" */
		units?: EmployeeStatutoryLeaveBalanceUnits;
	}

	export enum EmployeeStatutoryLeaveBalanceLeaveType { Sick = 0, Adoption = 1, Maternity = 2, Paternity = 3, Sharedparental = 4 }

	export enum EmployeeStatutoryLeaveBalanceUnits { Hours = 0 }

	export interface EmployeeStatutoryLeavesSummaries {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		statutoryLeaves?: Array<EmployeeStatutoryLeaveSummary>;
	}

	export interface EmployeeStatutoryLeaveSummary {

		/** The unique identifier (guid) of a statutory leave. */
		statutoryLeaveID?: string;

		/** The unique identifier (guid) of the employee */
		employeeID?: string;

		/** The category of statutory leave */
		type?: EmployeeStatutoryLeaveBalanceLeaveType;

		/** The date when the leave starts */
		startDate?: Date;

		/** The date when the leave ends */
		endDate?: Date;

		/** Whether the leave was entitled to receive payment */
		isEntitled?: boolean;

		/** The status of the leave */
		status?: EmployeeStatutoryLeaveSummaryStatus;
	}

	export enum EmployeeStatutoryLeaveSummaryStatus { Pending = 0, In_Progress = 1, Completed = 2 }

	export interface EmployeeStatutorySickLeaves {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		statutorySickLeave?: Array<EmployeeStatutorySickLeave>;
	}

	export interface EmployeeStatutorySickLeave {

		/** The unique identifier (guid) of a statutory leave */
		statutoryLeaveID?: string;

		/**
		 * The unique identifier (guid) of the employee
		 * Required
		 */
		employeeID: string;

		/**
		 * The unique identifier (guid) of the "Statutory Sick Leave (non-pensionable)" pay item
		 * Required
		 */
		leaveTypeID: string;

		/**
		 * The date when the leave starts
		 * Required
		 */
		startDate: Date;

		/**
		 * The date when the leave ends
		 * Required
		 */
		endDate: Date;

		/** the type of statutory leave */
		type?: string;

		/** the type of statutory leave */
		status?: string;

		/**
		 * The days of the work week the employee is scheduled to work at the time the leave is taken
		 * Required
		 */
		workPattern: Array<string>;

		/**
		 * Whether the sick leave was pregnancy related
		 * Required
		 */
		isPregnancyRelated: boolean;

		/**
		 * Whether the employee provided sufficent notice and documentation as required by the employer supporting the sick leave request
		 * Required
		 */
		sufficientNotice: boolean;

		/** Whether the leave was entitled to receive payment */
		isEntitled?: boolean;

		/** The amount of requested time (in weeks) */
		entitlementWeeksRequested?: number;

		/** The amount of statutory sick leave time off (in weeks) that is available to take at the time the leave was requested */
		entitlementWeeksQualified?: number;

		/** A calculated amount of time (in weeks) that remains for the statutory sick leave period */
		entitlementWeeksRemaining?: number;

		/** Whether another leave (Paternity, Shared Parental specifically) occurs during the requested leave's period. While this is allowed it could affect payment amounts */
		overlapsWithOtherLeave?: boolean;

		/** If the leave requested was considered "not entitled", the reasons why are listed here. */
		entitlementFailureReasons?: Array<string>;
	}

	export interface EmployeeStatutorySickLeaveObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		statutorySickLeave?: EmployeeStatutorySickLeave;
	}

	export interface EmployeeLeaveTypes {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		leaveTypes?: Array<EmployeeLeaveType>;
	}

	export interface EmployeeLeaveType {

		/**
		 * The Xero identifier for leave type
		 * Required
		 */
		leaveTypeID: string;

		/**
		 * The schedule of accrual
		 * Required
		 */
		scheduleOfAccrual: EmployeeLeaveTypeScheduleOfAccrual;

		/** The number of hours accrued for the leave annually. This is 0 when the scheduleOfAccrual chosen is "OnHourWorked" */
		hoursAccruedAnnually?: number;

		/** The maximum number of hours that can be accrued for the leave */
		maximumToAccrue?: number;

		/** The initial number of hours assigned when the leave was added to the employee */
		openingBalance?: number;

		/** The number of hours added to the leave balance for every hour worked by the employee. This is normally 0, unless the scheduleOfAccrual chosen is "OnHourWorked" */
		rateAccruedHourly?: number;
	}

	export enum EmployeeLeaveTypeScheduleOfAccrual { BeginningOfCalendarYear = 0, OnAnniversaryDate = 1, EachPayPeriod = 2, OnHourWorked = 3 }

	export interface EmployeeLeaveTypeObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		leaveType?: EmployeeLeaveType;
	}

	export interface EmployeePayTemplateObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		payTemplate?: EmployeePayTemplate;
	}

	export interface EmployeePayTemplate {

		/** Unique identifier for the employee */
		employeeID?: string;
		earningTemplates?: Array<EarningsTemplate>;
	}

	export interface EarningsTemplate {

		/** The Xero identifier for the earnings template */
		payTemplateEarningID?: string;

		/** The rate per unit */
		ratePerUnit?: number;

		/** The rate per unit */
		numberOfUnits?: number;

		/** The fixed amount per period */
		fixedAmount?: number;

		/** The corresponding earnings rate identifier */
		earningsRateID?: string;

		/** The read-only name of the Earning Template. */
		name?: string;
	}

	export interface EmployeePayTemplates {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		earningTemplates?: Array<EarningsTemplate>;
	}

	export interface EarningsTemplateObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		earningTemplate?: EarningsTemplate;
	}

	export interface Benefits {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		benefits?: Array<Benefit>;
	}

	export interface Benefit {

		/** unique identifier in Xero */
		id?: string;

		/**
		 * Name of the employer pension
		 * Required
		 */
		name: string;

		/**
		 * Category type of the employer pension
		 * Required
		 */
		category: BenefitCategory;

		/**
		 * Xero identifier for Liability Account
		 * Required
		 */
		liabilityAccountId: string;

		/**
		 * Xero identifier for Expense Account
		 * Required
		 */
		expenseAccountId: string;

		/**
		 * Standard amount of the employer pension
		 * Required
		 */
		standardAmount: number;

		/**
		 * Percentage of gross of the employer pension
		 * Required
		 */
		percentage: number;

		/**
		 * Calculation Type of the employer pension (FixedAmount or PercentageOfGross).
		 * Required
		 */
		calculationType: BenefitCalculationType;

		/** Identifier of a record is active or not. */
		currentRecord?: boolean;

		/** Identifier of subject To NIC */
		subjectToNIC?: boolean;

		/** Identifier of subject To pension */
		subjectToPension?: boolean;

		/** Identifier of subject To Tax */
		subjectToTax?: boolean;

		/** Identifier of calculating on qualifying earnings */
		isCalculatingOnQualifyingEarnings?: boolean;

		/** display the balance to employee */
		showBalanceToEmployee?: boolean;
	}

	export enum BenefitCategory { StakeholderPension = 0, Other = 1 }

	export enum BenefitCalculationType { FixedAmount = 0, PercentageOfGross = 1 }

	export interface BenefitObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		benefit?: Benefit;
	}

	export interface Deductions {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		deductions?: Array<Deduction>;
	}

	export interface Deduction {

		/** The Xero identifier for Deduction */
		deductionId?: string;

		/**
		 * Name of the deduction
		 * Required
		 */
		deductionName: string;

		/**
		 * Deduction Category type
		 * Required
		 */
		deductionCategory: DeductionDeductionCategory;

		/**
		 * Xero identifier for Liability Account
		 * Required
		 */
		liabilityAccountId: string;

		/** Identifier of a record is active or not. */
		currentRecord?: boolean;

		/** Standard amount of the deduction */
		standardAmount?: number;

		/** Identifier of reduces super liability */
		reducesSuperLiability?: boolean;

		/** Identifier of reduces tax liability */
		reducesTaxLiability?: boolean;

		/**
		 * determine the calculation type whether fixed amount or percentage of gross
		 * Required
		 */
		calculationType: BenefitCalculationType;

		/** Percentage of gross */
		percentage?: number;

		/** Identifier of subject To NIC */
		subjectToNIC?: boolean;

		/** Identifier of subject To Tax */
		subjectToTax?: boolean;

		/** Identifier of reduced by basic rate applicable or not */
		isReducedByBasicRate?: boolean;

		/** Identifier for apply to pension calculations */
		applyToPensionCalculations?: boolean;

		/** Identifier of calculating on qualifying earnings */
		isCalculatingOnQualifyingEarnings?: boolean;

		/** Identifier of applicable for pension or not */
		isPension?: boolean;
	}

	export enum DeductionDeductionCategory { StakeholderPension = 0, StakeholderPensionPostTax = 1, ChildCareVoucher = 2, SalarySacrifice = 3, UkOther = 4 }

	export interface DeductionObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		deduction?: Deduction;
	}

	export interface StatutoryDeduction {

		/** The Xero identifier for earnings order */
		id?: string;

		/** Name of the earnings order */
		name?: string;

		/** Statutory Deduction Category */
		statutoryDeductionCategory?: StatutoryDeductionStatutoryDeductionCategory;

		/** Xero identifier for Liability Account */
		liabilityAccountId?: string;

		/** Identifier of a record is active or not. */
		currentRecord?: boolean;
	}

	export enum StatutoryDeductionStatutoryDeductionCategory { AdditionalStudentLoan = 0, ChildSupport = 1, CourtFines = 2, Creditor = 3, FederalLevy = 4, InlandRevenueArrears = 5, KiwiSaver = 6, MsdRepayments = 7, NonPriorityOrder = 8, PriorityOrder = 9, TableBased = 10, StudentLoan = 11, VoluntaryStudentLoan = 12, USChildSupport = 13 }


	/** Statutory Deduction Category */
	export enum StatutoryDeductionCategory { AdditionalStudentLoan = 0, ChildSupport = 1, CourtFines = 2, Creditor = 3, FederalLevy = 4, InlandRevenueArrears = 5, KiwiSaver = 6, MsdRepayments = 7, NonPriorityOrder = 8, PriorityOrder = 9, TableBased = 10, StudentLoan = 11, VoluntaryStudentLoan = 12, USChildSupport = 13 }

	export interface EarningsOrders {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		statutoryDeductions?: Array<EarningsOrder>;
	}

	export interface EarningsOrder {

		/** Xero unique identifier for an earning rate */
		id?: string;

		/**
		 * Name of the earning order
		 * Required
		 */
		name: string;

		/** Statutory Deduction Category */
		statutoryDeductionCategory?: StatutoryDeductionStatutoryDeductionCategory;

		/** Xero identifier for Liability Account */
		liabilityAccountId?: string;

		/** Identifier of a record is active or not. */
		currentRecord?: boolean;
	}

	export interface EarningsOrderObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		statutoryDeduction?: EarningsOrder;
	}

	export interface EarningsRates {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		earningsRates?: Array<EarningsRate>;
	}

	export interface EarningsRate {

		/** Xero unique identifier for an earning rate */
		earningsRateID?: string;

		/**
		 * Name of the earning rate
		 * Required
		 */
		name: string;

		/**
		 * Indicates how an employee will be paid when taking this type of earning
		 * Required
		 */
		earningsType: EarningsRateEarningsType;

		/**
		 * Indicates the type of the earning rate
		 * Required
		 */
		rateType: EarningsRateRateType;

		/**
		 * The type of units used to record earnings
		 * Required
		 */
		typeOfUnits: string;

		/** Indicates whether an earning type is active */
		currentRecord?: boolean;

		/**
		 * The account that will be used for the earnings rate
		 * Required
		 */
		expenseAccountID: string;

		/** Default rate per unit (optional). Only applicable if RateType is RatePerUnit */
		ratePerUnit?: number;

		/** This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MultipleOfOrdinaryEarningsRate */
		multipleOfOrdinaryEarningsRate?: number;

		/** Optional Fixed Rate Amount. Applicable for FixedAmount Rate */
		fixedAmount?: number;
	}

	export enum EarningsRateEarningsType { OvertimeEarnings = 0, Allowance = 1, RegularEarnings = 2, Commission = 3, Bonus = 4, TipsDirect = 5, TipsNon_Direct = 6, Backpay = 7, OtherEarnings = 8, LumpSum = 9 }

	export enum EarningsRateRateType { RatePerUnit = 0, MultipleOfOrdinaryEarningsRate = 1, FixedAmount = 2 }

	export interface EarningsRateObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		earningsRate?: EarningsRate;
	}

	export interface LeaveTypes {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		leaveTypes?: Array<LeaveType>;
	}

	export interface LeaveType {

		/** Xero unique identifier for the leave */
		leaveID?: string;

		/** Xero unique identifier for the leave type */
		leaveTypeID?: string;

		/**
		 * Name of the leave type
		 * Required
		 */
		name: string;

		/**
		 * Indicate that an employee will be paid when taking this type of leave
		 * Required
		 */
		isPaidLeave: boolean;

		/**
		 * Indicate that a balance for this leave type to be shown on the employee’s payslips
		 * Required
		 */
		showOnPayslip: boolean;

		/** UTC timestamp of last update to the leave type note */
		updatedDateUTC?: Date;

		/** Shows whether the leave type is active or not */
		isActive?: boolean;

		/** Shows whether the leave type is a statutory leave type or not */
		isStatutoryLeave?: boolean;
	}

	export interface LeaveTypeObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		leaveType?: LeaveType;
	}

	export interface Reimbursements {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		reimbursements?: Array<Reimbursement>;
	}

	export interface Reimbursement {

		/** Xero unique identifier for a reimbursement */
		reimbursementID?: string;

		/**
		 * Name of the reimbursement
		 * Required
		 */
		name: string;

		/**
		 * Xero unique identifier for the account used for the reimbursement
		 * Required
		 */
		accountID: string;

		/** Indicates that whether the reimbursement is active */
		currentRecord?: boolean;
	}

	export interface ReimbursementObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		reimbursement?: Reimbursement;
	}

	export interface Timesheets {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		timesheets?: Array<Timesheet>;
	}

	export interface Timesheet {

		/** The Xero identifier for a Timesheet */
		timesheetID?: string;

		/**
		 * The Xero identifier for the Payroll Calandar that the Timesheet applies to
		 * Required
		 */
		payrollCalendarID: string;

		/**
		 * The Xero identifier for the Employee that the Timesheet is for
		 * Required
		 */
		employeeID: string;

		/**
		 * The Start Date of the Timesheet period (YYYY-MM-DD)
		 * Required
		 */
		startDate: Date;

		/**
		 * The End Date of the Timesheet period (YYYY-MM-DD)
		 * Required
		 */
		endDate: Date;

		/** Status of the timesheet */
		status?: TimesheetStatus;

		/** The Total Hours of the Timesheet */
		totalHours?: number;

		/** The UTC date time that the Timesheet was last updated */
		updatedDateUTC?: Date;
		timesheetLines?: Array<TimesheetLine>;
	}

	export enum TimesheetStatus { Draft = 0, Approved = 1, Completed = 2 }

	export interface TimesheetLine {

		/** The Xero identifier for a Timesheet Line */
		timesheetLineID?: string;

		/**
		 * The Date that this Timesheet Line is for (YYYY-MM-DD)
		 * Required
		 */
		date: Date;

		/**
		 * The Xero identifier for the Earnings Rate that the Timesheet is for
		 * Required
		 */
		earningsRateID: string;

		/** The Xero identifier for the Tracking Item that the Timesheet is for */
		trackingItemID?: string;

		/**
		 * The Number of Units of the Timesheet Line
		 * Required
		 */
		numberOfUnits: number;
	}

	export interface TimesheetObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		timesheet?: Timesheet;
	}

	export interface TimesheetLineObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		timesheetLine?: TimesheetLine;
	}

	export interface PayRunCalendars {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		payRunCalendars?: Array<PayRunCalendar>;
	}

	export interface PayRunCalendar {

		/** Xero unique identifier for the payroll calendar */
		payrollCalendarID?: string;

		/**
		 * Name of the calendar
		 * Required
		 */
		name: string;

		/**
		 * Type of the calendar
		 * Required
		 */
		calendarType: PayRunCalendarCalendarType;

		/**
		 * Period start date of the calendar
		 * Required
		 */
		periodStartDate: Date;

		/** Period end date of the calendar */
		periodEndDate?: Date;

		/**
		 * Payment date of the calendar
		 * Required
		 */
		paymentDate: Date;

		/** UTC timestamp of the last update to the pay run calendar */
		updatedDateUTC?: Date;
	}

	export enum PayRunCalendarCalendarType { Weekly = 0, Fortnightly = 1, FourWeekly = 2, Monthly = 3, Annual = 4, Quarterly = 5 }

	export interface PayRunCalendarObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		payRunCalendar?: PayRunCalendar;
	}

	export interface PaymentMethodObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		paymentMethod?: PaymentMethod;
	}

	export interface PaymentMethod {

		/**
		 * The payment method code
		 * Required
		 */
		paymentMethod: PaymentMethodPaymentMethod;
		bankAccounts?: Array<BankAccount>;
	}

	export enum PaymentMethodPaymentMethod { Cheque = 0, Electronically = 1, Manual = 2 }

	export interface BankAccount {

		/**
		 * Bank account name (max length = 32)
		 * Required
		 */
		accountName: string;

		/**
		 * Bank account number (digits only; max length = 8)
		 * Required
		 */
		accountNumber: string;

		/**
		 * Bank account sort code (6 digits)
		 * Required
		 */
		sortCode: string;
	}

	export interface SalaryAndWages {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		salaryAndWages?: Array<SalaryAndWage>;
	}

	export interface SalaryAndWage {

		/** Xero unique identifier for a salary and wages record */
		salaryAndWagesID?: string;

		/**
		 * Xero unique identifier for an earnings rate
		 * Required
		 */
		earningsRateID: string;

		/**
		 * The Number of Units per week for the corresponding salary and wages
		 * Required
		 */
		numberOfUnitsPerWeek: number;

		/**
		 * The rate of each unit for the corresponding salary and wages
		 * Required
		 */
		ratePerUnit: number;

		/**
		 * The Number of Units per day for the corresponding salary and wages
		 * Required
		 */
		numberOfUnitsPerDay: number;

		/**
		 * The effective date of the corresponding salary and wages
		 * Required
		 */
		effectiveFrom: Date;

		/**
		 * The annual salary
		 * Required
		 */
		annualSalary: number;

		/**
		 * The current status of the corresponding salary and wages
		 * Required
		 */
		status: SalaryAndWageStatus;

		/**
		 * The type of the payment of the corresponding salary and wages
		 * Required
		 */
		paymentType: SalaryAndWagePaymentType;
	}

	export enum SalaryAndWageStatus { Active = 0, Pending = 1 }

	export enum SalaryAndWagePaymentType { Salary = 0 }

	export interface SalaryAndWageObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		salaryAndWages?: SalaryAndWage;
	}

	export interface PayRuns {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		payRuns?: Array<PayRun>;
	}

	export interface PayRun {

		/** Xero unique identifier for the pay run */
		payRunID?: string;

		/** Xero unique identifier for the payroll calendar */
		payrollCalendarID?: string;

		/** Period start date of the payroll calendar */
		periodStartDate?: Date;

		/** Period end date of the payroll calendar */
		periodEndDate?: Date;

		/** Payment date of the pay run */
		paymentDate?: Date;

		/** Total cost of the pay run */
		totalCost?: number;

		/** Total pay of the pay run */
		totalPay?: number;

		/** Pay run status */
		payRunStatus?: PayRunPayRunStatus;

		/** Pay run type */
		payRunType?: PayRunPayRunType;

		/** Calendar type of the pay run */
		calendarType?: PayRunCalendarCalendarType;

		/** Posted date time of the pay run */
		postedDateTime?: Date;
		paySlips?: Array<Payslip>;
	}

	export enum PayRunPayRunStatus { Draft = 0, Posted = 1 }

	export enum PayRunPayRunType { Scheduled = 0, Unscheduled = 1, EarlierYearUpdate = 2 }

	export interface Payslip {

		/** The Xero identifier for a Payslip */
		paySlipID?: string;

		/** The Xero identifier for payroll employee */
		employeeID?: string;

		/** The Xero identifier for the associated payrun */
		payRunID?: string;

		/** The date payslip was last updated */
		lastEdited?: Date;

		/** Employee first name */
		firstName?: string;

		/** Employee last name */
		lastName?: string;

		/** Total earnings before any deductions. Same as gross earnings for UK. */
		totalEarnings?: number;

		/** Total earnings before any deductions. Same as total earnings for UK. */
		grossEarnings?: number;

		/** The employee net pay */
		totalPay?: number;

		/** The employer's tax obligation */
		totalEmployerTaxes?: number;

		/** The part of an employee's earnings that is deducted for tax purposes */
		totalEmployeeTaxes?: number;

		/** Total amount subtracted from an employee's earnings to reach total pay */
		totalDeductions?: number;

		/** Total reimbursements are nontaxable payments to an employee used to repay out-of-pocket expenses when the person incurs those expenses through employment */
		totalReimbursements?: number;

		/** Total amounts required by law to subtract from the employee's earnings */
		totalCourtOrders?: number;

		/** Benefits (also called fringe benefits, perquisites or perks) are various non-earnings compensations provided to employees in addition to their normal earnings or salaries */
		totalBenefits?: number;

		/** BACS Service User Number */
		bacsHash?: string;

		/** The payment method code */
		paymentMethod?: PaymentMethodPaymentMethod;
		earningsLines?: Array<EarningsLine>;
		leaveEarningsLines?: Array<LeaveEarningsLine>;
		timesheetEarningsLines?: Array<TimesheetEarningsLine>;
		deductionLines?: Array<DeductionLine>;
		reimbursementLines?: Array<ReimbursementLine>;
		leaveAccrualLines?: Array<LeaveAccrualLine>;
		benefitLines?: Array<BenefitLine>;
		paymentLines?: Array<PaymentLine>;
		employeeTaxLines?: Array<TaxLine>;
		courtOrderLines?: Array<CourtOrderLine>;
	}

	export interface EarningsLine {

		/** Xero identifier for payroll earnings line */
		earningsLineID?: string;

		/** Xero identifier for payroll earnings rate */
		earningsRateID?: string;

		/** name of earnings rate for display in UI */
		displayName?: string;

		/** Rate per unit for earnings line */
		ratePerUnit?: number;

		/** Earnings number of units */
		numberOfUnits?: number;

		/** Earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed */
		fixedAmount?: number;

		/** The amount of the earnings line. */
		amount?: number;

		/** Identifies if the earnings is taken from the timesheet. False for earnings line */
		isLinkedToTimesheet?: boolean;

		/** Identifies if the earnings is using an average daily pay rate */
		isAverageDailyPayRate?: boolean;
	}

	export interface LeaveEarningsLine {

		/** Xero identifier for payroll leave earnings rate */
		earningsRateID?: string;

		/** Rate per unit for leave earnings line */
		ratePerUnit?: number;

		/** Leave earnings number of units */
		numberOfUnits?: number;

		/** Leave earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed */
		fixedAmount?: number;

		/** The amount of the earnings line. */
		amount?: number;

		/** Identifies if the leave earnings is taken from the timesheet. False for leave earnings line */
		isLinkedToTimesheet?: boolean;
	}

	export interface TimesheetEarningsLine {

		/** Xero identifier for payroll timesheet earnings rate */
		earningsRateID?: string;

		/** Rate per unit for timesheet earnings line */
		ratePerUnit?: number;

		/** Timesheet earnings number of units */
		numberOfUnits?: number;

		/** Timesheet earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed */
		fixedAmount?: number;

		/** The amount of the timesheet earnings line. */
		amount?: number;

		/** Identifies if the timesheet earnings is taken from the timesheet. False for leave earnings line */
		isLinkedToTimesheet?: boolean;
	}

	export interface DeductionLine {

		/** Xero identifier for payroll deduction */
		deductionTypeID?: string;

		/** The amount of the deduction line */
		amount?: number;

		/** Identifies if the deduction is subject to tax */
		subjectToTax?: boolean;

		/** Deduction rate percentage */
		percentage?: number;
	}

	export interface ReimbursementLine {

		/** Xero identifier for payroll reimbursement */
		reimbursementTypeID?: string;

		/** Reimbursement line description */
		description?: string;

		/** Reimbursement amount */
		amount?: number;
	}

	export interface LeaveAccrualLine {

		/** Xero identifier for the Leave type */
		leaveTypeID?: string;

		/** Leave accrual number of units */
		numberOfUnits?: number;
	}

	export interface BenefitLine {

		/** Xero identifier for payroll benefit type */
		benefitTypeID?: string;

		/** Benefit display name */
		displayName?: string;

		/** The amount of the benefit line. */
		amount?: number;

		/** Benefit fixed amount */
		fixedAmount?: number;

		/** Benefit rate percentage */
		percentage?: number;
	}

	export interface PaymentLine {

		/** Xero identifier for payroll payment line */
		paymentLineID?: string;

		/** The amount of the payment line */
		amount?: number;

		/** The account number */
		accountNumber?: string;

		/** The account sort code */
		sortCode?: string;

		/** The account name */
		accountName?: string;
	}

	export interface TaxLine {

		/** Xero identifier for payroll tax line */
		taxLineID?: string;

		/** Tax line description */
		description?: string;

		/** Identifies if the amount is paid for by the employee or employer. True if employer pays the tax */
		isEmployerTax?: boolean;

		/** The amount of the tax line */
		amount?: number;

		/** Tax type ID */
		globalTaxTypeID?: string;

		/** Identifies if the tax line is a manual adjustment */
		manualAdjustment?: boolean;
	}

	export interface CourtOrderLine {

		/** Xero identifier for payroll court order type */
		courtOrderTypeID?: string;

		/** Amount */
		amount?: number;
	}

	export interface PayRunObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		payRun?: PayRun;
	}

	export interface PayslipObject {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		paySlip?: Payslip;
	}

	export interface Payslips {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		paySlips?: Array<Payslip>;
	}

	export interface Settings {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		settings?: Accounts;
	}

	export interface Accounts {
		accounts?: Array<Account>;
	}

	export interface Account {

		/** The Xero identifier for Settings. */
		accountID?: string;

		/** The assigned AccountType */
		type?: AccountType;

		/** A unique 3 digit number for each Account */
		code?: string;

		/** Name of the Account. */
		name?: string;
	}

	export enum AccountType { BANK = 0, EMPLOYERSNIC = 1, NICLIABILITY = 2, PAYEECONTRIBUTION = 3, PAYELIABILITY = 4, WAGESPAYABLE = 5, WAGESEXPENSE = 6 }

	export interface TrackingCategories {
		pagination?: Pagination;

		/** The object returned for a bad request */
		problem?: Problem;
		trackingCategories?: TrackingCategory;
	}

	export interface TrackingCategory {

		/** The Xero identifier for Employee groups tracking category. */
		employeeGroupsTrackingCategoryID?: string;

		/** The Xero identifier for Timesheet tracking category. */
		timesheetTrackingCategoryID?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * searches employees
		 * Get Employees
		 * @param {string} firstName Filter by first name
		 * @param {string} lastName Filter by last name
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @return {Employees} search results matching criteria
		 */
		GetEmployees(firstName: string, lastName: string, page: number): Observable<Employees> {
			return this.http.get<Employees>(this.baseUri + 'Employees?firstName=' + (firstName == null ? '' : encodeURIComponent(firstName)) + '&lastName=' + (lastName == null ? '' : encodeURIComponent(lastName)) + '&page=' + page, {});
		}

		/**
		 * creates employees
		 * Post Employees
		 * @return {EmployeeObject} search results matching criteria
		 */
		CreateEmployee(requestBody: Employee): Observable<EmployeeObject> {
			return this.http.post<EmployeeObject>(this.baseUri + 'Employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches employees
		 * Get Employees/{EmployeeId}
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeObject} search results matching criteria
		 */
		GetEmployee(EmployeeId: string): Observable<EmployeeObject> {
			return this.http.get<EmployeeObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), {});
		}

		/**
		 * updates employee
		 * Put Employees/{EmployeeId}
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeObject} successful response
		 */
		UpdateEmployee(EmployeeId: string, requestBody: Employee): Observable<EmployeeObject> {
			return this.http.put<EmployeeObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * creates employment
		 * Post Employees/{EmployeeId}/Employment
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmploymentObject} search results matching criteria
		 */
		CreateEmployment(EmployeeId: string, requestBody: Employment): Observable<EmploymentObject> {
			return this.http.post<EmploymentObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Employment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches tax records for an employee
		 * Get Employees/{EmployeeId}/Tax
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeTaxObject} search results matching criteria
		 */
		GetEmployeeTax(EmployeeId: string): Observable<EmployeeTaxObject> {
			return this.http.get<EmployeeTaxObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Tax', {});
		}

		/**
		 * retrieve employee openingbalances
		 * Get Employees/{EmployeeId}/ukopeningbalances
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeOpeningBalancesObject} search results matching criteria
		 */
		GetEmployeeOpeningBalances(EmployeeId: string): Observable<EmployeeOpeningBalancesObject> {
			return this.http.get<EmployeeOpeningBalancesObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/ukopeningbalances', {});
		}

		/**
		 * creates employee opening balances
		 * Post Employees/{EmployeeId}/ukopeningbalances
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeOpeningBalancesObject} search results matching criteria
		 */
		CreateEmployeeOpeningBalances(EmployeeId: string, requestBody: EmployeeOpeningBalances): Observable<EmployeeOpeningBalancesObject> {
			return this.http.post<EmployeeOpeningBalancesObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/ukopeningbalances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * updates employee opening balances
		 * Put Employees/{EmployeeId}/ukopeningbalances
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeOpeningBalancesObject} successful response
		 */
		UpdateEmployeeOpeningBalances(EmployeeId: string, requestBody: EmployeeOpeningBalances): Observable<EmployeeOpeningBalancesObject> {
			return this.http.put<EmployeeOpeningBalancesObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/ukopeningbalances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * search employee leave records
		 * Get Employees/{EmployeeId}/Leave
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeLeaves} search results matching criteria
		 */
		GetEmployeeLeaves(EmployeeId: string): Observable<EmployeeLeaves> {
			return this.http.get<EmployeeLeaves>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Leave', {});
		}

		/**
		 * creates employee leave records
		 * Post Employees/{EmployeeId}/Leave
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeLeaveObject} search results matching criteria
		 */
		CreateEmployeeLeave(EmployeeId: string, requestBody: EmployeeLeave): Observable<EmployeeLeaveObject> {
			return this.http.post<EmployeeLeaveObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Leave', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a single employee leave record
		 * Get Employees/{EmployeeId}/Leave/{LeaveID}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} LeaveID Leave id for single object
		 * @return {EmployeeLeaveObject} search results matching criteria
		 */
		GetEmployeeLeave(EmployeeId: string, LeaveID: string): Observable<EmployeeLeaveObject> {
			return this.http.get<EmployeeLeaveObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Leave/' + (LeaveID == null ? '' : encodeURIComponent(LeaveID)), {});
		}

		/**
		 * updates employee leave records
		 * Put Employees/{EmployeeId}/Leave/{LeaveID}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} LeaveID Leave id for single object
		 * @return {EmployeeLeaveObject} successful response
		 */
		UpdateEmployeeLeave(EmployeeId: string, LeaveID: string, requestBody: EmployeeLeave): Observable<EmployeeLeaveObject> {
			return this.http.put<EmployeeLeaveObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Leave/' + (LeaveID == null ? '' : encodeURIComponent(LeaveID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deletes an employee leave record
		 * Delete Employees/{EmployeeId}/Leave/{LeaveID}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} LeaveID Leave id for single object
		 * @return {EmployeeLeaveObject} successful response
		 */
		DeleteEmployeeLeave(EmployeeId: string, LeaveID: string): Observable<EmployeeLeaveObject> {
			return this.http.delete<EmployeeLeaveObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/Leave/' + (LeaveID == null ? '' : encodeURIComponent(LeaveID)), {});
		}

		/**
		 * search employee leave balances
		 * Get Employees/{EmployeeId}/LeaveBalances
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeLeaveBalances} search results matching criteria
		 */
		GetEmployeeLeaveBalances(EmployeeId: string): Observable<EmployeeLeaveBalances> {
			return this.http.get<EmployeeLeaveBalances>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/LeaveBalances', {});
		}

		/**
		 * search employee leave balances
		 * Get Employees/{EmployeeId}/StatutoryLeaveBalance
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} LeaveType Filter by the type of statutory leave
		 * @param {Date} AsOfDate The date from which to calculate balance remaining. If not specified, current date UTC is used.
		 * @return {EmployeeStatutoryLeaveBalanceObject} search results matching criteria
		 */
		GetEmployeeStatutoryLeaveBalances(EmployeeId: string, LeaveType: string, AsOfDate: Date): Observable<EmployeeStatutoryLeaveBalanceObject> {
			return this.http.get<EmployeeStatutoryLeaveBalanceObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/StatutoryLeaveBalance&LeaveType=' + (LeaveType == null ? '' : encodeURIComponent(LeaveType)) + '&AsOfDate=' + AsOfDate.toISOString(), {});
		}

		/**
		 * retrieve a summary of statutory leaves for an employee
		 * Get statutoryleaves/summary/{EmployeeId}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {boolean} activeOnly Filter response with leaves that are currently active or yet to be taken. If not specified, all leaves (past, current, and future scheduled) are returned
		 * @return {EmployeeStatutoryLeavesSummaries} search results matching criteria
		 */
		GetStatutoryLeaveSummary(EmployeeId: string, activeOnly: boolean): Observable<EmployeeStatutoryLeavesSummaries> {
			return this.http.get<EmployeeStatutoryLeavesSummaries>(this.baseUri + 'statutoryleaves/summary/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '&activeOnly=' + activeOnly, {});
		}

		/**
		 * creates employee statutory sick leave records
		 * Post StatutoryLeaves/Sick
		 * @return {EmployeeStatutorySickLeaveObject} search results matching criteria
		 */
		CreateEmployeeStatutorySickLeave(requestBody: EmployeeStatutorySickLeave): Observable<EmployeeStatutorySickLeaveObject> {
			return this.http.post<EmployeeStatutorySickLeaveObject>(this.baseUri + 'StatutoryLeaves/Sick', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a statutory sick leave for an employee
		 * Get StatutoryLeaves/Sick/{StatutorySickLeaveID}
		 * @param {string} StatutorySickLeaveID Statutory sick leave id for single object
		 * @return {EmployeeStatutorySickLeaveObject} search results matching criteria
		 */
		GetEmployeeStatutorySickLeave(StatutorySickLeaveID: string): Observable<EmployeeStatutorySickLeaveObject> {
			return this.http.get<EmployeeStatutorySickLeaveObject>(this.baseUri + 'StatutoryLeaves/Sick/' + (StatutorySickLeaveID == null ? '' : encodeURIComponent(StatutorySickLeaveID)), {});
		}

		/**
		 * searches employee leave periods
		 * Get Employees/{EmployeeId}/LeavePeriods
		 * @param {string} EmployeeId Employee id for single object
		 * @param {Date} startDate Filter by start date
		 * @param {Date} endDate Filter by end date
		 * @return {LeavePeriods} search results matching criteria
		 */
		GetEmployeeLeavePeriods(EmployeeId: string, startDate: Date, endDate: Date): Observable<LeavePeriods> {
			return this.http.get<LeavePeriods>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/LeavePeriods&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString(), {});
		}

		/**
		 * searches employee leave types
		 * Get Employees/{EmployeeId}/LeaveTypes
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeLeaveTypes} search results matching criteria
		 */
		GetEmployeeLeaveTypes(EmployeeId: string): Observable<EmployeeLeaveTypes> {
			return this.http.get<EmployeeLeaveTypes>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/LeaveTypes', {});
		}

		/**
		 * creates employee leave type records
		 * Post Employees/{EmployeeId}/LeaveTypes
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeeLeaveTypeObject} search results matching criteria
		 */
		CreateEmployeeLeaveType(EmployeeId: string, requestBody: EmployeeLeaveType): Observable<EmployeeLeaveTypeObject> {
			return this.http.post<EmployeeLeaveTypeObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/LeaveTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieves an employee's payment method
		 * Get Employees/{EmployeeId}/PaymentMethods
		 * @param {string} EmployeeId Employee id for single object
		 * @return {PaymentMethodObject} search results matching criteria
		 */
		GetEmployeePaymentMethod(EmployeeId: string): Observable<PaymentMethodObject> {
			return this.http.get<PaymentMethodObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PaymentMethods', {});
		}

		/**
		 * creates employee payment method
		 * Post Employees/{EmployeeId}/PaymentMethods
		 * @param {string} EmployeeId Employee id for single object
		 * @return {PaymentMethodObject} search results matching criteria
		 */
		CreateEmployeePaymentMethod(EmployeeId: string, requestBody: PaymentMethod): Observable<PaymentMethodObject> {
			return this.http.post<PaymentMethodObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PaymentMethods', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches employee pay templates
		 * Get Employees/{EmployeeId}/PayTemplates
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeePayTemplateObject} search results matching criteria
		 */
		GetEmployeePayTemplate(EmployeeId: string): Observable<EmployeePayTemplateObject> {
			return this.http.get<EmployeePayTemplateObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayTemplates', {});
		}

		/**
		 * creates employee earnings template records
		 * Post Employees/{EmployeeId}/PayTemplates/earnings
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EarningsTemplateObject} search results matching criteria
		 */
		CreateEmployeeEarningsTemplate(EmployeeId: string, requestBody: EarningsTemplate): Observable<EarningsTemplateObject> {
			return this.http.post<EarningsTemplateObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayTemplates/earnings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * updates employee earnings template records
		 * Put Employees/{EmployeeId}/PayTemplates/earnings/{PayTemplateEarningID}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} PayTemplateEarningID Id for single pay template earnings object
		 * @return {EarningsTemplateObject} search results matching criteria
		 */
		UpdateEmployeeEarningsTemplate(EmployeeId: string, PayTemplateEarningID: string, requestBody: EarningsTemplate): Observable<EarningsTemplateObject> {
			return this.http.put<EarningsTemplateObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayTemplates/earnings/' + (PayTemplateEarningID == null ? '' : encodeURIComponent(PayTemplateEarningID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deletes an employee earnings template record
		 * Delete Employees/{EmployeeId}/PayTemplates/earnings/{PayTemplateEarningID}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} PayTemplateEarningID Id for single pay template earnings object
		 * @return {void} deletion successful
		 */
		DeleteEmployeeEarningsTemplate(EmployeeId: string, PayTemplateEarningID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/PayTemplates/earnings/' + (PayTemplateEarningID == null ? '' : encodeURIComponent(PayTemplateEarningID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * creates multiple employee earnings template records
		 * Post Employees/{EmployeeId}/paytemplateearnings
		 * @param {string} EmployeeId Employee id for single object
		 * @return {EmployeePayTemplates} search results matching criteria
		 */
		CreateMultipleEmployeeEarningsTemplate(EmployeeId: string, requestBody: Array<EarningsTemplate>): Observable<EmployeePayTemplates> {
			return this.http.post<EmployeePayTemplates>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/paytemplateearnings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches benefits
		 * Get Benefits
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @return {Benefits} search results matching criteria
		 */
		GetBenefits(page: number): Observable<Benefits> {
			return this.http.get<Benefits>(this.baseUri + 'Benefits?page=' + page, {});
		}

		/**
		 * create a new benefit
		 * Post Benefits
		 * @return {BenefitObject} search results matching criteria
		 */
		CreateBenefit(requestBody: Benefit): Observable<BenefitObject> {
			return this.http.post<BenefitObject>(this.baseUri + 'Benefits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a single benefit by id
		 * Get Benefits/{id}
		 * @param {string} id Identifier for the benefit
		 * @return {BenefitObject} search results matching criteria
		 */
		GetBenefit(id: string): Observable<BenefitObject> {
			return this.http.get<BenefitObject>(this.baseUri + 'Benefits/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * searches deductions
		 * Get Deductions
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @return {Deductions} search results matching criteria
		 */
		GetDeductions(page: number): Observable<Deductions> {
			return this.http.get<Deductions>(this.baseUri + 'Deductions?page=' + page, {});
		}

		/**
		 * create a new deduction
		 * Post Deductions
		 * @return {DeductionObject} search results matching criteria
		 */
		CreateDeduction(requestBody: Deduction): Observable<DeductionObject> {
			return this.http.post<DeductionObject>(this.baseUri + 'Deductions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a single deduction by id
		 * Get Deductions/{deductionId}
		 * @param {string} deductionId Identifier for the deduction
		 * @return {DeductionObject} search results matching criteria
		 */
		GetDeduction(deductionId: string): Observable<DeductionObject> {
			return this.http.get<DeductionObject>(this.baseUri + 'Deductions/' + (deductionId == null ? '' : encodeURIComponent(deductionId)), {});
		}

		/**
		 * searches earnings orders
		 * Get EarningsOrders
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @return {EarningsOrders} search results matching criteria
		 */
		GetEarningsOrders(page: number): Observable<EarningsOrders> {
			return this.http.get<EarningsOrders>(this.baseUri + 'EarningsOrders?page=' + page, {});
		}

		/**
		 * retrieve a single deduction by id
		 * Get EarningsOrders/{id}
		 * @param {string} id Identifier for the deduction
		 * @return {EarningsOrderObject} search results matching criteria
		 */
		GetEarningsOrder(id: string): Observable<EarningsOrderObject> {
			return this.http.get<EarningsOrderObject>(this.baseUri + 'EarningsOrders/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * searches earnings rates
		 * Get EarningsRates
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @return {EarningsRates} search results matching criteria
		 */
		GetEarningsRates(page: number): Observable<EarningsRates> {
			return this.http.get<EarningsRates>(this.baseUri + 'EarningsRates?page=' + page, {});
		}

		/**
		 * create a new earnings rate
		 * Post EarningsRates
		 * @return {EarningsRateObject} search results matching criteria
		 */
		CreateEarningsRate(requestBody: EarningsRate): Observable<EarningsRateObject> {
			return this.http.post<EarningsRateObject>(this.baseUri + 'EarningsRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a single earnings rates by id
		 * Get EarningsRates/{EarningsRateID}
		 * @param {string} EarningsRateID Identifier for the earnings rate
		 * @return {EarningsRateObject} search results matching criteria
		 */
		GetEarningsRate(EarningsRateID: string): Observable<EarningsRateObject> {
			return this.http.get<EarningsRateObject>(this.baseUri + 'EarningsRates/' + (EarningsRateID == null ? '' : encodeURIComponent(EarningsRateID)), {});
		}

		/**
		 * searches leave types
		 * Get LeaveTypes
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @param {boolean} ActiveOnly Filters leave types by active status. By default the API returns all leave types.
		 * @return {LeaveTypes} search results matching criteria
		 */
		GetLeaveTypes(page: number, ActiveOnly: boolean): Observable<LeaveTypes> {
			return this.http.get<LeaveTypes>(this.baseUri + 'LeaveTypes?page=' + page + '&ActiveOnly=' + ActiveOnly, {});
		}

		/**
		 * create a new leave type
		 * Post LeaveTypes
		 * @return {LeaveTypeObject} search results matching criteria
		 */
		CreateLeaveType(requestBody: LeaveType): Observable<LeaveTypeObject> {
			return this.http.post<LeaveTypeObject>(this.baseUri + 'LeaveTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a single leave type by id
		 * Get LeaveTypes/{LeaveTypeID}
		 * @param {string} LeaveTypeID Identifier for the leave type
		 * @return {LeaveTypeObject} search results matching criteria
		 */
		GetLeaveType(LeaveTypeID: string): Observable<LeaveTypeObject> {
			return this.http.get<LeaveTypeObject>(this.baseUri + 'LeaveTypes/' + (LeaveTypeID == null ? '' : encodeURIComponent(LeaveTypeID)), {});
		}

		/**
		 * searches reimbursements
		 * Get Reimbursements
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @return {Reimbursements} search results matching criteria
		 */
		GetReimbursements(page: number): Observable<Reimbursements> {
			return this.http.get<Reimbursements>(this.baseUri + 'Reimbursements?page=' + page, {});
		}

		/**
		 * create a new reimbursement
		 * Post Reimbursements
		 * @return {ReimbursementObject} search results matching criteria
		 */
		CreateReimbursement(requestBody: Reimbursement): Observable<ReimbursementObject> {
			return this.http.post<ReimbursementObject>(this.baseUri + 'Reimbursements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a single reimbursement by id
		 * Get Reimbursements/{ReimbursementID}
		 * @param {string} ReimbursementID Identifier for the reimbursement
		 * @return {ReimbursementObject} search results matching criteria
		 */
		GetReimbursement(ReimbursementID: string): Observable<ReimbursementObject> {
			return this.http.get<ReimbursementObject>(this.baseUri + 'Reimbursements/' + (ReimbursementID == null ? '' : encodeURIComponent(ReimbursementID)), {});
		}

		/**
		 * searches timesheets
		 * Get Timesheets
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @param {string} employeeId By default get Timesheets will return the timesheets for all employees in an organization. You can add GET https://…/timesheets?filter=employeeId=={EmployeeId} to get only the timesheets of a particular employee.
		 * @param {string} payrollCalendarId By default get Timesheets will return all the timesheets for an organization. You can add GET https://…/timesheets?filter=payrollCalendarId=={PayrollCalendarID} to filter the timesheets by payroll calendar id
		 * @return {Timesheets} search results matching criteria
		 */
		GetTimesheets(page: number, employeeId: string, payrollCalendarId: string): Observable<Timesheets> {
			return this.http.get<Timesheets>(this.baseUri + 'Timesheets?page=' + page + '&employeeId=' + (employeeId == null ? '' : encodeURIComponent(employeeId)) + '&payrollCalendarId=' + (payrollCalendarId == null ? '' : encodeURIComponent(payrollCalendarId)), {});
		}

		/**
		 * create a new timesheet
		 * Post Timesheets
		 * @return {TimesheetObject} search results matching criteria
		 */
		CreateTimesheet(requestBody: Timesheet): Observable<TimesheetObject> {
			return this.http.post<TimesheetObject>(this.baseUri + 'Timesheets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a single timesheet by id
		 * Get Timesheets/{TimesheetID}
		 * @param {string} TimesheetID Identifier for the timesheet
		 * @return {TimesheetObject} search results matching criteria
		 */
		GetTimesheet(TimesheetID: string): Observable<TimesheetObject> {
			return this.http.get<TimesheetObject>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)), {});
		}

		/**
		 * delete a timesheet
		 * Delete Timesheets/{TimesheetID}
		 * @param {string} TimesheetID Identifier for the timesheet
		 * @return {TimesheetLine} search results matching criteria
		 */
		DeleteTimesheet(TimesheetID: string): Observable<TimesheetLine> {
			return this.http.delete<TimesheetLine>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)), {});
		}

		/**
		 * create a new timesheet line
		 * Post Timesheets/{TimesheetID}/Lines
		 * @param {string} TimesheetID Identifier for the timesheet
		 * @return {TimesheetLineObject} search results matching criteria
		 */
		CreateTimesheetLine(TimesheetID: string, requestBody: TimesheetLine): Observable<TimesheetLineObject> {
			return this.http.post<TimesheetLineObject>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)) + '/Lines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * approve a timesheet
		 * Post Timesheets/{TimesheetID}/Approve
		 * @param {string} TimesheetID Identifier for the timesheet
		 * @return {TimesheetObject} search results matching criteria
		 */
		ApproveTimesheet(TimesheetID: string): Observable<TimesheetObject> {
			return this.http.post<TimesheetObject>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)) + '/Approve', null, {});
		}

		/**
		 * revert a timesheet to draft
		 * Post Timesheets/{TimesheetID}/RevertToDraft
		 * @param {string} TimesheetID Identifier for the timesheet
		 * @return {TimesheetObject} search results matching criteria
		 */
		RevertTimesheet(TimesheetID: string): Observable<TimesheetObject> {
			return this.http.post<TimesheetObject>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)) + '/RevertToDraft', null, {});
		}

		/**
		 * update a timesheet line
		 * Put Timesheets/{TimesheetID}/Lines/{TimesheetLineID}
		 * @param {string} TimesheetID Identifier for the timesheet
		 * @param {string} TimesheetLineID Identifier for the timesheet line
		 * @return {TimesheetLineObject} search results matching criteria
		 */
		UpdateTimesheetLine(TimesheetID: string, TimesheetLineID: string, requestBody: TimesheetLine): Observable<TimesheetLineObject> {
			return this.http.put<TimesheetLineObject>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)) + '/Lines/' + (TimesheetLineID == null ? '' : encodeURIComponent(TimesheetLineID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * delete a timesheet line
		 * Delete Timesheets/{TimesheetID}/Lines/{TimesheetLineID}
		 * @param {string} TimesheetID Identifier for the timesheet
		 * @param {string} TimesheetLineID Identifier for the timesheet line
		 * @return {TimesheetLine} search results matching criteria
		 */
		DeleteTimesheetLine(TimesheetID: string, TimesheetLineID: string): Observable<TimesheetLine> {
			return this.http.delete<TimesheetLine>(this.baseUri + 'Timesheets/' + (TimesheetID == null ? '' : encodeURIComponent(TimesheetID)) + '/Lines/' + (TimesheetLineID == null ? '' : encodeURIComponent(TimesheetLineID)), {});
		}

		/**
		 * searches payrun calendars
		 * Get PayRunCalendars
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @return {PayRunCalendars} search results matching criteria
		 */
		GetPayRunCalendars(page: number): Observable<PayRunCalendars> {
			return this.http.get<PayRunCalendars>(this.baseUri + 'PayRunCalendars?page=' + page, {});
		}

		/**
		 * create a new payrun calendar
		 * Post PayRunCalendars
		 * @return {PayRunCalendarObject} search results matching criteria
		 */
		CreatePayRunCalendar(requestBody: PayRunCalendar): Observable<PayRunCalendarObject> {
			return this.http.post<PayRunCalendarObject>(this.baseUri + 'PayRunCalendars', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * retrieve a single payrun calendar by id
		 * Get PayRunCalendars/{PayRunCalendarID}
		 * @param {string} PayRunCalendarID Identifier for the payrun calendars
		 * @return {PayRunCalendarObject} search results matching criteria
		 */
		GetPayRunCalendar(PayRunCalendarID: string): Observable<PayRunCalendarObject> {
			return this.http.get<PayRunCalendarObject>(this.baseUri + 'PayRunCalendars/' + (PayRunCalendarID == null ? '' : encodeURIComponent(PayRunCalendarID)), {});
		}

		/**
		 * retrieves an employee's salary and wages
		 * Get Employees/{EmployeeId}/SalaryAndWages
		 * @param {string} EmployeeId Employee id for single object
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @return {SalaryAndWages} search results matching criteria
		 */
		GetEmployeeSalaryAndWages(EmployeeId: string, page: number): Observable<SalaryAndWages> {
			return this.http.get<SalaryAndWages>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/SalaryAndWages&page=' + page, {});
		}

		/**
		 * creates employee salary and wage record
		 * Post Employees/{EmployeeId}/SalaryAndWages
		 * @param {string} EmployeeId Employee id for single object
		 * @return {SalaryAndWageObject} search results matching criteria
		 */
		CreateEmployeeSalaryAndWage(EmployeeId: string, requestBody: SalaryAndWage): Observable<SalaryAndWageObject> {
			return this.http.post<SalaryAndWageObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/SalaryAndWages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * get employee salary and wages record by id
		 * Get Employees/{EmployeeId}/SalaryAndWages/{SalaryAndWagesID}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} SalaryAndWagesID Id for single pay template earnings object
		 * @return {SalaryAndWages} search results matching criteria
		 */
		GetEmployeeSalaryAndWage(EmployeeId: string, SalaryAndWagesID: string): Observable<SalaryAndWages> {
			return this.http.get<SalaryAndWages>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/SalaryAndWages/' + (SalaryAndWagesID == null ? '' : encodeURIComponent(SalaryAndWagesID)), {});
		}

		/**
		 * updates employee salary and wages record
		 * Put Employees/{EmployeeId}/SalaryAndWages/{SalaryAndWagesID}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} SalaryAndWagesID Id for single pay template earnings object
		 * @return {SalaryAndWageObject} search results matching criteria
		 */
		UpdateEmployeeSalaryAndWage(EmployeeId: string, SalaryAndWagesID: string, requestBody: SalaryAndWage): Observable<SalaryAndWageObject> {
			return this.http.put<SalaryAndWageObject>(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/SalaryAndWages/' + (SalaryAndWagesID == null ? '' : encodeURIComponent(SalaryAndWagesID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deletes an employee salary and wages record
		 * Delete Employees/{EmployeeId}/SalaryAndWages/{SalaryAndWagesID}
		 * @param {string} EmployeeId Employee id for single object
		 * @param {string} SalaryAndWagesID Id for single salary and wages object
		 * @return {void} deletion successful
		 */
		DeleteEmployeeSalaryAndWage(EmployeeId: string, SalaryAndWagesID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Employees/' + (EmployeeId == null ? '' : encodeURIComponent(EmployeeId)) + '/SalaryAndWages/' + (SalaryAndWagesID == null ? '' : encodeURIComponent(SalaryAndWagesID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * searches pay runs
		 * Get PayRuns
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @param {PayRunPayRunStatus} status By default get payruns will return all the payruns for an organization. You can add GET https://api.xero.com/payroll.xro/2.0/payRuns?statu={PayRunStatus} to filter the payruns by status.
		 * @return {PayRuns} search results matching criteria
		 */
		GetPayRuns(page: number, status: PayRunPayRunStatus): Observable<PayRuns> {
			return this.http.get<PayRuns>(this.baseUri + 'PayRuns?page=' + page + '&status=' + status, {});
		}

		/**
		 * retrieve a single pay run by id
		 * Get PayRuns/{PayRunID}
		 * @param {string} PayRunID Identifier for the pay run
		 * @return {PayRunObject} search results matching criteria
		 */
		GetPayRun(PayRunID: string): Observable<PayRunObject> {
			return this.http.get<PayRunObject>(this.baseUri + 'PayRuns/' + (PayRunID == null ? '' : encodeURIComponent(PayRunID)), {});
		}

		/**
		 * update a pay run
		 * Put PayRuns/{PayRunID}
		 * @param {string} PayRunID Identifier for the pay run
		 * @return {PayRunObject} search results matching criteria
		 */
		UpdatePayRun(PayRunID: string, requestBody: PayRun): Observable<PayRunObject> {
			return this.http.put<PayRunObject>(this.baseUri + 'PayRuns/' + (PayRunID == null ? '' : encodeURIComponent(PayRunID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * searches payslips
		 * Get Payslips
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
		 * @param {string} PayRunID PayrunID which specifies the containing payrun of payslips to retrieve. By default, the API does not group payslips by payrun.
		 * @return {Payslips} search results matching criteria
		 */
		GetPayslips(page: number, PayRunID: string): Observable<Payslips> {
			return this.http.get<Payslips>(this.baseUri + 'Payslips?page=' + page + '&PayRunID=' + (PayRunID == null ? '' : encodeURIComponent(PayRunID)), {});
		}

		/**
		 * retrieve a single payslip by id
		 * Get Payslips/{PayslipID}
		 * @param {string} PayslipID Identifier for the payslip
		 * @return {PayslipObject} search results matching criteria
		 */
		GetPaySlip(PayslipID: string): Observable<PayslipObject> {
			return this.http.get<PayslipObject>(this.baseUri + 'Payslips/' + (PayslipID == null ? '' : encodeURIComponent(PayslipID)), {});
		}

		/**
		 * searches settings
		 * Get Settings
		 * @return {Settings} search results matching criteria
		 */
		GetSettings(): Observable<Settings> {
			return this.http.get<Settings>(this.baseUri + 'Settings', {});
		}

		/**
		 * searches tracking categories
		 * Get settings/trackingCategories
		 * @return {TrackingCategories} search results matching criteria
		 */
		GetTrackingCategories(): Observable<TrackingCategories> {
			return this.http.get<TrackingCategories>(this.baseUri + 'settings/trackingCategories', {});
		}
	}

}

