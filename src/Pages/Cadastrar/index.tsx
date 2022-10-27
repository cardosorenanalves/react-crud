import { useState } from 'react'
import {
    Container,
    Title,
    SubTitle,
    Input,
    Button,
    Content,
    Label,
    InputDiv,
    DivTitle

} from './styles'

import axios from 'axios'
import { toast } from 'react-toastify'


export function Cadastrar(){
    const [name, setName] = useState<string>('')
    const baseURL = 'http://localhost:8080/clientes'

    function handleSubmit(){
        if(name != ''){
            try{
            axios
                .post(baseURL, {
                    name,
                })
                .then((response) => {
                response.status === 200 ? 
                  toast.success("Cadastrado com Sucesso!!") 
                  : toast.error('Algo deu errado, tente novamente!')
                })
                setName('')
            }catch(err){
        }
    }else{
        toast.error('Insira seu nome!')
    }
}
    return(
        <Container>
            <Content>
            <DivTitle>
                <Title>Cadastro de Clientes</Title>
                <SubTitle>Insira suas informações para realizar o cadastro</SubTitle>
            </DivTitle>
            <InputDiv>
                <Label>Nome</Label>
                <Input 
                placeholder='Digite seu nome'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </InputDiv>
            <Button
            onClick={handleSubmit}
            >Cadastrar</Button>
            </Content>
        </Container>
    )
}