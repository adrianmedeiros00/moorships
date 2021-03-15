import React from 'react'
import { HeaderTableTitle, Row, Column } from './styles'


const HeaderTable = (props) => {
    return (
        <>
            <HeaderTableTitle>
                <Row>
                    <Column>{props.navio}</Column>
                </Row>
            </HeaderTableTitle>
            <HeaderTableTitle>
                <Row>
                    <Column>{props.berco}</Column>
                </Row>
            </HeaderTableTitle>
            <HeaderTableTitle>
                <Row>
                    <Column>{props.entrada}</Column>
                </Row>
            </HeaderTableTitle>
            <HeaderTableTitle>
                <Row>
                    <Column>{props.saida}</Column>
                </Row>
            </HeaderTableTitle>
            <HeaderTableTitle>
                <Row>
                    <Column>{props.id}</Column>
                </Row>
            </HeaderTableTitle>
        </>
    )
}

export default HeaderTable