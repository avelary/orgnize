import * as S from "./style"

import { Button, ButtonVariations, Title } from "../../components"
import exit from "../../assets/exit.svg";
import orgnize from "../../assets/whiteorgnize.svg"
import { Column } from "./components";
import { CardState, useCards } from "../../context"
import { useAuth } from "../../context/auth";

export const Home = () => {
  const {logOut} = useAuth()
  const {updateCardState} = useCards()

  const columns = [
    {
      state: CardState.BACKLOG,
      title: "Backlog",
    },
    {
      state: CardState.IN_PROGRESS,
      title: "Fazendo",
    },
    {
      state: CardState.READY,
      title: "Pronto",
    },
    {
      state: CardState.IN_TEST,
      title: "Teste",
    },
    {
      state: CardState.APROVED,
      title: "Aprovado",
    },
  ]

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, cardId: string) => {
    e.dataTransfer.setData("cardId", cardId)
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>, newState: CardState) => {
    const cardId = e.dataTransfer.getData("cardId");
    updateCardState(cardId, newState)
  }

  return (
    <S.Container>
      <S.Header>
        <div></div>
        <Title />
        <Button onClick={logOut} variation={ButtonVariations.EXIT}>
          {" "}
          <img src={exit} alt="exit icon" /> sair
        </Button>
      </S.Header>
      <S.Main>
        {
          columns.map((column) => (
            <Column
              key={`key-${column.title}`}
              title={column.title}
              columnState={column.state}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
            />
          ))}
      </S.Main>
      <S.Footer>
        <img src={orgnize} alt="Orgnize Icon" />
      </S.Footer>
    </S.Container>
  )
}
