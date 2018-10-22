Page({
    data: {
        actions1: [
            {
                width: 60,
                icon: "favor",
                fontSize: "16px",
                background: "#f2d350",
                color: "#fff"
            },
            {
                width: 60,
                icon: "delete",
                fontSize: "16px",
                background: "#e75a5b",
                color: "#fff"
            }
        ],
        actions4: [
            {
                width: 60,
                name: '按钮1'
            },
            {
                width: 60,
                name: '按钮2',
                color: '#fff',
                background: '#67c26c',
                icon: "location"
            }
        ],
        actions2: [
            {
                width: 50,
                background: "#549ef4",
                color: "#fff",
                fontSize: "13px",
                name: "按钮1"
            },
            {
                width: 50,
                background: "#549ef4",
                color: "#fff",
                fontSize: "13px",
                name: "按钮2"
            },
            {
                width: 50,
                background: "#549ef4",
                color: "#fff",
                fontSize: "13px",
                name: "按钮3"
            }
        ],
        actions3: [
            {
                width: 65,
                icon: "favor",
                name: "星标",
                background: "#f2d350",
                color: "#fff"
            },
            {
                width: 65,
                icon: "settings",
                name: "更多",
                background: "#549ef4",
                color: "#fff",
            }
        ],
        sactions: [
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
        show: false,
        toggle1: false,
        toggle2: false
    },
    btnClick1(event) {
        // 只能这么关闭了
        this.setData({
            toggle1: !this.data.toggle1
        })
        if(event.index === 0) {
            this.selectComponent("#message").show({
                "content": "您点了关注",
                "type": "success"
            })
        }else {
            this.selectComponent("#message").show({
                "content": "您点了删除",
                "type": "warning"
            })
        }
    },
    btnClick2(event) {
        if(event.index === 1 ) {
            this.setData({
                show: true
            })
        }
    },
    btnClick4() {
        this.setData({
            toggle4: !this.data.toggle4
        })
    },
    handleItemClick() {
        this.setData({
            show: false
        })
        this.setData({
            toggle2: !this.data.toggle2
        })
    },
    handleCancel() {
        this.handleItemClick();
    }
});