'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaEnvelope, FaMapMarkedAlt, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Modal from '@/components/Modal';

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'chiquinhadopixica@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Endereço',
    description: 'Av. João Batista Rios, S/N - Centro, Itarema - CE',
  },
  {
    icon: <FaComments />,
    title: 'Atendimento',
    description: 'Segunda a Sexta, 8h às 17h',
  },
];

const contactSubjects = [
  { value: 'duvida', label: 'Dúvida' },
  { value: 'sugestao', label: 'Sugestão' },
  { value: 'reclamacao', label: 'Reclamação' },
  { value: 'elogio', label: 'Elogio' },
  { value: 'outro', label: 'Outro assunto' },
];

const Contact = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('duvida');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  console.log(firstname)

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!firstname || !lastname || !email || !message) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    const templateParams = {
      firstname: `${firstname} ${lastname}`,
      email: email,
      phone: phone,
      subject: contactSubjects.find(item => item.value === subject)?.label || subject,
      to_name: 'Vereadora',
      message: message,
    };

    try {
      await emailjs.send(
        "service_p56rvhl", // Substitua pelo seu Service ID
        "template_ebykfvt", // Substitua pelo seu Template ID
        templateParams,
        "jAUCqPtAtjWMcq7MB" // Substitua pelo seu User ID
      );
      setSuccess(true);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setSubject("duvida");
      setMessage("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar mensagem", error);
      alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
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
              className='flex flex-col gap-6 p-10 bg-white rounded-xl border border-primary/20'
            >
              <h3 className='text-4xl text-primary'>Ouvidoria</h3>
              <p className='text-black/90 text-xl'>Entre em contato com o gabinete da vereadora</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type="text"
                  placeholder="Nome *"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Sobrenome *"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Assunto */}
              <div className="w-full">
                <label className="text-base text-black/90 mb-2 block">Assunto *</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="flex h-[48px] w-full rounded-[8px] border border-black/50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  {contactSubjects.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* textarea */}
              <Textarea
                className='h-[200px]'
                placeholder='Digite sua mensagem aqui *'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              {/* button */}
              <Button type="submit" size="md" className="max-w-40" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar mensagem'}
              </Button>

              {success && (
                  <Modal 
                    onClose={() => setSuccess(false)}
                    title="Mensagem enviada!"
                    description="Retornaremos o contato assim que possível."
                    buttonText="Fechar"
                  />
                // <p className="text-accent">Mensagem enviada com sucesso!</p>
              )}
            </form>
          </div>

          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-white border border-primary/20 text-accent rounded-[8px] flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-black/60'>{item.title}</p>
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