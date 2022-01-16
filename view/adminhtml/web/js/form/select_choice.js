define([
    'jquery',
    'Magento_Ui/js/form/element/select',
    'lib-select2',
], function ($, uiElementSelect) {
    'use strict';

    return uiElementSelect.extend({
        enableSelectChoice: function () {
            $('#'+this.uid).select2({
                width: '100%',
                allowClear: false
            });
        }
    });
});
