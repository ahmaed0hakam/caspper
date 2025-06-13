<script setup lang="ts">
import coolAfImage from '../../assets/images/cool-af-caspper.png';
</script>

<template>
    <section id="about" class="section about-section">
        <img :src="coolAfImage" alt="Cool AF Caspper" class="about-main-image">
        <h2 class="about-title">
            About us
        </h2>
        <div class="content">
            <div class="description-container">
                <p class="animate-item">At Cassper, we specialize in building custom software solutions and providing
                    flexible IT outsourcing
                    services. Our experienced team delivers high-quality development, design, and support tailored to
                    your business needs.</p>
                <p class="animate-item">We act as an extension of your team, helping you scale efficiently without the
                    overhead of full-time
                    hires. Our goal is to empower your business with reliable technology and expert resources for
                    long-term growth.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-section {
    padding: 150px;
    background-color: var(--palette-blue-3);
}

.about-title {
    font-size: 215px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 2;
    font-family: 'Inter', sans-serif;
}

.about-main-image {
    position: absolute;
    bottom: 0;
    right: 130px;
    height: 100%;
}

.description-container {
    max-width: 700px;
}

p {
    font-size: 20px;
    margin-bottom: 30px;
}

/* ---------------------------- */
/* Responsive Styles            */
/* ---------------------------- */

/* Tablet */
@media (max-width: 1024px) {
    .about-title {
        font-size: 180px;
    }

    .about-main-image {
        height: 70%;
        right: 30px;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .about-section {
        padding: 80px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .about-title {
        position: static;
        font-size: 48px;
        text-align: center;
        margin-bottom: 30px;
    }

    .about-main-image {
        height: 50%;
    }

    .description-container {
        padding: 0;
    }

    p {
        font-size: 16px;
        text-align: center;
    }
}

/* Extra Small */
@media (max-width: 480px) {
    .about-title {
        font-size: 36px;
    }

    p {
        font-size: 15px;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    }
}
</style>