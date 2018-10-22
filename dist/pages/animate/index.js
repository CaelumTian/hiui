let timer = null;
Page({
    data: {
        show: false,
    },
    handleFade() {
        this.handleAnimate('fade');
    },
    handleFadeUp() {
        this.handleAnimate('fade-up');
    },
    handleFadeDown() {
        this.handleAnimate('fade-down');
    },
    handleFadeLeft() {
        this.handleAnimate('fade-left');
    },
    handleFadeRight() {
        this.handleAnimate('fade-right');
    },
    handleBounce() {
        this.handleAnimate('bounce');
    },
    handleAnimate(name) {
        if(timer !== null) {
            return false;
        }
        this.setData({
            name,
            show: true
        });
        timer = setTimeout(() => {
            this.setData({
                show: false
            });
            timer = null;
        }, 1000)
    }
});