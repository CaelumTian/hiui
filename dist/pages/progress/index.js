Page({
    data: {
        per: 50
    },
    handlePlus() {
        let per = this.data.per;
        if(per + 20 < 100) {
            per = per + 20;
        }else {
            per = 100;
        }
        this.setData({
            per: per
        })
    },
    handleDes() {
        let per = this.data.per;
        if(per - 20 > 0) {
            per = per - 20;
        }else {
            per = 0;
        }
        this.setData({
            per: per
        })
    },
});