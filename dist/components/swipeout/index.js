import Util from "../common/util.js";
Component({
    properties: {
        actions: {
            value: [],
            type: Array,
            observer: function(arr) {
                this._updateLimitSize();
            }
        },
        toggle : {
            value: false,
            type: Boolean,
            observer: function(arr) {
                this.closeButtonGroup();
            } 
        },
    },

    data: {
        startPos: {
            pageX: 0,
            pageY: 0
        },
        limitMove: 0,
        position: {
            pageX: 0
        }
    },
    
    ready() {
        this._updateLimitSize();
    },

    methods: {
        _updateLimitSize() {
            let actions = this.data.actions;
            if(actions.length > 0) {
                let limitMove = 0;
                actions.forEach(item => {
                    if(item.width === undefined) {
                        throw new Error("swipeout action width must be set");
                    }
                    limitMove += parseInt(item.width);
                })
                this.data.limitMove = limitMove;
            }
        },
        handleTouchStart(event) {
            let touches = event.touches[0];
            let startPos = this.data.startPos;
            startPos.pageX = touches.pageX;
            startPos.pageY = touches.pageY;
        },
        handleTouchMove(event) {
            let start = this.data.startPos;
            let touches = event.touches[0];
            let direction = Util.swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
            if(direction === 'Left') {
                this.move(touches);
            }
        },
        handleTouchEnd(event) {
            let start = this.data.startPos;
            let touches = event.changedTouches[0];
            let direction = Util.swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
            let nowPos = {
                pageX: touches.pageX - start.pageX
            };
            if(Math.abs(nowPos.pageX) >= 50 && direction === "Left") {
                nowPos.pageX = -this.data.limitMove;
            }else {
                nowPos.pageX = 0;
            }
            this.setData({
                'position': nowPos
            })
        },
        move(touches) {
            let startPos = this.data.startPos;
            let nowPos = {
                pageX: touches.pageX - startPos.pageX
            };

            if(Math.abs(nowPos.pageX) > this.data.limitMove) {
                nowPos.pageX = this.data.limitMove * -1;
            }

            if (
                (Math.abs(this.data.position.pageX) >= this.data.limitMove) || 
                (nowPos.pageX > this.data.limitMove)
            ) {
                return false;
            }

            this.setData({
                "position": nowPos 
            })
        },
        closeButtonGroup() {
            this.setData({
                "position": {
                    pageX: 0
                }
            })
        },
        handleItemClick(event) {
            this.triggerEvent("btnClick", {
                index: event.currentTarget.dataset.index
            })
        }
    }
});