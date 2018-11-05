/**
 * @warn 注意这个组件目前由于智能小程序本身问题，滚动动能不完善，慎用滚动效果。
 */
Component({
    properties: {
        loop: {
            type: Boolean,
            value: false
        },
        speed: {
            type: Number,
            value: 1000
        },
        color: {
            type: String,
            value: "#f76a24"
        },
        openType: {
            type: String,
            value: 'navigate'
        },
        url: {
            type: String,
            value: ''
        }
    },

    data: {
        show: true,
        prefix: ".hi-notice-bar__",
        wrapWidth: 0,
        width: 0,
        duration: 0,
        timer: null,
        animationData: {}
    },

    ready() {
        if(this.data.loop) {
            this.initAnimation();
        }
    },

    methods: {
        initAnimation() {
            // 将选择器的选取范围更改为自定义组件 component 内
            let self = this;
            swan.createSelectorQuery().select(self._('u-noticebar-wrap')).boundingClientRect(function (wrapRect) {
                // 这里有bug，返回的永远是最后一个组件的 this，目测原因是回调函数没有 uuid 这种功能（仅保留最后一个）
                swan.createSelectorQuery().select(self._('u-noticebar-content')).boundingClientRect(function(rect) {
                    let duration = rect.width / 40 * self.data.speed;
                    self.setData({
                        wrapWidth: wrapRect.width,
                        width: rect.width,
                        duration: duration
                    }, function() {
                        self.startAnimation();
                    })
                }).exec();
            }).exec();
        },
        _(className) {
            return this.data.prefix + className;
        },
        startAnimation(reset) {
            if(reset) {
                let animation = swan.createAnimation({
                    duration: 0
                });
                animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: animation.export()
                })
            }
            let scrollAnimation = swan.createAnimation({
                duration: this.data.duration,
                timingFunction: "linear"
            })
            scrollAnimation.translateX(-this.data.width).step();
            setTimeout(() => {
                this.setData({
                    animationData: scrollAnimation.export()
                })
            }, 100);
            let timer = setTimeout(() => {
                // 刷新动画重置
                this.startAnimation(true);
            }, this.data.duration);
            this.setData({
                timer: timer
            });
        },
        destoryTimer() {
            if(this.data.timer) {
                clearTimeout(this.data.timer);
            }
        },
        handleClose() {
            this.destoryTimer();
            this.setData({
                show: false,
                timer: null
            })
        }
    }
});