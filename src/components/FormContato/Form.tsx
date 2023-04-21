import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send("service_158b2pr", "template_1n3jw5e", templateParams, "uQvR74CnHp7UuLwak")
        .then((response) => {
            setName('')
            setEmail('')
            setMessage('')

            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            
        }, (err) => {
            console.log("ERRO, ", err)
        })

    }

    
    return (
        <FormContainer data-aos="fade-up" onSubmit={sendEmail}>
            
                <Input 
                type="text" 
                placeholder="Nome" 
                autoComplete='off' 
                onChange={(e) => setName(e.target.value)}
                value={name}
                required/>

                <Input 
                type="email"
                placeholder="E-mail" 
                autoComplete={"off"} 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>        

                <TextArea 
                type="textarea"
                placeholder="Mensagem" 
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required/>

                <button type="submit">ENVIAR</button>
            
        </FormContainer>
    )
}