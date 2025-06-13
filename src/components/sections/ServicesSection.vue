<script setup lang="ts">
import BaseButton from '../BaseButton.vue';

type Service = {
    title: string;
    desc: string;
    link: string;
};

const servicesList: Service[] = [
    {
        title: "Web & App Development",
        desc: "Custom, scalable, user-friendly solutions",
        link: ""
    },
    {
        title: "Digital Marketing",
        desc: "Growth-focused social media campaigns",
        link: ""
    },
    {
        title: "Outsourcing & IT Support",
        desc: "Flexible, skilled resource provision",
        link: ""
    },
    {
        title: "Graphic Design",
        desc: "Creative, professional, brand visuals",
        link: ""
    },
] as const;
</script>
<template>
    <section id="services" class="section services-section">
        <div class="services-grid">
            <div v-for="(service, index) in servicesList" :key="index" :href="service.link ? service.link : null"
                class="service-info-holder animate-item"
                :style="{ backgroundColor: 'var(--palette-blue-' + (index + 1) + ')' }">
                <div class="service-info">
                    <span>{{ index < 9 ? '0' + (index + 1) : (index + 1) }}</span>
                            <h2>{{ service.title }}</h2>
                            <p>{{ service.desc }}</p>
                            <BaseButton>Know more</BaseButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services-section {
    width: 100%;
    height: 100%;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    width: 100%;
}

.service-info-holder {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
}

.service-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
}

h2 {
    font-size: 30px;
    font-weight: 600;
}

/* ---------------------------- */
/* Responsive Styles            */
/* ---------------------------- */

/* Tablet */
@media (max-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile */
@media (max-width: 768px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}

/* Make font smaller and centered on smaller screens */
@media (max-width: 480px) {
    h2 {
        font-size: 22px;
    }

    p {
        font-size: 14px;
    }

    .service-info-holder {
        padding: 15px;
    }

    .service-info {
        padding: 90px 15px;
    }
}
</style>
