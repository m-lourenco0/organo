import './style.css'
import TextInput from '../TextInput'
import Select from '../Select'
import Button from '../Button'

const Form = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulário enviado');
    }


    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput label={'Nome'} placeholder={'Digite seu nome'} />
                <TextInput label={'Cargo'} placeholder={'Digite seu cargo'} />
                <TextInput label={'Imagem'} placeholder={'Digite o endereço da imagem'} />
                <Select label={'Time'} />
                <Button >
                    {'Criar Card'}
                </Button>
            </form>
        </section>
    )
}

export default Form