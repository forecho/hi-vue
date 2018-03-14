Vue.component('message', {
    props: ['title', 'body'],

    data() {
        return {
            isShow: true
        }
    },
    template: `
        <article class="message" v-show="isShow">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" @click="isShow = false" aria-label="delete"></button>
                <button class="delete" @click="hideModal" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
        `,
    methods: {
        hideModal() {
            this.isShow = false;
        }
    }
});

new Vue({
    el: '#root',
});