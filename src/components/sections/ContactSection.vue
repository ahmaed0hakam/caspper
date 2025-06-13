<!-- src/components/sections/ContactSection.vue -->
<template>
    <section id="contact" class="section contact-section">
        <div class="contact-content">
            <h2 class="contact-title">
                Contact us
            </h2>
            <img :src="peaceImage" alt="Peace Caspper" class="contact-main-image">

            <div class="contact-form-container">
                <p class="contact-form-title animate-item">
                    Let's connect and bring your ideas to life
                </p>
                <form @submit.prevent="sendEmail" class="contact-form animate-item">
                    <div class="contact-form-input-container">
                        <input type="text" placeholder="Name" v-model="formData.name" required :disabled="isSubmitting">
                        <input type="email" placeholder="Email" v-model="formData.email" required
                            :disabled="isSubmitting">
                    </div>
                    <textarea placeholder="How can we help!" v-model="formData.message" required
                        :disabled="isSubmitting"></textarea>
                    <div class="contact-form-button-container">
                        <button type="submit" :disabled="isSubmitting" class="contact-form-button">
                            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                        </button>
                    </div>
                </form>
                <div v-if="submitSuccess" class="success-message">
                    Thank you for your message! I'll get back to you soon.
                </div>
                <div v-if="submitError" class="error-message">
                    Sorry, there was an error sending your message. Please try again.
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import peaceImage from '../../assets/images/peace-caspper.png';

/**
 * Reactive object holding the form data for the contact form.
 * @property {string} name - The user's name
 * @property {string} email - The user's email address
 * @property {string} message - The user's message
 */
const formData = ref({
    name: '',
    email: '',
    message: ''
});

/**
 * Indicates if the form is currently being submitted.
 */
const isSubmitting = ref(false);

/**
 * Indicates if the form was submitted successfully.
 */
const submitSuccess = ref(false);

/**
 * Indicates if there was an error submitting the form.
 */
const submitError = ref(false);

/**
 * Submits the contact form data to a Google Form endpoint using a hidden iframe to prevent redirection.
 * Handles loading, success, and error states, and resets the form on success.
 *
 * @async
 * @function sendEmail
 * @returns {Promise<void>}
 */
const sendEmail = async () => {
    try {
        isSubmitting.value = true;
        submitError.value = false;
        submitSuccess.value = false;

        const formUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
        const nameId = import.meta.env.VITE_GOOGLE_FORM_NAME_ID;
        const emailId = import.meta.env.VITE_GOOGLE_FORM_EMAIL_ID;
        const messageId = import.meta.env.VITE_GOOGLE_FORM_MESSAGE_ID;

        const form = new FormData();
        form.append(nameId, formData.value.name);
        form.append(emailId, formData.value.email);
        form.append(messageId, formData.value.message);

        // Create a unique iframe name
        const iframeName = 'hidden_iframe_' + Date.now();
        const iframe = document.createElement('iframe');
        iframe.name = iframeName;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        const formElement = document.createElement('form');
        formElement.method = 'POST';
        formElement.action = formUrl;
        formElement.target = iframeName;
        formElement.style.display = 'none';

        for (const [key, value] of form.entries()) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value as string;
            formElement.appendChild(input);
        }

        document.body.appendChild(formElement);
        formElement.submit();

        setTimeout(() => {
            document.body.removeChild(formElement);
            document.body.removeChild(iframe);
        }, 1000);

        formData.value = {
            name: '',
            email: '',
            message: ''
        };

        submitSuccess.value = true;
    } catch (error) {
        console.error('Error submitting form:', error);
        submitError.value = true;
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.contact-section {
    padding: 150px;
    background-color: var(--palette-blue-4);
}

.contact-content {
    max-width: 1200px;
    padding: 0 20px;
    width: 100%;
}

.contact-form-title {
    margin-bottom: 20px;
    z-index: 2;
}

.contact-form-container {
    margin-top: 2rem;
    position: relative;
    z-index: 3;
    max-width: 500px;
}

.contact-form-input-container {
    display: flex;
    gap: 1rem;
}

.contact-main-image {
    position: absolute;
    bottom: 0;
    right: 130px;
    height: 80%;
}

.contact-title {
    font-size: 215px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 1;
    font-family: 'Inter', sans-serif;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
}

input,
textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: 'Inter', sans-serif;
    width: 100%;
}

textarea {
    height: 150px;
    resize: vertical;
}

.contact-form-button-container {
    display: flex;
    justify-content: flex-end;
}

.contact-form-button {
    background-color: var(--palette-blue-3);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid transparent
}

button:hover {
    background-color: var(--palette-blue-4);
    color: #fff;
    border-color: #fff;
}

.success-message {
    color: #4CAF50;
    padding: 1rem;
    background-color: #E8F5E9;
    border-radius: 4px;
    margin-top: 1rem;
    z-index: 4;
}

.error-message {
    color: #f44336;
    padding: 1rem;
    background-color: #FFEBEE;
    border-radius: 4px;
    margin-top: 1rem;
}

/* ---------------------------- */
/* Responsive Styles            */
/* ---------------------------- */

@media (max-width: 1550px) {
    .contact-title {
        font-size: 200px;
    }
}

@media (max-width: 768px) {
    .contact-section {
        padding: 80px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;

    }

    .contact-title {
        position: static;
        font-size: 48px;
        text-align: center;
        margin-bottom: 30px;
    }

    .contact-main-image {
        bottom: -135px;
        left: 0;
        height: 50%;
        z-index: 0;
    }
}

@media (max-width: 480px) {
    .contact-title {
        font-size: 42px;
    }

    .contact-form-title {
        font-size: 16px;
        text-align: center;
    }
}
</style>