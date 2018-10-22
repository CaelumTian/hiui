Page({
    data: {
        show1: false
    },
    handleClick1() {
        this.setData({
            show1: true
        })
    },
    handleClose1() {
        this.setData({
            show1: false,
        })
    },
    handleClick2() {
        this.setData({
            show2: true,
        })
    },
    handleClose2() {
        this.setData({
            show2: false,
        })
    },
})
