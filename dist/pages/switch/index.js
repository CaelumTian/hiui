Page({
    data: {
        checked: true
    },
    handleChange: function(event) {
        this.setData({
            checked: event.value
        })
    }
});