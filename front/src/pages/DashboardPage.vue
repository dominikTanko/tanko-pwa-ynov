<template>
    <div class="q-pa-xl">
        <h3>Dashboard</h3>

        <h1>Bonjour, Marc Dupont ! 👋</h1>

        <div>
            <h2>Courses</h2>
            <p>Cette liste ne contient aucune tâches ajoutez en une depuis la liste</p>
            <bouton label="Voir la liste complète"></bouton>
        </div>

        <div>
            <h2>Ecole</h2>
            <div v-for="(element, index) in arr" :key="index">
                <h3>{{ tasks.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<script>
    export default {
        data: () => ({
            tasks: [
                { title: 'Task 1' },
                { title: 'Task 2' },
                { title: 'Task 3' }
            ]
        })
    }
</script>