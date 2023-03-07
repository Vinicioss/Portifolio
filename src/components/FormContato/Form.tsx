import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
    return (
        <FormContainer data-aos="fade-up">
            
                <Input placeholder="Nome" autoComplete='off' required/>
                <Input placeholder="E-mail" type="email" autoComplete={"off"} required/>
                <TextArea placeholder="Mensagem" required/>
                <button type="submit">ENVIAR</button>
            
        </FormContainer>
    )
}