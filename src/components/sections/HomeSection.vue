<script setup lang="ts">
import BaseButton from '../BaseButton.vue';
import { scrollToSection } from '../../utils/navigation';
import instagramIcon from '../../assets/images/social-images/instagram.svg';
import linkedinIcon from '../../assets/images/social-images/linkedin.svg';
import snapchatIcon from '../../assets/images/social-images/snapchat.svg';
import tiktokIcon from '../../assets/images/social-images/tiktok.svg';
import whatsappIcon from '../../assets/images/social-images/whatsapp.svg';
import behanceIcon from '../../assets/images/social-images/behance.svg';
import mainImage from '../../assets/images/caspper-with-laptop.png';
import sideImage from '../../assets/images/transparent-caspper.png';
import homeBg from '../../assets/images/home-bg.png';

type SocialLink = {
    title: string;
    image: string;
    link: string;
};

const socialLinks: SocialLink[] = [
    {
        title: 'Instagram',
        image: instagramIcon,
        link: 'https://instagram.com'
    },
    {
        title: 'LinkedIn',
        image: linkedinIcon,
        link: 'https://linkedin.com'
    },
    {
        title: 'Snapchat',
        image: snapchatIcon,
        link: 'https://snapchat.com'
    },
    {
        title: 'Tiktok',
        image: tiktokIcon,
        link: 'https://tiktok.com'
    },
    {
        title: 'Whatsapp',
        image: whatsappIcon,
        link: 'https://whatsapp.com'
    },
    {
        title: 'Behance',
        image: behanceIcon,
        link: 'https://behance.com'
    },
] as const;
</script>

<template>
    <section id="home" class="section home-section">
        <img :src="mainImage" alt="Caspper with laptop" class="home-main-image">
        <img :src="sideImage" alt="Transparent Caspper" class="home-side-image">
        <div class="content">
            <div class="description-container">
                <p class="animate-item">We craft bold creativity by cutting-edge tech to bring your digital dreams to
                    life.</p>
                <div class="navigation-btns animate-item">
                    <BaseButton @click="scrollToSection('contact')">Contact Us</BaseButton>
                    <BaseButton @click="scrollToSection('services')">Our Services</BaseButton>
                </div>
            </div>
            <div class="social-links">
                <a v-for="link in socialLinks" :key="link.title" :href="link.link" :title="link.title"
                    class="social-link animate-item">
                    <img :src="link.image" :alt="link.title">
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.home-section {
    background-image: url('@/assets/images/home-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--palette-blue-1);
    color: #fff;
    position: relative;
    overflow: hidden;
}

.home-main-image {
    position: absolute;
    bottom: 0;
    right: 130px;
    height: 100%;
    animation: slideUp 1.5s ease-out forwards, float 3s ease-in-out 1.5s infinite;
    z-index: 2;
}

.home-side-image {
    position: absolute;
    bottom: 0;
    right: 20px;
    height: 60%;
    animation: fadeIn 7s ease-out forwards, fadeInOut 4s ease-in-out 7s infinite;
    z-index: 1;
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(35px);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeInOut {
    0% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.5;
    }
}

.content {
    position: relative;
    z-index: 3;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px 0 270px;
}

.description-container {
    max-width: 500px;
}

p {
    max-width: 200px;
    font-size: 20px;
}


.navigation-btns {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.navigation-btn {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.navigation-btn:hover {
    transform: scale(1.05);
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.social-link {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease;
    border: 4px solid #fff;
    padding: 5px;
    border-radius: 20px;
}

.social-link:hover {
    transform: scale(1.2);
}

.social-link img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* ---------------------------- */
/* Responsive Styles            */
/* ---------------------------- */

@media (max-width: 768px) {
    .home-section {
        padding: 100px 10px;
    }

    .home-main-image {
        height: 50%;
        z-index: 0;
        right: 0;
    }

    .home-side-image {
        display: none;
    }

    .content {
        padding: 0 10px;
    }
}
</style>