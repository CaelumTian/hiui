Page({
    data: {

    },
    handlePrimary() {
        this.selectComponent("#message").show({
            "content": "这是一个默认提示"
        })
    },
    handleWarning() {
        this.selectComponent("#message").show({
            "content": "这是一个警告提示",
            "type": "warning"
        })
    },
    handleSuccess() {
        this.selectComponent("#message").show({
            "content": "这是一个成功提示",
            "type": "success"
        })
    },
    handleCustom() {
        this.selectComponent("#message").show({
            "content": "自定义样式提示框",
            "exClass": "custom-message"
        })
    },
    handleCustomTime() {
        this.selectComponent("#message").show({
            "content": "本提示将在5秒后消失",
            "duration": 5000
        })
    }
});