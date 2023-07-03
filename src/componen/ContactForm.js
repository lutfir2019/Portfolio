import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await axios.post('http://localhost:3001/send-email', {
                name,
                email,
                message,
            });
            Swal.fire({
                icon: 'success',
                title: 'Pesan berhasil dikirim!',
                text: 'Terima kasih atas pesan Anda.',
            });
            resetForm();
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Terjadi kesalahan',
                text: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
            });
        }

        setIsSending(false);
    };

    return (
        <form className="contact-form" onSubmit={handleFormSubmit}>
            <h2 className='form-title'>Berikan Masukan Anda</h2>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}

export default ContactForm;
