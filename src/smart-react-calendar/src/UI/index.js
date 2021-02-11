import styled from 'styled-components'

const MOBILE = '600px'

const CalendarStyled = styled.div`
    width: 100%;
    max-width: 500px;
    border-radius: 4px;
    position: relative;
    background: black;

    @media( max-width: ${MOBILE} ){
        max-width: 320px;
    }
`

const HeaderStyled = styled.div`
    background: #2e88f1;
    padding: 20px 30px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderYearStyled = styled.span`
    color: white;
    font-size: 16px;

    @media( max-width: ${MOBILE} ){
        font-size: 15px;
    }
`
const HeaderDateSelectedStyled = styled.p`
    color: white;
    font-weight: 600;
    font-size: 30px;

    @media( max-width: ${MOBILE} ){
        font-size: 22px;
    }
`
const HeaderBtnTodayStyled = styled.button`
    background: white;
    color: black;
    font-weight: 600;
    outline: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;

    @media( max-width: ${MOBILE} ){
        font-size: 12px;
    }
`


const WeekDaysStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    background: white;
    height: 50px;
    border: 1px solid #0e71e3;
`
const WeekDaysTextStyled = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #111d4a;
    font-weight: bold;
    margin: 0;
    padding: 0;

    font-size: 16px;

    @media( max-width: ${MOBILE} ){
        font-size: 12px;
    }
`

const CalendarDaysContainerStyled = styled.div`
    max-height: 300px;
    height: 100%;
    overflow-y: auto;

    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;

    position: relative;

    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0.8) 100%);
    padding-bottom: 20px;

    scroll-behavior: smooth;

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`


const MonthTitleStyled = styled.p`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background-color: #2e88f1;
    color: white;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : 0};
    margin-bottom: 10px;

    @media( max-width: ${MOBILE} ){
        font-size: 15px;
    }
`
const MonthContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`


const DayContainerStyled = styled.div`
    text-align: center;
    cursor: pointer;
    transition: background-color 200ms, color 200ms;

    display: flex;
    justify-content: center;
    align-items: center;
`
const DayStyled = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    color: #111d4a;
    font-size: 16px;

    ${props => props.state.includes('today') && `
        font-weight: bold;
        border: 1px solid #2e88f1;
        color: #2e88f1;
    `}
    ${props => props.state.includes('weekend') && `
    `}
    ${props => props.state.includes('selected') && `
        border-radius: 50%;
        font-weight: bold;
        background-color: #2e88f1;
        color: white;
    `}
    ${props => props.state.includes('disabled') && `
        cursor: default;
        color: #c2c2c2 !important;
    `}

    @media( max-width: ${MOBILE} ){
        width: 40px;
        height: 40px;
        font-size: 14px;
    }
`
export {
    CalendarStyled,
    HeaderStyled,
    HeaderYearStyled,
    HeaderDateSelectedStyled,
    HeaderBtnTodayStyled,
    WeekDaysStyled,
    WeekDaysTextStyled,
    CalendarDaysContainerStyled,
    MonthTitleStyled,
    MonthContainer,
    DayContainerStyled,
    DayStyled
}