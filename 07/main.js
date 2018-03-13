Vue.component('task-list', {
    template: `
            <ul>
                <task v-for="task in tasks" :key="task.description" > {{ task.description }}</task>
            </ul>
        `,
    data() {
        return {
            tasks: [{
                    description: 'first',
                    completed: true
                },
                {
                    description: 'second',
                    completed: false
                },
                {
                    description: 'third',
                    completed: true
                },
                {
                    description: 'fourth',
                    completed: false
                },
                {
                    description: 'fifth',
                    completed: false
                },
            ]
        };
    }
});


Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root',
});