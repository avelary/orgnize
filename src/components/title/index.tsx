import * as S from './style'
import orgnize from "../../assets/orgnize.svg"

export const Title = () => {
    return (
        <S.Container>
            <h1>ORGNIZE</h1>
            <img src={orgnize} alt="Orgnize Icon" />
        </S.Container>
    )
}