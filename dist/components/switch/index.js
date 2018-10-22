Component({
    properties: {
        size: {
            type: String,
            value: '30px'
        },
        checked: {
            type:  Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        loading: {
            type: Boolean,
            value: false
        },
        exClass: {
            type: String
        }
    },

    methods: {
        handleTap() {
            if(this.data.disabled || this.data.loading) {
                return false;
            }
            let checked = !this.data.checked;
            this.triggerEvent('change', {
                value: checked
            });
        }
    }
});