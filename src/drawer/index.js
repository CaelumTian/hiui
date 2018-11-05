Component({
    properties: {
        width: {
            type: String,
            value: "224px"
        },
        mask: {
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: false
        },
        direction: {
            type: String,
            value: 'left'
        },
        maskClosable: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        handleMaskClick() {
            if (this.data.maskClosable) {
                this.triggerEvent("close");
            }
        }
    }
});