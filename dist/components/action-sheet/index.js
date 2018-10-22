Component({
    properties: {
        actions: {
            type: Array
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        showCancel: {
            type: Boolean,
            value: true
        },
        maskCloseAble: {
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        handleClickMask() {
            if(!this.data.maskCloseAble) {
                return;
            }
            this.handleClickCancel();
        },
        handleClickItem(event) {
            let { index } = event.currentTarget.dataset; 
            this.triggerEvent("itemClick", { index });
        },
        handleClickCancel() {
            this.triggerEvent("cancel", {});
        }
    }
});