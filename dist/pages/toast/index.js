Page({
    handleText() {
        this.selectComponent("#toast").show({
            "content": "仅有文本的"
        })
    },
    handleSuccess() {
        this.selectComponent("#toast").show({
            "content": "成功提示",
            "type": "success"
        })
    },
    handleWarning() {
        this.selectComponent("#toast").show({
            "content": "警告提示",
            "type": "warning"
        })
    },
    handleError() {
        this.selectComponent("#toast").show({
            "content": "错误提示",
            "type": "error"
        })
    },
    handleLoad() {
        this.selectComponent("#toast").show({
            "content": "加载提示",
            "type": "loading"
        })
    },
    handleIcon() {
        this.selectComponent("#toast").show({
            "content": "亲,爱你呦",
            "icon": "like"
        })
    },
    handleMask() {
        this.selectComponent("#toast").show({
            "content": "带有遮罩层提示",
            "mask": "true"
        })
    },
    handleImage() {
        this.selectComponent("#toast").show({
            "content": "带有图片的",
            "image": "/images/avator.jpg"
        })
    }
});