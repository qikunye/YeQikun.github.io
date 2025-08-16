<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <!--
        Use a form element with a submit handler. The @submit.prevent directive
        stops the page from reloading and calls our sendEmail method instead.
      -->
      <form class="space-y-8" @submit.prevent="sendEmail">
        <div v-for="(item, index) in inputs" :key="index">
          <!--
            Bind each input to the corresponding field on the `form` object using v-model.
            Pass through the placeholder and rows from the config array so that each
            component renders correctly.
          -->
          <Input
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
            v-model="form[item.id]"
          />
        </div>
        <div class="flex justify-between">
          <!--
            The Button component accepts an onClick prop. We pass our sendEmail
            function so that clicking the button also triggers the email sending
            logic. Using both the form submit handler and this click handler
            allows users to submit the form via Enter key or by clicking.
          -->
          <Button label="Send" :onClick="sendEmail" />
          <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
            <!-- Social links -->
            <a
              href="https://www.linkedin.com/in/ye-qikun-887aa0265"
              class="text-gray-600 hover:text-blue-700"
            >
              <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
            </a>
            <a href="https://github.com/qikunye" class="text-gray-600 hover:text-blue-800">
              <Icon icon="fa-brands:github" style="font-size: 2rem" />
            </a>
            <a
              href="https://www.instagram.com/kunsanity?igsh=MTRlb2FsYjh6bng4cg%3D%3D&utm_source=qr"
              class="text-gray-600 hover:text-pink-500"
            >
              <Icon icon="fa-brands:instagram" style="font-size: 2rem" />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';
import { ref, reactive } from 'vue';
import emailjs from '@emailjs/browser';

// Define the configuration for each field. id corresponds to the key
// in the reactive `form` object below.
const inputs = ref([
  { id: 'email', label: 'Your email', type: 'email', placeholder: 'email@example.com', rows: undefined },
  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Let us know how we can help you', rows: 6 },
  { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Leave a comment', rows: 6 },
]);

// Reactive form state that stores the current values of the inputs. The keys
// correspond to the ids defined in the inputs array above.
const form = reactive({
  email: '',
  subject: '',
  message: '',
});

/**
 * Send the contents of the contact form using EmailJS. Replace the
 * placeholder values (YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY) with
 * the actual identifiers from your EmailJS account. Your email template on
 * EmailJS should have matching variables for `from_name`, `subject` and
 * `message`. See https://www.emailjs.com/docs/sdk/send/ for more details.
 */
function sendEmail() {
  // TODO: replace these with your own EmailJS service ID, template ID and public key
  const serviceId = 'service_mu7d6u5';
  const templateId = 'template_ksz3oar';
  const publicKey = 'EKkN_shDCdQb_FS9k';
  // Build the parameters expected by your template. The keys here should
  // correspond to variables defined in your EmailJS template.
  const templateParams = {
    from_name: form.email,
    subject: form.subject,
    message: form.message,
  };
  // Use the EmailJS SDK to send the email. Provide the publicKey as part
  // of the options object. See the EmailJS docs for more usage examples.
  emailjs
    .send(serviceId, templateId, templateParams, { publicKey })
    .then(() => {
      // Provide feedback to the user when the email is sent successfully
      alert('Your message has been sent successfully!');
      // Reset the form fields
      form.email = '';
      form.subject = '';
      form.message = '';
    })
    .catch((error) => {
      console.error('Failed to send message', error);
      alert('There was an error sending your message. Please try again later.');
    });
}
</script>
