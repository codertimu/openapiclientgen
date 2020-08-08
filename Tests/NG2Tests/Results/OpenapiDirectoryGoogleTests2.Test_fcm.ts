import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Android specific options for messages sent through
	 * [FCM connection server](https://goo.gl/4GLdUl).
	 */
	export interface AndroidConfig {

		/**
		 * An identifier of a group of messages that can be collapsed, so that only
		 * the last message gets sent when delivery can be resumed. A maximum of 4
		 * different collapse keys is allowed at any given time.
		 */
		collapseKey?: string;

		/**
		 * Arbitrary key/value payload. If present, it will override
		 * google.firebase.fcm.v1.Message.data.
		 */
		data?: {[id: string]: any };

		/**
		 * If set to true, messages will be allowed to be delivered to the app while
		 * the device is in direct boot mode. See [Support Direct Boot
		 * mode](https://developer.android.com/training/articles/direct-boot).
		 */
		directBootOk?: boolean;

		/** Options for features provided by the FCM SDK for Android. */
		fcmOptions?: AndroidFcmOptions;

		/** Notification to send to android devices. */
		notification?: AndroidNotification;

		/**
		 * Message priority. Can take "normal" and "high" values.
		 * For more information, see [Setting the priority of a
		 * message](https://goo.gl/GjONJv).
		 */
		priority?: AndroidConfigPriority;

		/**
		 * Package name of the application where the registration token must match in
		 * order to receive the message.
		 */
		restrictedPackageName?: string;

		/**
		 * How long (in seconds) the message should be kept in FCM storage if the
		 * device is offline. The maximum time to live supported is 4 weeks, and the
		 * default value is 4 weeks if not set. Set it to 0 if want to send the
		 * message immediately.
		 * In JSON format, the Duration type is encoded as a string rather than an
		 * object, where the string ends in the suffix "s" (indicating seconds) and
		 * is preceded by the number of seconds, with nanoseconds expressed as
		 * fractional seconds. For example, 3 seconds with 0 nanoseconds should be
		 * encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should
		 * be expressed in JSON format as "3.000000001s". The ttl will be rounded down
		 * to the nearest second.
		 */
		ttl?: string;
	}


	/** Options for features provided by the FCM SDK for Android. */
	export interface AndroidFcmOptions {

		/** Label associated with the message's analytics data. */
		analyticsLabel?: string;
	}


	/** Notification to send to android devices. */
	export interface AndroidNotification {

		/**
		 * The notification's body text. If present, it will override
		 * google.firebase.fcm.v1.Notification.body.
		 */
		body?: string;

		/**
		 * Variable string values to be used in place of the format specifiers in
		 * body_loc_key to use to localize the body text to the user's current
		 * localization.
		 * See [Formatting and Styling](https://goo.gl/MalYE3) for more information.
		 */
		bodyLocArgs?: Array<string>;

		/**
		 * The key to the body string in the app's string resources to use to localize
		 * the body text to the user's current localization.
		 * See [String Resources](https://goo.gl/NdFZGI) for more information.
		 */
		bodyLocKey?: string;

		/**
		 * The [notification's channel
		 * id](https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels)
		 * (new in Android O). The app must create a channel with this channel ID
		 * before any notification with this channel ID is received. If you don't send
		 * this channel ID in the request, or if the channel ID provided has not yet
		 * been created by the app, FCM uses the channel ID specified in the app
		 * manifest.
		 */
		channelId?: string;

		/**
		 * The action associated with a user click on the notification.
		 * If specified, an activity with a matching intent filter is launched when
		 * a user clicks on the notification.
		 */
		clickAction?: string;

		/** The notification's icon color, expressed in #rrggbb format. */
		color?: string;

		/**
		 * If set to true, use the Android framework's default LED light settings for
		 * the notification. Default values are specified in
		 * [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml).
		 * If `default_light_settings` is set to true and `light_settings` is also
		 * set, the user-specified `light_settings` is used instead of the
		 * default value.
		 */
		defaultLightSettings?: boolean;

		/**
		 * If set to true, use the Android framework's default sound for the
		 * notification. Default values are specified in
		 * [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml).
		 */
		defaultSound?: boolean;

		/**
		 * If set to true, use the Android framework's default vibrate pattern for the
		 * notification. Default values are specified in
		 * [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml).
		 * If `default_vibrate_timings` is set to true and `vibrate_timings` is also
		 * set, the default value is used instead of the user-specified
		 * `vibrate_timings`.
		 */
		defaultVibrateTimings?: boolean;

		/**
		 * Set the time that the event in the notification occurred. Notifications in
		 * the panel are sorted by this time. A point in time is represented using
		 * [protobuf.Timestamp](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Timestamp).
		 */
		eventTime?: string;

		/**
		 * The notification's icon.
		 * Sets the notification icon to myicon for drawable resource myicon.
		 * If you don't send this key in the request, FCM displays the launcher icon
		 * specified in your app manifest.
		 */
		icon?: string;

		/**
		 * Contains the URL of an image that is going to be displayed in a
		 * notification. If present, it will override
		 * google.firebase.fcm.v1.Notification.image.
		 */
		image?: string;

		/** Settings to control notification LED. */
		lightSettings?: LightSettings;

		/**
		 * Set whether or not this notification is relevant only to the current
		 * device. Some notifications can be bridged to other devices for remote
		 * display, such as a Wear OS watch. This hint can be set to recommend this
		 * notification not be bridged. See [Wear OS
		 * guides](https://developer.android.com/training/wearables/notifications/bridger#existing-method-of-preventing-bridging)
		 */
		localOnly?: boolean;

		/**
		 * Sets the number of items this notification represents. May be displayed as
		 * a badge count for launchers that support badging.See [Notification
		 * Badge](https://developer.android.com/training/notify-user/badges).
		 * For example, this might be useful if you're using just one notification to
		 * represent multiple new messages but you want the count here to represent
		 * the number of total new messages.
		 * If zero or unspecified, systems that support badging use the default, which
		 * is to increment a number displayed on the long-press menu each time a new
		 * notification arrives.
		 */
		notificationCount?: number;

		/**
		 * Set the relative priority for this notification. Priority is an indication
		 * of how much of the user's attention should be consumed by this
		 * notification. Low-priority notifications may be hidden from the user in
		 * certain situations, while the user might be interrupted for a
		 * higher-priority notification. The effect of setting the same priorities may
		 * differ slightly on different platforms. Note this priority differs from
		 * `AndroidMessagePriority`. This priority is processed by the client after
		 * the message has been delivered, whereas
		 * [AndroidMessagePriority](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#androidmessagepriority)
		 * is an FCM concept that controls when the message is delivered.
		 */
		notificationPriority?: AndroidNotificationNotificationPriority;

		/**
		 * The sound to play when the device receives the notification.
		 * Supports "default" or the filename of a sound resource bundled in the app.
		 * Sound files must reside in /res/raw/.
		 */
		sound?: string;

		/**
		 * When set to false or unset, the notification is automatically
		 * dismissed when the user clicks it in the panel. When set to true, the
		 * notification persists even when the user clicks it.
		 */
		sticky?: boolean;

		/**
		 * Identifier used to replace existing notifications in the notification
		 * drawer.
		 * If not specified, each request creates a new notification.
		 * If specified and a notification with the same tag is already being shown,
		 * the new notification replaces the existing one in the notification drawer.
		 */
		tag?: string;

		/**
		 * Sets the "ticker" text, which is sent to accessibility services.
		 * Prior to API level 21 (`Lollipop`), sets the text that is displayed in the
		 * status bar when the notification first arrives.
		 */
		ticker?: string;

		/**
		 * The notification's title. If present, it will override
		 * google.firebase.fcm.v1.Notification.title.
		 */
		title?: string;

		/**
		 * Variable string values to be used in place of the format specifiers in
		 * title_loc_key to use to localize the title text to the user's current
		 * localization.
		 * See [Formatting and Styling](https://goo.gl/MalYE3) for more information.
		 */
		titleLocArgs?: Array<string>;

		/**
		 * The key to the title string in the app's string resources to use to
		 * localize the title text to the user's current localization.
		 * See [String Resources](https://goo.gl/NdFZGI) for more information.
		 */
		titleLocKey?: string;

		/**
		 * Set the vibration pattern to use. Pass in an array of
		 * [protobuf.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)
		 * to turn on or off the vibrator. The first value indicates the `Duration` to
		 * wait before turning the vibrator on. The next value indicates the
		 * `Duration` to keep the vibrator on. Subsequent values alternate between
		 * `Duration` to turn the vibrator off and to turn the vibrator on.
		 * If `vibrate_timings` is set and `default_vibrate_timings` is set to `true`,
		 * the default value is used instead of the user-specified `vibrate_timings`.
		 */
		vibrateTimings?: Array<string>;

		/**
		 * Set the
		 * [Notification.visibility](https://developer.android.com/reference/android/app/Notification.html#visibility)
		 * of the notification.
		 */
		visibility?: AndroidNotificationVisibility;
	}


	/** Settings to control notification LED. */
	export interface LightSettings {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/**
		 * Required. Along with `light_on_duration `, define the blink rate of LED
		 * flashes. Resolution defined by
		 * [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)
		 */
		lightOffDuration?: string;

		/**
		 * Required. Along with `light_off_duration`, define the blink rate of LED
		 * flashes. Resolution defined by
		 * [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)
		 */
		lightOnDuration?: string;
	}


	/**
	 * Represents a color in the RGBA color space. This representation is designed
	 * for simplicity of conversion to/from color representations in various
	 * languages over compactness; for example, the fields of this representation
	 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
	 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
	 * method in iOS; and, with just a little work, it can be easily formatted into
	 * a CSS "rgba()" string in JavaScript, as well.
	 * Note: this proto does not carry information about the absolute color space
	 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
	 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
	 * space.
	 * Example (Java):
	 *      import com.google.type.Color;
	 *      // ...
	 *      public static java.awt.Color fromProto(Color protocolor) {
	 *        float alpha = protocolor.hasAlpha()
	 *            ? protocolor.getAlpha().getValue()
	 *            : 1.0;
	 *        return new java.awt.Color(
	 *            protocolor.getRed(),
	 *            protocolor.getGreen(),
	 *            protocolor.getBlue(),
	 *            alpha);
	 *      }
	 *      public static Color toProto(java.awt.Color color) {
	 *        float red = (float) color.getRed();
	 *        float green = (float) color.getGreen();
	 *        float blue = (float) color.getBlue();
	 *        float denominator = 255.0;
	 *        Color.Builder resultBuilder =
	 *            Color
	 *                .newBuilder()
	 *                .setRed(red / denominator)
	 *                .setGreen(green / denominator)
	 *                .setBlue(blue / denominator);
	 *        int alpha = color.getAlpha();
	 *        if (alpha != 255) {
	 *          result.setAlpha(
	 *              FloatValue
	 *                  .newBuilder()
	 *                  .setValue(((float) alpha) / denominator)
	 *                  .build());
	 *        }
	 *        return resultBuilder.build();
	 *      }
	 *      // ...
	 * Example (iOS / Obj-C):
	 *      // ...
	 *      static UIColor* fromProto(Color* protocolor) {
	 *         float red = [protocolor red];
	 *         float green = [protocolor green];
	 *         float blue = [protocolor blue];
	 *         FloatValue* alpha_wrapper = [protocolor alpha];
	 *         float alpha = 1.0;
	 *         if (alpha_wrapper != nil) {
	 *           alpha = [alpha_wrapper value];
	 *         }
	 *         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
	 *      }
	 *      static Color* toProto(UIColor* color) {
	 *          CGFloat red, green, blue, alpha;
	 *          if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
	 *            return nil;
	 *          }
	 *          Color* result = [[Color alloc] init];
	 *          [result setRed:red];
	 *          [result setGreen:green];
	 *          [result setBlue:blue];
	 *          if (alpha <= 0.9999) {
	 *            [result setAlpha:floatWrapperWithValue(alpha)];
	 *          }
	 *          [result autorelease];
	 *          return result;
	 *     }
	 *     // ...
	 *  Example (JavaScript):
	 *     // ...
	 *     var protoToCssColor = function(rgb_color) {
	 *        var redFrac = rgb_color.red || 0.0;
	 *        var greenFrac = rgb_color.green || 0.0;
	 *        var blueFrac = rgb_color.blue || 0.0;
	 *        var red = Math.floor(redFrac * 255);
	 *        var green = Math.floor(greenFrac * 255);
	 *        var blue = Math.floor(blueFrac * 255);
	 *        if (!('alpha' in rgb_color)) {
	 *           return rgbToCssColor_(red, green, blue);
	 *        }
	 *        var alphaFrac = rgb_color.alpha.value || 0.0;
	 *        var rgbParams = [red, green, blue].join(',');
	 *        return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
	 *     };
	 *     var rgbToCssColor_ = function(red, green, blue) {
	 *       var rgbNumber = new Number((red << 16) | (green << 8) | blue);
	 *       var hexString = rgbNumber.toString(16);
	 *       var missingZeros = 6 - hexString.length;
	 *       var resultBuilder = ['#'];
	 *       for (var i = 0; i < missingZeros; i++) {
	 *          resultBuilder.push('0');
	 *       }
	 *       resultBuilder.push(hexString);
	 *       return resultBuilder.join('');
	 *     };
	 *     // ...
	 */
	export interface Color {

		/**
		 * The fraction of this color that should be applied to the pixel. That is,
		 * the final pixel color is defined by the equation:
		 * pixel color = alpha * (this color) + (1.0 - alpha) * (background color)
		 * This means that a value of 1.0 corresponds to a solid color, whereas
		 * a value of 0.0 corresponds to a completely transparent color. This
		 * uses a wrapper message rather than a simple float scalar so that it is
		 * possible to distinguish between a default value and the value being unset.
		 * If omitted, this color object is to be rendered as a solid color
		 * (as if the alpha value had been explicitly given with a value of 1.0).
		 */
		alpha?: number;

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue?: number;

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green?: number;

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red?: number;
	}

	export enum AndroidNotificationNotificationPriority { PRIORITY_UNSPECIFIED = 0, PRIORITY_MIN = 1, PRIORITY_LOW = 2, PRIORITY_DEFAULT = 3, PRIORITY_HIGH = 4, PRIORITY_MAX = 5 }

	export enum AndroidNotificationVisibility { VISIBILITY_UNSPECIFIED = 0, PRIVATE = 1, PUBLIC = 2, SECRET = 3 }

	export enum AndroidConfigPriority { NORMAL = 0, HIGH = 1 }


	/** [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options. */
	export interface ApnsConfig {

		/** Options for features provided by the FCM SDK for iOS. */
		fcmOptions?: ApnsFcmOptions;

		/**
		 * HTTP request headers defined in Apple Push Notification Service. Refer to
		 * [APNs request
		 * headers](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns)
		 * for supported headers, e.g. "apns-priority": "10".
		 */
		headers?: {[id: string]: any };

		/**
		 * APNs payload as a JSON object, including both `aps` dictionary and custom
		 * payload. See [Payload Key
		 * Reference](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification).
		 * If present, it overrides google.firebase.fcm.v1.Notification.title
		 * and google.firebase.fcm.v1.Notification.body.
		 */
		payload?: {[id: string]: any };
	}


	/** Options for features provided by the FCM SDK for iOS. */
	export interface ApnsFcmOptions {

		/** Label associated with the message's analytics data. */
		analyticsLabel?: string;

		/**
		 * Contains the URL of an image that is going to be displayed in a
		 * notification. If present, it will override
		 * google.firebase.fcm.v1.Notification.image.
		 */
		image?: string;
	}


	/** Platform independent options for features provided by the FCM SDKs. */
	export interface FcmOptions {

		/** Label associated with the message's analytics data. */
		analyticsLabel?: string;
	}


	/** Message to send by Firebase Cloud Messaging Service. */
	export interface Message {

		/**
		 * Android specific options for messages sent through
		 * [FCM connection server](https://goo.gl/4GLdUl).
		 */
		android?: AndroidConfig;

		/** [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options. */
		apns?: ApnsConfig;

		/**
		 * Condition to send a message to,
		 * e.g. "'foo' in topics && 'bar' in topics".
		 */
		condition?: string;

		/**
		 * Input only. Arbitrary key/value payload. The key should not be a reserved
		 * word ("from", "message_type", or any word starting with "google" or "gcm").
		 */
		data?: {[id: string]: any };

		/** Platform independent options for features provided by the FCM SDKs. */
		fcmOptions?: FcmOptions;

		/**
		 * Output Only. The identifier of the message sent, in the format of
		 * `projects/messages/{message_id}`.
		 */
		name?: string;

		/** Basic notification template to use across all platforms. */
		notification?: Notification;

		/** Registration token to send a message to. */
		token?: string;

		/**
		 * Topic name to send a message to, e.g. "weather".
		 * Note: "/topics/" prefix should not be provided.
		 */
		topic?: string;

		/** [Webpush protocol](https://tools.ietf.org/html/rfc8030) options. */
		webpush?: WebpushConfig;
	}


	/** Basic notification template to use across all platforms. */
	export interface Notification {

		/** The notification's body text. */
		body?: string;

		/**
		 * Contains the URL of an image that is going to be downloaded on the device
		 * and displayed in a notification.
		 * JPEG, PNG, BMP have full support across platforms. Animated GIF and video
		 * only work on iOS. WebP and HEIF have varying levels of support across
		 * platforms and platform versions.
		 * Android has 1MB image size limit.
		 * Quota usage and implications/costs for hosting image on Firebase Storage:
		 * https://firebase.google.com/pricing
		 */
		image?: string;

		/** The notification's title. */
		title?: string;
	}


	/** [Webpush protocol](https://tools.ietf.org/html/rfc8030) options. */
	export interface WebpushConfig {

		/**
		 * Arbitrary key/value payload. If present, it will override
		 * google.firebase.fcm.v1.Message.data.
		 */
		data?: {[id: string]: any };

		/** Options for features provided by the FCM SDK for Web. */
		fcmOptions?: WebpushFcmOptions;

		/**
		 * HTTP headers defined in webpush protocol. Refer to
		 * [Webpush protocol](https://tools.ietf.org/html/rfc8030#section-5) for
		 * supported headers, e.g. "TTL": "15".
		 */
		headers?: {[id: string]: any };

		/**
		 * Web Notification options as a JSON object. Supports Notification instance
		 * properties as defined in [Web Notification
		 * API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). If
		 * present, "title" and "body" fields override
		 * [google.firebase.fcm.v1.Notification.title] and
		 * [google.firebase.fcm.v1.Notification.body].
		 */
		notification?: {[id: string]: any };
	}


	/** Options for features provided by the FCM SDK for Web. */
	export interface WebpushFcmOptions {

		/** Label associated with the message's analytics data. */
		analyticsLabel?: string;

		/**
		 * The link to open when the user clicks on the notification.
		 * For all URL values, HTTPS is required.
		 */
		link?: string;
	}


	/** Request to send a message to specified target. */
	export interface SendMessageRequest {

		/** Message to send by Firebase Cloud Messaging Service. */
		message?: Message;

		/** Flag for testing the request without actually delivering the message. */
		validateOnly?: boolean;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Send a message to specified target (a registration token, topic
		 * or condition).
		 * Post v1/{parent}/messages:send
		 * @param {string} parent Required. It contains the Firebase project id (i.e. the unique identifier
		 * for your Firebase project), in the format of `projects/{project_id}`.
		 * For legacy support, the numeric project number with no padding is also
		 * supported in the format of `projects/{project_number}`.
		 * @return {void} Successful response
		 */
		Fcm_projects_messages_send(parent: string, requestBody: SendMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages:send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

