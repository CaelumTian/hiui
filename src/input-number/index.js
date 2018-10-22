Component({
    properties: {
        min: {
            type: Number,
            value: 0
        },
        max: {
            type: Number,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: Number,
            value: 1
        },
        disabled: {
            type: Boolean,
            value: false 
        },
        name: {
            type: String,
            value: ''
        }
    },
    created() {
        let value = this.data.min;
        if(this.data.value !== undefined) {
            value = this.data.value;
        }
        this.setData({
            value: this.getValue(value)
        });
    },
    methods: {
        calculate(operator) {
            if(this.data.disabled) {
                return false;
            }
            let step = operator === "minus" ? -this.data.step : +this.data.step;
            let value = Math.round((this.data.value + step) * 100) / 100;
            this.setData({
                value: this.getValue(value)
            })
        },
        handleInput(event) {
            let value = event.detail.value;
            if(value !== undefined) {
                this.setData({
                    value: this.getValue(value)
                })
            }
        },
        handleBlur() {
            this.setData({
                value: this.getValue(this.data.value)
            });
            this.triggerEvent("iblur");
        },
        handleMinus() {
            this.calculate("minus");
            this.triggerEvent("minus");
        },
        handlePlus() {
            this.calculate("plus");
            this.triggerEvent("plus");
        },
        getValue(value) {
            let newValue = Math.max(Math.min(this.data.max, value), this.data.min);
            if(newValue !== this.data.value) {
                this.triggerEvent("ichange", {
                    value: newValue
                });
            }
            return newValue;
        }
    }
});