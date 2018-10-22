let default_options = {
    show: false,
    duration: 2000,
    timer: null,
    content: '',
    type: 'primary',
    exClass: false
}
let timer = null;
Component({
    data: {
        ...default_options
    },
    methods: {
        show(options) {
            if(!options.content) {
                throw new Error("content must be set");
            }
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
                ...default_options
            })
        }
    }
});