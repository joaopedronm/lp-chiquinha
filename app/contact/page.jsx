'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+55 (88) 98824-2039',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'contato@joaopedrodev.com.br',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Itarema-CE, BR',
  },
];

const Contact = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!firstname || !lastname || !email || !message) {
      alert("Please, fill in all fields.");
      setLoading(false)
      return;
    }

    const templateParams = {
      from_name: `${firstname} ${lastname}`,
      from_email: `${email}`,
      to_name: 'João Pedro',
      message: message,
    };

    try {
      await emailjs.send(
        "service_q1l1w6y",
        "template_sssi63v",
        templateParams,
        "5oRdzJvEjc7FLvZnH"
      );
      setSuccess(true);
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.3, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form
              onSubmit={handleSendMessage}
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
            >
              <h3 className='text-4xl text-accent'>Let’s Talk</h3>
              <p className='text-white/60'>Reach out and let’s make things happen.</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type="text"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* textarea */}
              <Textarea
                className='h-[200px]'
                placeholder='Type your message here.'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {/* button */}
              <Button type="submit" size="md" className="max-w-40" disabled={loading}>
                {loading ? 'Enviando...' : 'Send message'}
              </Button>

              {success && (
                <p className="text-accent">Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-[8px] flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-lg'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;