import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
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
                    <Select name="week_day" label="Dia da semana" options={[
                        { label: '0', value: 'Domingo'},
                        { label: '1', value: 'Segunda-feira'},
                        { label: '2', value: 'Terça-feira'},
                        { label: '3', value: 'Quarta-feira'},
                        { label: '4', value: 'Quinta-feira'},
                        { label: '5', value: 'Sexta-feira'},
                        { label: '6', value: 'Sábado'},
                    ]}/>
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;