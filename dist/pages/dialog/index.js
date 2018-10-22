Page({
    data: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        actions1: [
            {
                "name": "支付宝",
                "color": "#549ef4" 
            },
            {
                "name": "微信",
                "color": "#67c26c"
            },
            {
                "name": "取消"
            }
        ],
        actions2: [
            {
                "name": "纵向列表"
            },
            {
                "name": "自带图标",
                "icon": "like"
            },
            {
                "name": "关闭",
                "color": "#96e75"
            }
        ],
        actions3: [
            {
                "name": "取消"
            },
            {
                "name": "删除",
                "color": "#f96e75"
            }
        ]
    },
    handleClick1() {
        this.setData({
            show1: true,
            mode: "vertical"
        })
    },
    handleClick2() {
        this.setData({
            show2: true
        })
    },
    handleClick3() {
        this.setData({
            show3: true
        })
    },
    handleClick4() {
        this.setData({
            show4: true
        })
    },
    handleOk1() {
        this.setData({
            "show1": false
        })
    },
    handleCancel1() {
        this.setData({
            "show1": false
        })
    },
    itemClick1(event) {
        let index = event.index;
        let text = '';
        switch(index) {
            case 0:
                text = "支付宝支付";
                break;
            case 1:
                text = "微信支付";
                break;
            case 2:
                text = "取消支付";
                break;   
        }
        this.selectComponent("#message").show({
            "content": text,
            "type": (index === 2 ? "warning" : "success")
        })
        this.setData({
            "show2": false
        })
    },
    itemClick2() {
        this.setData({
            "show3": false
        })
    },
    itemClick3(event) {
        let index = event.index;
        if(index === 0) {
            this.setData({
                "show4": false
            })
        }else {
            let actions3 = this.data.actions3;
            actions3[1].loading = true;
            this.setData({
                actions3: actions3
            }, () => {
                setTimeout(() => {
                    let actions3 = this.data.actions3;
                    actions3[1].loading = false;
                    this.setData({
                        "show4": false,
                        "actions3": actions3
                    })
                    this.selectComponent("#message").show({
                        "content": "删除成功",
                        "type": "success"
                    })
                }, 1000)
            })
        }
    }
});