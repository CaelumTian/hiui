let default_options = {
    type: 'default',
    duration: 2000,
    mask: false,
    icon: '',
    image: '',
    show: false
}
let timer = null;
Component({

    data: {
        ...default_options
    },

    methods: {
        show(options = {}) {
            options = Object.assign({}, default_options, options);
            options.show = true;
            this.setData({
                ...options
            });
            if(timer) {
                clearTimeout(timer);
            }
            if(this.data.duration !== 0) {
                timer = setTimeout(() => {
                    this.hide();
                    timer = null;
                }, this.data.duration);
            }
        },
        hide() {
            this.setData({
                show: false
            })
        },
        handleToastEnd() {
            this.setData({
                ...default_options
            })
        }
    }
});