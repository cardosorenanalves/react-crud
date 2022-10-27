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

export function Cadastrar(){
    return(
        <Container>
            <Content>
            <DivTitle>
                <Title>Cadastro de Clientes</Title>
                <SubTitle>Insira suas informações para realizar o cadastro</SubTitle>
            </DivTitle>
            <InputDiv>
                <Label>Nome</Label>
                <Input placeholder='Digite seu nome'/>
            </InputDiv>
            <Button>Cadastrar</Button>
            </Content>
        </Container>
    )
}