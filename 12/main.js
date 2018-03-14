window.Event = new Vue();

Vue.component('coupon', {
    template: `
        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Text input" @blur="onCouponApplied">
            </div>
        </div>
        `,
    methods: {
        onCouponApplied() {
            Event.$emit('applied')
        }
    }


});

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    created() {
        Event.$on('applied', () => {
            this.couponApplied = true;
        })
    }
});