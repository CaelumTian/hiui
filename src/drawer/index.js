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
        visible: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        handleMaskClick() {
            this.triggerEvent("close");
        }
    }
});