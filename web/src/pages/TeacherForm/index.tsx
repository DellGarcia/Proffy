import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems, {week_day: 0, from: '', to: ''}]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preeencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <TextArea name="bio" label="Biografia"/>

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria" options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Matemática', label: 'Matemática'},
                        { value: 'Português', label: 'Português'},
                        { value: 'Literatura', label: 'Literatura'},
                        { value: 'Química', label: 'Química'},
                        { value: 'Física', label: 'Física'},
                        { value: 'Sociologia', label: 'Sociologia'},
                        { value: 'Filosofia', label: 'Filosofia'},
                        { value: 'Gegrafia', label: 'Gegrafia'},
                        { value: 'História', label: 'História'},
                        { value: 'Ed. Física', label: 'Ed. Física'},
                    ]}/>
                    <Input name="cost" label="Custo da sua hora por aula"/>

                </fieldset>

                <fieldset>
                    <legend>
                        Horário disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select name="week_day" label="Dia da semana" options={[
                                    { label: '0', value: 'Domingo'},
                                    { label: '1', value: 'Segunda-feira'},
                                    { label: '2', value: 'Terça-feira'},
                                    { label: '3', value: 'Quarta-feira'},
                                    { label: '4', value: 'Quinta-feira'},
                                    { label: '5', value: 'Sexta-feira'},
                                    { label: '6', value: 'Sábado'},
                                ]}/>
                                <Input name="from" label="Das" type="time"/>
                                <Input name="to" label="Até" type="time"/>
                            </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importantante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;