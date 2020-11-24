import Vue from 'vue';

const MENU_STATES = {
    OPEN: 'open',
    CLOSE: 'close',
};

export const menu = new Vue({
    el: '.main-header',
    data: function () {
        return {
            menuState: MENU_STATES.CLOSE,
        };
    },
    methods: {
        toggleMenu() {
            if (this.menuState === MENU_STATES.OPEN) {
                this.menuState = MENU_STATES.CLOSE;
                document.body.style.overflow = 'auto';
            }else if(this.menuState === MENU_STATES.CLOSE) {
                this.menuState = MENU_STATES.OPEN;
                document.body.style.overflow = 'hidden';
            }
        },
    },
});
