<template>
    <div class="q-pa-xl">
        <h1>Page tuoriel</h1>

        <h2>Data & computed</h2>
        <h2>{{ message }}</h2>
        <h2>Reversed message : {{ messageReverse }}</h2>

        <q-btn @click="f" label="Change message"></q-btn>
        <q-btn @click="toggleHidden" label="Toggle hidden"></q-btn>

        <div v-if="visible">
            <h3>Hidden values</h3>
        </div>
        <div v-else>
            <h3>Some data are hidden</h3>
        </div>


        <h2>Loops</h2>
        <div v-for="(element, index) in arr" :key="index">
            <h3>{{ tasks.title }}</h3>
        </div>


        <h2>Inputs</h2>
        <h3>Hello {{name}}</h3>
        <input type="text" v-model="name">

        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">Checked {{checked}}</label>

        <select v-model="selected">
        </select>
    </div>
</template>

<script setup>
</script>

// Syntax vue2 Option API
<script>
    export default {
        data: () => ({
            visible: false,
            message: "Hello",
            name: 'Unknown',
            checked: false,
            tasks: [
                { title: 'Task 1' },
                { title: 'Task 2' },
                { title: 'Task 3' }
            ]
        }),
        computed: {
            messageReverse() {
                return this.message.split('').reverse().join('')
            }
        },
        methods: {
            f() {
                this.message = 'Test ah oui';
            },
            toggleHidden () {
                this.visible = !this.visible;
            }
        },
        watch: {
            message(oldVal, newVal) {
                console.log(oldVal, newVal);
            }
        }
    }
</script>