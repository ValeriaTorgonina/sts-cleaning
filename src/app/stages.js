import Vue from 'vue';
import AOS from 'aos';

Vue.directive('scroll', {
    inserted: function(el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        }
        window.addEventListener('scroll', f);
    }
})

export const ourServices = new Vue({
    el: "#stages",
    data: function() {
        return {
            elPosition: '0%'
        }
    },
    methods: {
        getPosition() {
            const elem = this.$el;
            const viewportHeight = window.innerHeight;
            const elemTopPos = elem.getBoundingClientRect().top + viewportHeight / 2;
            const positionInPercent = Math.abs(elemTopPos / viewportHeight * 100 - 100);
            if (positionInPercent > 100) {
                this.elPosition = '100%';
            } if (positionInPercent < 0) {
                this.elPosition = '0%';
            } else {
                this.elPosition = `${positionInPercent}%`;
            }
        }
    }
})

AOS.init();