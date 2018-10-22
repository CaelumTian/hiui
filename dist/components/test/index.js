Component({
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    data: {}, 
    ready() {
        this.init();
    },
    methods: {
        init() {
            swan.createSelectorQuery().in(this).select(".hi-test__container").boundingClientRect((rect) => {
                console.log(this, this.data.name);
            }).exec();
        }
    }
});