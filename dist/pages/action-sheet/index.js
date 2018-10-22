Page({
    data: {
        actions: [
            {
                name: "选项1"
            },
            {
                name: "选项2"
            },
            {
                name: "选项3"
            },
            {
                name: "分享",
                openType: "share",
                icon: "share"
            }
        ],
        actions2: [
            {
                "name": "退出",
                "color": "#f96e75"
            }
        ],
        show: false,
        show2: false,
        aa: false
    },
    handleClick() {
        this.setData({
            show: true
        })
    },
    handleClick2() {
        this.setData({
            show2: true
        })
    },
    handleCancel() {
        this.setData({
            show: false
        })
    },
    handleCancel2() {
        this.setData({
            show2: false
        })
    },
    handleItemClick(event) {
        if(event.index === 3) {
            return false;
        }
        this.selectComponent("#message").show({
            "content": "选项 " + (event.index + 1),
            "type": "success"
        })
    },
    handleItemClick2(event) {
        let actions2 = this.data.actions2;
        actions2[0].loading = true;
        this.setData({
            actions2: actions2
        })
        setTimeout(() => {
            this.selectComponent("#message").show({
                "content": "删除成功",
                "type": "success"
            });
            let actions2 = this.data.actions2;
            actions2[0].loading = false;
            this.setData({
                show2: false,
                actions2: actions2
            });
        }, 1000)
    }
});