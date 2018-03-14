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
            this.$emit('applied')
        }
    }


});

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});