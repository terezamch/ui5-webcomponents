import SegmentedButtonItemTemplate from "./generated/templates/SegmentedButtonItemTemplate.lit.js";
import ToggleButton from "./ToggleButton.js";
import ButtonDesign from "./types/ButtonDesign.js";

import { SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION } from "./generated/i18n/i18n-defaults.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-segmentedbutton-item",
	properties: /** @lends  sap.ui.webcomponents.main.SegmentedButtonItem.prototype */ {
		/**
		 * Defines the <code>ui5-button</code> design.
		 *
		 * <br><br>
		 * <b>Note:</b>
		 *
		 * <ul>
		 * <li><code>Default</code></li>
		 * <li><code>Emphasized</code></li>
		 * <li><code>Positive</code></li>
		 * <li><code>Negative</code></li>
		 * <li><code>Transparent</code></li>
		 * </ul>
		 *
		 * @type {ButtonDesign}
		 * @defaultvalue "Default"
		 * @private
		 */
		design: {
			type: ButtonDesign,
			defaultValue: ButtonDesign.Default,
		},

		/**
		 * Defines whether the icon should be displayed after the <code>ui5-button</code> text.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		iconEnd: {
			type: Boolean,
		},

		/**
		 * Defines the size of the icon inside the <code>ui5-button</code>.
		 *
		 * @type {string}
		 * @defaultvalue undefined
		 * @private
		 */
		iconSize: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * When set to <code>true</code>, the <code>ui5-button</code> will
		 * automatically submit the nearest form element upon <code>press</code>.
		 * <br><br>
		 * <b>Important:</b> For the <code>submits</code> property to have effect, you must add the following import to your project:
		 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		submits: {
			type: Boolean,
		},

		/**
		 * Defines the index of the item inside of the SegmentedButton.
		 * @private
		 * @type {String}
		 */
		posInSet: {
			type: String,
		},

		/**
		 * Defines how many items are inside of the SegmentedButton.
		 * @private
		 * @type {String}
		 */
		sizeOfSet: {
			type: String,
		},
	},
};

/**
 * @class
 *
 *<h3 class="comment-api-title">Overview</h3>
 *
 * Users can use the <code>ui5-segmentedbutton-item</code> as part of a <code>ui5-segmentedbutton</code>.
 * <br><br>
 * Clicking or tapping on a <code>ui5-segmentedbutton-item</code> changes its state to <code>pressed</code>.
 * The button returns to its initial state when the user clicks or taps on it again.
 * By applying additional custom CSS-styling classes, apps can give a different style to any
 * <code>ui5-segmentedbutton-item</code>.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/SegmentedButtonItem";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.SegmentedButtonItem
 * @extends Button
 * @tagname ui5-segmentedbutton-item
 * @public
 */
class SegmentedButtonItem extends ToggleButton {
	static get metadata() {
		return metadata;
	}

	static get template() {
		return SegmentedButtonItemTemplate;
	}

	get ariaDescription() {
		return this.i18nBundle.getText(SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION);
	}
}

SegmentedButtonItem.define();

export default SegmentedButtonItem;
