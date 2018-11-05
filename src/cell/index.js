Component({
    properties: {
        title: {
            type: String
        },
        label: {
            type: String
        },
        value: {
            type: String
        },
        link: {
            type: Boolean,
            value: false
        },
        url: {
            type: String,
            value: ''
        },
        onlyTapRight: {
            type: Boolean,
            value: false
        },
        linkType: {
            type: String,
            value: 'navigateTo'
        },
        exClass: {
            type: String
        }
    },

    methods: {
        handleTap() {
            if(!this.data.onlyTapRight) {
                this.handleNavigateTo();
            }
        },
        // 不冒泡事件
        handleNavigateTo() {
            let url = this.data.url,
                isLink = this.data.link,
                type = this.data.linkType;
            this.triggerEvent("cellClick", {});
            if (!isLink || !Boolean(this.data.url)) {
                return false;
            }
            if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(type) === -1) {
                warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', type);
                return;
            }
            swan[type]({
                url: url
            });
        }
    }
});