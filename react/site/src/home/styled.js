import styled from 'styled-components'

const Content = styled.div`
    .content
    {
        background-color: #fefefe;
        display:flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        padding: 2em;
    }

    .inserir
    {
        display: flex;
        justify-content: center;
        padding-bottom: .5em;
    }

    .nome{
        color: #fff;
    }
    thead 
    {
        background-color: #a7a7a7
    }

    tbody
    {
        background-color: #F5F5F5;
    }

    table 
    {
        margin-top: 2em;
    }

    td 
    {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }

    th 
    {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #000;
        font-weight: 800;
    } 
`

const Container = styled.div`
    background-color: #0E0E0E;
    height: 100%;
    padding: 10em;

`

export {Content, Container}
