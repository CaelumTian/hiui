Component({
    properties: {
        size: {
            type: String,
            value: 'normal'
        },
        type: {
            type: String,
            value: 'default'
        },
        inline: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        shape: {
            type: String,
            value: 'square'
        },
        exClass: {
            type: String
        }
    },

    methods: {
        handleTap(event) {
            if(this.data.disabled) {
                return false;
            }
            this.triggerEvent('btnClick', {});
        },
        handleGetuserinfo(detail) {
            this.triggerEvent('btnGetuserinfo', {});
        },
        handleGetphonenumber(event) {
            this.triggerEvent('btnGetphonenumber', {});
        }
    }
});