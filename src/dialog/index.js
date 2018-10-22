Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        okText: {
            type: String,
            value: "确认"
        },
        showOk: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: true
        },
        actions: {
            type: Array,
            value: []
        },
        mode: {
            type: String,
            value: "horizontal"
        },
        title: {
            type: String,
            value: ''
        }
    },
    methods: {
        handleClickOk () {
            this.triggerEvent('ok');
        },
        handleClickCancel () {
            this.triggerEvent('cancel');
        },
        handleClickItem(event) {
            let { index } = event.currentTarget.dataset; 
            this.triggerEvent("itemClick", { index });
        }
    }
});