Component({
    properties: {
        name: {
            type: String,
            value: 'fade'
        },
        show: {
            type: Boolean,
            value: false,
            observer: function(show) {
                this.observerShow(show);
            }
        },
        duration: {
            type: Number,
            value: 300
        }
    },
    data: {
        type: '',
        inited: false,
        display: false
    }, 
    methods: {
        observerShow(show) {
            if(show) {
                this.show();
            }else {
                this.setData({
                    type: 'leave'
                })
            }
        },
        show() {
            this.setData({
                inited: true,
                display: true,
                type: 'enter'
            });
        },
        handleAnimationEnd() {
            if(!this.data.show) {
                this.setData({
                    display: false
                });
                this.triggerEvent("close");
            }
        }
    }
});